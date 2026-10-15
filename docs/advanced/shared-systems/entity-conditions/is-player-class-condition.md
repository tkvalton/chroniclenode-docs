<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# IsPlayerClassCondition

**Inherits:** [EntityCondition](/advanced/shared-systems/condition-bases/entity-condition) < [Condition](/advanced/shared-systems/condition-bases/condition) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Checks if the target entity is a Player with a specific class ID. Uses EntityCondition targeting to determine which entity to check.

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

Is the condition met for this entity?

### String get_entity_description() {#method-get-entity-description}

A short text about what the condition checks on the entity.

### bool is_valid() {#method-is-valid}

Are the settings of the condition complete?

### String get_expected_argument_type() {#method-get-expected-argument-type}

The kind of thing the condition is checked against (an entity, an encounter ...).

### String get_entity_function_description() {#method-get-entity-function-description}

The sentence the editor shows for the condition, with &#123;placeholders&#125; for its values.

