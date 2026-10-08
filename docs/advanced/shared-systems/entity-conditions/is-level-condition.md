<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# IsLevelCondition

**Inherits:** [EntityCondition](/advanced/shared-systems/condition-bases/entity-condition) < [Condition](/advanced/shared-systems/condition-bases/condition) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Checks if the target entity meets a level requirement.

## Properties

| | | |
|---|---|---|
| `int` | [required_level](#prop-required-level) | `1` |
| `Condition.CheckLogic` | [level_check_logic](#prop-level-check-logic) | `Condition.CheckLogic.GREATER_EQUAL` |

## Methods

| | |
|---|---|
| `bool` | [evaluate_entity](#method-evaluate-entity)( `entity: Entity` ) |
| `String` | [get_entity_description](#method-get-entity-description)() |
| `String` | [get_entity_function_description](#method-get-entity-function-description)() |

## Property descriptions

*Level Check*

### int required_level = 1 {#prop-required-level}

The level requirement to check against

### Condition.CheckLogic level_check_logic = Condition.CheckLogic.GREATER_EQUAL {#prop-level-check-logic}

Logic for comparing the level

## Method descriptions

### bool evaluate_entity( entity: Entity ) {#method-evaluate-entity}

Override this in subclasses to implement entity-specific evaluation @param entity: The target entity to evaluate @return: true if condition is met for this entity *(from [EntityCondition](/advanced/shared-systems/condition-bases/entity-condition))*

### String get_entity_description() {#method-get-entity-description}

Override this in subclasses to describe the specific entity condition *(from [EntityCondition](/advanced/shared-systems/condition-bases/entity-condition))*

### String get_entity_function_description() {#method-get-entity-function-description}

Override this in subclasses to provide template for inline editing *(from [EntityCondition](/advanced/shared-systems/condition-bases/entity-condition))*

