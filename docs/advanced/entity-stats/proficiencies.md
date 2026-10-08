# Proficiencies: how they are built

The [basic page](/basic/entity-stats/proficiencies) is about using them. This page is about the classes.

| Class | What it is |
|---|---|
| [`ProficiencyDefinition`](/advanced/entity-stats/definitions/proficiency-definition) | A `DatabaseResource` in the type `proficiency`, saved in `res://src/data/stats/proficiencies/` |
| [`ProficiencyTracker`](/advanced/entity-stats/runtime/proficiency-tracker) | A `RefCounted` that belongs to a `Player` (`player.proficiencies`) and holds its levels |
| [`RequirementProficiency`](/advanced/shared-systems/requirements/requirement-proficiency) | A requirement: a level in a proficiency |
| [`ProficiencyReward`](/advanced/shared-systems/rewards/proficiency-reward) | A reward: experience or levels |

## The definition

The settings, the same as in the editor: `max_level`, `starting_level`, `experience_formula`, `stat_id`, `points_per_level`, `weapon_types`, `armor_classes`, `schools`, `experience_per_use` and `minimum_seconds_between_gains`.

`experience_to_next_level(level)` is the experience from `level` to the next: the formula evaluated at `level`, at least 1, or `10 x (level + 1)` with no formula. `is_trained_by_weapon_type`, `is_trained_by_armor_class` and `is_trained_by_school` answer what trains it. `validate()` reports a maximum below 1, a starting level above the maximum and a stat that does not exist.

## The tracker

The tracker is made in `Player.initialize_entity` and listens to the signals of the player:

| Signal of the player | What it trains |
|---|---|
| `entity_hit_dealt(result)` | Weapon types. Only a hit that landed (`is_hit()`) and was a weapon attack (`_hit_uses_weapon`: a damage effect that uses the weapon damage type or has a weapon damage part; a hit with no effect behind it is not) while the player holds a weapon of the type |
| `entity_hit_received(result)` | Armor classes. Only a hit that landed and did damage, while the player wears equipment of the class (a weapon does not count) |
| `entity_ability_cast(ability, target)` | Schools, by `ability.get_ability_school()` |

Each use calls `_gain_from_use`, which honors `minimum_seconds_between_gains` (the time of the last gain is kept per proficiency, in milliseconds of the engine clock) and then `add_experience`.

| Method | What it does |
|---|---|
| `get_level`, `get_experience`, `get_experience_to_next` | The state. A proficiency the player never trained has its starting level |
| `add_experience(id, amount)` | Adds experience and levels up as far as it reaches. Returns the levels gained. Emits `experience_gained` and, for a change, `level_changed(id, new_level, old_level)` |
| `add_levels`, `set_level` | Whole levels. The experience towards the next level starts again |
| `get_known_ids` | The proficiencies with a saved level or experience |
| `sync_all_stats` | Puts the points of every proficiency on its stat |
| `to_save_data`, `load_save_data` | The save |

### The stat

`_sync_stat` keeps the points the proficiency gave in `_applied_points` and adds only the difference with `StatsComponent.add_stat_bonus`, so a level change, a set level and a load never count a point twice. `load_save_data` takes the old points back before it sets the saved levels. A proficiency with no `stat_id` only counts for requirements.

### Saving

`Player.to_save_data` writes the tracker under `"proficiencies"`: `{ "<id>": { "level": n, "experience": x } }`. `Player.from_save_data` gives it to the tracker, or keeps it until the tracker exists when a load comes before the player is set up.

## The requirement and the reward

`RequirementProficiency.check` reads `player.proficiencies.get_level`; any other entity has the starting level of the proficiency. It connects to `level_changed` in `connect_to_entity_signals` and emits `requirement_state_changed` so passive abilities and effects are asked again. `ProficiencyReward.apply_to_player` calls `add_experience` or `add_levels` and returns `{"success": true, "levels_gained": n}`. It cannot be undone.

The add dialogs of requirements and rewards show a picker for `proficiency_id` (`PROPERTY_SELECTORS` in `UnifiedResourceDialog`).

## Adding a source of experience

Add a field to `ProficiencyDefinition` for what trains it, a test method like `is_trained_by_school`, and a handler in the tracker connected to the signal of the player that fits (`setup`). Call `_gain_from_use(definition)` when it happens. For something that is not a signal of the player, call `add_experience` from your own code.

## Tests

`effect_types_audit` checks the levels, the experience, the stat points, the requirement, the reward, saving and loading, the school training with its minimum time, and the weapon attack test.
