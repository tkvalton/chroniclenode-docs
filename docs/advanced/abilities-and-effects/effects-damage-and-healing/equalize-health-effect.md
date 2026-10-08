<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# EqualizeHealthEffect

**Inherits:** [Effect](/advanced/abilities-and-effects/effects-base/effect) < `DatabaseResource` < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

EqualizeHealthEffect equalizes health between the target and originator.

## Properties

| | | |
|---|---|---|
| `int` | [equalize_damage_type](#prop-equalize-damage-type) | `0` |

## Methods

| | |
|---|---|
| `void` | [specific_effect_logic](#method-specific-effect-logic)( `effect_instance: EffectInstance` ) |
| `String` | [get_effect_description](#method-get-effect-description)() |
| `String` | [get_editor_description](#method-get-editor-description)() |
| `bool` | [is_one_off_application](#method-is-one-off-application)() |

## Property descriptions

### int equalize_damage_type = 0 {#prop-equalize-damage-type}

Damage type for equalizing damage (when reducing health)

## Method descriptions

### void specific_effect_logic( effect_instance: EffectInstance ) {#method-specific-effect-logic}

Applies the specific logic for this effect, equalizing health between target and originator

### String get_effect_description() {#method-get-effect-description}

Enhanced tooltip

### String get_editor_description() {#method-get-editor-description}

*No description yet.*

### bool is_one_off_application() {#method-is-one-off-application}

What this effect does it does once, when it is applied: a loaded save does not do it again

