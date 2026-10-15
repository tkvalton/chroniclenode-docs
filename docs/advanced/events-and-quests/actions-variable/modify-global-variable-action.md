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

The options of operation: add, subtract, multiply, divide, append, toggle.

- **ADD** = `0`
- **SUBTRACT** = `1`
- **MULTIPLY** = `2`
- **DIVIDE** = `3`
- **APPEND** = `4`

## Property descriptions

### String variable_key = "" {#prop-variable-key}

The name of the global variable.

### Operation operation = Operation.ADD {#prop-operation}

What to do with the variable (add, subtract, multiply, divide, append or toggle).

*Numeric Values*

### int amount_int = 1 {#prop-amount-int}

The whole number for the operation.

### float amount_float = 1.0 {#prop-amount-float}

The decimal number for the operation.

*String Values*

### String append_text = "" {#prop-append-text}

The text to add to a text variable.

## Method descriptions

### String get_function_description() {#method-get-function-description}

The sentence the editor shows for the action, with &#123;placeholders&#125; for its values.

### Dictionary save() {#method-save}

The state of the action for a save.

### void load_data( data: Dictionary ) {#method-load-data}

Restores the state of the action from a save.

