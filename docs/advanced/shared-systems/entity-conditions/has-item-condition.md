<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# HasItemCondition

**Inherits:** [EntityCondition](/advanced/shared-systems/condition-bases/entity-condition) < [Condition](/advanced/shared-systems/condition-bases/condition) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Check if entity has specific items in their inventory Evaluates whether the entity has the required items and quantities

## Properties

| | | |
|---|---|---|
| `int` | [item_id](#prop-item-id) | `0` |
| `int` | [required_quantity](#prop-required-quantity) | `1` |
| `bool` | [at_least_quantity](#prop-at-least-quantity) | `true` |
| `bool` | [include_equipped_items](#prop-include-equipped-items) | `false` |

## Methods

| | |
|---|---|
| `bool` | [evaluate_entity](#method-evaluate-entity)( `entity: Entity` ) |
| `String` | [get_entity_description](#method-get-entity-description)() |
| `String` | [get_entity_function_description](#method-get-entity-function-description)() |

## Property descriptions

*Item Checks*

### int item_id = 0 {#prop-item-id}

Item ID to check for in the entity's inventory

### int required_quantity = 1 {#prop-required-quantity}

Required quantity of the item (minimum)

### bool at_least_quantity = true {#prop-at-least-quantity}

Whether the entity must have at least the required quantity (true) or exactly the quantity (false)

*Equipment Checks*

### bool include_equipped_items = false {#prop-include-equipped-items}

Whether to also check equipped items (if item is equipment)

## Method descriptions

### bool evaluate_entity( entity: Entity ) {#method-evaluate-entity}

Is the condition met for this entity?

### String get_entity_description() {#method-get-entity-description}

A short text about what the condition checks on the entity.

### String get_entity_function_description() {#method-get-entity-function-description}

The sentence the editor shows for the condition, with &#123;placeholders&#125; for its values.

