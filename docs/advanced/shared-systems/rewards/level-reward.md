<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# LevelReward

**Inherits:** [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Container for rewards granted at a specific level

## Properties

| | | |
|---|---|---|
| `String` | [description](#prop-description) | `""` |
| `Array[Reward]` | [rewards](#prop-rewards) | `[]` |

## Methods

| | |
|---|---|
| `void` | [add_reward](#method-add-reward)( `reward: Reward` ) |
| `bool` | [remove_reward](#method-remove-reward)( `reward: Reward` ) |
| `void` | [clear_rewards](#method-clear-rewards)() |
| `int` | [get_reward_count](#method-get-reward-count)() |
| `Reward` | [get_reward_at_index](#method-get-reward-at-index)( `index: int` ) |
| `bool` | [apply_to_player](#method-apply-to-player)( `player: Player` ) |
| `String` | [get_summary](#method-get-summary)() |
| `Array[Dictionary]` | [validate](#method-validate)() |
| `bool` | [is_valid](#method-is-valid)() |

## Property descriptions

### String description = "" {#prop-description}

A short description of what this level gives (for the editor)

### Array[Reward] rewards = [] {#prop-rewards}

The rewards given at this level

## Method descriptions

### void add_reward( reward: Reward ) {#method-add-reward}

Adds a reward to the level.

### bool remove_reward( reward: Reward ) {#method-remove-reward}

Removes a reward. False when it was not there.

### void clear_rewards() {#method-clear-rewards}

Removes every reward.

### int get_reward_count() {#method-get-reward-count}

How many rewards the level gives.

### Reward get_reward_at_index( index: int ) {#method-get-reward-at-index}

The reward at a place of the list, or null.

### bool apply_to_player( player: Player ) {#method-apply-to-player}

Applies every reward; true when all of them were applied (an empty level reward has nothing to apply and counts as applied)

### String get_summary() {#method-get-summary}

A short text about the rewards of the level.

### Array[Dictionary] validate() {#method-validate}

Checks the settings. Gives the problems found (empty when it is fine).

### bool is_valid() {#method-is-valid}

Is it free of errors?

