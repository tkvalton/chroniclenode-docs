<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ImmunityEffect

**Inherits:** [Effect](/advanced/abilities-and-effects/effects-base/effect) < `DatabaseResource` < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

ImmunityEffect grants or removes immunity to certain types of effects or damage

## Properties

| | | |
|---|---|---|
| `bool` | [immunity_gain](#prop-immunity-gain) | `true` |
| `int` | [immunity_affected](#prop-immunity-affected) | `0` |

## Methods

| | |
|---|---|
| `void` | [specific_effect_logic](#method-specific-effect-logic)( `effect_instance: EffectInstance` ) |
| `void` | [on_apply_finished](#method-on-apply-finished)( `effect_instance: EffectInstance` ) |
| `String` | [get_effect_description](#method-get-effect-description)() |
| `String` | [get_editor_description](#method-get-editor-description)() |

## Property descriptions

*Immunity Settings*

### bool immunity_gain = true {#prop-immunity-gain}

If false, removes immunity instead of granting it

### int immunity_affected = 0 {#prop-immunity-affected}

Name of the immunity to grant/remove

## Method descriptions

### void specific_effect_logic( effect_instance: EffectInstance ) {#method-specific-effect-logic}

Applies the specific logic for this effect, granting or removing immunity

### void on_apply_finished( effect_instance: EffectInstance ) {#method-on-apply-finished}

Handles the finishing of the effect, reversing the immunity change

### String get_effect_description() {#method-get-effect-description}

Get the effect description for tooltips

### String get_editor_description() {#method-get-editor-description}

*No description yet.*

