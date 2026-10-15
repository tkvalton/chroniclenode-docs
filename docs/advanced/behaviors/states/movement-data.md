<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# MovementData

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

Container for movement information used to select appropriate animations Works with both navigation-driven and input-driven movement

## Variables

| | | |
|---|---|---|
| `Vector2` | [movement_direction](#var-movement-direction) | `Vector2.ZERO` |
| `float` | [movement_speed](#var-movement-speed) | `0.0` |
| `bool` | [is_moving](#var-is-moving) | `false` |
| `bool` | [is_walking](#var-is-walking) | `false  # false = running` |
| `bool` | [is_crouched](#var-is-crouched) | `false` |
| `bool` | [is_swimming](#var-is-swimming) | `false` |
| `bool` | [is_falling](#var-is-falling) | `false` |
| `bool` | [is_turning_only](#var-is-turning-only) | `false` |
| `bool` | [is_in_combat](#var-is-in-combat) | `false` |
| `bool` | [has_directional_effect](#var-has-directional-effect) | `false` |
| `String` | [directional_effect_type](#var-directional-effect-type) | `""` |
| `Vector3` | [entity_forward](#var-entity-forward) | `Vector3.FORWARD` |

## Methods

| | |
|---|---|
| `MovementData` | [from_input_vector](#method-from-input-vector)( `input: Vector2, entity_forward: Vector3, is_walking: bool = false, is_crouched: bool = false` ) *static* |
| `MovementData` | [from_navigation](#method-from-navigation)( `velocity: Vector3, entity_forward: Vector3, is_walking: bool = false` ) *static* |
| `MovementData` | [from_navigation_directional](#method-from-navigation-directional)( `velocity: Vector3, entity_forward: Vector3, is_walking: bool = false` ) *static* |
| `DirectionType` | [get_primary_direction](#method-get-primary-direction)() |

## Enumerations

### enum DirectionType {#enum-directiontype}

The options of direction type: none, forward, backward, left, right, forward left, forward right, backward left, backward right.

- **NONE** = `0`
- **FORWARD** = `1`
- **BACKWARD** = `2`
- **LEFT** = `3`
- **RIGHT** = `4`
- **FORWARD_LEFT** = `5`
- **FORWARD_RIGHT** = `6`
- **BACKWARD_LEFT** = `7`
- **BACKWARD_RIGHT** = `8`

## Variable descriptions

### Vector2 movement_direction = Vector2.ZERO {#var-movement-direction}

Movement vector (normalized, in entity's local space)

### float movement_speed = 0.0 {#var-movement-speed}

How fast the entity moves.

### bool is_moving = false {#var-is-moving}

Movement states

### bool is_walking = false  # false = running {#var-is-walking}

True when the entity walks.

### bool is_crouched = false {#var-is-crouched}

True when the entity is crouched.

### bool is_swimming = false {#var-is-swimming}

True when the entity swims.

### bool is_falling = false {#var-is-falling}

True when the entity falls.

### bool is_turning_only = false {#var-is-turning-only}

turning in place without movement

### bool is_in_combat = false {#var-is-in-combat}

Combat state

### bool has_directional_effect = false {#var-has-directional-effect}

Directional movement effect

### String directional_effect_type = "" {#var-directional-effect-type}

The kind of movement effect that moves the entity (empty when none).

### Vector3 entity_forward = Vector3.FORWARD {#var-entity-forward}

Entity facing direction (for relative movement calculation)

## Method descriptions

### MovementData from_input_vector( input: Vector2, entity_forward: Vector3, is_walking: bool = false, is_crouched: bool = false ) {#method-from-input-vector}

Create movement data from WASD input

### MovementData from_navigation( velocity: Vector3, entity_forward: Vector3, is_walking: bool = false ) {#method-from-navigation}

Create movement data from navigation target

### MovementData from_navigation_directional( velocity: Vector3, entity_forward: Vector3, is_walking: bool = false ) {#method-from-navigation-directional}

Makes the data from the velocity of a path and the way the entity faces.

### DirectionType get_primary_direction() {#method-get-primary-direction}

Get the primary movement direction as enum for animation selection

