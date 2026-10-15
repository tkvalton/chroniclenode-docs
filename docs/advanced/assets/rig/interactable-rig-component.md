<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# InteractableRigComponent

**Inherits:** [RigComponent](/advanced/assets/rig/rig-component) < [Node3D](https://docs.godotengine.org/en/stable/classes/class_node3d.html)

InteractableRigComponent is the runtime rig for InteractableObjects. Extends RigComponent with interactable-specific slot mapping and scene management. InteractableScene is the authored visual template; this class is the runtime manager. Only three attachment regions exist: BASE, CHEST, and OVERHEAD. All entity VFX locations (hands, head, weapon, feet) are remapped to CHEST.

## Variables

| | | |
|---|---|---|
| `InteractableScene` | [scene_instance](#var-scene-instance) |  |
| `CollisionShape3D` | [collision_shape](#var-collision-shape) |  |
| `Marker3D` | [chest_marker](#var-chest-marker) |  |
| `Marker3D` | [overhead_marker](#var-overhead-marker) |  |
| `Marker3D` | [nameplate_marker](#var-nameplate-marker) |  |
| `Array[MeshInstance3D]` | [mesh_instances](#var-mesh-instances) | `[]` |

## Methods

| | |
|---|---|
| `void` | [initialize_rig](#method-initialize-rig)( `owner_node: Node3D` ) |
| `Node3D` | [get_attachment_point_node](#method-get-attachment-point-node)( `location: VFXSelection.VfxLocation` ) |
| `bool` | [apply_vfx_material_effect](#method-apply-vfx-material-effect)( `selection: VFXSelectionMaterial, _timer: Timer = null` ) |
| `bool` | [cleanup_vfx_material_effect](#method-cleanup-vfx-material-effect)( `_selection: VFXSelectionMaterial` ) |
| `Array[String]` | [get_available_animations](#method-get-available-animations)() |
| `bool` | [has_animation](#method-has-animation)( `anim_name: String` ) |
| `bool` | [play_animation](#method-play-animation)( `anim_name: String` ) |
| `AnimationPlayer` | [get_animation_player](#method-get-animation-player)() |

## Variable descriptions

### InteractableScene scene_instance {#var-scene-instance}

The authored InteractableScene instance — equivalent to GeneralSkeleton for entities.

### CollisionShape3D collision_shape {#var-collision-shape}

Collision shape (sourced from scene_instance on initialize)

### Marker3D chest_marker {#var-chest-marker}

Markers sourced from the scene instance

### Marker3D overhead_marker {#var-overhead-marker}

The marker above the object.

### Marker3D nameplate_marker {#var-nameplate-marker}

The marker where the nameplate of the object goes.

### Array[MeshInstance3D] mesh_instances = [] {#var-mesh-instances}

Mesh instances discovered from the scene (used by base class via _get_mesh_instances)

## Method descriptions

### void initialize_rig( owner_node: Node3D ) {#method-initialize-rig}

Builds the rig of the object: its scene and animation player.

### Node3D get_attachment_point_node( location: VFXSelection.VfxLocation ) {#method-get-attachment-point-node}

The node of the object where a visual effect attaches.

### bool apply_vfx_material_effect( selection: VFXSelectionMaterial, _timer: Timer = null ) {#method-apply-vfx-material-effect}

Puts a material effect on the meshes of the object.

### bool cleanup_vfx_material_effect( _selection: VFXSelectionMaterial ) {#method-cleanup-vfx-material-effect}

Takes the material effect off the meshes of the object.

### Array[String] get_available_animations() {#method-get-available-animations}

The animations of the scene of the object.

### bool has_animation( anim_name: String ) {#method-has-animation}

Does the scene of the object have this animation?

### bool play_animation( anim_name: String ) {#method-play-animation}

Plays an animation of the object. False when it has none.

### AnimationPlayer get_animation_player() {#method-get-animation-player}

The animation player of the object.

