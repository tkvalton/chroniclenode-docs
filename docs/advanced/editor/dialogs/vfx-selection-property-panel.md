<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# VFXSelectionPropertyPanel

**Inherits:** [VBoxContainer](https://docs.godotengine.org/en/stable/classes/class_vboxcontainer.html)

**Inherited by:** [VFXSelectionBeamProperties](/advanced/editor/dialogs/vfx-selection-beam-properties), [VFXSelectionEnchantProperties](/advanced/editor/dialogs/vfx-selection-enchant-properties), [VFXSelectionLoopProperties](/advanced/editor/dialogs/vfx-selection-loop-properties), [VFXSelectionMaterialProperties](/advanced/editor/dialogs/vfx-selection-material-properties), [VFXSelectionOneShotProperties](/advanced/editor/dialogs/vfx-selection-one-shot-properties), [VFXSelectionPathProperties](/advanced/editor/dialogs/vfx-selection-path-properties), [VFXSelectionTelegraphProperties](/advanced/editor/dialogs/vfx-selection-telegraph-properties), [VFXSelectionTransformationProperties](/advanced/editor/dialogs/vfx-selection-transformation-properties)

Base class for VFX selection property panels Each VFX selection type gets its own specialized panel

## Variables

| | | |
|---|---|---|
| `VFXSelection` | [current_selection](#var-current-selection) |  |
| `bool` | [is_loading](#var-is-loading) | `false` |
| `HSeparator` | [duration_separator](#var-duration-separator) |  |
| `Label` | [duration_label](#var-duration-label) |  |
| `CheckBox` | [duration_override_check](#var-duration-override-check) |  |
| `SpinBox` | [duration_spin](#var-duration-spin) |  |
| `CheckBox` | [tint_check](#var-tint-check) |  |
| `ColorPickerButton` | [tint_color_button](#var-tint-color-button) |  |
| `HSlider` | [tint_strength_slider](#var-tint-strength-slider) |  |
| `OptionButton` | [tint_mode_option](#var-tint-mode-option) |  |
| `VBoxContainer` | [variety_box](#var-variety-box) |  |
| `ItemList` | [variety_list](#var-variety-list) |  |
| `OptionButton` | [variety_option](#var-variety-option) |  |
| `Button` | [variety_add_button](#var-variety-add-button) |  |
| `Button` | [variety_all_button](#var-variety-all-button) |  |
| `Button` | [variety_remove_button](#var-variety-remove-button) |  |

## Methods

| | |
|---|---|
| `void` | [initialize_panel](#method-initialize-panel)() |
| `void` | [setup_for_selection](#method-setup-for-selection)( `selection: VFXSelection` ) |
| `VFXSelection` | [get_configured_selection](#method-get-configured-selection)() |
| `Dictionary` | [validate_configuration](#method-validate-configuration)() |
| `void` | [reset_to_defaults](#method-reset-to-defaults)() |
| `Array[String]` | [variety_like](#method-variety-like)( `main_name: String, same_name: bool` ) |
| `void` | [refresh_variety](#method-refresh-variety)( `main_name: String` ) |

## Signals

### properties_changed() {#signal-properties-changed}

### validation_changed( is_valid: bool, warnings: Array[String] ) {#signal-validation-changed}

## Variable descriptions

### VFXSelection current_selection {#var-current-selection}

*No description yet.*

### bool is_loading = false {#var-is-loading}

*No description yet.*

### HSeparator duration_separator {#var-duration-separator}

*No description yet.*

### Label duration_label {#var-duration-label}

*No description yet.*

### CheckBox duration_override_check {#var-duration-override-check}

*No description yet.*

### SpinBox duration_spin {#var-duration-spin}

*No description yet.*

### CheckBox tint_check {#var-tint-check}

*No description yet.*

### ColorPickerButton tint_color_button {#var-tint-color-button}

*No description yet.*

### HSlider tint_strength_slider {#var-tint-strength-slider}

*No description yet.*

### OptionButton tint_mode_option {#var-tint-mode-option}

*No description yet.*

### VBoxContainer variety_box {#var-variety-box}

The VARIETY (2026-11-14): more effects played in its place, one picked at random each time (the whole section: hidden for the kinds that play one fixed thing: a material, a telegraph, a weather)

### ItemList variety_list {#var-variety-list}

*No description yet.*

### OptionButton variety_option {#var-variety-option}

*No description yet.*

### Button variety_add_button {#var-variety-add-button}

*No description yet.*

### Button variety_all_button {#var-variety-all-button}

*No description yet.*

### Button variety_remove_button {#var-variety-remove-button}

*No description yet.*

## Method descriptions

### void initialize_panel() {#method-initialize-panel}

Initialize the panel (called once on creation)

### void setup_for_selection( selection: VFXSelection ) {#method-setup-for-selection}

Setup panel for a specific selection

### VFXSelection get_configured_selection() {#method-get-configured-selection}

Get the configured selection object

### Dictionary validate_configuration() {#method-validate-configuration}

Validate current configuration

### void reset_to_defaults() {#method-reset-to-defaults}

Reset to default values

### Array[String] variety_like( main_name: String, same_name: bool ) {#method-variety-like}

The effects like `main_name` that can be added: the same kind, theme and category (`same_name`: also the same name, every number of it), not the main one

### void refresh_variety( main_name: String ) {#method-refresh-variety}

Shows the variety, and the effects like the main one to add (the dialog calls it when another effect is chosen)

