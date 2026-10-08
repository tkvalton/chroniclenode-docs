<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# MoveToPointAction

**Inherits:** [CombatAction](/advanced/behaviors/combat-actions/combat-action) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

MoveToPointAction commands the entity to move to a specific world position. Useful for scripted boss movements (e.g., "boss runs to arena center at 30s").

## Properties

| | | |
|---|---|---|
| `Vector3` | [target_position](#prop-target-position) | `Vector3.ZERO` |
| `bool` | [should_walk](#prop-should-walk) | `false` |
| `float` | [min_distance](#prop-min-distance) | `0.5` |

## Property descriptions

### Vector3 target_position = Vector3.ZERO {#prop-target-position}

Target world position to move to

### bool should_walk = false {#prop-should-walk}

Whether to walk (true) or run (false)

### float min_distance = 0.5 {#prop-min-distance}

How close to get to the target position

