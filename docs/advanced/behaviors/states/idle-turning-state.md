<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# IdleTurningState

**Inherits:** [MovementState](/advanced/behaviors/states/movement-state) < [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

Turn-in-place animation while the entity turns without moving. Entry and exit are decided by MovementStateComponent._check_state_transitions via Entity.is_turning(); this state only plays the animation and keeps its blend direction current.

## Variables

| | | |
|---|---|---|
| `float` | [target_turn_direction](#var-target-turn-direction) | `0.0` |

## Methods

| | |
|---|---|
| `void` | [enter](#method-enter)() |
| `void` | [exit](#method-exit)() |
| `void` | [process_turn_state](#method-process-turn-state)( `_delta: float` ) |

## Variable descriptions

### float target_turn_direction = 0.0 {#var-target-turn-direction}

The direction of the turn (negative is left).

## Method descriptions

### void enter() {#method-enter}

The entity turns in place: plays the turn animation.

### void exit() {#method-exit}

Stops the turn animation.

### void process_turn_state( _delta: float ) {#method-process-turn-state}

Called every physics tick while this state is active (MovementStateComponent.process_movement). Mouse-look can reverse direction without leaving the state, so refresh the blend position.

