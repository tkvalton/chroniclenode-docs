<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# DeathCurrencyLoss

**Inherits:** [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

One rule of the money a player loses when dying (Gameplay Config &gt; Combat &gt; Death &amp; Revival): which currency, and how much of it goes. The rules of the config are applied one after the other.

## Properties

| | | |
|---|---|---|
| `int` | [currency_id](#prop-currency-id) | `0` |
| `Mode` | [mode](#prop-mode) | `Mode.PERCENT` |
| `float` | [amount](#prop-amount) | `10.0` |
| `bool` | [drop_on_ground](#prop-drop-on-ground) | `false` |

## Methods

| | |
|---|---|
| `int` | [lost_from](#method-lost-from)( `held: int` ) |
| `String` | [describe](#method-describe)() |
| `Array[String]` | [validate](#method-validate)() |

## Enumerations

### enum Mode {#enum-mode}

How the amount is worked out: a percentage of what the player holds, a fixed amount, or what the player is left with.

- **PERCENT** = `0` - Loses this percentage of what it holds (10 = a tenth)
- **LOSE_AMOUNT** = `1` - Loses this amount (never more than it holds)
- **SET_TO** = `2` - Is left with this amount: what is above it is lost (a player with less keeps what it has: it never gains)

## Property descriptions

### int currency_id = 0 {#prop-currency-id}

The currency this rule is about (0 = every currency the player holds)

### Mode mode = Mode.PERCENT {#prop-mode}

How the amount is worked out

### float amount = 10.0 {#prop-amount}

The percentage (Percent), the amount lost (Lose amount) or the amount that is kept (Set to)

### bool drop_on_ground = false {#prop-drop-on-ground}

The money that is lost lies on the ground around the body as a pile of coins (needs dropped items), instead of being gone

## Method descriptions

### int lost_from( held: int ) {#method-lost-from}

How much of a held amount this rule takes away

### String describe() {#method-describe}

A short text for the editor: "10 % of Gold", "50 Gold", "everything above 100 of every currency"

### Array[String] validate() {#method-validate}

Problems with the rule, as readable messages (empty = fine)

