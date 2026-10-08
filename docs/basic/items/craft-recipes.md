# Craft Recipes

<Shot name="craft-recipes-editor" caption="The Craft Recipes editor (Items > Craft Recipes)." />

A **recipe** turns materials into an item: ore and coal into a sword, three herbs into a potion. Every recipe belongs to a [craft school](/basic/items/craft-schools), the profession that teaches it and levels up when the player crafts.

## Fields

| Field | What it does | Default |
|---|---|---|
| **Display name** | The name in the crafting window. **Use auto name** takes it from the item the recipe makes | |
| **Description**, **Icon** | What the window shows | |
| **Craft school** | The [school](/basic/items/craft-schools) the recipe belongs to | none |
| **Recipe category** | A heading of the school to list the recipe under (Weapons, Armor, Tools). Choose one of the categories of the school | |
| **Craft item** | The [item](/basic/items/items) the recipe makes. **Select Craft Item** opens the catalog | none |
| **Output quantity** | How many of the item one craft makes | `1` |
| **Craft duration** | Seconds one craft takes | `5` |
| **Materials** | **Add Item**: an item and a quantity. Every craft takes all of them from the bag | none |
| **Required skill level** | The level the player needs in the school to craft it | `1` |
| **Skill points per craft** | Skill points the school gains for every craft | `1` |
| **Requirements** | More [requirements](/basic/shared-systems/requirements) the crafter must meet: a [quest](/basic/events-and-quests/quests) done, a reputation, a [proficiency](/basic/entity-stats/proficiencies) | none |
| **Requires learning** | The recipe can only be crafted once it is known. A recipe is known when it is one of the **starting recipes** of its school or the player learned it (a [Crafting Recipe reward](/basic/shared-systems/rewards), a trainer) | off |

## How a craft runs

1. The player chooses a recipe and a quantity. The game checks that the recipe is known, that the **skill level** and the **requirements** are met, and that the bag holds the **materials** for the whole quantity.
2. The materials are taken at once. The game then checks that the **result fits** in the bag. If it does not, the materials are given back and the craft does not start.
3. Each piece is a job in a **queue** and runs for the *craft duration*, one after the other. A craft can be cancelled; the materials of the jobs that did not run are given back.
4. A finished job puts the item in the bag and adds the *skill points per craft* to the school. If the bag is full when a job finishes, the item waits in the school and is delivered as soon as there is room.

A craft in progress is saved with the game and continues after a load.

## Giving recipes to the player

| Way | How |
|---|---|
| **Starting recipe** | List it in the **Starting Recipes** of the [craft school](/basic/items/craft-schools) |
| **A reward** | A [Crafting Recipe reward](/basic/shared-systems/rewards) teaches it (a quest, a boss, a book) |
| **Not at all** | Leave **Requires learning** off and the recipe can be crafted by anyone with the skill, if your own interface lists it |

## See also

- [Craft Schools](/basic/items/craft-schools), [Items](/basic/items/items) (materials), [Rewards](/basic/shared-systems/rewards)
- A **crafting station** [interactable](/basic/entities/interactables) opens the crafting window of a school
