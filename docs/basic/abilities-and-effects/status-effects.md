# Status Effects

<Shot name="status-effect-definition" caption="The Status Effects editor, with a status effect definition." />

A **status effect definition** is one named condition that an entity can be put under: *Stun*, *Frozen*, *Snare*, *Silenced*. You make them in **Abilities & Effects > Status Effects**. The definition holds what the condition is and how it behaves when it is applied again and again. A **Status** effect in the [Effects](/basic/abilities-and-effects/effects) editor then puts the definition on a target for a duration. [Crowd control](/basic/abilities-and-effects/crowd-control) explains how the pieces work together and walks through making a stun.

## Base status type

A definition has a **Base status type**. The type decides what the entity cannot do.

| Type | What it does to the entity | Stops a cast in progress |
|---|---|---|
| **Incapacitate** | A stun or a sleep: it cannot act | yes |
| **Root** | It cannot move, but can still use abilities | no |
| **Silence** | It cannot use the abilities that silence affects | yes |
| **Disarm** | It cannot use its weapon | no |
| **Cripple** | Its movement speed is multiplied (a value of `0.4` leaves 60 % of its speed) and restored exactly when the effect ends | no |
| **Blind** | The entity is blinded | no |
| **Flee** | The entity runs away | yes |
| **Disorient** | The entity is disoriented | yes |

A player cannot walk while rooted or incapacitated. A non-player character is put into the matching behaviour when the status lands.

Two statuses of the same kind that overlap end independently: a stun that ends does not cancel a second stun still running.

::: info The eight kinds are built in
This list is the set of kinds ChronicleNode ships with. What each one does to an entity is written in the code, so the **Base status type** is a choice from this list and not free text. What you make freely are the *definitions*: any number of named statuses, each built on one of the eight (a *Frozen* and a *Sleep* can both be *Incapacitate*, with different durations, colors and break rules). A ninth kind needs code: see [Extending the toolkit](/advanced/extending).
:::

## Diminishing returns

Repeated crowd control on the same target gets shorter, so it cannot be chained forever.

| Field | What it does | Default |
|---|---|---|
| **Enable diminishing returns** | Repeated applications get shorter | on |
| **Diminishing return percentage** | Each repeated application is shortened by this fraction | `0.5` |
| **Max diminishing applications** | How many times the shortening [stacks](/basic/keywords#stacks) | `3` |
| **Diminishing reset time** | Seconds without the status before the counter starts over | `10` |

The shortened duration replaces the effect's own duration.

## Immunity

After several applications a target can become immune for a while.

| Field | What it does | Default |
|---|---|---|
| **Grants temporary immunity** | The target becomes immune after enough applications | off |
| **Immunity threshold** | How many applications before it | `3` |
| **Immunity duration** | Seconds the immunity lasts | `10` |
| **Triggered immunity** | Which immunity (from *[Immunities](/basic/abilities-and-effects/immunities)*) is switched on | none |

A target that is immune is *rejected*: the status effect never starts. The target's tenacity and any immunities it already has are checked first.

## Breaking on damage

Some control should end when the target is hit hard enough: a sleep, a polymorph.

| Field | What it does | Default |
|---|---|---|
| **Breaks on damage taken** | A big enough hit ends the status | off |
| **Break damage threshold percent of health** | A single hit breaks it when it takes at least this share of the target's maximum health. `1` breaks it on almost any hit, `20` only on a big one | `10` |

The hit is measured after the target's own reductions and before its shields.

## Other fields

| Field | What it does |
|---|---|
| **Hide weapon mesh** | The weapon is hidden while the status lasts |
| **Color** | The color of the status in the interface |

## See also

- [Crowd control](/basic/abilities-and-effects/crowd-control)
- [Effect types](/basic/abilities-and-effects/effect-types)
- [Immunities](/basic/abilities-and-effects/immunities)
