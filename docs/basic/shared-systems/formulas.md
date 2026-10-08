# Formulas

A **formula** turns a number into another number. In ChronicleNode it answers one question: *how much is this stat worth?* A character has 300 points of Armor: how much damage does that stop? 450 points of Critical Strike Rating: what chance to crit? Formulas are how you shape those curves.

## From points to a value

Every stat effect that works from **stat points** (armor, crit chance, dodge, leech, damage bonuses) runs the points through the same short chain:

```
stat points  ->  [Diminishing returns]  ->  Formula  ->  [Max result]  ->  the value the effect applies
                  (optional)               (always)       (optional)
```

1. **Stat points** are the total of the stat: base, gear and buffs added together.
2. **Diminishing returns** (optional, off by default) reduce what the points count for: points above a threshold are worth less. See [diminishing returns](/basic/keywords#diminishing-returns).
3. The **formula** (always present) converts the effective points into the value of the effect.
4. **Max result** (optional) is a ceiling on the final value: "dodge never above 75 %". It is not the stat's own maximum, which caps the *points*.

## The formulas

| Formula | Fields | The value is | Use it for |
|---|---|---|---|
| **Linear** | **Value per point** | points × value per point | "+2 attack power per Strength", "0.05 % crit chance per rating point". The default |
| **Hyperbolic** | **Max value**, **K**, **Allow negative points** | max value × points / (points + K) | Armor and avoidance: it approaches the max value but never reaches it, so it needs no hard cap. **K** is the number of points that gives half the max value (K `100`: 100 points = 50 %, 300 points = 75 %) |
| **Flat** | **Value** | the value, whatever the points | "+100 % crit damage as soon as the entity has the stat", "when blocking, take 30 % less" |

## Diminishing returns

| Type | Fields | The points count as |
|---|---|---|
| **Soft cap** | **Threshold**, **Rate** | Full value up to the threshold, then each point counts as only **Rate** of a point (threshold `400`, rate `0.5`: 600 points count as 500). A rate of `0` is a hard cap |
| **Drawn curve** | **Curve**, **Max input**, **Beyond rate** | A curve you draw: at each number of points it says what share of the points counts. For hand-tuned tables, like the stat scaling of an action RPG |

## Level scaling

Both slots can depend on a level. With **Level scaling** on, the same points are worth less at a higher level: a level 60 character needs more armor than a level 10 one for the same protection. Level scaling has these fields:

| Field | What it does |
|---|---|
| **Source** | Whose level is read: the **owner** of the stat, the **attacker** or the **defender** of the hit being calculated |
| **Reference level** | The level at which the factor is exactly 1 (default `60`) |
| **Start factor** | The factor at level 1 (default `0.25`). It rises in a line to 1 at the reference level and goes on above it |
| **Curve** | A curve that replaces the line, if you want a different shape |

A Hyperbolic formula multiplies its **K** by the factor, a Soft cap multiplies its threshold, and a Linear formula divides its value per point. A Flat formula ignores level.

## Examples

| Stat | Diminishing returns | Formula | Max result |
|---|---|---|---|
| Armor, League of Legends style | none | Hyperbolic: max `100`, K `100` | none needed |
| Critical strike rating | Soft cap: threshold `400`, rate `0.5` | Linear: `0.05` per point | `100` |
| Dodge, World of Warcraft style | none | Hyperbolic: max `75`, K `300` | the max already caps it |
| Armor, Skyrim style | none | Linear, per point | `80` |

## Where formulas are used

- On the **stat effects** of a stat: each effect that turns points into a value has its formula and diminishing returns, with a preview of the curve as a graph and a table.
- For **growth per level**: a stat or pool can grow as the character levels, with the same two slots. The input is the *levels gained* (level − 1), so level 1 has no growth, and "+2 per level" is a Linear formula of `2`. A **max growth** can cap the total, and one kind of entity (a warrior, a mage) can have its own growth for a stat that replaces the stat's own.

## Formulas of your own

The editor lists every formula it finds, including the ones you write yourself in the project folders `res://src/stat_formulas/` (formulas) and `res://src/stat_diminishing_returns/` (diminishing returns), so an update of the addon never overwrites them. See [Formulas: how they are built](/advanced/shared-systems/formulas) (Advanced).

## See also

- [Calculations](/basic/entity-stats/calculations)
- [Stats](/basic/entity-stats/stats)
