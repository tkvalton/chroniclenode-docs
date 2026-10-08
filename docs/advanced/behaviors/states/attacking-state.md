<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# AttackingState

**Inherits:** [ActionState](/advanced/behaviors/states/action-state) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

AttackingState represents the state when an entity is actively attacking a target. It manages transitions and facing logic, while the combat script handles ability usage.

## Description

Key features:

- Manages transitions to other states (dead target, out of range, etc.)
- Handles entity orientation towards target with angle threshold
- Updates every 0.5 seconds via timer for performance

## Variables

| | | |
|---|---|---|
| `Timer` | [action_timer](#var-action-timer) |  |
| `Vector3` | [last_face_position](#var-last-face-position) | `Vector3.ZERO` |
| `float` | [face_angle_threshold](#var-face-angle-threshold) | `deg_to_rad(15.0)` |
| `float` | [action_interval](#var-action-interval) | `0.5` |

## Methods

| | |
|---|---|
| `void` | [enter](#method-enter)() |
| `void` | [exit](#method-exit)() |
| `void` | [update](#method-update)( `_delta: float` ) |
| `void` | [check_and_update_facing](#method-check-and-update-facing)() |
| `bool` | [should_update_facing](#method-should-update-facing)( `target_position: Vector3` ) |
| `bool` | [is_in_attack_range](#method-is-in-attack-range)() |
| `void` | [return_all_timer](#method-return-all-timer)() |

## Variable descriptions

### Timer action_timer {#var-action-timer}

Single timer for face direction updates

### Vector3 last_face_position = Vector3.ZERO {#var-last-face-position}

Last position we faced toward

### float face_angle_threshold = deg_to_rad(15.0) {#var-face-angle-threshold}

Angle threshold for turning (in radians)

### float action_interval = 0.5 {#var-action-interval}

Action timer interval (in seconds)

## Method descriptions

### void enter() {#method-enter}

Called when entering the attacking state

### void exit() {#method-exit}

Called when exiting the attacking state

### void update( _delta: float ) {#method-update}

Called every frame to check state transitions

### void check_and_update_facing() {#method-check-and-update-facing}

Checks if facing needs updating and performs the update if needed

### bool should_update_facing( target_position: Vector3 ) {#method-should-update-facing}

Determines if we should update facing based on angle threshold

### bool is_in_attack_range() {#method-is-in-attack-range}

Checks if the entity is within attack range of its target

### void return_all_timer() {#method-return-all-timer}

Timer cleanup

