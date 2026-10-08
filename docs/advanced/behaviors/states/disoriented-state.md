<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# DisorientedState

**Inherits:** [ActionState](/advanced/behaviors/states/action-state) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

DisorientedState represents when an entity is disoriented. The entity wanders randomly within a radius of their original position.

## Description

Key features:

- Random wandering within configurable radius
- Periodic direction changes
- Tracks originating entity
- Automatically exits when disorient effect expires (handled by EffectsComponent)

## Variables

| | | |
|---|---|---|
| `float` | [wander_radius](#var-wander-radius) | `5.0` |
| `Timer` | [direction_change_timer](#var-direction-change-timer) |  |
| `Vector3` | [original_position](#var-original-position) |  |
| `Vector3` | [random_target_position](#var-random-target-position) |  |
| `Entity` | [disorienting_entity](#var-disorienting-entity) |  |

## Methods

| | |
|---|---|
| `void` | [enter](#method-enter)() |
| `void` | [update](#method-update)( `_delta: float` ) |
| `void` | [exit](#method-exit)() |
| `void` | [set_state_data](#method-set-state-data)( `data: Dictionary` ) |
| `void` | [return_all_timer](#method-return-all-timer)() |

## Variable descriptions

### float wander_radius = 5.0 {#var-wander-radius}

Wander radius

### Timer direction_change_timer {#var-direction-change-timer}

Timer for changing direction

### Vector3 original_position {#var-original-position}

Original position when entering state

### Vector3 random_target_position {#var-random-target-position}

Current random target position

### Entity disorienting_entity {#var-disorienting-entity}

Entity that caused the disorientation

## Method descriptions

### void enter() {#method-enter}

Called when entering the disoriented state

### void update( _delta: float ) {#method-update}

Called every frame to check state and update wandering

### void exit() {#method-exit}

Called when exiting the disoriented state

### void set_state_data( data: Dictionary ) {#method-set-state-data}

Set state data from external source

### void return_all_timer() {#method-return-all-timer}

Timer cleanup

