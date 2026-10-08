<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# InstantUseStrategyDefinition

**Inherits:** [UseStrategyDefinition](/advanced/abilities-and-effects/use-strategies/use-strategy-definition) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Definition for abilities that execute immediately with no timing delays.

## Methods

| | |
|---|---|
| `void` | [execute_strategy](#method-execute-strategy)( `strategy_instance: UseStrategyInstance, user: Entity, target: Variant` ) |
| `Variant` | [get_property_value](#method-get-property-value)( `strategy_instance: UseStrategyInstance, property_name: String` ) |
| `void` | [cleanup_timing_resources](#method-cleanup-timing-resources)( `strategy_instance: UseStrategyInstance, user: Entity` ) |

## Method descriptions

### void execute_strategy( strategy_instance: UseStrategyInstance, user: Entity, target: Variant ) {#method-execute-strategy}

Execute instant strategy - immediate completion with no delays

### Variant get_property_value( strategy_instance: UseStrategyInstance, property_name: String ) {#method-get-property-value}

Get property value with runtime override support (minimal for instant strategies)

### void cleanup_timing_resources( strategy_instance: UseStrategyInstance, user: Entity ) {#method-cleanup-timing-resources}

Clean up instant-specific resources (minimal cleanup needed)

