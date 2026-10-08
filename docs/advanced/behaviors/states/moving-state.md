<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# MovingState

**Inherits:** [MovementState](/advanced/behaviors/states/movement-state) < [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

Simplified MovingState - passes movement data to animation player using blending system

## Variables

| | | |
|---|---|---|
| `Vector3` | [last_velocity](#var-last-velocity) | `Vector3.ZERO` |

## Methods

| | |
|---|---|
| `void` | [enter](#method-enter)() |
| `void` | [exit](#method-exit)() |
| `void` | [update_from_navigation](#method-update-from-navigation)() |
| `void` | [update_with_input_data](#method-update-with-input-data)( `input_vector: Vector2, is_walking: bool, is_crouched: bool` ) |

## Variable descriptions

### Vector3 last_velocity = Vector3.ZERO {#var-last-velocity}

*No description yet.*

## Method descriptions

### void enter() {#method-enter}

*Overrides this function of [MovementState](/advanced/behaviors/states/movement-state).*

### void exit() {#method-exit}

*Overrides this function of [MovementState](/advanced/behaviors/states/movement-state).*

### void update_from_navigation() {#method-update-from-navigation}

Called by MovementStateComponent during process_movement()

### void update_with_input_data( input_vector: Vector2, is_walking: bool, is_crouched: bool ) {#method-update-with-input-data}

Called by WASD controllers to update movement with input data

