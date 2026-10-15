<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# EncounterDurationCondition

**Inherits:** [EntityCondition](/advanced/shared-systems/condition-bases/entity-condition) < [Condition](/advanced/shared-systems/condition-bases/condition) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Checks if the current encounter has been running for a specific duration. Useful for phase transitions or time-based AI behavior.

## Properties

| | | |
|---|---|---|
| `float` | [minimum_duration](#prop-minimum-duration) | `30.0` |
| `float` | [maximum_duration](#prop-maximum-duration) | `-1.0  # -1 = no maximum` |

## Methods

| | |
|---|---|
| `String` | [get_entity_function_description](#method-get-entity-function-description)() |
| `bool` | [evaluate_entity](#method-evaluate-entity)( `entity: Entity` ) |
| `String` | [get_entity_description](#method-get-entity-description)() |

## Property descriptions

### float minimum_duration = 30.0 {#prop-minimum-duration}

The encounter must have lasted at least this many seconds

### float maximum_duration = -1.0  # -1 = no maximum {#prop-maximum-duration}

The encounter must have lasted at most this many seconds (-1 = no maximum)

## Method descriptions

### String get_entity_function_description() {#method-get-entity-function-description}

The sentence the editor shows for the condition, with &#123;placeholders&#125; for its values.

### bool evaluate_entity( entity: Entity ) {#method-evaluate-entity}

Is the condition met for this entity?

### String get_entity_description() {#method-get-entity-description}

A short text about what the condition checks on the entity.

