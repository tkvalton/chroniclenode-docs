<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# TrainerDefinition

**Inherits:** [DatabaseResource](/advanced/data-and-database/database-classes/database-resource) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

A trainer: a named list of lessons that NPCs and objects (a TrainerInteraction) teach. Like a vendor, one definition can be used by many.

## Description

What a trainer teaches is up to the game: its lessons can teach abilities, ranks, proficiency levels, professions, tiers, specializations and recipes in any mix. Prices can follow the standing of the player with a faction, and a trainer can refuse to teach those it dislikes. See docs/systems/skill-trainers.md.

## Properties

| | | |
|---|---|---|
| `Array[TrainerLesson]` | [lessons](#prop-lessons) | `[]` |
| `String` | [greeting](#prop-greeting) | `""` |
| `int` | [faction_id](#prop-faction-id) | `0` |
| `Array[ReputationPrice]` | [reputation_prices](#prop-reputation-prices) | `[]` |
| `bool` | [refuses_below](#prop-refuses-below) | `false` |
| `int` | [refuse_below_reputation](#prop-refuse-below-reputation) | `-1` |

## Methods

| | |
|---|---|
| `int` | [get_reputation](#method-get-reputation)( `system_hub: GameHost.SystemHub` ) |
| `float` | [get_price_multiplier](#method-get-price-multiplier)( `system_hub: GameHost.SystemHub` ) |
| `bool` | [refuses](#method-refuses)( `system_hub: GameHost.SystemHub` ) |
| `Array[Dictionary]` | [validate](#method-validate)() |

## Property descriptions

### Array[TrainerLesson] lessons = [] {#prop-lessons}

The lessons, in the order they are shown

### String greeting = "" {#prop-greeting}

What the trainer says when the shop opens (empty = nothing)

*Reputation*

### int faction_id = 0 {#prop-faction-id}

The faction whose standing with the player sets the prices (0 = prices do not change)

### Array[ReputationPrice] reputation_prices = [] {#prop-reputation-prices}

Price multipliers by reputation with that faction

### bool refuses_below = false {#prop-refuses-below}

The trainer refuses to teach a player whose reputation is below a limit

### int refuse_below_reputation = -1 {#prop-refuse-below-reputation}

The reputation under which the trainer refuses (when it refuses)

## Method descriptions

### int get_reputation( system_hub: GameHost.SystemHub ) {#method-get-reputation}

The reputation of the player with the faction of the trainer (0 when there is no faction or no faction manager)

### float get_price_multiplier( system_hub: GameHost.SystemHub ) {#method-get-price-multiplier}

What prices are multiplied by for this player, from their standing

### bool refuses( system_hub: GameHost.SystemHub ) {#method-refuses}

Does the trainer refuse to teach this player?

### Array[Dictionary] validate() {#method-validate}

Checks the settings. Gives the problems found (empty when it is fine).

