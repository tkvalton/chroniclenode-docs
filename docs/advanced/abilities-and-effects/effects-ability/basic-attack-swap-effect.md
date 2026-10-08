<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# BasicAttackSwapEffect

**Inherits:** [Effect](/advanced/abilities-and-effects/effects-base/effect) < `DatabaseResource` < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

BasicAttackSwapEffect replaces the target entity's basic attack with a new one

## Properties

| | | |
|---|---|---|
| `int` | [ability_id](#prop-ability-id) | `0` |

## Methods

| | |
|---|---|
| `void` | [specific_effect_logic](#method-specific-effect-logic)( `effect_instance: EffectInstance` ) |
| `void` | [on_apply_finished](#method-on-apply-finished)( `effect_instance: EffectInstance` ) |
| `String` | [get_effect_description](#method-get-effect-description)() |
| `bool` | [can_swap_basic_attack](#method-can-swap-basic-attack)( `target_entity: Entity` ) |
| `String` | [get_editor_description](#method-get-editor-description)() |

## Property descriptions

*Basic Attack Settings*

### int ability_id = 0 {#prop-ability-id}

ID of the basic attack to replace with (uses DatabaseAbilities)

## Method descriptions

### void specific_effect_logic( effect_instance: EffectInstance ) {#method-specific-effect-logic}

Applies the specific logic for this effect, swapping basic attacks

### void on_apply_finished( effect_instance: EffectInstance ) {#method-on-apply-finished}

Handles the finishing of the effect, restoring original basic attack

### String get_effect_description() {#method-get-effect-description}

Get the effect description for tooltips

### bool can_swap_basic_attack( target_entity: Entity ) {#method-can-swap-basic-attack}

Check if the basic attack can be swapped

### String get_editor_description() {#method-get-editor-description}

*No description yet.*

