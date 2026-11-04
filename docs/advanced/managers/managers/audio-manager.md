<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# AudioManager

**Inherits:** [Node](https://docs.godotengine.org/en/stable/classes/class_node.html)

Centralized audio system managing music, ambience, and sound effects with pooled players and phased initialization for fast startup.

## Description

PHASED INITIALIZATION:

- Phase 1 (_init): Makes the players and pools for fast startup
- Phase 2 (initialize_gameplay): Loads all gameplay audio when entering game

AUDIO SYSTEMS:

- Music: Dual-player crossfading system for seamless transitions
- Ambience: Separate crossfading for environmental soundscapes
- SFX: Pooled 3D/2D audio players for positional and global sounds
- Sound sources: the music and ambience come from layers (menu, world, zone, weather, shelter, event) that hold a track or a Music Album (SoundLayers, SoundSource, SoundAlbum)

SOUND EFFECTS:

- Categorized cache: UI, abilities, combat, footsteps, voices
- 3D audio: Positional sound with entity attachment support
- Advanced requests: RT_Audio3DRequest for precise control (attenuation, doppler, etc.)
- Automatic pooling: Players return to pool when finished

USAGE:

- Startup: _init() runs automatically
- Gameplay: Call initialize_gameplay() when entering game
- Music: setup_audio_for_state("main_menu" ...) for a menu, start_world_sound(world) for a world; zones, weather and events set their layers
- SFX: get_sfx(category, type) then play_sfx_at_position() or play_sfx_global()
- 3D Audio: Create RT_Audio3DRequest and call play_3d_audio_from_request()

VOLUME CONTROL: Separate volume controls via setters: music_volume_db, ambience_volume_db, ui_sfx_volume_db

## Variables

| | | |
|---|---|---|
| `Dictionary` | [gameplay_sfx_cache](#var-gameplay-sfx-cache) | `{}` |
| `Array[AudioStreamPlayer3D]` | [sfx_3d_players](#var-sfx-3d-players) | `[]      # For positional SFX` |
| `Array[AudioStreamPlayer]` | [sfx_2d_players](#var-sfx-2d-players) | `[]` |
| `Array[AudioStreamPlayer]` | [ui_audio_players](#var-ui-audio-players) | `[]` |
| `AudioStreamPlayer                    # Music player A (for crossfading)` | [music_player_a](#var-music-player-a) |  |
| `AudioStreamPlayer` | [music_player_b](#var-music-player-b) |  |
| `AudioStreamPlayer` | [ambience_player_a](#var-ambience-player-a) |  |
| `AudioStreamPlayer` | [ambience_player_b](#var-ambience-player-b) |  |
| `DynamicMusicPlayer` | [dynamic_player](#var-dynamic-player) |  |
| `AudioStreamPlayer` | [active_music_player](#var-active-music-player) |  |
| `AudioStreamPlayer` | [active_ambience_player](#var-active-ambience-player) |  |
| `Tween` | [music_crossfade_tween](#var-music-crossfade-tween) |  |
| `Tween` | [ambience_crossfade_tween](#var-ambience-crossfade-tween) |  |
| `SoundLayers` | [sound_layers](#var-sound-layers) | `SoundLayers.new()` |
| `SoundLayers` | [combat_layers](#var-combat-layers) | `SoundLayers.new()` |
| `bool` | [party_in_combat](#var-party-in-combat) | `false` |
| `bool` | [is_night](#var-is-night) | `false` |
| `bool` | [ui_sfx_initialized](#var-ui-sfx-initialized) | `false` |
| `bool` | [gameplay_sfx_initialized](#var-gameplay-sfx-initialized) | `false` |
| `bool` | [world_audio_initialized](#var-world-audio-initialized) | `false` |
| `bool` | [in_combat](#var-in-combat) | `false` |
| `String` | [current_game_state](#var-current-game-state) | `"main_menu"` |
| `float` | [music_volume_db](#var-music-volume-db) | `0.0 : set = set_music_volume` |
| `float` | [ambience_volume_db](#var-ambience-volume-db) | `0.0 : set = set_ambience_volume` |
| `float` | [ui_sfx_volume_db](#var-ui-sfx-volume-db) | `-10.0 : set = set_ui_sfx_volume` |
| `Dictionary` | [spawned_sounds](#var-spawned-sounds) | `{}` |

## Methods

| | |
|---|---|
| `void` | [initialize_gameplay](#method-initialize-gameplay)() |
| `void` | [set_music_volume](#method-set-music-volume)( `value: float` ) |
| `void` | [set_ambience_volume](#method-set-ambience-volume)( `value: float` ) |
| `void` | [set_ui_sfx_volume](#method-set-ui-sfx-volume)( `value: float` ) |
| `AudioStreamPlayer` | [get_inactive_music_player](#method-get-inactive-music-player)() |
| `AudioStreamPlayer` | [get_inactive_ambience_player](#method-get-inactive-ambience-player)() |
| `void` | [crossfade_music](#method-crossfade-music)( `new_track: AudioStream, target_volume_db: float, fade_duration: float = FADE_DURATION` ) |
| `void` | [crossfade_ambience](#method-crossfade-ambience)( `new_track: AudioStream, target_volume_db: float, fade_duration: float = FADE_DURATION` ) |
| `void` | [switch_music_immediate](#method-switch-music-immediate)( `new_track: AudioStream, target_volume_db: float` ) |
| `void` | [switch_ambience_immediate](#method-switch-ambience-immediate)( `new_track: AudioStream, target_volume_db: float` ) |
| `void` | [play_music](#method-play-music)( `use_crossfade: bool = true, fade_duration: float = FADE_DURATION` ) |
| `void` | [play_ambience](#method-play-ambience)( `use_crossfade: bool = true, fade_duration: float = FADE_DURATION` ) |
| `void` | [fade_stop_music](#method-fade-stop-music)( `fade_duration: float = FADE_DURATION` ) |
| `void` | [fade_stop_ambience](#method-fade-stop-ambience)( `fade_duration: float = FADE_DURATION` ) |
| `void` | [stop_music](#method-stop-music)() |
| `void` | [stop_ambience](#method-stop-ambience)() |
| `void` | [set_sound_layer](#method-set-sound-layer)( `layer: SoundLayers.Layer, music_tracks: PackedStringArray, ambience_tracks: PackedStringArray, music_db: float = 0.0, ambience_db: float = 0.0, fade_duration: float = FADE_DURATION, loop: bool = true` ) |
| `void` | [clear_sound_layers](#method-clear-sound-layers)() |
| `void` | [set_sound_channel](#method-set-sound-channel)( `layer: SoundLayers.Layer, channel: StringName, tracks: PackedStringArray, volume_db: float = 0.0, fade_duration: float = FADE_DURATION, loop: bool = true` ) |
| `void` | [clear_sound_channel](#method-clear-sound-channel)( `layer: SoundLayers.Layer, channel: StringName, fade_duration: float = FADE_DURATION` ) |
| `void` | [clear_sound_layer](#method-clear-sound-layer)( `layer: SoundLayers.Layer, fade_duration: float = FADE_DURATION` ) |
| `void` | [drop_event_track](#method-drop-event-track)( `channel: StringName` ) |
| `AmbientSound` | [spawn_sound](#method-spawn-sound)( `parent: Node, audio: AudioStream, world_position: Vector3, sound_name: String = "", loop: bool = true` ) |
| `bool` | [stop_sound](#method-stop-sound)( `sound_name: String, fade_seconds: float = 1.0` ) |
| `void` | [start_world_sound](#method-start-world-sound)( `world_data: WorldData` ) |
| `void` | [preload_tracks](#method-preload-tracks)( `paths: PackedStringArray` ) |
| `void` | [set_party_in_combat](#method-set-party-in-combat)( `value: bool` ) |
| `void` | [connect_time](#method-connect-time)( `chrono: ChronoManager, sun: WorldSun` ) |
| `void` | [refresh_time_of_day](#method-refresh-time-of-day)( `instant: bool = false` ) |
| `void` | [set_night](#method-set-night)( `night: bool, instant: bool = false` ) |
| `void` | [connect_party](#method-connect-party)( `party: PartyManager` ) |
| `void` | [set_sound_sources](#method-set-sound-sources)( `layer: SoundLayers.Layer, music: SoundSource, ambience: SoundSource, fade_duration: float = -1.0, ambience_gain_db: float = 0.0` ) |
| `void` | [set_combat_source](#method-set-combat-source)( `layer: SoundLayers.Layer, source: SoundSource, fade_duration: float = -1.0` ) |
| `void` | [set_sound_source_channel](#method-set-sound-source-channel)( `layer: SoundLayers.Layer, channel: StringName, source: SoundSource, fade_duration: float = -1.0` ) |
| `void` | [clear_combat_layers](#method-clear-combat-layers)() |
| `bool` | [set_music_state](#method-set-music-state)( `state_name: String, dynamic_id: int = 0` ) |
| `void` | [set_music_intensity](#method-set-music-intensity)( `value: float, instant: bool = false` ) |
| `bool` | [play_stinger](#method-play-stinger)( `stinger_name: String, dynamic_id: int = 0` ) |
| `void` | [combat_music_start](#method-combat-music-start)() |
| `void` | [combat_music_end](#method-combat-music-end)() |
| `void` | [setup_audio_for_state](#method-setup-audio-for-state)( `game_state: String, world_id: String = "", play_now: bool = true` ) |
| `SoundSource` | [get_menu_source](#method-get-menu-source)( `game_state: String` ) |
| `void` | [switch_to_pause_menu](#method-switch-to-pause-menu)() |
| `void` | [return_from_pause_menu](#method-return-from-pause-menu)() |
| `String` | [get_ui_sound_name](#method-get-ui-sound-name)( `sound: UISound` ) *static* |
| `AudioStreamPlayer` | [get_available_ui_player](#method-get-available-ui-player)() |
| `bool` | [play_ui_sound](#method-play-ui-sound)( `sound: UISound, volume_modifier: float = 0.0` ) |
| `bool` | [play_ui_effect](#method-play-ui-effect)( `display_name: String, volume_modifier: float = 0.0` ) |
| `Array[String]` | [get_available_ui_sfx_types](#method-get-available-ui-sfx-types)() |
| `AudioStreamPlayer3D` | [get_available_3d_player](#method-get-available-3d-player)() |
| `AudioStreamPlayer` | [get_available_2d_player](#method-get-available-2d-player)() |
| `AudioStreamPlayer3D` | [request_3d_audio_player](#method-request-3d-audio-player)( `request: AudioPlayerRequest` ) |
| `void` | [stop_audio_from_requester](#method-stop-audio-from-requester)( `requester_id: String` ) |
| `void` | [return_3d_audio_player](#method-return-3d-audio-player)( `player: AudioStreamPlayer3D` ) |
| `AudioStream` | [get_sfx](#method-get-sfx)( `category: String, type: String` ) |
| `bool` | [has_voice](#method-has-voice)( `voice: String, action: String` ) |
| `AudioStream` | [get_footstep](#method-get-footstep)( `entity_type: String, surface: String, movement: String` ) |
| `AudioStream` | [get_voice](#method-get-voice)( `voice: String, action: String` ) |
| `bool` | [play_sfx_at_position](#method-play-sfx-at-position)( `audio: AudioStream, position: Vector3, volume_db: float = 0.0, pitch_scale: float = 1.0` ) |
| `bool` | [play_voice_global](#method-play-voice-global)( `audio: AudioStream, volume_db: float = 0.0` ) |
| `void` | [stop_voice_global](#method-stop-voice-global)() |
| `bool` | [play_voice_selection_global](#method-play-voice-selection-global)( `hub: GameHost.SystemHub, selection: SFXSelection` ) |
| `bool` | [play_sfx_global](#method-play-sfx-global)( `audio: AudioStream, volume_db: float = 0.0, pitch_scale: float = 1.0` ) |
| `bool` | [play_sfx_at_position_by_name](#method-play-sfx-at-position-by-name)( `category: String, type: String, position: Vector3, volume_db: float = 0.0, pitch_scale: float = 1.0` ) |
| `bool` | [play_sfx_global_by_name](#method-play-sfx-global-by-name)( `category: String, type: String, volume_db: float = 0.0, pitch_scale: float = 1.0` ) |
| `void` | [update_entity_sfx_time_scale](#method-update-entity-sfx-time-scale)( `time_scale: float` ) |
| `void` | [stop_all_audio](#method-stop-all-audio)() |
| `void` | [pause_all_audio](#method-pause-all-audio)() |
| `void` | [resume_all_audio](#method-resume-all-audio)() |

## Signals

### time_of_day_changed( night: bool ) {#signal-time-of-day-changed}

The sun went down or came up (the sources with a night version have crossfaded)

## Enumerations

### enum UISound {#enum-uisound}

========== UI SOUND ENUMS ==========

- **CLICK** = `0`
- **ERROR_CLICK** = `1`
- **HOVER** = `2`
- **PANEL** = `3`
- **LOOT_OPEN** = `4`
- **LOOT_CLOSE** = `5`
- **PURCHASE** = `6`
- **SELL** = `7`
- **CONFIRM** = `8`
- **CANCEL** = `9`
- **NAVIGATION** = `10`
- **TAB_SWITCH** = `11`
- **WINDOW_OPEN** = `12`
- **WINDOW_CLOSE** = `13`
- **INVENTORY_MOVE** = `14`
- **EQUIP_ITEM** = `15`
- **QUEST_COMPLETE** = `16`
- **QUEST_FAILED** = `17`
- **GAME_OVER** = `18`
- **CHARACTER_SELECT** = `19`
- **LEVEL_UP** = `20`
- **NOTIFICATION** = `21`
- **ITEM_DROP** = `22`
- **ITEM_USE** = `23`
- **MONEY** = `24`
- **CRAFT_COMPLETE** = `25`
- **ITEM_BREAK** = `26`
- **ITEM_REPAIR** = `27`
- **MAP_OPEN** = `28`
- **MAP_CLOSE** = `29`
- **JOURNAL_UPDATE** = `30`
- **ACHIEVEMENT** = `31`
- **CANT_DO** = `32`

## Constants

- `int` **SFX_3D_POOL_SIZE** = `50` - Pool sizes
- `int` **SFX_2D_POOL_SIZE** = `20` - How many players of 2D sound effects are made.
- `int` **UI_AUDIO_POOL_SIZE** = `5` - How many players of interface sounds are made.
- `float` **FADE_DURATION** = `3.0` - How many seconds a crossfade takes.

## Variable descriptions

### Dictionary gameplay_sfx_cache =  {#var-gameplay-sfx-cache}

========== CACHE STORAGE ==========

### Array[AudioStreamPlayer3D] sfx_3d_players = []      # For positional SFX {#var-sfx-3d-players}

========== AUDIO PLAYER POOLS ==========

### Array[AudioStreamPlayer] sfx_2d_players = [] {#var-sfx-2d-players}

For UI/global SFX

### Array[AudioStreamPlayer] ui_audio_players = [] {#var-ui-audio-players}

Dedicated UI audio players

### AudioStreamPlayer                    # Music player A (for crossfading) music_player_a {#var-music-player-a}

========== GLOBAL MUSIC &amp; AMBIENCE PLAYERS ==========

### AudioStreamPlayer music_player_b {#var-music-player-b}

Music player B (for crossfading)

### AudioStreamPlayer ambience_player_a {#var-ambience-player-a}

Ambience player A (for crossfading)

### AudioStreamPlayer ambience_player_b {#var-ambience-player-b}

Ambience player B (for crossfading)

### DynamicMusicPlayer dynamic_player {#var-dynamic-player}

The player of a Dynamic Music (a music source that changes with the game; see DynamicMusicPlayer)

### AudioStreamPlayer active_music_player {#var-active-music-player}

Track which players are currently active

### AudioStreamPlayer active_ambience_player {#var-active-ambience-player}

The ambience player that plays now (the other one fades in).

### Tween music_crossfade_tween {#var-music-crossfade-tween}

Crossfade tweens

### Tween ambience_crossfade_tween {#var-ambience-crossfade-tween}

The tween of the ambience crossfade.

### SoundLayers sound_layers = SoundLayers.new() {#var-sound-layers}

========== SOUND LAYERS ========== The layers of the music and the ambience: the world, the zone, the weather, a shelter and an event can each say what plays (see SoundLayers)

### SoundLayers combat_layers = SoundLayers.new() {#var-combat-layers}

The layers of the combat music: the world, the zone and the encounter (the encounter wins). It plays instead of the music while the party is in combat

### bool party_in_combat = false {#var-party-in-combat}

True while a member of the party is in combat (PartyManager.party_combat_changed), and for a few seconds after

### bool is_night = false {#var-is-night}

Is it night (the sun has set)? The sources that have a night version play it, the albums leave out the tracks that play by day only, and a Dynamic Music with a state called Night goes to it (see TimeOfDay)

### bool ui_sfx_initialized = false {#var-ui-sfx-initialized}

========== INITIALIZATION FLAGS ==========

### bool gameplay_sfx_initialized = false {#var-gameplay-sfx-initialized}

True once the sound effects of the game are ready.

### bool world_audio_initialized = false {#var-world-audio-initialized}

True once the music and ambience layers are in use (a menu or a world has started its sound).

### bool in_combat = false {#var-in-combat}

========== STATE VARIABLES ==========

### String current_game_state = "main_menu" {#var-current-game-state}

The part of the game that is on ("main_menu", "character_creation", "loading_screen", "main_game"), which picks the menu music.

### float music_volume_db = 0.0 : set = set_music_volume {#var-music-volume-db}

Volume settings

### float ambience_volume_db = 0.0 : set = set_ambience_volume {#var-ambience-volume-db}

The volume of the ambience, in decibels.

### float ui_sfx_volume_db = -10.0 : set = set_ui_sfx_volume {#var-ui-sfx-volume-db}

The volume of the sounds of the interface, in decibels.

### Dictionary spawned_sounds =  {#var-spawned-sounds}

The sounds that events spawned and that play under a name: name -&gt; AmbientSound

## Method descriptions

### void initialize_gameplay() {#method-initialize-gameplay}

Initialize gameplay SFX - call this when starting/loading a game

### void set_music_volume( value: float ) {#method-set-music-volume}

Set music volume

### void set_ambience_volume( value: float ) {#method-set-ambience-volume}

Set ambience volume

### void set_ui_sfx_volume( value: float ) {#method-set-ui-sfx-volume}

Set UI SFX volume

### AudioStreamPlayer get_inactive_music_player() {#method-get-inactive-music-player}

Get the inactive music player (for crossfading)

### AudioStreamPlayer get_inactive_ambience_player() {#method-get-inactive-ambience-player}

Get the inactive ambience player (for crossfading)

### void crossfade_music( new_track: AudioStream, target_volume_db: float, fade_duration: float = FADE_DURATION ) {#method-crossfade-music}

Crossfade to new music track

### void crossfade_ambience( new_track: AudioStream, target_volume_db: float, fade_duration: float = FADE_DURATION ) {#method-crossfade-ambience}

Crossfade to new ambience track

### void switch_music_immediate( new_track: AudioStream, target_volume_db: float ) {#method-switch-music-immediate}

Immediate music switch (no crossfade)

### void switch_ambience_immediate( new_track: AudioStream, target_volume_db: float ) {#method-switch-ambience-immediate}

Immediate ambience switch (no crossfade)

### void play_music( use_crossfade: bool = true, fade_duration: float = FADE_DURATION ) {#method-play-music}

Plays what the music layers say now (a menu, the world, a zone, a weather, a shelter, an event; the combat music while the party fights), with a crossfade when something plays

### void play_ambience( use_crossfade: bool = true, fade_duration: float = FADE_DURATION ) {#method-play-ambience}

Plays what the ambience layers say now (the same)

### void fade_stop_music( fade_duration: float = FADE_DURATION ) {#method-fade-stop-music}

Smoothly fade out current music track

### void fade_stop_ambience( fade_duration: float = FADE_DURATION ) {#method-fade-stop-ambience}

Smoothly fade out current ambience

### void stop_music() {#method-stop-music}

Stop current music track immediately

### void stop_ambience() {#method-stop-ambience}

Stop ambient sound track immediately

### void set_sound_layer( layer: SoundLayers.Layer, music_tracks: PackedStringArray, ambience_tracks: PackedStringArray, music_db: float = 0.0, ambience_db: float = 0.0, fade_duration: float = FADE_DURATION, loop: bool = true ) {#method-set-sound-layer}

Sets a layer: the music and ambience tracks it plays (file paths; an empty list leaves that channel to the layers below), how loud, and the seconds the sound takes to change. `loop` false: the track plays once

### void clear_sound_layers() {#method-clear-sound-layers}

Takes every layer off without changing what plays (the world is left: its zone, weather, shelter and event tracks go with it; the next world sets its own)

### void set_sound_channel( layer: SoundLayers.Layer, channel: StringName, tracks: PackedStringArray, volume_db: float = 0.0, fade_duration: float = FADE_DURATION, loop: bool = true ) {#method-set-sound-channel}

Sets one channel of a layer (an event plays a music track and an ambience track on their own): the tracks, how loud, whether they loop, and the seconds the sound takes to change

### void clear_sound_channel( layer: SoundLayers.Layer, channel: StringName, fade_duration: float = FADE_DURATION ) {#method-clear-sound-channel}

Takes one channel of a layer off: what is under it comes back over the seconds

### void clear_sound_layer( layer: SoundLayers.Layer, fade_duration: float = FADE_DURATION ) {#method-clear-sound-layer}

Takes a layer off: what is under it (another layer, or the album) comes back over the seconds

### void drop_event_track( channel: StringName ) {#method-drop-event-track}

An event stopped the music or the ambience: its track is dropped without bringing anything else back (what is under it plays again only when a layer next changes)

### AmbientSound spawn_sound( parent: Node, audio: AudioStream, world_position: Vector3, sound_name: String = "", loop: bool = true ) {#method-spawn-sound}

Spawns a 3D sound under a node at a place. A sound given a name replaces the one that plays under it

### bool stop_sound( sound_name: String, fade_seconds: float = 1.0 ) {#method-stop-sound}

Fades out the sound spawned under a name and takes it away. False when nothing plays under the name

### void start_world_sound( world_data: WorldData ) {#method-start-world-sound}

The world's sound starts: the music, the ambience and the combat music the world says are its layer, and every track the world can need is asked for in the background (or waited for: Gameplay Config &gt; Audio)

### void preload_tracks( paths: PackedStringArray ) {#method-preload-tracks}

Asks for files to be loaded in the background, so a source that starts later finds them ready (a world with many zones loads its albums while the party plays). In the mode "wait" the call waits for them

### void set_party_in_combat( value: bool ) {#method-set-party-in-combat}

The party enters or leaves a fight (PartyManager). The combat music starts at once and ends after a few seconds without a fight (Gameplay Config &gt; Audio)

### void connect_time( chrono: ChronoManager, sun: WorldSun ) {#method-connect-time}

Listens to the clock and the sun: each game minute it looks whether the sun has set or risen (called once by the game host)

### void refresh_time_of_day( instant: bool = false ) {#method-refresh-time-of-day}

Looks at the sun and the clock now: night between the sunset and the sunrise of the sun in use, and a static sun is always day. `instant` changes the sound at once, with no fade

### void set_night( night: bool, instant: bool = false ) {#method-set-night}

The sound goes to the night (or the day): the sources with a night version crossfade to it, the cursors of the albums that play pick tracks that fit the time from now on (the track that plays goes on to its end), and a Dynamic Music that is in its Day or Night state goes to the other

### void connect_party( party: PartyManager ) {#method-connect-party}

Listens to the party (called once by the game host)

### void set_sound_sources( layer: SoundLayers.Layer, music: SoundSource, ambience: SoundSource, fade_duration: float = -1.0, ambience_gain_db: float = 0.0 ) {#method-set-sound-sources}

A layer says what plays (a zone, a weather ...): a music source and an ambience source (null = nothing of its own). `ambience_gain_db` makes the ambience quieter or louder (the weather's, by its intensity)

### void set_combat_source( layer: SoundLayers.Layer, source: SoundSource, fade_duration: float = -1.0 ) {#method-set-combat-source}

A layer says what its combat music is (a zone, an encounter): null takes it off

### void set_sound_source_channel( layer: SoundLayers.Layer, channel: StringName, source: SoundSource, fade_duration: float = -1.0 ) {#method-set-sound-source-channel}

One channel of a layer says what plays (an event): a source, null takes the channel off. The sound changes over the seconds (-1 = the project's default)

### void clear_combat_layers() {#method-clear-combat-layers}

The combat layers are cleared (the world is left)

### bool set_music_state( state_name: String, dynamic_id: int = 0 ) {#method-set-music-state}

Changes the state of the Dynamic Music that plays (an event, a boss phase). With `dynamic_id` the music is started in that state when it is not the one that plays (as the music of the event layer). False when there is no such state or no Dynamic Music plays

### void set_music_intensity( value: float, instant: bool = false ) {#method-set-music-intensity}

The intensity (0 to 1) of the Dynamic Music that plays: the layers whose "from intensity" is at most this play

### bool play_stinger( stinger_name: String, dynamic_id: int = 0 ) {#method-play-stinger}

Plays a stinger of the Dynamic Music that plays, or of the one with this id, over the music. False when there is none

### void combat_music_start() {#method-combat-music-start}

Start combat music immediately with crossfade

### void combat_music_end() {#method-combat-music-end}

End combat music with crossfade (the music of the place comes back)

### void setup_audio_for_state( game_state: String, world_id: String = "", play_now: bool = true ) {#method-setup-audio-for-state}

The music of a menu or the game: "main_menu", "character_creation", "loading_screen", "pause_menu" (over the game) or "main_game" (the world with this id starts its sound). The menus play what Gameplay Config &gt; Audio says (a sound source: a track, or a Music Album). `play_now` false sets the music without playing it (the main menu starts it after the splash screen: play_music())

### SoundSource get_menu_source( game_state: String ) {#method-get-menu-source}

The sound source of a menu, from the Gameplay Config (null = the menu has no music of its own)

### void switch_to_pause_menu() {#method-switch-to-pause-menu}

Switch to the pause menu (it plays over the game: the music of the game comes back with return_from_pause_menu)

### void return_from_pause_menu() {#method-return-from-pause-menu}

Return from the pause menu: the menu's music goes and what the game plays comes back

### String get_ui_sound_name( sound: UISound ) {#method-get-ui-sound-name}

Convert UISound enum to database folder name

### AudioStreamPlayer get_available_ui_player() {#method-get-available-ui-player}

Get available UI audio player from pool

### bool play_ui_sound( sound: UISound, volume_modifier: float = 0.0 ) {#method-play-ui-sound}

Play UI effect using enum

### bool play_ui_effect( display_name: String, volume_modifier: float = 0.0 ) {#method-play-ui-effect}

Enhanced UI effect playing with database integration (modular approach)

### Array[String] get_available_ui_sfx_types() {#method-get-available-ui-sfx-types}

Get all available UI SFX types from database

### AudioStreamPlayer3D get_available_3d_player() {#method-get-available-3d-player}

Get available 3D audio player from pool

### AudioStreamPlayer get_available_2d_player() {#method-get-available-2d-player}

Get available 2D audio player from pool

### AudioStreamPlayer3D request_3d_audio_player( request: AudioPlayerRequest ) {#method-request-3d-audio-player}

Request a configured 3D audio player with automatic setup and RemoteTransform3D positioning

### void stop_audio_from_requester( requester_id: String ) {#method-stop-audio-from-requester}

Stop all audio from a specific requester (for exclusive playback)

### void return_3d_audio_player( player: AudioStreamPlayer3D ) {#method-return-3d-audio-player}

Manual cleanup for a specific player (when stopping mid-playback)

### AudioStream get_sfx( category: String, type: String ) {#method-get-sfx}

Get random SFX audio from cache

### bool has_voice( voice: String, action: String ) {#method-has-voice}

Does the voice ("entity type/variant") have files for this action?

### AudioStream get_footstep( entity_type: String, surface: String, movement: String ) {#method-get-footstep}

Get random footstep audio from cache

### AudioStream get_voice( voice: String, action: String ) {#method-get-voice}

Get random voice audio from cache

### bool play_sfx_at_position( audio: AudioStream, position: Vector3, volume_db: float = 0.0, pitch_scale: float = 1.0 ) {#method-play-sfx-at-position}

Play SFX at a 3D position

### bool play_voice_global( audio: AudioStream, volume_db: float = 0.0 ) {#method-play-voice-global}

Plays a spoken line that is heard from nowhere (the voice of a quest, a narrator) on the Voice bus. One line at a time: a new line replaces the one that plays.

### void stop_voice_global() {#method-stop-voice-global}

Stops the line that plays with `play_voice_global`.

### bool play_voice_selection_global( hub: GameHost.SystemHub, selection: SFXSelection ) {#method-play-voice-selection-global}

Plays a voice line selection heard from nowhere on the Voice bus and shows its subtitle (the quest voice lines, the Play Voice Line action without a speaker). Does nothing for a selection that is not a voice line. Returns true when something played.

### bool play_sfx_global( audio: AudioStream, volume_db: float = 0.0, pitch_scale: float = 1.0 ) {#method-play-sfx-global}

*No description yet.*

### bool play_sfx_at_position_by_name( category: String, type: String, position: Vector3, volume_db: float = 0.0, pitch_scale: float = 1.0 ) {#method-play-sfx-at-position-by-name}

Play SFX by category/type at position

### bool play_sfx_global_by_name( category: String, type: String, volume_db: float = 0.0, pitch_scale: float = 1.0 ) {#method-play-sfx-global-by-name}

Play SFX by category/type globally

### void update_entity_sfx_time_scale( time_scale: float ) {#method-update-entity-sfx-time-scale}

Update pitch scale for time scaling

### void stop_all_audio() {#method-stop-all-audio}

Stop all audio (emergency stop)

### void pause_all_audio() {#method-pause-all-audio}

Pause all audio

### void resume_all_audio() {#method-resume-all-audio}

Resume all audio

