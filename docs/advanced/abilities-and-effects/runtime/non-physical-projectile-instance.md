<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# NonPhysicalProjectileInstance

**Inherits:** [BaseProjectileInstance](/advanced/abilities-and-effects/runtime/base-projectile-instance) < [Node3D](https://docs.godotengine.org/en/stable/classes/class_node3d.html)

Lightweight projectile with raycast-only collision detection Movement is handled entirely by movement strategies, this class only provides collision detection

## Variables

| | | |
|---|---|---|
| `Vector3` | [velocity](#var-velocity) | `Vector3.ZERO` |
| `Vector3` | [movement_direction](#var-movement-direction) | `Vector3.FORWARD` |
| `Vector3` | [previous_position](#var-previous-position) |  |
| `float` | [raycast_range](#var-raycast-range) | `5.0` |
| `bool` | [use_raycast_collision](#var-use-raycast-collision) | `true` |

## Methods

| | |
|---|---|
| `void` | [activate_projectile](#method-activate-projectile)() |
| `void` | [deactivate_projectile](#method-deactivate-projectile)() |
| `void` | [set_velocity](#method-set-velocity)( `new_velocity: Vector3` ) |
| `Vector3` | [get_velocity](#method-get-velocity)() |
| `float` | [get_current_speed](#method-get-current-speed)() |
| `void` | [stop_projectile](#method-stop-projectile)() |
| `void` | [set_direction](#method-set-direction)( `new_direction: Vector3` ) |
| `void` | [accelerate](#method-accelerate)( `acceleration: Vector3, delta: float` ) |
| `void` | [apply_steering_force](#method-apply-steering-force)( `force: Vector3, max_force: float = 10.0` ) |
| `float` | [get_distance_to_target](#method-get-distance-to-target)() |
| `bool` | [is_near_target](#method-is-near-target)( `threshold: float` ) |
| `Vector3` | [get_direction_to_target](#method-get-direction-to-target)() |
| `Vector3` | [get_movement_direction](#method-get-movement-direction)() |
| `void` | [reset_projectile](#method-reset-projectile)() |
| `Dictionary` | [get_projectile_debug_info](#method-get-projectile-debug-info)() |

## Variable descriptions

### Vector3 velocity = Vector3.ZERO {#var-velocity}

Current movement velocity (set by movement strategies)

### Vector3 movement_direction = Vector3.FORWARD {#var-movement-direction}

Current movement direction (normalized, set by movement strategies)

### Vector3 previous_position {#var-previous-position}

Previous position for raycast collision detection

### float raycast_range = 5.0 {#var-raycast-range}

Raycast range per frame for collision detection

### bool use_raycast_collision = true {#var-use-raycast-collision}

Always use raycast collision (no Area3D)

## Method descriptions

### void activate_projectile() {#method-activate-projectile}

Override activate to setup raycast collision

### void deactivate_projectile() {#method-deactivate-projectile}

Override deactivate - no special cleanup needed

### void set_velocity( new_velocity: Vector3 ) {#method-set-velocity}

Set velocity (called by movement strategies)

### Vector3 get_velocity() {#method-get-velocity}

Get current velocity

### float get_current_speed() {#method-get-current-speed}

Get current speed

### void stop_projectile() {#method-stop-projectile}

Stop the projectile movement

### void set_direction( new_direction: Vector3 ) {#method-set-direction}

Change direction while maintaining speed

### void accelerate( acceleration: Vector3, delta: float ) {#method-accelerate}

Apply acceleration (for movement strategies that need it)

### void apply_steering_force( force: Vector3, max_force: float = 10.0 ) {#method-apply-steering-force}

Apply steering force (for homing projectiles)

### float get_distance_to_target() {#method-get-distance-to-target}

Get distance to target (useful for movement strategies)

### bool is_near_target( threshold: float ) {#method-is-near-target}

Check if within distance of target

### Vector3 get_direction_to_target() {#method-get-direction-to-target}

Get direction to target

### Vector3 get_movement_direction() {#method-get-movement-direction}

Override movement direction getter

### void reset_projectile() {#method-reset-projectile}

Override reset for raycast-specific cleanup

### Dictionary get_projectile_debug_info() {#method-get-projectile-debug-info}

Get debug info specific to non-physical projectiles

