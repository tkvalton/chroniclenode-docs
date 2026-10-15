<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# PhysicsMovement

**Inherits:** [ProjectileMovement](/advanced/abilities-and-effects/effects-projectiles-and-shots/projectile-movement) < [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

Physics-based movement strategy - ballistic trajectories with gravity Only works with PhysicalProjectileInstance that has RigidBody3D

## Variables

| | | |
|---|---|---|
| `Vector3` | [target_position](#var-target-position) |  |
| `bool` | [initial_velocity_applied](#var-initial-velocity-applied) | `false` |
| `Vector3` | [initial_velocity](#var-initial-velocity) | `Vector3.ZERO` |
| `bool` | [use_high_arc](#var-use-high-arc) | `false` |
| `float` | [launch_angle_override](#var-launch-angle-override) | `0.0` |

## Methods

| | |
|---|---|
| `void` | [set_use_high_arc](#method-set-use-high-arc)( `high_arc: bool` ) |
| `void` | [set_launch_angle_override](#method-set-launch-angle-override)( `angle_degrees: float` ) |
| `float` | [get_launch_angle_degrees](#method-get-launch-angle-degrees)() |
| `Vector3` | [get_current_velocity](#method-get-current-velocity)() |
| `float` | [get_current_actual_speed](#method-get-current-actual-speed)() |
| `Vector3` | [get_initial_velocity](#method-get-initial-velocity)() |
| `Dictionary` | [get_trajectory_info](#method-get-trajectory-info)() |
| `bool` | [is_trajectory_valid](#method-is-trajectory-valid)() |
| `float` | [get_distance_to_target](#method-get-distance-to-target)() |
| `Vector3` | [get_current_direction](#method-get-current-direction)() |
| `bool` | [wants_to_continue](#method-wants-to-continue)() |
| `void` | [cleanup](#method-cleanup)() |

## Variable descriptions

### Vector3 target_position {#var-target-position}

Target position captured at launch (for ballistic calculation)

### bool initial_velocity_applied = false {#var-initial-velocity-applied}

Whether the initial velocity has been applied

### Vector3 initial_velocity = Vector3.ZERO {#var-initial-velocity}

Initial velocity vector calculated for ballistic trajectory

### bool use_high_arc = false {#var-use-high-arc}

Whether to use high or low arc trajectory

### float launch_angle_override = 0.0 {#var-launch-angle-override}

Launch angle override (if &gt; 0, uses this instead of calculated angle)

## Method descriptions

### void set_use_high_arc( high_arc: bool ) {#method-set-use-high-arc}

Set whether to use high arc trajectory

### void set_launch_angle_override( angle_degrees: float ) {#method-set-launch-angle-override}

Set launch angle override (in degrees, 0 = auto-calculate)

### float get_launch_angle_degrees() {#method-get-launch-angle-degrees}

Get calculated launch angle (in degrees)

### Vector3 get_current_velocity() {#method-get-current-velocity}

Get current velocity from RigidBody3D

### float get_current_actual_speed() {#method-get-current-actual-speed}

Get current speed from physics body

### Vector3 get_initial_velocity() {#method-get-initial-velocity}

Get initial velocity that was applied

### Dictionary get_trajectory_info() {#method-get-trajectory-info}

Get trajectory info for debugging

### bool is_trajectory_valid() {#method-is-trajectory-valid}

Check if trajectory calculation was successful

### float get_distance_to_target() {#method-get-distance-to-target}

Override distance calculation to use captured target position

### Vector3 get_current_direction() {#method-get-current-direction}

Override current direction to use current velocity

### bool wants_to_continue() {#method-wants-to-continue}

Physics movement doesn't need to continue after triggers

### void cleanup() {#method-cleanup}

Override cleanup to reset physics state

