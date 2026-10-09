<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# SetEntityPositionAction

**Inherits:** [EventAction](/advanced/events-and-quests/bases/event-action) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Action to teleport/move an entity to a specific position Can optionally interrupt casting and stop movement

## Properties

| | | |
|---|---|---|
| `int` | [entity_unique_id](#prop-entity-unique-id) | `0` |
| `Vector3` | [target_position](#prop-target-position) | `Vector3.ZERO` |
| `bool` | [interrupt_casting](#prop-interrupt-casting) | `true` |
| `bool` | [stop_movement](#prop-stop-movement) | `true` |

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

Unique ID of the entity to move

### Vector3 target_position = Vector3.ZERO {#prop-target-position}

Target position to move the entity to

### bool interrupt_casting = true {#prop-interrupt-casting}

Whether to interrupt casting when teleporting

### bool stop_movement = true {#prop-stop-movement}

Whether to stop movement state (velocity, navigation)

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

