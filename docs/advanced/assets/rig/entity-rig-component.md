<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# EntityRigComponent

**Inherits:** [RigComponent](/advanced/assets/rig/rig-component) < [Node3D](https://docs.godotengine.org/en/stable/classes/class_node3d.html)

EntityRigComponent manages visual representation and effects for entities. Extends RigComponent with entity-specific skeleton, equipment, and animation logic. Works with any skeleton type (GeneralSkeleton or ModularSkeleton).

## Variables

| | | |
|---|---|---|
| `GeneralSkeleton` | [skeleton_3d](#var-skeleton-3d) |  |

## Methods

| | |
|---|---|
| `void` | [initialize_rig](#method-initialize-rig)( `owner_node: Node3D` ) |
| `void` | [look_at_object](#method-look-at-object)( `object: Node3D, speed: int = Entity.FaceTargetSpeed.INSTANT` ) |
| `void` | [apply_equipment](#method-apply-equipment)( `equipment: ItemInstance, slot_definition: EquipmentSlotDefinition = null, is_equipping: bool = true` ) |
| `EntityAnimationPlayer` | [setup_entity_animation_player](#method-setup-entity-animation-player)() |
| `void` | [set_head_tracking_target](#method-set-head-tracking-target)( `target: Node3D = null, transition_duration: float = 0.5` ) |
| `bool` | [apply_vfx_material_effect](#method-apply-vfx-material-effect)( `selection: VFXSelectionMaterial, timer: Timer = null` ) |
| `bool` | [cleanup_vfx_material_effect](#method-cleanup-vfx-material-effect)( `selection: VFXSelectionMaterial` ) |
| `Node3D` | [get_attachment_point_node](#method-get-attachment-point-node)( `location: VFXSelection.VfxLocation` ) |
| `void` | [set_skeleton_invisible](#method-set-skeleton-invisible)() |
| `void` | [set_skeleton_visible](#method-set-skeleton-visible)() |

## Variable descriptions

### GeneralSkeleton skeleton_3d {#var-skeleton-3d}

*No description yet.*

## Method descriptions

### void initialize_rig( owner_node: Node3D ) {#method-initialize-rig}

Single entry point. Stores the owner, creates decals, defers remote setup. Subclasses call super then add their own model instantiation. *(from [RigComponent](/advanced/assets/rig/rig-component))*

### void look_at_object( object: Node3D, speed: int = Entity.FaceTargetSpeed.INSTANT ) {#method-look-at-object}

*No description yet.*

### void apply_equipment( equipment: ItemInstance, slot_definition: EquipmentSlotDefinition = null, is_equipping: bool = true ) {#method-apply-equipment}

Main equipment interface — handles ALL visual processing

### EntityAnimationPlayer setup_entity_animation_player() {#method-setup-entity-animation-player}

*No description yet.*

### void set_head_tracking_target( target: Node3D = null, transition_duration: float = 0.5 ) {#method-set-head-tracking-target}

*No description yet.*

### bool apply_vfx_material_effect( selection: VFXSelectionMaterial, timer: Timer = null ) {#method-apply-vfx-material-effect}

Apply a material effect to the rig's meshes. Returns success. *(from [RigComponent](/advanced/assets/rig/rig-component))*

### bool cleanup_vfx_material_effect( selection: VFXSelectionMaterial ) {#method-cleanup-vfx-material-effect}

Clean up a previously applied material effect. Returns success. *(from [RigComponent](/advanced/assets/rig/rig-component))*

### Node3D get_attachment_point_node( location: VFXSelection.VfxLocation ) {#method-get-attachment-point-node}

Return the Node3D that physically represents a VfxLocation attachment point. *(from [RigComponent](/advanced/assets/rig/rig-component))*

### void set_skeleton_invisible() {#method-set-skeleton-invisible}

*No description yet.*

### void set_skeleton_visible() {#method-set-skeleton-visible}

*No description yet.*

