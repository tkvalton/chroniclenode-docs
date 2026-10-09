<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# CurveEditorControl

**Inherits:** [VBoxContainer](https://docs.godotengine.org/en/stable/classes/class_vboxcontainer.html)

## Properties

| | | |
|---|---|---|
| `int` | [curve_height](#prop-curve-height) | `200` |
| `bool` | [show_preview](#prop-show-preview) | `true` |
| `int` | [preview_samples](#prop-preview-samples) | `100` |
| `float` | [max_value](#prop-max-value) | `500.0  # Configurable max value` |

## Variables

| | | |
|---|---|---|
| `Curve` | [curve](#var-curve) |  |
| `EditorResourcePicker` | [resource_picker](#var-resource-picker) |  |
| `RichTextLabel` | [preview_label](#var-preview-label) |  |
| `MenuButton` | [preset_button](#var-preset-button) |  |
| `TextureRect` | [curve_texture_rect](#var-curve-texture-rect) |  |
| `SpinBox` | [max_value_spinbox](#var-max-value-spinbox) |  |

## Methods

| | |
|---|---|
| `void` | [set_max_value](#method-set-max-value)( `new_max_value: float` ) |
| `float` | [get_max_value](#method-get-max-value)() |
| `void` | [set_curve](#method-set-curve)( `new_curve: Curve` ) |
| `Curve` | [get_curve](#method-get-curve)() |
| `bool` | [has_curve](#method-has-curve)() |
| `void` | [clear_curve](#method-clear-curve)() |
| `void` | [open_curve_editor](#method-open-curve-editor)() |
| `float` | [sample_curve](#method-sample-curve)( `t: float` ) |
| `void` | [ensure_curve](#method-ensure-curve)() |

## Signals

### curve_changed( curve: Curve ) {#signal-curve-changed}

### max_value_changed( max_value: float ) {#signal-max-value-changed}

## Property descriptions

### int curve_height = 200 {#prop-curve-height}

*No description yet.*

### bool show_preview = true {#prop-show-preview}

*No description yet.*

### int preview_samples = 100 {#prop-preview-samples}

*No description yet.*

### float max_value = 500.0  # Configurable max value {#prop-max-value}

*No description yet.*

## Variable descriptions

### Curve curve {#var-curve}

*No description yet.*

### EditorResourcePicker resource_picker {#var-resource-picker}

*No description yet.*

### RichTextLabel preview_label {#var-preview-label}

*No description yet.*

### MenuButton preset_button {#var-preset-button}

*No description yet.*

### TextureRect curve_texture_rect {#var-curve-texture-rect}

*No description yet.*

### SpinBox max_value_spinbox {#var-max-value-spinbox}

*No description yet.*

## Method descriptions

### void set_max_value( new_max_value: float ) {#method-set-max-value}

*No description yet.*

### float get_max_value() {#method-get-max-value}

*No description yet.*

### void set_curve( new_curve: Curve ) {#method-set-curve}

*No description yet.*

### Curve get_curve() {#method-get-curve}

*No description yet.*

### bool has_curve() {#method-has-curve}

*No description yet.*

### void clear_curve() {#method-clear-curve}

*No description yet.*

### void open_curve_editor() {#method-open-curve-editor}

*No description yet.*

### float sample_curve( t: float ) {#method-sample-curve}

*No description yet.*

### void ensure_curve() {#method-ensure-curve}

*No description yet.*

