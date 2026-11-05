<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# SfxPlayerPool

**Inherits:** [Node](https://docs.godotengine.org/en/stable/classes/class_node.html)

The pools of players of the sound effects, taken out of AudioManager: 3D players for sounds at a place (hits, footsteps, voices), 2D players for sounds from nowhere and a few players of the interface bus. A sound takes a player that is free (the first one when all are busy: it is cut); a request for a 3D player is set up with its volume, pitch, reach, bus and the RemoteTransform3D that moves it with its owner. AudioManager makes the pool and passes the calls on (play_sfx_at_position, request_3d_audio_player ...), so the callers did not change.

## Variables

| | | |
|---|---|---|
| `Array[AudioStreamPlayer3D]` | [sfx_3d_players](#var-sfx-3d-players) | `[]      # For positional SFX` |
| `Array[AudioStreamPlayer]` | [sfx_2d_players](#var-sfx-2d-players) | `[]` |
| `Array[AudioStreamPlayer]` | [ui_audio_players](#var-ui-audio-players) | `[]` |

## Methods

| | |
|---|---|
| `void` | [create](#method-create)( `ui_volume_db: float` ) |
| `AudioStreamPlayer3D` | [get_available_3d_player](#method-get-available-3d-player)() |
| `AudioStreamPlayer` | [get_available_2d_player](#method-get-available-2d-player)() |
| `AudioStreamPlayer` | [get_available_ui_player](#method-get-available-ui-player)() |
| `bool` | [play_at_position](#method-play-at-position)( `audio: AudioStream, position: Vector3, volume_db: float = 0.0, pitch_scale: float = 1.0` ) |
| `bool` | [play_global](#method-play-global)( `audio: AudioStream, volume_db: float = 0.0, pitch_scale: float = 1.0` ) |
| `AudioStreamPlayer3D` | [request_3d_audio_player](#method-request-3d-audio-player)( `request: AudioPlayerRequest` ) |
| `void` | [stop_audio_from_requester](#method-stop-audio-from-requester)( `requester_id: String` ) |
| `void` | [return_3d_audio_player](#method-return-3d-audio-player)( `player: AudioStreamPlayer3D` ) |

## Constants

- `int` **SFX_3D_POOL_SIZE** = `50`
- `int` **SFX_2D_POOL_SIZE** = `20`
- `int` **UI_AUDIO_POOL_SIZE** = `5`

## Variable descriptions

### Array[AudioStreamPlayer3D] sfx_3d_players = []      # For positional SFX {#var-sfx-3d-players}

*No description yet.*

### Array[AudioStreamPlayer] sfx_2d_players = [] {#var-sfx-2d-players}

For UI/global SFX

### Array[AudioStreamPlayer] ui_audio_players = [] {#var-ui-audio-players}

Dedicated UI audio players

## Method descriptions

### void create( ui_volume_db: float ) {#method-create}

Makes the players. `ui_volume_db` is the volume of the interface players

### AudioStreamPlayer3D get_available_3d_player() {#method-get-available-3d-player}

Get available 3D audio player from pool

### AudioStreamPlayer get_available_2d_player() {#method-get-available-2d-player}

Get available 2D audio player from pool

### AudioStreamPlayer get_available_ui_player() {#method-get-available-ui-player}

Get available UI audio player from pool

### bool play_at_position( audio: AudioStream, position: Vector3, volume_db: float = 0.0, pitch_scale: float = 1.0 ) {#method-play-at-position}

Play SFX at a 3D position

### bool play_global( audio: AudioStream, volume_db: float = 0.0, pitch_scale: float = 1.0 ) {#method-play-global}

Play SFX globally (2D)

### AudioStreamPlayer3D request_3d_audio_player( request: AudioPlayerRequest ) {#method-request-3d-audio-player}

Request a configured 3D audio player with automatic setup and RemoteTransform3D positioning

### void stop_audio_from_requester( requester_id: String ) {#method-stop-audio-from-requester}

Stop all audio from a specific requester (for exclusive playback)

### void return_3d_audio_player( player: AudioStreamPlayer3D ) {#method-return-3d-audio-player}

Manual cleanup for a specific player (when stopping mid-playback)

