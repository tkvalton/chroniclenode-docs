# Entity Stats

Every character, creature and destructible object in the game has numbers: how strong it is, how much health it has, how fast it runs, how likely it is to dodge. This chapter is about those numbers and what they do. It is the part of ChronicleNode that decides *how much damage a hit really does*.

## The pieces

| Piece | What it is | Where you make it |
|---|---|---|
| **Stat** | A number an entity has: Strength, Armor, Dodge, Movement Speed. It can grow with level, be raised by gear and buffs, and *do things* through its stat effects | [Stats](/basic/entity-stats/stats) |
| **Stat effect** | What a stat does with its points: raise another stat, add health, cut damage taken, make a critical strike possible, heal on hit | In the Stats editor, under the stat |
| **Pool** | A number that goes up and down: Health, Mana, Rage, a Shield. The pool that runs out kills the entity | [Pool](/basic/entity-stats/pool) |
| **Calculation** | The four moments a number is worked out: damage dealt, damage taken, healing done, healing taken. Stat effects plug into them | [Calculations](/basic/entity-stats/calculations) |
| **Status effect definition** | A kind of control: a stun, a root, a silence, with [diminishing returns](/basic/keywords#diminishing-returns) | [Status Effects](/basic/abilities-and-effects/status-effects) |
| **Tags and groups** | The labels the numbers use: [damage types](/basic/tags-and-groups/damage-types), schools, [trigger tags](/basic/tags-and-groups/trigger-tags), [entity tags](/basic/tags-and-groups/entity-tags), [stat groups](/basic/tags-and-groups/stat-groups), [immunities](/basic/tags-and-groups/immunities) | [Tags & Groups](/basic/tags-and-groups/) |
| **Formula** | How the points of a stat turn into a value: armor, crit chance, growth per level | [Formulas](/basic/shared-systems/formulas) |

## How a stat becomes a number

Every stat on an entity has four parts, and the number you see is:

```
value = (base + growth + bonus) x multiplier
```

| Part | Where it comes from |
|---|---|
| **Base** | The starting value of the entity. The stat's *Default value*, or the value the entity's own stats data sets |
| **Growth** | What the entity gained from its level, if the stat has **Level growth** |
| **Bonus** | What gear, buffs and the stat effects of other stats add |
| **Multiplier** | Starts at 1. Buffs and effects can raise or lower it |

The result is kept between the stat's **Min value** and **Max value** and rounded the way the stat says.

## How a hit is worked out

When something damages an entity, the number goes through a fixed set of steps. The Calculations page and the stat effects fill the steps in:

1. The attacker's **damage done** is worked out: triggers roll (a critical strike?) and modifiers run (attack power).
2. A guardian effect may take part of the damage, and an **immunity** may stop it.
3. The target's **damage taken** is worked out: triggers roll (a dodge ends the hit, a block softens it) and modifiers run (armor).
4. What is left goes through the target's **pools** in order: a shield first, then health.
5. If the master pool is empty, the entity dies.

Healing goes the same way with the **healing done** and **healing taken** calculations, and then fills the pools that accept healing. The [pipeline](/advanced/entity-stats/pipeline) page in Advanced follows it in detail.

## Where an entity gets its stats

Every entity has an instance of **every** stat in the database. What differs between a Warrior and a Mage, or a wolf and a boss, is the starting values: each class, NPC and destructible has a *stats data* section in its editor (in [Entities](/basic/entities/)) that sets the base value of stats, the core stat overrides, which pools it has and how they start, permanent immunities, and *level growth overrides* (a warrior's Strength grows faster than a mage's).

## The core stats

Nine stats are ChronicleNode's own. The toolkit makes them for you the first time the database is used (they have the ids 1 to 9), and they are ordinary stats afterwards: you can change their default, give them growth or effects, but not their id.

| Core stat | Default | What it controls |
|---|---|---|
| **Movement Speed** | 6 m/s | How fast the entity runs |
| **Attack Speed** | 1x | A multiplier on how fast basic attacks are performed |
| **Global Cooldown** | 2 s | How long an ability locks the others for. See the [global cooldown](/basic/keywords#global-cooldown) |
| **Weapon Speed** | 3 s | Seconds one weapon swing takes. Set by the equipped weapon (hidden) |
| **Cast Speed** | 1x | A multiplier on how fast spells are cast |
| **Carry Weight** | 50 | How much the inventory carries |
| **Sight Range** | 12 m | How far the entity sees and detects others |
| **Weapon Damage** | 0 | Damage of the weapon in hand. Set by the equipped weapon (hidden) |
| **Weapon Damage Variance** | 0 | How far a weapon hit can stray from the weapon damage (hidden) |

## See also

- [Stats](/basic/entity-stats/stats), [Pool](/basic/entity-stats/pool), [Calculations](/basic/entity-stats/calculations)
- [Tags & Groups](/basic/tags-and-groups/)
- [Entity Stats: how they are built](/advanced/entity-stats/) (Advanced)
