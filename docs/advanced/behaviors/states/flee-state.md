<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# FleeState

**Inherits:** [ActionState](/advanced/behaviors/states/action-state) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

FleeState represents when an entity is fleeing from another entity. The entity runs away from the originator of the flee effect.

## Description

Key features:

- Runs away from specified entity
- Periodic direction updates to maintain distance
- Configurable max flee distance
- Automatically exits when flee effect expires (handled by EffectsComponent)

## Variables

| | | |
|---|---|---|
| `Entity` | [flee_from_entity](#var-flee-from-entity) |  |
| `float` | [max_flee_distance](#var-max-flee-distance) | `25.0` |
| `Vector3` | [original_position](#var-original-position) |  |

## Methods

| | |
|---|---|
| `void` | [enter](#method-enter)() |
| `void` | [update](#method-update)( `_delta: float` ) |
| `void` | [exit](#method-exit)() |
| `void` | [set_state_data](#method-set-state-data)( `data: Dictionary` ) |
| `void` | [return_all_timer](#method-return-all-timer)() |

## Variable descriptions

### Entity flee_from_entity {#var-flee-from-entity}

Entity to flee from

### float max_flee_distance = 25.0 {#var-max-flee-distance}

Max distance to flee before stopping

### Vector3 original_position {#var-original-position}

Original position when entering state

## Method descriptions

### void enter() {#method-enter}

Called when entering the flee state

### void update( _delta: float ) {#method-update}

Called every frame to check state and distance

### void exit() {#method-exit}

Called when exiting the flee state

### void set_state_data( data: Dictionary ) {#method-set-state-data}

Set state data from external source

### void return_all_timer() {#method-return-all-timer}

Timer cleanup

