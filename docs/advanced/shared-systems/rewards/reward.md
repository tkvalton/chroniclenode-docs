<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# Reward

**Inherits:** [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

**Inherited by:** [AbilityReward](/advanced/shared-systems/rewards/ability-reward), [CraftingRecipeReward](/advanced/shared-systems/rewards/crafting-recipe-reward), [CraftingSkillPointReward](/advanced/shared-systems/rewards/crafting-skill-point-reward), [CurrencyReward](/advanced/shared-systems/rewards/currency-reward), [EquipmentSlotUnlockReward](/advanced/shared-systems/rewards/equipment-slot-unlock-reward), [ExperienceReward](/advanced/shared-systems/rewards/experience-reward), [FactionReputationReward](/advanced/shared-systems/rewards/faction-reputation-reward), [FactionStandingReward](/advanced/shared-systems/rewards/faction-standing-reward), [ItemReward](/advanced/shared-systems/rewards/item-reward), [ProficiencyReward](/advanced/shared-systems/rewards/proficiency-reward), [SkillPointReward](/advanced/shared-systems/rewards/skill-point-reward)

Base class for all reward types

## Methods

| | |
|---|---|
| `String` | [get_block_reason](#method-get-block-reason)( `_player: Player` ) |
| `Dictionary` | [to_pending_data](#method-to-pending-data)() |
| `Dictionary` | [apply_to_player](#method-apply-to-player)( `player: Player` ) |
| `bool` | [unapply_from_player](#method-unapply-from-player)( `player: Player, tracking_data: Dictionary` ) |
| `bool` | [supports_unapply](#method-supports-unapply)() |
| `bool` | [should_apply_on_load](#method-should-apply-on-load)() |
| `String` | [get_summary](#method-get-summary)() |
| `Array[Dictionary]` | [validate](#method-validate)() |

## Method descriptions

### String get_block_reason( _player: Player ) {#method-get-block-reason}

Why this reward cannot be given right now ("" = it can). A reward that needs room (items) overrides it: whoever grants it keeps it until it can be given (Player.grant_reward), or does not complete what it belongs to (a quest)

### Dictionary to_pending_data() {#method-to-pending-data}

What a reward that waits for room needs to be saved ({} = this kind of reward never waits). Player.pending_rewards

### Dictionary apply_to_player( player: Player ) {#method-apply-to-player}

Apply this reward to a player - override in child classes Returns a Dictionary with:

- "success": bool - whether the application succeeded
- Additional tracking data needed for unapply (e.g., instance IDs, amounts)

Example: {"success": true, "ability_instance_id": 12345, "ability_definition_id": 42}

### bool unapply_from_player( player: Player, tracking_data: Dictionary ) {#method-unapply-from-player}

Unapply this reward from a player using tracking data from apply tracking_data: The dictionary returned from apply_to_player() Returns true if the unapply was successful NOTE: Only called if supports_unapply() returns true

### bool supports_unapply() {#method-supports-unapply}

Returns true if this reward type can be removed/undone Override to return true for reversible rewards Default is false for safety - rewards must explicitly opt-in to removal

### bool should_apply_on_load() {#method-should-apply-on-load}

Returns true if this reward should be re-applied when loading from save Override in child classes based on whether the reward is:

- PERSISTENT: Saved elsewhere (currency, XP, skill points) - return false
- TRANSIENT: Must be re-granted on load (abilities) - return true

Default is false (persistent) for safety

### String get_summary() {#method-get-summary}

Get a user-facing summary of what this reward grants Override in child classes to provide meaningful descriptions Example: "Ability: Fireball (Active)" or "Skill Points: +5 Combat"

### Array[Dictionary] validate() {#method-validate}

Validate reward configuration - override in child classes

