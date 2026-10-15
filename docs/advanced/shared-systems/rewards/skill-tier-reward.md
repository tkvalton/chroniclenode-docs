<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# SkillTierReward

**Inherits:** [Reward](/advanced/shared-systems/rewards/reward) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Trains a proficiency or a profession into a tier (Journeyman, Expert, Master): the cap of its level goes up.

## Description

It only raises: a character already in that tier, or a higher one, keeps it. The lessons of a trainer and quests give it. See docs/systems/skill-trainers.md, section 3.4.

## Properties

| | | |
|---|---|---|
| `Kind` | [kind](#prop-kind) | `Kind.PROFICIENCY` |
| `int` | [target_id](#prop-target-id) | `0` |
| `int` | [tier_index](#prop-tier-index) | `1` |

## Methods

| | |
|---|---|
| `Dictionary` | [apply_to_player](#method-apply-to-player)( `player: Player` ) |
| `bool` | [unapply_from_player](#method-unapply-from-player)( `player: Player, tracking_data: Dictionary` ) |
| `bool` | [supports_unapply](#method-supports-unapply)() |
| `Array[SkillTier]` | [get_tiers](#method-get-tiers)() |
| `String` | [get_summary](#method-get-summary)() |
| `Array[Dictionary]` | [validate](#method-validate)() |

## Enumerations

### enum Kind {#enum-kind}

The options of kind: proficiency, profession.

- **PROFICIENCY** = `0` - A proficiency (swords, lockpicking)
- **PROFESSION** = `1` - A profession (a craft school: blacksmithing)

## Property descriptions

### Kind kind = Kind.PROFICIENCY {#prop-kind}

What is trained

### int target_id = 0 {#prop-target-id}

The id of the proficiency, or of the craft school

### int tier_index = 1 {#prop-tier-index}

The tier to put it in: a number from 0 (0 = the first tier)

## Method descriptions

### Dictionary apply_to_player( player: Player ) {#method-apply-to-player}

Gives the reward to the player. Gives back how it went and what it needs to take the reward back.

### bool unapply_from_player( player: Player, tracking_data: Dictionary ) {#method-unapply-from-player}

Takes the reward back from the player (only for a reward that supports it).

### bool supports_unapply() {#method-supports-unapply}

Can the reward be taken back?

### Array[SkillTier] get_tiers() {#method-get-tiers}

The tiers of the target

### String get_summary() {#method-get-summary}

A short text about the reward and its settings.

### Array[Dictionary] validate() {#method-validate}

Checks the settings of the reward. Gives the problems found (empty when it is fine).

