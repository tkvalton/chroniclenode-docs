<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# CustomSlider

**Inherits:** [HBoxContainer](https://docs.godotengine.org/en/stable/classes/class_hboxcontainer.html)

CustomSlider - Labeled slider control for blend shape and other value adjustments Emits value_changed signal with the new value when slider changes

## Properties

| | | |
|---|---|---|
| `String` | [label_text](#prop-label-text) | `"":` |
| `float` | [min_value](#prop-min-value) | `0.0:` |
| `float` | [max_value](#prop-max-value) | `1.0:` |
| `float` | [step](#prop-step) | `0.01:` |
| `float` | [initial_value](#prop-initial-value) | `0.5:` |
| `bool` | [show_value_label](#prop-show-value-label) | `true` |

## Methods

| | |
|---|---|
| `void` | [set_label](#method-set-label)( `text: String` ) |
| `float` | [get_value](#method-get-value)() |
| `void` | [set_value_silent](#method-set-value-silent)( `value: float` ) |
| `void` | [set_value](#method-set-value)( `value: float` ) |
| `void` | [reset](#method-reset)() |

## Signals

### value_changed( value: float ) {#signal-value-changed}

## Property descriptions

### String label_text = "": {#prop-label-text}

*No description yet.*

### float min_value = 0.0: {#prop-min-value}

*No description yet.*

### float max_value = 1.0: {#prop-max-value}

*No description yet.*

### float step = 0.01: {#prop-step}

*No description yet.*

### float initial_value = 0.5: {#prop-initial-value}

*No description yet.*

### bool show_value_label = true {#prop-show-value-label}

*No description yet.*

## Method descriptions

### void set_label( text: String ) {#method-set-label}

Set the label text

### float get_value() {#method-get-value}

Get current slider value

### void set_value_silent( value: float ) {#method-set-value-silent}

Set slider value without emitting signal

### void set_value( value: float ) {#method-set-value}

Set slider value (emits signal)

### void reset() {#method-reset}

Reset to initial value

