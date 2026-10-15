<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ProfessionReward

**Inherits:** [Reward](/advanced/shared-systems/rewards/reward) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Teaches the player a profession (a craft school): a blacksmith trainer, a quest that opens alchemy. It can give levels in it too.

## Description

A profession that is learned from the start (`CraftSchoolDefinition.starts_learned`) is known already; this reward is for the ones that are not. Whose profession it is, the party or the character, follows the project setting. See docs/systems/skill-trainers.md, section 3.8.

## Properties

| | | |
|---|---|---|
| `int` | [craft_school_id](#prop-craft-school-id) | `0` |
| `int` | [levels](#prop-levels) | `0` |

## Methods

| | |
|---|---|
| `Dictionary` | [apply_to_player](#method-apply-to-player)( `player: Player` ) |
| `bool` | [unapply_from_player](#method-unapply-from-player)( `player: Player, tracking_data: Dictionary` ) |
| `bool` | [supports_unapply](#method-supports-unapply)() |
| `String` | [get_summary](#method-get-summary)() |
| `Array[Dictionary]` | [validate](#method-validate)() |

## Property descriptions

### int craft_school_id = 0 {#prop-craft-school-id}

The profession

### int levels = 0 {#prop-levels}

Skill levels to give with it (0 = none)

## Method descriptions

### Dictionary apply_to_player( player: Player ) {#method-apply-to-player}

Gives the reward to the player. Gives back how it went and what it needs to take the reward back.

### bool unapply_from_player( player: Player, tracking_data: Dictionary ) {#method-unapply-from-player}

Takes the reward back from the player (only for a reward that supports it).

### bool supports_unapply() {#method-supports-unapply}

Can the reward be taken back?

### String get_summary() {#method-get-summary}

A short text about the reward and its settings.

### Array[Dictionary] validate() {#method-validate}

Checks the settings of the reward. Gives the problems found (empty when it is fine).

