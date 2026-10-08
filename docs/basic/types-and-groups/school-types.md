# School Types

<Shot name="school-types-editor" caption="The School Types editor (Types & Groups > School Types)." />

A **school** is the family an ability belongs to: Arcane, Divine, Martial, Nature. It is a label on the **ability**, where a [damage type](/basic/types-and-groups/damage-types) is a label on the **damage**. A fire bolt can be an Arcane ability that deals Fire damage.

A school has a **Display name**, **Description**, **Color** and **Icon**. The toolkit ships one, **Physical**.

## Where a school is used

| Where | What the school does there |
|---|---|
| **Abilities and effects** | The **School** field of an [ability](/basic/abilities-and-effects/abilities) and of an [effect](/basic/abilities-and-effects/effects). Dispels and purges use the school of an effect too |
| **School Lock effect** | Locks every ability of a school on the target: a counter-spell that shuts down Arcane for four seconds. The locked abilities refuse to be used |
| **Clear effect, Ability Reflect effect** | Remove the effects of a school from a target (a purge, a dispel), or reflect the abilities of a school |
| **Ability Modifier Effect** (stat effect) | **Filter Type** *School* lets a stat change the [cooldown](/basic/keywords#cooldown) or cost of one school |
| **Proc effects** | A proc can trigger only on abilities of a school |
| **[Immunities](/basic/abilities-and-effects/immunities)** | An immunity can protect against a school: Arcane effects from others are refused |

## Examples

| You want | How |
|---|---|
| **Intellect** that shortens spell cooldowns | A stat effect, Ability Modifier Effect, Filter Type *School*, School *Arcane*, Ability Property cooldown |
| **A counter-spell** | A School Lock effect with School *Arcane* and a duration |
| **Anti-magic armor** | An immunity to the school *Arcane* |
