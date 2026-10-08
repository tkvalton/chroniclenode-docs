<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# BaseProjectileInstance

**Inherits:** [Node3D](https://docs.godotengine.org/en/stable/classes/class_node3d.html)

**Inherited by:** [NonPhysicalProjectileInstance](/advanced/abilities-and-effects/runtime/non-physical-projectile-instance), [PhysicalProjectileInstance](/advanced/abilities-and-effects/runtime/physical-projectile-instance)

Base class for all projectile instances - handles VFX, signals, and basic lifecycle Follows the same pattern as Effect/EffectInstance with shared functionality

## Variables

| | | |
|---|---|---|
| `EffectInstance` | [effect_instance](#var-effect-instance) |  |
| `Variant` | [originator](#var-originator) |  |
| `Variant` | [target](#var-target) |  |
| `ProjectileMovement` | [movement_strategy](#var-movement-strategy) |  |
| `ProjectileTrigger` | [trigger_strategy](#var-trigger-strategy) |  |
| `CombatManager` | [combat_manager](#var-combat-manager) |  |
| `bool` | [active](#var-active) | `false` |
| `float` | [creation_time](#var-creation-time) | `0.0` |
| `float` | [max_lifetime](#var-max-lifetime) | `10.0` |
| `float` | [projectile_speed](#var-projectile-speed) | `15.0` |
| `bool` | [in_flight](#var-in-flight) | `false` |
| `Shape3D` | [shape_resource](#var-shape-resource) |  |
| `Array[VFX]` | [projectile_vfx_array](#var-projectile-vfx-array) | `[]` |
| `VFXSelectionLoop` | [vfx_selection](#var-vfx-selection) |  |
| `RemoteTransform3D` | [vfx_remote](#var-vfx-remote) |  |
| `Timer` | [lifetime_timer](#var-lifetime-timer) |  |
| `Callable` | [pool_return_callback](#var-pool-return-callback) |  |
| `bool` | [signals_connected](#var-signals-connected) | `false` |

## Methods

| | |
|---|---|
| `void` | [initialize](#method-initialize)( `p_combat_manager: CombatManager, new_effect_instance: EffectInstance, new_originator: Variant, new_target: Variant, new_vfx_selection: VFXSelectionLoop, speed: float = 15.0` ) |
| `void` | [set_collision_shape](#method-set-collision-shape)( `shape: Shape3D` ) |
| `void` | [activate_projectile](#method-activate-projectile)() |
| `void` | [set_trigger_strategy](#method-set-trigger-strategy)( `strategy: ProjectileTrigger` ) |
| `void` | [set_movement_strategy](#method-set-movement-strategy)( `strategy: ProjectileMovement` ) |
| `void` | [deactivate_projectile](#method-deactivate-projectile)() |
| `void` | [reset_projectile](#method-reset-projectile)() |
| `void` | [set_pool_return_callback](#method-set-pool-return-callback)( `callback: Callable` ) |
| `Vector3` | [get_movement_direction](#method-get-movement-direction)() |
| `float` | [get_age](#method-get-age)() |
| `bool` | [is_projectile_valid](#method-is-projectile-valid)() |
| `Dictionary` | [get_projectile_info](#method-get-projectile-info)() |

## Signals

### reached_destination() {#signal-reached-destination}

Emitted when projectile reaches its destination

### lifetime_expired() {#signal-lifetime-expired}

Emitted when projectile lifetime expires

## Variable descriptions

### EffectInstance effect_instance {#var-effect-instance}

Reference to the effect instance that created this projectile

### Variant originator {#var-originator}

Reference to the originator entity

### Variant target {#var-target}

The target (Entity or Vector3)

### ProjectileMovement movement_strategy {#var-movement-strategy}

Movement strategy component

### ProjectileTrigger trigger_strategy {#var-trigger-strategy}

Trigger strategy component

### CombatManager combat_manager {#var-combat-manager}

Combat manager refrence

### bool active = false {#var-active}

Whether the projectile is currently active

### float creation_time = 0.0 {#var-creation-time}

When the projectile was created

### float max_lifetime = 10.0 {#var-max-lifetime}

Maximum lifetime before auto-destruction

### float projectile_speed = 15.0 {#var-projectile-speed}

Current speed of the projectile

### bool in_flight = false {#var-in-flight}

Whether projectile is in flight (prevents premature cleanup)

### Shape3D shape_resource {#var-shape-resource}

Shape resource configured by the effect

### Array[VFX] projectile_vfx_array = [] {#var-projectile-vfx-array}

The VFX instances attached to this projectile

### VFXSelectionLoop vfx_selection {#var-vfx-selection}

VFX selection used for this projectile

### RemoteTransform3D vfx_remote {#var-vfx-remote}

VFX remote

### Timer lifetime_timer {#var-lifetime-timer}

Timer for projectile lifetime

### Callable pool_return_callback {#var-pool-return-callback}

Pool return callback for VFXManager

### bool signals_connected = false {#var-signals-connected}

Whether signals are currently connected

## Method descriptions

### void initialize( p_combat_manager: CombatManager, new_effect_instance: EffectInstance, new_originator: Variant, new_target: Variant, new_vfx_selection: VFXSelectionLoop, speed: float = 15.0 ) {#method-initialize}

Initialize the projectile with core data

### void set_collision_shape( shape: Shape3D ) {#method-set-collision-shape}

Set collision shape (called by BaseProjectileEffect)

### void activate_projectile() {#method-activate-projectile}

Activate the projectile and begin movement

### void set_trigger_strategy( strategy: ProjectileTrigger ) {#method-set-trigger-strategy}

Set trigger strategy

### void set_movement_strategy( strategy: ProjectileMovement ) {#method-set-movement-strategy}

Set movement strategy

### void deactivate_projectile() {#method-deactivate-projectile}

Deactivate the projectile

### void reset_projectile() {#method-reset-projectile}

Reset for pooling (mirrors EffectInstance.reset)

### void set_pool_return_callback( callback: Callable ) {#method-set-pool-return-callback}

Set pool return callback (used by ProjectileManager)

### Vector3 get_movement_direction() {#method-get-movement-direction}

Get current movement direction

### float get_age() {#method-get-age}

Get time since creation

### bool is_projectile_valid() {#method-is-projectile-valid}

Check if projectile is valid and active

### Dictionary get_projectile_info() {#method-get-projectile-info}

Get projectile info for debugging

