<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# EntitiesInRangeHealthCondition

**Inherits:** [EntityCondition](/advanced/shared-systems/condition-bases/entity-condition) < [Condition](/advanced/shared-systems/condition-bases/condition) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Checks if minimum number of entities in range are above/below health threshold

## Properties

| | | |
|---|---|---|
| `float` | [range](#prop-range) | `10.0` |
| `int` | [min_count](#prop-min-count) | `1` |
| `float` | [health_threshold_percent](#prop-health-threshold-percent) | `50.0` |
| `EntityType` | [entity_type](#prop-entity-type) | `EntityType.NPCS` |
| `bool` | [health_above](#prop-health-above) | `false` |

## Methods

| | |
|---|---|
| `String` | [get_entity_function_description](#method-get-entity-function-description)() |
| `bool` | [evaluate_entity](#method-evaluate-entity)( `entity: Entity` ) |
| `String` | [get_entity_description](#method-get-entity-description)() |

## Enumerations

### enum EntityType {#enum-entitytype}

The options of entity type: npcs, players, any.

- **NPCS** = `0` - Only NPCs
- **PLAYERS** = `1` - Only players
- **ANY** = `2` - Any entity type

## Property descriptions

### float range = 10.0 {#prop-range}

Maximum range to search for entities

### int min_count = 1 {#prop-min-count}

Minimum count required

### float health_threshold_percent = 50.0 {#prop-health-threshold-percent}

Health threshold percentage (0-100)

### EntityType entity_type = EntityType.NPCS {#prop-entity-type}

Type of entities to search for

### bool health_above = false {#prop-health-above}

If true, checks for health ABOVE threshold; if false, checks BELOW

## Method descriptions

### String get_entity_function_description() {#method-get-entity-function-description}

The sentence the editor shows for the condition, with &#123;placeholders&#125; for its values.

### bool evaluate_entity( entity: Entity ) {#method-evaluate-entity}

Is the condition met for this entity?

### String get_entity_description() {#method-get-entity-description}

A short text about what the condition checks on the entity.

