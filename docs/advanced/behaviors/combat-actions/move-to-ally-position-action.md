<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# MoveToAllyPositionAction

**Inherits:** [CombatAction](/advanced/behaviors/combat-actions/combat-action) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Moves to a specific ally's position based on criteria

## Properties

| | | |
|---|---|---|
| `float` | [search_range](#prop-search-range) | `20.0` |
| `AllyCriteria` | [ally_criteria](#prop-ally-criteria) | `AllyCriteria.NEAREST` |
| `float` | [offset_distance](#prop-offset-distance) | `2.0` |
| `bool` | [should_walk](#prop-should-walk) | `false` |

## Enumerations

### enum AllyCriteria {#enum-allycriteria}

The options of ally criteria: nearest, farthest, lowest health, highest health.

- **NEAREST** = `0`
- **FARTHEST** = `1`
- **LOWEST_HEALTH** = `2`
- **HIGHEST_HEALTH** = `3`

## Property descriptions

### float search_range = 20.0 {#prop-search-range}

How far to look for an ally.

### AllyCriteria ally_criteria = AllyCriteria.NEAREST {#prop-ally-criteria}

Which ally to move to (the nearest, the weakest ...).

### float offset_distance = 2.0 {#prop-offset-distance}

How far from the ally to stop.

### bool should_walk = false {#prop-should-walk}

True when the entity walks and does not run.

