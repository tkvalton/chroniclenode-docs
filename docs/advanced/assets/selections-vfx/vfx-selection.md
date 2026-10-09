<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# VFXSelection

**Inherits:** [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

**Inherited by:** [VFXSelectionBeam](/advanced/assets/selections-vfx/vfx-selection-beam), [VFXSelectionLoop](/advanced/assets/selections-vfx/vfx-selection-loop), [VFXSelectionMaterial](/advanced/assets/selections-vfx/vfx-selection-material), [VFXSelectionOneShot](/advanced/assets/selections-vfx/vfx-selection-one-shot), [VFXSelectionPath](/advanced/assets/selections-vfx/vfx-selection-path), [VFXSelectionTelegraph](/advanced/assets/selections-vfx/vfx-selection-telegraph), [VFXSelectionTransformation](/advanced/assets/selections-vfx/vfx-selection-transformation), [VFXSelectionWeather](/advanced/assets/selections-vfx/vfx-selection-weather)

Base VFX selection class - stores VFX configuration and references All VFX selections inherit from this base class

## Properties

| | | |
|---|---|---|
| `String` | [vfx_type](#prop-vfx-type) | `"":` |
| `float` | [duration_override](#prop-duration-override) | `0.0` |
| `bool` | [on_top_level](#prop-on-top-level) | `false` |

## Methods

| | |
|---|---|
| `Array[VFX]` | [spawn_vfx](#method-spawn-vfx)( `vfx_manager: VFXManager, target: Variant = null, originator: Variant = null, timer: Timer = null` ) |
| `Variant` | [prepare_target_for_vfx_type](#method-prepare-target-for-vfx-type)( `target: Variant, originator: Variant = null` ) |
| `String` | [get_description](#method-get-description)() |
| `String` | [get_vfx_type](#method-get-vfx-type)() |
| `String` | [get_vfx_name](#method-get-vfx-name)() |
| `String` | [get_vfx_selection_class_name](#method-get-vfx-selection-class-name)( `vfx_selection: VFXSelection` ) *static* |

## Enumerations

### enum VfxLocation {#enum-vfxlocation}

- **BASE** = `0`
- **HANDS** = `1`
- **LEFT_HAND** = `2`
- **RIGHT_HAND** = `3`
- **HEAD** = `4`
- **CHEST** = `5`
- **WEAPON** = `6`
- **FEET** = `7`
- **OVERHEAD** = `8     # Above entity`

## Property descriptions

### String vfx_type = "": {#prop-vfx-type}

Notify editor of change

### float duration_override = 0.0 {#prop-duration-override}

0 = use VFX default duration

### bool on_top_level = false {#prop-on-top-level}

Set top_level = true when activated (for world-space positioning)

## Method descriptions

### Array[VFX] spawn_vfx( vfx_manager: VFXManager, target: Variant = null, originator: Variant = null, timer: Timer = null ) {#method-spawn-vfx}

*No description yet.*

### Variant prepare_target_for_vfx_type( target: Variant, originator: Variant = null ) {#method-prepare-target-for-vfx-type}

Prepare target based on VFX type - override in subclasses for special handling

### String get_description() {#method-get-description}

Get a description of this VFX selection for UI

### String get_vfx_type() {#method-get-vfx-type}

Get the VFX type for database queries

### String get_vfx_name() {#method-get-vfx-name}

Get the VFX name for database queries

### String get_vfx_selection_class_name( vfx_selection: VFXSelection ) {#method-get-vfx-selection-class-name}

Helper to get VFX selection class name from existing VFX selection

