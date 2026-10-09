<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# EffectPropertiesBase

**Inherits:** [Control](https://docs.godotengine.org/en/stable/classes/class_control.html)

**Inherited by:** [CompositeEffectProperties](/advanced/editor/abilities/composite-effect-properties)

Base class for all effect property UI panels Handles common functionality and provides interface for specific effect properties

## Variables

| | | |
|---|---|---|
| `Effect` | [current_effect](#var-current-effect) |  |
| `bool` | [is_loading](#var-is-loading) | `false` |

## Methods

| | |
|---|---|
| `void` | [load_effect_properties](#method-load-effect-properties)( `effect: Effect` ) |
| `void` | [apply_theme](#method-apply-theme)() |
| `Array[String]` | [validate_properties](#method-validate-properties)() |
| `void` | [connect_property_signal](#method-connect-property-signal)( `control: Control, signal_name: String, callback: Callable` ) |
| `void` | [apply_theme_to_button](#method-apply-theme-to-button)( `button: Button` ) |
| `void` | [apply_theme_to_line_edit](#method-apply-theme-to-line-edit)( `line_edit: LineEdit` ) |
| `void` | [apply_theme_to_spin_box](#method-apply-theme-to-spin-box)( `spin_box: SpinBox` ) |
| `void` | [apply_theme_to_option_button](#method-apply-theme-to-option-button)( `option_button: OptionButton` ) |
| `void` | [apply_theme_to_check_box](#method-apply-theme-to-check-box)( `check_box: CheckBox` ) |
| `void` | [apply_theme_to_text_edit](#method-apply-theme-to-text-edit)( `text_edit: TextEdit` ) |
| `void` | [setup_float_spin_box](#method-setup-float-spin-box)( `spin_box: SpinBox, min_val: float = 0.0, max_val: float = 999.0, step: float = 0.1, value: float = 0.0` ) |
| `void` | [setup_int_spin_box](#method-setup-int-spin-box)( `spin_box: SpinBox, min_val: int = 0, max_val: int = 999, step: int = 1, value: int = 0` ) |
| `void` | [setup_option_button](#method-setup-option-button)( `option_button: OptionButton, items: Array[String], selected_index: int = 0` ) |
| `Button` | [create_resource_selection_button](#method-create-resource-selection-button)( `current_resource: Resource, resource_type: String, callback: Callable` ) |

## Signals

### property_changed() {#signal-property-changed}

## Variable descriptions

### Effect current_effect {#var-current-effect}

*No description yet.*

### bool is_loading = false {#var-is-loading}

*No description yet.*

## Method descriptions

### void load_effect_properties( effect: Effect ) {#method-load-effect-properties}

Override this to load effect-specific properties into UI

### void apply_theme() {#method-apply-theme}

Override this to apply theme to UI components

### Array[String] validate_properties() {#method-validate-properties}

Override this to validate current property values

### void connect_property_signal( control: Control, signal_name: String, callback: Callable ) {#method-connect-property-signal}

Setup a common signal connection with change tracking

### void apply_theme_to_button( button: Button ) {#method-apply-theme-to-button}

Apply theme to a button

### void apply_theme_to_line_edit( line_edit: LineEdit ) {#method-apply-theme-to-line-edit}

Apply theme to a line edit

### void apply_theme_to_spin_box( spin_box: SpinBox ) {#method-apply-theme-to-spin-box}

Apply theme to a spin box

### void apply_theme_to_option_button( option_button: OptionButton ) {#method-apply-theme-to-option-button}

Apply theme to an option button

### void apply_theme_to_check_box( check_box: CheckBox ) {#method-apply-theme-to-check-box}

Apply theme to a check box

### void apply_theme_to_text_edit( text_edit: TextEdit ) {#method-apply-theme-to-text-edit}

Apply theme to a text edit

### void setup_float_spin_box( spin_box: SpinBox, min_val: float = 0.0, max_val: float = 999.0, step: float = 0.1, value: float = 0.0 ) {#method-setup-float-spin-box}

Setup a float spin box with common properties

### void setup_int_spin_box( spin_box: SpinBox, min_val: int = 0, max_val: int = 999, step: int = 1, value: int = 0 ) {#method-setup-int-spin-box}

Setup an integer spin box with common properties

### void setup_option_button( option_button: OptionButton, items: Array[String], selected_index: int = 0 ) {#method-setup-option-button}

Setup an option button with items

### Button create_resource_selection_button( current_resource: Resource, resource_type: String, callback: Callable ) {#method-create-resource-selection-button}

Create a resource selection button for specific resource types

