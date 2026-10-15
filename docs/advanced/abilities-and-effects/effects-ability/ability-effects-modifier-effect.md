<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# AbilityEffectsModifierEffect

**Inherits:** [Effect](/advanced/abilities-and-effects/effects-base/effect) < [DatabaseResource](/advanced/data-and-database/database-classes/database-resource) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

AbilityEffectsModifierEffect adds or removes effects from a target ability's passive_effects or on_use_effects array at runtime.

## Properties

| | | |
|---|---|---|
| `int` | [ability_id](#prop-ability-id) |  |
| `EffectAction` | [effect_action](#prop-effect-action) | `EffectAction.ADD` |
| `EffectTarget` | [effect_target](#prop-effect-target) | `EffectTarget.ON_USE` |
| `int` | [effect_id](#prop-effect-id) | `0` |

## Methods

| | |
|---|---|
| `void` | [specific_effect_logic](#method-specific-effect-logic)( `effect_instance: EffectInstance` ) |
| `void` | [modify_ability_effects](#method-modify-ability-effects)( `effect_instance: EffectInstance, mod_ability: AbilityInstance` ) |
| `void` | [store_original_effects_state](#method-store-original-effects-state)( `effect_instance: EffectInstance, mod_ability: AbilityInstance` ) |
| `void` | [apply_effects_modifications](#method-apply-effects-modifications)( `effect_instance: EffectInstance, mod_ability: AbilityInstance` ) |
| `void` | [on_apply_finished](#method-on-apply-finished)( `effect_instance: EffectInstance` ) |
| `void` | [restore_ability_effects](#method-restore-ability-effects)( `effect_instance: EffectInstance` ) |
| `String` | [get_effect_description](#method-get-effect-description)() |
| `String` | [get_editor_description](#method-get-editor-description)() |

## Enumerations

### enum EffectAction {#enum-effectaction}

The options of effect action: add, remove.

- **ADD** = `0` - Add an effect to the target ability
- **REMOVE** = `1` - Remove an effect from the target ability

### enum EffectTarget {#enum-effecttarget}

The options of effect target: on use, passive.

- **ON_USE** = `0` - Modify the on-use effects array (copy-on-write, active abilities only)
- **PASSIVE** = `1` - Modify the passive effects array (not supported at runtime - will warn)

## Property descriptions

*Target Ability*

### int ability_id {#prop-ability-id}

The ID of the ability to modify

*Effect Management*

### EffectAction effect_action = EffectAction.ADD {#prop-effect-action}

Whether the effect adds an effect to the ability or removes one.

### EffectTarget effect_target = EffectTarget.ON_USE {#prop-effect-target}

Which effect array on the ability to modify

### int effect_id = 0 {#prop-effect-id}

Effect ID to add or remove

## Method descriptions

### void specific_effect_logic( effect_instance: EffectInstance ) {#method-specific-effect-logic}

What the effect does to its target when it is applied.

### void modify_ability_effects( effect_instance: EffectInstance, mod_ability: AbilityInstance ) {#method-modify-ability-effects}

Changes the effects of an ability, remembering what they were.

### void store_original_effects_state( effect_instance: EffectInstance, mod_ability: AbilityInstance ) {#method-store-original-effects-state}

Remembers the effects of the ability before the change, to give them back.

### void apply_effects_modifications( effect_instance: EffectInstance, mod_ability: AbilityInstance ) {#method-apply-effects-modifications}

Adds or removes the effect on the ability.

### void on_apply_finished( effect_instance: EffectInstance ) {#method-on-apply-finished}

Called when the effect ends: takes back what it did.

### void restore_ability_effects( effect_instance: EffectInstance ) {#method-restore-ability-effects}

Gives the ability its original effects back.

### String get_effect_description() {#method-get-effect-description}

The text of the effect for tooltips, with its values filled in.

### String get_editor_description() {#method-get-editor-description}

A short text for the effect editor that says what the effect does.

