<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ImpulseEffect

**Inherits:** [MoveDirectionalEffect](/advanced/abilities-and-effects/effects-movement/move-directional-effect) < [CompositeEffect](/advanced/abilities-and-effects/effects-composite/composite-effect) < [Effect](/advanced/abilities-and-effects/effects-base/effect) < [DatabaseResource](/advanced/data-and-database/database-classes/database-resource) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

ImpulseEffect: Initial velocity burst with natural decay Perfect for dashes, dodge rolls, knockbacks, and explosive movement

## Properties

| | | |
|---|---|---|
| `float` | [force](#prop-force) | `10.0` |
| `float` | [friction_coefficient](#prop-friction-coefficient) | `0.9` |
| `float` | [safety_duration](#prop-safety-duration) | `10.0` |

## Methods

| | |
|---|---|
| `void` | [apply_movement](#method-apply-movement)( `effect_instance: EffectInstance, entity: Entity, direction: Vector3` ) |
| `void` | [handle_movement_collision](#method-handle-movement-collision)( `effect_instance: EffectInstance, collision: KinematicCollision3D` ) |
| `String` | [get_effect_description](#method-get-effect-description)() |
| `String` | [get_editor_description](#method-get-editor-description)() |

## Property descriptions

*Impulse Settings*

### float force = 10.0 {#prop-force}

Initial velocity burst strength - higher = faster/further movement

### float friction_coefficient = 0.9 {#prop-friction-coefficient}

How quickly movement decays each frame (0.8 = fast decay, 0.95 = slow decay)

### float safety_duration = 10.0 {#prop-safety-duration}

Maximum time before forced cleanup (prevents infinite sliding)

## Method descriptions

### void apply_movement( effect_instance: EffectInstance, entity: Entity, direction: Vector3 ) {#method-apply-movement}

Moves the entity one step in the direction of the movement.

### void handle_movement_collision( effect_instance: EffectInstance, collision: KinematicCollision3D ) {#method-handle-movement-collision}

Called when the moving entity hits something: it bounces or stops, by the settings of the effect.

### String get_effect_description() {#method-get-effect-description}

The text of the effect for tooltips, with its values filled in.

### String get_editor_description() {#method-get-editor-description}

A short text for the effect editor that says what the effect does.

