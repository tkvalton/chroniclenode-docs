<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ForceGroupTargetAction

**Inherits:** [EncounterAction](/advanced/world/encounters/encounter-action) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Forces all group members to target the same enemy based on selection criteria

## Properties

| | | |
|---|---|---|
| `TargetSelection` | [target_selection](#prop-target-selection) | `TargetSelection.NEAREST_PLAYER` |
| `bool` | [force_retarget](#prop-force-retarget) | `true  # If false, only affects entities without targets` |

## Enumerations

### enum TargetSelection {#enum-targetselection}

- **NEAREST_PLAYER** = `0`
- **FARTHEST_PLAYER** = `1`
- **LOWEST_HEALTH_PLAYER** = `2`
- **HIGHEST_HEALTH_PLAYER** = `3`
- **CURRENT_TARGET** = `4`
- **RANDOM_PLAYER** = `5`

## Property descriptions

### TargetSelection target_selection = TargetSelection.NEAREST_PLAYER {#prop-target-selection}

*No description yet.*

### bool force_retarget = true  # If false, only affects entities without targets {#prop-force-retarget}

*No description yet.*

