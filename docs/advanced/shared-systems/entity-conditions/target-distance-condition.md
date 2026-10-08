<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# TargetDistanceCondition

**Inherits:** [EntityCondition](/advanced/shared-systems/condition-bases/entity-condition) < [Condition](/advanced/shared-systems/condition-bases/condition) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Checks if the target is closer/farther than a specified range. Consolidates various distance conditions.

## Properties

| | | |
|---|---|---|
| `float` | [range_threshold](#prop-range-threshold) | `8.0` |
| `bool` | [target_farther](#prop-target-farther) | `true` |

## Methods

| | |
|---|---|
| `String` | [get_entity_function_description](#method-get-entity-function-description)() |
| `bool` | [evaluate_entity](#method-evaluate-entity)( `entity: Entity` ) |
| `String` | [get_entity_description](#method-get-entity-description)() |

## Property descriptions

### float range_threshold = 8.0 {#prop-range-threshold}

The distance to compare with

### bool target_farther = true {#prop-target-farther}

If true, checks if target is FARTHER than range; if false, checks CLOSER

## Method descriptions

### String get_entity_function_description() {#method-get-entity-function-description}

Override this in subclasses to provide template for inline editing *(from [EntityCondition](/advanced/shared-systems/condition-bases/entity-condition))*

### bool evaluate_entity( entity: Entity ) {#method-evaluate-entity}

Override this in subclasses to implement entity-specific evaluation @param entity: The target entity to evaluate @return: true if condition is met for this entity *(from [EntityCondition](/advanced/shared-systems/condition-bases/entity-condition))*

### String get_entity_description() {#method-get-entity-description}

Override this in subclasses to describe the specific entity condition *(from [EntityCondition](/advanced/shared-systems/condition-bases/entity-condition))*

