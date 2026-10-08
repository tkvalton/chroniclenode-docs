<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# PetCommandAbilityEffect

**Inherits:** [Effect](/advanced/abilities-and-effects/effects-base/effect) < [DatabaseResource](/advanced/data-and-database/database-classes/database-resource) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

PetCommandAbilityEffect is a specialized effect that commands a specific pet

## Properties

| | | |
|---|---|---|
| `int` | [ability_id](#prop-ability-id) |  |
| `int` | [pet_id](#prop-pet-id) |  |

## Methods

| | |
|---|---|
| `void` | [specific_effect_logic](#method-specific-effect-logic)( `effect_instance: EffectInstance` ) |
| `String` | [get_editor_description](#method-get-editor-description)() |
| `bool` | [is_one_off_application](#method-is-one-off-application)() |

## Property descriptions

### int ability_id {#prop-ability-id}

The ability the pet will be called to use

### int pet_id {#prop-pet-id}

id of the pet to call ability use

## Method descriptions

### void specific_effect_logic( effect_instance: EffectInstance ) {#method-specific-effect-logic}

Applies the specific logic for this effect (should be overridden in child classes) *(from [Effect](/advanced/abilities-and-effects/effects-base/effect))*

### String get_editor_description() {#method-get-editor-description}

*Overrides this function of [Effect](/advanced/abilities-and-effects/effects-base/effect).*

### bool is_one_off_application() {#method-is-one-off-application}

What this effect does it does once, when it is applied: a loaded save does not do it again

