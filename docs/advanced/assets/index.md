# Assets: how they are built

The [Assets chapter](/basic/assets/) explains the editors. The libraries themselves (how each folder is read, the static classes and their calls) are described in [Asset databases](/advanced/data-and-database/asset-databases). This page covers the other half: **who uses the assets while the game runs**, the code of the editors, and how to extend them.

## The three layers

```text
 files in src/data/...        the libraries (static classes)        the users
 .tscn  .res  .wav  .png  ──► DatabaseMeshes  ModelSceneDatabase ─► EntityRigComponent, Equipment
                              DatabaseAnimation DatabaseVFX       ─► EntityAnimationPlayer, VFXManager
                              DatabaseAudio     DatabaseIcons     ─► AudioManager, AudioComponent, UI
```

The libraries only read folders and answer questions; they never keep a node. The **users** load what they need through them, so a missing file shows as a warning in the console rather than a crash.

## Model scenes become entities

- An [`EntityDefinition`](/advanced/entities/definitions/entity-definition) holds a `PackedScene` (the model scene). The entity's **rig component** ([`EntityRigComponent`](/advanced/assets/rig/entity-rig-component) for characters and creatures, [`InteractableRigComponent`](/advanced/assets/rig/interactable-rig-component) for objects, both [`RigComponent`](/advanced/assets/rig/rig-component)) instantiates it as a child of the entity and reads it through the **body** classes in `runtime_classes/entity/components/rig/bodies/`:

| Class | Root of | Gives |
|---|---|---|
| [`GeneralSkeleton`](/advanced/entities/) (`Skeleton3D`) | A creature or character | The attachment points (`head_attachment`, `left_hand_attachment` ... found by unique name, `%HeadAttachment`), the weapon meshes (`main_hand_weapon`, `off_hand_weapon`), the enums `BodySlot`, `FacialFeature`, `AttachmentSlot`, `WeaponSlot`, and the signals `body_mesh_changed`, `attachment_mesh_changed`, `weapon_mesh_changed`, `mesh_removed` |
| [`ModularSkeleton`](/advanced/assets/rig/modular-skeleton) | A character of swappable parts | `modular_equipment_type_tag`: the folder of [`DatabaseMeshes`](/advanced/data-and-database/asset-database-classes/database-meshes) the parts come from |
| [`CustomSkeleton`](/advanced/assets/rig/custom-skeleton) | A customizable character | The skin, hair and eye `ShaderMaterial`s and the blend shapes, and `apply_customization` (used by character creation) |
| [`InteractableScene`](/advanced/assets/rig/interactable-scene) (`Node3D`) | An object | `body_mark`, `top_mark`, `nameplate_marker`, the `AnimationPlayer`, the collision shape, `available_animations` (written when the scene is saved) |

- **Equipment.** When an item is equipped, the equipment component asks the rig to show its meshes: body parts replace the part of the modular skeleton (the slots an [`EquipmentTypeDefinition`](/advanced/equipment-definitions/definitions/equipment-type-definition) hides), attachments go to the attachment points, weapons to the weapon meshes (position and rotation offset, enchant VFX position and projectile spawn point are read from the metadata of the mesh resource).
- **Required nodes.** The skeleton converter ([`SkeletonSceneConverter`](/advanced/editor/tools/skeleton-scene-converter)) and the interactable creator ([`InteractableSceneCreator`](/advanced/editor/tools/interactable-scene-creator)), in `editor_components/utility/`, are what the *Create* buttons call. The check in the Model Scenes editor reads the same exports.

## Animations

[`EntityAnimationPlayer`](/advanced/assets/rig/entity-animation-player) and the animation tree (`entity_animation_tree_root.tres`) play the clips of the entity's [`AnimationCoreMap`](/advanced/assets/albums/animation-core-map) (`data_classes/entity/animations/animation_core_map.gd`: one `String` export for each clip, grouped by `@export_group`). The map names a clip; [`DatabaseAnimation.build_library_for_entity`](/advanced/data-and-database/asset-database-classes/database-animation) finds it in the entity type's folder or in the parent's. Abilities, weapon classes and status effects ask the same library by package and category. See [Entities](/advanced/entities/) and [Abilities & Effects](/advanced/abilities-and-effects/).

## VFX

[`VFXManager`](/advanced/assets/vfx/vfx-manager) pre-instantiates every VFX of the library at loading, keeps a pool for each, and plays them from selections ([`VFXSelection`](/advanced/assets/selections-vfx/vfx-selection), one class for each type in `data_classes/selections/vfx/`). The classes ([`VFX`](/advanced/assets/vfx/vfx) and one subclass for each type) are in `runtime_classes/vfx/`. See [Pooling](/advanced/pooling#vfx) for the pool, and the VFX classes for the animation-name rules (`START_ANIMATION_NAMES`, `LOOP_ANIMATION_NAMES`, `END_ANIMATION_NAMES` in `vfx.gd`).

## Audio

- **Sound effects.** [`AudioComponent.play_effect`](/advanced/assets/rig/audio-component) and `play_sfx_selection` take an [`SFXSelection`](/advanced/assets/selections-sfx/sfx-selection) (category, type, optionally a file), ask [`DatabaseAudio.get_random_sfx_audio`](/advanced/data-and-database/asset-database-classes/database-audio), and request a pooled player from the [`AudioManager`](/advanced/managers/managers/audio-manager).
- **Voices and footsteps.** `get_random_voice_audio(entity_type, voice_variant, action)` and `get_random_footsteps_audio(entity_type, surface, movement)`. The surface comes from the terrain provider of the world scene ([`WorldScene.get_terrain_surface_type`](/advanced/world/runtime/world-scene)).
- **Music.** `AudioManager` loads the tracks of the world's album ([`AudioAlbum`](/advanced/assets/albums/audio-album)) or of a UI album when the state changes, picks a **random** track of the list (`play_music`), crossfades with its own constant, and switches to the combat tracks while `in_combat`. The playback fields of `AudioAlbum` / [`UIAlbum`](/advanced/assets/albums/ui-album) other than the track lists and the volumes (`shuffle_*`, `loop_*`, `default_*_index`, `crossfade_duration`, fades, `silence_between_tracks`, `pitch_scale`) and the world's `default_music_track` / `default_ambient_track` are **not read** by the manager yet.

## Icons

[`DatabaseIcons.get_icon_by_id(id)`](/advanced/data-and-database/asset-database-classes/database-icons) returns the path of the file whose name is the id; the editors' icon pickers and the UI load it. `get_next_icon_id` gives the first free id; `import_icons_to_category` copies and numbers.

## The editors

`editor_components/editors/assets/` holds one editor for each library ([`ModelSceneDatabaseEditor`](/advanced/editor/assets/model-scene-database-editor), [`MeshDatabaseEditor`](/advanced/editor/assets/mesh-database-editor), [`AnimationDatabaseEditor`](/advanced/editor/assets/animation-database-editor) with `animation/core_package_editor.gd`, [`VFXDatabaseEditor`](/advanced/editor/assets/vfx-database-editor), [`AudioDatabaseEditor`](/advanced/editor/assets/audio-database-editor), [`AlbumDatabaseEditor`](/advanced/editor/assets/album-database-editor), [`IconDatabaseEditor`](/advanced/editor/assets/icon-database-editor)). They share a shape: a search box and a refresh button, a tree or list built from the library's `get_*` calls, a settings menu, an import button that copies files and asks for a destination, and a validation pass whose results are shown in a dialog. The [`CorePackageEditor`](/advanced/editor/assets/core-package-editor) builds the animation map's drop-downs **by reflection** from the exports of `AnimationCoreMap`, so a clip you add to the map appears by itself.

## Extending

| You want | Do |
|---|---|
| **A new SFX category** | Add an entry to `DatabaseAudio.SFX_CATEGORIES` (path, pattern, extensions, description, section). The editor lists it, and the folder is made |
| **A new VFX type** | Add it to [`DatabaseVFX.VFX_TYPES`](/advanced/data-and-database/asset-database-classes/database-vfx), `VFX_CLASS_MAPPING` and `VFX_SCRIPT_MAP`, write a `VFX` subclass in `runtime_classes/vfx/`, and a selection class for the editors |
| **A new animation package** | Add it to `DatabaseAnimation.ANIMATION_PACKAGES` with its categories and structure |
| **A new clip in the map** | Add an `@export var my_clip: String` to `AnimationCoreMap` (in the right group); the editor shows it; fetch it with the entity's animation component |
| **A new attachment point** | Add the node to your skeleton scene with a unique name, add a value to [`GeneralSkeleton.AttachmentSlot`](/advanced/assets/rig/general-skeleton), and add its `@onready` reference |
| **A new equipment tag** | **Add Skeleton Equipment Tag** in the Meshes editor makes the folders; set `modular_equipment_type_tag` on the skeleton |

## See also

- [Asset databases](/advanced/data-and-database/asset-databases), [Pooling](/advanced/pooling), [Definitions and instances](/advanced/definitions-and-instances).
