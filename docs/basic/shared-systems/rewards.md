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
| [AbilityReward](/advanced/shared-systems/rewards/ability-reward) | Grants an ability to the player |
| [CraftingRecipeReward](/advanced/shared-systems/rewards/crafting-recipe-reward) | Teaches a crafting recipe to the player via the CraftingManager |
| [CraftingSkillPointReward](/advanced/shared-systems/rewards/crafting-skill-point-reward) | Grants skill levels to a crafting school via the CraftingManager of the party |
| [CurrencyReward](/advanced/shared-systems/rewards/currency-reward) | Grants currency to the player's inventory |
| [EquipmentSlotUnlockReward](/advanced/shared-systems/rewards/equipment-slot-unlock-reward) | Unlocks a single equipment slot for use |
| [ExperienceReward](/advanced/shared-systems/rewards/experience-reward) | Grants experience points to the player |
| [FactionReputationReward](/advanced/shared-systems/rewards/faction-reputation-reward) | Grants or removes reputation with a [faction](/basic/behaviors/factions) |
| [FactionStandingReward](/advanced/shared-systems/rewards/faction-standing-reward) | Sets reputation to a specific standing level with a faction |
| [ItemReward](/advanced/shared-systems/rewards/item-reward) | Grants items to the player's inventory. With no room for all of them nothing is given: the reward is blocked (see Reward.get_block_reason), |
| [LevelReward](/advanced/shared-systems/rewards/level-reward) | Container for rewards granted at a specific level |
| [Reward](/advanced/shared-systems/rewards/reward) | Base class for all reward types |
| [SkillPointReward](/advanced/shared-systems/rewards/skill-point-reward) | Grants skill points to a specific point pool |
<!-- /classes -->

The fields of each type:

| Type | Fields | What it gives |
|---|---|---|
| **Experience** | **Experience amount** | Experience points. They can lead to a level-up |
| **Currency** | **Currency**, **Amount** | Money of one currency, into the inventory |
| **Item** | **Item**, **Quantity**, **Auto equip** | Items into the inventory, and equips them with **Auto equip**. See [pending rewards](#when-there-is-no-room) |
| **Ability** | **Ability**, **Ability destination** | An ability: it replaces the basic attack, or is added to the active abilities, or to the passive ones |
| **Skill Point** | **Skill pool**, **Skill points granted** | Points to spend in a [skill tree](/basic/abilities-and-effects/skill-trees) pool |
| **Crafting Recipe** | **Recipe** | Teaches a crafting recipe |
| **Crafting Skill Point** | **Craft school**, **Skill points** | Levels in a crafting school |
| **Equipment Slot Unlock** | **Equipment slot** | Opens an equipment slot for use |
| **Faction Reputation** | **Faction**, **Reputation amount** | Reputation with a faction. A negative amount takes reputation away |
| **Faction Standing** | **Faction**, **Standing name** | Sets reputation to a named standing ("Friendly") with a faction |

## When there is no room

A reward that gives items needs room in the bag. If the **Item** reward cannot fit all its items, **nothing is given**, the player is warned, and the reward **waits**: it is given as soon as there is room (whenever the inventory changes). A quest with such a reward is not completed until it can be given. This waiting reward is called a [pending reward](/basic/keywords#pending-reward), and it is saved with the game.
The other reward types never wait.

## Level rewards

A player class has a list of **level rewards**: for a level, a short description and a list of rewards ("Level 5: a new ability and 2 skill points"). They are given when the character reaches the level (the first entry of the list is level 1). If several levels are gained at once, the rewards of every level passed are given. A level reward holds any rewards, so a level can give several things at once.

## Taking a reward back

Most reward types can be undone: the **Grant Reward** effect uses this to take its reward back when the effect ends. Item rewards cannot be taken back. Taking back experience can lower the level.

## See also

- [Requirements](/basic/shared-systems/requirements)
- [Rewards: how they are built](/advanced/shared-systems/rewards) (Advanced)
