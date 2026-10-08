# Pool

<Shot name="pool-editor" caption="The Pool editor (Entity Stats > Pool)." />

A **pool** is a number that goes up and down while the game is played: Health, Mana, Rage, Energy, a Shield. It has a *current* value and a *maximum*. A **stat** has points; a pool has a **level**, and damage, costs, regeneration and healing move it.

ChronicleNode ships two pools: **Health** and a protective **Shield**. Make as many as the game needs.

## What a pool is used for

| Role | How an entity uses the pool |
|---|---|
| **Health pool** | It takes damage and, when it is empty, the entity dies (the *master pool*). Shields are health pools too |
| **Resource pool** | Pays for abilities: mana, rage, energy. It does not take damage unless an effect gives it a [damage layer](#damage-layer) |

Which pools an entity has, and with what starting values, is set in the *stats data* of its [class, NPC or destructible](/basic/entities/).

## Basic properties

| Field | What it does |
|---|---|
| **Display name**, **Description**, **Icon** | What the interface and tooltips show |
| **Color** | The color of the bar |

## Pool properties

| Field | What it does |
|---|---|
| **Default max value** | The maximum when an entity is created, before stats, growth and gear change it |
| **Default current value** | The value the pool starts with when it does not start full |
| **Start value** | **Starts Full** or **Starts Empty**. A mana pool often starts full and a rage pool empty |
| **Max absorption per hit** | The most damage the pool takes from one hit (0 = no limit). For shields that can only soften a blow |

## Level growth

**Growth formula**, **Diminishing returns** and **Max growth** work as they do for a [stat](/basic/entity-stats/stats#level-growth): the levels gained (level - 1) go in, and the result is added to the *maximum* of the pool. "+10 health per level" is a Linear [formula](/basic/shared-systems/formulas) of `10`.

## Generation and decay

| Field | What it does |
|---|---|
| **Generation or decay** | **Regen** fills the pool up to its maximum. **Decay** drains it down to 0 |
| **Ticks per second** | How often it happens. `0` turns it off |
| **Amount per tick** | How much each tick changes the pool |

A *Health Regeneration* stat can add to these numbers: the [Pool Modifier Effect](/basic/entity-stats/stats#the-effect-types) changes the rate and the amount.

## Overfill

| Field | What it does |
|---|---|
| **Can overfill** | The pool can go above its maximum: temporary shields, overhealing |
| **Overfill max** | How far above (0 = no limit) |
| **Overfill decay rate** | How much of the overfill is lost every second (0 = it stays) |

## Negative behavior

| Field | What it does |
|---|---|
| **Can go negative** | The pool can go below 0: debt, corruption |
| **Negative max** | How far below (0 = no limit) |

## Damage types

**Absorbs All Damage Types** is on by default. Turn it off and **Add Type** to list the [damage types](/basic/tags-and-groups/damage-types) the pool takes: a magic barrier that only stops fire and frost. Everything else passes through to the next pool.

## Damage layer

<a id="damage-layer"></a>

When damage hits an entity it goes through the pools that take damage, one after the other. This section sets how the pool takes part:

| Field | What it does |
|---|---|
| **Absorbs Damage** | The pool takes part of the damage an entity suffers (on by default) |
| **Absorption Priority** | Pools with a higher priority take damage first: a shield at `100`, health at `0`. With equal priorities the pool added last goes first |
| **Protective (counts as mitigation)** | What the pool absorbs counts as *blocked* damage, not as damage the entity took. A shield is protective; health is not |
| **Receives Healing** | Heals fill the pool. Turn it off for a shield, otherwise over-healing would fill it |

An effect can give **any** pool a temporary damage layer: the [Absorb With Pool](/basic/abilities-and-effects/effect-types) (`AbsorbWithPoolEffect`) effect turns mana into a shield that takes 50 % of the damage and spends 1 mana for 2 damage.

## Examples

| You want | Settings |
|---|---|
| **Health** | Default max `100`, starts full, regen `0.5` ticks per second, `2` per tick, **Absorb Damage** on, priority `0`, not protective |
| **Mana** | Default max `100`, starts full, regen `1` per second, **Absorbs Damage** off |
| **Rage** | Default max `100`, **Starts Empty**, **Decay** `1` per second (it fades when not fighting), **Absorbs Damage** off |
| **Shield** | Default max `0`, starts empty, **Absorb Damage** on, priority `100`, **Protective**, **Receives Healing** off, can overfill |
| **Fire barrier** | Absorbs Damage on, **Absorbs All Damage Types** off, the types *Fire* and *Frost* |

## See also

- [Stats](/basic/entity-stats/stats), [Calculations](/basic/entity-stats/calculations)
- [Pools and damage layers](/advanced/entity-stats/pools) (Advanced)
