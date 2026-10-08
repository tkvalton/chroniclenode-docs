<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# GrantRewardEffect

**Inherits:** [Effect](/advanced/abilities-and-effects/effects-base/effect) < `DatabaseResource` < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Applies a Reward to the target entity

## Description

Applies a Reward to the target entity Works with the existing Reward system to grant abilities, items, currency, effects, etc. Supports reverting rewards when the effect ends (if the reward type supports unapply)

NOTE: QuestReward is not allowed as it cannot be reversed

## Properties

| | | |
|---|---|---|
| `Reward ## The reward to grant` | [reward](#prop-reward) |  |

## Methods

| | |
|---|---|
| `void` | [specific_effect_logic](#method-specific-effect-logic)( `effect_instance: EffectInstance` ) |
| `void` | [on_apply_finished](#method-on-apply-finished)( `effect_instance: EffectInstance` ) |
| `String` | [get_effect_description](#method-get-effect-description)() |
| `String` | [get_editor_description](#method-get-editor-description)() |
| `Array[Dictionary]` | [validate](#method-validate)() |
| `bool` | [is_one_off_application](#method-is-one-off-application)() |

## Property descriptions

### Reward ## The reward to grant reward {#prop-reward}

*No description yet.*

## Method descriptions

### void specific_effect_logic( effect_instance: EffectInstance ) {#method-specific-effect-logic}

Apply the reward to the target

### void on_apply_finished( effect_instance: EffectInstance ) {#method-on-apply-finished}

When effect is removed, unapply the reward if it supports it

### String get_effect_description() {#method-get-effect-description}

*No description yet.*

### String get_editor_description() {#method-get-editor-description}

*No description yet.*

### Array[Dictionary] validate() {#method-validate}

Validation

### bool is_one_off_application() {#method-is-one-off-application}

What this effect does it does once, when it is applied: a loaded save does not do it again

