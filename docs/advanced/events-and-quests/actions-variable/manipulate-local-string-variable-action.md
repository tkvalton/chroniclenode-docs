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

The options of string operation: append, prepend, remove.

- **APPEND** = `0`
- **PREPEND** = `1`
- **REMOVE** = `2`

## Property descriptions

### String variable_key = "" {#prop-variable-key}

The name of the local variable.

### StringOperation operation = StringOperation.APPEND {#prop-operation}

What to do with the text (append, prepend or remove).

### String text = "" {#prop-text}

The text for the operation.

## Method descriptions

### String get_function_description() {#method-get-function-description}

The sentence the editor shows for the action, with &#123;placeholders&#125; for its values.

### Dictionary save() {#method-save}

The state of the action for a save.

### void load_data( data: Dictionary ) {#method-load-data}

Restores the state of the action from a save.

