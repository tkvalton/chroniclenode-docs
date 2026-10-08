<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ChargeToPointEffect

**Inherits:** [MoveToPointEffect](/advanced/abilities-and-effects/effects-base/move-to-point-effect) < [CompositeEffect](/advanced/abilities-and-effects/effects-composite/composite-effect) < [Effect](/advanced/abilities-and-effects/effects-base/effect) < `DatabaseResource` < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

ChargeToPointEffect: Straight-line ground charge to a target position or entity

## Description

ChargeToPointEffect: Straight-line ground charge to a target position or entity Self-contained movement — drives the entity each physics tick via move_and_slide() for proper collision detection along the charge path. Duration is derived from distance/speed so the charge feels consistent regardless of range.

Perfect for warrior charges, bull rushes, tackles, and gap closers that need to collide with entities along the path.

## Properties

| | | |
|---|---|---|
| `float` | [charge_speed](#prop-charge-speed) | `20.0` |
| `bool` | [stop_on_collision](#prop-stop-on-collision) | `true` |
| `float` | [bounce_factor](#prop-bounce-factor) | `0.0` |
| `ChildEffectTarget` | [child_effect_target](#prop-child-effect-target) | `ChildEffectTarget.ORIGINAL_TARGET` |

## Methods

| | |
|---|---|
| `void` | [apply_movement_to_point](#method-apply-movement-to-point)( `effect_instance: EffectInstance, entity: Entity, target_position: Vector3` ) |
| `void` | [on_apply_finished](#method-on-apply-finished)( `effect_instance: EffectInstance` ) |
| `String` | [get_effect_description](#method-get-effect-description)() |
| `String` | [get_editor_description](#method-get-editor-description)() |

## Enumerations

### enum ChildEffectTarget {#enum-childeffecttarget}

- **ORIGINAL_TARGET** = `0` - Apply child effects to the entity/point this effect targets
- **COLLISION_TARGET** = `1` - Apply child effects to entities collided with during charge

## Property descriptions

*Charge Settings*

### float charge_speed = 20.0 {#prop-charge-speed}

Movement speed during charge (units per second)

### bool stop_on_collision = true {#prop-stop-on-collision}

Whether movement should stop when colliding with an obstacle (wall/entity)

### float bounce_factor = 0.0 {#prop-bounce-factor}

Bounce factor on collision (0.0 = no bounce, only used if stop_on_collision is false)

*Child Effects*

### ChildEffectTarget child_effect_target = ChildEffectTarget.ORIGINAL_TARGET {#prop-child-effect-target}

What receives child effects — the original target on arrival, or entities hit during charge

## Method descriptions

### void apply_movement_to_point( effect_instance: EffectInstance, entity: Entity, target_position: Vector3 ) {#method-apply-movement-to-point}

*No description yet.*

### void on_apply_finished( effect_instance: EffectInstance ) {#method-on-apply-finished}

*No description yet.*

### String get_effect_description() {#method-get-effect-description}

*No description yet.*

### String get_editor_description() {#method-get-editor-description}

*No description yet.*

