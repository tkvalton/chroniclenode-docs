# Crowd control

Crowd control stops an entity from doing something for a while: it cannot move, cast, attack or think straight. In ChronicleNode a crowd-control effect is a **Status** effect, and the kind of control comes from a **status effect definition** that you make in **Entity Stats > Status Effects**.

## The pieces

| Piece | Where | What it is |
|---|---|---|
| **Status effect definition** | *Entity Stats > Status Effects* | The condition itself: which kind it is, its diminishing returns, its immunity and whether damage breaks it |
| **Status effect** | *Abilities & Effects > Effects*, type **Status** | An effect that puts a status definition on a target, for a duration |
| **Interrupt** | *Effects*, type **Interrupt** | Stops the cast or channel in progress. It applies no lasting status |
| **School lock** | *Effects*, type **School Lock** | Locks all abilities of one school, such as a counterspell |

## The kinds of status

<Shot name="status-effect-definition" caption="A status effect definition (Entity Stats > Status Effects)." />

A status definition has a **Base status type**. The type decides what the entity cannot do.

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

## Diminishing returns

Repeated crowd control on the same target gets shorter, so it cannot be chained forever.

| Field | What it does | Default |
|---|---|---|
| **Enable diminishing returns** | Repeated applications get shorter | on |
| **Diminishing return percentage** | Each repeated application is shortened by this fraction | `0.5` |
| **Max diminishing applications** | How many times the shortening stacks | `3` |
| **Diminishing reset time** | Seconds without the status before the counter starts over | `10` |

The shortened duration replaces the effect's own duration.

## Immunity

After several applications a target can become immune for a while.

| Field | What it does | Default |
|---|---|---|
| **Grants temporary immunity** | The target becomes immune after enough applications | off |
| **Immunity threshold** | How many applications before it | `3` |
| **Immunity duration** | Seconds the immunity lasts | `10` |
| **Triggered immunity** | Which immunity (from *Tags & Groups > Immunities*) is switched on | none |

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

## Making a stun

1. In **Entity Stats > Status Effects**, add a definition named *Stun*, with **Base status type** *Incapacitate*. Keep diminishing returns on.
2. In **Abilities & Effects > Effects**, add an effect, choose the type **Status**, choose the *Stun* definition in its fields, and set a **Duration** (say 4 seconds). The time strategy must be one that lasts, such as *Temporary*.
3. Add the effect to an ability's on-use effects, aimed at an enemy.

## Threat

Crowd control sits next to threat, which decides who an enemy attacks. See [Threat](/basic/abilities-and-effects/effect-types#threat) in Effect types for **Taunt** and **Threat** effects.

## See also

- [Effect types](/basic/abilities-and-effects/effect-types)
- [Effects](/basic/abilities-and-effects/effects)
