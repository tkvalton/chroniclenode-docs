<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# SwitchToAllyAction

**Inherits:** [CombatAction](/advanced/behaviors/combat-actions/combat-action) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Switches target to ally based on various criteria

## Properties

| | | |
|---|---|---|
| `float` | [search_range](#prop-search-range) | `15.0` |
| `TargetCriteria` | [target_criteria](#prop-target-criteria) | `TargetCriteria.NEAREST` |
| `float` | [health_threshold_percent](#prop-health-threshold-percent) | `-1.0  # -1 = ignore health threshold` |
| `int` | [required_effect_id](#prop-required-effect-id) | `0  # 0 = no effect requirement` |
| `bool` | [exclude_self](#prop-exclude-self) | `true` |

## Enumerations

### enum TargetCriteria {#enum-targetcriteria}

Switches target to ally based on various criteria

- **NEAREST** = `0`
- **FARTHEST** = `1`
- **LOWEST_HEALTH** = `2`
- **HIGHEST_HEALTH** = `3`
- **RANDOM** = `4`

## Property descriptions

### float search_range = 15.0 {#prop-search-range}

*No description yet.*

### TargetCriteria target_criteria = TargetCriteria.NEAREST {#prop-target-criteria}

*No description yet.*

### float health_threshold_percent = -1.0  # -1 = ignore health threshold {#prop-health-threshold-percent}

*No description yet.*

### int required_effect_id = 0  # 0 = no effect requirement {#prop-required-effect-id}

*No description yet.*

### bool exclude_self = true {#prop-exclude-self}

*No description yet.*

