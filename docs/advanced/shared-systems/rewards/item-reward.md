<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ItemReward

**Inherits:** [Reward](/advanced/shared-systems/rewards/reward) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Grants items to the player's inventory. With no room for all of them nothing is given: the reward is blocked (see Reward.get_block_reason), and whoever grants it keeps it until there is room (Player.grant_reward, quests)

## Properties

| | | |
|---|---|---|
| `int` | [item_id](#prop-item-id) | `0` |
| `int` | [quantity](#prop-quantity) | `1` |
| `bool` | [auto_equip](#prop-auto-equip) | `false` |
| `LootLevel.Choice` | [level_from](#prop-level-from) | `LootLevel.Choice.RECEIVER` |
| `int` | [fixed_item_level](#prop-fixed-item-level) | `1` |
| `int` | [item_level_offset](#prop-item-level-offset) | `0` |

## Methods

| | |
|---|---|
| `String` | [get_block_reason](#method-get-block-reason)( `player: Player` ) |
| `Dictionary` | [apply_to_player](#method-apply-to-player)( `player: Player` ) |
| `Dictionary` | [to_pending_data](#method-to-pending-data)() |
| `bool` | [unapply_from_player](#method-unapply-from-player)( `player: Player, tracking_data: Dictionary` ) |
| `bool` | [supports_unapply](#method-supports-unapply)() |
| `String` | [get_summary](#method-get-summary)() |
| `void` | [set_item_reward](#method-set-item-reward)( `new_item_id: int, new_quantity: int = 1, enable_auto_equip: bool = false` ) |
| `Array[Dictionary]` | [validate](#method-validate)() |

## Property descriptions

### int item_id = 0 {#prop-item-id}

The item to grant

### int quantity = 1 {#prop-quantity}

How many of the item to grant

### bool auto_equip = false {#prop-auto-equip}

Equip the item when it is given

*Item Level*

### LootLevel.Choice level_from = LootLevel.Choice.RECEIVER {#prop-level-from}

For an item that is generated (it rolls its quality, stats or effects, or scales with its item level): where the item level comes from

### int fixed_item_level = 1 {#prop-fixed-item-level}

FIXED: the item level

### int item_level_offset = 0 {#prop-item-level-offset}

Added to the item level (a reward a few levels above the player: +3)

## Method descriptions

### String get_block_reason( player: Player ) {#method-get-block-reason}

Not enough room in the bag for all the items of the reward

### Dictionary apply_to_player( player: Player ) {#method-apply-to-player}

Gives the reward to the player. Gives back how it went and what it needs to take the reward back.

### Dictionary to_pending_data() {#method-to-pending-data}

What a reward that waits for room needs to be saved and made again

### bool unapply_from_player( player: Player, tracking_data: Dictionary ) {#method-unapply-from-player}

Takes the reward back from the player (only for a reward that supports it).

### bool supports_unapply() {#method-supports-unapply}

Can the reward be taken back?

### String get_summary() {#method-get-summary}

A short text about the reward and its settings.

### void set_item_reward( new_item_id: int, new_quantity: int = 1, enable_auto_equip: bool = false ) {#method-set-item-reward}

Sets the item, the quantity and whether it is equipped at once.

### Array[Dictionary] validate() {#method-validate}

Checks the settings of the reward. Gives the problems found (empty when it is fine).

