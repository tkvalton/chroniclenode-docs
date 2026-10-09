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

*No description yet.*

*Value to Set*

### int value_int = 0 {#prop-value-int}

*No description yet.*

### float value_float = 0.0 {#prop-value-float}

*No description yet.*

### bool value_bool = false {#prop-value-bool}

*No description yet.*

### String value_string = "" {#prop-value-string}

*No description yet.*

*Value Type*

### int value_type = 0  # 0=Int, 1=Float, 2=Bool, 3=String {#prop-value-type}

*No description yet.*

## Method descriptions

### String get_function_description() {#method-get-function-description}

Return a description of this action with parameter placeholders *(from [EventAction](/advanced/events-and-quests/bases/event-action))*

### Dictionary save() {#method-save}

Save action state to a dictionary *(from [EventAction](/advanced/events-and-quests/bases/event-action))*

### void load_data( data: Dictionary ) {#method-load-data}

Load action state from a dictionary *(from [EventAction](/advanced/events-and-quests/bases/event-action))*

