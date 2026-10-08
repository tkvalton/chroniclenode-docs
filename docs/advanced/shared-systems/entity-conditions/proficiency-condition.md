<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ProficiencyCondition

**Inherits:** [EntityCondition](/advanced/shared-systems/condition-bases/entity-condition) < [Condition](/advanced/shared-systems/condition-bases/condition) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Checks the level of an entity in a proficiency: "has Lockpicking 25 or more", "is untrained in swords". Only players train proficiencies; any other entity has the starting level of the proficiency. The level counts the temporary boosts. Uses EntityCondition targeting to determine which entity to check.

## Properties

| | | |
|---|---|---|
| `int` | [proficiency_id](#prop-proficiency-id) | `0` |
| `int` | [required_level](#prop-required-level) | `1` |
| `Condition.CheckLogic` | [level_check_logic](#prop-level-check-logic) | `Condition.CheckLogic.GREATER_EQUAL` |

## Methods

| | |
|---|---|
| `bool` | [evaluate_entity](#method-evaluate-entity)( `entity: Entity` ) |
| `String` | [get_entity_description](#method-get-entity-description)() |
| `String` | [get_entity_function_description](#method-get-entity-function-description)() |

## Property descriptions

*Proficiency Check*

### int proficiency_id = 0 {#prop-proficiency-id}

The proficiency

### int required_level = 1 {#prop-required-level}

The level to compare with

### Condition.CheckLogic level_check_logic = Condition.CheckLogic.GREATER_EQUAL {#prop-level-check-logic}

How the level of the entity is compared with the required level

## Method descriptions

### bool evaluate_entity( entity: Entity ) {#method-evaluate-entity}

Override this in subclasses to implement entity-specific evaluation @param entity: The target entity to evaluate @return: true if condition is met for this entity *(from [EntityCondition](/advanced/shared-systems/condition-bases/entity-condition))*

### String get_entity_description() {#method-get-entity-description}

Override this in subclasses to describe the specific entity condition *(from [EntityCondition](/advanced/shared-systems/condition-bases/entity-condition))*

### String get_entity_function_description() {#method-get-entity-function-description}

Override this in subclasses to provide template for inline editing *(from [EntityCondition](/advanced/shared-systems/condition-bases/entity-condition))*

