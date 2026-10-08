# Craft Schools

<Shot name="craft-schools-editor" caption="The Craft Schools editor (Items > Craft Schools)." />

A **craft school** is a crafting profession: Blacksmithing, Alchemy, Cooking. It has a **skill** that grows when the player crafts, a set of **categories** to sort its recipes, the **recipes** it starts with and the [recipes](/basic/items/craft-recipes) that belong to it.

## Fields

| Field | What it does | Default |
|---|---|---|
| **Display name**, **Description**, **Icon**, **Color** | What the crafting window shows. The color themes the window of the school | white |

### Skill progression

The school levels up with the skill points its recipes give. A level costs more than the one before:

| Field | What it does | Default |
|---|---|---|
| **Max skill level** | The highest level of the school | `100` |
| **Starting skill level** | The level a new game starts at | `1` |
| **Base skill point cost** | Points needed to reach level 2 | `10` |
| **Skill cost increase per level** | How much more every following level costs | `2` |

With the defaults, level 2 costs 10 points, level 3 costs 12, level 4 costs 14, and so on (`base + (level - 2) x increase`). The **Skill progression preview** under the fields shows the cost of every level. The experience that is left over after a level carries into the next.

A recipe asks for a **Required skill level**. A [Crafting Skill Point reward](/basic/shared-systems/rewards) gives or takes levels of a school outside crafting.

### Categories

The headings that the recipes of the school are sorted under: General, Weapons, Armor, Tools. **Add Category** adds one. A recipe chooses its category from this list.

### Starting recipes

**Add Recipe** lists the [recipes](/basic/items/craft-recipes) the player knows from the start. Any other recipe is learned (a reward, a trainer).

### Requirements

**Add Requirement** adds [requirements](/basic/shared-systems/requirements) to *learn* the school (a [quest](/basic/events-and-quests/quests), a level). They are stored with the school for your game to use; the crafting window does not check them yet.

::: info Reserved
The school also has a **Skill tree** field. Nothing uses it yet.
:::

## How a school is opened

A **crafting station** [interactable](/basic/entities/interactables) has a *Craft school* field: using the station opens the crafting window of that school. All schools exist from the start of a game; a player's progress in each is part of the save.

## See also

- [Craft Recipes](/basic/items/craft-recipes), [Items](/basic/items/items), [Rewards](/basic/shared-systems/rewards)
