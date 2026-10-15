<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ProficiencyEffect

**Inherits:** [Effect](/advanced/abilities-and-effects/effects-base/effect) < [DatabaseResource](/advanced/data-and-database/database-classes/database-resource) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

ProficiencyEffect changes the skill of a player in a proficiency (swords, heavy armor, lockpicking): a trainer that teaches, a potion that makes you clumsy, a buff that raises your skill with fire for a minute. Only players train proficiencies; the effect does nothing to other targets.

## Description

Four actions. Three are permanent and happen once: add levels (a negative number takes levels away), add experience, set the level. The fourth, boost levels, lasts as long as the effect: the levels are given when it starts and taken away when it ends (a negative number is a curse). The boost is never saved with the character: the effect gives it again when a save is loaded. The level is kept between 0 and the highest level of the proficiency.

## Properties

| | | |
|---|---|---|
| `int` | [proficiency_id](#prop-proficiency-id) | `0` |
| `Action` | [action](#prop-action) | `Action.ADD_LEVELS` |
| `float` | [amount](#prop-amount) | `1.0` |

## Methods

| | |
|---|---|
| `void` | [specific_effect_logic](#method-specific-effect-logic)( `effect_instance: EffectInstance` ) |
| `void` | [on_apply_finished](#method-on-apply-finished)( `effect_instance: EffectInstance` ) |
| `bool` | [is_one_off_application](#method-is-one-off-application)() |
| `String` | [get_effect_description](#method-get-effect-description)() |
| `String` | [get_editor_description](#method-get-editor-description)() |
| `Array[Dictionary]` | [validate](#method-validate)() |

## Enumerations

### enum Action {#enum-action}

The options of action: add levels, add experience, set level, boost levels.

- **ADD_LEVELS** = `0` - Permanent: add whole levels to the trained level. A negative amount takes levels away
- **ADD_EXPERIENCE** = `1` - Permanent: add experience towards the next level (levels follow when it is enough)
- **SET_LEVEL** = `2` - Permanent: set the trained level (the experience towards the next one starts again)
- **BOOST_LEVELS** = `3` - Temporary: add levels while the effect lasts. A negative amount is a curse

## Property descriptions

*Proficiency*

### int proficiency_id = 0 {#prop-proficiency-id}

The proficiency that changes

### Action action = Action.ADD_LEVELS {#prop-action}

What happens to the skill

### float amount = 1.0 {#prop-amount}

Levels or experience (see Action). Levels may be negative

## Method descriptions

### void specific_effect_logic( effect_instance: EffectInstance ) {#method-specific-effect-logic}

What the effect does to its target when it is applied.

### void on_apply_finished( effect_instance: EffectInstance ) {#method-on-apply-finished}

========== LIFECYCLE ==========

### bool is_one_off_application() {#method-is-one-off-application}

The permanent actions are done once and must not be done again when a save is loaded; the boost is given again

### String get_effect_description() {#method-get-effect-description}

The text of the effect for tooltips, with its values filled in.

### String get_editor_description() {#method-get-editor-description}

A short text for the effect editor that says what the effect does.

### Array[Dictionary] validate() {#method-validate}

Checks the settings of the effect. Gives the problems found (empty when it is fine).

