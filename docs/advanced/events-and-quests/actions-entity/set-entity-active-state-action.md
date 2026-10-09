<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# SetEntityActiveStateAction

**Inherits:** [EventAction](/advanced/events-and-quests/bases/event-action) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Action to activate or deactivate an entity When deactivated: entity fades out, stops processing, pauses behavior When activated: entity fades in, resumes processing, activates behavior

## Properties

| | | |
|---|---|---|
| `int` | [entity_unique_id](#prop-entity-unique-id) | `0` |
| `bool` | [set_active](#prop-set-active) | `true` |

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

Unique ID of the entity to set active state

### bool set_active = true {#prop-set-active}

Whether to activate (true) or deactivate (false) the entity

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

