<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# HealEffect

**Inherits:** [CombatResultEffect](/advanced/abilities-and-effects/effects-base/combat-result-effect) < [ScalingEffect](/advanced/abilities-and-effects/effects-base/scaling-effect) < [Effect](/advanced/abilities-and-effects/effects-base/effect) < [DatabaseResource](/advanced/data-and-database/database-classes/database-resource) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

HealEffect is a an effect that applies healing to the target entity.

## Properties

| | | |
|---|---|---|
| `float` | [base_healing](#prop-base-healing) | `1.0` |
| `int` | [stat_id](#prop-stat-id) | `0` |
| `float` | [stat_multiplier](#prop-stat-multiplier) | `1.0` |
| `float` | [heal_variance](#prop-heal-variance) | `0.0` |
| `float` | [weapon_damage_percentage](#prop-weapon-damage-percentage) | `0.0` |
| `float` | [total_health_percentage](#prop-total-health-percentage) | `0.0` |
| `float` | [leech_percentage](#prop-leech-percentage) | `0.0` |
| `float` | [threat_multiplier](#prop-threat-multiplier) | `-1.0` |
| `bool` | [scales_with_charge](#prop-scales-with-charge) | `false` |
| `float` | [min_charge_multiplier](#prop-min-charge-multiplier) | `0.3` |
| `TargetMode` | [target_mode](#prop-target-mode) | `TargetMode.ALL_HEALTH_POOLS` |
| `int` | [pool_id](#prop-pool-id) | `0` |

## Methods

| | |
|---|---|
| `void` | [specific_effect_logic](#method-specific-effect-logic)( `effect_instance: EffectInstance` ) |
| `String` | [get_effect_description](#method-get-effect-description)() |
| `String` | [get_editor_description](#method-get-editor-description)() |
| `bool` | [is_one_off_application](#method-is-one-off-application)() |

## Enumerations

### enum TargetMode {#enum-targetmode}

- **ALL_HEALTH_POOLS** = `0`
- **BASE_POOL_ONLY** = `1`
- **SPECIFIC_POOL** = `2`

## Property descriptions

*Healing Values*

### float base_healing = 1.0 {#prop-base-healing}

The base healing

### int stat_id = 0 {#prop-stat-id}

Adds the originator's stat value to base healing (0 = disabled, set base_healing 0 for stat only)

### float stat_multiplier = 1.0 {#prop-stat-multiplier}

Multiplier applied to stat value before adding to base_healing

### float heal_variance = 0.0 {#prop-heal-variance}

Variance applied to base + stat sum

### float weapon_damage_percentage = 0.0 {#prop-weapon-damage-percentage}

Percentage of weapon damage to add to healing

### float total_health_percentage = 0.0 {#prop-total-health-percentage}

Percentage of health to add to healing

### float leech_percentage = 0.0 {#prop-leech-percentage}

Percentage of healing done that restores the originator's master pool

### float threat_multiplier = -1.0 {#prop-threat-multiplier}

The share of the healing done that becomes threat on the enemies fighting the healed entity (-1 = the project setting)

### bool scales_with_charge = false {#prop-scales-with-charge}

The healing scales with how far a drawn spell was drawn

### float min_charge_multiplier = 0.3 {#prop-min-charge-multiplier}

Share of the healing when released at once

*Pool Targeting*

### TargetMode target_mode = TargetMode.ALL_HEALTH_POOLS {#prop-target-mode}

Pool target mode

### int pool_id = 0 {#prop-pool-id}

Specific Pool to heal (If not found will not heal)

## Method descriptions

### void specific_effect_logic( effect_instance: EffectInstance ) {#method-specific-effect-logic}

Applies the specific logic for this effect (should be overridden in child classes) *(from [Effect](/advanced/abilities-and-effects/effects-base/effect))*

### String get_effect_description() {#method-get-effect-description}

Get the effect description (to be overridden by child classes) *(from [Effect](/advanced/abilities-and-effects/effects-base/effect))*

### String get_editor_description() {#method-get-editor-description}

*Overrides this function of [Effect](/advanced/abilities-and-effects/effects-base/effect).*

### bool is_one_off_application() {#method-is-one-off-application}

What this effect does it does once, when it is applied: a loaded save does not do it again

