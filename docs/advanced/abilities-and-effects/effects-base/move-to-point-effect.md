<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# MoveToPointEffect

**Inherits:** [CompositeEffect](/advanced/abilities-and-effects/effects-composite/composite-effect) < [Effect](/advanced/abilities-and-effects/effects-base/effect) < [DatabaseResource](/advanced/data-and-database/database-classes/database-resource) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

**Inherited by:** [ChargeToPointEffect](/advanced/abilities-and-effects/effects-movement/charge-to-point-effect), [JumpToPointEffect](/advanced/abilities-and-effects/effects-movement/jump-to-point-effect), [OrbitEffect](/advanced/abilities-and-effects/effects-movement/orbit-effect), [SwapEffect](/advanced/abilities-and-effects/effects-movement/swap-effect), [TeleportToPointEffect](/advanced/abilities-and-effects/effects-movement/teleport-to-point-effect)

MoveToPointEffect - Base class for point-based movement effects Handles target position calculation and child effect application Uses tween-based movement (no physics collisions)

## Properties

| | | |
|---|---|---|
| `float` | [min_distance_to_target](#prop-min-distance-to-target) | `1.0` |
| `Vector3` | [offset_from_entity](#prop-offset-from-entity) | `Vector3.ZERO` |
| `bool` | [face_movement_direction](#prop-face-movement-direction) | `true` |
| `bool` | [apply_child_effects_on_arrival](#prop-apply-child-effects-on-arrival) | `true` |

## Methods

| | |
|---|---|
| `void` | [process_before_start](#method-process-before-start)( `effect_instance: EffectInstance` ) |
| `void` | [specific_effect_logic](#method-specific-effect-logic)( `effect_instance: EffectInstance` ) |
| `void` | [apply_movement_to_point](#method-apply-movement-to-point)( `_effect_instance: EffectInstance, _entity: Entity, _target_position: Vector3` ) |
| `void` | [on_apply_finished](#method-on-apply-finished)( `effect_instance: EffectInstance` ) |
| `String` | [get_effect_description](#method-get-effect-description)() |
| `bool` | [is_one_off_application](#method-is-one-off-application)() |

## Property descriptions

*Target &amp; Distance*

### float min_distance_to_target = 1.0 {#prop-min-distance-to-target}

How close to get to the target (stops this distance away)

### Vector3 offset_from_entity = Vector3.ZERO {#prop-offset-from-entity}

Offset from target position (rotated with target if target is Entity)

*Animation &amp; Effects*

### bool face_movement_direction = true {#prop-face-movement-direction}

Whether entity should face the direction of movement

### bool apply_child_effects_on_arrival = true {#prop-apply-child-effects-on-arrival}

Whether to apply child effects when movement completes

## Method descriptions

### void process_before_start( effect_instance: EffectInstance ) {#method-process-before-start}

Override duration setup — point movement effects own their lifecycle via movement completion. Set duration to permanent (0.0) so start_effect() won't create competing duration timers. Child classes that need immediate mode override this themselves.

### void specific_effect_logic( effect_instance: EffectInstance ) {#method-specific-effect-logic}

Apply all child effects using the simplified system *(from [CompositeEffect](/advanced/abilities-and-effects/effects-composite/composite-effect))*

### void apply_movement_to_point( _effect_instance: EffectInstance, _entity: Entity, _target_position: Vector3 ) {#method-apply-movement-to-point}

Virtual method for child classes to implement their movement logic

### void on_apply_finished( effect_instance: EffectInstance ) {#method-on-apply-finished}

Handle effect completion *(from [CompositeEffect](/advanced/abilities-and-effects/effects-composite/composite-effect))*

### String get_effect_description() {#method-get-effect-description}

Get effect description for tooltips *(from [CompositeEffect](/advanced/abilities-and-effects/effects-composite/composite-effect))*

### bool is_one_off_application() {#method-is-one-off-application}

What this effect does it does once, when it is applied: a loaded save does not do it again

