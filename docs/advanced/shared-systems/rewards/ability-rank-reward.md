<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# AbilityRankReward

**Inherits:** [Reward](/advanced/shared-systems/rewards/reward) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Trains an ability of the player one or more ranks: a skill tree node that raises Fireball, a level that gives rank 3 of an ability, a quest that teaches a new rank.

## Description

Put it on a rank of a ranked skill tree node (rank 1 grants the ability with an AbilityReward, rank 2 and 3 are AbilityRankRewards), or on the rewards of a class level (a table of ranks by level). The ability goes up to its highest rank and no further. See docs/systems/ability-ranks-and-item-generation.md, section 3.

## Properties

| | | |
|---|---|---|
| `int` | [ability_id](#prop-ability-id) | `0` |
| `int` | [ranks](#prop-ranks) | `1` |
| `bool` | [grant_if_missing](#prop-grant-if-missing) | `true` |

## Methods

| | |
|---|---|
| `Dictionary` | [apply_to_player](#method-apply-to-player)( `player: Player` ) |
| `bool` | [unapply_from_player](#method-unapply-from-player)( `player: Player, tracking_data: Dictionary` ) |
| `bool` | [supports_unapply](#method-supports-unapply)() |
| `bool` | [should_apply_on_load](#method-should-apply-on-load)() |
| `String` | [get_summary](#method-get-summary)() |
| `Array[Dictionary]` | [validate](#method-validate)() |

## Property descriptions

### int ability_id = 0 {#prop-ability-id}

The ability to train

### int ranks = 1 {#prop-ranks}

How many ranks to add

### bool grant_if_missing = true {#prop-grant-if-missing}

The player does not have the ability yet: give it (at rank 1, then raised). Off: the reward does nothing without the ability

## Method descriptions

### Dictionary apply_to_player( player: Player ) {#method-apply-to-player}

Gives the reward to the player. Gives back how it went and what it needs to take the reward back.

### bool unapply_from_player( player: Player, tracking_data: Dictionary ) {#method-unapply-from-player}

Takes the reward back from the player (only for a reward that supports it).

### bool supports_unapply() {#method-supports-unapply}

Can the reward be taken back?

### bool should_apply_on_load() {#method-should-apply-on-load}

A rank that came from a skill tree is worked out again on load (the abilities of the tree are made again, at rank 1)

### String get_summary() {#method-get-summary}

A short text about the reward and its settings.

### Array[Dictionary] validate() {#method-validate}

Checks the settings of the reward. Gives the problems found (empty when it is fine).

