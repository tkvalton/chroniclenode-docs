<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# EntitiesInRangeWithEffectCondition

**Inherits:** [EntityCondition](/advanced/shared-systems/condition-bases/entity-condition) < [Condition](/advanced/shared-systems/condition-bases/condition) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Checks if minimum number of entities in range have/don't have specific effect

## Properties

| | | |
|---|---|---|
| `float` | [range](#prop-range) | `10.0` |
| `int` | [min_count](#prop-min-count) | `1` |
| `int` | [effect_id](#prop-effect-id) | `0` |
| `int` | [min_stacks](#prop-min-stacks) | `1` |
| `EntityType` | [entity_type](#prop-entity-type) | `EntityType.NPCS` |
| `bool` | [has_effect](#prop-has-effect) | `true` |

## Methods

| | |
|---|---|
| `String` | [get_entity_function_description](#method-get-entity-function-description)() |
| `bool` | [evaluate_entity](#method-evaluate-entity)( `entity: Entity` ) |
| `String` | [get_entity_description](#method-get-entity-description)() |

## Enumerations

### enum EntityType {#enum-entitytype}

- **NPCS** = `0` - Only NPCs
- **PLAYERS** = `1` - Only players
- **ANY** = `2` - Any entity type

## Property descriptions

### float range = 10.0 {#prop-range}

Maximum range to search for entities

### int min_count = 1 {#prop-min-count}

Minimum count required

### int effect_id = 0 {#prop-effect-id}

Effect ID to check for

### int min_stacks = 1 {#prop-min-stacks}

Minimum stacks required

### EntityType entity_type = EntityType.NPCS {#prop-entity-type}

Type of entities to search for

### bool has_effect = true {#prop-has-effect}

If false, checks for entities WITHOUT the effect

## Method descriptions

### String get_entity_function_description() {#method-get-entity-function-description}

Override this in subclasses to provide template for inline editing *(from [EntityCondition](/advanced/shared-systems/condition-bases/entity-condition))*

### bool evaluate_entity( entity: Entity ) {#method-evaluate-entity}

Override this in subclasses to implement entity-specific evaluation @param entity: The target entity to evaluate @return: true if condition is met for this entity *(from [EntityCondition](/advanced/shared-systems/condition-bases/entity-condition))*

### String get_entity_description() {#method-get-entity-description}

Override this in subclasses to describe the specific entity condition *(from [EntityCondition](/advanced/shared-systems/condition-bases/entity-condition))*

