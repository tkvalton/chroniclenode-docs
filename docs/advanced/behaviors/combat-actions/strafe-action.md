<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# StrafeAction

**Inherits:** [CombatAction](/advanced/behaviors/combat-actions/combat-action) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

StrafeAction circles around the target while maintaining facing direction. Useful for action RPG enemies that position tactically.

## Properties

| | | |
|---|---|---|
| `int` | [strafe_direction](#prop-strafe-direction) | `1` |
| `float` | [maintain_distance](#prop-maintain-distance) | `5.0` |
| `float` | [strafe_arc_degrees](#prop-strafe-arc-degrees) | `90.0` |
| `bool` | [should_walk](#prop-should-walk) | `false` |
| `float` | [strafe_duration](#prop-strafe-duration) | `0.0` |

## Variables

| | | |
|---|---|---|
| `float` | [strafe_start_time](#var-strafe-start-time) | `0.0` |
| `bool` | [is_strafing](#var-is-strafing) | `false` |

## Methods

| | |
|---|---|
| `bool` | [is_strafe_complete](#method-is-strafe-complete)( `entity: Entity` ) |
| `void` | [reset](#method-reset)() |

## Property descriptions

### int strafe_direction = 1 {#prop-strafe-direction}

Strafe direction (1 = right/clockwise, -1 = left/counter-clockwise)

### float maintain_distance = 5.0 {#prop-maintain-distance}

Distance to maintain from target

### float strafe_arc_degrees = 90.0 {#prop-strafe-arc-degrees}

Arc angle to strafe (degrees) - how far to circle

### bool should_walk = false {#prop-should-walk}

Whether to walk (true) or run (false)

### float strafe_duration = 0.0 {#prop-strafe-duration}

Duration to strafe (seconds) - if 0, goes until arc complete

## Variable descriptions

### float strafe_start_time = 0.0 {#var-strafe-start-time}

Internal tracking

### bool is_strafing = false {#var-is-strafing}

*No description yet.*

## Method descriptions

### bool is_strafe_complete( entity: Entity ) {#method-is-strafe-complete}

Check if strafe is complete (used by tactical logic)

### void reset() {#method-reset}

Reset for next use

