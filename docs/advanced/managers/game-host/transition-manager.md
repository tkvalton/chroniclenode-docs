<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# TransitionManager

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

TransitionManager - Clean state machine for game state transitions Handles three primary states: MainMenu, CharacterCreation, MainGame Manages world persistence, system cleanup, and loading orchestration

## Variables

| | | |
|---|---|---|
| `GameState` | [current_state](#var-current-state) | `GameState.MAIN_MENU` |
| `GameState` | [previous_state](#var-previous-state) | `GameState.MAIN_MENU` |
| `bool` | [is_transitioning](#var-is-transitioning) | `false` |
| `RuntimeMode` | [current_runtime_mode](#var-current-runtime-mode) | `RuntimeMode.NORMAL_GAME` |
| `bool` | [vfx_initialized](#var-vfx-initialized) | `false` |
| `bool` | [quest_system_initialized](#var-quest-system-initialized) | `false` |
| `bool` | [faction_manager_initialized](#var-faction-manager-initialized) | `false` |
| `bool` | [game_systems_initialized](#var-game-systems-initialized) | `false` |
| `WorldData` | [current_world_data](#var-current-world-data) | `null` |
| `bool` | [is_transitioning_map](#var-is-transitioning-map) | `false` |
| `Array[SetupStep]` | [setup_steps](#var-setup-steps) | `[]` |
| `int` | [current_setup_step](#var-current-setup-step) | `0` |
| `float` | [setup_progress](#var-setup-progress) | `0.0` |
| `Node` | [test_scene_detected](#var-test-scene-detected) | `null` |
| `String` | [original_main_scene](#var-original-main-scene) | `""` |
| `GameHost.SystemHub` | [system_hub](#var-system-hub) |  |

## Methods

| | |
|---|---|
| `void` | [initialize_to_main_menu](#method-initialize-to-main-menu)( `splash_screen: SplashScreen = null` ) |
| `void` | [transition_to_character_creation](#method-transition-to-character-creation)() |
| `void` | [start_new_game](#method-start-new-game)( `custom_character_def: CustomCharacterDefinition = null` ) |
| `void` | [load_saved_game](#method-load-saved-game)( `save_file_name: String` ) |
| `void` | [return_to_main_menu](#method-return-to-main-menu)() |
| `void` | [transition_to_world](#method-transition-to-world)( `world_data: WorldData, spawn_override: Dictionary = {}` ) |
| `void` | [perform_full_cleanup](#method-perform-full-cleanup)() |
| `void` | [initialize_core_game_systems](#method-initialize-core-game-systems)() |
| `void` | [transition_to_map_by_id](#method-transition-to-map-by-id)( `map_id: int, spawn_override: Dictionary = {}` ) |
| `void` | [transition_via_rabbit_hole](#method-transition-via-rabbit-hole)( `target_world_id: int, rabbit_hole_id: int` ) |
| `void` | [transition_to_exact_position](#method-transition-to-exact-position)( `map_id: int, position: Vector3, rotation: Vector3 = Vector3.ZERO` ) |
| `bool` | [is_map_transition_in_progress](#method-is-map-transition-in-progress)() |

## Enumerations

### enum GameState {#enum-gamestate}

- **MAIN_MENU** = `0`
- **CHARACTER_CREATION** = `1`
- **MAIN_GAME** = `2`

### enum RuntimeMode {#enum-runtimemode}

- **NORMAL_GAME** = `0`
- **EDITOR_WORLD_TEST** = `1`

### enum SetupStep {#enum-setupstep}

- **INITIALIZE_CORE_SYSTEMS** = `0`
- **INITIALIZE_WORLD** = `1`
- **SETUP_NEW_GAME_PARTY** = `2`
- **LOAD_NON_PLAYER_CHARACTERS** = `3`
- **SETUP_NPCS** = `4`
- **SETUP_GAME_SYSTEMS** = `5`
- **START_AUDIO** = `6`
- **LOAD_SAVED_GAME** = `7`
- **CREATE_PLAYERS_FROM_SAVE** = `8`
- **RESTORE_SAVED_STATE** = `9`

## Variable descriptions

### GameState current_state = GameState.MAIN_MENU {#var-current-state}

*No description yet.*

### GameState previous_state = GameState.MAIN_MENU {#var-previous-state}

*No description yet.*

### bool is_transitioning = false {#var-is-transitioning}

*No description yet.*

### RuntimeMode current_runtime_mode = RuntimeMode.NORMAL_GAME {#var-current-runtime-mode}

*No description yet.*

### bool vfx_initialized = false {#var-vfx-initialized}

*No description yet.*

### bool quest_system_initialized = false {#var-quest-system-initialized}

*No description yet.*

### bool faction_manager_initialized = false {#var-faction-manager-initialized}

*No description yet.*

### bool game_systems_initialized = false {#var-game-systems-initialized}

*No description yet.*

### WorldData current_world_data = null {#var-current-world-data}

*No description yet.*

### bool is_transitioning_map = false {#var-is-transitioning-map}

*No description yet.*

### Array[SetupStep] setup_steps = [] {#var-setup-steps}

*No description yet.*

### int current_setup_step = 0 {#var-current-setup-step}

*No description yet.*

### float setup_progress = 0.0 {#var-setup-progress}

*No description yet.*

### Node test_scene_detected = null {#var-test-scene-detected}

*No description yet.*

### String original_main_scene = "" {#var-original-main-scene}

*No description yet.*

### GameHost.SystemHub system_hub {#var-system-hub}

*No description yet.*

## Method descriptions

### void initialize_to_main_menu( splash_screen: SplashScreen = null ) {#method-initialize-to-main-menu}

Initialize game on first launch (to main menu)

### void transition_to_character_creation() {#method-transition-to-character-creation}

Transition to character creation from main menu

### void start_new_game( custom_character_def: CustomCharacterDefinition = null ) {#method-start-new-game}

Start new game (from main menu or character creation)

### void load_saved_game( save_file_name: String ) {#method-load-saved-game}

Load saved game from main menu

### void return_to_main_menu() {#method-return-to-main-menu}

Return to main menu from any state

### void transition_to_world( world_data: WorldData, spawn_override: Dictionary = &#123;&#125; ) {#method-transition-to-world}

Transition between worlds (only valid in MainGame state)

### void perform_full_cleanup() {#method-perform-full-cleanup}

Complete cleanup when exiting MainGame or loading a save This is the master cleanup function that orchestrates all system resets

### void initialize_core_game_systems() {#method-initialize-core-game-systems}

Initialize core game systems that must be ready before entity creation

### void transition_to_map_by_id( map_id: int, spawn_override: Dictionary = &#123;&#125; ) {#method-transition-to-map-by-id}

Transition to map by ID with optional spawn override

### void transition_via_rabbit_hole( target_world_id: int, rabbit_hole_id: int ) {#method-transition-via-rabbit-hole}

Convenience method for rabbit hole transitions

### void transition_to_exact_position( map_id: int, position: Vector3, rotation: Vector3 = Vector3.ZERO ) {#method-transition-to-exact-position}

Convenience method for exact positioning (cutscenes, etc.)

### bool is_map_transition_in_progress() {#method-is-map-transition-in-progress}

Check if map transition is currently in progress

