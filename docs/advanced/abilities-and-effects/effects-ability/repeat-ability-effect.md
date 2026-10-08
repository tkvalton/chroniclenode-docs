<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# RepeatAbilityEffect

**Inherits:** [Effect](/advanced/abilities-and-effects/effects-base/effect) < [DatabaseResource](/advanced/data-and-database/database-classes/database-resource) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

"Cast it again": applies the on-use effects of an ability again, to the same target, a number of times with a delay between them. The repeats are free (no cost, cooldown or resource gain: they are part of the one use) and never repeat themselves. With no ability chosen it repeats the ability that carries this effect. Stops when the target is gone or dead, or the caster dies. This is the "recast" of the effect system; a chain of different abilities is a combo, and extra hits of one damage effect are multistrike. See docs/systems/effects-and-abilities.md, section 10.

## Properties

| | | |
|---|---|---|
| `int` | [ability_id](#prop-ability-id) | `0` |
| `int` | [repeat_count](#prop-repeat-count) | `1` |
| `float` | [repeat_delay](#prop-repeat-delay) | `0.5` |

## Methods

| | |
|---|---|
| `void` | [specific_effect_logic](#method-specific-effect-logic)( `effect_instance: EffectInstance` ) |
| `String` | [get_effect_description](#method-get-effect-description)() |
| `String` | [get_editor_description](#method-get-editor-description)() |
| `bool` | [is_one_off_application](#method-is-one-off-application)() |

## Property descriptions

*Repeat*

### int ability_id = 0 {#prop-ability-id}

The ability to repeat (0 = the ability this effect belongs to)

### int repeat_count = 1 {#prop-repeat-count}

How many extra times the ability's effects are applied

### float repeat_delay = 0.5 {#prop-repeat-delay}

Seconds before each repeat

## Method descriptions

### void specific_effect_logic( effect_instance: EffectInstance ) {#method-specific-effect-logic}

Applies the specific logic for this effect (should be overridden in child classes) *(from [Effect](/advanced/abilities-and-effects/effects-base/effect))*

### String get_effect_description() {#method-get-effect-description}

Get the effect description (to be overridden by child classes) *(from [Effect](/advanced/abilities-and-effects/effects-base/effect))*

### String get_editor_description() {#method-get-editor-description}

*Overrides this function of [Effect](/advanced/abilities-and-effects/effects-base/effect).*

### bool is_one_off_application() {#method-is-one-off-application}

What this effect does it does once, when it is applied: a loaded save does not do it again

