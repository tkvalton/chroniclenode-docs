<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# AddHealthPoolEffect

**Inherits:** [Effect](/advanced/abilities-and-effects/effects-base/effect) < [DatabaseResource](/advanced/data-and-database/database-classes/database-resource) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

"Absorb Shield": adds a temporary health pool (shield/barrier) to the target entity; with no pool chosen it is the built-in

## Properties

| | | |
|---|---|---|
| `int` | [pool_definition_id](#prop-pool-definition-id) | `0` |
| `float` | [base_value](#prop-base-value) | `100.0` |
| `int` | [stat_id](#prop-stat-id) | `0` |
| `float` | [stat_multiplier](#prop-stat-multiplier) | `1.0` |
| `CalculationPipeline` | [calculation_pipeline](#prop-calculation-pipeline) | `CalculationPipeline.NONE` |
| `StackBehavior` | [stack_behavior](#prop-stack-behavior) | `StackBehavior.REFRESH` |

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

### enum StackBehavior {#enum-stackbehavior}

- **REFRESH** = `0`
- **ADD_TO_VALUE** = `1`
- **NEW_POOL** = `2`

## Property descriptions

*Pool Configuration*

### int pool_definition_id = 0 {#prop-pool-definition-id}

The pool definition to create (defines color, behavior, overfill rules, absorption priority, etc.). 0 = the built-in Shield pool (Database.ID_SHIELD_POOL), which makes this effect a plain "absorb X damage" shield

### float base_value = 100.0 {#prop-base-value}

Base value for both current and max of the created pool

### int stat_id = 0 {#prop-stat-id}

Scale base_value with originator stat (0 = disabled)

### float stat_multiplier = 1.0 {#prop-stat-multiplier}

Multiplier applied to stat value before adding to base_value

*Calculation Pipeline*

### CalculationPipeline calculation_pipeline = CalculationPipeline.NONE {#prop-calculation-pipeline}

Run the final value through a combat calculation pipeline before applying

*Stack Behavior*

### StackBehavior stack_behavior = StackBehavior.REFRESH {#prop-stack-behavior}

*No description yet.*

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

