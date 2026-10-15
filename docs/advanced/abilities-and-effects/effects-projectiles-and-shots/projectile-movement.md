<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ProjectileMovement

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

**Inherited by:** [BoomerangMovement](/advanced/abilities-and-effects/effects-projectiles-and-shots/boomerang-movement), [ChainMovement](/advanced/abilities-and-effects/effects-projectiles-and-shots/chain-movement), [DirectMovement](/advanced/abilities-and-effects/effects-projectiles-and-shots/direct-movement), [HomingMovement](/advanced/abilities-and-effects/effects-projectiles-and-shots/homing-movement), [PhysicsMovement](/advanced/abilities-and-effects/effects-projectiles-and-shots/physics-movement)

Base class for all projectile movement strategies Handles different ways projectiles can move through the world

## Variables

| | | |
|---|---|---|
| `BaseProjectileInstance` | [projectile](#var-projectile) |  |
| `Variant` | [target](#var-target) |  |
| `float` | [speed](#var-speed) | `15.0` |
| `bool` | [is_active](#var-is-active) | `false` |
| `bool` | [is_movement_finished](#var-is-movement-finished) | `false` |
| `Vector3` | [current_direction](#var-current-direction) | `Vector3.FORWARD` |

## Methods

| | |
|---|---|
| `void` | [initialize](#method-initialize)( `new_projectile: BaseProjectileInstance, new_target: Variant, new_speed: float` ) |
| `void` | [update_movement](#method-update-movement)( `delta: float` ) |
| `bool` | [is_finished](#method-is-finished)() |
| `Vector3` | [get_current_direction](#method-get-current-direction)() |
| `float` | [get_current_speed](#method-get-current-speed)() |
| `float` | [get_distance_to_target](#method-get-distance-to-target)() |
| `Vector3` | [get_direction_to_target](#method-get-direction-to-target)() |
| `Vector3` | [get_target_position](#method-get-target-position)() |
| `bool` | [wants_to_continue](#method-wants-to-continue)() |
| `void` | [stop_movement](#method-stop-movement)() |
| `void` | [pause_movement](#method-pause-movement)() |
| `void` | [resume_movement](#method-resume-movement)() |
| `void` | [update_target](#method-update-target)( `new_target: Variant` ) |
| `void` | [update_speed](#method-update-speed)( `new_speed: float` ) |
| `bool` | [is_target_valid](#method-is-target-valid)() |
| `void` | [cleanup](#method-cleanup)() |

## Variable descriptions

### BaseProjectileInstance projectile {#var-projectile}

Reference to the projectile instance

### Variant target {#var-target}

The movement target (Entity or Vector3)

### float speed = 15.0 {#var-speed}

Movement speed

### bool is_active = false {#var-is-active}

Whether movement is currently active

### bool is_movement_finished = false {#var-is-movement-finished}

Whether movement has finished

### Vector3 current_direction = Vector3.FORWARD {#var-current-direction}

Current movement direction (normalized)

## Method descriptions

### void initialize( new_projectile: BaseProjectileInstance, new_target: Variant, new_speed: float ) {#method-initialize}

Initialize the movement strategy

### void update_movement( delta: float ) {#method-update-movement}

Update movement logic each frame

### bool is_finished() {#method-is-finished}

Check if movement is finished

### Vector3 get_current_direction() {#method-get-current-direction}

Get current movement direction

### float get_current_speed() {#method-get-current-speed}

Get current speed

### float get_distance_to_target() {#method-get-distance-to-target}

Get distance to target

### Vector3 get_direction_to_target() {#method-get-direction-to-target}

Get direction to target

### Vector3 get_target_position() {#method-get-target-position}

Get target position

### bool wants_to_continue() {#method-wants-to-continue}

Check if movement strategy wants projectile to continue (override in subclasses)

### void stop_movement() {#method-stop-movement}

Stop movement

### void pause_movement() {#method-pause-movement}

Pause movement

### void resume_movement() {#method-resume-movement}

Resume movement

### void update_target( new_target: Variant ) {#method-update-target}

Update target (for tracking projectiles)

### void update_speed( new_speed: float ) {#method-update-speed}

Update speed

### bool is_target_valid() {#method-is-target-valid}

Check if target is valid

### void cleanup() {#method-cleanup}

Clean up movement strategy

