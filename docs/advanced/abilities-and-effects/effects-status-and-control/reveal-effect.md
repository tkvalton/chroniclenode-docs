<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# RevealEffect

**Inherits:** [Effect](/advanced/abilities-and-effects/effects-base/effect) < [DatabaseResource](/advanced/data-and-database/database-classes/database-resource) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

RevealEffect reveals its target: a stealthed target becomes visible at once, and, with prevent_stealth and a duration, it cannot go into stealth again while the effect lasts.

## Description

It is not an area. To reveal everything in a shape, make it a child effect of an Area effect (with gain_on_enter and remove_on_exit on the area, an entity is revealed while it is inside); to reveal one target (a hunter's mark), use it alone or in a projectile.

## Properties

| | | |
|---|---|---|
| `bool` | [prevent_stealth](#prop-prevent-stealth) | `true` |

## Methods

| | |
|---|---|
| `void` | [specific_effect_logic](#method-specific-effect-logic)( `effect_instance: EffectInstance` ) |
| `void` | [on_apply_finished](#method-on-apply-finished)( `effect_instance: EffectInstance` ) |
| `String` | [get_effect_description](#method-get-effect-description)() |
| `String` | [get_editor_description](#method-get-editor-description)() |

## Property descriptions

*Reveal Settings*

### bool prevent_stealth = true {#prop-prevent-stealth}

Keep the target from going into stealth again while the effect lasts (needs a duration; an immediate reveal only reveals once)

## Method descriptions

### void specific_effect_logic( effect_instance: EffectInstance ) {#method-specific-effect-logic}

Reveals the target and, for a lasting effect, keeps it from hiding

### void on_apply_finished( effect_instance: EffectInstance ) {#method-on-apply-finished}

Called when the effect ends: takes back what it did.

### String get_effect_description() {#method-get-effect-description}

The text of the effect for tooltips, with its values filled in.

### String get_editor_description() {#method-get-editor-description}

A short text for the effect editor that says what the effect does.

