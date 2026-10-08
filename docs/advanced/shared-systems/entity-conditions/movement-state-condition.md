<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# MovementStateCondition

**Inherits:** [EntityCondition](/advanced/shared-systems/condition-bases/entity-condition) < [Condition](/advanced/shared-systems/condition-bases/condition) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Checks whether the entity is standing still, moving, in the air or on the ground.

## Properties

| | | |
|---|---|---|
| `State` | [state](#prop-state) | `State.STANDING_STILL` |
| `float` | [for_at_least_seconds](#prop-for-at-least-seconds) | `0.0` |

## Methods

| | |
|---|---|
| `bool` | [evaluate_entity](#method-evaluate-entity)( `entity: Entity` ) |
| `String` | [get_entity_description](#method-get-entity-description)() |
| `String` | [get_entity_function_description](#method-get-entity-function-description)() |

## Enumerations

### enum State {#enum-state}

- **STANDING_STILL** = `0` - Not moving on the ground plane
- **MOVING** = `1` - Moving on the ground plane
- **AIRBORNE** = `2` - Not on the floor (jumping or falling)
- **ON_GROUND** = `3` - On the floor

## Property descriptions

*Movement Check*

### State state = State.STANDING_STILL {#prop-state}

Which state to check for: standing still, moving, in the air or on the ground

### float for_at_least_seconds = 0.0 {#prop-for-at-least-seconds}

Standing still / moving only: for at least this long (seconds). 0 = as soon as the state is true

## Method descriptions

### bool evaluate_entity( entity: Entity ) {#method-evaluate-entity}

Override this in subclasses to implement entity-specific evaluation @param entity: The target entity to evaluate @return: true if condition is met for this entity *(from [EntityCondition](/advanced/shared-systems/condition-bases/entity-condition))*

### String get_entity_description() {#method-get-entity-description}

Override this in subclasses to describe the specific entity condition *(from [EntityCondition](/advanced/shared-systems/condition-bases/entity-condition))*

### String get_entity_function_description() {#method-get-entity-function-description}

Override this in subclasses to provide template for inline editing *(from [EntityCondition](/advanced/shared-systems/condition-bases/entity-condition))*

