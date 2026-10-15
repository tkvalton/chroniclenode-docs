<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# CraftingSkillPointReward

**Inherits:** [Reward](/advanced/shared-systems/rewards/reward) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Grants skill levels to a crafting school via the CraftingManager of the party

## Properties

| | | |
|---|---|---|
| `int` | [craft_school_id](#prop-craft-school-id) | `0` |
| `int` | [skill_points](#prop-skill-points) | `1` |

## Methods

| | |
|---|---|
| `Dictionary` | [apply_to_player](#method-apply-to-player)( `player: Player` ) |
| `bool` | [unapply_from_player](#method-unapply-from-player)( `player: Player, tracking_data: Dictionary` ) |
| `bool` | [supports_unapply](#method-supports-unapply)() |
| `String` | [get_summary](#method-get-summary)() |
| `void` | [set_skill_reward](#method-set-skill-reward)( `new_school: int, new_points: int = 1` ) |
| `Array[Dictionary]` | [validate](#method-validate)() |

## Property descriptions

### int craft_school_id = 0 {#prop-craft-school-id}

The crafting school that gains skill

### int skill_points = 1 {#prop-skill-points}

How many skill levels the school gains (above 0)

## Method descriptions

### Dictionary apply_to_player( player: Player ) {#method-apply-to-player}

Gives the reward to the player. Gives back how it went and what it needs to take the reward back.

### bool unapply_from_player( player: Player, tracking_data: Dictionary ) {#method-unapply-from-player}

Takes the reward back from the player (only for a reward that supports it).

### bool supports_unapply() {#method-supports-unapply}

Can the reward be taken back?

### String get_summary() {#method-get-summary}

A short text about the reward and its settings.

### void set_skill_reward( new_school: int, new_points: int = 1 ) {#method-set-skill-reward}

Sets the craft school and the number of levels the reward gives.

### Array[Dictionary] validate() {#method-validate}

Checks the settings of the reward. Gives the problems found (empty when it is fine).

