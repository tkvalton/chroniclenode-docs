<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# CastingStateCondition

**Inherits:** [EntityCondition](/advanced/shared-systems/condition-bases/entity-condition) < [Condition](/advanced/shared-systems/condition-bases/condition) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Checks if the entity or target is currently casting/not casting.

## Properties

| | | |
|---|---|---|
| `CheckTarget` | [check_target](#prop-check-target) | `CheckTarget.SELF` |
| `bool` | [is_casting](#prop-is-casting) | `true` |

## Methods

| | |
|---|---|
| `bool` | [evaluate_entity](#method-evaluate-entity)( `entity: Entity` ) |
| `String` | [get_entity_description](#method-get-entity-description)() |
| `String` | [get_entity_function_description](#method-get-entity-function-description)() |

## Enumerations

### enum CheckTarget {#enum-checktarget}

- **SELF** = `0` - Check if this entity is casting
- **TARGET** = `1` - Check if this entity's target is casting

## Property descriptions

### CheckTarget check_target = CheckTarget.SELF {#prop-check-target}

What to check - self or target

### bool is_casting = true {#prop-is-casting}

If true, checks for casting; if false, checks for NOT casting

## Method descriptions

### bool evaluate_entity( entity: Entity ) {#method-evaluate-entity}

Override this in subclasses to implement entity-specific evaluation @param entity: The target entity to evaluate @return: true if condition is met for this entity *(from [EntityCondition](/advanced/shared-systems/condition-bases/entity-condition))*

### String get_entity_description() {#method-get-entity-description}

Override this in subclasses to describe the specific entity condition *(from [EntityCondition](/advanced/shared-systems/condition-bases/entity-condition))*

### String get_entity_function_description() {#method-get-entity-function-description}

Override this in subclasses to provide template for inline editing *(from [EntityCondition](/advanced/shared-systems/condition-bases/entity-condition))*

