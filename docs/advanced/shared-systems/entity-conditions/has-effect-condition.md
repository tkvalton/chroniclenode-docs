<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# HasEffectCondition

**Inherits:** [EntityCondition](/advanced/shared-systems/condition-bases/entity-condition) < [Condition](/advanced/shared-systems/condition-bases/condition) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Checks if the entity or target has a specific effect active. Consolidates HasEffect and TargetHasEffect conditions.

## Properties

| | | |
|---|---|---|
| `int` | [effect_id](#prop-effect-id) | `0` |
| `int` | [min_stacks](#prop-min-stacks) | `1` |
| `int` | [max_stacks](#prop-max-stacks) | `-1  # -1 = no max limit` |
| `bool` | [has_effect](#prop-has-effect) | `true` |

## Methods

| | |
|---|---|
| `bool` | [evaluate_entity](#method-evaluate-entity)( `entity: Entity` ) |
| `String` | [get_entity_description](#method-get-entity-description)() |
| `String` | [get_entity_function_description](#method-get-entity-function-description)() |

## Property descriptions

### int effect_id = 0 {#prop-effect-id}

The effect to look for

### int min_stacks = 1 {#prop-min-stacks}

The least stacks of the effect that count

### int max_stacks = -1  # -1 = no max limit {#prop-max-stacks}

The most stacks of the effect that count (-1 = no limit)

### bool has_effect = true {#prop-has-effect}

If false, checks for entities WITHOUT the effect

## Method descriptions

### bool evaluate_entity( entity: Entity ) {#method-evaluate-entity}

Override this in subclasses to implement entity-specific evaluation @param entity: The target entity to evaluate @return: true if condition is met for this entity *(from [EntityCondition](/advanced/shared-systems/condition-bases/entity-condition))*

### String get_entity_description() {#method-get-entity-description}

Override this in subclasses to describe the specific entity condition *(from [EntityCondition](/advanced/shared-systems/condition-bases/entity-condition))*

### String get_entity_function_description() {#method-get-entity-function-description}

Override this in subclasses to provide template for inline editing *(from [EntityCondition](/advanced/shared-systems/condition-bases/entity-condition))*

