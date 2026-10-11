# Skill tiers and specializations

Two parts of skills that [proficiencies](/basic/entity-stats/proficiencies) and professions ([craft schools](/basic/items/craft-schools)) share. Both are optional: a skill with no tiers and no specializations works as it always did.

- **Tiers** are steps with a **cap** on the level: Apprentice up to 75, Journeyman up to 150, Master up to 300. A character cannot level past the cap of their tier until a [trainer](/basic/items/trainers), a quest or an event trains the next one.
- **Specializations** are choices inside a skill: Weaponsmith or Armorsmith, Two Handed or Dual Wield. A character chooses one, and it gives something.

## Tiers

Each skill has a list of tiers. Add them in the skill's editor (**Add tier**).

| Field | What it does |
|---|---|
| **Name** | "Journeyman" |
| **Level cap** | The highest level a character can reach while in this tier. Each tier's cap must be above the one before |
| **About it** | A line for the interface |
| **Needed to train it** | [Requirements](/basic/shared-systems/requirements) to be trained in the tier. A trainer lesson checks them |

How they work:

- A character **starts in the first tier**. With no tiers there are no caps: the level goes up to the highest level of the skill.
- At the cap, **experience stops**: levels from rewards stop at the cap too (a reward of 50 levels at a cap 10 gives only what is left). Setting a level above the cap holds it at the cap.
- A **trainer lesson for a tier** needs the tier before it, with its level **full**, and the requirements of the tier. Training it lifts the cap; the character keeps their level and can go on.
- A **Skill Tier reward** (any quest, event or conversation can give it) puts a character in a tier. It only raises: a reward of a tier the character is in already, or a lower one, does nothing. If it is taken back, the level comes down to the old cap.
- The last tier's cap should reach the highest level of the skill; the editor warns when it stops short.

Whose tier it is follows who owns the skill: a proficiency belongs to a character; a profession to the party or to each character (see [who owns the professions](/basic/items/craft-schools#who-owns-the-professions)).

## Specializations

Add them in the skill's editor (**Add specialization**).

| Field | What it does |
|---|---|
| **Name**, **About it** | What the player sees |
| **Exclusive group** | A word. Specializations of the same group exclude each other: choosing "Weaponsmith" of the group "branch" blocks "Armorsmith". Empty = no group |
| **Lowest tier** | The tier the character must be in (1 = the first tier) |
| **Can be changed** | The character can give it up for another of its group (a **re-spec**). Off: it is for good |
| **Needed to choose it** | [Requirements](/basic/shared-systems/requirements) |
| **Rewards when chosen** | [Rewards](/basic/shared-systems/rewards) given once when it is chosen: an ability, an item. They are **not** taken back if it is changed |

### What a specialization of a profession gives

| Field | What it does |
|---|---|
| **Recipes it gives**, **Recipe categories it gives** | Recipes (and every recipe of a category of the profession) that are known while it is chosen |
| **Faster crafting** | The craft time is shortened by this percent |
| **Extra output chance**, **Extra output amount** | A chance that a craft makes more than the recipe says, and how many more |
| **Materials back chance** | A chance that a finished craft gives the materials back |
| **More skill from crafting** | A percent added to the chance of a skill-up, or to the points of a craft ([how a craft raises the skill](/basic/items/craft-schools#how-a-craft-raises-the-skill)) |

Several specializations add their percentages together (up to 100 for a chance, 90 for speed).

### What a specialization of a proficiency gives

| Field | What it does |
|---|---|
| **Stat bonuses while chosen** | Flat bonuses to stats of the character: +5 Strength, +3 Critical Strike. They come off if it is changed |

The abilities and items that a proficiency specialization gives go in its **rewards**.

### Choosing and changing

- A specialization is chosen by a **trainer lesson**, or by a **Specialization reward** from a quest, an event or a conversation.
- If the specialization shares a group with one the character has and that one **can be changed**, choosing the new one **swaps** them. If the old one cannot be changed, the new one is blocked ("Weaponsmith is chosen: change it first" / "Cannot be had with Weaponsmith").
- Taking a Specialization reward back (a re-spec by script) puts the old one back.

## New requirements and rewards

| Name | What it does |
|---|---|
| **Skill Tier** requirement | A proficiency or profession is in at least a tier, optionally **at the cap** of it (ready for the next one) |
| **Profession** requirement | A profession is learned, at a skill level, in a tier |
| **Specialization** requirement | The character has (or does **not** have) a specialization |
| **Knows Ability**, **Knows Recipe** requirements | The character has an ability (at a rank), or knows a recipe (learned, from the profession or from a specialization) |
| **Proficiency** requirement | Also has a *tier* now |
| **Skill Tier**, **Specialization**, **Profession** rewards | Put a character in a tier, give a specialization, teach a profession (with levels) |

The reward and requirement dialogs show the ids of the skill and of its tier or specialization; the easiest way to use them is a lesson of a [trainer](/basic/items/trainers), which builds the reward for you.

## See also

- [Trainers](/basic/items/trainers), [Proficiencies](/basic/entity-stats/proficiencies), [Craft Schools](/basic/items/craft-schools)
- [Requirements](/basic/shared-systems/requirements), [Rewards](/basic/shared-systems/rewards)
