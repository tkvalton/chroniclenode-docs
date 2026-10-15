<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# KeepDistanceAction

**Inherits:** [CombatAction](/advanced/behaviors/combat-actions/combat-action) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Maintains a specific distance from target by moving closer or farther as needed. Useful for ranged enemies that want to stay at optimal range.

## Properties

| | | |
|---|---|---|
| `float` | [desired_distance](#prop-desired-distance) | `8.0` |
| `float` | [tolerance](#prop-tolerance) | `1.5` |
| `bool` | [should_walk](#prop-should-walk) | `false` |

## Property descriptions

### float desired_distance = 8.0 {#prop-desired-distance}

The distance to keep from the target.

### float tolerance = 1.5 {#prop-tolerance}

How far off that distance the entity may be before it moves.

### bool should_walk = false {#prop-should-walk}

True when the entity walks and does not run.

