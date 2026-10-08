<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ConstantMoveEffect

**Inherits:** [MoveDirectionalEffect](/advanced/abilities-and-effects/effects-movement/move-directional-effect) < [CompositeEffect](/advanced/abilities-and-effects/effects-composite/composite-effect) < [Effect](/advanced/abilities-and-effects/effects-base/effect) < [DatabaseResource](/advanced/data-and-database/database-classes/database-resource) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

ConstantMoveEffect: Maintains constant speed for specified duration Perfect for sustained flight, charge attacks, and magical movement

## Properties

| | | |
|---|---|---|
| `float` | [force](#prop-force) | `10.0` |
| `float` | [movement_duration](#prop-movement-duration) | `1.0` |

## Methods

| | |
|---|---|
| `void` | [apply_movement](#method-apply-movement)( `effect_instance: EffectInstance, entity: Entity, direction: Vector3` ) |
| `void` | [handle_movement_collision](#method-handle-movement-collision)( `effect_instance: EffectInstance, collision: KinematicCollision3D` ) |
| `String` | [get_effect_description](#method-get-effect-description)() |
| `String` | [get_editor_description](#method-get-editor-description)() |

## Property descriptions

*Constant Movement Settings*

### float force = 10.0 {#prop-force}

Maintained speed throughout duration - higher = faster movement

### float movement_duration = 1.0 {#prop-movement-duration}

How long to maintain constant speed in seconds

## Method descriptions

### void apply_movement( effect_instance: EffectInstance, entity: Entity, direction: Vector3 ) {#method-apply-movement}

Virtual method for child classes to implement their movement logic *(from [MoveDirectionalEffect](/advanced/abilities-and-effects/effects-movement/move-directional-effect))*

### void handle_movement_collision( effect_instance: EffectInstance, collision: KinematicCollision3D ) {#method-handle-movement-collision}

Virtual method for child classes to handle movement-specific collision logic *(from [MoveDirectionalEffect](/advanced/abilities-and-effects/effects-movement/move-directional-effect))*

### String get_effect_description() {#method-get-effect-description}

*Overrides this function of [MoveDirectionalEffect](/advanced/abilities-and-effects/effects-movement/move-directional-effect).*

### String get_editor_description() {#method-get-editor-description}

*Overrides this function of [MoveDirectionalEffect](/advanced/abilities-and-effects/effects-movement/move-directional-effect).*

