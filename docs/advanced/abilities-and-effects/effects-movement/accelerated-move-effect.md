<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# AcceleratedMoveEffect

**Inherits:** [MoveDirectionalEffect](/advanced/abilities-and-effects/effects-movement/move-directional-effect) < [CompositeEffect](/advanced/abilities-and-effects/effects-composite/composite-effect) < [Effect](/advanced/abilities-and-effects/effects-base/effect) < [DatabaseResource](/advanced/data-and-database/database-classes/database-resource) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

AcceleratedMoveEffect: Acceleration and curve-based movement Combines acceleration curves with custom curves for advanced movement patterns Perfect for charge-up abilities, momentum building, wind-up attacks, and cinematic movement

## Properties

| | | |
|---|---|---|
| `float` | [max_speed](#prop-max-speed) | `15.0` |
| `float` | [movement_duration](#prop-movement-duration) | `1.0` |
| `AccelerationType` | [acceleration_type](#prop-acceleration-type) | `AccelerationType.QUADRATIC` |
| `Curve` | [movement_curve](#prop-movement-curve) |  |

## Methods

| | |
|---|---|
| `void` | [apply_movement](#method-apply-movement)( `effect_instance: EffectInstance, entity: Entity, direction: Vector3` ) |
| `void` | [handle_movement_collision](#method-handle-movement-collision)( `effect_instance: EffectInstance, collision: KinematicCollision3D` ) |
| `float` | [get_acceleration_factor](#method-get-acceleration-factor)( `progress: float` ) |
| `String` | [get_effect_description](#method-get-effect-description)() |
| `String` | [get_editor_description](#method-get-editor-description)() |

## Enumerations

### enum AccelerationType {#enum-accelerationtype}

- **LINEAR** = `0`
- **QUADRATIC** = `1`
- **CUBIC** = `2`
- **SMOOTH** = `3`
- **CUSTOM** = `4`

## Property descriptions

*Acceleration Settings*

### float max_speed = 15.0 {#prop-max-speed}

Maximum speed reached during movement

### float movement_duration = 1.0 {#prop-movement-duration}

Time for the complete movement in seconds

### AccelerationType acceleration_type = AccelerationType.QUADRATIC {#prop-acceleration-type}

Type of acceleration curve (Custom uses movement_curve)

### Curve movement_curve {#prop-movement-curve}

Custom curve defining velocity over time (only used when acceleration_type is Custom)

## Method descriptions

### void apply_movement( effect_instance: EffectInstance, entity: Entity, direction: Vector3 ) {#method-apply-movement}

Virtual method for child classes to implement their movement logic *(from [MoveDirectionalEffect](/advanced/abilities-and-effects/effects-movement/move-directional-effect))*

### void handle_movement_collision( effect_instance: EffectInstance, collision: KinematicCollision3D ) {#method-handle-movement-collision}

Virtual method for child classes to handle movement-specific collision logic *(from [MoveDirectionalEffect](/advanced/abilities-and-effects/effects-movement/move-directional-effect))*

### float get_acceleration_factor( progress: float ) {#method-get-acceleration-factor}

Calculate acceleration factor based on progress and curve type

### String get_effect_description() {#method-get-effect-description}

*Overrides this function of [MoveDirectionalEffect](/advanced/abilities-and-effects/effects-movement/move-directional-effect).*

### String get_editor_description() {#method-get-editor-description}

*Overrides this function of [MoveDirectionalEffect](/advanced/abilities-and-effects/effects-movement/move-directional-effect).*

