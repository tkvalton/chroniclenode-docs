<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ModifyHealthPoolEffect

**Inherits:** [Effect](/advanced/abilities-and-effects/effects-base/effect) < `DatabaseResource` < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Modifies the target's master health pool values or generation.

## Properties

| | | |
|---|---|---|
| `CalculationType` | [calculation_type](#prop-calculation-type) | `CalculationType.ADD_CURRENT` |
| `float` | [base_value](#prop-base-value) | `0.0` |
| `int` | [stat_id](#prop-stat-id) | `0` |
| `float` | [stat_multiplier](#prop-stat-multiplier) | `1.0` |
| `CalculationPipeline` | [calculation_pipeline](#prop-calculation-pipeline) | `CalculationPipeline.NONE` |

## Methods

| | |
|---|---|
| `void` | [specific_effect_logic](#method-specific-effect-logic)( `effect_instance: EffectInstance` ) |
| `void` | [on_stack_reapply](#method-on-stack-reapply)( `effect_instance: EffectInstance, old_stack_count: int, new_stack_count: int` ) |
| `void` | [on_apply_finished](#method-on-apply-finished)( `effect_instance: EffectInstance` ) |
| `String` | [get_effect_description](#method-get-effect-description)() |
| `String` | [get_editor_description](#method-get-editor-description)() |

## Enumerations

### enum CalculationPipeline {#enum-calculationpipeline}

- **NONE** = `0`
- **DAMAGE_DONE** = `1`

### enum CalculationType {#enum-calculationtype}

- **ADD_CURRENT** = `0`
- **ADD_CURRENT_PERCENT** = `1`
- **SET_CURRENT** = `2`
- **SET_CURRENT_PERCENT** = `3`
- **ADD_TO_MAX** = `4`
- **ADD_TO_MAX_PERCENT** = `5`
- **SET_MAX** = `6`
- **SET_MAX_PERCENT** = `7`
- **ADD_GEN_RATE** = `8`

## Property descriptions

*Modification*

### CalculationType calculation_type = CalculationType.ADD_CURRENT {#prop-calculation-type}

*No description yet.*

### float base_value = 0.0 {#prop-base-value}

Base value to apply

### int stat_id = 0 {#prop-stat-id}

Scale base_value with originator stat (0 = disabled)

### float stat_multiplier = 1.0 {#prop-stat-multiplier}

Multiplier applied to stat value before adding to base_value

*Calculation Pipeline*

### CalculationPipeline calculation_pipeline = CalculationPipeline.NONE {#prop-calculation-pipeline}

Run the final value through a combat pipeline before applying

## Method descriptions

### void specific_effect_logic( effect_instance: EffectInstance ) {#method-specific-effect-logic}

*No description yet.*

### void on_stack_reapply( effect_instance: EffectInstance, old_stack_count: int, new_stack_count: int ) {#method-on-stack-reapply}

*No description yet.*

### void on_apply_finished( effect_instance: EffectInstance ) {#method-on-apply-finished}

*No description yet.*

### String get_effect_description() {#method-get-effect-description}

*No description yet.*

### String get_editor_description() {#method-get-editor-description}

*No description yet.*

