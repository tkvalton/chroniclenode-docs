<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ChangePartySizeAction

**Inherits:** [EventAction](/advanced/events-and-quests/bases/event-action) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Action to change the maximum party size (members beyond a smaller size wait in the reserve)

## Properties

| | | |
|---|---|---|
| `int` | [new_max_party_size](#prop-new-max-party-size) | `4` |

## Methods

| | |
|---|---|
| `String` | [get_function_description](#method-get-function-description)() |
| `Dictionary` | [save](#method-save)() |
| `void` | [load_data](#method-load-data)( `data: Dictionary` ) |

## Property descriptions

### int new_max_party_size = 4 {#prop-new-max-party-size}

New maximum party size (1-20)

## Method descriptions

### String get_function_description() {#method-get-function-description}

Return a description of this action with parameter placeholders

### Dictionary save() {#method-save}

Save action state to a dictionary

### void load_data( data: Dictionary ) {#method-load-data}

Load action state from a dictionary

