<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# TauntEffect

**Inherits:** [Effect](/advanced/abilities-and-effects/effects-base/effect) < `DatabaseResource` < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Forces the target to target the originator for the duration of the effect (give it a duration: an effect without one ends at once).

## Properties

| | | |
|---|---|---|
| `bool` | [set_threat_to_top](#prop-set-threat-to-top) | `true` |
| `float` | [threat_margin](#prop-threat-margin) | `10.0` |

## Methods

| | |
|---|---|
| `void` | [specific_effect_logic](#method-specific-effect-logic)( `effect_instance: EffectInstance` ) |
| `void` | [on_apply_finished](#method-on-apply-finished)( `effect_instance: EffectInstance` ) |
| `String` | [get_effect_description](#method-get-effect-description)() |
| `String` | [get_editor_description](#method-get-editor-description)() |
| `bool` | [is_one_off_application](#method-is-one-off-application)() |

## Property descriptions

*Taunt*

### bool set_threat_to_top = true {#prop-set-threat-to-top}

Put the originator's threat above everyone else's on a taunted NPC, so it keeps attacking him after the taunt

### float threat_margin = 10.0 {#prop-threat-margin}

How far above the highest threat

## Method descriptions

### void specific_effect_logic( effect_instance: EffectInstance ) {#method-specific-effect-logic}

*No description yet.*

### void on_apply_finished( effect_instance: EffectInstance ) {#method-on-apply-finished}

*No description yet.*

### String get_effect_description() {#method-get-effect-description}

*No description yet.*

### String get_editor_description() {#method-get-editor-description}

*No description yet.*

### bool is_one_off_application() {#method-is-one-off-application}

The taunt is a lasting state (the forced target comes back when it ends)

