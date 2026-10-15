<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# CastingStateCondition

**Inherits:** [EntityCondition](/advanced/shared-systems/condition-bases/entity-condition) < [Condition](/advanced/shared-systems/condition-bases/condition) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Checks if the entity or target is currently casting/not casting. Consolidates IsCasting and TargetIsCasting conditions.

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

The options of check target: self, target.

- **SELF** = `0` - Check if this entity is casting
- **TARGET** = `1` - Check if this entity's target is casting

## Property descriptions

### CheckTarget check_target = CheckTarget.SELF {#prop-check-target}

What to check - self or target

### bool is_casting = true {#prop-is-casting}

If true, checks for casting; if false, checks for NOT casting

## Method descriptions

### bool evaluate_entity( entity: Entity ) {#method-evaluate-entity}

Is the condition met for this entity?

### String get_entity_description() {#method-get-entity-description}

A short text about what the condition checks on the entity.

### String get_entity_function_description() {#method-get-entity-function-description}

The sentence the editor shows for the condition, with &#123;placeholders&#125; for its values.

