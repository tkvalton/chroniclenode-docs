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

Apply this reward to a player - override in child classes Returns a Dictionary with:

- "success": bool - whether the application succeeded
- Additional tracking data needed for unapply (e.g., instance IDs, amounts)

Example: &#123;"success": true, "ability_instance_id": 12345, "ability_definition_id": 42&#125; *(from [Reward](/advanced/shared-systems/rewards/reward))*

### bool unapply_from_player( player: Player, tracking_data: Dictionary ) {#method-unapply-from-player}

Unapply this reward from a player using tracking data from apply tracking_data: The dictionary returned from apply_to_player() Returns true if the unapply was successful NOTE: Only called if supports_unapply() returns true *(from [Reward](/advanced/shared-systems/rewards/reward))*

### bool supports_unapply() {#method-supports-unapply}

Returns true if this reward type can be removed/undone Override to return true for reversible rewards Default is false for safety - rewards must explicitly opt-in to removal *(from [Reward](/advanced/shared-systems/rewards/reward))*

### bool should_apply_on_load() {#method-should-apply-on-load}

A rank that came from a skill tree is worked out again on load (the abilities of the tree are made again, at rank 1)

### String get_summary() {#method-get-summary}

Get a user-facing summary of what this reward grants Override in child classes to provide meaningful descriptions Example: "Ability: Fireball (Active)" or "Skill Points: +5 Combat" *(from [Reward](/advanced/shared-systems/rewards/reward))*

### Array[Dictionary] validate() {#method-validate}

Validate reward configuration - override in child classes *(from [Reward](/advanced/shared-systems/rewards/reward))*

