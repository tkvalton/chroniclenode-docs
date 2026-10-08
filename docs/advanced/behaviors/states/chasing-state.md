<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ChasingState

**Inherits:** [ActionState](/advanced/behaviors/states/action-state) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

ChasingState with LOS-aware navigation that repositions when stuck

## Variables

| | | |
|---|---|---|
| `float` | [attack_range](#var-attack-range) | `1.0` |
| `Vector3` | [last_target_position](#var-last-target-position) | `Vector3.ZERO` |
| `int` | [repositioning_attempts](#var-repositioning-attempts) | `0` |

## Methods

| | |
|---|---|
| `void` | [enter](#method-enter)() |
| `void` | [exit](#method-exit)() |
| `void` | [update](#method-update)( `delta: float` ) |
| `void` | [update_attack_range](#method-update-attack-range)() |
| `bool` | [is_in_attack_range](#method-is-in-attack-range)() |
| `bool` | [is_ready_to_attack](#method-is-ready-to-attack)() |

## Constants

- `int` **MAX_REPOSITIONING_ATTEMPTS** = `3`

## Variable descriptions

### float attack_range = 1.0 {#var-attack-range}

Calculated attack range distance

### Vector3 last_target_position = Vector3.ZERO {#var-last-target-position}

Track target position to avoid spam updates

### int repositioning_attempts = 0 {#var-repositioning-attempts}

Counter to prevent infinite repositioning attempts

## Method descriptions

### void enter() {#method-enter}

Called when entering the chasing state

### void exit() {#method-exit}

Called when exiting the chasing state

### void update( delta: float ) {#method-update}

Called every frame to update the chasing state

### void update_attack_range() {#method-update-attack-range}

Updates the attack range based on basic attack

### bool is_in_attack_range() {#method-is-in-attack-range}

Checks if the entity is within attack range of its target

### bool is_ready_to_attack() {#method-is-ready-to-attack}

Checks if the entity can attack (in range AND has line of sight)

