<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# HijackableEffect

**Inherits:** [Effect](/advanced/abilities-and-effects/effects-base/effect) < [DatabaseResource](/advanced/data-and-database/database-classes/database-resource) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

While it lasts, the target vehicle (an NPC with a Mount interaction) is hijackable, or not: a hostile vehicle that is hijackable can be boarded and taken over by the characters it is hostile to. A disabling shot that opens a tank for a while, a lock that holds it shut. When the effect ends the vehicle goes back to what it was. Give it a Persistent or a Temporary time strategy.

## Properties

| | | |
|---|---|---|
| `bool` | [hijackable](#prop-hijackable) | `true` |

## Methods

| | |
|---|---|
| `void` | [specific_effect_logic](#method-specific-effect-logic)( `effect_instance: EffectInstance` ) |
| `void` | [on_apply_finished](#method-on-apply-finished)( `effect_instance: EffectInstance` ) |
| `String` | [get_effect_description](#method-get-effect-description)() |
| `String` | [get_editor_description](#method-get-editor-description)() |

## Property descriptions

### bool hijackable = true {#prop-hijackable}

Is the target hijackable while the effect lasts

## Method descriptions

### void specific_effect_logic( effect_instance: EffectInstance ) {#method-specific-effect-logic}

Changes the vehicle, keeping what it was

### void on_apply_finished( effect_instance: EffectInstance ) {#method-on-apply-finished}

When the effect ends the vehicle is as it was

### String get_effect_description() {#method-get-effect-description}

The text of the effect for tooltips, with its values filled in.

### String get_editor_description() {#method-get-editor-description}

A short text for the effect editor that says what the effect does.

