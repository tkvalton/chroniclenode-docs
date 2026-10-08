<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# AbilityCooldownEffect

**Inherits:** [Effect](/advanced/abilities-and-effects/effects-base/effect) < [DatabaseResource](/advanced/data-and-database/database-classes/database-resource) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Modifies cooldown properties on a specific ability. Cooldown duration modifier reverts when the effect ends. Active timer reduction and cooldown reset are permanent (never reverted).

## Properties

| | | |
|---|---|---|
| `int` | [ability_id](#prop-ability-id) | `0` |
| `float` | [cooldown_duration_mod](#prop-cooldown-duration-mod) | `0.0` |
| `float` | [cooldown_current_reduction](#prop-cooldown-current-reduction) | `0.0` |
| `bool` | [cooldown_reset](#prop-cooldown-reset) | `false` |

## Methods

| | |
|---|---|
| `void` | [specific_effect_logic](#method-specific-effect-logic)( `effect_instance: EffectInstance` ) |
| `void` | [on_apply_finished](#method-on-apply-finished)( `effect_instance: EffectInstance` ) |
| `String` | [get_effect_description](#method-get-effect-description)() |
| `String` | [get_editor_description](#method-get-editor-description)() |

## Property descriptions

*Target Ability*

### int ability_id = 0 {#prop-ability-id}

The ability to modify

*Cooldown Duration*

### float cooldown_duration_mod = 0.0 {#prop-cooldown-duration-mod}

Modify the ability's cooldown duration in seconds (+/-)

*Active Timer*

### float cooldown_current_reduction = 0.0 {#prop-cooldown-current-reduction}

Immediately reduce the active cooldown timer by this many seconds (positive = reduce)

### bool cooldown_reset = false {#prop-cooldown-reset}

Immediately reset the active cooldown timer and set ability to READY

## Method descriptions

### void specific_effect_logic( effect_instance: EffectInstance ) {#method-specific-effect-logic}

Applies the specific logic for this effect (should be overridden in child classes) *(from [Effect](/advanced/abilities-and-effects/effects-base/effect))*

### void on_apply_finished( effect_instance: EffectInstance ) {#method-on-apply-finished}

Handles the finishing of the effect, including cleanup and VFX/SFX (override in child classes if needed, call .super for cleanup) *(from [Effect](/advanced/abilities-and-effects/effects-base/effect))*

### String get_effect_description() {#method-get-effect-description}

Get the effect description (to be overridden by child classes) *(from [Effect](/advanced/abilities-and-effects/effects-base/effect))*

### String get_editor_description() {#method-get-editor-description}

*Overrides this function of [Effect](/advanced/abilities-and-effects/effects-base/effect).*

