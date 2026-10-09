# Game host

[`GameHost`](/advanced/managers/game-host/game-host) is the one node the game runs from. The project's main scene is `addons/chroniclenode/runtime_classes/main/GameHost.tscn`, whose script is `game_host.gd`. **There are no autoloads.** Everything else is reached through a `SystemHub` that `GameHost` builds and hands around.

It does three jobs:

1. It **builds the managers** and the permanent containers, once, at start-up.
2. It **starts the game**: it asks the [`TransitionManager`](/advanced/managers/game-host/transition-manager) to go to the main menu (or straight into a world, for the editor's "play this world").
3. It **owns the pause key**.

Everything that changes the *state* of the game afterwards is the job of `TransitionManager`, which is a `RefCounted`, not a node.

```text
GameHost ──creates──► SystemHub   (the managers, three flags, the signals)
   └─ _ready ─► TransitionManager.initialize_to_main_menu
                   ▲   signals of the UI (new game, load, return to menu)
                   └── _execute_state_transition ─► handler ─► setup steps ─► loading screen ─► fade ─► new state
```

## The SystemHub

A plain object (an inner class of `GameHost`) holding what systems need, so classes take a `system_hub` instead of reaching for globals.

| Reference | Class | Role |
|---|---|---|
| `transition_manager` | `TransitionManager` | The state machine, setup steps, world swap, cleanup |
| `settings_manager` | [`SettingsManager`](/advanced/game-settings/settings-runtime/settings-manager) | The player's settings ([Game settings](/advanced/game-settings/)) |
| `ui_manager` | [`UIManager`](/advanced/managers/game-host/ui-manager) | The current whole-screen UI, the loading screen, fades, tooltips, messages, popups |
| `audio_manager` | [`AudioManager`](/advanced/managers/managers/audio-manager) | Music, ambience, sound effects, UI sounds, the pooled players ([Pooling](/advanced/pooling#audio-players)) |
| `chrono_manager` | [`ChronoManager`](/advanced/managers/managers/chrono-manager) | The game clock and the timer pool |
| `event_manager` | [`EventManager`](/advanced/events-and-quests/runtime/event-manager) | Events, quests, global variables ([Events & Quests](/advanced/events-and-quests/)). Made on the first game |
| `faction_manager` | [`FactionManager`](/advanced/managers/managers/faction-manager) | Factions and reputation |
| `vfx_manager` | [`VFXManager`](/advanced/assets/vfx/vfx-manager) | Plays visual effects. A child of the combat manager, made on the first game |
| `combat_manager` | [`CombatManager`](/advanced/entity-stats/combat/combat-manager) | Combat sessions, the combat log, world effects, experience |
| `party_manager` | [`PartyManager`](/advanced/entities/runtime/party-manager) | The party, the player in control; owns the [`PlayerController`](/advanced/game-settings/camera-and-controller/player-controller) and the [`CameraController`](/advanced/game-settings/camera-and-controller/camera-controller) |
| `world_container` | [`WorldContainer`](/advanced/world/runtime/world-container) | The loaded world ([World](/advanced/world/)) |
| `input_manager` | [`InputManager`](/advanced/game-settings/camera-and-controller/input-manager) | Gameplay input ([Camera, controller and input](/advanced/game-settings/#camera-controller-and-input)) |
| `world_environment`, `world_sun` | [`WorldSkyEnvironment`](/advanced/world/runtime/world-sky-environment), [`WorldSun`](/advanced/world/runtime/world-sun) | The sky, the environment and the sun |

`vfx_manager` and `event_manager` are `null` in the main menu.

**State:** `current_pause_type` (`NONE`, `MENU_PAUSE`, `POPUP`), `ui_menu_open` (a window panel is open; it does **not** mean input is blocked), `popup_blocking_input`, `loading_save_game` and `current_save_game_name` (set while a save loads), `pending_spawn_override` (consumed by the next world load) and `debug_mode`.

**Helpers:** `save_game(name)`, `load_game(name)` (a raw [`SaveLoadUtil`](/advanced/managers/save-and-load/save-load-util) call with the loading signals; the UI path is `TransitionManager.load_saved_game`), `auto_save()` (skipped while the party is in combat), `enter_menu_pause()`, `enter_popup_pause()` / `exit_popup_pause()`, `exit_pause()`, `apply_environment_configs(...)`.

**Signals:** `paused_changed`, `game_state_changed`, `loading_started`, `loading_finished`, `map_transition_started`, `map_transition_finished`, `debug_toggled`.

## The boot

`GameHost._ready`:

1. [`AudioBusUtility.ensure_buses()`](/advanced/game-settings/helpers/audio-bus-utility) (a project the toolkit was just added to may not have the buses).
2. `_initialize_core_systems()`: `_initialize_global_managers` (the hub, the transition manager, the chrono manager, the audio manager, the combat manager, the static helpers [`CollisionLayerUtility`](/advanced/game-settings/collision/collision-layer-utility), [`InstanceUtility`](/advanced/managers/utilities/instance-utility), [`RangeQueryUtil`](/advanced/managers/utilities/range-query-util), [`Database.ensure_initialized()`](/advanced/data-and-database/database-classes/database), the default time config), then `_create_core_containers` (the sky and the sun, the settings manager, the faction manager, the party manager with its controllers, the input manager, the world container, the UI manager with the loading screen and the fade).
3. The mouse cursor.
4. `_check_for_editor_test()`. If `user://.chroniclenode_world_test.tres` exists, the editor asked for **Play Test World**: the file's `test_world_id` is read, the file is **deleted**, and `_setup_editor_world_test` skips the splash and the menu and starts a new game in that world with the debug tools on (`EDITOR_WORLD_TEST` mode).
5. Otherwise `_setup_normal_game`: `TransitionManager.initialize_to_main_menu(splash_screen)`, which loads the menu UI behind the splash, waits for the splash, and fades the menu in.

## States and transitions

`TransitionManager.GameState` is `MAIN_MENU`, `CHARACTER_CREATION` or `MAIN_GAME`, and changes only at the very end of a transition.

| From to | Entry point |
|---|---|
| menu to character creation | `transition_to_character_creation()` (when the Gameplay Config uses character creation) |
| menu or creation to a new game | `start_new_game(custom_character)` |
| menu or game to a loaded game | `load_saved_game(name)` |
| anything to the menu | `return_to_main_menu()` |
| game to another world | `transition_to_world`, `transition_to_map_by_id(id, spawn_override)`, `transition_to_exact_position`: **not** a state change, the state stays `MAIN_GAME` |

Every state change goes through `_execute_state_transition(target, params)`:

```text
is_transitioning = true
fade to black                       (1.5 s)
run the handler                     (declares its steps, runs the setup steps)
wait for the loading screen to finish
fade to black again, hide the loading screen, fade in
current_state = target, is_transitioning = false, game_state_changed
```

Every entry point returns at once if `is_transitioning` is set, so a second request while one runs is dropped.

### Setup steps

A handler runs a list of `SetupStep`s. One at a time, each does its work, tells the loading screen it is done (`complete_step`), and waits a second:

| Step | Does |
|---|---|
| `INITIALIZE_CORE_SYSTEMS` | Makes the `VFXManager` and the `EventManager` the first time |
| `INITIALIZE_WORLD` | `world_container.load_world(...)` |
| `SETUP_NEW_GAME_PARTY` | `party_manager.setup_initial_party`: the custom character from character creation (if any), plus the starting party |
| `SETUP_NPCS` | Activates the NPC behaviors |
| `SETUP_GAME_SYSTEMS` | Builds the in-game UI, sets the current player, connects objectives, clears `loading_save_game` |
| `START_AUDIO` | Starts the world's audio and turns the camera on |
| `CREATE_PLAYERS_FROM_SAVE`, `RESTORE_SAVED_STATE` | The two halves of a load ([Save and load](/advanced/save-and-load)) |

A **new game** runs `INITIALIZE_CORE_SYSTEMS`, `INITIALIZE_WORLD`, `SETUP_NEW_GAME_PARTY`, `SETUP_NPCS`, `SETUP_GAME_SYSTEMS`, `START_AUDIO`. A **load** runs `INITIALIZE_CORE_SYSTEMS`, `CREATE_PLAYERS_FROM_SAVE`, `INITIALIZE_WORLD`, `RESTORE_SAVED_STATE`, `SETUP_NPCS`, `SETUP_GAME_SYSTEMS`, `START_AUDIO`, after `perform_full_cleanup()`. The order matters: the players must exist before the world loads, and the state is restored only when both exist.

### The loading screen counts steps

`_prepare_loading_screen(n)` sets the number of steps; each `complete_step` advances one and is ignored past the end. When the last one completes the bar fills and `loading_finished` fires. So **what ends a transition is the count of `complete_step` calls, not the end of the handler**: a path that declares `n` steps must make `n` calls.

### A world swap

`_perform_world_swap` (6 steps) is not a state change. It stores the spawn override, pauses the camera and nameplates, fades out, stops the audio, takes the event signals off, calls `world_container.load_world`, puts the event signals back, starts the new world's audio, and fades in. `WorldContainer.load_world` is described in [World](/advanced/world/#loading-a-world).

### Cleanup

`perform_full_cleanup()` (return to menu, and before a load): unload the world (which captures what it remembers) and clear the party; reset the event manager, the factions, the VFX, crafting, the [object registry](/advanced/world/runtime/object-registry) and the world container's session caches, and the clock (`_reset_all_game_systems`); disconnect the objective signals and clean up the combat manager. What lives for the whole session: the managers and containers, `VFXManager`, `EventManager`, the audio caches and the settings.

## Pause

Pause is `Engine.time_scale = 0`, **not** a tree pause. Nodes still process (with a zero delta) and input events still arrive. `enter_menu_pause()` also switches the audio to the pause-menu album; `enter_popup_pause()` pauses for a [popup](/basic/events-and-quests/popups) that asks for it and does not touch a pause by the menu; `exit_pause()` restores the time scale and re-syncs the camera, the UI and the pitch of entity sounds.

Because every tween and every `create_timer` stops with the time scale, **a transition started while paused never finishes** (the fade never advances): call `system_hub.exit_pause()` first. `GameHost._input` handles only the pause key: it closes the open windows first, then lets the `PlayerController` cancel targeting, then toggles the pause menu (only in `MAIN_GAME`).

## Extending

| You want | Do |
|---|---|
| **A setup step** | Add a value to `SetupStep`, a `_perform_..._step()` that does the work and calls the loading screen's `complete_step` **exactly once**, a branch in `_perform_next_setup_step`, and the step in the list of each path that needs it. Then raise `_prepare_loading_screen(n)` of those paths by one |
| **A game state** | Add a `GameState`, a `_transition_to_<state>` handler that declares its steps and ends with matching `complete_step` calls, a branch in `UIManager.initialize_ui_scenes` and a scene path in `UISettingsConfig`, and a branch in `_execute_state_transition` |
| **A change of world from content or code** | `transition_manager.transition_to_map_by_id(id, spawn_override)`. Only valid in `MAIN_GAME`; ignored while one is running |
| **A manager** | Make it in `_initialize_global_managers` or `_create_core_containers`, give it a reference on the `SystemHub`, and take the hub in its `initialize` |

## Known issues

The boot and transition flow was audited on 2026-10-02 with a headless run, and the findings were written down (in the toolkit repository, `docs/systems/game-host-and-transitions.md`). Two are fixed (the session caches are cleared for a new game, and a persistent world is remembered across a swap). The others were **not looked at again** for this page; they are failures of unusual paths, not of the normal flow:

- A failed scene load or an early `return` inside a transition (a missing start world, a missing save, a party that cannot be made) leaves the loading screen up and `is_transitioning` set, so no later transition runs.
- A transition started while the time scale is `0` hangs (above).
- Skipping the splash screen before the menu UI has loaded can hang the boot.
- `SystemHub.loading_finished` fires after the first setup step of a new game or load, not at the end; and a new game makes one more `complete_step` call than it declares.
- Every setup step ends in a fixed one-second wait (about six seconds in a new game), and `perform_full_cleanup()` is not awaited by its callers.

## See also

- [Save and load](/advanced/save-and-load), [Architecture](/advanced/architecture), [World](/advanced/world/).
