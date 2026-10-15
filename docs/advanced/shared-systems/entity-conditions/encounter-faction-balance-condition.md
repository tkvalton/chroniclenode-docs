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

The options of balance type: outnumbered, outnumbering, balanced, last of faction.

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

The sentence the editor shows for the condition, with &#123;placeholders&#125; for its values.

### bool evaluate_entity( entity: Entity ) {#method-evaluate-entity}

Is the condition met for this entity?

### String get_entity_description() {#method-get-entity-description}

A short text about what the condition checks on the entity.

