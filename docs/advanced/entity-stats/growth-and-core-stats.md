# Growth, core stats and gain channels

Three things sit around the stat system proper: how stats grow with the level, the nine stats the engine itself reads, and the named **channels** through which stats change what an entity is given.

## Level growth

A stat or pool grows with the level of its entity through three fields (the same on [`StatDefinition`](/advanced/entity-stats/stats-and-pools/stat-definition), [`PoolDefinition`](/advanced/entity-stats/stats-and-pools/pool-definition) and [`GrowthOverride`](/advanced/entity-stats/stats-and-pools/growth-override)):

| Field | Meaning |
|---|---|
| `growth_formula` | A [`CalculationFormula`](/advanced/shared-systems/formulas). The input is the **levels gained**: `level - 1` |
| `growth_returns` | Optional [`DiminishingReturns`](/advanced/shared-systems/formulas) on the levels gained |
| `growth_max` | A ceiling on the total growth (0 = none) |

`calculate_growth(level, context)` returns `FormulaPipeline.growth_at(level, formula, returns, context, growth_max)`. The result is 0 without a formula.

The value of the stat is `(base + growth + bonus) x multiplier`, and the growth of a pool is added to its capacity.

### Overrides

`StatsData.growth_overrides` holds a `GrowthOverride` per stat or pool id. `StatsComponent.growth_of(definition, context)` is the one place that decides: the entity's override if it has one (**even an empty one, which stops the stat from growing for that entity**), else the definition's. `StatsData.remove_growth_override` goes back to the definition.

### When the level changes

`StatsComponent.set_level(new_level)` recomputes the growth and applies the `level_up_capacity_rule` of the game settings to the pools whose maximum grew. See [Pools and damage layers](/advanced/entity-stats/pools#when-the-maximum-changes).

## Core stats

Nine stats are read by the engine by id ([`StatsComponent.CoreStats`](/advanced/entity-stats/runtime/stats-component)). They are ordinary stats in every other respect: they have a definition in `res://src/data/stats/`, show in the Stats editor, and take formulas, growth, conditions and effects like any stat.

[`CoreStatDefaults`](/advanced/entity-stats/stats-and-pools/core-stat-defaults) lists them:

| Id | Stat | Default | Hidden |
|---|---|---|---|
| 1 | Movement Speed | 6 m/s | no |
| 2 | Attack Speed | 1x | no |
| 3 | Global Cooldown | 2 s | no |
| 4 | Weapon Speed | 3 s | yes |
| 5 | Cast Speed | 1x | no |
| 6 | Carry Weight | 50 | no |
| 7 | Sight Range | 12 m | no |
| 8 | Weapon Damage | 0 | yes |
| 9 | Weapon Damage Variance | 0 | yes |

`Database` creates the definition of any core stat that does not exist yet, the first time it is used (in the editor or when the game starts), so a project never has to author them and an older project gets them by itself. Once the file exists it is the project's: edit it freely, but keep the **id**, which the engine looks for. The ids 1 to 9 are reserved (`CoreStatDefaults.MAX_CORE_ID`); project stats get seven-digit ids.

Per entity, the **core stat overrides** of [`StatsData`](/advanced/entity-stats/stats-and-pools/stats-data) (`set_movement_speed_base` and the like) set the base value; `0` means "the definition's base value". `clear_core_stat_overrides` sets them all to 0.

The weapon stats (4, 8 and 9) are set by the equipped weapon, or by `StatsData` for an entity with an intrinsic weapon (a wolf's bite): `set_weapon_damage_variance`, `set_weapon_speed_base`, `has_any_weapon_stats`.

## Gain channels

A **gain channel** is a name for something an entity is given. [`GainChannels`](/advanced/entity-stats/stats-and-pools/gain-channels) lists the ones the toolkit asks about:

| Channel | The amount |
|---|---|
| `experience` | Experience points the player receives |
| `currency` | Gold from rewards: gold find |
| `loot_quantity` | The quantity of every item stack of loot a killer gets. A fraction is a chance of one more |
| `loot_rarity` | Magic find: raises the weight of the rarer-than-average entries of a loot table |
| `threat` | The threat a hit generates |
| `resource` | The resource an ability gains for its user (Rage, Combo ...) |
| `status_duration` | The duration of a status effect put on the entity: tenacity |

A project can use any other name from its own code.

```gdscript
var gold: float = player.components.stats().modify_gain(GainChannels.CURRENCY, 100.0)
var items: int = stats.modify_gain_int(GainChannels.LOOT_QUANTITY, 3, true)   # 1.2 items = 20 % chance of 2
```

`StatsComponent.modify_gain(channel, amount)` collects every [`GainModifierStatEffect`](/advanced/entity-stats/stat-effects/gain-modifier-stat-effect) of the entity's stats on the channel, and returns:

```
(amount + flat) x max(1 + percent / 100, 0) x factor      never below 0
```

The effect's calculation type says which of the three it adds to: **Add** and **Minus** to `flat`, the percentage types to `percent`, **Multiply** to `factor`. With no effect on the channel the amount comes back unchanged. `modify_gain_int` rounds to the nearest whole number; with `probabilistic` set, a fraction is a chance of one more.

Because channels are plain strings, a stat can change something without any system knowing which stat it is.

## Stat groups

A stat joins [`StatGroupDefinition`](/advanced/entity-stats/definitions/stat-group-definition)s in its `groups` array. [`StatGroupUtility`](/advanced/entity-stats/stats-and-pools/stat-group-utility) answers the questions the character sheet, the tooltips and the group-targeting effects ask: which stats are in a group, which section a stat is listed under, which stats are hidden. A group changes nothing about how a stat is calculated.
