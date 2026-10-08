<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# EffectInstancePool

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

Global pool manager for EffectInstance objects and Projectile instances Handles creation, pooling, and recycling of both EffectInstance and BaseProjectileInstance objects This is an autoload singleton - add to Project Settings &gt; Autoload as "EffectInstancePool"

## Variables

| | | |
|---|---|---|
| `GameHost.SystemHub` | [system_hub](#var-system-hub) |  |

## Methods

| | |
|---|---|
| `EffectInstance` | [get_effect_instance](#method-get-effect-instance)( `effect_def: Effect, originator: Variant = null, target: Variant = null` ) |
| `void` | [return_effect_instance](#method-return-effect-instance)( `instance: EffectInstance` ) |
| `PhysicalProjectileInstance` | [get_physical_projectile](#method-get-physical-projectile)() |
| `NonPhysicalProjectileInstance` | [get_non_physical_projectile](#method-get-non-physical-projectile)() |
| `void` | [return_physical_projectile](#method-return-physical-projectile)( `projectile: PhysicalProjectileInstance` ) |
| `void` | [return_non_physical_projectile](#method-return-non-physical-projectile)( `projectile: NonPhysicalProjectileInstance` ) |

## Constants

- `int` **MAX_POOL_SIZE** = `500  # Maximum instances to keep in pool`
- `int` **INITIAL_POOL_SIZE** = `50  # Pre-allocated instances`
- `int` **MAX_PROJECTILE_POOL_SIZE** = `400  # Maximum projectiles per VFX type`
- `int` **PROJECTILE_POOL_CLEANUP_THRESHOLD** = `500  # Clean up when total projectiles exceed this`

## Variable descriptions

### GameHost.SystemHub system_hub {#var-system-hub}

*No description yet.*

## Method descriptions

### EffectInstance get_effect_instance( effect_def: Effect, originator: Variant = null, target: Variant = null ) {#method-get-effect-instance}

Get an EffectInstance from the pool (or create new if pool empty)

### void return_effect_instance( instance: EffectInstance ) {#method-return-effect-instance}

Return an EffectInstance to the pool for reuse

### PhysicalProjectileInstance get_physical_projectile() {#method-get-physical-projectile}

Get a physical projectile from the pool

### NonPhysicalProjectileInstance get_non_physical_projectile() {#method-get-non-physical-projectile}

Get a non-physical projectile from the pool

### void return_physical_projectile( projectile: PhysicalProjectileInstance ) {#method-return-physical-projectile}

Return a physical projectile to the pool

### void return_non_physical_projectile( projectile: NonPhysicalProjectileInstance ) {#method-return-non-physical-projectile}

Return a non-physical projectile to the pool

