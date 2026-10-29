<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# DetileSlider

**Inherits:** [HBoxContainer](https://docs.godotengine.org/en/stable/classes/class_hboxcontainer.html)

A slider with its number written next to it: the control of the detiling numbers (the Terrain Textures editor and the Detiling panel of the terrain tool). It has the parts of a SpinBox the editors use: `value`, `set_value_no_signal`, `editable` and the signal `value_changed`.

## Variables

| | | |
|---|---|---|
| `HSlider` | [slider](#var-slider) |  |
| `Label` | [value_label](#var-value-label) |  |
| `int` | [decimals](#var-decimals) | `2` |
| `String` | [suffix](#var-suffix) | `""` |
| `float:` | [value](#var-value) |  |
| `bool:` | [editable](#var-editable) |  |

## Methods

| | |
|---|---|
| `void` | [set_tip](#method-set-tip)( `text: String` ) |
| `void` | [set_value_no_signal](#method-set-value-no-signal)( `new_value: float` ) |

## Signals

### value_changed( value: float ) {#signal-value-changed}

## Variable descriptions

### HSlider slider {#var-slider}

*No description yet.*

### Label value_label {#var-value-label}

*No description yet.*

### int decimals = 2 {#var-decimals}

How many decimals the number shows (0 for a whole number).

### String suffix = "" {#var-suffix}

*No description yet.*

### float: value {#var-value}

*No description yet.*

### bool: editable {#var-editable}

*No description yet.*

## Method descriptions

### void set_tip( text: String ) {#method-set-tip}

The tooltip of the slider and of its number.

### void set_value_no_signal( new_value: float ) {#method-set-value-no-signal}

Sets the number without telling anyone (the editor shows a resource).

