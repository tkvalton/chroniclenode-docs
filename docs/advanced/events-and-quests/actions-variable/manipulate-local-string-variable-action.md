<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ManipulateLocalStringVariableAction

**Inherits:** [EventAction](/advanced/events-and-quests/bases/event-action) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Action to manipulate a local string variable

## Properties

| | | |
|---|---|---|
| `String` | [variable_key](#prop-variable-key) | `""` |
| `StringOperation` | [operation](#prop-operation) | `StringOperation.APPEND` |
| `String` | [text](#prop-text) | `""` |

## Methods

| | |
|---|---|
| `String` | [get_function_description](#method-get-function-description)() |
| `Dictionary` | [save](#method-save)() |
| `void` | [load_data](#method-load-data)( `data: Dictionary` ) |

## Enumerations

### enum StringOperation {#enum-stringoperation}

- **APPEND** = `0`
- **PREPEND** = `1`
- **REMOVE** = `2`

## Property descriptions

### String variable_key = "" {#prop-variable-key}

*No description yet.*

### StringOperation operation = StringOperation.APPEND {#prop-operation}

*No description yet.*

### String text = "" {#prop-text}

*No description yet.*

## Method descriptions

### String get_function_description() {#method-get-function-description}

Return a description of this action with parameter placeholders *(from [EventAction](/advanced/events-and-quests/bases/event-action))*

### Dictionary save() {#method-save}

Save action state to a dictionary *(from [EventAction](/advanced/events-and-quests/bases/event-action))*

### void load_data( data: Dictionary ) {#method-load-data}

Load action state from a dictionary *(from [EventAction](/advanced/events-and-quests/bases/event-action))*

