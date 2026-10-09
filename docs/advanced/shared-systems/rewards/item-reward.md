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

## Method descriptions

### String get_block_reason( player: Player ) {#method-get-block-reason}

Not enough room in the bag for all the items of the reward

### Dictionary apply_to_player( player: Player ) {#method-apply-to-player}

Apply this reward to a player - override in child classes Returns a Dictionary with:

- "success": bool - whether the application succeeded
- Additional tracking data needed for unapply (e.g., instance IDs, amounts)

Example: &#123;"success": true, "ability_instance_id": 12345, "ability_definition_id": 42&#125; *(from [Reward](/advanced/shared-systems/rewards/reward))*

### Dictionary to_pending_data() {#method-to-pending-data}

What a reward that waits for room needs to be saved and made again

### bool unapply_from_player( player: Player, tracking_data: Dictionary ) {#method-unapply-from-player}

Unapply this reward from a player using tracking data from apply tracking_data: The dictionary returned from apply_to_player() Returns true if the unapply was successful NOTE: Only called if supports_unapply() returns true *(from [Reward](/advanced/shared-systems/rewards/reward))*

### bool supports_unapply() {#method-supports-unapply}

Returns true if this reward type can be removed/undone Override to return true for reversible rewards Default is false for safety - rewards must explicitly opt-in to removal *(from [Reward](/advanced/shared-systems/rewards/reward))*

### String get_summary() {#method-get-summary}

Get a user-facing summary of what this reward grants Override in child classes to provide meaningful descriptions Example: "Ability: Fireball (Active)" or "Skill Points: +5 Combat" *(from [Reward](/advanced/shared-systems/rewards/reward))*

### void set_item_reward( new_item_id: int, new_quantity: int = 1, enable_auto_equip: bool = false ) {#method-set-item-reward}

*No description yet.*

### Array[Dictionary] validate() {#method-validate}

Validate reward configuration - override in child classes *(from [Reward](/advanced/shared-systems/rewards/reward))*

