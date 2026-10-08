<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# SelfTargetStrategyDefinition

**Inherits:** [TargetStrategyDefinition](/advanced/abilities-and-effects/target-strategies/target-strategy-definition) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Definition for self-targeting abilities (buffs, heals, transformations, etc.).

## Methods

| | |
|---|---|
| `Dictionary` | [validate_target](#method-validate-target)( `strategy_instance: TargetStrategyInstance, target: Variant, user: Variant` ) |
| `Variant` | [get_auto_target](#method-get-auto-target)( `strategy_instance: TargetStrategyInstance, user: Variant` ) |
| `Variant` | [get_property_value](#method-get-property-value)( `strategy_instance: TargetStrategyInstance, property_name: String` ) |

## Method descriptions

### Dictionary validate_target( strategy_instance: TargetStrategyInstance, target: Variant, user: Variant ) {#method-validate-target}

Validate self-targeting (always succeeds, always returns user as target)

### Variant get_auto_target( strategy_instance: TargetStrategyInstance, user: Variant ) {#method-get-auto-target}

Get auto-target for self-targeting (always returns user)

### Variant get_property_value( strategy_instance: TargetStrategyInstance, property_name: String ) {#method-get-property-value}

Override property getters to enforce self-targeting constraints

