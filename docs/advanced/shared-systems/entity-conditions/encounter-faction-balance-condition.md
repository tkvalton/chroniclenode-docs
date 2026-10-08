<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# EncounterFactionBalanceCondition

**Inherits:** [EntityCondition](/advanced/shared-systems/condition-bases/entity-condition) < [Condition](/advanced/shared-systems/condition-bases/condition) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Checks the faction balance in the current encounter. Useful for surrender mechanics, calling for help, or escalation.

## Properties

| | | |
|---|---|---|
| `BalanceType` | [balance_type](#prop-balance-type) | `BalanceType.OUTNUMBERED` |
| `float` | [ratio_threshold](#prop-ratio-threshold) | `2.0  # For outnumbered/outnumbering checks` |

## Methods

| | |
|---|---|
| `String` | [get_entity_function_description](#method-get-entity-function-description)() |
| `bool` | [evaluate_entity](#method-evaluate-entity)( `entity: Entity` ) |
| `String` | [get_entity_description](#method-get-entity-description)() |

## Enumerations

### enum BalanceType {#enum-balancetype}

- **OUTNUMBERED** = `0` - This entity's faction is outnumbered
- **OUTNUMBERING** = `1` - This entity's faction is outnumbering others
- **BALANCED** = `2` - Forces are roughly equal
- **LAST_OF_FACTION** = `3` - This entity is the last of their faction

## Property descriptions

### BalanceType balance_type = BalanceType.OUTNUMBERED {#prop-balance-type}

Which balance of forces to check for: outnumbered, outnumbering, balanced, or the last of its faction

### float ratio_threshold = 2.0  # For outnumbered/outnumbering checks {#prop-ratio-threshold}

How many times more numerous a side must be to count as outnumbering (for the outnumbered and outnumbering checks)

## Method descriptions

### String get_entity_function_description() {#method-get-entity-function-description}

Override this in subclasses to provide template for inline editing *(from [EntityCondition](/advanced/shared-systems/condition-bases/entity-condition))*

### bool evaluate_entity( entity: Entity ) {#method-evaluate-entity}

Override this in subclasses to implement entity-specific evaluation @param entity: The target entity to evaluate @return: true if condition is met for this entity *(from [EntityCondition](/advanced/shared-systems/condition-bases/entity-condition))*

### String get_entity_description() {#method-get-entity-description}

Override this in subclasses to describe the specific entity condition *(from [EntityCondition](/advanced/shared-systems/condition-bases/entity-condition))*

