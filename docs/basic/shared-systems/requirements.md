# Requirements

A **requirement** says what an entity must be or have. An ability can need a class and a level, a sword a minimum Strength, a [quest](/basic/events-and-quests/quests) a reputation, a conversation answer a weapon. Every requirement answers one question, "does this entity meet it?", and every list of requirements is checked the same way.

## Where you add requirements

Look for a **Requirements** list in these editors:

| Editor | What the requirements decide |
|---|---|
| [Abilities](/basic/abilities-and-effects/abilities#requirements) | Who can use the ability. The ability becomes unavailable while they are not met and available again when they are, as the entity levels up or changes gear, stats or class |
| [Effects](/basic/abilities-and-effects/effects#groups-and-requirements) | What the entity the effect lands on must meet at that moment. An effect that fails is rejected |
| Items | Who can use or equip the item |
| Quests | Who can accept the quest |
| Craft Recipes | Who can craft the recipe, on top of knowing it |
| Craft Schools | What an entity needs to learn the school (**Learning requirements**) |
| Conversations | Whether a response is offered to the player (**Response requirements**) |

## How a list is checked

- **All of them must be met.** One that fails means the whole list fails. There is no "any of these": make separate abilities, or use a [condition](/basic/shared-systems/conditions) with the **Or** condition where conditions are accepted.
- **The player is told why.** Each requirement writes its own message ("Requires level 20 (you are level 12)") and a short summary for tooltips ("Requires level 20"). The tooltip of an item or ability lists the summaries.
- **A requirement that is not filled in passes.** A Stat requirement with no stat chosen, or a [Faction](/basic/behaviors/factions) requirement with no faction, asks nothing.

## Adding a requirement

1. Click the add button next to the Requirements list (**Add Requirement** in the [Abilities editor](/basic/abilities-and-effects/abilities)). A dialog opens.
2. Choose the **type** from the list.
3. Fill in its fields and confirm. Double-click an entry of the list to change it; right-click an entry for the edit and remove choices.

## The requirement types

<!-- classes:shared-systems/requirements -->
| Class | What it is |
|---|---|
| [Requirement](/advanced/shared-systems/requirements/requirement) | Base class for all requirement types in the game. |
| [RequirementChecker](/advanced/shared-systems/requirements/requirement-checker) | Utility class for checking requirements and generating feedback |
| [RequirementEquipmentSlot](/advanced/shared-systems/requirements/requirement-equipment-slot) | Requires entity to have equipment in specific slot |
| [RequirementFaction](/advanced/shared-systems/requirements/requirement-faction) | Requires entity to have a minimum reputation with a faction |
| [RequirementLevel](/advanced/shared-systems/requirements/requirement-level) | Requires the entity to be at or above a level, and optionally at or below another (a level range: a buff that only works up to level 60) |
| [RequirementPlayerClassDefinition](/advanced/shared-systems/requirements/requirement-player-class-definition) | Requires entity to be one of the specified [player classes](/basic/entities/player-classes) |
| [RequirementResponseSeen](/advanced/shared-systems/requirements/requirement-response-seen) | Requirement that checks if a player has seen/selected a specific response |
| [RequirementStat](/advanced/shared-systems/requirements/requirement-stat) | Requires entity to have a minimum value in a specific stat |
| [RequirementWeapon](/advanced/shared-systems/requirements/requirement-weapon) | Requires entity to have specific weapon types equipped |
<!-- /classes -->

The fields of each type:

| Type | Fields | Met when |
|---|---|---|
| **Level** | **Required level** (default `1`), **Max level** (`0` = no limit) | The entity's level is at least the required level, and at most the max level when there is one. A max level makes "only works up to level 60" |
| **Stat** | **Stat**, **Minimum value**, **Check base stat** | The stat's value is at least the minimum. With **Check base stat** off it counts the value with bonuses and buffs; on, only the base |
| **Player Class** | **Allowed classes**, **Exclusion mode** | The player's class is in the list. With **Exclusion mode** on it is the other way round: the class must *not* be in the list. Entities that are not players always pass |
| **Faction** | **Faction**, **Minimum reputation**, **Standing name** | The entity's reputation with the faction is at least the minimum. With a **Standing name** ("Friendly", "Allied") it must be at that standing or a higher one |
| **Equipment Slot** | **Required slot** | Something is equipped in the slot |
| **Weapon** | **Requires any weapon**, **Required weapon types** | A weapon is equipped, or one of the listed types. An entity that is **disarmed** never meets it |
| **Response Seen** | **Source type** (NPC or Interactable), the unique id of the NPC or object, **Response id**, **Must have seen** | The player has (or, with **Must have seen** off, has not) picked that answer in that conversation. For branching conversations |

::: tip Stat requirements and buffs
A requirement on a stat that a buff raises is met only while the buff lasts. An ability that needs 50 Strength becomes unusable again when the buff ends. Turn on **Check base stat** to ignore buffs.
:::

## Examples

| You want | Requirements |
|---|---|
| A spell for mages from level 20 | Level (required `20`) and Player Class (Mage) |
| A heavy axe only strong characters can wield | Stat (Strength, minimum `40`) |
| A buff that stops working above level 60 | Level (max level `60`), on the effect |
| A vendor discount for friends | Faction (Merchants, standing "Friendly") on a conversation response |
| A weapon skill that needs a sword | Weapon (required type: Sword) on the ability |

## See also

- [Conditions](/basic/shared-systems/conditions)
- [Requirements: how they are built](/advanced/shared-systems/requirements) (Advanced)
