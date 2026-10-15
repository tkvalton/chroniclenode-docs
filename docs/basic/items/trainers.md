# Trainers

<Shot name="trainers-editor" caption="The Trainers editor (Items > Trainers)." />

A **trainer** is a list of **lessons** that an NPC (or any object) teaches. The player talks to the NPC, sees the lessons, and buys the ones they want: a new ability, the next rank of an ability, levels of a [proficiency](/basic/entity-stats/proficiencies), a profession, a step up in a skill ([tiers](/basic/shared-systems/skill-tiers-and-specializations)), a specialization, a recipe.

A trainer is a definition, like a [vendor](/basic/items/vendors): you make it once in the **Trainers** tab and put it on as many NPCs as you like with a **Trainer interaction**. It is not three kinds of trainer: one trainer teaches whatever you put in its list, so the same blacksmith can teach the profession, a combat proficiency and an ability.

## A lesson

Every lesson has the same parts: **what it teaches**, **a price**, and **who can take it**.

### What a lesson can teach

| Teaches | What the player gets | The lesson sells |
|---|---|---|
| **An ability** | The ability, saved with the character | The ability once. Known afterwards |
| **A rank of an ability** | One more [rank](/basic/abilities-and-effects/ability-ranks) | The **next** rank, up to the highest rank the trainer teaches. Needs the ability first |
| **Levels of a proficiency** | Levels in a [proficiency](/basic/entity-stats/proficiencies) | The next levels (*Levels in one purchase* of them), up to the cap of the tier |
| **A profession** | A [craft school](/basic/items/craft-schools) that is not known from the start | The profession once |
| **Levels of a profession** | Skill levels in a profession | The next levels, up to the cap of the tier. Needs the profession first |
| **A tier** | The next step of a proficiency or a profession (Journeyman, Master) | The tier. It needs the one before it, with its level full |
| **A specialization** | A [specialization](/basic/shared-systems/skill-tiers-and-specializations#specializations) | The specialization. If it shares an exclusive group with one the player has, and that one can be changed, it replaces it |
| **A recipe** | A [crafting recipe](/basic/items/craft-recipes) | The recipe once |
| **Any rewards** | Any list of [rewards](/basic/shared-systems/rewards): an item, an effect, a quest ... | Every time it is bought. Limit it with requirements |

### The fields of a lesson

| Field | What it does | Default |
|---|---|---|
| **Teaches** | What the lesson is (the table above). The rest of the fields change with it | An ability |
| **Name**, **About it** | What the list shows. Empty = the name and description of what is taught (the ability's name and icon, "Swords: Skilled") | empty |
| **What it teaches** | The ability, proficiency, profession or recipe. For a tier or a specialization: whether it is of a proficiency or a profession, which one, and which tier or specialization | none |
| **Teaches up to** | For ranks and levels: the highest the trainer teaches. `0` = as far as it goes. A town trainer can teach rank 3 and a master in the capital rank 5 | `0` |
| **Levels in one purchase** | For levels: how many levels one purchase gives | `1` |

### The price

| Field | What it does | Default |
|---|---|---|
| **Money**, **Items taken**, **Skill points spent** | What it costs: any mix. A lesson can cost 50 gold, two iron bars and a skill point | free |
| **Price by step** | A [formula](/basic/shared-systems/formulas) of the step the purchase ends at. A Linear formula of `1` makes rank 3 cost three times as much as the base price | none (1) |
| **Price multiplier** | One more multiplier on the whole price | `1` |

- The **learner pays**. Money and items come out of the bag of the character who learns (the shared one when the party [shares its bag](/basic/entities/shared-inventory)); skill points come out of that character's skill pools.
- For levels, the price is multiplied by the number of levels bought, unless a *Price by step* formula says otherwise.
- Every amount is multiplied by the **standing** multiplier of the trainer (below) and rounded **up**, never to 0.
- Paying is **all or nothing**: a player who cannot pay one part pays nothing. If what the lesson teaches cannot be given, the price is given back.

### Who can take it

| Field | What it does | Default |
|---|---|---|
| **Requirements** | [Requirements](/basic/shared-systems/requirements) the character must meet: a level, a quest, a faction standing, "knows Fireball", "Blacksmithing 150" | none |
| **Hide until the requirements are met** | Off: the lesson is listed, greyed, with the reason of the first requirement that is not met. On: it is not listed at all | off |

A lesson also has requirements of its own that you do not set: a **tier** needs the tier before it and its level full (and the requirements of the tier itself); a **specialization** needs its tier and the requirements of the specialization; a **rank** or **levels of a profession** need the ability or the profession first. They show the same way.

### What the player sees

| State | What the list shows |
|---|---|
| **Available** | The name, the price and a **Learn** button. A price the player cannot pay is red and the button is off; the reason is in its tooltip ("Not enough Gold") |
| **Locked** | Greyed, with the reason ("Learn Fireball first", "Needs a higher tier", "Reach level 75 first (you are level 60)"). The price is shown |
| **Known** | "Known": the character has everything this lesson teaches |
| **Hidden** | Not listed (when you ticked *Hide until the requirements are met*) |

A lesson for ranks or levels says what it sells: "Fireball (2 to 3)".

## The trainer's own settings

| Field | What it does | Default |
|---|---|---|
| **Greeting** | A line shown when the list opens | empty |
| **Faction** | The faction whose standing with the player sets the prices | none (prices never change) |
| **Price rows** | Each row: *from reputation* and *prices x*. The row with the highest reputation the player has reached counts. 0.75 for Honored, 1.5 for Unfriendly. Below the lowest row the price is normal | none |
| **Refuses to teach below a standing**, **Refuses below reputation** | A trainer that will not teach those who are below this reputation with its faction: the player is told, and the list does not open | off |

The editor lists **problems**: a lesson with nothing to teach, an ability that does not exist, a rank lesson for an ability that has no ranks, a tier that does not exist.

## Putting a trainer to work

Give an [NPC](/basic/entities/npcs) or an [interactable](/basic/entities/interactables) a **Trainer** interaction (the interactions list of its editor, or the [Unique Object](/basic/world/unique-object-tool) panel of a placed one).

| Field | What it does |
|---|---|
| **Trainer definition** | The trainer. It is picked from the Trainers tab |
| **Open sfx**, **Open animation** | A sound and a social animation played when the list opens |

Using the NPC opens the list. It closes when the player walks away. It does not have to be an NPC: a book, a statue or a shrine can teach as well, the same interaction on an object.

## What is saved

- An **ability** or a **rank** from a trainer is saved with the character (it is given for good, like the one a [quest](/basic/shared-systems/rewards#when-there-is-no-room) gives).
- Proficiency levels, tiers and specializations are saved with the character's [proficiencies](/basic/entity-stats/proficiencies#saving).
- Professions, their levels, tiers, specializations and recipes are saved with the [crafting](/basic/items/craft-schools#who-owns-the-professions) data (of the party, or of each character).
- A lesson itself has no memory: whether it is "known" is read from what it teaches. A lesson that gives **any rewards** can be bought again; keep it to once with a requirement that the reward changes.

## Examples

| Goal | How |
|---|---|
| **A weapon master** | Lessons: *Levels of a proficiency* (Swords, 5 levels at a time, 20 gold per level), *A tier* (Skilled, needs Swords at level 25 full), *A specialization* (Duelist) |
| **A class trainer who sells ranks** | *A rank of an ability* for Fireball, up to rank 3, *Price by step* = Linear 1, a requirement of level 10 for rank 2 |
| **A profession teacher** | *A profession* (Alchemy), *Levels of a profession*, *A tier* (Journeyman, needs the tier before at its cap), *A recipe* for each secret recipe |
| **A faction trainer** | Faction = the guild, price rows `from 0: x1.0`, `from 500: x0.8`, `from 1500: x0.5`, refuse below `-100` |
| **A hidden master** | A *tier* lesson with *Hide until the requirements are met* and a requirement of a quest, so the player does not see it until the quest is done |

## See also

- [Skill tiers and specializations](/basic/shared-systems/skill-tiers-and-specializations), [Proficiencies](/basic/entity-stats/proficiencies), [Craft Schools](/basic/items/craft-schools), [Craft Recipes](/basic/items/craft-recipes), [Ability Ranks](/basic/abilities-and-effects/ability-ranks)
- [Vendors](/basic/items/vendors), [Requirements](/basic/shared-systems/requirements), [Rewards](/basic/shared-systems/rewards)
- [Trainers: how they are built](/advanced/items/trainers)
