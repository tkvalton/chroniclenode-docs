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

The options of health target: target, originator.

- **TARGET** = `0`
- **ORIGINATOR** = `1`

### enum HealthComparison {#enum-healthcomparison}

The options of health comparison: below, above.

- **BELOW** = `0`
- **ABOVE** = `1`

## Property descriptions

*Condition Settings*

### HealthTarget health_target = HealthTarget.TARGET {#prop-health-target}

Whose health is checked (the target or the originator).

### HealthComparison health_comparison = HealthComparison.BELOW {#prop-health-comparison}

How the health is compared with the percentage (below, above ...).

### float threshold_percent = 50.0 {#prop-threshold-percent}

Health percentage threshold (0–100)

## Method descriptions

### void specific_effect_logic( effect_instance: EffectInstance ) {#method-specific-effect-logic}

What the effect does to its target when it is applied.

### String get_editor_description() {#method-get-editor-description}

A short text for the effect editor that says what the effect does.

