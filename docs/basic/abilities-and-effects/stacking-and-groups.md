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

### When the stacks are full

**When full** decides what a new application does once the effect has its **Max stacks**:

| Choice | What happens |
|---|---|
| **Refresh / reapply as set above** (default) | The application is accepted. The duration restarts if **Refresh on stack** is on, and the logic runs again if **Reapply on stack** is on. The stack count stays at the maximum |
| **Refuse** | Nothing happens: no refresh, no reapply. The application is reported as refused, so an ability or a script can tell. Use it for a debuff that must run out before it can be put on again |

### When the duration runs out

**When it runs out** is for effects that hold more than one stack:

| Choice | What happens |
|---|---|
| **Lose all stacks** (default) | The effect ends with its duration |
| **Lose one stack, restart the duration** | One stack goes, the effect carries on with the rest, and the duration starts again. Three stacks of a 5 second effect last 15 seconds in all, each stack weaker than the one before. The effect ends when the last stack goes |

A stat modifier is re-scaled by each stack that goes, like when a source leaves. An effect that ends by being removed (a dispel, death, a replacement) always ends with all its stacks.

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

## Why an effect ended

Every effect that ends has a **reason**, for the interface and for your own scripts: *expired* (the duration ran out), *dispelled* (a cleanse), *replaced* (pushed out by its group), *death* (the entity died), *used up* (its charges, uses or shield were spent, or it was consumed), *completed* (it did what it was for, such as a dash that arrived), *source left* (the caster died or left), or plain *removed*. A buff bar can fade a buff differently when it was dispelled, and a combat log can say so. Read it with `effect_instance.end_reason` when the effect ends (the `effect_ended` signal); [`EffectInstance.end_reason_text(reason)`](/advanced/abilities-and-effects/runtime/effect-instance) gives the words.

## Effects that apply each other

An effect that applies another effect (a composite, a proc, a conditional effect with else effects) can by mistake lead back to itself: A applies B and B applies A. The effect editor shows a red warning with the names when it finds this. If it happens anyway, the game stops it: only so many effects may start inside each other (**Max effect depth** in the [Gameplay Config](/basic/game-settings/gameplay-combat), default 16), and the next one is refused with a warning in the log.

## See also

- [Effects](/basic/abilities-and-effects/effects)
- [Abilities](/basic/abilities-and-effects/abilities)
