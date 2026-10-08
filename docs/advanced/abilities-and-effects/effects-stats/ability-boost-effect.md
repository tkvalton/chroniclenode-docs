<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# AbilityBoostEffect

**Inherits:** [Effect](/advanced/abilities-and-effects/effects-base/effect) < [DatabaseResource](/advanced/data-and-database/database-classes/database-resource) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

AbilityBoostEffect raises the damage or healing the target does with some abilities or effects: "your Fireball does 20 % more", "your heals over time are 15 % stronger". Put it in a passive ability or a talent for a permanent boost, or make it a buff for a temporary one.

## Description

It names the abilities and effects it is about. An effect id also counts for the effects inside it: the id of a composite effect boosts every damage or heal effect it applies. With neither list the boost applies to everything the target does (the lists are what makes it a mastery). The boost is added to the doer's damage done or healing done calculation after the modifiers of its stats, as a step you can see in the log. The target is the entity that deals the damage (by default the user: Applies to = Self).

## Properties

| | | |
|---|---|---|
| `Boosts` | [boosts](#prop-boosts) | `Boosts.DAMAGE` |
| `Array[int]` | [ability_ids](#prop-ability-ids) | `[]` |
| `Array[int]` | [effect_ids](#prop-effect-ids) | `[]` |
| `float` | [percent_bonus](#prop-percent-bonus) | `10.0` |
| `float` | [flat_bonus](#prop-flat-bonus) | `0.0` |

## Methods

| | |
|---|---|
| `void` | [specific_effect_logic](#method-specific-effect-logic)( `effect_instance: EffectInstance` ) |
| `void` | [on_apply_finished](#method-on-apply-finished)( `effect_instance: EffectInstance` ) |
| `bool` | [matches](#method-matches)( `hit_ability_id: int, hit_effect_ids: Array` ) |
| `bool` | [boosts_damage](#method-boosts-damage)() |
| `bool` | [boosts_healing](#method-boosts-healing)() |
| `String` | [get_effect_description](#method-get-effect-description)() |
| `String` | [get_editor_description](#method-get-editor-description)() |
| `Array[Dictionary]` | [validate](#method-validate)() |

## Enumerations

### enum Boosts {#enum-boosts}

- **DAMAGE** = `0` - Damage done
- **HEALING** = `1` - Healing done
- **BOTH** = `2` - Damage done and healing done

## Property descriptions

*Boost*

### Boosts boosts = Boosts.DAMAGE {#prop-boosts}

What is boosted: the damage the target deals, the healing it does, or both

### Array[int] ability_ids = [] {#prop-ability-ids}

The abilities that are boosted (Ability ids). Empty with no effects either = everything

### Array[int] effect_ids = [] {#prop-effect-ids}

The effects that are boosted (Effect ids), and the effects inside them if they are composite effects

### float percent_bonus = 10.0 {#prop-percent-bonus}

The boost in percent: 20 = 20 % more. Each stack of the effect adds this again

### float flat_bonus = 0.0 {#prop-flat-bonus}

A flat amount added before the percentage, for each stack

## Method descriptions

### void specific_effect_logic( effect_instance: EffectInstance ) {#method-specific-effect-logic}

Applies the specific logic for this effect (should be overridden in child classes) *(from [Effect](/advanced/abilities-and-effects/effects-base/effect))*

### void on_apply_finished( effect_instance: EffectInstance ) {#method-on-apply-finished}

Handles the finishing of the effect, including cleanup and VFX/SFX (override in child classes if needed, call .super for cleanup) *(from [Effect](/advanced/abilities-and-effects/effects-base/effect))*

### bool matches( hit_ability_id: int, hit_effect_ids: Array ) {#method-matches}

Does the boost apply to what the doer is doing? The ability and the effects come from the context of the calculation

### bool boosts_damage() {#method-boosts-damage}

*No description yet.*

### bool boosts_healing() {#method-boosts-healing}

*No description yet.*

### String get_effect_description() {#method-get-effect-description}

Get the effect description (to be overridden by child classes) *(from [Effect](/advanced/abilities-and-effects/effects-base/effect))*

### String get_editor_description() {#method-get-editor-description}

*Overrides this function of [Effect](/advanced/abilities-and-effects/effects-base/effect).*

### Array[Dictionary] validate() {#method-validate}

*No description yet.*

