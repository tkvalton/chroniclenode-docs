<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# SetEntityFactionAction

**Inherits:** [EventAction](/advanced/events-and-quests/bases/event-action) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Action to change the faction of a specific placed NPC, so it can turn friendly or hostile in the middle of a story

## Properties

| | | |
|---|---|---|
| `int` | [entity_unique_id](#prop-entity-unique-id) | `0` |
| `int` | [faction_id](#prop-faction-id) | `0` |

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

Unique ID of the NPC whose faction changes

### int faction_id = 0 {#prop-faction-id}

The faction to set for the entity

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

