<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# HealReflectEffect

**Inherits:** [Effect](/advanced/abilities-and-effects/effects-base/effect) < [DatabaseResource](/advanced/data-and-database/database-classes/database-resource) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

HealReflectEffect passes a share of the healing its bearer receives on to someone else: the caster of the effect, or whoever healed the bearer.

## Properties

| | | |
|---|---|---|
| `float` | [percentage_of_healing](#prop-percentage-of-healing) | `20.0` |
| `Recipient` | [recipient](#prop-recipient) | `Recipient.ORIGINATOR` |
| `int` | [maximum_healing_per_reflect](#prop-maximum-healing-per-reflect) | `0` |
| `int` | [total_healing_to_reflect](#prop-total-healing-to-reflect) | `0` |
| `int` | [max_reflect_chain](#prop-max-reflect-chain) | `-1` |

## Methods

| | |
|---|---|
| `void` | [specific_effect_logic](#method-specific-effect-logic)( `effect_instance: EffectInstance` ) |
| `void` | [on_apply_finished](#method-on-apply-finished)( `effect_instance: EffectInstance` ) |
| `String` | [get_effect_description](#method-get-effect-description)() |
| `String` | [get_editor_description](#method-get-editor-description)() |

## Enumerations

### enum Recipient {#enum-recipient}

- **ORIGINATOR** = `0` - The entity that applied this effect (the priest who cast Vampiric Embrace)
- **HEALER** = `1` - Whoever healed the bearer

## Property descriptions

*Heal Reflect*

### float percentage_of_healing = 20.0 {#prop-percentage-of-healing}

The percent of the healing received that is passed on

### Recipient recipient = Recipient.ORIGINATOR {#prop-recipient}

Who receives the share

### int maximum_healing_per_reflect = 0 {#prop-maximum-healing-per-reflect}

The most that is passed on from one heal (0 = no limit)

### int total_healing_to_reflect = 0 {#prop-total-healing-to-reflect}

The most that is passed on in all, over the life of the effect (0 = no limit). The effect ends when it is reached

### int max_reflect_chain = -1 {#prop-max-reflect-chain}

How many reactions deep a heal may be and still be reflected. 1: a normal heal is reflected, a reflection is never reflected again. -1 = the project default (GameplayConfig, Damage Results)

## Method descriptions

### void specific_effect_logic( effect_instance: EffectInstance ) {#method-specific-effect-logic}

Applies the specific logic for this effect (should be overridden in child classes) *(from [Effect](/advanced/abilities-and-effects/effects-base/effect))*

### void on_apply_finished( effect_instance: EffectInstance ) {#method-on-apply-finished}

Handles the finishing of the effect, including cleanup and VFX/SFX (override in child classes if needed, call .super for cleanup) *(from [Effect](/advanced/abilities-and-effects/effects-base/effect))*

### String get_effect_description() {#method-get-effect-description}

Get the effect description (to be overridden by child classes) *(from [Effect](/advanced/abilities-and-effects/effects-base/effect))*

### String get_editor_description() {#method-get-editor-description}

*Overrides this function of [Effect](/advanced/abilities-and-effects/effects-base/effect).*

