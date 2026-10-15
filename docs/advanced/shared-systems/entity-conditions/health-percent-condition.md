<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# HealthPercentCondition

**Inherits:** [EntityCondition](/advanced/shared-systems/condition-bases/entity-condition) < [Condition](/advanced/shared-systems/condition-bases/condition) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Checks if the entity's health is above/below a specified percentage. Consolidates HealthAbove and HealthBelow conditions.

## Properties

| | | |
|---|---|---|
| `float` | [health_threshold_percent](#prop-health-threshold-percent) | `50.0` |
| `bool` | [health_above](#prop-health-above) | `false` |

## Methods

| | |
|---|---|
| `bool` | [evaluate_entity](#method-evaluate-entity)( `entity: Entity` ) |
| `String` | [get_entity_description](#method-get-entity-description)() |
| `String` | [get_entity_function_description](#method-get-entity-function-description)() |

## Property descriptions

### float health_threshold_percent = 50.0 {#prop-health-threshold-percent}

The health percentage to compare with (0 to 100)

### bool health_above = false {#prop-health-above}

If true, checks for health ABOVE threshold; if false, checks BELOW

## Method descriptions

### bool evaluate_entity( entity: Entity ) {#method-evaluate-entity}

Is the condition met for this entity?

### String get_entity_description() {#method-get-entity-description}

A short text about what the condition checks on the entity.

### String get_entity_function_description() {#method-get-entity-function-description}

The sentence the editor shows for the condition, with &#123;placeholders&#125; for its values.

