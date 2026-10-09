# World: how it is built

The [World chapter](/basic/world/) explains the editors. This page is the map of the code: what a world is made of, what happens when one is loaded, and how it is remembered. The other pages of this section cover the editor tools ([Add Object](/advanced/world/add-object), [the Unique Object tool](/advanced/world/unique-object-tool)) and the two placed object types that need a runtime of their own ([Regions](/advanced/world/regions), [Encounters](/advanced/world/encounters)).

## The pieces

| Class | What it is | Where |
|---|---|---|
| [`WorldData`](/advanced/world/world-data/world-data) | The **definition** of a world: a database resource (type `world`) with the scene path, persistence, audio, weather and config overrides | `data_classes/world/` |
| [`WorldScene`](/advanced/world/runtime/world-scene) | The root node of the scene of a world. Holds the `WorldData`, the party spawn, the respawn points, the terrain provider and the minimap and preview generators | `runtime_classes/world/` |
| [`WorldContainer`](/advanced/world/runtime/world-container) | A node of the [game host](/advanced/game-host). Loads and unloads worlds, remembers them, applies their environment, positions the party | |
| [`ObjectRegistry`](/advanced/world/runtime/object-registry) | A `RefCounted` that knows every NPC, interactable, region and encounter of the loaded world, saves and restores them, and runs the level of detail | |
| `UniqueEntityData`, `UniqueInteractableData`, `RegionData`, `UniqueEncounterData` | The **uniques**: one database resource per placed object (types `unique_entity`, `unique_interactable`, `region`, `unique_encounter`) | `data_classes/world/` |
| [`Region`](/advanced/world/runtime/region), [`Encounter`](/advanced/world/runtime/encounter) | The nodes of the two objects that are not entities | `runtime_classes/world/` |
| `WeatherSystem`, `WorldSun`, `WorldSkyEnvironment`, the fog system | The look of the world | |

A world is a [definition and an instance](/advanced/definitions-and-instances) in the usual sense: `WorldData` is the shared, never-changed definition; what the party did in it (dead NPCs, open chests) is the state the container keeps.

## Loading a world

`WorldContainer.load_world(system_hub, world_data, pending_spawn_override, loading_screen)`:

1. Refuses if a load is already running or the data has no scene.
2. **`unload_current_world()`**: captures what the world remembers (see below) into a cache, then frees the scene and clears the registry.
3. Loads the scene (with the loading screen), adds it to the container and waits for `world_scene_ready`, so collision and physics exist.
4. Registers the objects: `WorldScene` collects the nodes of its containers (`Entities`, `Interactables`, `Regions`) and the registry registers each one by its unique id. An NPC placed in the scene is `placed_*`; one spawned while the game runs is `dynamic_*`.
5. Restores what the world remembered, if the party is arriving by a swap (a loaded game restores in phase 4 of the load instead).
6. Sets up the **fog of war** for the world and restores its explored image.
7. Positions the party (`_position_party_at_spawn`), by priority: the pending **spawn override** (a rabbit hole id, or an exact position and rotation), else the `party_spawn` marker.
8. Applies the **environment**: time, sun, sky and environment configs (the override of the world, else the project default), through `SystemHub.apply_environment_configs`. The running game clock is not set back; only a *different* time config moves the time of day. A new game sets the clock itself.
9. Starts the **default weather** (`WeatherSystem.start_world_weather`) and activates the NPC behaviors if the party exists.
10. Emits `world_loading_finished`.

The spawn override is a dictionary: `{"type": "rabbit_hole", "id": <unique id of the interactable>}` or `{"type": "position", "pos": Vector3, "rot": Vector3}`. An id the world does not have falls back to the party spawn with a warning.

## Persistence

`WorldData.persistance_logic` decides what the container keeps when the party **leaves**:

| Logic | The cache entry | Saved to a file |
|---|---|---|
| `PERSISTANT` | kept | yes |
| `INSTANCE` | none (only the interactables with `allow_partial_persistence`) | no |
| `TIMED_RESET` | kept with an `exit_timestamp`; forgotten when `total_game_hours - exit_timestamp` in seconds reaches `reset_duration` | yes |
| `SESSION_ONLY` | kept in `session_worlds_cache` | no |

`_get_saved_world_state` decides on return; with `allow_partial_persistence` the world's interactables are kept in the cases where the rest starts over. The clock is `ChronoManager.total_game_hours`, the running hours that never wrap. `to_save_data` always saves the world the party is **in**, exactly as it is, whatever its logic. `reset_session_state()` (called by the new-game cleanup of the `TransitionManager`) empties the caches and the fog cache.

## The registry

`ObjectRegistry` keeps `placed_*` dictionaries by unique id and `dynamic_*` lists. It:

- registers and unregisters objects, and notices when one leaves the tree (a freed node unregisters itself);
- creates a **behavior controller** for each NPC (`register_controller`) and, every `lod_optimization_interval`, moves a batch of NPCs between **level of detail** levels by their distance from the party (`HIGH_DETAIL` to `CULLED`, thresholds and intervals in the Gameplay Config);
- spawns (`spawn_npc`, `spawn_pet`, `spawn_interactable`, `spawn_dynamic_entity`);
- saves (`to_save_data`: placed objects by unique id with their state, dynamic ones with their definition id and position) and restores (`from_save_data`). A placed NPC that is not in the save is removed from the scene; a dynamic one is made again from its definition.

Encounters and regions are registered for lookup (`get_encounter`, `get_region`) but not saved: an encounter's members are NPCs and are saved as NPCs.

The registry hooks the party for the [NPC level scaling](/advanced/entities/) rules: when the party's levels change, living NPCs rescale (see `NpcLevels`).

## Extending

| You want | Do |
|---|---|
| **A new kind of placed object** | A node that creates its own unique data in the editor (see `Region` and `Encounter`: a `_check_and_create_*` on enter, a sync on `scene_pre_save`, a cleanup on delete), is registered by `ObjectRegistry` (`register_*`), and is collected by `WorldScene`. Add a choice to `AddObjectToolbarManager` |
| **A new world config field** | Add an `@export` to `TimeConfig`, `SunConfig`, `SkyConfig` or `EnvironmentConfig`; the config editor builds its fields from the exports, and groups with `@export_group`. Apply it in `ChronoManager`, `WorldSun` or `WorldSkyEnvironment` |
| **A new spawn override** | Add a `match` branch to `WorldContainer._apply_gameroot_spawn_override` |
| **A new persistence rule** | `WorldContainer._get_saved_world_state` and `_capture_current_world_state` |

## The classes

### World data

<!-- classes:world/world-data -->
| Class | What it is |
|---|---|
| [RegionData](/advanced/world/world-data/region-data) | Map this region belongs to |
| [UniqueEncounterData](/advanced/world/world-data/unique-encounter-data) | UniqueEncounterData defines both the behavior AND unique instance data for an encounter. |
| [UniqueEntityData](/advanced/world/world-data/unique-entity-data) |  |
| [UniqueInteractableData](/advanced/world/world-data/unique-interactable-data) |  |
| [WorldData](/advanced/world/world-data/world-data) | Pure data storage for world information Contains only world metadata, spawn points, and references to unique objects |
<!-- /classes -->

### World configs

<!-- classes:world/world-configs -->
| Class | What it is |
|---|---|
| [EnvironmentConfig](/advanced/world/world-configs/environment-config) | Configuration for Environment visual settings |
| [SkyConfig](/advanced/world/world-configs/sky-config) | Configuration for the sky shader appearance |
| [SunConfig](/advanced/world/world-configs/sun-config) | Configuration for the directional sun light |
| [TimeConfig](/advanced/world/world-configs/time-config) | Configuration for time flow and day/night cycle timing |
<!-- /classes -->

### Encounters

<!-- classes:world/encounters -->
| Class | What it is |
|---|---|
| [CallReinforcementsAction](/advanced/world/encounters/call-reinforcements-action) | Spawns reinforcement entities at designated positions to aid the group |
| [EncounterAction](/advanced/world/encounters/encounter-action) | EncounterAction is the base class for actions that affect the entire encounter group. |
| [EncounterQuestActivateAction](/advanced/world/encounters/encounter-quest-activate-action) | Activates a specific quest when the encounter reaction triggers |
| [EncounterReaction](/advanced/world/encounters/encounter-reaction) | EncounterReaction handles group-level responses to encounter events. |
| [ForceGroupTargetAction](/advanced/world/encounters/force-group-target-action) | Forces all group members to target the same enemy based on selection criteria |
| [GroupFormationAction](/advanced/world/encounters/group-formation-action) | Organizes group members into specific formations |
| [ModifyGroupBehaviorAction](/advanced/world/encounters/modify-group-behavior-action) | Modifies the group's overall behavior and aggression level |
| [SpawnEffectAction](/advanced/world/encounters/spawn-effect-action) | Spawns a world effect at a specific position during an encounter |
| [TriggerEventAction](/advanced/world/encounters/trigger-event-action) | Triggers a specific event in the event system |
<!-- /classes -->

### Runtime

<!-- classes:world/runtime -->
| Class | What it is |
|---|---|
| [Encounter](/advanced/world/runtime/encounter) | Encounter is a designer-placeable node that coordinates group combat behavior. |
| [FogExplorationData](/advanced/world/runtime/fog-exploration-data) | Stores fog of war exploration data for a single map. |
| [FogOfWarCompositorEffect](/advanced/world/runtime/fog-of-war-compositor-effect) | CompositorEffect that renders fog of war as a post-process. |
| [FogOfWarSystem](/advanced/world/runtime/fog-of-war-system) | FogOfWarSystem manages fog of war using a CompositorEffect for rendering. |
| [ObjectRegistry](/advanced/world/runtime/object-registry) | ObjectRegistry - manages all NPCs, Interactables, Regions, and special Encounters with advanced LOD system Integrated with CombatSystem's encounter management for coordinated combat behavior Features configurable LOD system via GameplayConfig, behavior optimization, and comprehensive performance management Handles registration, spawning, interaction tracking, and state management Provides centralized access for quest systems, events, and ability effects |
| [Region](/advanced/world/runtime/region) | Region node that creates and manages its own RegionData in the database. |
| [WeatherSystem](/advanced/world/runtime/weather-system) | Deals with weather application logic |
| [WorldContainer](/advanced/world/runtime/world-container) | Lightweight coordinator for world management Handles world transitions and delegates object queries to the current WorldScene |
| [WorldScene](/advanced/world/runtime/world-scene) | WorldScene manages all objects within a specific map/scene Handles object discovery, tracking, and provides query methods |
| [WorldSkyEnvironment](/advanced/world/runtime/world-sky-environment) | Preloaded stylized sky shader |
| [WorldSun](/advanced/world/runtime/world-sun) | Currently active sun configuration |
<!-- /classes -->

### Editor tools

<!-- classes:world/editor-tools -->
| Class | What it is |
|---|---|
| [AddObjectToolbarManager](/advanced/world/editor-tools/add-object-toolbar-manager) | Scene-watching toolbar manager for adding objects to WorldScene Watches for new/deleted objects and handles database sync automatically |
| [EncounterReactionsEditor](/advanced/world/editor-tools/encounter-reactions-editor) | Embedded editor for UniqueEncounterData.reactions property Used by UniqueObjectInspector to provide a custom interface for the reactions array |
| [UniqueObjectInspector](/advanced/world/editor-tools/unique-object-inspector) | Dynamic inspector for unique object data (NPC, Encounter, InteractableObject) Displays in the bottom dock when one of these nodes is selected Similar to EffectDynamicPropertyPanel but for UniqueData resources |
<!-- /classes -->
