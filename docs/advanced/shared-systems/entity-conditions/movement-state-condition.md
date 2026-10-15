<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# MovementStateCondition

**Inherits:** [EntityCondition](/advanced/shared-systems/condition-bases/entity-condition) < [Condition](/advanced/shared-systems/condition-bases/condition) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Checks whether the entity is standing still, moving, in the air or on the ground. Use it for "heal 20 while not moving": a ticking Condition conditional effect (tick every second) with this condition and a heal as its child effect, or as a condition on a stat effect or a requirement. "Standing still" and "Moving" can ask for a minimum time.

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

The options of state: standing still, moving, airborne, on ground.

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

Is the condition met for this entity?

### String get_entity_description() {#method-get-entity-description}

A short text about what the condition checks on the entity.

### String get_entity_function_description() {#method-get-entity-function-description}

The sentence the editor shows for the condition, with &#123;placeholders&#125; for its values.

