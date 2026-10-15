<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# AbilityMorphEffect

**Inherits:** [Effect](/advanced/abilities-and-effects/effects-base/effect) < [DatabaseResource](/advanced/data-and-database/database-classes/database-resource) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Temporarily replaces an AbilityInstance's definition with another, morphing the ability in-place so the slot, UI, and entity references are preserved. The instance identity never changes — only the definition underneath it does.

## Properties

| | | |
|---|---|---|
| `int` | [source_ability_id](#prop-source-ability-id) | `0` |
| `int` | [replacement_ability_id](#prop-replacement-ability-id) | `0` |

## Methods

| | |
|---|---|
| `void` | [specific_effect_logic](#method-specific-effect-logic)( `effect_instance: EffectInstance` ) |
| `void` | [on_apply_finished](#method-on-apply-finished)( `effect_instance: EffectInstance` ) |
| `String` | [get_effect_description](#method-get-effect-description)() |
| `String` | [get_editor_description](#method-get-editor-description)() |

## Property descriptions

*Morph Settings*

### int source_ability_id = 0 {#prop-source-ability-id}

The ability slot to morph, identified by its ability ID

### int replacement_ability_id = 0 {#prop-replacement-ability-id}

The definition to morph it into

## Method descriptions

### void specific_effect_logic( effect_instance: EffectInstance ) {#method-specific-effect-logic}

What the effect does to its target when it is applied.

### void on_apply_finished( effect_instance: EffectInstance ) {#method-on-apply-finished}

Called when the effect ends: takes back what it did.

### String get_effect_description() {#method-get-effect-description}

The text of the effect for tooltips, with its values filled in.

### String get_editor_description() {#method-get-editor-description}

A short text for the effect editor that says what the effect does.

