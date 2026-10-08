<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# MultiPointTargetStrategyDefinition

**Inherits:** [TargetStrategyDefinition](/advanced/abilities-and-effects/target-strategies/target-strategy-definition) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Definition for selecting multiple points in the game world (multi-stage spells, line attacks, etc.).

## Properties

| | | |
|---|---|---|
| `int` | [points_expected](#prop-points-expected) | `2` |
| `Array[Vector3]` | [fixed_points](#prop-fixed-points) |  |

## Methods

| | |
|---|---|
| `Dictionary` | [validate_target](#method-validate-target)( `strategy_instance: TargetStrategyInstance, target: Variant, user: Variant` ) |
| `Variant` | [get_auto_target](#method-get-auto-target)( `strategy_instance: TargetStrategyInstance, user: Variant` ) |
| `Dictionary` | [add_point_to_sequence](#method-add-point-to-sequence)( `strategy_instance: TargetStrategyInstance, point: Vector3, user: Variant` ) |
| `void` | [clear_point_sequence](#method-clear-point-sequence)( `strategy_instance: TargetStrategyInstance` ) |
| `Dictionary` | [get_point_accumulation_status](#method-get-point-accumulation-status)( `strategy_instance: TargetStrategyInstance` ) |
| `Variant` | [get_property_value](#method-get-property-value)( `strategy_instance: TargetStrategyInstance, property_name: String` ) |

## Property descriptions

### int points_expected = 2 {#prop-points-expected}

Number of points required to complete the targeting sequence

### Array[Vector3] fixed_points {#prop-fixed-points}

Optional array of fixed points relative to the caster (if set, uses these instead of player input)

## Method descriptions

### Dictionary validate_target( strategy_instance: TargetStrategyInstance, target: Variant, user: Variant ) {#method-validate-target}

Validate multi-point targeting (array of Vector3 points)

### Variant get_auto_target( strategy_instance: TargetStrategyInstance, user: Variant ) {#method-get-auto-target}

Get auto-target for multi-point targeting (uses fixed points if available)

### Dictionary add_point_to_sequence( strategy_instance: TargetStrategyInstance, point: Vector3, user: Variant ) {#method-add-point-to-sequence}

Add a point to the multi-point sequence and return completion status

### void clear_point_sequence( strategy_instance: TargetStrategyInstance ) {#method-clear-point-sequence}

Clear accumulated points (for cancellation or reset)

### Dictionary get_point_accumulation_status( strategy_instance: TargetStrategyInstance ) {#method-get-point-accumulation-status}

Get current point accumulation status

### Variant get_property_value( strategy_instance: TargetStrategyInstance, property_name: String ) {#method-get-property-value}

Get property value with runtime override support (includes multi-point specific properties)

