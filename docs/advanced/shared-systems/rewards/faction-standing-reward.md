<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# FactionStandingReward

**Inherits:** [Reward](/advanced/shared-systems/rewards/reward) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Sets reputation to a specific standing level with a faction

## Properties

| | | |
|---|---|---|
| `int` | [faction_id](#prop-faction-id) | `0` |
| `String` | [standing_name](#prop-standing-name) | `""` |

## Methods

| | |
|---|---|
| `Dictionary` | [apply_to_player](#method-apply-to-player)( `player: Player` ) |
| `bool` | [unapply_from_player](#method-unapply-from-player)( `player: Player, tracking_data: Dictionary` ) |
| `bool` | [supports_unapply](#method-supports-unapply)() |
| `String` | [get_summary](#method-get-summary)() |
| `void` | [set_faction_standing_reward](#method-set-faction-standing-reward)( `faction_def: int, standing_name: String` ) |
| `Array[Dictionary]` | [validate](#method-validate)() |

## Property descriptions

### int faction_id = 0 {#prop-faction-id}

The faction whose standing is set

### String standing_name = "" {#prop-standing-name}

The name of the standing (reputation level) to set, such as "Friendly"

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

### String get_summary() {#method-get-summary}

Get a user-facing summary of what this reward grants Override in child classes to provide meaningful descriptions Example: "Ability: Fireball (Active)" or "Skill Points: +5 Combat" *(from [Reward](/advanced/shared-systems/rewards/reward))*

### void set_faction_standing_reward( faction_def: int, standing_name: String ) {#method-set-faction-standing-reward}

*No description yet.*

### Array[Dictionary] validate() {#method-validate}

Validate reward configuration - override in child classes *(from [Reward](/advanced/shared-systems/rewards/reward))*

