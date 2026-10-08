<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# AccessEntityInventoryEffect

**Inherits:** [Effect](/advanced/abilities-and-effects/effects-base/effect) < [DatabaseResource](/advanced/data-and-database/database-classes/database-resource) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Opens the inventory of the target entity (if they are an Entity) Similar to LootInteraction but applied through the effect system

## Properties

| | | |
|---|---|---|
| `float` | [base_success_chance](#prop-base-success-chance) | `1.0` |
| `bool` | [use_stat_modifier](#prop-use-stat-modifier) | `false` |
| `int` | [stat_id](#prop-stat-id) | `0` |
| `float` | [stat_per_percent](#prop-stat-per-percent) | `10.0` |

## Methods

| | |
|---|---|
| `void` | [specific_effect_logic](#method-specific-effect-logic)( `effect_instance: EffectInstance` ) |
| `String` | [get_effect_description](#method-get-effect-description)() |
| `String` | [get_editor_description](#method-get-editor-description)() |
| `Array[Dictionary]` | [validate](#method-validate)() |
| `bool` | [is_one_off_application](#method-is-one-off-application)() |

## Property descriptions

### float base_success_chance = 1.0 {#prop-base-success-chance}

Base chance to successfully open inventory (0.0-1.0)

*Stat Modifier*

### bool use_stat_modifier = false {#prop-use-stat-modifier}

Whether to modify success chance based on a stat

### int stat_id = 0 {#prop-stat-id}

Name of the stat to use (e.g., "Pickpocket", "Dexterity")

### float stat_per_percent = 10.0 {#prop-stat-per-percent}

How much of the stat equals 1% success chance (e.g., 10 = 10 stat points = 1% chance)

## Method descriptions

### void specific_effect_logic( effect_instance: EffectInstance ) {#method-specific-effect-logic}

Opens the target's inventory if they're an Entity

### String get_effect_description() {#method-get-effect-description}

Get the effect description (to be overridden by child classes) *(from [Effect](/advanced/abilities-and-effects/effects-base/effect))*

### String get_editor_description() {#method-get-editor-description}

*Overrides this function of [Effect](/advanced/abilities-and-effects/effects-base/effect).*

### Array[Dictionary] validate() {#method-validate}

Validation

### bool is_one_off_application() {#method-is-one-off-application}

What this effect does it does once, when it is applied: a loaded save does not do it again

