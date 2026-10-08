<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# AbilityEffect

**Inherits:** [Effect](/advanced/abilities-and-effects/effects-base/effect) < `DatabaseResource` < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

AbilityEffect adds or removes abilities from the target entity's ability container

## Properties

| | | |
|---|---|---|
| `AbilityAction` | [ability_action](#prop-ability-action) | `AbilityAction.ADD` |
| `int` | [ability_id](#prop-ability-id) | `0` |

## Methods

| | |
|---|---|
| `void` | [specific_effect_logic](#method-specific-effect-logic)( `effect_instance: EffectInstance` ) |
| `void` | [on_apply_finished](#method-on-apply-finished)( `effect_instance: EffectInstance` ) |
| `String` | [get_effect_description](#method-get-effect-description)() |
| `bool` | [can_modify_ability](#method-can-modify-ability)( `target_entity: Entity` ) |
| `Dictionary` | [get_ability_modification_details](#method-get-ability-modification-details)( `effect_instance: EffectInstance` ) |
| `String` | [get_editor_description](#method-get-editor-description)() |

## Enumerations

### enum AbilityAction {#enum-abilityaction}

- **ADD** = `0`

## Property descriptions

*Ability Settings*

### AbilityAction ability_action = AbilityAction.ADD {#prop-ability-action}

*No description yet.*

### int ability_id = 0 {#prop-ability-id}

ID of the ability to add/remove (uses DatabaseAbilities)

## Method descriptions

### void specific_effect_logic( effect_instance: EffectInstance ) {#method-specific-effect-logic}

Applies the specific logic for this effect, adding or removing abilities

### void on_apply_finished( effect_instance: EffectInstance ) {#method-on-apply-finished}

Handles the finishing of the effect, reversing the ability change

### String get_effect_description() {#method-get-effect-description}

Get the effect description for tooltips

### bool can_modify_ability( target_entity: Entity ) {#method-can-modify-ability}

Check if the ability can be added/removed (useful for ability validation)

### Dictionary get_ability_modification_details( effect_instance: EffectInstance ) {#method-get-ability-modification-details}

Get ability modification details for debugging/UI

### String get_editor_description() {#method-get-editor-description}

*No description yet.*

