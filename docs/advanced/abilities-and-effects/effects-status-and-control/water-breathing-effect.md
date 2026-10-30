<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# WaterBreathingEffect

**Inherits:** [Effect](/advanced/abilities-and-effects/effects-base/effect) < [DatabaseResource](/advanced/data-and-database/database-classes/database-resource) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

WaterBreathingEffect lets its target breathe where a movement volume asks it to hold its breath (under water, in a room with no air): the target never loses breath while the effect lasts, and one that is drowning is saved at once (its breath is full again). A potion of water breathing, a spell, an aura or a trait of a water creature.

## Description

It lasts: give it a duration, or make it a persistent effect (a buff, a trait of the entity). An immediate effect has nothing to hold. Two of them on one target hold together: the target breathes again when the last one ends.

## Methods

| | |
|---|---|
| `void` | [specific_effect_logic](#method-specific-effect-logic)( `effect_instance: EffectInstance` ) |
| `void` | [on_apply_finished](#method-on-apply-finished)( `effect_instance: EffectInstance` ) |
| `String` | [get_effect_description](#method-get-effect-description)() |
| `String` | [get_editor_description](#method-get-editor-description)() |
| `Array[Dictionary]` | [validate](#method-validate)() |

## Method descriptions

### void specific_effect_logic( effect_instance: EffectInstance ) {#method-specific-effect-logic}

Holds the breath exemption of the target (once per hold, so two of these on one target end independently)

### void on_apply_finished( effect_instance: EffectInstance ) {#method-on-apply-finished}

Called when the effect ends: the target needs air again

### String get_effect_description() {#method-get-effect-description}

The text of the effect for tooltips, with its values filled in.

### String get_editor_description() {#method-get-editor-description}

A short text for the effect editor that says what the effect does.

### Array[Dictionary] validate() {#method-validate}

Validation

