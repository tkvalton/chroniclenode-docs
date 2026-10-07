# Abilities & Effects

Everything an entity can *do* in ChronicleNode is built from two pieces that work together:

- an **ability** decides **when and how** something can be done: who may use it, what it targets, how long it takes, what it costs and how long before it can be used again;
- an **effect** decides **what happens**: damage, healing, a change to a stat, a status such as a stun, a movement, a projectile, a summoned creature.

You build both in the **Abilities & Effects** category of the editor. This page explains how they fit together. The pages after it describe each editor in detail.

| Page | What it covers |
|---|---|
| [Abilities](/basic/abilities-and-effects/abilities) | The Abilities editor: the five kinds of ability, and every field |
| [Using an ability](/basic/abilities-and-effects/using-an-ability) | Instant, cast, channel and toggle: every setting, interrupts and cancelling |
| [Targeting](/basic/abilities-and-effects/targeting) | Who or what an ability can be aimed at: the eight strategies, range, line of sight, markers |
| [Aiming](/basic/abilities-and-effects/aiming) | Bows and guns: the Aimed strategy, aim assist, draw and release, charge, hitscan |
| [Effects](/basic/abilities-and-effects/effects) | The Effects editor: time strategies, stacking, auras, groups, limited uses |
| [Effect types](/basic/abilities-and-effects/effect-types) | Every effect type by category: damage, stats, status, movement, projectiles, procs and more |
| [Stacking and groups](/basic/abilities-and-effects/stacking-and-groups) | Stacking rules, and groups: exclusive effects, shared cooldowns, enchant slots |
| [Scaling and trigger rules](/basic/abilities-and-effects/scaling-and-trigger-rules) | Execute and combo bonuses, always-crit and never-dodge rules |
| [Crowd control](/basic/abilities-and-effects/crowd-control) | Stuns, roots and silences: status types, diminishing returns, immunity, breaking on damage |

## How the two fit together

An ability does nothing by itself. It lists the effects that fire when it is used. Effects can in turn contain other effects, so a small number of building blocks makes a large number of abilities.

Take a **Fireball**:

1. The **ability** is *Active*. It targets an enemy, takes 1.5 seconds to cast, costs 20 mana and can be used again after 8 seconds.
2. When the cast finishes, the ability applies its **on-use effect**: a *projectile* effect.
3. When the projectile hits, it applies two more effects: a *damage* effect for the impact and a *burning* effect, which is *temporary* and deals damage every second for a few seconds.

Everything in that list is chosen in the editor: the ability sets the timing, target and cost, and the effects are reusable pieces you can share between abilities. A burning effect made for the Fireball can be used by a fire sword as well.

## Abilities

Abilities come in five kinds. The kind decides which fields the editor shows.

| Kind | What it is | Example |
|---|---|---|
| **Passive** | Always on. It needs no input: its effects are applied while its requirements hold, and removed when they stop holding | An aura that raises armor, a bonus for wearing a shield |
| **Active** | The player or an NPC uses it. It has a target, a use style, a cost and a cooldown | A fireball, a heal, a sword strike |
| **Charge stack** | An active ability that holds several charges and regains them over time | A dash with three charges |
| **Combo** | An active ability whose steps change each time you use it in time | A three-hit sword combo |
| **Power-up** | An active ability whose power depends on how long, or how much, you charge | A bow drawn longer for more damage |

An active ability is used in one of four styles:

- **Instant**: it happens at once;
- **Cast**: it takes a cast time and can be interrupted;
- **Channel**: it keeps going and applies its effects at intervals until it ends or is interrupted;
- **Toggle**: using it switches it on or off, like a stance.

And it chooses its targets with a **targeting strategy**: yourself, nothing, an enemy, an ally, any entity, a point on the ground, several points, or an aimed shot.

## Effects

An effect has a **time behaviour** that decides how long it lasts:

| Time behaviour | What it does |
|---|---|
| **Immediate** | Happens once and is over: a hit, a heal |
| **Persistent** | Applies and stays until something removes it: an aura |
| **Persistent ticking** | Stays, and repeats at a set rate |
| **Temporary** | Lasts for a duration, then ends: a buff, a stun |
| **Temporary ticking** | Lasts for a duration and repeats at a set rate: poison, regeneration |

An effect that is applied again while it is still running can **stack**, so a second application adds a stack instead of a second copy, up to a maximum, and can restart the timer.

## Where abilities and effects meet the rest of the toolkit

- **Cost and resources** use the **pools** you define in *Entity Stats*.
- **Damage and healing** go through the calculations in *Entity Stats*, so stats, critical strikes, dodges and armor apply to every ability.
- **Tags & Groups** label damage and abilities by kind, make abilities share a cooldown, and decide which effects exclude each other.
- **Skill Trees** are how players unlock abilities.
