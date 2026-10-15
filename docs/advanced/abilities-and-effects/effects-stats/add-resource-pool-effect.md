<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# AddResourcePoolEffect

**Inherits:** [Effect](/advanced/abilities-and-effects/effects-base/effect) < [DatabaseResource](/advanced/data-and-database/database-classes/database-resource) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Adds a temporary resource pool to the target entity. Useful for granting bonus mana, rage, energy, or custom resources. The pool is removed when the effect ends.

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
| `void` | [on_apply_finished](#method-on-apply-finished)( `effect_instance: EffectInstance` ) |
| `String` | [get_effect_description](#method-get-effect-description)() |
| `String` | [get_editor_description](#method-get-editor-description)() |

## Enumerations

### enum CalculationPipeline {#enum-calculationpipeline}

The options of calculation pipeline: none, damage done, healing done.

- **NONE** = `0`
- **DAMAGE_DONE** = `1`

### enum StackBehavior {#enum-stackbehavior}

The options of stack behavior: refresh, replace.

- **REFRESH** = `0`

## Property descriptions

*Pool Configuration*

### int pool_definition_id = 0 {#prop-pool-definition-id}

The resource pool definition to create

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

REFRESH keeps pool alive and resets duration. REPLACE removes and recreates it.

## Method descriptions

### void specific_effect_logic( effect_instance: EffectInstance ) {#method-specific-effect-logic}

What the effect does to its target when it is applied.

### void on_apply_finished( effect_instance: EffectInstance ) {#method-on-apply-finished}

Called when the effect ends: takes back what it did.

### String get_effect_description() {#method-get-effect-description}

The text of the effect for tooltips, with its values filled in.

### String get_editor_description() {#method-get-editor-description}

A short text for the effect editor that says what the effect does.

