<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# SpawnInteractableAction

**Inherits:** [EventAction](/advanced/events-and-quests/bases/event-action) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Action to spawn a new dynamic interactable at a specific position Creates interactables that don't have UniqueInteractableData (can despawn)

## Properties

| | | |
|---|---|---|
| `int` | [interactable_id](#prop-interactable-id) | `0` |
| `Vector3` | [spawn_position](#prop-spawn-position) | `Vector3.ZERO` |
| `Vector3` | [spawn_rotation](#prop-spawn-rotation) | `Vector3.ZERO` |
| `int` | [summoner_entity_id](#prop-summoner-entity-id) | `0` |

## Variables

| | | |
|---|---|---|
| `InteractableObject` | [spawned_interactable](#var-spawned-interactable) | `null` |
| `Entity` | [summoner](#var-summoner) | `null` |

## Methods

| | |
|---|---|
| `String` | [get_function_description](#method-get-function-description)() |
| `Dictionary` | [save](#method-save)() |
| `void` | [load_data](#method-load-data)( `data: Dictionary` ) |

## Property descriptions

### int interactable_id = 0 {#prop-interactable-id}

Choose spawn method: true for category/scene, false for type

### Vector3 spawn_position = Vector3.ZERO {#prop-spawn-position}

Position to spawn the interactable at

### Vector3 spawn_rotation = Vector3.ZERO {#prop-spawn-rotation}

Optional rotation for the spawned interactable

### int summoner_entity_id = 0 {#prop-summoner-entity-id}

Optional summoner entity (for effect-created interactables)

## Variable descriptions

### InteractableObject spawned_interactable = null {#var-spawned-interactable}

*No description yet.*

### Entity summoner = null {#var-summoner}

*No description yet.*

## Method descriptions

### String get_function_description() {#method-get-function-description}

Return a description of this action with parameter placeholders

### Dictionary save() {#method-save}

Save action state to a dictionary

### void load_data( data: Dictionary ) {#method-load-data}

Load action state from a dictionary

