<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# SetLocalIntVariableAction

**Inherits:** [EventAction](/advanced/events-and-quests/bases/event-action) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Action to set a local integer variable to a specific value

## Properties

| | | |
|---|---|---|
| `String` | [variable_key](#prop-variable-key) | `""` |
| `int` | [value](#prop-value) | `0` |

## Methods

| | |
|---|---|
| `String` | [get_function_description](#method-get-function-description)() |
| `Dictionary` | [save](#method-save)() |
| `void` | [load_data](#method-load-data)( `data: Dictionary` ) |

## Property descriptions

### String variable_key = "" {#prop-variable-key}

The name of the local variable.

### int value = 0 {#prop-value}

The whole number to set.

## Method descriptions

### String get_function_description() {#method-get-function-description}

The sentence the editor shows for the action, with &#123;placeholders&#125; for its values.

### Dictionary save() {#method-save}

The state of the action for a save.

### void load_data( data: Dictionary ) {#method-load-data}

Restores the state of the action from a save.

