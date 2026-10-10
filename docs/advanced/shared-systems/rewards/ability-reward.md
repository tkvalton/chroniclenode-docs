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

Apply this reward to a player - override in child classes Returns a Dictionary with:

- "success": bool - whether the application succeeded
- Additional tracking data needed for unapply (e.g., instance IDs, amounts)

Example: &#123;"success": true, "ability_instance_id": 12345, "ability_definition_id": 42&#125; *(from [Reward](/advanced/shared-systems/rewards/reward))*

### bool unapply_from_player( player: Player, tracking_data: Dictionary ) {#method-unapply-from-player}

Unapply this reward from a player using tracking data from apply tracking_data: The dictionary returned from apply_to_player() Returns true if the unapply was successful NOTE: Only called if supports_unapply() returns true *(from [Reward](/advanced/shared-systems/rewards/reward))*

### bool supports_unapply() {#method-supports-unapply}

Returns true if this reward type can be removed/undone Override to return true for reversible rewards Default is false for safety - rewards must explicitly opt-in to removal *(from [Reward](/advanced/shared-systems/rewards/reward))*

### bool should_apply_on_load() {#method-should-apply-on-load}

Returns true if this reward should be re-applied when loading from save Override in child classes based on whether the reward is:

- PERSISTENT: Saved elsewhere (currency, XP, skill points) - return false
- TRANSIENT: Must be re-granted on load (abilities) - return true

Default is false (persistent) for safety *(from [Reward](/advanced/shared-systems/rewards/reward))*

### String get_summary() {#method-get-summary}

Get a user-facing summary of what this reward grants Override in child classes to provide meaningful descriptions Example: "Ability: Fireball (Active)" or "Skill Points: +5 Combat" *(from [Reward](/advanced/shared-systems/rewards/reward))*

### Array[Dictionary] validate() {#method-validate}

Validate reward configuration - override in child classes *(from [Reward](/advanced/shared-systems/rewards/reward))*

