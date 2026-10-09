<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# VFXSelectionDialog

**Inherits:** `ConfirmationDialog`

Modular VFX selection dialog that works with any VFXSelection class type Uses property panels for detailed configuration and DatabaseVFX for VFX data access Now supports context-specific type locking and uses ItemList for VFX name selection

## Properties

| | | |
|---|---|---|
| `String` | [selection_class_type](#prop-selection-class-type) | `""` |
| `String` | [context_effect_type](#prop-context-effect-type) | `""  # Used to filter VFX types for specific effect types` |
| `bool` | [lock_to_single_category](#prop-lock-to-single-category) | `false  # Controls whether to restrict to one VFX category` |

## Variables

| | | |
|---|---|---|
| `Button` | [remove_vfx_button](#var-remove-vfx-button) |  |
| `VFXSelectionOneShotProperties` | [oneshot_properties](#var-oneshot-properties) |  |
| `VFXSelectionLoopProperties` | [loop_properties](#var-loop-properties) |  |
| `VFXSelectionMaterialProperties` | [material_properties](#var-material-properties) |  |
| `VFXSelectionBeamProperties` | [beam_properties](#var-beam-properties) |  |
| `VFXSelectionTelegraphProperties` | [telegraph_properties](#var-telegraph-properties) |  |
| `VFXSelectionPathProperties` | [path_properties](#var-path-properties) |  |
| `VFXSelectionTransformationProperties` | [transformation_properties](#var-transformation-properties) |  |
| `VFXSelectionPropertyPanel` | [current_property_panel](#var-current-property-panel) |  |
| `VFXSelection` | [current_selection](#var-current-selection) |  |
| `bool` | [is_loading](#var-is-loading) | `false` |
| `String` | [force_vfx_type](#var-force-vfx-type) | `""  # When set, locks the VFX type dropdown` |
| `bool` | [is_type_locked](#var-is-type-locked) | `false  # Whether the type dropdown is disabled` |
| `String` | [suggested_vfx_category](#var-suggested-vfx-category) | `""  # Suggested category (used when lock_to_single_catego...` |

## Methods

| | |
|---|---|
| `void` | [edit_vfx_selection](#method-edit-vfx-selection)( `selection: VFXSelection, class_type: String, effect_type: String = "", forced_type: String = "", lock_category: bool = false` ) |
| `void` | [create_new_vfx_selection](#method-create-new-vfx-selection)( `class_type: String, effect_type: String = "", forced_type: String = "", lock_category: bool = false, suggested_category: String = ""` ) |
| `void` | [reset_to_defaults](#method-reset-to-defaults)() |
| `bool` | [is_configuration_valid](#method-is-configuration-valid)() |

## Signals

### selection_made( selection: VFXSelection ) {#signal-selection-made}

## Property descriptions

### String selection_class_type = "" {#prop-selection-class-type}

*No description yet.*

### String context_effect_type = ""  # Used to filter VFX types for specific effect types {#prop-context-effect-type}

*No description yet.*

### bool lock_to_single_category = false  # Controls whether to restrict to one VFX category {#prop-lock-to-single-category}

*No description yet.*

## Variable descriptions

### Button remove_vfx_button {#var-remove-vfx-button}

*No description yet.*

### VFXSelectionOneShotProperties oneshot_properties {#var-oneshot-properties}

*No description yet.*

### VFXSelectionLoopProperties loop_properties {#var-loop-properties}

*No description yet.*

### VFXSelectionMaterialProperties material_properties {#var-material-properties}

*No description yet.*

### VFXSelectionBeamProperties beam_properties {#var-beam-properties}

*No description yet.*

### VFXSelectionTelegraphProperties telegraph_properties {#var-telegraph-properties}

*No description yet.*

### VFXSelectionPathProperties path_properties {#var-path-properties}

*No description yet.*

### VFXSelectionTransformationProperties transformation_properties {#var-transformation-properties}

*No description yet.*

### VFXSelectionPropertyPanel current_property_panel {#var-current-property-panel}

*No description yet.*

### VFXSelection current_selection {#var-current-selection}

*No description yet.*

### bool is_loading = false {#var-is-loading}

*No description yet.*

### String force_vfx_type = ""  # When set, locks the VFX type dropdown {#var-force-vfx-type}

*No description yet.*

### bool is_type_locked = false  # Whether the type dropdown is disabled {#var-is-type-locked}

*No description yet.*

### String suggested_vfx_category = ""  # Suggested category (used when lock_to_single_category  {#var-suggested-vfx-category}

*No description yet.*

## Method descriptions

### void edit_vfx_selection( selection: VFXSelection, class_type: String, effect_type: String = "", forced_type: String = "", lock_category: bool = false ) {#method-edit-vfx-selection}

Configure and show dialog for editing a specific VFX selection lock_category parameter controls whether to restrict to one VFX category

### void create_new_vfx_selection( class_type: String, effect_type: String = "", forced_type: String = "", lock_category: bool = false, suggested_category: String = "" ) {#method-create-new-vfx-selection}

Create a new VFX selection with optional type forcing and category restriction

### void reset_to_defaults() {#method-reset-to-defaults}

Reset current property panel to defaults

### bool is_configuration_valid() {#method-is-configuration-valid}

Check if current configuration is valid

