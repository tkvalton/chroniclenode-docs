<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# PushEffect

**Inherits:** [MoveDirectionalEffect](/advanced/abilities-and-effects/effects-movement/move-directional-effect) < [CompositeEffect](/advanced/abilities-and-effects/effects-composite/composite-effect) < [Effect](/advanced/abilities-and-effects/effects-base/effect) < [DatabaseResource](/advanced/data-and-database/database-classes/database-resource) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

PushEffect: Physics impulse away from originator position Perfect for explosion knockbacks, force push abilities, and impact effects

## Properties

| | | |
|---|---|---|
| `float` | [initial_force](#prop-initial-force) | `10.0` |
| `float` | [upward_force](#prop-upward-force) | `0.0` |
| `float` | [movement_duration](#prop-movement-duration) | `1.0` |
| `float` | [friction_coefficient](#prop-friction-coefficient) | `0.9` |

## Methods

| | |
|---|---|
| `void` | [apply_movement](#method-apply-movement)( `effect_instance: EffectInstance, entity: Entity, direction: Vector3` ) |
| `void` | [handle_movement_collision](#method-handle-movement-collision)( `effect_instance: EffectInstance, collision: KinematicCollision3D` ) |
| `String` | [get_effect_description](#method-get-effect-description)() |
| `String` | [get_editor_description](#method-get-editor-description)() |

## Property descriptions

*Push Settings*

### float initial_force = 10.0 {#prop-initial-force}

Initial velocity burst strength pushing away from originator

### float upward_force = 0.0 {#prop-upward-force}

Additional upward force component (0.0 = no upward push)

### float movement_duration = 1.0 {#prop-movement-duration}

How long the displacement effect lasts

### float friction_coefficient = 0.9 {#prop-friction-coefficient}

How quickly displacement decays each frame (0.8 = fast decay, 0.95 = slow decay)

## Method descriptions

### void apply_movement( effect_instance: EffectInstance, entity: Entity, direction: Vector3 ) {#method-apply-movement}

Virtual method for child classes to implement their movement logic *(from [MoveDirectionalEffect](/advanced/abilities-and-effects/effects-movement/move-directional-effect))*

### void handle_movement_collision( effect_instance: EffectInstance, collision: KinematicCollision3D ) {#method-handle-movement-collision}

Virtual method for child classes to handle movement-specific collision logic *(from [MoveDirectionalEffect](/advanced/abilities-and-effects/effects-movement/move-directional-effect))*

### String get_effect_description() {#method-get-effect-description}

*Overrides this function of [MoveDirectionalEffect](/advanced/abilities-and-effects/effects-movement/move-directional-effect).*

### String get_editor_description() {#method-get-editor-description}

*Overrides this function of [MoveDirectionalEffect](/advanced/abilities-and-effects/effects-movement/move-directional-effect).*

