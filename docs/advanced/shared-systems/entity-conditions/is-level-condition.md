<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# IsLevelCondition

**Inherits:** [EntityCondition](/advanced/shared-systems/condition-bases/entity-condition) < [Condition](/advanced/shared-systems/condition-bases/condition) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Checks if the target entity meets a level requirement. Uses EntityCondition targeting to determine which entity to check.

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

Is the condition met for this entity?

### String get_entity_description() {#method-get-entity-description}

A short text about what the condition checks on the entity.

### String get_entity_function_description() {#method-get-entity-function-description}

The sentence the editor shows for the condition, with &#123;placeholders&#125; for its values.

