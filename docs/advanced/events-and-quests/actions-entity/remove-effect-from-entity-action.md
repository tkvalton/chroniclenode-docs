<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# RemoveEffectFromEntityAction

**Inherits:** [EventAction](/advanced/events-and-quests/bases/event-action) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Action to remove an effect from a specific entity

## Properties

| | | |
|---|---|---|
| `int` | [entity_unique_id](#prop-entity-unique-id) | `0` |
| `int` | [effect_id](#prop-effect-id) | `0` |
| `bool` | [remove_all_instances](#prop-remove-all-instances) | `false` |

## Variables

| | | |
|---|---|---|
| `Entity` | [target_entity](#var-target-entity) | `null` |

## Methods

| | |
|---|---|
| `String` | [get_display_name](#method-get-display-name)() |
| `String` | [get_function_description](#method-get-function-description)() |
| `Entity` | [find_target_entity](#method-find-target-entity)() |
| `Dictionary` | [save](#method-save)() |
| `void` | [load_data](#method-load-data)( `data: Dictionary` ) |

## Property descriptions

### int entity_unique_id = 0 {#prop-entity-unique-id}

Unique ID of the entity to remove effect from

### int effect_id = 0 {#prop-effect-id}

Effect ID to remove

### bool remove_all_instances = false {#prop-remove-all-instances}

Whether to remove all instances of the effect or just the first one

## Variable descriptions

### Entity target_entity = null {#var-target-entity}

*No description yet.*

## Method descriptions

### String get_display_name() {#method-get-display-name}

Return the display name of this Action

### String get_function_description() {#method-get-function-description}

Return a description of this action with parameter placeholders

### Entity find_target_entity() {#method-find-target-entity}

Find the target entity by unique ID

### Dictionary save() {#method-save}

Save action state to a dictionary

### void load_data( data: Dictionary ) {#method-load-data}

Load action state from a dictionary

