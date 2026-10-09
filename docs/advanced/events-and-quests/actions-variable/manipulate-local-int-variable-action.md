<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ManipulateLocalIntVariableAction

**Inherits:** [EventAction](/advanced/events-and-quests/bases/event-action) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Action to manipulate a local integer variable

## Properties

| | | |
|---|---|---|
| `String` | [variable_key](#prop-variable-key) | `""` |
| `IntOperation` | [operation](#prop-operation) | `IntOperation.ADD` |
| `int` | [amount](#prop-amount) | `1` |

## Methods

| | |
|---|---|
| `String` | [get_function_description](#method-get-function-description)() |
| `Dictionary` | [save](#method-save)() |
| `void` | [load_data](#method-load-data)( `data: Dictionary` ) |

## Enumerations

### enum IntOperation {#enum-intoperation}

- **ADD** = `0`
- **SUBTRACT** = `1`
- **MULTIPLY** = `2`
- **DIVIDE** = `3`

## Property descriptions

### String variable_key = "" {#prop-variable-key}

*No description yet.*

### IntOperation operation = IntOperation.ADD {#prop-operation}

*No description yet.*

### int amount = 1 {#prop-amount}

*No description yet.*

## Method descriptions

### String get_function_description() {#method-get-function-description}

Return a description of this action with parameter placeholders *(from [EventAction](/advanced/events-and-quests/bases/event-action))*

### Dictionary save() {#method-save}

Save action state to a dictionary *(from [EventAction](/advanced/events-and-quests/bases/event-action))*

### void load_data( data: Dictionary ) {#method-load-data}

Load action state from a dictionary *(from [EventAction](/advanced/events-and-quests/bases/event-action))*

