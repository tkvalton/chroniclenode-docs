<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ScalingEffect

**Inherits:** [Effect](/advanced/abilities-and-effects/effects-base/effect) < [DatabaseResource](/advanced/data-and-database/database-classes/database-resource) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

**Inherited by:** [CombatResultEffect](/advanced/abilities-and-effects/effects-base/combat-result-effect), [StatModifierEffect](/advanced/abilities-and-effects/effects-stats/stat-modifier-effect)

The base of the effects that have a number which can depend on the situation: damage, healing and stat modifiers.

## Description

It adds a list of **scaling rules**: each measures something about the target or the user (its health, a shield, the stacks of an effect, a tag ...) and gives a bonus in percent, and the bonuses add up to one factor on the number of the effect. A damage or heal effect scales what it deals or heals; a stat modifier scales the value it applies, measured when it is applied. A new effect that has such a number can extend this class to get the list.

## Properties

| | | |
|---|---|---|
| `Array[EffectScalingRule]` | [scaling_rules](#prop-scaling-rules) | `[]` |

## Methods

| | |
|---|---|
| `EffectAmount` | [get_amount](#method-get-amount)() |
| `EffectAmount` | [ensure_amount](#method-ensure-amount)() |
| `float` | [calculate_amount](#method-calculate-amount)( `effect_instance: EffectInstance, overrides: Dictionary = {}` ) |
| `float` | [get_scaling_multiplier](#method-get-scaling-multiplier)( `effect_instance: EffectInstance` ) |

## Property descriptions

*Scaling Rules*

### Array[EffectScalingRule] scaling_rules = [] {#prop-scaling-rules}

Rules that scale the number of the effect by the target or the user (execute, missing health, a shield, stacks of an effect): see EffectScalingRule

## Method descriptions

### EffectAmount get_amount() {#method-get-amount}

The amount of the effect: its own, or the one the older fields describe

### EffectAmount ensure_amount() {#method-ensure-amount}

Gives the effect its own amount (made from the older fields) so it can be edited

### float calculate_amount( effect_instance: EffectInstance, overrides: Dictionary = &#123;&#125; ) {#method-calculate-amount}

The amount for an effect that runs now, before stacks, scaling rules and charge

### float get_scaling_multiplier( effect_instance: EffectInstance ) {#method-get-scaling-multiplier}

The factor the scaling rules put on a value: 1 + the bonuses of the rules whose conditions hold, in percent (never below 0)

