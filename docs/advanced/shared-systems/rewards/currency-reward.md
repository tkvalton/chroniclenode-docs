<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# CurrencyReward

**Inherits:** [Reward](/advanced/shared-systems/rewards/reward) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Grants currency to the player's inventory

## Properties

| | | |
|---|---|---|
| `int` | [currency_id](#prop-currency-id) |  |
| `int` | [amount](#prop-amount) | `100` |

## Methods

| | |
|---|---|
| `Dictionary` | [apply_to_player](#method-apply-to-player)( `player: Player` ) |
| `bool` | [unapply_from_player](#method-unapply-from-player)( `player: Player, tracking_data: Dictionary` ) |
| `bool` | [supports_unapply](#method-supports-unapply)() |
| `String` | [get_summary](#method-get-summary)() |
| `void` | [set_currency_reward](#method-set-currency-reward)( `currency_def: int, reward_amount: int` ) |
| `Array[Dictionary]` | [validate](#method-validate)() |

## Property descriptions

### int currency_id {#prop-currency-id}

The currency to grant

### int amount = 100 {#prop-amount}

How much of the currency to grant (above 0)

## Method descriptions

### Dictionary apply_to_player( player: Player ) {#method-apply-to-player}

Gives the reward to the player. Gives back how it went and what it needs to take the reward back.

### bool unapply_from_player( player: Player, tracking_data: Dictionary ) {#method-unapply-from-player}

Takes the reward back from the player (only for a reward that supports it).

### bool supports_unapply() {#method-supports-unapply}

Can the reward be taken back?

### String get_summary() {#method-get-summary}

A short text about the reward and its settings.

### void set_currency_reward( currency_def: int, reward_amount: int ) {#method-set-currency-reward}

Sets the currency and the amount the reward gives.

### Array[Dictionary] validate() {#method-validate}

Checks the settings of the reward. Gives the problems found (empty when it is fine).

