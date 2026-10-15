<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ProficiencyReward

**Inherits:** [Reward](/advanced/shared-systems/rewards/reward) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Trains the player in a proficiency: experience towards the next level, or whole levels.

## Properties

| | | |
|---|---|---|
| `int` | [proficiency_id](#prop-proficiency-id) | `0` |
| `Mode` | [mode](#prop-mode) | `Mode.EXPERIENCE` |
| `float` | [amount](#prop-amount) | `10.0` |

## Methods

| | |
|---|---|
| `Dictionary` | [apply_to_player](#method-apply-to-player)( `player: Player` ) |
| `String` | [get_summary](#method-get-summary)() |
| `Array[Dictionary]` | [validate](#method-validate)() |

## Enumerations

### enum Mode {#enum-mode}

The options of mode: experience, levels.

- **EXPERIENCE** = `0` - The amount is experience; levels follow when it is enough
- **LEVELS** = `1` - The amount is whole levels

## Property descriptions

### int proficiency_id = 0 {#prop-proficiency-id}

The proficiency

### Mode mode = Mode.EXPERIENCE {#prop-mode}

Experience, or levels

### float amount = 10.0 {#prop-amount}

How much

## Method descriptions

### Dictionary apply_to_player( player: Player ) {#method-apply-to-player}

Gives the reward to the player. Gives back how it went and what it needs to take the reward back.

### String get_summary() {#method-get-summary}

A short text about the reward and its settings.

### Array[Dictionary] validate() {#method-validate}

Checks the settings of the reward. Gives the problems found (empty when it is fine).

