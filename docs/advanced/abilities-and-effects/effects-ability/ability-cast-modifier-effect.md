<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# AbilityCastModifierEffect

**Inherits:** [Effect](/advanced/abilities-and-effects/effects-base/effect) < [DatabaseResource](/advanced/data-and-database/database-classes/database-resource) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Modifies cast or channel timing properties on a specific ability via runtime overrides. Works by writing to UseStrategyInstance.runtime_property_overrides — no strategy swap needed. Reverts all overrides cleanly when the effect ends.

## Description

Common uses:

- Instant cast: set duration_multiplier = 0.0
- Haste buff: set duration_multiplier = 0.5 (half cast time)
- Uninterruptible cast: set force_uninterruptable = true
- Mobile cast: set force_mobile = true
- Extra interrupt shields: set interrupt_shield_add &gt; 0

## Properties

| | | |
|---|---|---|
| `int` | [ability_id](#prop-ability-id) | `0` |
| `float` | [duration_multiplier](#prop-duration-multiplier) | `-1.0` |
| `float` | [duration_flat_mod](#prop-duration-flat-mod) | `0.0` |
| `bool` | [force_uninterruptable](#prop-force-uninterruptable) | `false` |
| `bool` | [force_mobile](#prop-force-mobile) | `false` |
| `int` | [interrupt_shield_add](#prop-interrupt-shield-add) | `0` |

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

*Duration*

### float duration_multiplier = -1.0 {#prop-duration-multiplier}

Multiplier applied to cast_duration or channel_duration (0.0 = instant, 0.5 = half time, 1.0 = no change) Set to -1.0 to leave duration unchanged

### float duration_flat_mod = 0.0 {#prop-duration-flat-mod}

Flat modifier added to cast/channel duration in seconds after multiplier (negative = shorter)

*Behavior Overrides*

### bool force_uninterruptable = false {#prop-force-uninterruptable}

Force the cast/channel to be uninterruptable (overrides definition setting)

### bool force_mobile = false {#prop-force-mobile}

Force the caster to be mobile during cast/channel (overrides definition setting)

### int interrupt_shield_add = 0 {#prop-interrupt-shield-add}

Additional interrupt shields to add on top of the definition value (0 = no change)

## Method descriptions

### void specific_effect_logic( effect_instance: EffectInstance ) {#method-specific-effect-logic}

Applies the specific logic for this effect (should be overridden in child classes) *(from [Effect](/advanced/abilities-and-effects/effects-base/effect))*

### void on_apply_finished( effect_instance: EffectInstance ) {#method-on-apply-finished}

Handles the finishing of the effect, including cleanup and VFX/SFX (override in child classes if needed, call .super for cleanup) *(from [Effect](/advanced/abilities-and-effects/effects-base/effect))*

### String get_effect_description() {#method-get-effect-description}

Get the effect description (to be overridden by child classes) *(from [Effect](/advanced/abilities-and-effects/effects-base/effect))*

### String get_editor_description() {#method-get-editor-description}

*Overrides this function of [Effect](/advanced/abilities-and-effects/effects-base/effect).*

