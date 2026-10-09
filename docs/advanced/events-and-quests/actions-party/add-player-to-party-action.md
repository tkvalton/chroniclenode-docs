<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# AddPlayerToPartyAction

**Inherits:** [EventAction](/advanced/events-and-quests/bases/event-action) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Action to add a player to the party from a CharacterDefinition

## Properties

| | | |
|---|---|---|
| `int` | [character_definition_id](#prop-character-definition-id) | `0` |

## Methods

| | |
|---|---|
| `String` | [get_function_description](#method-get-function-description)() |
| `Dictionary` | [save](#method-save)() |
| `void` | [load_data](#method-load-data)( `data: Dictionary` ) |

## Property descriptions

### int character_definition_id = 0 {#prop-character-definition-id}

Character definition ID to create and add as a player

## Method descriptions

### String get_function_description() {#method-get-function-description}

Return a description of this action with parameter placeholders

### Dictionary save() {#method-save}

Save action state to a dictionary

### void load_data( data: Dictionary ) {#method-load-data}

Load action state from a dictionary

