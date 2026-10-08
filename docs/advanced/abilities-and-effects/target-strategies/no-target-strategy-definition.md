<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# NoTargetStrategyDefinition

**Inherits:** [TargetStrategyDefinition](/advanced/abilities-and-effects/target-strategies/target-strategy-definition) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Definition for abilities that don't need specific targeting (AoE around user, global effects, buffs).

## Methods

| | |
|---|---|
| `Dictionary` | [validate_target](#method-validate-target)( `strategy_instance: TargetStrategyInstance, target: Variant, user: Variant` ) |
| `Variant` | [get_auto_target](#method-get-auto-target)( `strategy_instance: TargetStrategyInstance, user: Variant` ) |
| `Variant` | [get_property_value](#method-get-property-value)( `strategy_instance: TargetStrategyInstance, property_name: String` ) |

## Method descriptions

### Dictionary validate_target( strategy_instance: TargetStrategyInstance, target: Variant, user: Variant ) {#method-validate-target}

Validate no-targeting (always succeeds, returns user as reference point)

### Variant get_auto_target( strategy_instance: TargetStrategyInstance, user: Variant ) {#method-get-auto-target}

Get auto-target for no-targeting (always returns user as reference point)

### Variant get_property_value( strategy_instance: TargetStrategyInstance, property_name: String ) {#method-get-property-value}

Override property getters to enforce no-targeting constraints

