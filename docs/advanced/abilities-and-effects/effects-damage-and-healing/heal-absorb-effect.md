<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# HealAbsorbEffect

**Inherits:** [Effect](/advanced/abilities-and-effects/effects-base/effect) < [DatabaseResource](/advanced/data-and-database/database-classes/database-resource) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

HealAbsorbEffect puts a "heal absorb" on its target: the next `absorb_amount` of healing the target receives is soaked up and does not reach its health. When the amount is used up, or the duration ends, the effect ends.

## Description

It is the opposite of a shield (a shield soaks damage). Use it for a curse that stops a healer: "the next 500 healing on this target is lost". The soaked amount is shown in the combat log, and healing that was soaked makes no overheal. The absorb is kept by the target's StatsComponent (heal_absorbs); several absorbs on one target soak in the order they were applied.

## Properties

| | | |
|---|---|---|
| `float` | [absorb_amount](#prop-absorb-amount) | `100.0` |

## Methods

| | |
|---|---|
| `void` | [specific_effect_logic](#method-specific-effect-logic)( `effect_instance: EffectInstance` ) |
| `void` | [on_apply_finished](#method-on-apply-finished)( `effect_instance: EffectInstance` ) |
| `String` | [get_effect_description](#method-get-effect-description)() |
| `String` | [get_editor_description](#method-get-editor-description)() |

## Property descriptions

*Heal Absorb*

### float absorb_amount = 100.0 {#prop-absorb-amount}

How much healing the effect soaks up before it is used up

## Method descriptions

### void specific_effect_logic( effect_instance: EffectInstance ) {#method-specific-effect-logic}

Applies the specific logic for this effect (should be overridden in child classes) *(from [Effect](/advanced/abilities-and-effects/effects-base/effect))*

### void on_apply_finished( effect_instance: EffectInstance ) {#method-on-apply-finished}

Handles the finishing of the effect, including cleanup and VFX/SFX (override in child classes if needed, call .super for cleanup) *(from [Effect](/advanced/abilities-and-effects/effects-base/effect))*

### String get_effect_description() {#method-get-effect-description}

Get the effect description (to be overridden by child classes) *(from [Effect](/advanced/abilities-and-effects/effects-base/effect))*

### String get_editor_description() {#method-get-editor-description}

*Overrides this function of [Effect](/advanced/abilities-and-effects/effects-base/effect).*

