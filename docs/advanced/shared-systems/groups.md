# Groups: how they are built

A group is a [database](/advanced/data-and-database/) resource of the type `group` (`res://src/data/groups/<id>.tres`). Things that can be in a group store the **ids** of their groups in an `Array[int]` named `groups`. The [Basic guide](/basic/shared-systems/groups) explains the jobs a group does.

## The resource

[GroupDefinition](/advanced/shared-systems/groups/group-definition) extends `DatabaseResource` and holds the settings of all four jobs:

| Property | Job | What it is |
|---|---|---|
| `max_active` | Exclusive effects | How many effects of the group can be active at once within the scope. `0` = no limit (`is_exclusive()` is false) |
| `scope` | Exclusive effects | `TARGET`, `ORIGINATOR_ON_TARGET`, `ORIGINATOR` or `ITEM` |
| `when_full` | Exclusive effects | `REPLACE` (the oldest member goes) or `REFUSE` |
| `persists_through_death` | Exclusive effects | Whether a member stays on a target that dies |
| `shares_cooldown` | Shared cooldown | Does using a member put the others on cooldown? |
| `shared_cooldown_duration` | Shared cooldown | Seconds; `0` = the cooldown of the member that was used |
| `color` | Interface | Tint for the group in the editor |

## Who can be in a group

| Class | Property | Used for |
|---|---|---|
| `Effect` | `groups` | Exclusive effects; also what an effect that "ends after N uses" counts (`uses_filter_id`) |
| `AbilityDefinition` | `groups` | Shared cooldown; matching |
| `ItemDefinition` | `groups` | Shared cooldown of consumables; matching (ammo and reagents) |
| `StatDefinition` | `groups` | These are **stat groups**, a different resource (`StatGroupDefinition`), not these groups |

## Exclusive effects at runtime

[EffectGroupRules](/advanced/abilities-and-effects/runtime/effect-group-rules) holds the rules. `EffectInstance.start_effect` calls them before a grouped effect starts:

- `preview(effect, originator, entity)` answers without changing anything: `{refused, refused_by, replaces}`. Items and abilities use it so nothing is spent on a refused effect and the interface can say what would be replaced.
- `get_group_members(group, originator, entity)` finds the active effects that fill a slot of the group, by scope: on the target's effects for `TARGET` and `ORIGINATOR_ON_TARGET` (for the latter only those of the same originator, or with a stack from them), or on the originator's applied effects for `ORIGINATOR`. The scope `ITEM` is not counted here: `preview` skips it, because an enchant slot belongs to one item.
- `resolve(instance)` applies the answer: it returns `false` when a group refuses the effect, otherwise ends the effects it replaces. When a group is full the members are ordered by `time_started` and the oldest go first.

An effect in several groups must fit in every one of them: it replaces members of each group that is full, and is refused if any `REFUSE` group is full.

## Shared cooldowns at runtime

`AbilityComponent.start_group_cooldowns(group_ids, own_duration, source)` runs when an ability or consumable of a group is used. For every group with `shares_cooldown` it starts a timer (`group_cooldown_timers`), and calls `receive_shared_cooldown(duration)` on every other ability of the entity and every item in its inventory that is in the group. The length is `shared_cooldown_duration`, or `own_duration` when that is `0`.
`get_group_cooldown_remaining(group_ids)` gives the longest running time among a list of groups; abilities and items use it to refuse use while a shared cooldown runs.

## Matching

Ammo and reagent costs name a group (`AmmoCost`): an item is accepted when the group id is in its definition's `groups`. The weapon class names the ammo group, and the ammo items are in it.

## The class

<!-- classes:shared-systems/groups -->
| Class | What it is |
|---|---|
| [GroupDefinition](/advanced/shared-systems/groups/group-definition) | A group is a tag that effects, abilities and items can be in (several at once). |
<!-- /classes -->
