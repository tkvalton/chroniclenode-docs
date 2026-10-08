<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# PhysicalProjectileInstance

**Inherits:** [BaseProjectileInstance](/advanced/abilities-and-effects/runtime/base-projectile-instance) < [Node3D](https://docs.godotengine.org/en/stable/classes/class_node3d.html)

Physics-based projectile with gravity, RigidBody3D physics, and raycast collision detection

## Variables

| | | |
|---|---|---|
| `RigidBody3D` | [rigid_body](#var-rigid-body) |  |
| `CollisionShape3D` | [collision_shape](#var-collision-shape) |  |
| `float` | [gravity_scale](#var-gravity-scale) | `1.0` |
| `float` | [projectile_mass](#var-projectile-mass) | `1.0` |
| `float` | [linear_damping](#var-linear-damping) | `0.0` |
| `float` | [angular_damping](#var-angular-damping) | `0.1` |
| `bool` | [use_gravity](#var-use-gravity) | `true` |
| `Vector3` | [previous_position](#var-previous-position) |  |
| `float` | [raycast_range](#var-raycast-range) | `5.0` |
| `bool` | [use_raycast_collision](#var-use-raycast-collision) | `true` |

## Methods

| | |
|---|---|
| `void` | [set_projectile_mass](#method-set-projectile-mass)( `mass: float` ) |
| `void` | [set_gravity_scale](#method-set-gravity-scale)( `grav_scale: float` ) |
| `void` | [set_use_gravity](#method-set-use-gravity)( `enabled: bool` ) |
| `void` | [set_linear_damping](#method-set-linear-damping)( `damping: float` ) |
| `void` | [activate_projectile](#method-activate-projectile)() |
| `void` | [deactivate_projectile](#method-deactivate-projectile)() |
| `Vector3` | [get_velocity](#method-get-velocity)() |
| `float` | [get_current_speed](#method-get-current-speed)() |
| `void` | [stop_projectile](#method-stop-projectile)() |
| `void` | [apply_impulse](#method-apply-impulse)( `impulse: Vector3` ) |
| `void` | [set_velocity](#method-set-velocity)( `new_velocity: Vector3` ) |
| `float` | [get_distance_to_target](#method-get-distance-to-target)() |
| `bool` | [is_near_target](#method-is-near-target)( `threshold: float` ) |
| `Vector3` | [get_direction_to_target](#method-get-direction-to-target)() |
| `Vector3` | [get_movement_direction](#method-get-movement-direction)() |
| `void` | [reset_projectile](#method-reset-projectile)() |
| `Dictionary` | [get_physics_info](#method-get-physics-info)() |

## Variable descriptions

### RigidBody3D rigid_body {#var-rigid-body}

RigidBody3D for physics simulation

### CollisionShape3D collision_shape {#var-collision-shape}

CollisionShape3D for physics collision

### float gravity_scale = 1.0 {#var-gravity-scale}

Gravity scale for this projectile

### float projectile_mass = 1.0 {#var-projectile-mass}

Mass of the projectile

### float linear_damping = 0.0 {#var-linear-damping}

Linear damping (air resistance)

### float angular_damping = 0.1 {#var-angular-damping}

Angular damping

### bool use_gravity = true {#var-use-gravity}

Whether to use gravity

### Vector3 previous_position {#var-previous-position}

Previous position for raycast collision detection

### float raycast_range = 5.0 {#var-raycast-range}

Raycast range per frame for collision detection

### bool use_raycast_collision = true {#var-use-raycast-collision}

Always use raycast collision (no RigidBody3D collision signals)

## Method descriptions

### void set_projectile_mass( mass: float ) {#method-set-projectile-mass}

Set projectile mass

### void set_gravity_scale( grav_scale: float ) {#method-set-gravity-scale}

Set gravity scale

### void set_use_gravity( enabled: bool ) {#method-set-use-gravity}

Enable/disable gravity

### void set_linear_damping( damping: float ) {#method-set-linear-damping}

Set linear damping (air resistance)

### void activate_projectile() {#method-activate-projectile}

Override activate to setup raycast collision

### void deactivate_projectile() {#method-deactivate-projectile}

Override deactivate - no special cleanup needed

### Vector3 get_velocity() {#method-get-velocity}

Get current velocity from RigidBody3D

### float get_current_speed() {#method-get-current-speed}

Get current speed

### void stop_projectile() {#method-stop-projectile}

Stop the projectile (set velocity to zero)

### void apply_impulse( impulse: Vector3 ) {#method-apply-impulse}

Apply impulse to projectile (for explosive launches, etc.)

### void set_velocity( new_velocity: Vector3 ) {#method-set-velocity}

Set velocity directly (for movement strategies)

### float get_distance_to_target() {#method-get-distance-to-target}

Get distance to target (useful for movement strategies)

### bool is_near_target( threshold: float ) {#method-is-near-target}

Check if within distance of target

### Vector3 get_direction_to_target() {#method-get-direction-to-target}

Get direction to target

### Vector3 get_movement_direction() {#method-get-movement-direction}

Override movement direction getter to use physics velocity

### void reset_projectile() {#method-reset-projectile}

Override cleanup to handle physics components

### Dictionary get_physics_info() {#method-get-physics-info}

Get physics info for debugging

