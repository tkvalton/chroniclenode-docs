<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# AbilityReward

**Inherits:** [Reward](/advanced/shared-systems/rewards/reward) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Grants an ability to the player

## Properties

| | | |
|---|---|---|
| `int` | [granted_ability_id](#prop-granted-ability-id) | `0` |
| `AbilityDestination` | [ability_destination](#prop-ability-destination) | `AbilityDestination.ADD_ACTIVE` |
| `int` | [initial_rank](#prop-initial-rank) | `1` |

## Methods

| | |
|---|---|
| `Dictionary` | [apply_to_player](#method-apply-to-player)( `player: Player` ) |
| `bool` | [unapply_from_player](#method-unapply-from-player)( `player: Player, tracking_data: Dictionary` ) |
| `bool` | [supports_unapply](#method-supports-unapply)() |
| `bool` | [should_apply_on_load](#method-should-apply-on-load)() |
| `String` | [get_summary](#method-get-summary)() |
| `Array[Dictionary]` | [validate](#method-validate)() |

## Enumerations

### enum AbilityDestination {#enum-abilitydestination}

The options of ability destination: replace basic, add active, add passive.

- **REPLACE_BASIC** = `0`
- **ADD_ACTIVE** = `1`

## Property descriptions

### int granted_ability_id = 0 {#prop-granted-ability-id}

The ability to grant

### AbilityDestination ability_destination = AbilityDestination.ADD_ACTIVE {#prop-ability-destination}

Where the ability goes: it replaces the basic attack, or is added to the active or to the passive abilities

### int initial_rank = 1 {#prop-initial-rank}

The rank the ability starts at (1 = the first; the ability's highest rank is its limit). Later ranks come from Ability Rank rewards

## Method descriptions

### Dictionary apply_to_player( player: Player ) {#method-apply-to-player}

Gives the reward to the player. Gives back how it went and what it needs to take the reward back.

### bool unapply_from_player( player: Player, tracking_data: Dictionary ) {#method-unapply-from-player}

Takes the reward back from the player (only for a reward that supports it).

### bool supports_unapply() {#method-supports-unapply}

Can the reward be taken back?

### bool should_apply_on_load() {#method-should-apply-on-load}

Is the reward given again when a save is loaded (the ability is put back)?

### String get_summary() {#method-get-summary}

A short text about the reward and its settings.

### Array[Dictionary] validate() {#method-validate}

Checks the settings of the reward. Gives the problems found (empty when it is fine).

