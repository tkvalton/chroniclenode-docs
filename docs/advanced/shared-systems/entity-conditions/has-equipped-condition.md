<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# HasEquippedCondition

**Inherits:** [EntityCondition](/advanced/shared-systems/condition-bases/entity-condition) < [Condition](/advanced/shared-systems/condition-bases/condition) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Check if entity has specific equipment items equipped Evaluates whether the entity has the required equipment items currently equipped

## Properties

| | | |
|---|---|---|
| `int` | [item_id](#prop-item-id) | `0` |

## Methods

| | |
|---|---|
| `bool` | [evaluate_entity](#method-evaluate-entity)( `entity: Entity` ) |
| `String` | [get_entity_description](#method-get-entity-description)() |
| `String` | [get_entity_function_description](#method-get-entity-function-description)() |

## Property descriptions

*Equipment Checks*

### int item_id = 0 {#prop-item-id}

Item ID to check for in the entity's equipped slots

## Method descriptions

### bool evaluate_entity( entity: Entity ) {#method-evaluate-entity}

Is the condition met for this entity?

### String get_entity_description() {#method-get-entity-description}

A short text about what the condition checks on the entity.

### String get_entity_function_description() {#method-get-entity-function-description}

The sentence the editor shows for the condition, with &#123;placeholders&#125; for its values.

