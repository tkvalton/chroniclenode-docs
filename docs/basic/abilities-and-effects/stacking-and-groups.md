# Stacking and groups

Two settings decide what happens when several effects of the same kind meet on one entity. **Stacking** is about the *same effect* applied again. **Groups** are about *different effects* that should not be active together, such as a paladin's Seals or the elixirs of an alchemist.

## Stacking

The stacking fields are in the [Effects editor](/basic/abilities-and-effects/effects#stacking). This page explains what they do when effects collide.

| Stacking rule | What happens when the effect is applied again |
|---|---|
| **No limits** | Each application is its own copy, with its own timer |
| **Per originator** | Each caster has one copy on the target. More applications by the same caster add stacks to that copy |
| **Global** | The target has one copy, whoever applies it. Every application adds stacks to it |

With the two rules that stack, the effect holds up to **Max stacks**, and each application adds **Stacks per application**. **Refresh on stack** restarts the duration with each new stack, and **Reapply on stack** runs the effect's logic again (useful for instant damage, healing and projectiles).

### When a source leaves

With **Global**, many sources can add stacks to one copy. ChronicleNode remembers how many stacks each source added. When a source dies or leaves the fight, only *that source's* stacks are taken away. The effect carries on with the rest, and ends when the last source is gone.

With **Per originator**, each caster's copy is separate, so it ends with its own caster.

### Choosing a rule

| You want | Use |
|---|---|
| Two casters' poisons to run side by side and not add together | **No limits** |
| Each caster's poison to build up on its own, but not mix with another caster's | **Per originator** |
| One "Sunder Armor" on the target that everyone's attacks add to | **Global** |
| A buff that only refreshes when applied again | **Global** with **Max stacks** `1` and **Refresh on stack** on |

## Groups

<Shot name="groups-editor" caption="The Groups editor (Tags & Groups > Groups)." />

A **group** is a label that effects, abilities and items can be part of, several at once. You make groups in **Tags & Groups > Groups**. A group does up to four jobs, and you switch on the ones you need.

### Exclusive effects

A group can limit how many of its effects are active at the same time. Put the effects in the group in the **Groups** field of the [Effects editor](/basic/abilities-and-effects/effects#groups-and-requirements).

| Field | What it does | Default |
|---|---|---|
| **Max active** | How many effects of the group can be active at once, within the scope. `0` means no limit: the group is then only a label | `1` |
| **Scope** | What the limit is counted per (see below) | Target |
| **When full** | What happens when a new member arrives and the group is full: **Replace** removes the oldest and takes its place, **Refuse** rejects the new one | Replace |
| **Persists through death** | The effect stays on its target when the target dies. Flasks do, most combat buffs do not | off |

The **scope** decides what the limit applies to:

| Scope | The limit is | Example |
|---|---|---|
| **Target** | One per target, whoever applied it | *Well Fed*: one food buff per character |
| **Originator on target** | One per source on each target. Two sources can both have one on the same target | A paladin's *Blessing*: two paladins' blessings both stay on a friend |
| **Originator** | One per source, wherever it is | A paladin's *Seal*: one Seal at a time. Also "at most three totems" |
| **Item** | One per item | Enchants: one permanent enchant on a weapon |

An effect that is in several groups needs a free slot in each. A flask that belongs to both the Battle Elixir and the Guardian Elixir group replaces either elixir.

### Shared cooldown

| Field | What it does | Default |
|---|---|---|
| **Shares cooldown** | Using any ability or consumable in the group puts all the others in the group on cooldown | off |
| **Shared cooldown duration** | How long that cooldown is. `0` uses the cooldown of the member that was used | `0` |

This is how potions share a cooldown. Put an ability in a group with the **Groups** field of the [Abilities editor](/basic/abilities-and-effects/abilities#groups), and an item in the group in the Items editor.

### Matching

Abilities, items and effects can name a **group** instead of a single thing:
- an ability that spends ammo can use "any item of the Arrows group";
- an effect that ends after a number of uses can count "abilities in this group".

### Enchant slots

With the scope **Item**, a group is a slot on one item: a permanent enchant slot, a temporary coating slot. Each item can hold one effect of the group in each slot.

## The demo groups

The demo has these groups to look at: **Seal**, **Blessing**, **Well Fed**, **Battle Elixir**, **Guardian Elixir**, **Potion**, **Enchant** and **Arrows**.

## See also

- [Effects](/basic/abilities-and-effects/effects)
- [Abilities](/basic/abilities-and-effects/abilities)
