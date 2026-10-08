# Pools and damage layers

A [`PoolDefinition`](/advanced/entity-stats/stats-and-pools/pool-definition) is the saved data of a pool. A [`PoolInstance`](/advanced/entity-stats/runtime/pool-instance) is one pool of one entity. Which pools an entity has is its [`StatsData`](/advanced/entity-stats/stats-and-pools/stats-data): two lists of pool ids, `health_pool_definitions` and `resource_pool_definitions`, and a `master_pool_id`.

## The instance

| Member | Meaning |
|---|---|
| `current_value` | The value of the pool (including overfill) |
| `overfill_current` | The amount above the maximum |
| `base_max_value` | The maximum from the `StatsData`, before stats |
| capacity bonus | What stat effects, level growth and equipment add to the maximum |
| effective max | `base + growth + capacity bonus` |
| generation rate and value | Copied from the definition, then changed per entity by pool modifier stat effects |

`get_pool_value(id, type)` answers `current`, `max` (includes the overfill capacity), `base_max`, `percentage`, `normal_percentage` or `overfill`.

### When the maximum changes

`StatsComponent._update_pool_effects(pool_id)` works out everything the stats do to one pool. It starts from the pool's own base each time, so it can run any number of times (a stat changed, combat started) without compounding. Pool modifier effects whose active trigger does not fit the combat state are skipped.

What happens to the **current** value when the maximum changes is a project setting, in the *Pools* group of the game settings:

| Setting | Used when | Choices |
|---|---|---|
| `capacity_change_rule` | Equipment, buffs or stats change the maximum | **Keep percentage** (the default: 60/100 with +50 becomes 90/150, and undoing it undoes the gain), **Add gain**, **Keep current**, **Full restore** |
| `level_up_capacity_rule` | The maximum grows because the entity levelled up | The same four. The default is **Add gain**: level-up health is there at once |

### Generation, decay and timers

Regeneration (`REGEN`) fills the pool up to its maximum, decay (`DECAY`) drains it down to 0, both by `gen_value` per tick and `gen_rate` ticks per second. Overfill has its own decay. They run on timers borrowed from the `ChronoManager` pool (300 timers), one per pool that regenerates or decays. `get_timer` returns `null` when none is free.

### Death

`StatsComponent._check_death_status` marks `is_dead` when the master pool is empty (or the entity has no pool), emits `master_pool_depleted`, and the mediator then calls `entity.entity_death()`. Any heal can revive: `take_healing` checks again after the pools are filled. `Entity.is_dead` and `StatsComponent.is_dead` are two flags.

The master pool is `StatsData.master_pool_id`; with none set it is the first health pool, and with no health pool the built-in Health. Use `StatsComponent.get_master_pool()` where code wants "the main health".

## Damage layers

Whether a pool takes damage is not decided by which list it is in. A pool takes damage through a [`DamageLayer`](/advanced/entity-stats/runtime/damage-layer):

| Member | Meaning |
|---|---|
| `priority` | Higher first. Equal priorities: the layer added last goes first |
| `ratio` | Damage absorbed per point of the pool. `0.5` = each point of mana absorbs 2 damage |
| `percent` | The share of the damage reaching the layer that it takes. The rest goes on |
| `max_damage_per_hit` | Per-hit cap (0 = none) |
| `damage_types` | The damage types the layer takes (empty = all) |
| `counts_as_mitigation` | What it absorbs is blocked damage, not damage taken |
| `source` | The effect that gave the layer, or `null` for a permanent one |

`StatsComponent` keeps them in `damage_layers` and offers `add_damage_layer`, `remove_damage_layer`, `remove_damage_layers_of_pool` and `get_ordered_damage_layers`.

**Permanent layers** come from the definition. `PoolDefinition` has a *Damage Layer* group (`absorbs_damage`, `absorption_priority`, `is_protective_pool`, `receives_healing`), and a pool added to an entity gets its layer from them. Removing the pool removes its layers.

**Temporary layers** come from effects. `AbsorbWithPoolEffect` gives a pool the target already has a layer while it lasts: a mana shield. Its settings are the pool, `percent`, damage per point, per-hit cap, damage types, counts as mitigation, priority (default 50: after shields, before health) and *ends when empty*. The pool itself is never created or removed. `AddHealthPoolEffect` ("Absorb Shield") adds a whole pool (the built-in Shield when none is chosen) and removes *its own* pool instance when it ends.

### Applying a hit

`_apply_damage_to_pools(damage, type, source, effect)` walks the ordered layers:

1. A layer that does not take the damage type is skipped.
2. It takes `min(damage x percent, max_damage_per_hit, pool value x ratio)`.
3. A mitigation layer adds to `result.absorbed`, others to `result.health_damage`.
4. What no layer takes is overkill.

A damage effect can hit protective pools harder with `protective_pool_multiplier` (an anti-shield strike).

### Healing

`_apply_healing_to_pools` fills only the pools with `receives_healing`, so over-healing does not fill a shield. Heal absorbs ([`HealAbsorbEffect`](/advanced/abilities-and-effects/effects-damage-and-healing/heal-absorb-effect)) are kept in `StatsComponent.heal_absorbs`, oldest first, and soak up healing before it reaches the pools; an absorb that is used up ends its effect.

## The built-in pools

`Database` creates the pools it needs when a project has none (like the core stats). The built-in **Health** has `Database.ID_HEALTH_POOL`, the built-in **Shield** `Database.ID_SHIELD_POOL` (1000002): protective, priority 100, starts empty, does not receive healing.

## Not saved

Temporary pools and layers made by effects are not saved. They come back when the effect is applied again on load.
