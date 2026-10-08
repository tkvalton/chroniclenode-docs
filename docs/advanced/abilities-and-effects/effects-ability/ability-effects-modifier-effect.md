<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# AbilityEffectsModifierEffect

**Inherits:** [Effect](/advanced/abilities-and-effects/effects-base/effect) < [DatabaseResource](/advanced/data-and-database/database-classes/database-resource) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

AbilityEffectsModifierEffect adds or removes effects from a target ability's

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

- **ADD** = `0` - Add an effect to the target ability
- **REMOVE** = `1` - Remove an effect from the target ability

### enum EffectTarget {#enum-effecttarget}

- **ON_USE** = `0` - Modify the on-use effects array (copy-on-write, active abilities only)
- **PASSIVE** = `1` - Modify the passive effects array (not supported at runtime - will warn)

## Property descriptions

*Target Ability*

### int ability_id {#prop-ability-id}

The ID of the ability to modify

*Effect Management*

### EffectAction effect_action = EffectAction.ADD {#prop-effect-action}

*No description yet.*

### EffectTarget effect_target = EffectTarget.ON_USE {#prop-effect-target}

Which effect array on the ability to modify

### int effect_id = 0 {#prop-effect-id}

Effect ID to add or remove

## Method descriptions

### void specific_effect_logic( effect_instance: EffectInstance ) {#method-specific-effect-logic}

Applies the specific logic for this effect (should be overridden in child classes) *(from [Effect](/advanced/abilities-and-effects/effects-base/effect))*

### void modify_ability_effects( effect_instance: EffectInstance, mod_ability: AbilityInstance ) {#method-modify-ability-effects}

*No description yet.*

### void store_original_effects_state( effect_instance: EffectInstance, mod_ability: AbilityInstance ) {#method-store-original-effects-state}

*No description yet.*

### void apply_effects_modifications( effect_instance: EffectInstance, mod_ability: AbilityInstance ) {#method-apply-effects-modifications}

*No description yet.*

### void on_apply_finished( effect_instance: EffectInstance ) {#method-on-apply-finished}

Handles the finishing of the effect, including cleanup and VFX/SFX (override in child classes if needed, call .super for cleanup) *(from [Effect](/advanced/abilities-and-effects/effects-base/effect))*

### void restore_ability_effects( effect_instance: EffectInstance ) {#method-restore-ability-effects}

*No description yet.*

### String get_effect_description() {#method-get-effect-description}

Get the effect description (to be overridden by child classes) *(from [Effect](/advanced/abilities-and-effects/effects-base/effect))*

### String get_editor_description() {#method-get-editor-description}

*Overrides this function of [Effect](/advanced/abilities-and-effects/effects-base/effect).*

