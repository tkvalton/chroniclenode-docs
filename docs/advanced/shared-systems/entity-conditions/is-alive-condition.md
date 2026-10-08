<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# IsAliveCondition

**Inherits:** [EntityCondition](/advanced/shared-systems/condition-bases/entity-condition) < [Condition](/advanced/shared-systems/condition-bases/condition) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Checks if the target entity is alive or dead. Uses EntityCondition targeting to determine which entity to check.

## Properties

| | | |
|---|---|---|
| `bool` | [is_alive](#prop-is-alive) | `true` |

## Methods

| | |
|---|---|
| `bool` | [evaluate_entity](#method-evaluate-entity)( `entity: Entity` ) |
| `String` | [get_entity_description](#method-get-entity-description)() |
| `String` | [get_entity_function_description](#method-get-entity-function-description)() |
| `bool` | [is_valid](#method-is-valid)() |
| `String` | [get_expected_argument_type](#method-get-expected-argument-type)() |

## Property descriptions

*Alive Check*

### bool is_alive = true {#prop-is-alive}

Whether to check if entity is alive (true) or dead (false)

## Method descriptions

### bool evaluate_entity( entity: Entity ) {#method-evaluate-entity}

Override this in subclasses to implement entity-specific evaluation @param entity: The target entity to evaluate @return: true if condition is met for this entity *(from [EntityCondition](/advanced/shared-systems/condition-bases/entity-condition))*

### String get_entity_description() {#method-get-entity-description}

Override this in subclasses to describe the specific entity condition *(from [EntityCondition](/advanced/shared-systems/condition-bases/entity-condition))*

### String get_entity_function_description() {#method-get-entity-function-description}

Override this in subclasses to provide template for inline editing *(from [EntityCondition](/advanced/shared-systems/condition-bases/entity-condition))*

### bool is_valid() {#method-is-valid}

Validate entity targeting configuration *(from [EntityCondition](/advanced/shared-systems/condition-bases/entity-condition))*

### String get_expected_argument_type() {#method-get-expected-argument-type}

*Overrides this function of [EntityCondition](/advanced/shared-systems/condition-bases/entity-condition).*

