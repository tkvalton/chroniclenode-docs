<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# MovementStateComponent

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

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

- **IDLE** = `0`
- **IDLE_TURNING** = `1`
- **MOVING** = `2`
- **FALLING** = `3`
- **DIRECTIONAL** = `4`
- **CLIMBING** = `5`

## Variable descriptions

### MovementStateComponent.MovementStateName initial_state = MovementStateName.IDLE {#var-initial-state}

*No description yet.*

### bool has_idle_state = true {#var-has-idle-state}

*No description yet.*

### bool has_walking_state = true {#var-has-walking-state}

*No description yet.*

### bool has_running_state = true {#var-has-running-state}

*No description yet.*

### bool has_falling_state = true {#var-has-falling-state}

*No description yet.*

### bool has_idle_turning_state = true {#var-has-idle-turning-state}

*No description yet.*

### bool has_displaced_state = true {#var-has-displaced-state}

*No description yet.*

### bool has_directional_state = true {#var-has-directional-state}

*No description yet.*

### bool has_climbing_state = true {#var-has-climbing-state}

*No description yet.*

### MovementState current_state {#var-current-state}

*No description yet.*

### Dictionary states =  {#var-states}

*No description yet.*

### Entity entity {#var-entity}

*No description yet.*

## Method descriptions

### void initialize_movement_state_component( entity_ref: Entity ) {#method-initialize-movement-state-component}

Initialize the movement state manager

### void set_active_state( active: bool ) {#method-set-active-state}

*No description yet.*

### void process_movement( delta: float ) {#method-process-movement}

Called every physics frame to update the current state

### void change_movement_state( state_name: MovementStateName, _caller: String = "NotDefined" ) {#method-change-movement-state}

Changes the current movement state

### MovementState get_state( state_name: MovementStateName ) {#method-get-state}

Retrieves a state by name

