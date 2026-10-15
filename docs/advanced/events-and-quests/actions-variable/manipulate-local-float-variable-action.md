<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ManipulateLocalFloatVariableAction

**Inherits:** [EventAction](/advanced/events-and-quests/bases/event-action) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Action to manipulate a local float variable

## Properties

| | | |
|---|---|---|
| `String` | [variable_key](#prop-variable-key) | `""` |
| `FloatOperation` | [operation](#prop-operation) | `FloatOperation.ADD` |
| `float` | [amount](#prop-amount) | `1.0` |

## Methods

| | |
|---|---|
| `String` | [get_function_description](#method-get-function-description)() |
| `Dictionary` | [save](#method-save)() |
| `void` | [load_data](#method-load-data)( `data: Dictionary` ) |

## Enumerations

### enum FloatOperation {#enum-floatoperation}

The options of float operation: add, subtract, multiply, divide.

- **ADD** = `0`
- **SUBTRACT** = `1`
- **MULTIPLY** = `2`
- **DIVIDE** = `3`

## Property descriptions

### String variable_key = "" {#prop-variable-key}

The name of the local variable.

### FloatOperation operation = FloatOperation.ADD {#prop-operation}

What to do with the variable (add, subtract, multiply or divide).

### float amount = 1.0 {#prop-amount}

The number for the operation.

## Method descriptions

### String get_function_description() {#method-get-function-description}

The sentence the editor shows for the action, with &#123;placeholders&#125; for its values.

### Dictionary save() {#method-save}

The state of the action for a save.

### void load_data( data: Dictionary ) {#method-load-data}

Restores the state of the action from a save.

