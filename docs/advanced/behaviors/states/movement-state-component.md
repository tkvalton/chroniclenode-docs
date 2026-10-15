<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# MovementStateComponent

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

MovementStateComponent handles the movement state system for entities. It manages transitions between different movement states like idle, walking, running, etc. Simplified for blending system - animations blend automatically between states. Also handles physics for displacement effects.

## Variables

| | | |
|---|---|---|
| `MovementStateComponent.MovementStateName` | [initial_state](#var-initial-state) | `MovementStateName.IDLE` |
| `bool` | [has_idle_state](#var-has-idle-state) | `true` |
| `bool` | [has_walking_state](#var-has-walking-state) | `true` |
| `bool` | [has_running_state](#var-has-running-state) | `true` |
| `bool` | [has_falling_state](#var-has-falling-state) | `true` |
| `bool` | [has_idle_turning_state](#var-has-idle-turning-state) | `true` |
| `bool` | [has_displaced_state](#var-has-displaced-state) | `true` |
| `bool` | [has_directional_state](#var-has-directional-state) | `true` |
| `bool` | [has_climbing_state](#var-has-climbing-state) | `true` |
| `MovementState` | [current_state](#var-current-state) |  |
| `Dictionary` | [states](#var-states) | `{}` |
| `Entity` | [entity](#var-entity) |  |

## Methods

| | |
|---|---|
| `void` | [initialize_movement_state_component](#method-initialize-movement-state-component)( `entity_ref: Entity` ) |
| `void` | [set_active_state](#method-set-active-state)( `active: bool` ) |
| `void` | [process_movement](#method-process-movement)( `delta: float` ) |
| `void` | [change_movement_state](#method-change-movement-state)( `state_name: MovementStateName, _caller: String = "NotDefined"` ) |
| `MovementState` | [get_state](#method-get-state)( `state_name: MovementStateName` ) |

## Enumerations

### enum MovementStateName {#enum-movementstatename}

The options of movement state name: idle, idle turning, moving, falling, directional, climbing.

- **IDLE** = `0`
- **IDLE_TURNING** = `1`
- **MOVING** = `2`
- **FALLING** = `3`
- **DIRECTIONAL** = `4`
- **CLIMBING** = `5`

## Variable descriptions

### MovementStateComponent.MovementStateName initial_state = MovementStateName.IDLE {#var-initial-state}

Initial movement state to be set on startup

### bool has_idle_state = true {#var-has-idle-state}

Flags to enable/disable specific movement states

### bool has_walking_state = true {#var-has-walking-state}

True when the entity has a walking state.

### bool has_running_state = true {#var-has-running-state}

True when the entity has a running state.

### bool has_falling_state = true {#var-has-falling-state}

True when the entity has a falling state.

### bool has_idle_turning_state = true {#var-has-idle-turning-state}

True when the entity has a turn in place state.

### bool has_displaced_state = true {#var-has-displaced-state}

True when the entity has a displaced state (it is pushed or pulled).

### bool has_directional_state = true {#var-has-directional-state}

True when the entity has a directional movement state.

### bool has_climbing_state = true {#var-has-climbing-state}

True when the entity has a climbing state.

### MovementState current_state {#var-current-state}

Current active movement state

### Dictionary states =  {#var-states}

Dictionary to store all states

### Entity entity {#var-entity}

References

## Method descriptions

### void initialize_movement_state_component( entity_ref: Entity ) {#method-initialize-movement-state-component}

Initialize the movement state manager

### void set_active_state( active: bool ) {#method-set-active-state}

#Set active state for the movement manager

### void process_movement( delta: float ) {#method-process-movement}

Called every physics frame to update the current state

### void change_movement_state( state_name: MovementStateName, _caller: String = "NotDefined" ) {#method-change-movement-state}

Changes the current movement state

### MovementState get_state( state_name: MovementStateName ) {#method-get-state}

Retrieves a state by name

