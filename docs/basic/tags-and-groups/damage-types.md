# Damage Types

<Shot name="damage-types-editor" caption="The Damage Types editor (Tags & Groups > Damage Types)." />

A **damage type** says what kind of damage a hit is: Physical, Fire, Frost, Poison, Holy. The toolkit ships one, **Physical**. Add the rest your game has.

A damage type has a **Display name**, **Description**, **Color** and **Icon**. The color tints damage numbers and the combat log. Nothing else needs setting: what a damage type *means* is decided by everything that picks it.

## Effects applied on hit

A damage type can put [effects](/basic/abilities-and-effects/effects) on whoever it hurts: **fire always burns**, poison always poisons. When a hit of the type lands, each effect in the list is applied to the target with the attacker as its source. It is a normal effect, so it follows its own duration, stacking and [requirements](/basic/shared-systems/requirements).

| Field | What it does | Default |
|---|---|---|
| **Applied effects** | The effects put on the target when a hit of this type lands. Empty = the damage type applies nothing | none |
| **Apply chance** | The chance (0 to 100) that they are applied when a hit lands | `100` |
| **Apply on periodic hits** | Do the ticks of a damage-over-time effect apply them too? | off |

The effects are applied only when the hit **landed** and did damage: a dodged, immune or redirected hit applies nothing, and neither does the hit that kills. A hit caused by one of the type's own effects (the burn itself) never applies them again, so a burn does not burn the burn.

To make fire burn: make an effect *Burning* (a Damage effect of type *Fire* with a duration and a tick rate), make the damage type *Fire*, and tick *Burning* in its **Applied effects**. Every fire spell now sets the target alight, whichever ability it comes from. The demo does not use this.

## Where a damage type is used

| Where | What the damage type does there |
|---|---|
| **Damage effects** | The damage effect has a damage type: the hit is a Fire hit |
| **Stat effects** | **Damage Type** on a Calculation Modifier Effect limits it to one kind: Armor works against *Physical*, Fire Resistance against *Fire*. Leave it empty and the effect applies to all damage |
| **Stat effects, procs** | A life steal or damage reflection can be limited to one type |
| **[Pools](/basic/entity-stats/pool#damage-types)** | A pool absorbs only the damage types in its list |
| **[Immunities](/basic/tags-and-groups/immunities)** | An immunity to *Fire* stops all fire damage |

## Examples

| You want | How |
|---|---|
| **Armor** that only works against weapons | A Calculation Modifier Effect on Damage Taken with Damage Type *Physical* |
| **Fire resistance** | Same, with Damage Type *Fire*, from a stat called Fire Resistance |
| **True damage** that ignores armor | A damage type nothing resists, such as *True* |
| **Fire that burns** | Applied effects: *Burning*, apply chance `100` |
| **Poison that sometimes weakens** | Applied effects: *Weakened*, apply chance `25` |
| **Fire immunity for a lava golem** | An [immunity](/basic/tags-and-groups/immunities) to the damage type *Fire* in the golem's stats data |
