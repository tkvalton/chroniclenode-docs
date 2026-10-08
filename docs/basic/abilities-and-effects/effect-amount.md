# The amount of an effect

<Shot name="effect-amount" caption="The Amount section of a Damage effect." />

**Damage**, **Heal** and **Stat Modifier** effects have a number: how much they hurt, mend or change. That number is the effect's **Amount**, and it is set up the same way in all three. Older versions had separate fields for each (base, stat, weapon, health); effects made that way still work and show up as an Amount when you open them.

The amount is the result of a **base**, a **spread** and any number of **parts**:

```
amount = base + the stat parts   (with the spread applied to that)
       + every other part
```

Then the effect applies what is its own: its [stacks](/basic/keywords#stacks), its [scaling rules](/basic/abilities-and-effects/scaling-and-trigger-rules) and, for a drawn shot, the charge.

## The fields

| Field | What it does |
|---|---|
| **Base** | The fixed part |
| **Spread (+/-)** | The result is a random number within this distance of base + the stat parts. `0` = exactly |
| **Parts** | What is read when the effect runs, added to the amount. Use **Add part** for each |

## Kinds of part

| Part | What it adds |
|---|---|
| **Stat of the user** | The points of a stat of the user times a multiplier: `1.5 x Attack Power`. Add a **formula** and **diminishing returns** to make it something else than a straight line. A formula can read the levels of the user and the target |
| **Weapon damage** | A share of the damage of the weapon in hand (`1` = 100 %) |
| **Target max health** | A share of the maximum health of the target: an execute or a "10 % of max health" strike |
| **Target current health** | A share of the health the target has now |
| **User max health** | A share of the maximum health of the user |
| **Damage dealt so far in this cast** | A share of the damage the earlier effects of this ability dealt, after armor and shields |
| **Healing done so far in this cast** | A share of the healing the earlier effects did |
| **Damage absorbed so far in this cast** | A share of the damage the targets' shields absorbed from this cast |

Every part has **Most this part adds** (`0` = no limit). The three "so far in this cast" parts also have **Only this effect**: listen to one effect of the cast instead of all of them.

## Reacting to what an earlier effect did

The effects of one ability use share a record of what they did: the damage dealt, the healing done and the damage absorbed, in total and per effect. A part can read it, so one effect can react to another:

| You want | Setup |
|---|---|
| **A strike that heals you for half the damage it dealt** | A [Composite](/basic/abilities-and-effects/effect-types) effect with two children: a **Damage** effect, then a **Heal** effect that applies to the user with one part, *Damage dealt so far in this cast*, share `0.5` |
| **An explosion of the damage a shield soaked** | An effect after the shield's hit with the part *Damage absorbed so far*, share `1` |
| **A second hit that repeats the first** | A Damage effect with the part *Damage dealt so far*, **Only this effect** set to the first hit |
| **Healing that matches what a drain took** | A Heal with *Damage dealt so far*, **Only this effect** set to the drain |

Two rules to remember:

- An effect only sees what effects **before** it did. Put the effect that reacts after the one it listens to in the list of [child effects](/basic/abilities-and-effects/child-effects-and-auras).
- Misses, dodges and [immunities](/basic/tags-and-groups/immunities) deal no damage, so a part that listens to them adds `0`.

This is different from [leech](/basic/entity-stats/stats#the-effect-types), which is a share of one hit that is healed to the attacker through the healing [calculations](/basic/entity-stats/calculations). Use leech for "life steal"; use a part when you need a different effect, a different target or a different number.

## See also

- [Effect types](/basic/abilities-and-effects/effect-types), [Scaling and trigger rules](/basic/abilities-and-effects/scaling-and-trigger-rules)
- [Formulas](/basic/shared-systems/formulas)
- [The effect amount: how it is built](/advanced/abilities-and-effects/effect-amount) (Advanced)
