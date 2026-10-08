# Proficiencies: how they are built

The [basic page](/basic/entity-stats/proficiencies) is about using them. This page is about the classes.

| Class | What it is |
|---|---|
| [`ProficiencyDefinition`](/advanced/entity-stats/definitions/proficiency-definition) | A `DatabaseResource` in the type `proficiency`, saved in `res://src/data/stats/proficiencies/` |
| [`ProficiencyTracker`](/advanced/entity-stats/runtime/proficiency-tracker) | A `RefCounted` that belongs to a `Player` (`player.proficiencies`) and holds its levels |
| [`RequirementProficiency`](/advanced/shared-systems/requirements/requirement-proficiency) | A requirement: a level in a proficiency |
| [`ProficiencyReward`](/advanced/shared-systems/rewards/proficiency-reward) | A reward: experience or levels |

## The definition

The settings, the same as in the editor: `max_level`, `starting_level`, `experience_formula`, `weapon_classes`, `weapon_types`, `armor_classes`, `schools`, `experience_per_use`, `minimum_seconds_between_gains`, `level_needed_to_equip`, `stat_effects` and `effects_need_matching_equipment`.

`experience_to_next_level(level)` is the experience from `level` to the next: the formula evaluated at `level`, at least 1, or `10 x (level + 1)` with no formula. `is_for_weapon(class_id, type_id)`, `is_trained_by_armor_class` and `is_trained_by_school` answer what a proficiency is for. `validate()` reports a maximum below 1, a starting level above the maximum, a gate above the maximum level (the equipment could never be worn), a gate with no equipment linked, the problems of its effects, and an inverted trigger (a hit chance).

### The hidden stat

The effects of a proficiency are the **effects of a hidden stat**. `get_virtual_stat()` makes a `StatDefinition` whose `stat_effects` is the same array as the proficiency's, whose group is Hidden and whose id is `StatDefinition.VIRTUAL_ID_BASE + id` (500 million and up, so it never meets a stat of the project). It is not saved and not in the cache `stat`. `Database.get_all_stat_definitions()` returns the stats and these hidden stats, and the places that build or read every stat use it: `StatsComponent._initialize_all_stat_instances` (every entity gets an instance, with 0 points), `CombatCalculations.build_universal_effect_orders` (so the modifiers of a proficiency take their place in the order of the [calculations](/advanced/entity-stats/pipeline)) and the Calculations editor (where their priority can be set, and saved with the proficiency). So every effect type, every filter and every condition works on a proficiency without a second implementation.

An inverted trigger on a hidden stat would roll a certain miss for every entity without the skill, so a hidden stat's trigger is skipped at 0 points (`StatDefinition.is_virtual()` in `CalculationBase._roll_triggers`) and `validate()` warns about it.

### Gating equipment

`ProficiencyDefinition.requirements_for_item(item)` returns a `RequirementProficiency` for every proficiency with `level_needed_to_equip > 0` that lists the weapon class or weapon type of a weapon, or the armor class of an armor piece. `ItemDefinition._get_combined_requirements` appends them to the requirements of the item, so equipping (`EquipmentInventoryComponent.equip_item_to_slot`), tooltips and the failure message all see them. Only players are checked.

## The tracker

The tracker is made in `Player.initialize_entity` and listens to the signals of the player:

| Signal of the player | What it does |
|---|---|
| `entity_hit_dealt(result)` | Trains weapon classes and types. Only a hit that landed (`is_hit()`) and was a weapon attack (`_hit_uses_weapon`: a damage effect that uses the weapon damage type or has a weapon damage part; a hit with no effect behind it is not) while the player holds a weapon of the class or type |
| `entity_hit_received(result)` | Trains armor classes. Only a hit that landed and did damage, while the player wears equipment of the class (a weapon does not count) |
| `entity_ability_cast(ability, target)` | Trains schools, by `ability.get_ability_school()` |
| `equipment_changed` | Puts the points of every proficiency on its hidden stat again |

Each use calls `_gain_from_use`, which honors `minimum_seconds_between_gains` (the time of the last gain is kept per proficiency, in milliseconds of the engine clock) and then `add_experience`.

| Method | What it does |
|---|---|
| `get_level`, `get_experience`, `get_experience_to_next` | The state. A proficiency the player never trained has its starting level |
| `add_experience(id, amount)` | Adds experience and levels up as far as it reaches. Returns the levels gained. Emits `experience_gained` and, for a change, `level_changed(id, new_level, old_level)` |
| `add_levels`, `set_level` | Whole levels. The experience towards the next level starts again |
| `get_active_points(id)` | The points the hidden stat gets now: the level, or 0 when `effects_need_matching_equipment` is on, the proficiency has weapons or armor, and the player holds or wears none of them |
| `get_known_ids` | The proficiencies with a saved level or experience |
| `sync_all_stats` | Puts `get_active_points` on every hidden stat, adding only the difference |
| `to_save_data`, `load_save_data` | The save |

### Saving

`Player.to_save_data` writes the tracker under `"proficiencies"`: `{ "<id>": { "level": n, "experience": x } }`. `Player.from_save_data` gives it to the tracker, or keeps it until the tracker exists when a load comes before the player is set up. `load_save_data` takes the points it gave back before it sets the saved levels, so a load never counts a point twice.

## The requirement and the reward

`RequirementProficiency.check` reads `player.proficiencies.get_level`; any other entity has the starting level of the proficiency. It connects to `level_changed` in `connect_to_entity_signals` and emits `requirement_state_changed` so passive abilities and effects are asked again. `ProficiencyReward.apply_to_player` calls `add_experience` or `add_levels` and returns `{"success": true, "levels_gained": n}`. It cannot be undone.

The add dialogs of requirements and rewards show a picker for `proficiency_id` (`PROPERTY_SELECTORS` in `UnifiedResourceDialog`).

## The editor

`ProficienciesEditor` builds its two columns in code under the base editor of a database resource: sections at the left (`StatPropertyFields` rows, the shared formula picker, id lists), the stat effects at the right as `StatEffectPropertyEditor` panels with the shared "add stat effect" dialog (`StatPropertyFields.show_add_stat_effect_dialog`, also used by the Stats editor).

Long lists of ids (abilities, effects, weapon classes) are picked from the catalog: `StatPropertyFields.add_id_checklist` turns into `add_id_picker` for the databases in `CATALOG_TYPES` and for any database with more than `CATALOG_FROM_ENTRIES` entries, using `ListCatalog.open_for(type)`; the game editor gives it the dialog manager once (`StatPropertyFields.dialog_manager`).

## Adding a source of experience

Add a field to `ProficiencyDefinition` for what trains it, a test method like `is_trained_by_school`, and a handler in the tracker connected to the signal of the player that fits (`setup`). Call `_gain_from_use(definition)` when it happens. For something that is not a signal of the player, call `add_experience` from your own code.

## Tests

`effect_types_audit` checks the levels, the experience, the hidden stat and its points, what the level does to damage, the equipment setting, the gate on a weapon of a linked type, the requirement, the reward, saving and loading, the school training with its minimum time, and the weapon attack test. `editor_tabs_check` checks that the editor shows the fields and the effects.
