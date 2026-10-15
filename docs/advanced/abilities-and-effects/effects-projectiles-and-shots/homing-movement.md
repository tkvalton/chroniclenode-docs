<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# HomingMovement

**Inherits:** [ProjectileMovement](/advanced/abilities-and-effects/effects-projectiles-and-shots/projectile-movement) < [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

**Inherited by:** [CurvedHomingMovement](/advanced/abilities-and-effects/effects-projectiles-and-shots/curved-homing-movement)

Homing movement strategy - continuously tracks and follows target Updates direction each frame to chase moving targets

## Variables

| | | |
|---|---|---|
| `float` | [homing_strength](#var-homing-strength) | `1.0` |
| `float` | [max_turn_rate](#var-max-turn-rate) | `PI * 2.0  # 360 degrees per second` |
| `float` | [arrival_threshold](#var-arrival-threshold) | `1.0` |
| `bool` | [use_smooth_steering](#var-use-smooth-steering) | `true` |
| `float` | [max_speed](#var-max-speed) | `30.0` |
| `Vector3` | [velocity](#var-velocity) | `Vector3.ZERO` |

## Methods

| | |
|---|---|
| `void` | [set_homing_strength](#method-set-homing-strength)( `strength: float` ) |
| `void` | [set_max_turn_rate_degrees](#method-set-max-turn-rate-degrees)( `degrees_per_second: float` ) |
| `void` | [set_arrival_threshold](#method-set-arrival-threshold)( `threshold: float` ) |
| `void` | [set_smooth_steering](#method-set-smooth-steering)( `enabled: bool` ) |
| `void` | [set_max_speed](#method-set-max-speed)( `new_max_speed: float` ) |
| `Vector3` | [get_current_velocity](#method-get-current-velocity)() |
| `float` | [get_current_actual_speed](#method-get-current-actual-speed)() |
| `float` | [get_angle_to_target](#method-get-angle-to-target)() |
| `bool` | [is_facing_target](#method-is-facing-target)( `tolerance_degrees: float = 10.0` ) |
| `bool` | [wants_to_continue](#method-wants-to-continue)() |
| `void` | [cleanup](#method-cleanup)() |

## Variable descriptions

### float homing_strength = 1.0 {#var-homing-strength}

How quickly the projectile can turn (0.0 to 1.0)

### float max_turn_rate = PI * 2.0  # 360 degrees per second {#var-max-turn-rate}

Maximum turn rate per second (in radians)

### float arrival_threshold = 1.0 {#var-arrival-threshold}

Distance threshold to consider target reached

### bool use_smooth_steering = true {#var-use-smooth-steering}

Whether to use smooth steering or instant direction changes

### float max_speed = 30.0 {#var-max-speed}

Maximum speed the projectile can reach

### Vector3 velocity = Vector3.ZERO {#var-velocity}

Current velocity vector

## Method descriptions

### void set_homing_strength( strength: float ) {#method-set-homing-strength}

Set homing strength (0.0 = no homing, 1.0 = perfect homing)

### void set_max_turn_rate_degrees( degrees_per_second: float ) {#method-set-max-turn-rate-degrees}

Set maximum turn rate in degrees per second

### void set_arrival_threshold( threshold: float ) {#method-set-arrival-threshold}

Set arrival threshold

### void set_smooth_steering( enabled: bool ) {#method-set-smooth-steering}

Enable/disable smooth steering

### void set_max_speed( new_max_speed: float ) {#method-set-max-speed}

Set maximum speed

### Vector3 get_current_velocity() {#method-get-current-velocity}

Get current velocity

### float get_current_actual_speed() {#method-get-current-actual-speed}

Get current actual speed

### float get_angle_to_target() {#method-get-angle-to-target}

Get angle to target (in degrees)

### bool is_facing_target( tolerance_degrees: float = 10.0 ) {#method-is-facing-target}

Check if projectile is facing target (within tolerance)

### bool wants_to_continue() {#method-wants-to-continue}

Homing movement doesn't need to continue after triggers

### void cleanup() {#method-cleanup}

Reset velocity on cleanup

