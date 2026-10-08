# Stacking and groups

Two settings decide what happens when several effects of the same kind meet on one entity. **Stacking** is about the *same effect* applied again. **Groups** are about *different effects* that should not be active together, such as a paladin's Seals or the elixirs of an alchemist.

## Stacking

The stacking fields are in the [Effects editor](/basic/abilities-and-effects/effects#stacking). This page explains what they do when effects collide.

| Stacking rule | What happens when the effect is applied again |
|---|---|
| **Separate copies** | Nothing is combined: each application is a new copy with its own timer, and the [stack](/basic/keywords#stacks) fields (**Max stacks** and the rest) do not apply. The same caster applying it twice gets two copies |
| **Per originator** | Each caster has one copy on the target. More applications by the same caster add stacks to that copy |
| **Global** | The target has one copy, whoever applies it. Every application adds stacks to it |

With the two rules that stack, the effect holds up to **Max stacks**, and each application adds **Stacks per application**. **Refresh on stack** restarts the duration with each new stack, and **Reapply on stack** runs the effect's logic again (useful for instant damage, healing and projectiles).

### When a source leaves

With **Global**, many sources can add stacks to one copy. ChronicleNode remembers how many stacks each source added. When a source dies or leaves the fight, only *that source's* stacks are taken away. The effect carries on with the rest, and ends when the last source is gone.

With **Per originator**, each caster's copy is separate, so it ends with its own caster.

### Choosing a rule

| You want | Use |
|---|---|
| Every application to be its own separate copy, such as several independent bleeds | **Separate copies** |
| Each caster's poison to build up as stacks on its own, without mixing with another caster's | **Per originator** |
| One "Sunder Armor" on the target that everyone's attacks add to | **Global** |
| A buff that only refreshes when applied again | **Global** with **Max stacks** `1` and **Refresh on stack** on |

## Groups

Groups are about *different* effects that should not be active together: a paladin's Seals, the elixirs of an alchemist, food buffs. A group is a label you put effects in, and it can limit how many of its members are active at once. It can also make abilities and items share a [cooldown](/basic/keywords#cooldown).
Groups work in several editors, so they have a page of their own: [Groups](/basic/shared-systems/groups).

## See also

- [Effects](/basic/abilities-and-effects/effects)
- [Abilities](/basic/abilities-and-effects/abilities)
