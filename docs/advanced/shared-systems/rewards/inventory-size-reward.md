<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# InventorySizeReward

**Inherits:** [Reward](/advanced/shared-systems/rewards/reward) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Makes the bag of the player bigger for good: more slots, more carry capacity (a bigger backpack as the reward of a quest). It is saved with the bag.

## Description

What the Bag Slots and Carry Capacity stats give is changed with effects and equipment; this is on top of it. With a shared party bag it does nothing (the shared bag has a fixed size).

## Properties

| | | |
|---|---|---|
| `int` | [slots](#prop-slots) | `4` |
| `float` | [capacity](#prop-capacity) | `0.0` |

## Methods

| | |
|---|---|
| `Dictionary` | [apply_to_player](#method-apply-to-player)( `player: Player` ) |
| `bool` | [unapply_from_player](#method-unapply-from-player)( `player: Player, tracking_data: Dictionary` ) |
| `bool` | [supports_unapply](#method-supports-unapply)() |
| `String` | [get_summary](#method-get-summary)() |
| `Array[Dictionary]` | [validate](#method-validate)() |

## Property descriptions

### int slots = 4 {#prop-slots}

Slots to add. In a grid, one slot is one row

### float capacity = 0.0 {#prop-capacity}

Carry capacity to add (it matters when the inventory style counts weight)

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

