# Entity Stats: how they are built

The [Entity Stats chapter](/basic/entity-stats/) is about what stats do. This section is about how the code does it. Every class below has its own page, written from the comments in the code.

## The pieces

| Piece | Where it lives | Class |
|---|---|---|
| A stat | The **database** (`DatabaseResource`, `stat`) | [`StatDefinition`](/advanced/entity-stats/stats-and-pools/stat-definition) |
| A pool | The database (`pool`) | [`PoolDefinition`](/advanced/entity-stats/stats-and-pools/pool-definition) |
| What a stat does | The `stat_effects` array of a stat | A child of [`StatEffect`](/advanced/entity-stats/stat-effects/stat-effect) |
| What an entity starts with | `StatsData` of a class, NPC or destructible | [`StatsData`](/advanced/entity-stats/stats-and-pools/stats-data) |
| The numbers of one entity | A node component | [`StatsComponent`](/advanced/entity-stats/runtime/stats-component) |
| One stat of one entity | Inside the component | [`StatInstance`](/advanced/entity-stats/runtime/stat-instance) |
| One pool of one entity | Inside the component | [`PoolInstance`](/advanced/entity-stats/runtime/pool-instance) |
| A hit, worked out | Made for every hit | [`DamageResult`](/advanced/entity-stats/combat/damage-result), [`HealingResult`](/advanced/entity-stats/combat/healing-result) |
| The four calculations | Built once per game | [`CombatCalculations`](/advanced/entity-stats/calculations/combat-calculations) |
| A skill of the player | The database (`proficiency`), levels in the player | [`ProficiencyDefinition`](/advanced/entity-stats/definitions/proficiency-definition), [`ProficiencyTracker`](/advanced/entity-stats/runtime/proficiency-tracker) |

Everything the generated class pages list is in `addons/chroniclenode/data_classes/stats/` (data) and `runtime_classes/` (`entity/components/stats/` and `combat/`).

## Data and runtime

The same split as the rest of the toolkit: a **definition** is a saved resource that is shared and never changes while the game runs, an **instance** belongs to one entity and holds the numbers that change.

```
StatDefinition  --(one for every stat in the database)-->  StatInstance  (base, bonus, multiplier, growth)
PoolDefinition  --(only the pools the entity's StatsData names)-->  PoolInstance  (current, capacity, overfill)
StatsData       (starting values of one class or NPC; read, never changed, shared by all entities of the definition)
```

## How a `StatsComponent` is built

`StatsComponent.setup_from_stats_data(data)` runs once when the entity starts. The data comes from the placed entity's own `stats_override`, else the NPC definition, else the player's class.

1. The `ImmunityComponent` and `StatusEffectComponent` are made and their signals connected.
2. **Pools.** The master pool id, then one `PoolInstance` for each health pool and resource pool, with the base values from the `StatsData`.
3. **One `StatInstance` for every stat in the database**, whether the entity "uses" it or not. A stat with 0 points does nothing.
4. The `StatsData` is applied: the base value and active flag of each stat, the weapon stats, the core stat overrides, the growth overrides.
5. Permanent immunities are switched on.
6. Pool capacity and regeneration are worked out from the stat effects, and the cached multiplier effects are applied.

`EnvironmentalEffects` builds a component with `setup_from_stats_data(null)`: no pools and the default core stats.

## The value of a stat

```
total = clamp((base + growth + bonus) x multiplier, min_value, max_value)
```

| Part | Written by |
|---|---|
| `base` | `StatsData` at spawn, the *Set base* stat modifier effect |
| `growth` | `StatDefinition.calculate_growth(level)`, or the entity's [`GrowthOverride`](/advanced/entity-stats/stats-and-pools/growth-override) |
| `bonus` | Equipment, the *Add* stat modifier effect, the multiplier stat effects of other stats |
| `multiplier` | Starts at 1.0. Effects add to it |

The result is limited by `min_value` and `max_value` (no negatives unless `allow_negative_values`), and is rounded last, after the multiplier, with `decimal_places` for floats.

Details in [Growth, core stats and gain channels](/advanced/entity-stats/growth-and-core-stats).

## What the pages cover

| Page | Contents |
|---|---|
| [Stat effects: how they work](/advanced/entity-stats/stat-effects) | The base class, the nine types, how each is consumed, and how to write your own |
| [The hit and heal pipeline](/advanced/entity-stats/pipeline) | From `CombatManager.apply_damage` to the pools, phase by phase |
| [Pools and damage layers](/advanced/entity-stats/pools) | Capacity, generation, overfill, damage layers, heal absorbs |
| [Growth, core stats and gain channels](/advanced/entity-stats/growth-and-core-stats) | Level growth, overrides, the nine core stats, gain channels |
| [Tags & Groups: how they are built](/advanced/entity-stats/tags-and-groups) | Damage types, schools, trigger tags, entity tags, immunities, stat groups |
| [Proficiencies: how they are built](/advanced/entity-stats/proficiencies) | Levels, experience from use, the stat, requirement and reward |

## Signals

The signals worth knowing, all on `StatsComponent`:

| Signal | When |
|---|---|
| `damage_incoming` | A hit is about to be worked out on the entity |
| `damage_taken` | A hit reached the pools, with the damage that reached health |
| `pool_value_changed`, `pool_depleted` | A pool changed or ran out |
| `school_effect_blocked_by_immunity` | A school immunity refused an effect (the `ImmunityComponent` also has `damage_blocked_by_immunity` and `status_effect_blocked_by_immunity`) |
| `master_pool_depleted` | The master pool is empty: the entity dies |

`CombatManager` announces every resolved hit and heal with `damage_pipeline_completed` and `healing_pipeline_completed`, and the entities with `entity_hit_dealt`, `entity_hit_received`, `entity_heal_dealt`, `entity_heal_received`.

## Tests

The `stats_audit` suite checks the whole system with the real player (160 checks), and the `effect_types_audit` suite the effects that use it.
