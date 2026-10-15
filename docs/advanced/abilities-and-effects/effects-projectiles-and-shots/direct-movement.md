<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# DirectMovement

**Inherits:** [ProjectileMovement](/advanced/abilities-and-effects/effects-projectiles-and-shots/projectile-movement) < [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

**Inherited by:** [ParametricCurvedMovement](/advanced/abilities-and-effects/effects-projectiles-and-shots/parametric-curved-movement)

Direct movement strategy - straight line to target Target position is captured at start and doesn't update

## Variables

| | | |
|---|---|---|
| `Vector3` | [target_position](#var-target-position) |  |
| `float` | [arrival_threshold](#var-arrival-threshold) | `0.5` |

## Methods

| | |
|---|---|
| `void` | [set_arrival_threshold](#method-set-arrival-threshold)( `threshold: float` ) |
| `Vector3` | [get_captured_target_position](#method-get-captured-target-position)() |
| `float` | [get_distance_to_target](#method-get-distance-to-target)() |
| `bool` | [wants_to_continue](#method-wants-to-continue)() |

## Variable descriptions

### Vector3 target_position {#var-target-position}

Target position captured at movement start

### float arrival_threshold = 0.5 {#var-arrival-threshold}

Distance threshold to consider target reached

## Method descriptions

### void set_arrival_threshold( threshold: float ) {#method-set-arrival-threshold}

Set arrival threshold

### Vector3 get_captured_target_position() {#method-get-captured-target-position}

Get the captured target position

### float get_distance_to_target() {#method-get-distance-to-target}

Override distance calculation to use captured position

### bool wants_to_continue() {#method-wants-to-continue}

Direct movement doesn't need to continue after triggers

