<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# WorldPositionDistanceCondition

**Inherits:** [EntityCondition](/advanced/shared-systems/condition-bases/entity-condition) < [Condition](/advanced/shared-systems/condition-bases/condition) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Checks if the entity is within range or farther than a world position.

## Properties

| | | |
|---|---|---|
| `Vector3` | [world_position](#prop-world-position) | `Vector3.ZERO` |
| `float` | [range_threshold](#prop-range-threshold) | `8.0` |
| `bool` | [is_farther](#prop-is-farther) | `true` |

## Methods

| | |
|---|---|
| `bool` | [evaluate_entity](#method-evaluate-entity)( `entity: Entity` ) |
| `String` | [get_entity_description](#method-get-entity-description)() |
| `String` | [get_entity_function_description](#method-get-entity-function-description)() |

## Property descriptions

### Vector3 world_position = Vector3.ZERO {#prop-world-position}

The world position to measure from

### float range_threshold = 8.0 {#prop-range-threshold}

The distance to compare with

### bool is_farther = true {#prop-is-farther}

If true, checks if FARTHER than range; if false, checks WITHIN range

## Method descriptions

### bool evaluate_entity( entity: Entity ) {#method-evaluate-entity}

Override this in subclasses to implement entity-specific evaluation @param entity: The target entity to evaluate @return: true if condition is met for this entity *(from [EntityCondition](/advanced/shared-systems/condition-bases/entity-condition))*

### String get_entity_description() {#method-get-entity-description}

Override this in subclasses to describe the specific entity condition *(from [EntityCondition](/advanced/shared-systems/condition-bases/entity-condition))*

### String get_entity_function_description() {#method-get-entity-function-description}

Override this in subclasses to provide template for inline editing *(from [EntityCondition](/advanced/shared-systems/condition-bases/entity-condition))*

