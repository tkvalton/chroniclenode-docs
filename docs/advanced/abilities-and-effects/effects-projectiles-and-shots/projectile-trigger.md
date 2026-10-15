<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ProjectileTrigger

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

**Inherited by:** [CollisionProjectileTrigger](/advanced/abilities-and-effects/effects-projectiles-and-shots/collision-projectile-trigger), [DestinationProjectileTrigger](/advanced/abilities-and-effects/effects-projectiles-and-shots/destination-projectile-trigger), [TimerProjectileTrigger](/advanced/abilities-and-effects/effects-projectiles-and-shots/timer-projectile-trigger)

Base class for all projectile trigger strategies Updated to handle Entity and InteractableObject targets

## Variables

| | | |
|---|---|---|
| `EffectInstance` | [effect_instance](#var-effect-instance) |  |
| `BaseProjectileInstance` | [projectile](#var-projectile) |  |
| `bool` | [is_active](#var-is-active) | `false` |
| `bool` | [is_depleted](#var-is-depleted) | `false` |

## Methods

| | |
|---|---|
| `void` | [initialize](#method-initialize)( `new_effect_instance: EffectInstance` ) |
| `bool` | [should_trigger_on_target](#method-should-trigger-on-target)( `target: Variant` ) |
| `bool` | [should_trigger_on_world](#method-should-trigger-on-world)() |
| `bool` | [should_trigger_on_destination](#method-should-trigger-on-destination)() |
| `bool` | [on_target_hit](#method-on-target-hit)( `target: Variant` ) |
| `bool` | [on_world_hit](#method-on-world-hit)() |
| `bool` | [on_destination_reached](#method-on-destination-reached)() |
| `void` | [deplete_trigger](#method-deplete-trigger)() |
| `void` | [cleanup](#method-cleanup)() |

## Variable descriptions

### EffectInstance effect_instance {#var-effect-instance}

Reference to the effect instance that created the projectile

### BaseProjectileInstance projectile {#var-projectile}

Reference to the projectile instance

### bool is_active = false {#var-is-active}

Whether the trigger is currently active

### bool is_depleted = false {#var-is-depleted}

Whether the trigger has been used up

## Method descriptions

### void initialize( new_effect_instance: EffectInstance ) {#method-initialize}

Initialize the trigger strategy

### bool should_trigger_on_target( target: Variant ) {#method-should-trigger-on-target}

Check if trigger should activate on target collision (Entity or InteractableObject)

### bool should_trigger_on_world() {#method-should-trigger-on-world}

Check if trigger should activate on world collision

### bool should_trigger_on_destination() {#method-should-trigger-on-destination}

Check if trigger should activate on reaching destination

### bool on_target_hit( target: Variant ) {#method-on-target-hit}

Handle target hit trigger (Entity or InteractableObject)

### bool on_world_hit() {#method-on-world-hit}

Handle world collision trigger

### bool on_destination_reached() {#method-on-destination-reached}

Handle destination reached trigger

### void deplete_trigger() {#method-deplete-trigger}

Mark trigger as depleted (can't trigger anymore)

### void cleanup() {#method-cleanup}

Clean up trigger strategy

