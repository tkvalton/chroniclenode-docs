<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# GrantRewardEffect

**Inherits:** [Effect](/advanced/abilities-and-effects/effects-base/effect) < [DatabaseResource](/advanced/data-and-database/database-classes/database-resource) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Applies a Reward to the target entity Works with the existing Reward system to grant abilities, items, currency, effects, etc. Supports reverting rewards when the effect ends (if the reward type supports unapply)

## Description

NOTE: QuestReward is not allowed as it cannot be reversed

## Properties

| | | |
|---|---|---|
| `Reward` | [reward](#prop-reward) |  |
| `NoRoomRule` | [if_no_room](#prop-if-no-room) | `NoRoomRule.WAIT` |

## Methods

| | |
|---|---|
| `void` | [specific_effect_logic](#method-specific-effect-logic)( `effect_instance: EffectInstance` ) |
| `void` | [on_apply_finished](#method-on-apply-finished)( `effect_instance: EffectInstance` ) |
| `String` | [get_effect_description](#method-get-effect-description)() |
| `String` | [get_editor_description](#method-get-editor-description)() |
| `Array[Dictionary]` | [validate](#method-validate)() |
| `bool` | [is_one_off_application](#method-is-one-off-application)() |

## Enumerations

### enum NoRoomRule {#enum-noroomrule}

- **WAIT** = `0` - The reward waits and is given as soon as there is room (Player.grant_reward); a waiting reward is never reverted by this effect
- **REFUSE** = `1` - Nothing is given and the effect fails with a warning to the player

## Property descriptions

### Reward reward {#prop-reward}

The reward to grant

### NoRoomRule if_no_room = NoRoomRule.WAIT {#prop-if-no-room}

What happens when the reward needs room that the target has not got (items in a full bag). The reward is never lost or put over another item

## Method descriptions

### void specific_effect_logic( effect_instance: EffectInstance ) {#method-specific-effect-logic}

Apply the reward to the target

### void on_apply_finished( effect_instance: EffectInstance ) {#method-on-apply-finished}

When effect is removed, unapply the reward if it supports it

### String get_effect_description() {#method-get-effect-description}

Get the effect description (to be overridden by child classes) *(from [Effect](/advanced/abilities-and-effects/effects-base/effect))*

### String get_editor_description() {#method-get-editor-description}

*Overrides this function of [Effect](/advanced/abilities-and-effects/effects-base/effect).*

### Array[Dictionary] validate() {#method-validate}

Validation

### bool is_one_off_application() {#method-is-one-off-application}

What this effect does it does once, when it is applied: a loaded save does not do it again

