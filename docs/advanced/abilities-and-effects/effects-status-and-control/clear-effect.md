<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ClearEffect

**Inherits:** [Effect](/advanced/abilities-and-effects/effects-base/effect) < `DatabaseResource` < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

ClearEffect removes other effects from the target entity

## Properties

| | | |
|---|---|---|
| `int` | [school_to_clear](#prop-school-to-clear) | `0` |
| `AuraType` | [effect_classification](#prop-effect-classification) | `AuraType.BUFF` |
| `int` | [effect_id](#prop-effect-id) | `0` |
| `int` | [amount_of_effects](#prop-amount-of-effects) | `0` |

## Methods

| | |
|---|---|
| `void` | [specific_effect_logic](#method-specific-effect-logic)( `effect_instance: EffectInstance` ) |
| `String` | [get_effect_description](#method-get-effect-description)() |
| `String` | [get_editor_description](#method-get-editor-description)() |
| `bool` | [is_one_off_application](#method-is-one-off-application)() |

## Property descriptions

### int school_to_clear = 0 {#prop-school-to-clear}

School type ID to clear (0 = all schools)

### AuraType effect_classification = AuraType.BUFF {#prop-effect-classification}

Classification to clear

### int effect_id = 0 {#prop-effect-id}

Specific effect ID to clear (0 = use classification/school filters)

### int amount_of_effects = 0 {#prop-amount-of-effects}

Max effects to remove (0 = unlimited)

## Method descriptions

### void specific_effect_logic( effect_instance: EffectInstance ) {#method-specific-effect-logic}

*No description yet.*

### String get_effect_description() {#method-get-effect-description}

*No description yet.*

### String get_editor_description() {#method-get-editor-description}

*No description yet.*

### bool is_one_off_application() {#method-is-one-off-application}

What this effect does it does once, when it is applied: a loaded save does not do it again

