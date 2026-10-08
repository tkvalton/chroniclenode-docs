# Proficiencies

<Shot name="proficiencies-editor" caption="The Proficiencies editor (Entity Stats > Proficiencies)." />

A **proficiency** is a skill the player gets better at: swords, heavy armor, fire magic, lockpicking. It has a **level**. The level grows by use (hitting with a sword, being hit in plate, casting fire spells), by rewards and by script, and each level gives **points to a stat**. Because a stat can do anything a [stat effect](/basic/entity-stats/stats#stat-effects) can, the skill can do anything: more damage, a better hit chance, a shorter cast time.

[Requirements](/basic/shared-systems/requirements) already say "needs a weapon of this type" or "needs this armor class". A proficiency adds *how good the player is at it*: "needs Plate 25 to wear this".

The demo has two: **One-Handed Weapons** (grows when you hit with one, gives *Weapon Skill*, which makes hits stronger) and **Heavy Armor** (grows when you are hit in plate or mail, gives *Armor Skill*, which lowers the damage you take).

## Fields

| Field | What it does | Default |
|---|---|---|
| **Display name**, **Description**, **Icon**, **Color** | What the interface shows | |
| **Max level** | The highest level | `100` |
| **Starting level** | The level a new player starts at | `0` |
| **Experience formula** | The experience needed to go from level *n* to *n+1*, with *n* as the input (a [formula](/basic/shared-systems/formulas)). Empty = `10 x (n + 1)`: 10 for level 1, 20 for level 2 | empty |
| **Stat** | The stat that gets points from the level. None = the proficiency only counts for requirements | none |
| **Points per level** | The points of the stat for every level | `1` |
| **Weapon types** | Hitting an enemy while holding a weapon of one of these types gives experience | none |
| **Armor classes** | Being hit while wearing equipment of one of these classes gives experience | none |
| **Schools** | Using an ability of one of these [schools](/basic/tags-and-groups/school-types) gives experience | none |
| **Experience per use** | The experience of one use | `1` |
| **Minimum seconds between gains** | Uses closer together than this give nothing, so a training dummy cannot be farmed with a thousand taps. `0` = every use counts | `0` |

## What trains a proficiency

| Source | When |
|---|---|
| **Weapon types** | A hit lands with a weapon attack: a [Damage effect](/basic/abilities-and-effects/effect-types) that uses the weapon (a share of the weapon damage, or the weapon's [damage type](/basic/tags-and-groups/damage-types)) while the player holds a weapon of the type. A spell does not train swords |
| **Armor classes** | The player is hit and takes damage while wearing equipment of the class |
| **Schools** | The player uses an ability of the school |
| **Reward** | A **Proficiency reward** gives experience or levels. Use it for trainers, [quests](/basic/events-and-quests/quests) and books |
| **Script** | `player.proficiencies.add_experience(id, amount)`, `add_levels` or `set_level` |

Hitting the same dummy every half second for hours gives a level every so often, then stops at the highest level. Use **Minimum seconds between gains** to slow it down.

## Using the level

| You want | How |
|---|---|
| **More damage with swords** | Give the proficiency a stat (*Weapon Skill*) and give that stat a [Calculation Modifier Effect](/basic/entity-stats/stats#the-effect-types) on Damage Done: percentage increase, `0.5` per point |
| **Better hit chance with a weapon type** | The same stat with a *hit chance* effect, filtered to the weapon's school or to a distance. See [Stat recipes](/basic/entity-stats/stat-recipes) |
| **An item only for the skilled** | A **Proficiency** [requirement](/basic/shared-systems/requirements) on the item, the ability or the effect: *Plate*, level `25` |
| **A trainer** | A [conversation](/basic/behaviors/conversations) or [event](/basic/events-and-quests/events) that gives a **Proficiency reward**, with a cost |
| **Slower skill gain at the top** | An experience formula such as a Linear formula of `25` per level |

## What a skill does

A proficiency does nothing by itself: its level becomes **points of a stat**, and the stat does the work with [stat effects](/basic/entity-stats/stats#stat-effects). That is where you decide what the skill does, and for which weapon.

Two conditions limit a stat effect to the right equipment:

| Condition | Fields | True when |
|---|---|---|
| **Equipped Weapon Type** | **Weapon type ids**, **Require all**, **Invert** | The entity holds a weapon of the type (or, inverted, holds none of them). A disarmed entity holds nothing |
| **Wearing Armor Class** | **Armor class ids**, **Minimum pieces**, **Invert** | The entity wears at least that many pieces of the class. Weapons do not count |

Put the condition on the effect (the **Conditions** list of the effect, target kind *[Argument Entity](/basic/keywords#argument-entity)*) and the effect only works with that equipment:

| The skill should | The stat has |
|---|---|
| **Make hits stronger with one-handed weapons** | A Calculation Modifier Effect on Damage Done, percentage increase, `0.5` per point, condition *Equipped Weapon Type* One Hand |
| **Raise the hit chance with one-handed weapons** | A [Trigger Rule Effect](/basic/entity-stats/stats#the-effect-types): *Tags of kind* Avoid, *Works in* Damage Done, *Changes the rolls of* the owner, *Chance bonus* `-0.1` per point, with the same condition. Lowering the chance of the miss is raising the chance to hit |
| **Make plate hurt less** | A Calculation Modifier Effect on Damage Taken, percentage decrease, condition *Wearing Armor Class* Plate |
| **Cause an effect when a weapon type hits** | A [proc](/basic/abilities-and-effects/effect-types) effect in a passive ability whose requirement is the weapon, or a stat effect with the condition |

The demo's **Weapon Skill** stat does the first two: while a one-handed weapon is held, half a percent more damage and a tenth of a percent fewer misses for every level of the proficiency. **Armor Skill** does the third. Open them in the Stats editor to see how they are built.

If your game has no misses ([Gameplay Config > Hit Rules](/basic/game-settings/gameplay-config#hit-rules)), leave the hit effect out.

## The requirement and the reward

| Type | Fields | What it does |
|---|---|---|
| **Proficiency** requirement | **Proficiency**, **Required level** | Met when the player has that level. It is asked again when a level changes |
| **Proficiency** reward | **Proficiency**, **Mode** (*Experience* or *Levels*), **Amount** | Gives experience (levels follow) or whole levels |

## Saving

The levels and the experience are part of the player and are saved with it. The points on the stat are put back when the game loads.

Only players have proficiencies. Other entities have the starting level, so a requirement for a level above it fails for them.

## See also

- [Stats](/basic/entity-stats/stats), [Stat recipes](/basic/entity-stats/stat-recipes)
- [Requirements](/basic/shared-systems/requirements), [Rewards](/basic/shared-systems/rewards)
- [Proficiencies: how they are built](/advanced/entity-stats/proficiencies) (Advanced)
