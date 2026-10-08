<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# StatModifierEffect

**Inherits:** [ScalingEffect](/advanced/abilities-and-effects/effects-base/scaling-effect) < [Effect](/advanced/abilities-and-effects/effects-base/effect) < [DatabaseResource](/advanced/data-and-database/database-classes/database-resource) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

StatModifierEffect modifies stats using the new stats system Can optionally tap into DamageDoneCalculation for enhanced effects It changes one stat, or every stat of a stat group at once ("all Primary stats +10 %"): see StatGroupDefinition

## Properties

| | | |
|---|---|---|
| `Targets` | [target_mode](#prop-target-mode) | `Targets.SINGLE_STAT` |
| `int` | [stat_to_modify](#prop-stat-to-modify) | `0` |
| `int` | [stat_group_id](#prop-stat-group-id) | `0` |
| `Array[int]` | [excluded_stats](#prop-excluded-stats) | `[]` |
| `CalculationType` | [calculation_type](#prop-calculation-type) | `CalculationType.ADD` |
| `CalculationPipeline` | [calculation_pipeline](#prop-calculation-pipeline) | `CalculationPipeline.NONE` |

## Methods

| | |
|---|---|
| `Array[int]` | [resolve_stat_ids](#method-resolve-stat-ids)( `target_entity: Variant` ) |
| `void` | [specific_effect_logic](#method-specific-effect-logic)( `effect_instance: EffectInstance` ) |
| `void` | [on_stack_reapply](#method-on-stack-reapply)( `effect_instance: EffectInstance, old_stack_count: int, new_stack_count: int` ) |
| `void` | [on_apply_finished](#method-on-apply-finished)( `effect_instance: EffectInstance` ) |
| `String` | [get_effect_description](#method-get-effect-description)() |
| `String` | [get_editor_description](#method-get-editor-description)() |

## Enumerations

### enum CalculationPipeline {#enum-calculationpipeline}

- **NONE** = `0`
- **DAMAGE_DONE** = `1`
- **HEALING_DONE** = `2`

### enum CalculationType {#enum-calculationtype}

- **ADD** = `0`
- **MULTIPLY** = `1`
- **PERCENTAGE_INCREASE** = `2`
- **PERCENTAGE_DECREASE** = `3`
- **SET_BASE** = `4`

### enum Targets {#enum-targets}

- **SINGLE_STAT** = `0` - the stat chosen below
- **STAT_GROUP** = `1` - every stat of a stat group the target has

## Property descriptions

*Stat Modification*

### Targets target_mode = Targets.SINGLE_STAT {#prop-target-mode}

One stat, or every stat of a stat group

### int stat_to_modify = 0 {#prop-stat-to-modify}

Id of the the stat instance to modify

### int stat_group_id = 0 {#prop-stat-group-id}

The stat group whose stats are all modified (group mode). The stats are looked up when the effect starts and remembered, so the same ones are put back when it ends

### Array[int] excluded_stats = [] {#prop-excluded-stats}

Stats of the group that are left out (group mode)

### CalculationType calculation_type = CalculationType.ADD {#prop-calculation-type}

The form of calcuation

### CalculationPipeline calculation_pipeline = CalculationPipeline.NONE {#prop-calculation-pipeline}

Use a calculation pipeline for this effect

## Method descriptions

### Array[int] resolve_stat_ids( target_entity: Variant ) {#method-resolve-stat-ids}

*No description yet.*

### void specific_effect_logic( effect_instance: EffectInstance ) {#method-specific-effect-logic}

Applies the specific logic for this effect (should be overridden in child classes) *(from [Effect](/advanced/abilities-and-effects/effects-base/effect))*

### void on_stack_reapply( effect_instance: EffectInstance, old_stack_count: int, new_stack_count: int ) {#method-on-stack-reapply}

Handle custom stack reapply logic - calculates delta between old and new stack totals

### void on_apply_finished( effect_instance: EffectInstance ) {#method-on-apply-finished}

Handles the finishing of the effect, including cleanup and VFX/SFX (override in child classes if needed, call .super for cleanup) *(from [Effect](/advanced/abilities-and-effects/effects-base/effect))*

### String get_effect_description() {#method-get-effect-description}

Get the effect description (to be overridden by child classes) *(from [Effect](/advanced/abilities-and-effects/effects-base/effect))*

### String get_editor_description() {#method-get-editor-description}

*Overrides this function of [Effect](/advanced/abilities-and-effects/effects-base/effect).*

