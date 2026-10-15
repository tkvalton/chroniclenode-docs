<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# SetGlobalVariableAction

**Inherits:** [EventAction](/advanced/events-and-quests/bases/event-action) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Universal action to set a global variable to a specific value

## Properties

| | | |
|---|---|---|
| `String` | [variable_key](#prop-variable-key) | `""` |
| `int` | [value_int](#prop-value-int) | `0` |
| `float` | [value_float](#prop-value-float) | `0.0` |
| `bool` | [value_bool](#prop-value-bool) | `false` |
| `String` | [value_string](#prop-value-string) | `""` |
| `int` | [value_type](#prop-value-type) | `0  # 0=Int, 1=Float, 2=Bool, 3=String` |

## Methods

| | |
|---|---|
| `String` | [get_function_description](#method-get-function-description)() |
| `Dictionary` | [save](#method-save)() |
| `void` | [load_data](#method-load-data)( `data: Dictionary` ) |

## Property descriptions

### String variable_key = "" {#prop-variable-key}

The name of the global variable.

*Value to Set*

### int value_int = 0 {#prop-value-int}

The whole number to set.

### float value_float = 0.0 {#prop-value-float}

The decimal number to set.

### bool value_bool = false {#prop-value-bool}

The yes/no value to set.

### String value_string = "" {#prop-value-string}

The text to set.

*Value Type*

### int value_type = 0  # 0=Int, 1=Float, 2=Bool, 3=String {#prop-value-type}

Which kind of value to set (whole number, decimal, yes/no or text).

## Method descriptions

### String get_function_description() {#method-get-function-description}

The sentence the editor shows for the action, with &#123;placeholders&#125; for its values.

### Dictionary save() {#method-save}

The state of the action for a save.

### void load_data( data: Dictionary ) {#method-load-data}

Restores the state of the action from a save.

