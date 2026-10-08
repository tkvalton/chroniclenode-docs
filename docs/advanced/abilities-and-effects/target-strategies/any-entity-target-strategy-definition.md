<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# AnyEntityTargetStrategyDefinition

**Inherits:** [TargetStrategyDefinition](/advanced/abilities-and-effects/target-strategies/target-strategy-definition) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Definition for targeting any entity or targetable object in the game world.

## Methods

| | |
|---|---|
| `Dictionary` | [validate_target](#method-validate-target)( `strategy_instance: TargetStrategyInstance, target: Variant, user: Variant` ) |
| `Variant` | [get_auto_target](#method-get-auto-target)( `strategy_instance: TargetStrategyInstance, user: Variant` ) |
| `Variant` | [get_property_value](#method-get-property-value)( `strategy_instance: TargetStrategyInstance, property_name: String` ) |

## Method descriptions

### Dictionary validate_target( strategy_instance: TargetStrategyInstance, target: Variant, user: Variant ) {#method-validate-target}

Validate entity targeting (accepts any entity or targetable interactable)

### Variant get_auto_target( strategy_instance: TargetStrategyInstance, user: Variant ) {#method-get-auto-target}

Get auto-target for entity targeting (current target if valid, or nearest entity)

### Variant get_property_value( strategy_instance: TargetStrategyInstance, property_name: String ) {#method-get-property-value}

Get property value with runtime override support

