<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ModifyResourcePoolEffect

**Inherits:** [Effect](/advanced/abilities-and-effects/effects-base/effect) < [DatabaseResource](/advanced/data-and-database/database-classes/database-resource) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Modifies an existing resource pool's values or generation properties. Does NOT add or remove pools — use AddResourcePoolEffect for that. Examples: drain mana, reduce max energy, increase regen rate, refill resource on kill.

## Properties

| | | |
|---|---|---|
| `int` | [pool_definition_id](#prop-pool-definition-id) | `0` |
| `CalculationType` | [calculation_type](#prop-calculation-type) | `CalculationType.ADD` |
| `float` | [base_value](#prop-base-value) | `0.0` |
| `int` | [stat_id](#prop-stat-id) | `0` |
| `float` | [stat_multiplier](#prop-stat-multiplier) | `1.0` |
| `bool` | [permanent_gain](#prop-permanent-gain) | `false` |
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

- **ADD** = `0`
- **ADD_CURRENT_PERCENT** = `1`
- **SET_CURRENT** = `2`
- **SET_CURRENT_PERCENT** = `3`
- **ADD_TO_MAX** = `4`
- **ADD_TO_MAX_PERCENT** = `5`
- **SET_MAX** = `6`
- **SET_MAX_PERCENT** = `7`
- **ADD_GEN_RATE** = `8`

## Property descriptions

*Target Pool*

### int pool_definition_id = 0 {#prop-pool-definition-id}

Which resource pool to modify

*Modification*

### CalculationType calculation_type = CalculationType.ADD {#prop-calculation-type}

*No description yet.*

### float base_value = 0.0 {#prop-base-value}

Base value to apply

### int stat_id = 0 {#prop-stat-id}

Scale base_value with originator stat (0 = disabled)

### float stat_multiplier = 1.0 {#prop-stat-multiplier}

Multiplier applied to stat value before adding to base_value

### bool permanent_gain = false {#prop-permanent-gain}

If true, the change is never reverted when the effect ends. Use this with ImmediateTimeStrategy to give/drain resource permanently without leaving a persistent effect on the entity (avoids stacking side-effects).

*Calculation Pipeline*

### CalculationPipeline calculation_pipeline = CalculationPipeline.NONE {#prop-calculation-pipeline}

Run the final value through a combat pipeline before applying (useful for crits on drains/restores)

## Method descriptions

### void specific_effect_logic( effect_instance: EffectInstance ) {#method-specific-effect-logic}

Applies the specific logic for this effect (should be overridden in child classes) *(from [Effect](/advanced/abilities-and-effects/effects-base/effect))*

### void on_stack_reapply( effect_instance: EffectInstance, old_stack_count: int, new_stack_count: int ) {#method-on-stack-reapply}

Virtual method for custom stack reapply logic Called when an existing effect gains additional stacks and reapply_on_stack is true (override in child classes if needed) *(from [Effect](/advanced/abilities-and-effects/effects-base/effect))*

### void on_apply_finished( effect_instance: EffectInstance ) {#method-on-apply-finished}

Handles the finishing of the effect, including cleanup and VFX/SFX (override in child classes if needed, call .super for cleanup) *(from [Effect](/advanced/abilities-and-effects/effects-base/effect))*

### String get_effect_description() {#method-get-effect-description}

Get the effect description (to be overridden by child classes) *(from [Effect](/advanced/abilities-and-effects/effects-base/effect))*

### String get_editor_description() {#method-get-editor-description}

*Overrides this function of [Effect](/advanced/abilities-and-effects/effects-base/effect).*

