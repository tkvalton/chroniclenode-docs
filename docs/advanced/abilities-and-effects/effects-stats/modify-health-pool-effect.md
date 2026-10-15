<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ModifyHealthPoolEffect

**Inherits:** [Effect](/advanced/abilities-and-effects/effects-base/effect) < [DatabaseResource](/advanced/data-and-database/database-classes/database-resource) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Modifies the target's master health pool values or generation. Always targets the master pool — use DamageEffect/HealEffect for combat-pipeline damage/healing. Examples: reduce max health by 20%, set health to 1, apply a regen over time, curse that halves max health, execute effects, resurrection with partial health.

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

The options of calculation pipeline: none, damage done, healing done.

- **NONE** = `0`
- **DAMAGE_DONE** = `1`

### enum CalculationType {#enum-calculationtype}

The options of calculation type: add current, add current percent, set current, set current percent, add to max, add to max percent, set max, set max percent, add gen rate, add gen value.

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

How the amount changes the pool (add to the current value, set the maximum ...).

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

What the effect does to its target when it is applied.

### void on_stack_reapply( effect_instance: EffectInstance, old_stack_count: int, new_stack_count: int ) {#method-on-stack-reapply}

Called when the effect is applied again on a target that has it (a new stack or a refresh).

### void on_apply_finished( effect_instance: EffectInstance ) {#method-on-apply-finished}

Called when the effect ends: takes back what it did.

### String get_effect_description() {#method-get-effect-description}

The text of the effect for tooltips, with its values filled in.

### String get_editor_description() {#method-get-editor-description}

A short text for the effect editor that says what the effect does.

