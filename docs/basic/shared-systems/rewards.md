# Rewards

A **reward** is something given to the player: experience, currency, an item, an ability, reputation, a recipe. One reward does one thing, and the same rewards are used wherever the game gives something away.

## Where you add rewards

| Editor | When the rewards are given |
|---|---|
| [Quests](/basic/events-and-quests/quests) | When the quest is completed |
| [Quest Lines](/basic/events-and-quests/quest-lines) | When the whole chain is completed (**Completion rewards**) |
| [Player Classes](/basic/entities/player-classes) | When the character reaches a level (**Level rewards**, see below) |
| [Skill Trees](/basic/abilities-and-effects/skill-trees) | When a skill node gets a rank |
| [Conversations](/basic/behaviors/conversations) | When the player picks an answer: the **Grant Reward** conversation action |
| [Events](/basic/events-and-quests/events) | When an event runs: the **Grant Reward** action |
| [Effects](/basic/abilities-and-effects/effect-types#utility) | The **Grant Reward** effect, on a player, which can take the reward back when the effect ends |

## Adding a reward

Click the add button next to the list, choose the **type** of reward in the dialog, fill in its fields and confirm. Every reward has a one-line summary ("Experience: +100") that the lists show.

## The reward types

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

The fields of each type:

| Type | Fields | What it gives |
|---|---|---|
| **Experience** | **Experience amount** | Experience points. They can lead to a level-up |
| **Currency** | **Currency**, **Amount** | Money of one currency, into the inventory |
| **Item** | **Item**, **Quantity**, **Auto equip**, **Level from**, **Fixed item level**, **Item level offset** | Items into the inventory, and equips them with **Auto equip**. See [pending rewards](#when-there-is-no-room) and [Item reward](#item-reward) |
| **Ability** | **Ability**, **Ability destination**, **Initial rank** | An ability: it replaces the basic attack, or is added to the active abilities, or to the passive ones. **Initial rank** starts it at a higher [rank](/basic/abilities-and-effects/ability-ranks) |
| **Ability Rank** | **Ability**, **Ranks**, **Grant if missing** | Trains an [ability](/basic/abilities-and-effects/ability-ranks#giving-ranks) of the player one or more ranks (up to its highest rank). Put it on a rank of a skill tree node, on a class level or on a quest. It gives the ability first when the player has not got it (**Grant if missing**) |
| **Skill Point** | **Skill pool**, **Skill points granted** | Points to spend in a [skill tree](/basic/abilities-and-effects/skill-trees) pool |
| **Crafting Recipe** | **Recipe** | Teaches a crafting recipe |
| **Crafting Skill Point** | **Craft school**, **Skill points** | Levels in a crafting school |
| **Equipment Slot Unlock** | **Equipment slot** | Opens an equipment slot for use |
| **Faction Reputation** | **Faction**, **Reputation amount** | Reputation with a faction. A negative amount takes reputation away |
| **Proficiency** | **Proficiency**, **Mode** (experience or levels), **Amount** | Trains the player in a [proficiency](/basic/entity-stats/proficiencies) |
| **Faction Standing** | **Faction**, **Standing name** | Sets reputation to a named standing ("Friendly") with a faction |

### Item reward

An **Item** reward of an item that is [generated](/basic/items/item-generation) (it rolls its quality, stats or effects, or it scales with its item level) makes the item **at an item level**, with its own roll for each piece. **Level from** says where the level comes from: the **receiver** (the level of the player, the default), a **fixed** level (**Fixed item level**), the **party**, or the **world** ([Worlds](/basic/world/worlds#loot)); **Item level offset** is added (a reward a few levels above the player: `3`). An item that is not generated is given as it is, and the level fields do nothing.

This is how one authored item becomes a reward for every stage of the game: tick **Scales with item level** on the item and give it with the level of the player.

## When there is no room

A reward that gives items needs room in the bag. If the **Item** reward cannot fit all its items, **nothing is given**, the player is warned, and the reward **waits**: it is given as soon as there is room (whenever the inventory changes). A quest with such a reward is not completed until it can be given. This waiting reward is called a [pending reward](/basic/keywords#pending-reward), and it is saved with the game.
The other reward types never wait.

Every way of giving a reward follows this rule: quests, level-ups, skill tree nodes, conversations, events and the **Grant Reward** effect. Nothing is lost and nothing is put over another item. The Grant Reward effect also has **If no room**: **Wait** (the default, as above) or **Refuse** (nothing is given, the player is warned and the effect fails). A reward that waited is not taken back when that effect ends.

## Level rewards

A player class has a list of **level rewards**: for a level, a short description and a list of rewards ("Level 5: a new ability and 2 skill points"). They are given when the character reaches the level (the first entry of the list is level 1). If several levels are gained at once, the rewards of every level passed are given. A level reward holds any rewards, so a level can give several things at once.

## Taking a reward back

Most reward types can be undone: the **Grant Reward** effect uses this to take its reward back when the effect ends. Item rewards cannot be taken back. Taking back experience can lower the level.

## See also

- [Requirements](/basic/shared-systems/requirements)
- [Rewards: how they are built](/advanced/shared-systems/rewards) (Advanced)
