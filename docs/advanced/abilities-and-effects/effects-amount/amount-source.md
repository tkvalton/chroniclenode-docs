<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# AmountSource

**Inherits:** [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

One part of an EffectAmount: a number that is read from the situation when the effect runs and added to the amount. A stat of the user ("1.5 x Attack Power"), the weapon in hand, the health of the target, or what an earlier effect of the same cast did.

## Properties

| | | |
|---|---|---|
| `Kind` | [kind](#prop-kind) | `Kind.STAT` |
| `int` | [stat_id](#prop-stat-id) | `0` |
| `CalculationFormula` | [formula](#prop-formula) |  |
| `DiminishingReturns` | [returns](#prop-returns) |  |
| `float` | [multiplier](#prop-multiplier) | `1.0` |
| `float` | [maximum](#prop-maximum) | `0.0` |
| `int` | [source_effect_id](#prop-source-effect-id) | `0` |

## Methods

| | |
|---|---|
| `float` | [evaluate](#method-evaluate)( `effect_instance: EffectInstance, overrides: Dictionary = {}` ) |
| `bool` | [is_stat_part](#method-is-stat-part)() |
| `String` | [describe](#method-describe)() |
| `Array[String]` | [validate](#method-validate)() |

## Enumerations

### enum Kind {#enum-kind}

- **STAT** = `0` - A stat of the user: points x multiplier, or through a formula
- **WEAPON_DAMAGE** = `1` - The damage of the weapon the user holds x multiplier (1 = 100 %)
- **TARGET_MAX_HEALTH** = `2` - The maximum health of the target x multiplier
- **TARGET_HEALTH** = `3` - The current health of the target x multiplier
- **USER_MAX_HEALTH** = `4` - The maximum health of the user x multiplier
- **CAST_DAMAGE** = `5` - The damage the effects of this cast have dealt so far x multiplier
- **CAST_HEALING** = `6` - The healing the effects of this cast have done so far x multiplier
- **CAST_ABSORBED** = `7` - The damage the shields of the targets absorbed from this cast so far x multiplier

## Property descriptions

### Kind kind = Kind.STAT {#prop-kind}

What is measured

### int stat_id = 0 {#prop-stat-id}

The stat of the user (stat kind)

### CalculationFormula formula {#prop-formula}

Points of the stat -&gt; amount (stat kind). Empty = `multiplier` per point. A formula reads the levels of the user and the target too

### DiminishingReturns returns {#prop-returns}

Optional diminishing returns on the points, before the formula

### float multiplier = 1.0 {#prop-multiplier}

Per point of the stat (no formula), or the share of the measured value (1 = 100 %, 0.5 = half)

### float maximum = 0.0 {#prop-maximum}

The most this part can add (0 = no limit)

### int source_effect_id = 0 {#prop-source-effect-id}

Only the effect with this id counts (cast kinds). 0 = every effect of the cast

## Method descriptions

### float evaluate( effect_instance: EffectInstance, overrides: Dictionary = {} ) {#method-evaluate}

The value of this part for an effect that runs now. `overrides` can name a number the effect knows better: "target_max_health" (a heal limited to one pool uses the maximum of that pool)

### bool is_stat_part() {#method-is-stat-part}

Is this a stat of the user? (The base and the stat parts are what the variance applies to)

### String describe() {#method-describe}

A short readable text: "1.50x Attack Power", "50% of the damage dealt so far"

### Array[String] validate() {#method-validate}

*No description yet.*

