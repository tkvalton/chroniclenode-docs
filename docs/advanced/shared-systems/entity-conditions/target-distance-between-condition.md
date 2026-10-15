<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# TargetDistanceBetweenCondition

**Inherits:** [EntityCondition](/advanced/shared-systems/condition-bases/entity-condition) < [Condition](/advanced/shared-systems/condition-bases/condition) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Checks if the target is within a specified distance range (between min and max).

## Properties

| | | |
|---|---|---|
| `float` | [min_range](#prop-min-range) | `5.0` |
| `float` | [max_range](#prop-max-range) | `10.0` |
| `bool` | [is_between](#prop-is-between) | `true` |

## Methods

| | |
|---|---|
| `String` | [get_entity_function_description](#method-get-entity-function-description)() |
| `bool` | [evaluate_entity](#method-evaluate-entity)( `entity: Entity` ) |
| `String` | [get_entity_description](#method-get-entity-description)() |

## Property descriptions

### float min_range = 5.0 {#prop-min-range}

Checks if the target is within a specified distance range (between min and max).

### float max_range = 10.0 {#prop-max-range}

The greatest distance to the target

### bool is_between = true {#prop-is-between}

True: the target must be between the two distances. False: it must be outside them

## Method descriptions

### String get_entity_function_description() {#method-get-entity-function-description}

The sentence the editor shows for the condition, with &#123;placeholders&#125; for its values.

### bool evaluate_entity( entity: Entity ) {#method-evaluate-entity}

Is the condition met for this entity?

### String get_entity_description() {#method-get-entity-description}

A short text about what the condition checks on the entity.

