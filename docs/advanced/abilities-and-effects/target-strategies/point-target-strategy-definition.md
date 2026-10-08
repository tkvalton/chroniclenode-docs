<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# PointTargetStrategyDefinition

**Inherits:** [TargetStrategyDefinition](/advanced/abilities-and-effects/target-strategies/target-strategy-definition) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Definition for targeting specific points in 3D space (ground-targeted AoE, teleportation, etc.).

## Properties

| | | |
|---|---|---|
| `Vector3` | [fixed_point](#prop-fixed-point) |  |

## Methods

| | |
|---|---|
| `Dictionary` | [validate_target](#method-validate-target)( `strategy_instance: TargetStrategyInstance, target: Variant, user: Variant` ) |
| `Variant` | [get_auto_target](#method-get-auto-target)( `strategy_instance: TargetStrategyInstance, user: Variant` ) |
| `Variant` | [get_property_value](#method-get-property-value)( `strategy_instance: TargetStrategyInstance, property_name: String` ) |

## Property descriptions

### Vector3 fixed_point {#prop-fixed-point}

Optional fixed point relative to the caster (if set, always targets this offset)

## Method descriptions

### Dictionary validate_target( strategy_instance: TargetStrategyInstance, target: Variant, user: Variant ) {#method-validate-target}

Validate point targeting (converts entities to positions, checks range)

### Variant get_auto_target( strategy_instance: TargetStrategyInstance, user: Variant ) {#method-get-auto-target}

Get auto-target for point targeting (fixed point or caster position)

### Variant get_property_value( strategy_instance: TargetStrategyInstance, property_name: String ) {#method-get-property-value}

Get property value with runtime override support (includes point-specific properties)

