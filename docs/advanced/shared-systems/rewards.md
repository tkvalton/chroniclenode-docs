# Rewards: how they are built

A reward is a `Resource` stored inside the resource that grants it (a quest, a quest line, a conversation action, a skill node ...). It has no id of its own. The [Basic guide](/basic/shared-systems/rewards) explains how to use them.

## The base class

[Reward](/advanced/shared-systems/rewards/reward) extends `Resource`:

| Member | What it does |
|---|---|
| `apply_to_player(player: Player) -> Dictionary` | Gives the reward. Returns `{"success": bool}` plus whatever is needed to undo it (an instance id, an amount). A type must implement it |
| `get_summary() -> String` | A user-facing line: "Ability: Fireball (Active)", "Skill Points: +5 Combat". A type must implement it |
| `supports_unapply() -> bool` | Can the reward be taken back? `false` by default: a type opts in |
| `unapply_from_player(player, tracking_data) -> bool` | Takes it back, using the dictionary `apply_to_player` returned. Only called when `supports_unapply()` is true |
| `should_apply_on_load() -> bool` | Must the reward be given again when a game is loaded? `true` for what is rebuilt at load (an ability), `false` for what is saved elsewhere (currency, experience, skill points). `false` by default |
| `get_block_reason(player) -> String` | Why the reward cannot be given right now (`""` = it can). A reward that needs room overrides it |
| `to_pending_data() -> Dictionary` | What a reward that waits needs to be saved (`{}` = it never waits) |
| `validate() -> Array[Dictionary]` | Configuration problems for the editor |

[LevelReward](/advanced/shared-systems/rewards/level-reward) is not a reward but a container: a `description` and an `Array[Reward]`. `apply_to_player` grants each one through [`Player.grant_reward`](/advanced/entities/runtime/player) and counts a reward that waits as given.

## Giving a reward

Always go through `Player.grant_reward(reward)`, not `apply_to_player` directly:

1. It asks `get_block_reason(player)`. When the answer is not empty the reward is appended to `Player.pending_rewards`, the player is warned, `reward_blocked(reward, reason)` is emitted and the result is `{"success": false, "pending": true, "reason": ...}`.
2. Otherwise it calls `apply_to_player`, and on success emits `reward_given(reward)`.
3. Whenever the inventory changes the player tries the pending rewards again (`_deliver_pending_rewards`), and gives those that now fit.

The [`GrantRewardEffect`](/advanced/abilities-and-effects/effects-utility/grant-reward-effect) is the exception: it works on a `Player` target only and calls `apply_to_player` itself, so an item reward that does not fit is not queued there.

Pending rewards are saved with the player (`pending_rewards` in the save data, using `to_pending_data`) and restored on load. In the shipped types only `ItemReward` waits: it blocks when the bag cannot hold all of `quantity` items. A quest with a blocked reward does not complete until it can be given.

## Where rewards are stored

| Owner | Property |
|---|---|
| [`Quest`](/advanced/events-and-quests/events/quest) | `rewards: Array[Reward]` (signal `reward_applied`) |
| [`QuestLine`](/advanced/events-and-quests/events/quest-line) | `completion_rewards: Array[Reward]` |
| [`PlayerClassDefinition`](/advanced/entities/definitions/player-class-definition) | `level_rewards: Array[LevelReward]`, index = level − 1; every level from the old level + 1 to the new one is applied when the level rises |
| [`RankedSkillNode`](/advanced/abilities-and-effects/skill-trees/ranked-skill-node) | rewards for each rank |
| `ConversationGrantReward` (conversation action), [`GrantRewardAction`](/advanced/events-and-quests/actions-general/grant-reward-action) (event action) | `reward: Reward` |
| `GrantRewardEffect` | `reward: Reward`, taken back when the effect ends if the type supports it |

## Writing your own reward

1. Make a script that `extends Reward`, with `@tool` and a `class_name`, in your project folder `res://src/rewards/` (the addon's own `data_classes/rewards/types/` is found too, but an update of the addon replaces it). The add dialog lists every script of both folders; the name in the list is made from the file name without `_reward`.
2. Add `@export` properties for its settings.
3. Implement `apply_to_player` and `get_summary`. Return `{"success": false}` and `push_error` when it is set up wrongly.
4. If it can be undone, override `supports_unapply` and `unapply_from_player`, and put what you need in the returned dictionary.

```gdscript
@tool
class_name TitleReward extends Reward
## Gives the player a title

@export var title: String = ""

func apply_to_player(player: Player) -> Dictionary:
    if title.is_empty() or player == null:
        return {"success": false}
    player.set_meta("title", title)
    return {"success": true, "previous": ""}

func supports_unapply() -> bool:
    return true

func unapply_from_player(player: Player, tracking_data: Dictionary) -> bool:
    player.set_meta("title", tracking_data.get("previous", ""))
    return true

func get_summary() -> String:
    return "Title: %s" % title
```

## The classes

<!-- classes:shared-systems/rewards -->
| Class | What it is |
|---|---|
| [AbilityRankReward](/advanced/shared-systems/rewards/ability-rank-reward) | Trains an ability of the player one or more ranks: a skill tree node that raises Fireball, a level that gives rank 3 of an ability, a quest that teaches a new rank. |
| [AbilityReward](/advanced/shared-systems/rewards/ability-reward) | Grants an ability to the player |
| [CraftingRecipeReward](/advanced/shared-systems/rewards/crafting-recipe-reward) | Teaches a crafting recipe to the player via the CraftingManager |
| [CraftingSkillPointReward](/advanced/shared-systems/rewards/crafting-skill-point-reward) | Grants skill levels to a crafting school via the CraftingManager of the party |
| [CurrencyReward](/advanced/shared-systems/rewards/currency-reward) | Grants currency to the player's inventory |
| [EquipmentSlotUnlockReward](/advanced/shared-systems/rewards/equipment-slot-unlock-reward) | Unlocks a single equipment slot for use |
| [ExperienceReward](/advanced/shared-systems/rewards/experience-reward) | Grants experience points to the player |
| [FactionReputationReward](/advanced/shared-systems/rewards/faction-reputation-reward) | Grants or removes reputation with a faction |
| [FactionStandingReward](/advanced/shared-systems/rewards/faction-standing-reward) | Sets reputation to a specific standing level with a faction |
| [ItemReward](/advanced/shared-systems/rewards/item-reward) | Grants items to the player's inventory. |
| [LevelReward](/advanced/shared-systems/rewards/level-reward) | Container for rewards granted at a specific level |
| [ProficiencyReward](/advanced/shared-systems/rewards/proficiency-reward) | Trains the player in a proficiency: experience towards the next level, or whole levels. |
| [Reward](/advanced/shared-systems/rewards/reward) | Base class for all reward types |
| [SkillPointReward](/advanced/shared-systems/rewards/skill-point-reward) | Grants skill points to a specific point pool |
<!-- /classes -->
