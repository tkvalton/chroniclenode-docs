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
| [`SettingsManager`](/advanced/game-settings/settings-runtime/settings-manager) | [Game settings](/advanced/game-settings/#the-player-s-settings-two-tiers) | At start-up |
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
| [ChatCommands](/advanced/managers/managers/chat-commands) | What the player types in the chat box. |
| [ChatListeners](/advanced/managers/managers/chat-listeners) | Turns what happens in the game into messages: it listens to the signals that exist already (a level up, an item received, a quest accepted ...) and posts a line to the right channel of the message manager, so no system has to know about the chat. |
| [ChatManager](/advanced/managers/managers/chat-manager) | The **message manager**: everything the game wants to tell the player goes through here. |
| [ChronoManager](/advanced/managers/managers/chrono-manager) | Centralized timer pool and game time management system. |
| [FactionManager](/advanced/managers/managers/faction-manager) | FactionManager - Global singleton that orchestrates faction relationships Delegates logic to FactionDefinition instances and handles synchronization between factions Each faction manages its own runtime reputation; manager ensures both sides stay in sync |
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
| [AssetThumbnails](/advanced/managers/utilities/asset-thumbnails) | The pictures of the files of an Assets library (meshes, scenes), kept as PNG files in a folder of their own (named by a hash of the path of the file) and in memory. |
| [Durability](/advanced/managers/utilities/durability) | The durability of worn equipment: how it is given, how it wears, how it breaks and how it is repaired. |
| [InputEventText](/advanced/managers/utilities/input-event-text) | The text of an input event for the screen: "Q", "Ctrl 2", "LMB", "Mouse 4", "Joy A". |
| [InstanceUtility](/advanced/managers/utilities/instance-utility) | Utility script to help item/ability creation anywhere. |
| [InterfaceOverview](/advanced/managers/utilities/interface-overview) | What the in-game interface scene holds, read from the scene without running it: the HUD elements, the interaction panels and the UI panels, with the panel key number of each panel and the problems with them (two panels with one key, a panel with a key and no name, a node in a container that is not of the class the interface needs). |
| [MountSaves](/advanced/managers/utilities/mount-saves) | Puts the rides back after a game is loaded. |
| [PlayerUtility](/advanced/managers/utilities/player-utility) | Holds the player that is in control now (a static variable): `get_current_player` and `set_current_player`. |
| [RangeQueryUtil](/advanced/managers/utilities/range-query-util) | RangeQueryUtil is a global system providing various helper functions for game logic, particularly focusing on spatial queries and entity relationships within the game world. |
| [SceneStateReader](/advanced/managers/utilities/scene-state-reader) | Reads the nodes of a PackedScene from its saved state, without making the nodes. |
| [SpeechDelivery](/advanced/managers/utilities/speech-delivery) | Delivers a line (SpeechLine) or an emote of the library (EmoteDefinition): the speaker plays the animation and the sound, and the players who are in the audience read the line in the chat. |
| [SpeechLanguage](/advanced/managers/utilities/speech-language) | The languages of the game world (Common, Orcish, Elvish): a language is a **proficiency** with levels, so the understanding of it grows. |
| [ViewDistance](/advanced/managers/utilities/view-distance) | The View distance setting of the player (Game Settings &gt; Quality), as a number everything that has a distance of its own can use: the terrain, foliage and props that hide at a distance, the distance the AI of NPCs gets simpler at (when the Gameplay Config says it follows). |
<!-- /classes -->

### Combat sessions

<!-- classes:managers/combat -->
| Class | What it is |
|---|---|
| [CombatEvent](/advanced/managers/combat/combat-event) | One record of something that happened in a fight: a hit, a heal, an effect gained, a death, a cast. |
| [CombatEventRecorder](/advanced/managers/combat/combat-event-recorder) | Builds the **combat events** of the game, once each, and sends them to the two places that want them: the **combat session** (the record of the fight) and the **message manager** (lines in the combat channels). |
| [CombatLogManager](/advanced/managers/combat/combat-log-manager) | CombatLogManager now receives comprehensive reports from CombatSystem |
| [CombatSession](/advanced/managers/combat/combat-session) | CombatSession manages a single active combat encounter at runtime. |
<!-- /classes -->

### Cutscenes

<!-- classes:managers/cutscenes -->
| Class | What it is |
|---|---|
| [InGameCutScenePlayer](/advanced/managers/cutscenes/in-game-cut-scene-player) | InGameCutScenePlayer is a simple base class for in-game cutscenes that use AnimationPlayer. |
<!-- /classes -->
