<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# WorldContainer

**Inherits:** [Node3D](https://docs.godotengine.org/en/stable/classes/class_node3d.html)

Lightweight coordinator for world management Handles world transitions and delegates object queries to the current WorldScene

## Variables

| | | |
|---|---|---|
| `ObjectRegistry` | [object_registry](#var-object-registry) |  |
| `PartyManager` | [party_manager](#var-party-manager) |  |
| `ChronoManager` | [chrono_manager](#var-chrono-manager) |  |
| `WorldScene` | [current_world_scene](#var-current-world-scene) | `null :` |
| `WorldData` | [current_world_data](#var-current-world-data) |  |
| `bool` | [is_loading_world](#var-is-loading-world) | `false` |
| `Dictionary` | [persistent_worlds_cache](#var-persistent-worlds-cache) | `{}` |
| `Dictionary` | [session_worlds_cache](#var-session-worlds-cache) | `{}` |
| `FogOfWarSystem` | [fog_of_war_system](#var-fog-of-war-system) | `null` |
| `Dictionary` | [fog_exploration_cache](#var-fog-exploration-cache) | `{}` |
| `WeatherSystem` | [weather_system](#var-weather-system) |  |

## Methods

| | |
|---|---|
| `void` | [load_world](#method-load-world)( `system_hub: GameHost.SystemHub, world_data: WorldData, pending_spawn_override: Dictionary = {}, loading_screen: LoadingScreen = null` ) |
| `void` | [unload_current_world](#method-unload-current-world)() |
| `void` | [apply_world_environment_overrides](#method-apply-world-environment-overrides)( `system_hub: GameHost.SystemHub, world_data: WorldData` ) |
| `InteractableObject` | [find_rabbit_hole_by_unique_id](#method-find-rabbit-hole-by-unique-id)( `unique_id: int` ) |
| `int` | [get_current_world_id](#method-get-current-world-id)() |
| `WorldData` | [get_current_world_data](#method-get-current-world-data)() |
| `WorldScene` | [get_current_world_scene](#method-get-current-world-scene)() |
| `bool` | [is_loading](#method-is-loading)() |
| `Dictionary` | [to_save_data](#method-to-save-data)() |
| `void` | [from_save_data](#method-from-save-data)( `save_data: Dictionary` ) |
| `void` | [reset_session_state](#method-reset-session-state)() |
| `void` | [clear_fog_exploration_cache](#method-clear-fog-exploration-cache)() |
| `bool` | [is_fog_of_war_active](#method-is-fog-of-war-active)() |
| `GameplayConfig.FogState` | [get_fog_state_at_position](#method-get-fog-state-at-position)( `world_position: Vector3` ) |

## Signals

### world_loading_started( world_data: WorldData ) {#signal-world-loading-started}

Emitted when a new world starts loading

### world_loading_finished( world_scene: WorldScene ) {#signal-world-loading-finished}

Emitted when a new world finishes loading

### world_unloaded( world_data: WorldData ) {#signal-world-unloaded}

Emitted when a world is unloaded

## Variable descriptions

### ObjectRegistry object_registry {#var-object-registry}

Entity &amp; Object Managment system

### PartyManager party_manager {#var-party-manager}

PartyManager refrence

### ChronoManager chrono_manager {#var-chrono-manager}

ChronoManager reference for time-based logic

### WorldScene current_world_scene = null : {#var-current-world-scene}

Reference to the currently loaded WorldScene

### WorldData current_world_data {#var-current-world-data}

Reference to the current world's data

### bool is_loading_world = false {#var-is-loading-world}

Whether we're currently loading a world

### Dictionary persistent_worlds_cache =  {#var-persistent-worlds-cache}

Runtime cache for persistent worlds (survives transitions, saved in main save)

### Dictionary session_worlds_cache =  {#var-session-worlds-cache}

Runtime cache for the worlds that only last the session (SESSION_ONLY): remembered while the game runs, never written to a save

### FogOfWarSystem fog_of_war_system = null {#var-fog-of-war-system}

The fog of war system for the current world

### Dictionary fog_exploration_cache =  {#var-fog-exploration-cache}

Cache of fog exploration data per world (persists across world transitions) Key: world_id (int), Value: FogExplorationData

### WeatherSystem weather_system {#var-weather-system}

Weather system

## Method descriptions

### void load_world( system_hub: GameHost.SystemHub, world_data: WorldData, pending_spawn_override: Dictionary = &#123;&#125;, loading_screen: LoadingScreen = null ) {#method-load-world}

Load a world using WorldData

### void unload_current_world() {#method-unload-current-world}

Unload the current world

### void apply_world_environment_overrides( system_hub: GameHost.SystemHub, world_data: WorldData ) {#method-apply-world-environment-overrides}

*No description yet.*

### InteractableObject find_rabbit_hole_by_unique_id( unique_id: int ) {#method-find-rabbit-hole-by-unique-id}

Find rabbit hole by unique ID (delegates to WorldScene)

### int get_current_world_id() {#method-get-current-world-id}

Get current world ID

### WorldData get_current_world_data() {#method-get-current-world-data}

Get current world data

### WorldScene get_current_world_scene() {#method-get-current-world-scene}

Get current world scene

### bool is_loading() {#method-is-loading}

Check if currently loading a world

### Dictionary to_save_data() {#method-to-save-data}

Save current game state (called by SaveLoadUtil.save_game)

### void from_save_data( save_data: Dictionary ) {#method-from-save-data}

Load game state (called by SaveLoadUtil.load_game)

### void reset_session_state() {#method-reset-session-state}

A new game starts without what the last game left behind: the remembered worlds and the explored fog

### void clear_fog_exploration_cache() {#method-clear-fog-exploration-cache}

Clear fog exploration cache (for new game)

### bool is_fog_of_war_active() {#method-is-fog-of-war-active}

Check if fog of war is active

### GameplayConfig.FogState get_fog_state_at_position( world_position: Vector3 ) {#method-get-fog-state-at-position}

Get fog state at a world position

