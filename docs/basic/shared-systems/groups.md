# Groups

<Shot name="groups-editor" caption="The Groups editor (Types & Groups > Groups)." />

A **group** is a label that effects, abilities and items can be part of, several at once. You make groups in **Types & Groups > [Groups](/basic/types-and-groups/groups)**, and then put things in them with the **Groups** field of the [Effects](/basic/abilities-and-effects/effects#groups-and-requirements) editor,
the [Abilities](/basic/abilities-and-effects/abilities#groups) editor and the Items editor. A group does up to four jobs, and you switch on the ones you need.

## Exclusive effects

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

## Shared cooldown

| Field | What it does | Default |
|---|---|---|
| **Shares cooldown** | Using any ability or consumable in the group puts all the others in the group on [cooldown](/basic/keywords#cooldown) | off |
| **Shared cooldown duration** | How long that cooldown is. `0` uses the cooldown of the member that was used | `0` |

This is how potions share a cooldown. Put an ability in a group with the **Groups** field of the [Abilities editor](/basic/abilities-and-effects/abilities#groups), and an item in the group in the Items editor.

## Matching

Abilities, items and effects can name a **group** instead of a single thing:
- an ability that spends ammo can use "any item of the Arrows group";
- an effect that ends after a number of uses can count "abilities in this group".

## Enchant slots

With the scope **Item**, a group is a slot on one item: a permanent enchant slot, a temporary coating slot. Each item can hold one effect of the group in each slot.

## The demo groups

The demo has these groups to look at: **Seal**, **Blessing**, **Well Fed**, **Battle Elixir**, **Guardian Elixir**, **Potion**, **Enchant** and **Arrows**.

## Where groups are used

| Editor | What the **Groups** field does |
|---|---|
| Effects | Puts the effect in the group, for the exclusive-effects job. An effect that ends after a number of uses can also count the abilities of a group |
| Abilities | Puts the ability in the group, for the shared cooldown and for matching |
| Items | Puts the item in the group: a consumable shares its cooldown, an ammo item is "any arrow" for a weapon that names the Arrows group |

## See also

- [Stacking and groups](/basic/abilities-and-effects/stacking-and-groups): what happens when the same effect is applied again.
- [Groups: how they are built](/advanced/shared-systems/groups) (Advanced)
