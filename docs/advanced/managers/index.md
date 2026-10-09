# Managers: how they are built

The **managers** are the objects that live for the whole session and that the rest of the game talks to. They are made once by the [`GameHost`](/advanced/managers/game-host/game-host) at start-up and kept together in a `SystemHub`, which almost every class receives instead of reaching for a global. This page is the list of them with a pointer to where each is explained; the pages after it are the class reference.

Read [Architecture](/advanced/architecture) for the whole picture and [Game host](/advanced/game-host) for how they are made and how the game moves between states.

## The managers

| Manager | Where it is explained | Made |
|---|---|---|
| [`GameHost`](/advanced/managers/game-host/game-host) | [Game host](/advanced/game-host) | The main scene |
| [`TransitionManager`](/advanced/managers/game-host/transition-manager) | [Game host](/advanced/game-host#states-and-transitions) | At start-up |
| [`UIManager`](/advanced/managers/game-host/ui-manager) | [Game host](/advanced/game-host#the-systemhub), [Popups](/basic/events-and-quests/popups) | At start-up |
| [`ChronoManager`](/advanced/managers/managers/chrono-manager) | [Pooling](/advanced/pooling#timers), [World configs](/basic/world/world-configs#time) | At start-up |
| [`AudioManager`](/advanced/managers/managers/audio-manager) | [Pooling](/advanced/pooling#audio-players), [Assets](/advanced/assets/#audio) | At start-up |
| [`FactionManager`](/advanced/managers/managers/faction-manager) | [Behaviors](/advanced/behaviors/) | At start-up |
| [`SettingsManager`](/advanced/game-settings/settings-runtime/settings-manager) | [Game settings](/advanced/game-settings/#the-players-settings-two-tiers) | At start-up |
| [`InputManager`](/advanced/game-settings/camera-and-controller/input-manager) | [Game settings](/advanced/game-settings/#camera-controller-and-input) | At start-up |
| [`PartyManager`](/advanced/entities/runtime/party-manager) | [Entities](/advanced/entities/) | At start-up |
| [`WorldContainer`](/advanced/world/runtime/world-container) | [World](/advanced/world/) | At start-up |
| [`CombatManager`](/advanced/entity-stats/combat/combat-manager) | [Abilities & Effects](/advanced/abilities-and-effects/), [the hit pipeline](/advanced/entity-stats/pipeline) | At start-up |
| [`VFXManager`](/advanced/assets/vfx/vfx-manager) | [Pooling](/advanced/pooling#vfx) | First game |
| [`EventManager`](/advanced/events-and-quests/runtime/event-manager) | [Events & Quests](/advanced/events-and-quests/) | First game |

## Static helpers

Not managers, but used the same way from anywhere: the [`Database`](/advanced/data-and-database/database-classes/database) and the asset libraries ([Asset databases](/advanced/data-and-database/asset-databases)); [`InstanceUtility`](/advanced/managers/utilities/instance-utility) (makes ability, effect and item instances); [`PlayerUtility`](/advanced/managers/utilities/player-utility) (the player in control); [`RangeQueryUtil`](/advanced/managers/utilities/range-query-util) (who is within range); [`SaveLoadUtil`](/advanced/managers/save-and-load/save-load-util) ([Save and load](/advanced/save-and-load)); [`CollisionLayerUtility`](/advanced/game-settings/collision/collision-layer-utility).

## The classes

### Game host

<!-- classes:managers/game-host -->
| Class | What it is |
|---|---|
| [DebugMenuFactory](/advanced/managers/game-host/debug-menu-factory) | Factory for creating and initializing the debug menu dynamically at runtime |
| [GameHost](/advanced/managers/game-host/game-host) | GAME ROOT GLOBAL |
| [TransitionManager](/advanced/managers/game-host/transition-manager) | TransitionManager - Clean state machine for game state transitions Handles three primary states: MainMenu, CharacterCreation, MainGame Manages world persistence, system cleanup, and loading orchestration |
| [UIManager](/advanced/managers/game-host/ui-manager) | Manages UI layers, scene transitions, and overlay systems. |
<!-- /classes -->

### Managers

<!-- classes:managers/managers -->
| Class | What it is |
|---|---|
| [AudioManager](/advanced/managers/managers/audio-manager) | Centralized audio system managing music, ambiance, and sound effects with pooled players and phased initialization for fast startup. |
| [ChronoManager](/advanced/managers/managers/chrono-manager) | Centralized timer pool and game time management system. |
| [FactionManager](/advanced/managers/managers/faction-manager) |  |
<!-- /classes -->

### Save and load

<!-- classes:managers/save-and-load -->
| Class | What it is |
|---|---|
| [SaveLoadUtil](/advanced/managers/save-and-load/save-load-util) | SaveLoadUtil - Manages saving and loading game state to/from JSON files Coordinates with SystemHub to gather and restore state from all game systems Uses dependency-aware loading order to ensure entities exist before effects/AI states |
<!-- /classes -->

### Utilities

<!-- classes:managers/utilities -->
| Class | What it is |
|---|---|
| [InstanceUtility](/advanced/managers/utilities/instance-utility) | Utility script to help item/ability creation anywhere. |
| [PlayerUtility](/advanced/managers/utilities/player-utility) |  |
| [RangeQueryUtil](/advanced/managers/utilities/range-query-util) | RangeQueryUtil is a global system providing various helper functions for game logic, particularly focusing on spatial queries and entity relationships within the game world. |
<!-- /classes -->

### Combat sessions

<!-- classes:managers/combat -->
| Class | What it is |
|---|---|
| [CombatLogManager](/advanced/managers/combat/combat-log-manager) |  |
| [CombatSession](/advanced/managers/combat/combat-session) | CombatSession manages a single active combat encounter at runtime. |
<!-- /classes -->

### Cutscenes

<!-- classes:managers/cutscenes -->
| Class | What it is |
|---|---|
| [InGameCutScenePlayer](/advanced/managers/cutscenes/in-game-cut-scene-player) | InGameCutScenePlayer is a simple base class for in-game cutscenes that use AnimationPlayer. |
<!-- /classes -->
