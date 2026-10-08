<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# DistanceConditionalEffect

**Inherits:** [ConditionalEffect](/advanced/abilities-and-effects/effects-base/conditional-effect) < [CompositeEffect](/advanced/abilities-and-effects/effects-composite/composite-effect) < [Effect](/advanced/abilities-and-effects/effects-base/effect) < [DatabaseResource](/advanced/data-and-database/database-classes/database-resource) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Applies child effects based on the distance between originator and target.

## Properties

| | | |
|---|---|---|
| `float` | [max_distance](#prop-max-distance) | `5.0` |

## Methods

| | |
|---|---|
| `void` | [specific_effect_logic](#method-specific-effect-logic)( `effect_instance: EffectInstance` ) |
| `String` | [get_editor_description](#method-get-editor-description)() |

## Property descriptions

*Condition Settings*

### float max_distance = 5.0 {#prop-max-distance}

Maximum distance (in units) for the condition to pass

## Method descriptions

### void specific_effect_logic( effect_instance: EffectInstance ) {#method-specific-effect-logic}

*Overrides this function of [ConditionalEffect](/advanced/abilities-and-effects/effects-base/conditional-effect).*

### String get_editor_description() {#method-get-editor-description}

*Overrides this function of [CompositeEffect](/advanced/abilities-and-effects/effects-composite/composite-effect).*

