<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# RemoveAllEffectsFromEntityAction

**Inherits:** [EventAction](/advanced/events-and-quests/bases/event-action) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Action to remove all effects from a specific entity Clears all buffs, debuffs, and status effects

## Properties

| | | |
|---|---|---|
| `int` | [entity_unique_id](#prop-entity-unique-id) | `0` |
| `bool` | [remove_beneficial](#prop-remove-beneficial) | `true` |
| `bool` | [remove_harmful](#prop-remove-harmful) | `true` |

## Variables

| | | |
|---|---|---|
| `Entity` | [target_entity](#var-target-entity) | `null` |

## Methods

| | |
|---|---|
| `String` | [get_function_description](#method-get-function-description)() |
| `Dictionary` | [save](#method-save)() |
| `void` | [load_data](#method-load-data)( `data: Dictionary` ) |

## Property descriptions

### int entity_unique_id = 0 {#prop-entity-unique-id}

Unique ID of the entity to clear effects from

### bool remove_beneficial = true {#prop-remove-beneficial}

Whether to remove beneficial effects (buffs)

### bool remove_harmful = true {#prop-remove-harmful}

Whether to remove harmful effects (debuffs)

## Variable descriptions

### Entity target_entity = null {#var-target-entity}

*No description yet.*

## Method descriptions

### String get_function_description() {#method-get-function-description}

Return a description of this action with parameter placeholders

### Dictionary save() {#method-save}

Save action state to a dictionary

### void load_data( data: Dictionary ) {#method-load-data}

Load action state from a dictionary

