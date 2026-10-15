# Craft Schools

<Shot name="craft-schools-editor" caption="The Craft Schools editor (Items > Craft Schools)." />

A **craft school** is a crafting profession: Blacksmithing, Alchemy, Cooking. It has a **skill** that grows when the player crafts, a set of **categories** to sort its recipes, the **recipes** it starts with and the [recipes](/basic/items/craft-recipes) that belong to it. A profession can be **known from the start** or **learned** (from a [trainer](/basic/items/trainers), a quest or an event), can have **tiers** that cap its level (Apprentice, Journeyman, Master) and **specializations** (Weaponsmith, Armorsmith), and a craft can raise the skill by **points** or by **skill-ups**.

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

### Learning, and how a craft raises the skill

These fields are at the bottom of the right column, under **Learning and skill**.

| Field | What it does | Default |
|---|---|---|
| **Known from the start** | On: every character (or the party) knows the profession from the beginning. Off: it has to be **learned** first: nothing can be crafted with it, and a crafting station of the school says "You have not learned ...". A **Profession** reward, or a lesson of a [trainer](/basic/items/trainers), teaches it | on |
| **A craft raises the skill by** | **Points that fill a bar** (a craft gives points, a level costs more points) or **A chance of a skill-up** (a craft gives a chance to go up one level at once) | Points |
| **Points a level costs** | In points mode: a [formula](/basic/shared-systems/formulas) that gets the level the crafter is at and gives the points to reach the next one. Empty = the straight price above | none |

#### Points or skill-ups

| | **Points** | **Skill-ups** |
|---|---|---|
| A craft gives | Points towards the next level. A recipe's **Skill points per craft** is what it gives | A **chance** to go up one level at once |
| The cost of a level | The cost formula, or the straight price | None: the level is the skill |
| What a recipe's range does | Its factor (0 to 1) multiplies the points. Half the range left = half the points (the part of a point that is left is kept for the next craft) | Its factor is the **chance** of the skill-up. At the start of its range a craft is a sure skill-up, at its grey level it never is |
| At the cap of the tier, or the highest level | Nothing is gained | Nothing is gained |

A recipe's **range** (the level where it stops teaching and a curve in between) is set in the [recipe](/basic/items/craft-recipes#what-a-recipe-teaches). The crafting window can colour a recipe orange, yellow, green or grey by how much it teaches. [Specializations](/basic/shared-systems/skill-tiers-and-specializations#what-a-specialization-of-a-profession-gives) can add to what a craft teaches.

### Tiers and specializations

**Add tier** and **Add specialization** (under the fields above) are described on [Skill tiers and specializations](/basic/shared-systems/skill-tiers-and-specializations): a tier caps the level until it is trained, a specialization is a choice that gives recipes and craft effects.

### Categories

The headings that the recipes of the school are sorted under: General, Weapons, Armor, Tools. **Add Category** adds one. A recipe chooses its category from this list.

### Starting recipes

**Add Recipe** lists the [recipes](/basic/items/craft-recipes) the player knows from the start. Any other recipe is learned (a reward, a trainer).

### Requirements

**Add Requirement** adds [requirements](/basic/shared-systems/requirements) to *learn* the school (a [quest](/basic/events-and-quests/quests), a level). They are stored with the school for your game to use; the crafting window does not check them yet.

::: info Reserved
The school also has a **Skill tree** field. Nothing uses it yet.
:::

## Skill trees

The **Skill Trees** section of the craft school editor lists the [skill trees](/basic/abilities-and-effects/skill-trees) of the profession. A tree opens when the profession is **learned** (a locked tree says *Learn the profession X first*), and spends the points of **profession pools**: pools whose **Points belong to** is *The owner of the professions*. Who owns the points follows **Who owns the professions** below: the party, or each character. Make a pool for each profession that should have points of its own.

## Who owns the professions

By default the professions belong to the **party**: one set of schools, recipes and levels for everybody, as in most single-character crafting games. In the [Gameplay Config](/basic/game-settings/gameplay-party) (Party Management), **Professions belong to** can be changed to **Each character**: every character then has professions of their own (their own levels, tiers, specializations and recipes), and a crafting station uses the professions of the character who uses it and the materials in their bag. A recipe learned by one is not known to the others, and a companion can learn a profession a trainer teaches the character who is talking.

Choose it before the game starts: a save made with the other choice is not converted (a save of the party read in a game of characters gives every character a fresh set).

## How a school is opened

A **crafting station** [interactable](/basic/entities/interactables) has a *Craft school* field: using the station opens the crafting window of that school. All schools exist from the start of a game (the ones that are not [known from the start](#learning-and-how-a-craft-raises-the-skill) wait to be learned); a player's progress in each is part of the save.

## Gathering and the profession

A [gathering node](/basic/entities/interaction-types#gather) can raise a profession too: the node names the profession and a skill range with a curve, the same range a recipe has. A Mining node at skill 1 to 75 teaches a lot at first and nothing from 75 on; use the **Requirements** of the node to gate it (*Needs Mining 25*). The profession's progression mode decides whether a gather gives points or a chance of a skill-up.

## See also

- [Craft Recipes](/basic/items/craft-recipes), [Items](/basic/items/items), [Rewards](/basic/shared-systems/rewards)
