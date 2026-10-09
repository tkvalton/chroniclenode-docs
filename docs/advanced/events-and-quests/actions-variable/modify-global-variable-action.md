<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ModifyGlobalVariableAction

**Inherits:** [EventAction](/advanced/events-and-quests/bases/event-action) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Universal action to modify a global variable (numeric operations and string manipulation)

## Properties

| | | |
|---|---|---|
| `String` | [variable_key](#prop-variable-key) | `""` |
| `Operation` | [operation](#prop-operation) | `Operation.ADD` |
| `int` | [amount_int](#prop-amount-int) | `1` |
| `float` | [amount_float](#prop-amount-float) | `1.0` |
| `String` | [append_text](#prop-append-text) | `""` |

## Methods

| | |
|---|---|
| `String` | [get_function_description](#method-get-function-description)() |
| `Dictionary` | [save](#method-save)() |
| `void` | [load_data](#method-load-data)( `data: Dictionary` ) |

## Enumerations

### enum Operation {#enum-operation}

- **ADD** = `0`
- **SUBTRACT** = `1`
- **MULTIPLY** = `2`
- **DIVIDE** = `3`
- **APPEND** = `4`

## Property descriptions

### String variable_key = "" {#prop-variable-key}

*No description yet.*

### Operation operation = Operation.ADD {#prop-operation}

*No description yet.*

*Numeric Values*

### int amount_int = 1 {#prop-amount-int}

*No description yet.*

### float amount_float = 1.0 {#prop-amount-float}

*No description yet.*

*String Values*

### String append_text = "" {#prop-append-text}

*No description yet.*

## Method descriptions

### String get_function_description() {#method-get-function-description}

Return a description of this action with parameter placeholders *(from [EventAction](/advanced/events-and-quests/bases/event-action))*

### Dictionary save() {#method-save}

Save action state to a dictionary *(from [EventAction](/advanced/events-and-quests/bases/event-action))*

### void load_data( data: Dictionary ) {#method-load-data}

Load action state from a dictionary *(from [EventAction](/advanced/events-and-quests/bases/event-action))*

