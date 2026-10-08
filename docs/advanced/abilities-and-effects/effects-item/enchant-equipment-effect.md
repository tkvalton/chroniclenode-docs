<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# EnchantEquipmentEffect

**Inherits:** [Effect](/advanced/abilities-and-effects/effects-base/effect) < [DatabaseResource](/advanced/data-and-database/database-classes/database-resource) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Applies an enchant effect to equipment in a specific slot

## Properties

| | | |
|---|---|---|
| `int` | [enchant_effect_id](#prop-enchant-effect-id) |  |
| `int` | [equipment_slot_id](#prop-equipment-slot-id) |  |
| `float` | [enchant_duration](#prop-enchant-duration) | `-1.0` |
| `bool` | [override_effect_duration](#prop-override-effect-duration) | `true` |
| `bool` | [enchant_all_slots](#prop-enchant-all-slots) | `false` |

## Methods

| | |
|---|---|
| `void` | [specific_effect_logic](#method-specific-effect-logic)( `effect_instance: EffectInstance` ) |
| `String` | [get_effect_description](#method-get-effect-description)() |
| `String` | [get_editor_description](#method-get-editor-description)() |

## Property descriptions

### int enchant_effect_id {#prop-enchant-effect-id}

The effect to apply as an enchantment

### int equipment_slot_id {#prop-equipment-slot-id}

Which equipment slot to enchant

### float enchant_duration = -1.0 {#prop-enchant-duration}

Duration override for enchantment (-1 = permanent, &gt;0 = temporary in seconds)

### bool override_effect_duration = true {#prop-override-effect-duration}

Whether to override the effect's own duration

### bool enchant_all_slots = false {#prop-enchant-all-slots}

If true and slot supports multiple items, enchant all equipped items in that slot

## Method descriptions

### void specific_effect_logic( effect_instance: EffectInstance ) {#method-specific-effect-logic}

Applies an enchantment to the target's equipped item in the specified slot

### String get_effect_description() {#method-get-effect-description}

Get the effect description (to be overridden by child classes) *(from [Effect](/advanced/abilities-and-effects/effects-base/effect))*

### String get_editor_description() {#method-get-editor-description}

*Overrides this function of [Effect](/advanced/abilities-and-effects/effects-base/effect).*

