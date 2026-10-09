<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# EffectAmount

**Inherits:** [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

How much an effect deals, heals or changes: one number built from a base, a spread and any number of parts that are read when the effect runs (a stat of the user, the weapon, the health of the target, what an earlier effect of the same cast did).

## Description

`amount = base + the stat parts`, with the spread (`variance`) applied to that sum, then every other part added. The effect then applies what is its own: stacks, scaling rules and the charge of a drawn shot. Damage, healing and stat modifier effects all use this one class, so they are set up, described and extended the same way. See docs/systems/effects-and-abilities.md, section 22.

## Properties

| | | |
|---|---|---|
| `float` | [base](#prop-base) | `1.0` |
| `float` | [variance](#prop-variance) | `0.0` |
| `Array[AmountSource]` | [sources](#prop-sources) | `[]` |

## Methods

| | |
|---|---|
| `float` | [evaluate](#method-evaluate)( `effect_instance: EffectInstance, overrides: Dictionary = {}` ) |
| `AmountSource` | [add_source](#method-add-source)( `kind: AmountSource.Kind, multiplier: float = 1.0, stat_id: int = 0` ) |
| `EffectAmount` | [from_legacy](#method-from-legacy)( `p_base: float, p_stat_id: int = 0, p_stat_multiplier: float = 1.0, p_variance: float = 0.0, p_weapon_share: float = 0.0, p_health_share: float = 0.0` ) *static* |
| `bool` | [uses_cast_results](#method-uses-cast-results)() |
| `String` | [describe](#method-describe)() |
| `Array[String]` | [validate](#method-validate)() |

## Property descriptions

### float base = 1.0 {#prop-base}

The fixed part

### float variance = 0.0 {#prop-variance}

The amount is a random number within this distance of base + the stat parts (0 = exactly)

### Array[AmountSource] sources = [] {#prop-sources}

The parts that are read when the effect runs

## Method descriptions

### float evaluate( effect_instance: EffectInstance, overrides: Dictionary = &#123;&#125; ) {#method-evaluate}

The amount for an effect that runs now (before stacks, scaling rules and charge, which belong to the effect)

### AmountSource add_source( kind: AmountSource.Kind, multiplier: float = 1.0, stat_id: int = 0 ) {#method-add-source}

A part of a kind, added to the list

### EffectAmount from_legacy( p_base: float, p_stat_id: int = 0, p_stat_multiplier: float = 1.0, p_variance: float = 0.0, p_weapon_share: float = 0.0, p_health_share: float = 0.0 ) {#method-from-legacy}

The amount the old separate fields of damage and heal effects described: a base, one stat with a multiplier, a spread, a share of the weapon damage and a share of the target's health. Effects without an `amount` use this, so older effects behave as they did

### bool uses_cast_results() {#method-uses-cast-results}

Does the amount depend on what earlier effects of the cast did?

### String describe() {#method-describe}

The parts as text for a tooltip: "50 + 1.50x Attack Power ±5 + 25% weapon damage"

### Array[String] validate() {#method-validate}

*No description yet.*

