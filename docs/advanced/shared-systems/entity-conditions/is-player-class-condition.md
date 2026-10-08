<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# IsPlayerClassCondition

**Inherits:** [EntityCondition](/advanced/shared-systems/condition-bases/entity-condition) < [Condition](/advanced/shared-systems/condition-bases/condition) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Checks if the target entity is a Player with a specific class ID.

## Properties

| | | |
|---|---|---|
| `int` | [required_class_id](#prop-required-class-id) | `0` |
| `bool` | [has_class](#prop-has-class) | `true` |

## Methods

| | |
|---|---|
| `bool` | [evaluate_entity](#method-evaluate-entity)( `entity: Entity` ) |
| `String` | [get_entity_description](#method-get-entity-description)() |
| `bool` | [is_valid](#method-is-valid)() |
| `String` | [get_expected_argument_type](#method-get-expected-argument-type)() |
| `String` | [get_entity_function_description](#method-get-entity-function-description)() |

## Property descriptions

*Class Check*

### int required_class_id = 0 {#prop-required-class-id}

The class ID to check for

### bool has_class = true {#prop-has-class}

Whether to check if entity is this class (true) or doesn't have it (false)

## Method descriptions

### bool evaluate_entity( entity: Entity ) {#method-evaluate-entity}

Override this in subclasses to implement entity-specific evaluation @param entity: The target entity to evaluate @return: true if condition is met for this entity *(from [EntityCondition](/advanced/shared-systems/condition-bases/entity-condition))*

### String get_entity_description() {#method-get-entity-description}

Override this in subclasses to describe the specific entity condition *(from [EntityCondition](/advanced/shared-systems/condition-bases/entity-condition))*

### bool is_valid() {#method-is-valid}

Validate entity targeting configuration *(from [EntityCondition](/advanced/shared-systems/condition-bases/entity-condition))*

### String get_expected_argument_type() {#method-get-expected-argument-type}

*Overrides this function of [EntityCondition](/advanced/shared-systems/condition-bases/entity-condition).*

### String get_entity_function_description() {#method-get-entity-function-description}

Override this in subclasses to provide template for inline editing *(from [EntityCondition](/advanced/shared-systems/condition-bases/entity-condition))*

