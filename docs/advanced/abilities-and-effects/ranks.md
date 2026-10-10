# Ability ranks: how they are built

The [Ability Ranks](/basic/abilities-and-effects/ability-ranks) chapter explains the options. This page explains the code.

## The pieces

| Class | What it is |
|---|---|
| [`AbilityDefinition`](/advanced/abilities-and-effects/abilities/ability-definition) | `max_rank` (1 = no ranks), `rank_properties`, `has_ranks()` |
| [`AbilityRankProperty`](/advanced/abilities-and-effects/abilities/ability-rank-property) | One number a rank changes: a property, a calculation type and a formula of the ranks above the first |
| [`AbilityInstance`](/advanced/abilities-and-effects/runtime/ability-instance) | `trained_rank`, `get_rank()`, `get_rank_bonus()`, `set_rank`, `rank_up`, `can_rank_up`, the signal `rank_changed(instance, old, new)`, `get_rank_entries(property)` |
| [`AbilityComponent`](/advanced/abilities-and-effects/runtime/ability-component) | The rank **bonuses**: `add_rank_bonus`, `remove_rank_bonus`, `get_rank_bonus_for(definition)`, and `refresh_npc_ranks()` |
| [`AbilityRankEffect`](/advanced/abilities-and-effects/effects-ability/ability-rank-effect) | An effect that adds a rank bonus while it lasts |
| [`AbilityRankReward`](/advanced/shared-systems/rewards/ability-rank-reward), [`AbilityReward.initial_rank`](/advanced/shared-systems/rewards/ability-reward) | Training and starting ranks |
| [`RequirementAbilityRank`](/advanced/shared-systems/requirements/requirement-ability-rank) | A requirement of an effect on the rank of its ability |
| [`AmountSource.Kind.ABILITY_RANK`](/advanced/abilities-and-effects/effects-amount/amount-source), `USER_LEVEL`, `SOURCE_ITEM_LEVEL` | Amount parts that read the rank, the user's level, the item level |
| [`NPCDefinition.ability_ranks`](/advanced/entities/definitions/npc-definition), `ability_rank_formula` | The ranks of an NPC's abilities |

## The rank

`get_rank()` = `clamp(trained_rank, 1, max_rank)` + the bonus from the component (never under 1). The **bonus can take the rank over `max_rank`**: gear that raises skills is meant to. `trained_rank` is what was trained; it is saved in the ability's save data (`"rank"`, clamped to `max_rank` when loaded, 1 in an old save). `set_rank` emits `rank_changed` with the effective ranks before and after.

### Bonuses

`AbilityComponent._rank_bonuses` holds `{source, bonus, ability_ids, group_ids, school_ids, all}`. `get_rank_bonus_for(definition)` adds up the sources that match the ability: by id, by one of its groups, by its school (active abilities), or all. It is asked **live** each time the rank is read, so an ability learned later is covered, and removing a source needs nothing but `remove_rank_bonus(source)`. Adding or removing a source announces `rank_changed` on the abilities whose bonus changed (`notify_rank_bonus_changed`). `AbilityRankEffect` registers the effect instance as the source in `specific_effect_logic` and removes it in `on_apply_finished` / `_on_apply_cancelled`.

## What a rank changes

### The numbers of an ability

`AbilityInstance._stat_entries(property)` (what cooldown, cost and gain read) and the strategy instances' `apply_modifiers` (cast time, range, channel time ...) add **rank entries** to the entries they already take from the user's stats: `get_rank_entries(property)` is `{"source", "property", "calculation", "value"}` for each `AbilityRankProperty` of the definition with that property name, valued at the current rank. They go into [`PropertyModifierSet.resolve`](/advanced/abilities-and-effects/runtime/property-modifier-set) with the other modifiers: flat adds first, then percentages, then factors, then a set value (the order of a modifier set).

`AbilityRankProperty.value_at(rank, user)` puts `rank − 1` through the formula (Linear 1 when it has none); a *Multiply* result is applied as `1 + result`. The property names are the ones the modifiers use: `cooldown_duration`, `cost_amount`, `gain_amount`, `cast_duration`, `channel_duration`, `channel_tick_rate`, `max_range`, `drain_per_second`, `combo_timeout`.

A rank at 1 adds no entries at all, so an ability that has no ranks pays nothing.

### The amounts and requirements of effects

`AmountSource` kinds read `effect_instance.effect_owner`: an `AbilityInstance` (set when an ability uses the effect) gives the rank, an [`ItemInstance`](/advanced/items/runtime/item-instance) gives the item level. [`Effect.check_requirements(entity, context)`](/advanced/abilities-and-effects/effects-base/effect) and [`Requirement.check_in_context(entity, context)`](/advanced/shared-systems/requirements/requirement) pass [`EffectInstance.get_requirement_context()`](/advanced/abilities-and-effects/runtime/effect-instance): `{"ability_rank": n}` for the effects of an ability, `{"item_level": n}` for those of an item. A requirement that does not ask about the context ignores it, and `RequirementAbilityRank` is met when there is no rank to ask.

## NPCs

`NPCDefinition.get_ability_rank(ability_id, level)`: the listed rank, else `1 + floor(formula(level − 1))`, else 1. `AbilityComponent.refresh_npc_ranks()` sets every ranked ability of the NPC from it. [`Entity.current_level`](/advanced/entities/runtime/entity)'s setter calls it for an NPC, so it runs when the NPC is made (after its abilities exist) and whenever its level changes (a rescale, a respawn).

## Skill trees

A ranked node gives rewards per rank. `AbilityRankReward.apply_to_player` finds the ability (or grants it at rank 1 when *Grant if missing*), calls `rank_up(ranks)` and returns `{ability_instance, ranks_added, granted}`; `unapply_from_player` lowers the rank by what was added (or removes an ability it granted). `should_apply_on_load()` is true: the skill tree applies its rewards again after a load, because the abilities it grants are `STATEFUL` and made again at rank 1. Do not put a rank reward on an ability that is saved with its own rank (`PERSISTENT`, from a quest) **and** in a tree: it would count twice.

## Tooltip

`tooltip_ability.gd` `_setup_rank_info` adds "Rank: 2 / 5 (+1)" and, when `can_rank_up()`, "Next rank:" with `AbilityRankProperty.describe_step(rank, rank + 1)` for each rank property.

## Pitfalls

- A cast already running keeps the cast time it started with: ranks are read when a number is read.
- `max_rank` lowered after a save: the saved rank is clamped when loaded.
- A passive ability has ranks too (its effects read them), but it has no cooldown or cost for a rank property to change.
