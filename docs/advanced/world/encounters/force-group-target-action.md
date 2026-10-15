<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ForceGroupTargetAction

**Inherits:** [EncounterAction](/advanced/world/encounters/encounter-action) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Forces all group members to target the same enemy based on selection criteria

## Properties

| | | |
|---|---|---|
| `TargetSelection` | [target_selection](#prop-target-selection) | `TargetSelection.NEAREST_PLAYER` |
| `bool` | [force_retarget](#prop-force-retarget) | `true` |

## Enumerations

### enum TargetSelection {#enum-targetselection}

The options of target selection: nearest player, farthest player, lowest health player, highest health player, current target, random player.

- **NEAREST_PLAYER** = `0`
- **FARTHEST_PLAYER** = `1`
- **LOWEST_HEALTH_PLAYER** = `2`
- **HIGHEST_HEALTH_PLAYER** = `3`
- **CURRENT_TARGET** = `4`
- **RANDOM_PLAYER** = `5`

## Property descriptions

### TargetSelection target_selection = TargetSelection.NEAREST_PLAYER {#prop-target-selection}

Which enemy the group is told to target.

### bool force_retarget = true {#prop-force-retarget}

If false, only affects entities without targets

