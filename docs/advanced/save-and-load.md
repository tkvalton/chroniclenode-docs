# Save and load

A save is **one JSON file** that holds the state of every system that changes while you play. The code is in `SaveLoadUtil` (`runtime_classes/utility/save_load_util.gd`), a static class that asks each system for its state when saving, and hands the state back in a careful order when loading.

The files are in `user://saves/<name>.json`. **Definitions are never saved**: a save holds *ids* and *what changed* (a rank, a time left, a position), never a copy of an ability or an item. A change you make to a definition therefore reaches old saves. See [Definitions and instances](/advanced/definitions-and-instances).

## The file

```json
{
  "version": "1.0",
  "timestamp": 1790000000,
  "chrono_manager":   { "game_time": 14.5, "total_game_hours": 130.5, ... },
  "world_container":  { "current_world_id": ..., "fog_exploration_cache": ..., "persistent_worlds": { ... } },
  "party_manager":    { "players": [ ... ], "reserve_players": [ ... ], "current_player_unique_id": 1, ... },
  "combat_manager":   { world effects that are running },
  "event_manager":    { events, quests, quest lines, global variables },
  "faction_manager":  { reputation },
  "crafting_manager": { skill levels, known recipes, active crafts }
}
```

| Section | Written by | What it keeps |
|---|---|---|
| `chrono_manager` | `ChronoManager.to_save_data` | The time of day, the **running clock** (`total_game_hours`, which never wraps), the day length and speed |
| `world_container` | `WorldContainer.to_save_data` | The id of the current world; the **world states** by id (`persistent_worlds`): the current world exactly as it is, and the worlds the party left that remember something; the explored fog (as base64 images) |
| `party_manager` | `PartyManager.to_save_data` | The next player id, the party size, who is in control, who is in combat, every member (`players`) and the companions in the reserve (`reserve_players`) |
| `combat_manager` | `CombatManager.save_data` | World effects that are running (areas, auras without an owner) |
| `event_manager` | `EventManager.to_save_data` | See [Events & Quests](/advanced/events-and-quests/#saving) |
| `faction_manager` | `FactionManager.to_save_data` | The standings between factions |
| `crafting_manager` | `CraftingManager.to_save_data` | The party's crafting |

### A world state

Each entry of `persistent_worlds` is what `_build_world_save_data` made: the id, the `exit_timestamp` (for a timed reset) and the **objects** of `ObjectRegistry.to_save_data`:

- `placed_entities`: for each NPC placed in the scene, its unique id and its state (`NPC.to_save_data` on top of `Entity.to_save_data`: position and rotation, the stats and pools, the effects, the abilities, the movement and action states, the equipment and inventory (which holds the loot), its target, its threat table, its conversation or vendor state, and whether it is dead or counting down to a respawn);
- `dynamic_entities`: NPCs that were spawned while playing, with the id of their definition (they are made again on load);
- `placed_interactables`, `dynamic_interactables`: the same for objects (open or closed, locked, health, the contents of a container);
- `placed_encounters`: the state and active flag of each encounter.

### A player

`Player.to_save_data` (on top of `Entity.to_save_data`): the character (`character_definition_id`, or for a character the player made `is_custom_character` with `custom_character_data`), the **slot** it has in the party, level and experience, position and rotation, whether it is dead or in combat, its faction, the stats and pools (`StatsComponent.to_save_data`), the effects with their remaining time, the abilities with their cooldowns and charges, the inventory and equipment (`ItemInstance.to_save_data` keeps the stack, charges, enchantments, sockets, durability), the skill trees (ranks and applied rewards), the skill point pools, the proficiencies, the equipment slots that are unlocked, the action bar, the follow and attack stances of a companion, the rewards waiting for room in the bag, and its `meta_data`.

## Saving

`SystemHub.save_game(name)` calls `SaveLoadUtil.save_game(hub, name)`: it makes sure `user://saves` exists, builds the dictionary (`_build_save_data`) and writes it with `JSON.stringify`. Before the world container builds its part, the current world is captured **as it is** whatever its persistence logic. `auto_save()` saves as `autosave`, and only when the party is not in combat. The pause menu calls it when the player goes to the main menu or quits; the load/save menu and the debug panel call `save_game` with a name.

Things to remember when you write your own `to_save_data`:

- JSON has no integers, no `Vector3`, no objects. Numbers come back as floats, dictionary keys as strings, vectors must be arrays. **Convert on load** (`int(...)`), and never store a resource: store its id (or its index in a list, as the skill trees do for rewards).
- Save **state**, not configuration. If the definition can supply it, do not write it.
- Do not save anything that is rebuilt by something else (VFX, timers, audio players).

## Loading

Loading is split into phases because objects depend on each other: NPCs need players to exist, effects need their originators, and a state may only be restored once everything it refers to exists. `TransitionManager.load_saved_game` runs these setup steps (see [Game host](/advanced/game-host)):

| Phase | Where | What |
|---|---|---|
| **1. Systems** | `create_player_entities_from_save` | `ChronoManager`, `FactionManager` and the `WorldContainer` caches (the world states, the fog) are restored. They have no entity dependencies. Factions come before any entity exists, so NPCs spawn with the right attitudes |
| **2. Players** | same | The party is cleared and every member and reserve companion is **created** (`_restore_party_entities_only`), with no state. A custom character is rebuilt from its saved choices (`_recreate_custom_character_definition`: find the profile by id, apply the snapshot) |
| **3. World** | `TransitionManager` | The saved world id is read (`get_world_id_from_save`) and the world scene is loaded, which registers its placed objects |
| **4. World objects** | `restore_all_state_from_save` | `ObjectRegistry.from_save_data`: placed NPCs and objects take their saved state, those that are not in the save are removed, dynamic ones are spawned again, encounters take theirs |
| **5. Players' state** | same | `Player.from_save_data` for each member: now every possible originator and target exists |
| **6. The rest** | same | `CombatManager.load_data` (needs all originators), `EventManager.from_save_data` (which first resets everything to a new game and then puts the save on top), `CraftingManager.from_save_data` |

`SaveLoadUtil.load_game` runs all six in one call. It is the older path and the Transition Manager uses the split version.

### After a load

The event manager does not announce again what had happened. A `GameStart` trigger does not fire again. World objects keep what the world's persistence rule says (see [World](/advanced/world/#persistence)). If a load finds no player after waiting 25 seconds (a missing or broken file) the game ends in an empty world.

## The rules of the Gameplay Config

The *Save/Load Rules* (`allow_manual_save`, `allow_save_during_combat`, `max_save_slots`, `save_directory`, `save_on_area_transition`) are stored in the `GameplayConfig` but **nothing reads them yet**: the directory is the constant `SAVE_FILE_PATH`, `auto_save` is the only save that checks combat, and a menu can write any number of slots. If you need a rule, check it where you call `save_game`.

## Helpers

| Function | Does |
|---|---|
| `save_file_exists(name)`, `delete_save_file(name)` | As they say |
| `get_save_file_list()` | The names (without `.json`) of the files in the folder |
| `get_world_id_from_save(name)` | The world id of a save without loading it (`-1` if unreadable) |

## Extending

To save a new system: give it `to_save_data()` and `from_save_data(data)`, add its key to `_build_save_data`, and restore it in the right phase of `_restore_save_data` **and** of `restore_all_state_from_save` (the two paths must stay equal). Ask whether it depends on entities (then phase 5 or 6) or not (phase 1). Add a `version` check if you change a format: `"version": "1.0"` is written but not yet read.

## See also

- [Game host](/advanced/game-host), [World: persistence](/advanced/world/#persistence), [Definitions and instances](/advanced/definitions-and-instances).
