<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# HealthConditionalEffect

**Inherits:** [ConditionalEffect](/advanced/abilities-and-effects/effects-base/conditional-effect) < [CompositeEffect](/advanced/abilities-and-effects/effects-composite/composite-effect) < [Effect](/advanced/abilities-and-effects/effects-base/effect) < [DatabaseResource](/advanced/data-and-database/database-classes/database-resource) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Applies child effects based on the health percentage of the target or originator.

## Properties

| | | |
|---|---|---|
| `HealthTarget` | [health_target](#prop-health-target) | `HealthTarget.TARGET` |
| `HealthComparison` | [health_comparison](#prop-health-comparison) | `HealthComparison.BELOW` |
| `float` | [threshold_percent](#prop-threshold-percent) | `50.0` |

## Methods

| | |
|---|---|
| `void` | [specific_effect_logic](#method-specific-effect-logic)( `effect_instance: EffectInstance` ) |
| `String` | [get_editor_description](#method-get-editor-description)() |

## Enumerations

### enum HealthTarget {#enum-healthtarget}

- **TARGET** = `0`
- **ORIGINATOR** = `1`

### enum HealthComparison {#enum-healthcomparison}

- **BELOW** = `0`
- **ABOVE** = `1`

## Property descriptions

*Condition Settings*

### HealthTarget health_target = HealthTarget.TARGET {#prop-health-target}

*No description yet.*

### HealthComparison health_comparison = HealthComparison.BELOW {#prop-health-comparison}

*No description yet.*

### float threshold_percent = 50.0 {#prop-threshold-percent}

Health percentage threshold (0–100)

## Method descriptions

### void specific_effect_logic( effect_instance: EffectInstance ) {#method-specific-effect-logic}

*Overrides this function of [ConditionalEffect](/advanced/abilities-and-effects/effects-base/conditional-effect).*

### String get_editor_description() {#method-get-editor-description}

*Overrides this function of [CompositeEffect](/advanced/abilities-and-effects/effects-composite/composite-effect).*

