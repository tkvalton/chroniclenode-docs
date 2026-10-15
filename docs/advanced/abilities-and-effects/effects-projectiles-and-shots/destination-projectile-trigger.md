<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# DestinationProjectileTrigger

**Inherits:** [ProjectileTrigger](/advanced/abilities-and-effects/effects-projectiles-and-shots/projectile-trigger) < [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

Destination-based trigger strategy - updated for InteractableObject support Used for homing missiles that explode on proximity, etc.

## Variables

| | | |
|---|---|---|
| `float` | [arrival_threshold](#var-arrival-threshold) | `1.0` |
| `bool` | [track_moving_targets](#var-track-moving-targets) | `true` |
| `bool` | [also_trigger_on_collision](#var-also-trigger-on-collision) | `false` |

## Methods

| | |
|---|---|
| `float` | [get_distance_to_target](#method-get-distance-to-target)() |
| `Vector3` | [get_direction_to_target](#method-get-direction-to-target)() |
| `void` | [set_arrival_threshold](#method-set-arrival-threshold)( `threshold: float` ) |
| `void` | [set_track_moving_targets](#method-set-track-moving-targets)( `track: bool` ) |
| `void` | [set_also_trigger_on_collision](#method-set-also-trigger-on-collision)( `trigger: bool` ) |
| `bool` | [is_target_valid](#method-is-target-valid)() |

## Variable descriptions

### float arrival_threshold = 1.0 {#var-arrival-threshold}

Distance threshold to consider destination reached

### bool track_moving_targets = true {#var-track-moving-targets}

Whether to track moving targets (Entity or InteractableObject)

### bool also_trigger_on_collision = false {#var-also-trigger-on-collision}

Whether to also trigger on collision

## Method descriptions

### float get_distance_to_target() {#method-get-distance-to-target}

Get distance to target (handles Entity, InteractableObject vs Vector3)

### Vector3 get_direction_to_target() {#method-get-direction-to-target}

Get direction to target - Updated for InteractableObject

### void set_arrival_threshold( threshold: float ) {#method-set-arrival-threshold}

Set arrival threshold

### void set_track_moving_targets( track: bool ) {#method-set-track-moving-targets}

Set whether to track moving targets

### void set_also_trigger_on_collision( trigger: bool ) {#method-set-also-trigger-on-collision}

Set whether to also trigger on collision

### bool is_target_valid() {#method-is-target-valid}

Check if target is still valid

