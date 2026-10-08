<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# AllyTargetStrategyDefinition

**Inherits:** [TargetStrategyDefinition](/advanced/abilities-and-effects/target-strategies/target-strategy-definition) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Definition for targeting allied entities (friendly factions, party members, self) and targetable objects.

## Properties

| | | |
|---|---|---|
| `bool` | [can_target_self](#prop-can-target-self) | `true` |

## Methods

| | |
|---|---|
| `Dictionary` | [validate_target](#method-validate-target)( `strategy_instance: TargetStrategyInstance, target: Variant, user: Variant` ) |
| `Variant` | [get_auto_target](#method-get-auto-target)( `strategy_instance: TargetStrategyInstance, user: Variant` ) |
| `Variant` | [get_property_value](#method-get-property-value)( `strategy_instance: TargetStrategyInstance, property_name: String` ) |

## Property descriptions

### bool can_target_self = true {#prop-can-target-self}

Whether the caster can target themselves with this ally-targeting ability

## Method descriptions

### Dictionary validate_target( strategy_instance: TargetStrategyInstance, target: Variant, user: Variant ) {#method-validate-target}

Validate ally targeting based on faction relationships and self-targeting rules

### Variant get_auto_target( strategy_instance: TargetStrategyInstance, user: Variant ) {#method-get-auto-target}

Get auto-target for ally targeting (self, nearest friendly entity, or targetable object)

### Variant get_property_value( strategy_instance: TargetStrategyInstance, property_name: String ) {#method-get-property-value}

Get property value with runtime override support (includes ally-specific properties)

