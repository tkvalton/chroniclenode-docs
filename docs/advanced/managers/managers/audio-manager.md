<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# AudioManager

**Inherits:** [Node](https://docs.godotengine.org/en/stable/classes/class_node.html)

Centralized audio system managing music, ambiance, and sound effects with pooled players and phased initialization for fast startup.

## Description

PHASED INITIALIZATION:

- Phase 1 (_init): Loads UI sounds only for fast startup
- Phase 2 (initialize_gameplay): Loads all gameplay audio when entering game

AUDIO SYSTEMS:

- Music: Dual-player crossfading system for seamless transitions
- Ambiance: Separate crossfading for environmental soundscapes
- SFX: Pooled 3D/2D audio players for positional and global sounds
- Albums: Organized music/ambiance collections (UI and world albums)

SOUND EFFECTS:

- Categorized cache: UI, abilities, combat, footsteps, voices
- 3D audio: Positional sound with entity attachment support
- Advanced requests: RT_Audio3DRequest for precise control (attenuation, doppler, etc.)
- Automatic pooling: Players return to pool when finished

USAGE:

- Startup: _init() runs automatically, UI sounds ready immediately
- Gameplay: Call initialize_gameplay() when entering game
- Music: load_ui_album() / load_world_album(), then play_ui_music() / play_world_music()
- SFX: get_sfx(category, type) then play_sfx_at_position() or play_sfx_global()
- 3D Audio: Create RT_Audio3DRequest and call play_3d_audio_from_request()

VOLUME CONTROL: Separate volume controls via setters: music_volume_db, ambiance_volume_db, ui_sfx_volume_db

## Variables

| | | |
|---|---|---|
| `Dictionary` | [ui_sfx_cache](#var-ui-sfx-cache) | `{}           # UI sound effects only` |
| `Dictionary` | [gameplay_sfx_cache](#var-gameplay-sfx-cache) | `{}     # Gameplay SFX (abilities, footsteps, voices)` |
| `Array[AudioStreamPlayer3D]` | [sfx_3d_players](#var-sfx-3d-players) | `[]      # For positional SFX` |
| `Array[AudioStreamPlayer]` | [sfx_2d_players](#var-sfx-2d-players) | `[]        # For UI/global SFX` |
| `Array[AudioStreamPlayer]` | [ui_audio_players](#var-ui-audio-players) | `[]      # Dedicated UI audio players` |
| `AudioStreamPlayer                    # Music player A (for crossfading)` | [music_player_a](#var-music-player-a) |  |
| `AudioStreamPlayer                    # Music player B (for crossfading)` | [music_player_b](#var-music-player-b) |  |
| `AudioStreamPlayer                 # Ambiance player A (for crossfading)` | [ambiance_player_a](#var-ambiance-player-a) |  |
| `AudioStreamPlayer                 # Ambiance player B (for crossfading)` | [ambiance_player_b](#var-ambiance-player-b) |  |
| `AudioStreamPlayer` | [active_music_player](#var-active-music-player) |  |
| `AudioStreamPlayer` | [active_ambiance_player](#var-active-ambiance-player) |  |
| `Tween` | [music_crossfade_tween](#var-music-crossfade-tween) |  |
| `Tween` | [ambiance_crossfade_tween](#var-ambiance-crossfade-tween) |  |
| `UIAlbum                            # Currently loaded UI album` | [current_ui_album](#var-current-ui-album) |  |
| `AudioAlbum                        # Currently loaded world album` | [current_world_album](#var-current-world-album) |  |
| `Array[AudioStream]` | [loaded_ui_music_tracks](#var-loaded-ui-music-tracks) | `[]` |
| `Array[AudioStream]` | [loaded_ui_ambient_tracks](#var-loaded-ui-ambient-tracks) | `[]` |
| `Array[AudioStream]` | [loaded_ui_transition_tracks](#var-loaded-ui-transition-tracks) | `[]` |
| `Array[AudioStream]` | [loaded_world_music_tracks](#var-loaded-world-music-tracks) | `[]` |
| `Array[AudioStream]` | [loaded_world_combat_tracks](#var-loaded-world-combat-tracks) | `[]` |
| `Array[AudioStream]` | [loaded_world_ambient_tracks](#var-loaded-world-ambient-tracks) | `[]` |
| `bool` | [ui_sfx_initialized](#var-ui-sfx-initialized) | `false` |
| `bool` | [gameplay_sfx_initialized](#var-gameplay-sfx-initialized) | `false` |
| `bool` | [world_audio_initialized](#var-world-audio-initialized) | `false` |
| `bool` | [ui_album_initialized](#var-ui-album-initialized) | `false` |
| `bool` | [in_combat](#var-in-combat) | `false` |
| `String` | [current_game_state](#var-current-game-state) | `"main_menu"` |
| `String` | [active_album_type](#var-active-album-type) | `"ui"  # "ui" or "world"` |
| `float` | [music_volume_db](#var-music-volume-db) | `0.0 : set = set_music_volume` |
| `float` | [ambiance_volume_db](#var-ambiance-volume-db) | `0.0 : set = set_ambiance_volume` |
| `float` | [ui_sfx_volume_db](#var-ui-sfx-volume-db) | `-10.0 : set = set_ui_sfx_volume` |

## Methods

| | |
|---|---|
| `void` | [initialize_gameplay](#method-initialize-gameplay)() |
| `void` | [set_ui_album](#method-set-ui-album)( `album: UIAlbum` ) |
| `UIAlbum` | [get_ui_album_for_state](#method-get-ui-album-for-state)( `game_state: String` ) |
| `void` | [initialize_world_audio](#method-initialize-world-audio)( `album: AudioAlbum` ) |
| `void` | [set_music_volume](#method-set-music-volume)( `value: float` ) |
| `void` | [set_ambiance_volume](#method-set-ambiance-volume)( `value: float` ) |
| `void` | [set_ui_sfx_volume](#method-set-ui-sfx-volume)( `value: float` ) |
| `AudioStreamPlayer` | [get_inactive_music_player](#method-get-inactive-music-player)() |
| `AudioStreamPlayer` | [get_inactive_ambiance_player](#method-get-inactive-ambiance-player)() |
| `void` | [crossfade_music](#method-crossfade-music)( `new_track: AudioStream, target_volume_db: float, fade_duration: float = FADE_DURATION` ) |
| `void` | [crossfade_ambiance](#method-crossfade-ambiance)( `new_track: AudioStream, target_volume_db: float, fade_duration: float = FADE_DURATION` ) |
| `void` | [switch_music_immediate](#method-switch-music-immediate)( `new_track: AudioStream, target_volume_db: float` ) |
| `void` | [switch_ambiance_immediate](#method-switch-ambiance-immediate)( `new_track: AudioStream, target_volume_db: float` ) |
| `void` | [play_music](#method-play-music)( `album_type: String = "world", use_crossfade: bool = true, fade_duration: float = FADE_DURATION` ) |
| `void` | [play_ambiance](#method-play-ambiance)( `album_type: String = "world", use_crossfade: bool = true, fade_duration: float = FADE_DURATION` ) |
| `void` | [fade_stop_music](#method-fade-stop-music)( `fade_duration: float = FADE_DURATION` ) |
| `void` | [fade_stop_ambiance](#method-fade-stop-ambiance)( `fade_duration: float = FADE_DURATION` ) |
| `void` | [stop_music](#method-stop-music)() |
| `void` | [stop_ambiance](#method-stop-ambiance)() |
| `void` | [combat_music_start](#method-combat-music-start)() |
| `void` | [combat_music_end](#method-combat-music-end)() |
| `void` | [setup_audio_for_state](#method-setup-audio-for-state)( `game_state: String, world_id: String = ""` ) |
| `void` | [switch_to_pause_menu](#method-switch-to-pause-menu)() |
| `void` | [return_from_pause_menu](#method-return-from-pause-menu)() |
| `String` | [get_ui_sound_name](#method-get-ui-sound-name)( `sound: UISound` ) |
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
| `AudioStream` | [get_footstep](#method-get-footstep)( `entity_type: String, surface: String, movement: String` ) |
| `AudioStream` | [get_voice](#method-get-voice)( `voice: String, action: String` ) |
| `bool` | [play_sfx_at_position](#method-play-sfx-at-position)( `audio: AudioStream, position: Vector3, volume_db: float = 0.0, pitch_scale: float = 1.0` ) |
| `bool` | [play_sfx_global](#method-play-sfx-global)( `audio: AudioStream, volume_db: float = 0.0, pitch_scale: float = 1.0` ) |
| `bool` | [play_sfx_at_position_by_name](#method-play-sfx-at-position-by-name)( `category: String, type: String, position: Vector3, volume_db: float = 0.0, pitch_scale: float = 1.0` ) |
| `bool` | [play_sfx_global_by_name](#method-play-sfx-global-by-name)( `category: String, type: String, volume_db: float = 0.0, pitch_scale: float = 1.0` ) |
| `void` | [update_entity_sfx_time_scale](#method-update-entity-sfx-time-scale)( `time_scale: float` ) |
| `void` | [stop_all_audio](#method-stop-all-audio)() |
| `void` | [pause_all_audio](#method-pause-all-audio)() |
| `void` | [resume_all_audio](#method-resume-all-audio)() |

## Enumerations

### enum UISound {#enum-uisound}

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

## Constants

- `int` **SFX_3D_POOL_SIZE** = `50`
- `int` **SFX_2D_POOL_SIZE** = `20`
- `int` **UI_AUDIO_POOL_SIZE** = `5`
- `float` **FADE_DURATION** = `3.0`

## Variable descriptions

### Dictionary ui_sfx_cache =            # UI sound effects only {#var-ui-sfx-cache}

*No description yet.*

### Dictionary gameplay_sfx_cache =      # Gameplay SFX (abilities, footsteps, voices) {#var-gameplay-sfx-cache}

*No description yet.*

### Array[AudioStreamPlayer3D] sfx_3d_players = []      # For positional SFX {#var-sfx-3d-players}

*No description yet.*

### Array[AudioStreamPlayer] sfx_2d_players = []        # For UI/global SFX {#var-sfx-2d-players}

*No description yet.*

### Array[AudioStreamPlayer] ui_audio_players = []      # Dedicated UI audio players {#var-ui-audio-players}

*No description yet.*

### AudioStreamPlayer                    # Music player A (for crossfading) music_player_a {#var-music-player-a}

*No description yet.*

### AudioStreamPlayer                    # Music player B (for crossfading) music_player_b {#var-music-player-b}

*No description yet.*

### AudioStreamPlayer                 # Ambiance player A (for crossfading) ambiance_player_a {#var-ambiance-player-a}

*No description yet.*

### AudioStreamPlayer                 # Ambiance player B (for crossfading) ambiance_player_b {#var-ambiance-player-b}

*No description yet.*

### AudioStreamPlayer active_music_player {#var-active-music-player}

*No description yet.*

### AudioStreamPlayer active_ambiance_player {#var-active-ambiance-player}

*No description yet.*

### Tween music_crossfade_tween {#var-music-crossfade-tween}

*No description yet.*

### Tween ambiance_crossfade_tween {#var-ambiance-crossfade-tween}

*No description yet.*

### UIAlbum                            # Currently loaded UI album current_ui_album {#var-current-ui-album}

*No description yet.*

### AudioAlbum                        # Currently loaded world album current_world_album {#var-current-world-album}

*No description yet.*

### Array[AudioStream] loaded_ui_music_tracks = [] {#var-loaded-ui-music-tracks}

*No description yet.*

### Array[AudioStream] loaded_ui_ambient_tracks = [] {#var-loaded-ui-ambient-tracks}

*No description yet.*

### Array[AudioStream] loaded_ui_transition_tracks = [] {#var-loaded-ui-transition-tracks}

*No description yet.*

### Array[AudioStream] loaded_world_music_tracks = [] {#var-loaded-world-music-tracks}

*No description yet.*

### Array[AudioStream] loaded_world_combat_tracks = [] {#var-loaded-world-combat-tracks}

*No description yet.*

### Array[AudioStream] loaded_world_ambient_tracks = [] {#var-loaded-world-ambient-tracks}

*No description yet.*

### bool ui_sfx_initialized = false {#var-ui-sfx-initialized}

*No description yet.*

### bool gameplay_sfx_initialized = false {#var-gameplay-sfx-initialized}

*No description yet.*

### bool world_audio_initialized = false {#var-world-audio-initialized}

*No description yet.*

### bool ui_album_initialized = false {#var-ui-album-initialized}

*No description yet.*

### bool in_combat = false {#var-in-combat}

*No description yet.*

### String current_game_state = "main_menu" {#var-current-game-state}

*No description yet.*

### String active_album_type = "ui"  # "ui" or "world" {#var-active-album-type}

*No description yet.*

### float music_volume_db = 0.0 : set = set_music_volume {#var-music-volume-db}

*No description yet.*

### float ambiance_volume_db = 0.0 : set = set_ambiance_volume {#var-ambiance-volume-db}

*No description yet.*

### float ui_sfx_volume_db = -10.0 : set = set_ui_sfx_volume {#var-ui-sfx-volume-db}

*No description yet.*

## Method descriptions

### void initialize_gameplay() {#method-initialize-gameplay}

Initialize gameplay SFX - call this when starting/loading a game

### void set_ui_album( album: UIAlbum ) {#method-set-ui-album}

Set UI album for current game state

### UIAlbum get_ui_album_for_state( game_state: String ) {#method-get-ui-album-for-state}

Get UI album for specific game state

### void initialize_world_audio( album: AudioAlbum ) {#method-initialize-world-audio}

Initialize world-specific audio - call this when loading a new world

### void set_music_volume( value: float ) {#method-set-music-volume}

Set music volume

### void set_ambiance_volume( value: float ) {#method-set-ambiance-volume}

Set ambiance volume

### void set_ui_sfx_volume( value: float ) {#method-set-ui-sfx-volume}

Set UI SFX volume

### AudioStreamPlayer get_inactive_music_player() {#method-get-inactive-music-player}

Get the inactive music player (for crossfading)

### AudioStreamPlayer get_inactive_ambiance_player() {#method-get-inactive-ambiance-player}

Get the inactive ambiance player (for crossfading)

### void crossfade_music( new_track: AudioStream, target_volume_db: float, fade_duration: float = FADE_DURATION ) {#method-crossfade-music}

Crossfade to new music track

### void crossfade_ambiance( new_track: AudioStream, target_volume_db: float, fade_duration: float = FADE_DURATION ) {#method-crossfade-ambiance}

Crossfade to new ambiance track

### void switch_music_immediate( new_track: AudioStream, target_volume_db: float ) {#method-switch-music-immediate}

Immediate music switch (no crossfade)

### void switch_ambiance_immediate( new_track: AudioStream, target_volume_db: float ) {#method-switch-ambiance-immediate}

Immediate ambiance switch (no crossfade)

### void play_music( album_type: String = "world", use_crossfade: bool = true, fade_duration: float = FADE_DURATION ) {#method-play-music}

Play appropriate music track based on album type and current state (with crossfading)

### void play_ambiance( album_type: String = "world", use_crossfade: bool = true, fade_duration: float = FADE_DURATION ) {#method-play-ambiance}

Play ambient sound track based on album type (with crossfading)

### void fade_stop_music( fade_duration: float = FADE_DURATION ) {#method-fade-stop-music}

Smoothly fade out current music track

### void fade_stop_ambiance( fade_duration: float = FADE_DURATION ) {#method-fade-stop-ambiance}

Smoothly fade out current ambiance

### void stop_music() {#method-stop-music}

Stop current music track immediately

### void stop_ambiance() {#method-stop-ambiance}

Stop ambient sound track immediately

### void combat_music_start() {#method-combat-music-start}

Start combat music immediately (always uses world album) with crossfade

### void combat_music_end() {#method-combat-music-end}

End combat music with crossfade (returns to active album type)

### void setup_audio_for_state( game_state: String, world_id: String = "" ) {#method-setup-audio-for-state}

Setup audio for a specific game state

### void switch_to_pause_menu() {#method-switch-to-pause-menu}

Switch to pause menu (overlay on main game)

### void return_from_pause_menu() {#method-return-from-pause-menu}

Return from pause menu (restore previous state)

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

### AudioStream get_footstep( entity_type: String, surface: String, movement: String ) {#method-get-footstep}

Get random footstep audio from cache

### AudioStream get_voice( voice: String, action: String ) {#method-get-voice}

Get random voice audio from cache

### bool play_sfx_at_position( audio: AudioStream, position: Vector3, volume_db: float = 0.0, pitch_scale: float = 1.0 ) {#method-play-sfx-at-position}

Play SFX at a 3D position

### bool play_sfx_global( audio: AudioStream, volume_db: float = 0.0, pitch_scale: float = 1.0 ) {#method-play-sfx-global}

Play SFX globally (2D)

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

