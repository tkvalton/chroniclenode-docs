# Damage Types

<Shot name="damage-types-editor" caption="The Damage Types editor (Tags & Groups > Damage Types)." />

A **damage type** says what kind of damage a hit is: Physical, Fire, Frost, Poison, Holy. The toolkit ships one, **Physical**. Add the rest your game has.

A damage type has a **Display name**, **Description**, **Color** and **Icon**. The color tints damage numbers and the combat log. Nothing else needs setting: what a damage type *means* is decided by everything that picks it.

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
| **Fire immunity for a lava golem** | An [immunity](/basic/tags-and-groups/immunities) to the damage type *Fire* in the golem's stats data |
