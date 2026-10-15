<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# SchoolLockEffect

**Inherits:** [Effect](/advanced/abilities-and-effects/effects-base/effect) < [DatabaseResource](/advanced/data-and-database/database-classes/database-resource) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

SchoolLockEffect locks all abilities of a specific school on the target entity Perfect for counter-spell abilities, school-specific silences, and tactical control. The lock is kept by the target's AbilityComponent (a count per school, so two locks of one school end independently) and checked when an ability is used: a locked ability refuses with SCHOOL_LOCKED, nothing about the ability itself changes.

## Properties

| | | |
|---|---|---|
| `int` | [ability_school](#prop-ability-school) | `0` |

## Methods

| | |
|---|---|
| `void` | [specific_effect_logic](#method-specific-effect-logic)( `effect_instance: EffectInstance` ) |
| `void` | [on_apply_finished](#method-on-apply-finished)( `effect_instance: EffectInstance` ) |
| `String` | [get_effect_description](#method-get-effect-description)() |
| `String` | [get_editor_description](#method-get-editor-description)() |

## Property descriptions

*School Lock Settings*

### int ability_school = 0 {#prop-ability-school}

The ability school to lock (e.g., "Fire", "Frost", "Shadow")

## Method descriptions

### void specific_effect_logic( effect_instance: EffectInstance ) {#method-specific-effect-logic}

Applies the school lock to the target

### void on_apply_finished( effect_instance: EffectInstance ) {#method-on-apply-finished}

Called when the effect ends: takes back what it did.

### String get_effect_description() {#method-get-effect-description}

Get the effect description for tooltips

### String get_editor_description() {#method-get-editor-description}

A short text for the effect editor that says what the effect does.

