<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# SpawnEntityAction

**Inherits:** [EventAction](/advanced/events-and-quests/bases/event-action) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Action to spawn a new entity (NPC) at a specific position Creates a dynamic entity (no unique ID) that can despawn

## Properties

| | | |
|---|---|---|
| `int` | [entity_id](#prop-entity-id) | `0` |
| `Vector3` | [spawn_position](#prop-spawn-position) | `Vector3.ZERO` |

## Variables

| | | |
|---|---|---|
| `NPC` | [spawned_entity](#var-spawned-entity) | `null` |

## Methods

| | |
|---|---|
| `String` | [get_function_description](#method-get-function-description)() |
| `Dictionary` | [save](#method-save)() |
| `void` | [load_data](#method-load-data)( `data: Dictionary` ) |

## Property descriptions

### int entity_id = 0 {#prop-entity-id}

Entity ID from DatabaseEntities to spawn

### Vector3 spawn_position = Vector3.ZERO {#prop-spawn-position}

Position to spawn the entity at

## Variable descriptions

### NPC spawned_entity = null {#var-spawned-entity}

*No description yet.*

## Method descriptions

### String get_function_description() {#method-get-function-description}

Return a description of this action with parameter placeholders

### Dictionary save() {#method-save}

Save action state to a dictionary

### void load_data( data: Dictionary ) {#method-load-data}

Load action state from a dictionary

