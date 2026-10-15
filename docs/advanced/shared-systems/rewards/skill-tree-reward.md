<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# SkillTreeReward

**Inherits:** [Reward](/advanced/shared-systems/rewards/reward) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Gives the player a skill tree: the tree of a specialization that was chosen, of a rank, a quest, an event. The player keeps it (it is saved with the player) and spends points in it like in any tree of its class. Taking the reward back takes the tree away again: what was spent in it comes back and its rewards are taken back

## Properties

| | | |
|---|---|---|
| `int` | [skill_tree_id](#prop-skill-tree-id) | `0` |

## Methods

| | |
|---|---|
| `Dictionary` | [apply_to_player](#method-apply-to-player)( `player: Player` ) |
| `bool` | [unapply_from_player](#method-unapply-from-player)( `player: Player, tracking_data: Dictionary` ) |
| `bool` | [supports_unapply](#method-supports-unapply)() |
| `String` | [get_summary](#method-get-summary)() |
| `Array[Dictionary]` | [validate](#method-validate)() |

## Property descriptions

### int skill_tree_id = 0 {#prop-skill-tree-id}

The skill tree to give (an id of the skill_tree type)

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

