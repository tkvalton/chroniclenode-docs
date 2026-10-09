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

*No description yet.*

### Marker3D nameplate_marker {#var-nameplate-marker}

*No description yet.*

### Array[MeshInstance3D] mesh_instances = [] {#var-mesh-instances}

Mesh instances discovered from the scene (used by base class via _get_mesh_instances)

## Method descriptions

### void initialize_rig( owner_node: Node3D ) {#method-initialize-rig}

Single entry point. Stores the owner, creates decals, defers remote setup. Subclasses call super then add their own model instantiation. *(from [RigComponent](/advanced/assets/rig/rig-component))*

### Node3D get_attachment_point_node( location: VFXSelection.VfxLocation ) {#method-get-attachment-point-node}

Return the Node3D that physically represents a VfxLocation attachment point. *(from [RigComponent](/advanced/assets/rig/rig-component))*

### bool apply_vfx_material_effect( selection: VFXSelectionMaterial, _timer: Timer = null ) {#method-apply-vfx-material-effect}

Apply a material effect to the rig's meshes. Returns success. *(from [RigComponent](/advanced/assets/rig/rig-component))*

### bool cleanup_vfx_material_effect( _selection: VFXSelectionMaterial ) {#method-cleanup-vfx-material-effect}

Clean up a previously applied material effect. Returns success. *(from [RigComponent](/advanced/assets/rig/rig-component))*

### Array[String] get_available_animations() {#method-get-available-animations}

*No description yet.*

### bool has_animation( anim_name: String ) {#method-has-animation}

*No description yet.*

### bool play_animation( anim_name: String ) {#method-play-animation}

*No description yet.*

### AnimationPlayer get_animation_player() {#method-get-animation-player}

*No description yet.*

