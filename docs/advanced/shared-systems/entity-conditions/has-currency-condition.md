<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# HasCurrencyCondition

**Inherits:** [EntityCondition](/advanced/shared-systems/condition-bases/entity-condition) < [Condition](/advanced/shared-systems/condition-bases/condition) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Check if the entity holds an amount of a currency (money, or anything a game counts as a currency: a quest track, a token)

## Properties

| | | |
|---|---|---|
| `int` | [currency_id](#prop-currency-id) | `0` |
| `int` | [required_amount](#prop-required-amount) | `1` |
| `bool` | [at_least_amount](#prop-at-least-amount) | `true` |

## Methods

| | |
|---|---|
| `bool` | [evaluate_entity](#method-evaluate-entity)( `entity: Entity` ) |
| `String` | [get_entity_description](#method-get-entity-description)() |
| `String` | [get_entity_function_description](#method-get-entity-function-description)() |

## Property descriptions

*Currency Checks*

### int currency_id = 0 {#prop-currency-id}

The currency to check

### int required_amount = 1 {#prop-required-amount}

How much of it the entity must hold

### bool at_least_amount = true {#prop-at-least-amount}

At least that much (true) or exactly that much (false)

## Method descriptions

### bool evaluate_entity( entity: Entity ) {#method-evaluate-entity}

Is the condition met for this entity?

### String get_entity_description() {#method-get-entity-description}

A short text about what the condition checks on the entity.

### String get_entity_function_description() {#method-get-entity-function-description}

The sentence the editor shows for the condition, with &#123;placeholders&#125; for its values.

