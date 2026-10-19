# The mesh pipeline and the asset editors

This page is the technical side of [Supported files and best practice](/basic/assets/file-types) and the [asset walkthrough](/basic/assets/walkthrough): how a mesh file becomes a `Mesh` on a character, where its settings and its skin live, how the libraries read their folders, and what each asset editor is made of.

## From a file to a mesh on a character

```text
 path in the data ──► MeshSource.load_mesh(path)
                        │  .tres .res .obj      load(path) as Mesh
                        │  .glb .gltf .fbx .blend  load as PackedScene ► the one MeshInstance3D ► its mesh (+ its skin)
                        ▼
                      MeshSettings.apply_to(mesh, path)   (formats that cannot save: the stored settings become metadata)
                        ▼
                      the cached Mesh, with metadata  ──►  DatabaseMeshes / EntityRigComponent / the editors
                                                            ▼
                                                    GeneralSkeleton / ModularSkeleton._apply_mesh_to_*
```

| Class | Role |
|---|---|
| [`MeshSource`](/advanced/assets/meshes/mesh-source) (`runtime_classes/utility/mesh_source.gd`) | The one place that loads a mesh file. `EXTENSIONS` and `SCENE_FORMATS` list the file types. `load_mesh(path)` returns the mesh (or `null`), `load_skin(path)` its skin (or `null`), `mesh_node_count(path)` how many mesh nodes a model holds, `clear_cache()` forgets the loaded meshes |
| [`MeshSettings`](/advanced/assets/meshes/mesh-settings) (`data_classes/meshes/mesh_settings.gd`) | The settings of the meshes that cannot keep them in their own file. `save_mesh(mesh, path)` is the one call the editors make after changing a setting |
| [`DatabaseMeshes`](/advanced/data-and-database/asset-database-classes/database-meshes) | Scans the folders (`MESH_EXTENSIONS`), answers `get_body_part_mesh_and_skin`, `get_attachment_mesh_and_skin`, `get_weapon_mesh` ..., validates the library |
| [`ModelSceneDatabase`](/advanced/data-and-database/asset-database-classes/model-scene-database) | Skeletons and interactable models (`.tscn`); keeps the supported skeleton types of a mesh through `MeshSettings.save_mesh` |
| [`ExtendedSkinService`](/advanced/assets/rig/extended-skin-service) | Remaps a skin onto the bones of a skeleton |

### Loading a model that is a scene

A `.glb`, `.gltf`, `.fbx` or `.blend` file is imported by Godot as a `PackedScene`. `MeshSource` instantiates it, collects the `MeshInstance3D` nodes (the root included), takes the **first** one's `mesh` and `skin`, and frees the instance. The mesh is cached per path, so the scene is instantiated once. With more than one mesh node it warns and uses the first; `DatabaseMeshes.validate_database()` returns a `MESH_NODE_COUNT` warning for every model whose count is not 1. A `.blend` that Godot could not import (no Blender) does not exist for `ResourceLoader` and gives no mesh.

### Settings are metadata

The toolkit reads every mesh setting as **metadata of the `Mesh`**: `mesh.get_meta("position_offset")` and so on. For a resource mesh the metadata is inside the file. For anything else `MeshSource.load_mesh` calls `MeshSettings.apply_to`, which sets the stored values as metadata on the loaded mesh (a value the mesh already has is kept). So the skeleton classes, the rig, the item editors and the preview never know which way a setting is kept.

| Key | Type | Used by |
|---|---|---|
| `position_offset` | `Vector3` | The weapon's position in the hand ([`GeneralSkeleton._apply_weapon_transform_offset`](/advanced/assets/rig/general-skeleton)) |
| `rotation_offset` | `Vector3` (degrees) | The weapon's rotation |
| `enchant_vfx_position` | `Vector3` | Copied to the weapon's `MeshInstance3D` as metadata for the enchant VFX |
| `projectile_spawn_point` | `Vector3` | Copied to the weapon's `MeshInstance3D`; where shots leave |
| `supported_skeleton_types` | `Array[String]` | `ModelSceneDatabase.does_mesh_support_skeleton_type`; all types when absent |
| `skin` | `Skin` | The skin of the piece (see below) |
| `allowed_materials_surface_<n>`, `preferred_material_surface_<n>` | `Array`, `String` | The material constraints of surface `n` |
| `allowed_materials`, `preferred_material`, `material_categories` | | The older whole-mesh settings (the editor can remove them) |

`MeshSettings.save_mesh(mesh, path)` persists **all the metadata the mesh has now** (names that start with `_` are left out): into the file with `ResourceSaver.save` for `.tres` and `.res`, and into `res://src/data/meshes/mesh_settings.tres` for every other format. Because it saves the whole set, removing a key from the mesh removes it from the storage too.

### Why not convert to .res

`ResourceSaver.save` on a mesh loaded from an `.obj` (or from any imported file) returns `ERR_FILE_UNRECOGNIZED` and writes nothing: Godot owns the import. A converted `.res` copy would be a second file that stops following its source, breaks references when the source is re-exported (Godot reports an invalid UID and falls back to the path), and is tied to the Godot version. So the settings stay beside the source, keyed by its **UID**:

- `MeshSettings.key_of(path)` is `ResourceUID.id_to_text(ResourceLoader.get_resource_uid(path))`, or `"path:" + path` for a file with no UID.
- The UID is written in the `.import` file and follows the file when it is moved or renamed in the Godot file system dock. Each entry also remembers the last path.
- `MeshSettings.orphans()` lists entries whose file is gone (by UID, then by path); `validate_database` reports them as `ORPHAN_MESH_SETTINGS`.

## Skins

A skin is optional. The skeleton classes (`GeneralSkeleton._apply_mesh_to_attachment`, [`ModularSkeleton._apply_mesh_to_instance`](/advanced/assets/rig/modular-skeleton)) do this when a mesh is applied:

1. `mesh_instance.mesh = mesh`.
2. The skin is the one passed in, else `mesh.get_meta("skin")` (duplicated, so instances do not share it).
3. With a skin: `_remap_skin_for_skeleton(skin)` and `mesh_instance.skin = remapped`. **Without one: `mesh_instance.skin = null`** and the mesh is drawn as it is. Nothing warns.

`MeshSource.load_mesh` puts a `skin` in the metadata of a model when its mesh node has one (and the settings give none). `DatabaseMeshes` also looks for the companion file (`<name>_skin.<extension>`, with `_mesh` replaced by `_skin`) when it answers `get_body_part_mesh_and_skin` and its siblings, and the mesh editor's **Find & Link All Skins** writes the companion skin into the metadata.

### Remapping

`_remap_skin_for_skeleton` returns the skin untouched when it already has Godot humanoid bone names (it looks for `Hips`, `Spine`, `Chest`, `Head`, `LeftUpperArm`, `RightUpperArm`). Otherwise `ExtendedSkinService.remap_all_bones_in_skin(skin, skeleton)` builds a new `Skin`:

1. Each bind name goes through `get_mapped_bone_name`: a table from the bone names of the asset packs the toolkit was made with (`pelvis` → `Hips`, `spine_01` → `Spine`, `upperarm_l` → `LeftUpperArm`, `thigh_r` → `RightUpperLeg`, the fingers, `eye_l` ...). Names not in the table stay as they are.
2. If the skeleton has no such bone, `get_fallback_bone_name_with_remapping` chooses one from the name: `hair_dyn*` → `Head`, `hips_dyn*`, `cloth_dyn*`, `skirt_dyn*` → `Hips`, `cape_dyn*`, `cloak_dyn*` → `UpperChest`, `arm_dyn*` and `leg_dyn*` → the matching limb bone, other `*_dyn*` → `UpperChest`, weapon and shield bones → the hands, the `*Attach*` bones → the attachment bones of the skeleton.
3. The bind pose of each bone is recomputed from the skeleton: `skeleton.get_bone_global_rest(bone).inverse()`, so the piece fits whatever rest pose the skeleton has.
4. A bone that cannot be mapped is left out. If the whole remap fails, `get_working_skin()` returns `res://skin_working.tres` if the project has it (it logs an error if not) and the skeleton keeps the original skin.

To support the bone names of another pack, add them to `get_mapped_bone_name` (or give the pieces Godot humanoid names and no remap is needed).

## How the libraries read their folders

Each library walks its folders with `DirAccess` and keeps what it finds in static dictionaries, filled once and refreshed by the editor's **Refresh** (`refresh_database()`):

| Library | Class | Files | Layout |
|---|---|---|---|
| Meshes | `DatabaseMeshes` | `MESH_EXTENSIONS` | `equipment/weapons/<category>/`, `equipment/body_parts/<tag>/<part>/`, `equipment/attachments/<tag>/<slot>/`, `facial/<tag>/<feature>/`, `materials/<category>/` |
| Model scenes | `ModelSceneDatabase` | `.tscn` | `skeletons/`, `interactable_models/` |
| Animations | [`DatabaseAnimation`](/advanced/data-and-database/asset-database-classes/database-animation) | `.res`, `.anim` | `<entity type>/<package>/<category>/[<subcategory>/]` (four structure patterns), `animation_map.tres` |
| VFX | [`DatabaseVFX`](/advanced/data-and-database/asset-database-classes/database-vfx) | `.tscn` (scenes), `.tres .res .png .jpg .jpeg .webp` (telegraph), `.tres .res` (material) | One folder for each of the seven types |
| Audio | [`DatabaseAudio`](/advanced/data-and-database/asset-database-classes/database-audio) | `.wav .ogg .mp3` | `SFX_CATEGORIES`; `voicelines/<character>/[<language>/]` |
| Icons | [`DatabaseIcons`](/advanced/data-and-database/asset-database-classes/database-icons) | `.png .jpg .jpeg .svg .webp` | `icons/<category>/<id>.<ext>` |
| Albums | `DatabaseAudio` | `.tres` | `albums/` |

`DatabaseMeshes._get_files_in_folder` strips `.import` and `.remap` from the names it lists, so a mesh is found in the editor (where Godot keeps `foo.glb.import` beside `foo.glb`) and in an exported game (which lists `foo.glb.import`). The other libraries still compare the plain extension: **test an export** of a project that scans folders at run time before you ship it. Giving every scan the same cleaning is not done yet.

## The editors in detail

All seven extend `VBoxContainer` and live in `editor_components/editors/assets/`. They share a shape: a search box and a refresh button, a tree or a list built from the library's calls, a settings menu, an import dialog that copies files and asks for a destination, and a validation function whose findings are shown in a dialog. The scenes use unique names (`%Name`).

| Editor | What it edits | Calls and files | Validation |
|---|---|---|---|
| [`MeshDatabaseEditor`](/advanced/editor/assets/mesh-database-editor) | Meshes: the tree, the info panel, material constraints by surface, weapon offsets and points | Loads with `MeshSource.load_mesh`, saves with `MeshSettings.save_mesh`; `_find_and_link_all_skins`; thumbnails by `DatabaseMeshes` | `DatabaseMeshes.validate_database`: missing files, mesh node counts, orphan settings |
| [`ModelSceneDatabaseEditor`](/advanced/editor/assets/model-scene-database-editor) | Skeleton and interactable scenes | [`SkeletonSceneConverter`](/advanced/editor/tools/skeleton-scene-converter), [`InteractableSceneCreator`](/advanced/editor/tools/interactable-scene-creator); opens a scene in the 3D editor | `_validate_skeleton_nodes`: the required nodes of the kind |
| [`AnimationDatabaseEditor`](/advanced/editor/assets/animation-database-editor) | Entity types, their parents and the animation map | [`CorePackageEditor`](/advanced/editor/assets/core-package-editor) builds the map's drop-downs by reflection of [`AnimationCoreMap`](/advanced/assets/albums/animation-core-map); `DatabaseAnimation.build_library_for_entity` | `_validate_entity`, `_validate_core_animations`, `_validate_status_effects` |
| [`VFXDatabaseEditor`](/advanced/editor/assets/vfx-database-editor) | VFX by type | `_create_new_vfx_scene` makes the root node of a type; `_perform_vfx_import` | `_validate_single_vfx`, `_validate_telegraph_vfx`, `_validate_material_vfx` |
| [`AudioDatabaseEditor`](/advanced/editor/assets/audio-database-editor) | Sounds by category; a **voice line panel** (languages, warnings, subtitle) | `DatabaseAudio`; [`VoicelineSubtitles`](/advanced/world/audio-profiles/voiceline-subtitles); `voice_line_warnings`, `set_subtitle`, `import_language_recording` are static and testable | `_validate_database`: every file loads |
| [`AlbumDatabaseEditor`](/advanced/editor/assets/album-database-editor) | World and interface albums | `DatabaseAudio` album calls | none |
| [`IconDatabaseEditor`](/advanced/editor/assets/icon-database-editor) | Icons as a grid by category | `DatabaseIcons.import_icons_to_category` numbers the files | Missing ids are shown as "ID n (Not Found)" where used |

### Adding to the mesh editor

| You want | Do |
|---|---|
| **A new mesh setting** | Read it from the metadata where it is used (`mesh.get_meta("my_setting")`), and in the editor set it with `mesh.set_meta` then call `MeshSettings.save_mesh(mesh, path)`. It is stored in the file or in the settings file by itself |
| **A new file type** | Add it to `MeshSource.EXTENSIONS` (and to `SCENE_FORMATS` if Godot imports it as a scene) and to `DatabaseMeshes.MESH_EXTENSIONS`, and to the filters of the import dialog |
| **A pack with other bone names** | Add the names to `ExtendedSkinService.get_mapped_bone_name` |

## See also

- [Assets: how they are built](/advanced/assets/) for the users of the libraries.
- [Localization: voice lines in other languages](/basic/game-settings/localization#voice-lines-in-other-languages) for the language folders of the audio library.
