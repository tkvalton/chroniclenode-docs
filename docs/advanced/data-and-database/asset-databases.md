# Asset databases

Animations, sounds, visual effects, meshes, model scenes and icons are not resources of the [Database](/advanced/data-and-database/database-classes/database). They are **files in folders**, and each kind has a small class that reads its folder and answers questions about what is there.
They are what you manage in the **Assets** category of the editor: [Model Scenes](/basic/assets/model-scenes), [Meshes](/basic/assets/meshes), [Animations](/basic/assets/animations), [VFX](/basic/assets/vfx), [Audio](/basic/assets/audio), [Albums](/basic/assets/albums) and [Icons](/basic/assets/icons).

## What they have in common

- **Static classes.** There is nothing to instantiate: `DatabaseVFX.get_vfx_scene("oneshot", "fireball")`.
- **Scanned once, on first use.** The first call runs `ensure_initialized`, which makes the folders that are missing and reads them into dictionaries kept in static variables. After adding or removing files call the class's `refresh_database()` (the editor does it for you).
- **The folder is the data.** An entry is a file, and what you call it is the file name (without the extension). A folder name is a category, a type or a tag, depending on the library. There are no ids, except for icons, where the file name is the id.
- **Folders under `res://src/data/`.** They sit next to the resource folders of the database but are read by their own class.

| Library | Class | Folder | Files |
|---|---|---|---|
| Animations | [DatabaseAnimation](/advanced/data-and-database/asset-database-classes/database-animation) | `src/data/animations/` | `.res`, `.anim` |
| Audio and albums | [DatabaseAudio](/advanced/data-and-database/asset-database-classes/database-audio) | `src/data/audio/` | `.wav`, `.ogg`, `.mp3`; album resources |
| Visual effects | [DatabaseVFX](/advanced/data-and-database/asset-database-classes/database-vfx) | `src/data/vfx/` | Scenes, materials, textures by type |
| Meshes and materials | [DatabaseMeshes](/advanced/data-and-database/asset-database-classes/database-meshes) | `src/data/meshes/` | `.tres`, `.res`, `.obj` |
| Model scenes | [ModelSceneDatabase](/advanced/data-and-database/asset-database-classes/model-scene-database) | `src/data/meshes/skeletons/`, `src/data/meshes/interactable_models/` | `.tscn` |
| Icons | [DatabaseIcons](/advanced/data-and-database/asset-database-classes/database-icons) | `src/data/icons/` | Images named by number |

## Animations

`DatabaseAnimation` reads `src/data/animations/<entity type>/<package>/...`.

- The first level is an **entity type** (humanoid, monster ...), one folder each.
- Inside it are **packages**. Only the packages listed in `ANIMATION_PACKAGES` are read: *ability_animations* (casting, special_attack, spell_cast, weapon, aim, reload), *core* (movement, combat_system, death, interact), *social* (actions, emotes, random) and *status_effects*.
- A package is laid out in one of a few **structures**: `flat` (one folder of animation files), `categorized` (category folders with subcategory folders), `flat_categorized` (category folders that hold several animations, one of which is chosen at random), `three_phase` (a start, a loop and an end) or `mixed` (each category has its own structure).
- Each entity type has an **`animation_map.tres`** (an [`AnimationCoreMap`](/advanced/assets/albums/animation-core-map), made automatically when it is missing). It can name a **parent package**, and an entity type that does not have an animation takes it from its parent: `get_animations` and `get_flat_category_animations` fall back to the parent, `get_inheritance_chain` returns the whole chain,
  and `build_library_for_entity` builds an `AnimationLibrary` that holds the animations of the entity and of its parents.

## Audio and albums

`DatabaseAudio` reads `src/data/audio/`. The folders are described by `SFX_CATEGORIES`, each with a **pattern** that says how its folder is organised:

| Pattern | Layout | Used by |
|---|---|---|
| `LOOP_NONLOOP` | `loop/` and `non_loop/` subfolders | music, atmospheric_ambience |
| `ENUM_FOLDERS` | one subfolder for each value of an enum (a sound type), with the files in it | ui_sfx, entity_voices, voicelines, motion, casting, cast, shoot, impact, status_effects, environmental, interactables |
| `FLAT_FILES` | the files directly in the folder, the file name is the key | loop, spawns |

Footsteps (`motion`) are `entity / footsteps / surface / movement`, combat voices `entity / voice variant / action`, and voicelines `character / files`. Files are `.wav`, `.ogg` or `.mp3`.

The same class keeps the **albums**, which are resources (not part of the registry of the Database) in `src/data/audio/albums/`:

- The four **built-in UI albums**: main menu, character creation, pause menu and loading screen. They are made when missing (`get_ui_album`).
- **Custom UI albums** (`create_custom_ui_album`, `save_ui_album`, `delete_custom_ui_album`).
- **World albums** ([`AudioAlbum`](/advanced/assets/albums/audio-album)) in `world_albums/`, with create, save, delete, duplicate and validate functions (`create_world_album`, `save_world_album`, `delete_world_album`, `duplicate_world_album`, `validate_all_world_albums`).

## Visual effects

`DatabaseVFX` reads `src/data/vfx/<type>/`, and subfolders are scanned too. The seven types, and the class each one maps to, are fixed in `VFX_TYPES` and `VFX_CLASS_MAPPING`:

| Type folder | Class | Files |
|---|---|---|
| `oneshot` | [`VFXOneShot`](/advanced/assets/vfx/vfx-one-shot) | `.tscn` |
| `loop` | [`VFXLoop`](/advanced/assets/vfx/vfx-loop) | `.tscn` |
| `beam` | [`VFXPointToPointBeam`](/advanced/assets/vfx/vfx-point-to-point-beam) | `.tscn` |
| `path` | [`VFXPointToPointPath`](/advanced/assets/vfx/vfx-point-to-point-path) | `.tscn` |
| `weather` | [`VFXWeather`](/advanced/assets/vfx/vfx-weather) | `.tscn` |
| `telegraph` | [`VFXTelegraph`](/advanced/assets/vfx/vfx-telegraph) | `.tres`, `.res`, images |
| `material` | [`VFXMaterial`](/advanced/assets/vfx/vfx-material) | `.tres`, `.res` |

A folder with another name is reported as an unknown type and skipped. `get_vfx_scene`, `get_vfx_material` and `get_vfx_resource` load an entry by type and name; `get_random_vfx` picks one of a type.

## Meshes and materials

`DatabaseMeshes` reads `src/data/meshes/`:

| Folder | Holds | Layout |
|---|---|---|
| `equipment/weapons/` | Weapon meshes | `<category>/<mesh>` |
| `equipment/body_parts/` | The parts of modular characters | `<tag>/<body part type>/<mesh>`; the types are in `BODY_PART_TYPES` (head, torso, arms, hands, legs, feet and the face parts) |
| `equipment/attachments/` | Things worn on a slot | `<tag>/<slot>/<mesh>`; the slots are in `ATTACHMENT_TYPES` |
| `facial/` | Facial features | `<skeleton tag>/<feature>/<mesh>` |
| `materials/` | Materials | `<category>/<material>` (`.tres`, `.res`) |

A **tag** groups the parts that belong together. A mesh file can have a **skin** file next to it with the same name, `_mesh` replaced by `_skin`; the `..._mesh_and_skin` functions return both. Thumbnails of the meshes are made and kept in `src/data/meshes/.thumbnails/`.
`validate_database` checks that the files found still exist, and `get_database_stats` counts everything.

## Model scenes

`ModelSceneDatabase` reads two folders of `.tscn` scenes: `src/data/meshes/skeletons/` (the scenes of characters and creatures) and `src/data/meshes/interactable_models/` (the scenes of interactable objects). The **file name** is the entry.
For a skeleton scene the database instantiates it once to find out the kind of skeleton it holds ([`GeneralSkeleton`](/advanced/assets/rig/general-skeleton) or [`ModularSkeleton`](/advanced/assets/rig/modular-skeleton)) and remembers it. It also remembers which skeleton types a mesh supports
(`set_mesh_skeleton_types`, `does_mesh_support_skeleton_type`, `get_meshes_for_skeleton_type`). `instantiate_skeleton` and `instantiate_interactable_model` return a ready node.

## Icons

`DatabaseIcons` reads `src/data/icons/<category>/`. A folder is a category, and **an icon is an image whose file name is its number**: `12.png` is icon 12. `get_icon_by_id` finds it in any category,
`get_next_icon_id` finds the first free number, and `import_icons_to_category` moves a folder of images in and numbers them from there.

## Where to look next

- [Data and the Database](/advanced/data-and-database/): the registry and the resources.
- The class pages of this section list every function of the libraries.
