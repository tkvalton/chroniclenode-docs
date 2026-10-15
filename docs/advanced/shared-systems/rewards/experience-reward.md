<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ExperienceReward

**Inherits:** [Reward](/advanced/shared-systems/rewards/reward) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Grants experience points to the player

## Properties

| | | |
|---|---|---|
| `int` | [experience_amount](#prop-experience-amount) | `100` |

## Methods

| | |
|---|---|
| `Dictionary` | [apply_to_player](#method-apply-to-player)( `player: Player` ) |
| `bool` | [unapply_from_player](#method-unapply-from-player)( `player: Player, tracking_data: Dictionary` ) |
| `bool` | [supports_unapply](#method-supports-unapply)() |
| `String` | [get_summary](#method-get-summary)() |
| `void` | [set_experience_reward](#method-set-experience-reward)( `amount: int` ) |
| `Array[Dictionary]` | [validate](#method-validate)() |

## Property descriptions

### int experience_amount = 100 {#prop-experience-amount}

The experience points to grant (above 0)

## Method descriptions

### Dictionary apply_to_player( player: Player ) {#method-apply-to-player}

Gives the reward to the player. Gives back how it went and what it needs to take the reward back.

### bool unapply_from_player( player: Player, tracking_data: Dictionary ) {#method-unapply-from-player}

Takes the reward back from the player (only for a reward that supports it).

### bool supports_unapply() {#method-supports-unapply}

Can the reward be taken back?

### String get_summary() {#method-get-summary}

A short text about the reward and its settings.

### void set_experience_reward( amount: int ) {#method-set-experience-reward}

Sets the experience the reward gives.

### Array[Dictionary] validate() {#method-validate}

Checks the settings of the reward. Gives the problems found (empty when it is fine).

