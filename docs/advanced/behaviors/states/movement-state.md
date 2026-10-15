<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# MovementState

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

**Inherited by:** [ClimbingState](/advanced/behaviors/states/climbing-state), [DirectionalMovementState](/advanced/behaviors/states/directional-movement-state), [FallingState](/advanced/behaviors/states/falling-state), [IdleState](/advanced/behaviors/states/idle-state), [IdleTurningState](/advanced/behaviors/states/idle-turning-state), [MovingState](/advanced/behaviors/states/moving-state)

The base of the movement states of an entity (idle, moving, falling, climbing ...). It keeps the manager, the entity and the animation player, and plays the animation of the state; the states only decide what to play, the physics is not here.

## Variables

| | | |
|---|---|---|
| `MovementStateComponent` | [manager](#var-manager) | `null` |
| `Entity` | [entity](#var-entity) | `null` |
| `EntityAnimationPlayer` | [animation_player](#var-animation-player) | `null` |

## Methods

| | |
|---|---|
| `void` | [setup_state](#method-setup-state)( `movement_manager: MovementStateComponent, state_entity: Entity` ) |
| `void` | [enter](#method-enter)() |
| `void` | [exit](#method-exit)() |
| `void` | [return_all_timer](#method-return-all-timer)() |

## Variable descriptions

### MovementStateComponent manager = null {#var-manager}

Reference to managers

### Entity entity = null {#var-entity}

The entity this state moves.

### EntityAnimationPlayer animation_player = null {#var-animation-player}

Animation-related properties

## Method descriptions

### void setup_state( movement_manager: MovementStateComponent, state_entity: Entity ) {#method-setup-state}

Sets the manager reference for the new architecture

### void enter() {#method-enter}

Called when entering the state

### void exit() {#method-exit}

Called when exiting the state

### void return_all_timer() {#method-return-all-timer}

Timer clean up class

