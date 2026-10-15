<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# EncumbranceTier

**Inherits:** [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

One step of encumbrance: from this share of the carry capacity, an effect is on the character that carries it (slowed, cannot sprint, cannot jump ...).

## Description

The effect is made by the developer in the Effects editor. Only the highest step the character has reached is on at a time. See docs/systems/inventory-styles.md, section 4.

## Properties

| | | |
|---|---|---|
| `String` | [display_name](#prop-display-name) | `"Burdened"` |
| `float` | [from_percent](#prop-from-percent) | `100.0` |
| `int` | [effect_id](#prop-effect-id) | `0` |

## Methods

| | |
|---|---|
| `Array[Dictionary]` | [validate](#method-validate)() |

## Property descriptions

### String display_name = "Burdened" {#prop-display-name}

The name of the step ("Burdened", "Overloaded"), for the weight bar

### float from_percent = 100.0 {#prop-from-percent}

From this percent of the carry capacity (100 = at the capacity, 150 = half as much again) the step is on

### int effect_id = 0 {#prop-effect-id}

The effect that is on the character while the step is on (an Effect of the Effects editor)

## Method descriptions

### Array[Dictionary] validate() {#method-validate}

Checks the settings. Gives the problems found (empty when it is fine).

