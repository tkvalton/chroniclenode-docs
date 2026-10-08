<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# TeleportToPointEffect

**Inherits:** [MoveToPointEffect](/advanced/abilities-and-effects/effects-base/move-to-point-effect) < [CompositeEffect](/advanced/abilities-and-effects/effects-composite/composite-effect) < [Effect](/advanced/abilities-and-effects/effects-base/effect) < [DatabaseResource](/advanced/data-and-database/database-classes/database-resource) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

TeleportToPointEffect: Instant teleportation to target position Perfect for blink step, phase dash, and instant repositioning abilities

## Methods

| | |
|---|---|
| `void` | [apply_movement_to_point](#method-apply-movement-to-point)( `effect_instance: EffectInstance, entity: Entity, target_position: Vector3` ) |
| `String` | [get_effect_description](#method-get-effect-description)() |
| `String` | [get_editor_description](#method-get-editor-description)() |

## Method descriptions

### void apply_movement_to_point( effect_instance: EffectInstance, entity: Entity, target_position: Vector3 ) {#method-apply-movement-to-point}

Virtual method for child classes to implement their movement logic *(from [MoveToPointEffect](/advanced/abilities-and-effects/effects-base/move-to-point-effect))*

### String get_effect_description() {#method-get-effect-description}

*Overrides this function of [MoveToPointEffect](/advanced/abilities-and-effects/effects-base/move-to-point-effect).*

### String get_editor_description() {#method-get-editor-description}

*Overrides this function of [CompositeEffect](/advanced/abilities-and-effects/effects-composite/composite-effect).*

