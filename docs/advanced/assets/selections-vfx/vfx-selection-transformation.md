<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# VFXSelectionTransformation

**Inherits:** [VFXSelection](/advanced/assets/selections-vfx/vfx-selection) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Transformation VFX selection - temporary visual transformations for entities TODO This needs work or removal

## Properties

| | | |
|---|---|---|
| `VFXTransformation.TransformationType` | [transformation_type](#prop-transformation-type) | `VFXTransformation.TransformationType.SCALE` |
| `float` | [blend_time](#prop-blend-time) | `0.3` |
| `Vector3` | [scale_factor](#prop-scale-factor) | `Vector3(1.5, 1.5, 1.5)` |
| `String` | [skeleton_scene_path](#prop-skeleton-scene-path) | `""` |
| `String` | [weapon_mesh_path](#prop-weapon-mesh-path) | `""` |
| `String` | [weapon_slot](#prop-weapon-slot) | `"main_hand"` |

## Methods

| | |
|---|---|
| `Array[VFX]` | [spawn_vfx](#method-spawn-vfx)( `vfx_manager: VFXManager, target: Variant = null, originator: Variant = null, timer: Timer = null` ) |
| `Variant` | [prepare_target_for_vfx_type](#method-prepare-target-for-vfx-type)( `target: Variant, originator: Variant = null` ) |
| `String` | [get_description](#method-get-description)() |
| `String` | [get_vfx_type](#method-get-vfx-type)() |
| `String` | [get_vfx_name](#method-get-vfx-name)() |
| `Dictionary` | [get_transformation_config](#method-get-transformation-config)() |
| `bool` | [is_valid_config](#method-is-valid-config)() |

## Property descriptions

### VFXTransformation.TransformationType transformation_type = VFXTransformation.TransformationType.SCALE {#prop-transformation-type}

*No description yet.*

### float blend_time = 0.3 {#prop-blend-time}

Time to blend to/from transformation

*Scale Transformation*

### Vector3 scale_factor = Vector3(1.5, 1.5, 1.5) {#prop-scale-factor}

Scale multiplier

*Polymorph Transformation*

### String skeleton_scene_path = "" {#prop-skeleton-scene-path}

Path to new skeleton scene

*Weapon Swap*

### String weapon_mesh_path = "" {#prop-weapon-mesh-path}

Path to new weapon mesh

### String weapon_slot = "main_hand" {#prop-weapon-slot}

Which weapon slot: "main_hand" or "off_hand"

## Method descriptions

### Array[VFX] spawn_vfx( vfx_manager: VFXManager, target: Variant = null, originator: Variant = null, timer: Timer = null ) {#method-spawn-vfx}

Override spawn method - Transformation VFX returns empty array since it doesn't create VFX nodes

### Variant prepare_target_for_vfx_type( target: Variant, originator: Variant = null ) {#method-prepare-target-for-vfx-type}

Prepare target based on VFX type - override in subclasses for special handling *(from [VFXSelection](/advanced/assets/selections-vfx/vfx-selection))*

### String get_description() {#method-get-description}

Get a description of this VFX selection for UI *(from [VFXSelection](/advanced/assets/selections-vfx/vfx-selection))*

### String get_vfx_type() {#method-get-vfx-type}

Get the VFX type for database queries *(from [VFXSelection](/advanced/assets/selections-vfx/vfx-selection))*

### String get_vfx_name() {#method-get-vfx-name}

Get the VFX name for database queries *(from [VFXSelection](/advanced/assets/selections-vfx/vfx-selection))*

### Dictionary get_transformation_config() {#method-get-transformation-config}

Get transformation configuration for VFXTransformation class

### bool is_valid_config() {#method-is-valid-config}

Validate the transformation configuration

