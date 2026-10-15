<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# FactionStandingReward

**Inherits:** [Reward](/advanced/shared-systems/rewards/reward) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Sets reputation to a specific standing level with a faction

## Properties

| | | |
|---|---|---|
| `int` | [faction_id](#prop-faction-id) | `0` |
| `String` | [standing_name](#prop-standing-name) | `""` |

## Methods

| | |
|---|---|
| `Dictionary` | [apply_to_player](#method-apply-to-player)( `player: Player` ) |
| `bool` | [unapply_from_player](#method-unapply-from-player)( `player: Player, tracking_data: Dictionary` ) |
| `bool` | [supports_unapply](#method-supports-unapply)() |
| `String` | [get_summary](#method-get-summary)() |
| `void` | [set_faction_standing_reward](#method-set-faction-standing-reward)( `faction_def: int, standing_name: String` ) |
| `Array[Dictionary]` | [validate](#method-validate)() |

## Property descriptions

### int faction_id = 0 {#prop-faction-id}

The faction whose standing is set

### String standing_name = "" {#prop-standing-name}

The name of the standing (reputation level) to set, such as "Friendly"

## Method descriptions

### Dictionary apply_to_player( player: Player ) {#method-apply-to-player}

Gives the reward to the player. Gives back how it went and what it needs to take the reward back.

### bool unapply_from_player( player: Player, tracking_data: Dictionary ) {#method-unapply-from-player}

Takes the reward back from the player (only for a reward that supports it).

### bool supports_unapply() {#method-supports-unapply}

Can the reward be taken back?

### String get_summary() {#method-get-summary}

A short text about the reward and its settings.

### void set_faction_standing_reward( faction_def: int, standing_name: String ) {#method-set-faction-standing-reward}

Sets the faction and the standing the reward puts the player at.

### Array[Dictionary] validate() {#method-validate}

Checks the settings of the reward. Gives the problems found (empty when it is fine).

