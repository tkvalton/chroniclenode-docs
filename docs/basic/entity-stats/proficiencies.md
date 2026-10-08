# Proficiencies

<Shot name="proficiencies-editor" caption="The Proficiencies editor (Entity Stats > Proficiencies)." />

A **proficiency** is a skill the player gets better at: swords, heavy armor, fire magic, lockpicking. It has a **level**. The level grows by use (hitting with a sword, being hit in plate, casting fire spells), by rewards and by script. Three things hang on the level:

- its own **stat effects**: more damage, a better hit chance, less damage taken. The level is their points;
- the **equipment it gates**: items of its weapon classes, weapon types and armor classes can need a level to be equipped;
- **requirements** you put elsewhere ("needs Plate 25 to use this ability").

The demo has two: **One-Handed Weapons** (grows when you hit with one; while you hold one, every level makes your hits half a percent stronger and adds a tenth of a percent to your chance to hit) and **Heavy Armor** (grows when you are hit in plate or mail; while you wear them, every level lowers the damage you take by a fifth of a percent).

## The editor

The left column is the skill, the right column is what it does.

### Levels

| Field | What it does | Default |
|---|---|---|
| **Max level** | The highest level | `100` |
| **Starting level** | The level a new player starts at | `0` |
| **Experience formula** | The experience needed to go from level *n* to *n+1*, with *n* as the input (a [formula](/basic/shared-systems/formulas)). None = `10 x (n + 1)`: 10 for level 1, 20 for level 2 | none |

### What it is for

These lists use **your own** weapon classes, weapon types and armor classes (the ones you made in [Equipment Definitions](/basic/equipment-definitions/)) and schools. A weapon class is a kind of weapon (Sword, Dagger, Bow); a weapon type is how it is held (One Hand, Two Hand, Ranged). Use whichever fits the skill: *Swords* for the class Sword, *One-Handed Weapons* for the type One Hand.

| Field | What it does |
|---|---|
| **Weapon classes**, **Weapon types** | Hitting an enemy with a weapon of one of them trains the skill, the effects work while one is held, and they can be gated |
| **Armor classes** | Being hit while wearing one trains the skill, the effects work while one is worn, and they can be gated |
| **Schools** | Using an ability of one of these [schools](/basic/types-and-groups/school-types) trains the skill |

A long list (weapon classes, abilities) opens the catalog from an **Add...** button; a short one is a row of tick boxes.

### Gaining experience

| Field | What it does | Default |
|---|---|---|
| **Experience per use** | The experience of one use | `1` |
| **Seconds between gains** | Uses closer together than this give nothing, so a training dummy cannot be farmed with a thousand taps. `0` = every use counts | `0` |

### Requirements

| Field | What it does | Default |
|---|---|---|
| **Level needed to equip** | The level the player needs to equip the weapons and armor listed above. `0` = anyone can equip them. Above `0`, a player under that level cannot wear the item and is told why | `0` |

For most games this replaces "an ability requirement" on a weapon class or armor class: the skill is the requirement. A player who starts with no level cannot equip anything gated, so give the classes that start trained a **Proficiency reward** in their [level 1 rewards](/basic/entities/player-classes), and give the others a trainer or a [quest](/basic/events-and-quests/quests).

### Effects

| Field | What it does | Default |
|---|---|---|
| **Only while using its gear** | On: the effects only work while the player holds one of the listed weapons or wears a piece of the listed armor. Off: they always work. A skill with no weapon and no armor (a school, lockpicking) always works | on |

The **stat effects** of the skill are in the right column: **Add stat effect** and choose a type, exactly like in the [Stats editor](/basic/entity-stats/stats#stat-effects). The **level of the proficiency is their points**: a Calculation Modifier Effect on Damage Done with a Linear formula of `0.5` is half a percent for every level. The same [hit filters](/basic/entity-stats/stats#the-effect-types), conditions and formulas work. A **Hit Chance Effect** (accuracy) works here too: the skill with a weapon is what makes you hit with it.

## What trains a proficiency

| Source | When |
|---|---|
| **Weapon classes and types** | A hit lands with a weapon attack: a [Damage effect](/basic/abilities-and-effects/effect-types) that uses the weapon (a share of the weapon damage, or the weapon's [damage type](/basic/types-and-groups/damage-types)) while the player holds a weapon of the class or type. A spell does not train swords |
| **Armor classes** | The player is hit and takes damage while wearing equipment of the class |
| **Schools** | The player uses an ability of the school |
| **Reward** | A **Proficiency reward** gives experience or levels. Use it for trainers, quests and books |
| **Script** | `player.proficiencies.add_experience(id, amount)`, `add_levels` or `set_level` |

## Examples

| You want | Setup |
|---|---|
| **Swords that hit harder** | A proficiency *Swords*: weapon class Sword. One Calculation Modifier Effect on Damage Done, percentage increase, Linear `0.5` |
| **Better hit chance with a weapon** | A **Hit Chance Effect**, Side *Accuracy*, Linear `0.1`: a tenth of a percent more chance to hit for every level |
| **Plate that hurts less once you are used to it** | A proficiency *Heavy Armor*: armor classes Plate and Mail. A Calculation Modifier Effect on Damage Taken, percentage decrease, Linear `0.2` |
| **Heavy armor only for the trained** | *Level needed to equip* `10` on Heavy Armor. Warriors get a Proficiency reward of 10 levels at level 1; a mage has to train |
| **Lockpicking** | A proficiency with no weapon, armor or school. A reward or an interaction gives it experience; a [requirement](/basic/shared-systems/requirements) on a lock asks for the level |
| **A slower climb at the top** | An experience formula such as a Linear formula of `25` per level |

If your game has no misses ([Gameplay Config > Hit Rules](/basic/game-settings/gameplay-config#hit-rules)), leave the accuracy effect out: it does nothing while the hit system is off.

## The requirement and the reward

| Type | Fields | What it does |
|---|---|---|
| **Proficiency** requirement | **Proficiency**, **Required level** | Met when the player has that level. It is asked again when a level changes |
| **Proficiency** reward | **Proficiency**, **Mode** (*Experience* or *Levels*), **Amount** | Gives experience (levels follow) or whole levels |

## Saving

The levels and the experience are part of the player and are saved with it. The effects work again when the game loads.

Only players have proficiencies. Other entities have the starting level, so a requirement for a level above it fails for them, and an NPC gets no effects from a skill.

## See also

- [Stats](/basic/entity-stats/stats), [Stat recipes](/basic/entity-stats/stat-recipes)
- [Requirements](/basic/shared-systems/requirements), [Rewards](/basic/shared-systems/rewards)
- [Proficiencies: how they are built](/advanced/entity-stats/proficiencies) (Advanced)
