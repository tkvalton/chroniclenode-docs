<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# VFXSelectionMaterial

**Inherits:** [VFXSelection](/advanced/assets/selections-vfx/vfx-selection) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Material VFX selection - material overrides for entities

## Properties

| | | |
|---|---|---|
| `MaterialTarget` | [material_target](#prop-material-target) | `MaterialTarget.BODY:` |
| `MaterialBlendMode` | [blend_mode](#prop-blend-mode) | `MaterialBlendMode.OVERLAY:` |
| `bool` | [auto_cleanup_on_entity_death](#prop-auto-cleanup-on-entity-death) | `true` |
| `bool` | [allow_stacking](#prop-allow-stacking) | `true` |
| `int` | [priority](#prop-priority) | `0` |
| `String` | [target_material_slot](#prop-target-material-slot) | `"body":` |

## Methods

| | |
|---|---|
| `Array[VFX]` | [spawn_vfx](#method-spawn-vfx)( `vfx_manager: VFXManager, target: Variant = null, originator: Variant = null, timer: Timer = null` ) |
| `Variant` | [prepare_target_for_vfx_type](#method-prepare-target-for-vfx-type)( `target: Variant, originator: Variant = null` ) |
| `String` | [get_description](#method-get-description)() |
| `String` | [get_vfx_type](#method-get-vfx-type)() |
| `String` | [get_vfx_name](#method-get-vfx-name)() |
| `String` | [get_selection_type_name](#method-get-selection-type-name)() |
| `Array[String]` | [get_available_vfx_names](#method-get-available-vfx-names)() |
| `void` | [set_vfx_name](#method-set-vfx-name)( `name: String` ) |
| `String` | [get_current_vfx_name](#method-get-current-vfx-name)() |
| `bool` | [is_valid_selection](#method-is-valid-selection)() |
| `Material` | [get_material_from_database](#method-get-material-from-database)() |

## Enumerations

### enum MaterialTarget {#enum-materialtarget}

- **BODY** = `0`
- **WEAPONS** = `1`
- **MAIN_HAND** = `2`

### enum MaterialBlendMode {#enum-materialblendmode}

- **REPLACE** = `0`
- **OVERLAY** = `1`
- **ADDITIVE** = `2`

## Property descriptions

### MaterialTarget material_target = MaterialTarget.BODY: {#prop-material-target}

*No description yet.*

### MaterialBlendMode blend_mode = MaterialBlendMode.OVERLAY: {#prop-blend-mode}

*No description yet.*

### bool auto_cleanup_on_entity_death = true {#prop-auto-cleanup-on-entity-death}

*No description yet.*

### bool allow_stacking = true {#prop-allow-stacking}

*No description yet.*

### int priority = 0 {#prop-priority}

*No description yet.*

### String target_material_slot = "body": {#prop-target-material-slot}

*No description yet.*

## Method descriptions

### Array[VFX] spawn_vfx( vfx_manager: VFXManager, target: Variant = null, originator: Variant = null, timer: Timer = null ) {#method-spawn-vfx}

Override spawn method - Material VFX returns empty array since it doesn't create VFX nodes

### Variant prepare_target_for_vfx_type( target: Variant, originator: Variant = null ) {#method-prepare-target-for-vfx-type}

Prepare target based on VFX type - override in subclasses for special handling *(from [VFXSelection](/advanced/assets/selections-vfx/vfx-selection))*

### String get_description() {#method-get-description}

Get a description of this VFX selection for UI *(from [VFXSelection](/advanced/assets/selections-vfx/vfx-selection))*

### String get_vfx_type() {#method-get-vfx-type}

Get the VFX type for database queries *(from [VFXSelection](/advanced/assets/selections-vfx/vfx-selection))*

### String get_vfx_name() {#method-get-vfx-name}

Get the VFX name for database queries *(from [VFXSelection](/advanced/assets/selections-vfx/vfx-selection))*

### String get_selection_type_name() {#method-get-selection-type-name}

Get the VFX type name for dialog system

### Array[String] get_available_vfx_names() {#method-get-available-vfx-names}

Get available VFX names for this type from database

### void set_vfx_name( name: String ) {#method-set-vfx-name}

Set VFX name (called by dialog system)

### String get_current_vfx_name() {#method-get-current-vfx-name}

Get current VFX name (called by dialog system)

### bool is_valid_selection() {#method-is-valid-selection}

*No description yet.*

### Material get_material_from_database() {#method-get-material-from-database}

*No description yet.*

