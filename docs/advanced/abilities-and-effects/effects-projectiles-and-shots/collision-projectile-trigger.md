<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# CollisionProjectileTrigger

**Inherits:** [ProjectileTrigger](/advanced/abilities-and-effects/effects-projectiles-and-shots/projectile-trigger) < [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

Collision-based trigger strategy - updated for InteractableObject support

## Variables

| | | |
|---|---|---|
| `CollisionLayerUtility.HitMode` | [hit_mode](#var-hit-mode) | `CollisionLayerUtility.HitMode.TARGET_ONLY` |
| `int` | [pierce_count](#var-pierce-count) | `0` |
| `bool` | [stop_on_world_hit](#var-stop-on-world-hit) | `true` |
| `bool` | [stop_on_target_hit](#var-stop-on-target-hit) | `true` |
| `Array[Variant]` | [targets_hit](#var-targets-hit) | `[]` |
| `int` | [hits_remaining](#var-hits-remaining) | `0` |

## Methods

| | |
|---|---|
| `void` | [configure_collision_trigger](#method-configure-collision-trigger)( `new_hit_mode: CollisionLayerUtility.HitMode, new_pierce_count: int = 0, new_stop_on_world: bool = true, new_stop_on_target: bool = true` ) |

## Variable descriptions

### CollisionLayerUtility.HitMode hit_mode = CollisionLayerUtility.HitMode.TARGET_ONLY {#var-hit-mode}

Hit mode from ProjectileEffect

### int pierce_count = 0 {#var-pierce-count}

Pierce count (0 = stop on first, -1 = infinite, &gt;0 = pierce X targets)

### bool stop_on_world_hit = true {#var-stop-on-world-hit}

Whether to stop when hitting world objects

### bool stop_on_target_hit = true {#var-stop-on-target-hit}

Whether to stop when hitting the intended target

### Array[Variant] targets_hit = [] {#var-targets-hit}

Targets that have been hit by this projectile (Entity or InteractableObject)

### int hits_remaining = 0 {#var-hits-remaining}

Number of hits remaining (for pierce tracking)

## Method descriptions

### void configure_collision_trigger( new_hit_mode: CollisionLayerUtility.HitMode, new_pierce_count: int = 0, new_stop_on_world: bool = true, new_stop_on_target: bool = true ) {#method-configure-collision-trigger}

Configure collision trigger (called by ProjectileEffect)

