<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ActionBarSlotEffect

**Inherits:** [Effect](/advanced/abilities-and-effects/effects-base/effect) < [DatabaseResource](/advanced/data-and-database/database-classes/database-resource) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

While it lasts, puts an ability on a slot of the action bar of the target, or empties the slot (a bow that puts its aim ability on slot 2 and clears slot 1). What the player had on the slot comes back when the effect ends. A slot an effect covers cannot be changed by the player.

## Properties

| | | |
|---|---|---|
| `int` | [slot_number](#prop-slot-number) | `1` |
| `int` | [ability_id](#prop-ability-id) | `0` |
| `bool` | [grant_ability](#prop-grant-ability) | `true` |

## Methods

| | |
|---|---|
| `void` | [specific_effect_logic](#method-specific-effect-logic)( `effect_instance: EffectInstance` ) |
| `void` | [on_apply_finished](#method-on-apply-finished)( `effect_instance: EffectInstance` ) |
| `String` | [get_effect_description](#method-get-effect-description)() |
| `String` | [get_editor_description](#method-get-editor-description)() |

## Property descriptions

*Action Bar Slot*

### int slot_number = 1 {#prop-slot-number}

The slot (1 is the first)

### int ability_id = 0 {#prop-ability-id}

The ability that takes the slot. 0 = the slot is emptied and cannot be used while the effect lasts

### bool grant_ability = true {#prop-grant-ability}

The target is given the ability while the effect lasts when it does not know it (the ability goes away with the effect)

## Method descriptions

### void specific_effect_logic( effect_instance: EffectInstance ) {#method-specific-effect-logic}

Applies the specific logic for this effect (should be overridden in child classes) *(from [Effect](/advanced/abilities-and-effects/effects-base/effect))*

### void on_apply_finished( effect_instance: EffectInstance ) {#method-on-apply-finished}

Handles the finishing of the effect, including cleanup and VFX/SFX (override in child classes if needed, call .super for cleanup) *(from [Effect](/advanced/abilities-and-effects/effects-base/effect))*

### String get_effect_description() {#method-get-effect-description}

Get the effect description (to be overridden by child classes) *(from [Effect](/advanced/abilities-and-effects/effects-base/effect))*

### String get_editor_description() {#method-get-editor-description}

*Overrides this function of [Effect](/advanced/abilities-and-effects/effects-base/effect).*

