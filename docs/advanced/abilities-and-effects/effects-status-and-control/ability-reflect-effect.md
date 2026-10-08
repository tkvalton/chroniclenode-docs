<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# AbilityReflectEffect

**Inherits:** [Effect](/advanced/abilities-and-effects/effects-base/effect) < [DatabaseResource](/advanced/data-and-database/database-classes/database-resource) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

A reflective ward: abilities that other entities target at the holder can be sent back at their caster.

## Description

A reflective ward: abilities that other entities target at the holder can be sent back at their caster.

It is an interception, not a reaction: when an ability is about to apply its effects to the holder, `AbilityInstance.apply_ability_effects` asks the holder's active reflect effects (`try_reflect`); a reflected ability applies all its effects to its own caster instead. Only abilities aimed at the holder as a target are reflected (enemy, ally and any-entity targeting): area and point abilities, abilities the holder casts itself and abilities from allies (when *Only Hostile* is on) pass through. See docs/systems/effects-and-abilities.md, section 10.

## Properties

| | | |
|---|---|---|
| `float` | [reflect_chance](#prop-reflect-chance) | `100.0` |
| `int` | [charges](#prop-charges) | `1` |
| `Array[int]` | [ability_schools](#prop-ability-schools) | `[]` |
| `bool` | [only_hostile](#prop-only-hostile) | `true` |

## Methods

| | |
|---|---|
| `void` | [specific_effect_logic](#method-specific-effect-logic)( `effect_instance: EffectInstance` ) |
| `bool` | [try_reflect](#method-try-reflect)( `effect_instance: EffectInstance, ability: AbilityInstance` ) |
| `String` | [get_effect_description](#method-get-effect-description)() |
| `String` | [get_editor_description](#method-get-editor-description)() |

## Property descriptions

*Reflect*

### float reflect_chance = 100.0 {#prop-reflect-chance}

Chance (percent) that a qualifying ability is reflected

### int charges = 1 {#prop-charges}

How many abilities the ward reflects before it breaks (0 = until it ends)

### Array[int] ability_schools = [] {#prop-ability-schools}

Only abilities of these schools are reflected (none ticked = all schools)

### bool only_hostile = true {#prop-only-hostile}

Reflect only abilities cast by hostile entities (a friendly heal is not sent back)

## Method descriptions

### void specific_effect_logic( effect_instance: EffectInstance ) {#method-specific-effect-logic}

Applies the specific logic for this effect (should be overridden in child classes) *(from [Effect](/advanced/abilities-and-effects/effects-base/effect))*

### bool try_reflect( effect_instance: EffectInstance, ability: AbilityInstance ) {#method-try-reflect}

Does this ward reflect this ability? Rolls the chance and uses a charge (the ward ends with the last one)

### String get_effect_description() {#method-get-effect-description}

Get the effect description (to be overridden by child classes) *(from [Effect](/advanced/abilities-and-effects/effects-base/effect))*

### String get_editor_description() {#method-get-editor-description}

*Overrides this function of [Effect](/advanced/abilities-and-effects/effects-base/effect).*

