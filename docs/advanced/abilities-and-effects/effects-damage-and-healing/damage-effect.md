<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# DamageEffect

**Inherits:** [CombatResultEffect](/advanced/abilities-and-effects/effects-base/combat-result-effect) < [ScalingEffect](/advanced/abilities-and-effects/effects-base/scaling-effect) < [Effect](/advanced/abilities-and-effects/effects-base/effect) < `DatabaseResource` < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

DamageEffect is a an effect that applies damage to the target entity.

## Properties

| | | |
|---|---|---|
| `int` | [damage_type](#prop-damage-type) | `0` |
| `bool` | [use_weapon_damage_type](#prop-use-weapon-damage-type) | `false` |
| `float` | [base_damage](#prop-base-damage) | `1.0` |
| `int` | [stat_id](#prop-stat-id) | `0` |
| `float` | [stat_multiplier](#prop-stat-multiplier) | `1.0` |
| `float` | [damage_variance](#prop-damage-variance) | `0.0` |
| `float` | [weapon_damage_percentage](#prop-weapon-damage-percentage) | `0.0` |
| `float` | [total_health_percentage](#prop-total-health-percentage) | `0.0` |
| `float` | [aggro_multiplier](#prop-aggro-multiplier) | `1.0` |
| `float` | [protective_pool_multiplier](#prop-protective-pool-multiplier) | `1.0` |
| `bool` | [scales_with_charge](#prop-scales-with-charge) | `false` |
| `float` | [min_charge_multiplier](#prop-min-charge-multiplier) | `0.3` |
| `bool` | [can_be_avoided](#prop-can-be-avoided) | `true` |
| `float` | [leech_percentage](#prop-leech-percentage) | `0.0` |
| `TriggerTagDefinition` | [repeat_tag](#prop-repeat-tag) |  |
| `float` | [repeat_damage_percent](#prop-repeat-damage-percent) | `50.0` |
| `CombatOptions.BasisChoice` | [aggro_basis](#prop-aggro-basis) | `CombatOptions.BasisChoice.PROJECT_DEFAULT` |
| `CombatOptions.BasisChoice` | [leech_basis](#prop-leech-basis) | `CombatOptions.BasisChoice.PROJECT_DEFAULT` |

## Methods

| | |
|---|---|
| `void` | [specific_effect_logic](#method-specific-effect-logic)( `effect_instance: EffectInstance` ) |
| `String` | [get_effect_description](#method-get-effect-description)() |
| `String` | [get_editor_description](#method-get-editor-description)() |
| `bool` | [is_one_off_application](#method-is-one-off-application)() |

## Property descriptions

### int damage_type = 0 {#prop-damage-type}

Type of damage dealt (physical, fire, cold, poison, etc.)

### bool use_weapon_damage_type = false {#prop-use-weapon-damage-type}

If true, uses equipped weapon's damage type instead of damage_type

### float base_damage = 1.0 {#prop-base-damage}

Fixed amount of damage to deal

### int stat_id = 0 {#prop-stat-id}

Base damaged based on stat value (Will be in addition to base damage)

### float stat_multiplier = 1.0 {#prop-stat-multiplier}

Multiplier applied to stat value before adding to base_damage

### float damage_variance = 0.0 {#prop-damage-variance}

Variance of base damage + stat value if stat_id

### float weapon_damage_percentage = 0.0 {#prop-weapon-damage-percentage}

Percentage of wielder's weapon damage to add

### float total_health_percentage = 0.0 {#prop-total-health-percentage}

Percentage of target's max health to deal as damage

### float aggro_multiplier = 1.0 {#prop-aggro-multiplier}

Multiplier for aggro generation (1.0 = normal, 2.0 = double aggro)

### float protective_pool_multiplier = 1.0 {#prop-protective-pool-multiplier}

Damage dealt to protective pools (shields, mana shields) is multiplied by this: 4 = a shield loses four points for every point of damage it absorbs (1 = normal)

### bool scales_with_charge = false {#prop-scales-with-charge}

The damage scales with how far a drawn shot was drawn (a bow released early hits for less)

### float min_charge_multiplier = 0.3 {#prop-min-charge-multiplier}

Share of the damage of a shot released at once (1 = fully drawn)

### bool can_be_avoided = true {#prop-can-be-avoided}

Whether this damage can be dodged, parried, or blocked

### float leech_percentage = 0.0 {#prop-leech-percentage}

Percentage of damage dealt that heals the originator

### TriggerTagDefinition repeat_tag {#prop-repeat-tag}

Repeat hits (multistrike): when this trigger tag fires on the hit, its magnitude is the number of extra hits. The tag is fired by a stat (a trigger with this tag) or forced by a trigger rule on this effect (always, magnitude 2 = two extra hits)

### float repeat_damage_percent = 50.0 {#prop-repeat-damage-percent}

The damage of each extra hit, as a percentage of this effect's damage

### CombatOptions.BasisChoice aggro_basis = CombatOptions.BasisChoice.PROJECT_DEFAULT {#prop-aggro-basis}

Which number of the hit generates aggro. Project default: GameplayConfig, Combat, Damage Results

### CombatOptions.BasisChoice leech_basis = CombatOptions.BasisChoice.PROJECT_DEFAULT {#prop-leech-basis}

Which number of the hit the life leech is taken from. Project default: GameplayConfig, Combat, Damage Results

## Method descriptions

### void specific_effect_logic( effect_instance: EffectInstance ) {#method-specific-effect-logic}

Applies the specific logic for this effect

### String get_effect_description() {#method-get-effect-description}

*No description yet.*

### String get_editor_description() {#method-get-editor-description}

*No description yet.*

### bool is_one_off_application() {#method-is-one-off-application}

What this effect does it does once, when it is applied: a loaded save does not do it again

