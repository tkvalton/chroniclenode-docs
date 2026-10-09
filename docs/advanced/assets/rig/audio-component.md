<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# AudioComponent

**Inherits:** [Node3D](https://docs.godotengine.org/en/stable/classes/class_node3d.html)

AudioComponent - Unified audio playback system for entities and interactables Handles motion sounds, entity voice sounds, voicelines, and effect sounds using AudioManager's pooled system.

## Description

This component creates RemoteTransform3D nodes to position audio in 3D space, then borrows AudioStreamPlayer3D instances from AudioManager's pools.

Features:

- Motion audio (footsteps) - uses SFX bus
- Entity voice audio (combat barks: attack, hit, pain) - uses Voice bus, requires entity setup
- Voiceline audio (dialogue) - uses Voice bus, works with any character name, single player tracked
- Effect audio (impacts, spells, etc.) - uses SFX bus
- Automatic cleanup and return of audio players
- Support for exclusive playback and fade effects

## Variables

| | | |
|---|---|---|
| `Array[RemoteTransform3D]` | [motion_remotes](#var-motion-remotes) | `[]` |
| `Array[RemoteTransform3D]` | [voice_remotes](#var-voice-remotes) | `[]` |
| `Array[RemoteTransform3D]` | [effect_remotes](#var-effect-remotes) | `[]` |
| `RemoteTransform3D` | [voiceline_remote](#var-voiceline-remote) | `null` |
| `AudioStreamPlayer3D` | [active_voiceline_player](#var-active-voiceline-player) | `null` |
| `Dictionary` | [active_players](#var-active-players) | `{}  # player -> {remote: RemoteTransform3D, requester_id:...` |
| `Dictionary` | [active_exclusive_effects](#var-active-exclusive-effects) | `{}  # sound_path -> player` |
| `String` | [entity_type](#var-entity-type) | `""` |
| `String` | [voice_type](#var-voice-type) | `""` |
| `bool` | [hit_audio_on_cooldown](#var-hit-audio-on-cooldown) | `false` |
| `AudioManager` | [audio_manager](#var-audio-manager) |  |
| `ChronoManager` | [chrono_manager](#var-chrono-manager) |  |

## Methods

| | |
|---|---|
| `void` | [setup_for_entity](#method-setup-for-entity)( `owning_entity: Entity` ) |
| `void` | [setup_for_interactable](#method-setup-for-interactable)() |
| `bool` | [play_motion_audio](#method-play-motion-audio)( `surface: String, movement: String` ) |
| `bool` | [play_entity_voice_audio](#method-play-entity-voice-audio)( `action: String, volume: float = -5.0` ) |
| `bool` | [play_voiceline_audio](#method-play-voiceline-audio)( `character_name: String, file_name: String = "", volume: float = -5.0` ) |
| `void` | [stop_voice_line_audio](#method-stop-voice-line-audio)() |
| `bool` | [play_hit_voice](#method-play-hit-voice)() |
| `bool` | [play_hit_long_voice](#method-play-hit-long-voice)() |
| `bool` | [play_pain_voice](#method-play-pain-voice)() |
| `bool` | [play_jump_start_voice](#method-play-jump-start-voice)() |
| `bool` | [play_jump_end_voice](#method-play-jump-end-voice)() |
| `bool` | [play_sound_stream](#method-play-sound-stream)( `stream: AudioStream, volume_db: float = 0.0` ) |
| `bool` | [play_effect](#method-play-effect)( `sound: AudioStream, exclusive: bool = false, volume_db: float = 0.0, pitch_scale: float = 1.0, max_distance: float = 20.0, unit_size: float = 10.0` ) |
| `bool` | [play_sfx_selection](#method-play-sfx-selection)( `sfx_selection: SFXSelection, volume_modifier: float = 0.0` ) |
| `bool` | [stop_effect](#method-stop-effect)( `sound: AudioStream` ) |
| `void` | [stop_all_audio](#method-stop-all-audio)() |

## Constants

- `int` **MOTION_REMOTE_COUNT** = `4      # For footsteps (left/right foot)` - Number of RemoteTransform3D nodes to create for different audio types
- `int` **VOICE_REMOTE_COUNT** = `4       # For voice lines and combat sounds`
- `int` **EFFECT_REMOTE_COUNT** = `4      # For various effects`

## Variable descriptions

### Array[RemoteTransform3D] motion_remotes = [] {#var-motion-remotes}

*No description yet.*

### Array[RemoteTransform3D] voice_remotes = [] {#var-voice-remotes}

*No description yet.*

### Array[RemoteTransform3D] effect_remotes = [] {#var-effect-remotes}

*No description yet.*

### RemoteTransform3D voiceline_remote = null {#var-voiceline-remote}

Dedicated voiceline remote and tracking

### AudioStreamPlayer3D active_voiceline_player = null {#var-active-voiceline-player}

*No description yet.*

### Dictionary active_players =   # player -&gt; remote: RemoteTransform3D, requester_id: Strin {#var-active-players}

Track which audio players are currently in use

### Dictionary active_exclusive_effects =   # sound_path -&gt; player {#var-active-exclusive-effects}

Track exclusive effect sounds to prevent duplicates

### String entity_type = "" {#var-entity-type}

*No description yet.*

### String voice_type = "" {#var-voice-type}

*No description yet.*

### bool hit_audio_on_cooldown = false {#var-hit-audio-on-cooldown}

*No description yet.*

### AudioManager audio_manager {#var-audio-manager}

SystemManager refs

### ChronoManager chrono_manager {#var-chrono-manager}

*No description yet.*

## Method descriptions

### void setup_for_entity( owning_entity: Entity ) {#method-setup-for-entity}

Setup for Entity usage - configures entity-specific audio properties

### void setup_for_interactable() {#method-setup-for-interactable}

Setup for Interactable usage - no entity-specific configuration needed

### bool play_motion_audio( surface: String, movement: String ) {#method-play-motion-audio}

Play a motion sound (footsteps, etc.) - Entity only

### bool play_entity_voice_audio( action: String, volume: float = -5.0 ) {#method-play-entity-voice-audio}

Play an entity voice sound (combat barks: attack, hit, pain, etc.) Requires entity_type and voice_type to be set via setup_for_entity()

### bool play_voiceline_audio( character_name: String, file_name: String = "", volume: float = -5.0 ) {#method-play-voiceline-audio}

Play a voiceline (dialogue) for a specific character Can get random voiceline or specific file by name Only one voiceline can play at a time - automatically stops previous voiceline

### void stop_voice_line_audio() {#method-stop-voice-line-audio}

Stop all voice line audio from this component

### bool play_hit_voice() {#method-play-hit-voice}

Play a hit sound with cooldown

### bool play_hit_long_voice() {#method-play-hit-long-voice}

Play a long hit sound with cooldown

### bool play_pain_voice() {#method-play-pain-voice}

Play a pain sound with cooldown

### bool play_jump_start_voice() {#method-play-jump-start-voice}

Play a jump start voice

### bool play_jump_end_voice() {#method-play-jump-end-voice}

Play a jump end voice

### bool play_sound_stream( stream: AudioStream, volume_db: float = 0.0 ) {#method-play-sound-stream}

Plays a sound stream where this object is (doors and containers use this name)

### bool play_effect( sound: AudioStream, exclusive: bool = false, volume_db: float = 0.0, pitch_scale: float = 1.0, max_distance: float = 20.0, unit_size: float = 10.0 ) {#method-play-effect}

Play an effect sound with various options

### bool play_sfx_selection( sfx_selection: SFXSelection, volume_modifier: float = 0.0 ) {#method-play-sfx-selection}

Play an SFX selection (for interactables)

### bool stop_effect( sound: AudioStream ) {#method-stop-effect}

Stop a specific effect sound

### void stop_all_audio() {#method-stop-all-audio}

Stop all audio from this component

