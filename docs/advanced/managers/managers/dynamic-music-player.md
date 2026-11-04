<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# DynamicMusicPlayer

**Inherits:** [Node](https://docs.godotengine.org/en/stable/classes/class_node.html)

Plays a Dynamic Music. It builds one AudioStreamInteractive from the parts of the music (a clip for each part; a part with layers is an AudioStreamSynchronized of the piece and its stems), sets the tempo of the pieces from the data of the parts (a copy of the stream gets the bpm, so the file needs none), and plays it. A change of state switches the clip with the rule of the music for that change (when, where the new part starts, the fade, a bridge part). The intensity (0 to 1) fades the layers in and out. A stinger plays over the music and lowers it while it plays. The AudioManager owns one and starts it when a sound source is a Dynamic Music. Needs Ogg or MP3 (a WAV has no tempo). See docs: Audio &gt; Dynamic Music.

## Variables

| | | |
|---|---|---|
| `DynamicMusic` | [music](#var-music) |  |
| `String` | [current_state](#var-current-state) | `""` |
| `float` | [intensity](#var-intensity) | `0.0` |
| `AudioStreamInteractive` | [interactive](#var-interactive) |  |
| `AudioStreamPlayer` | [player](#var-player) |  |

## Methods

| | |
|---|---|
| `bool` | [is_playing](#method-is-playing)() |
| `int` | [get_clip_of_part](#method-get-clip-of-part)( `part_name: String` ) |
| `int` | [get_current_clip](#method-get-current-clip)() |
| `bool` | [start](#method-start)( `p_music: DynamicMusic, state_name: String = "", fade: float = 0.0, p_volume_db: float = 0.0` ) |
| `void` | [stop](#method-stop)( `fade: float = 0.0` ) |
| `bool` | [set_state](#method-set-state)( `state_name: String` ) |
| `void` | [set_intensity](#method-set-intensity)( `value: float, instant: bool = false` ) |
| `bool` | [play_stinger](#method-play-stinger)( `stinger_name: String` ) |
| `bool` | [play_stinger_of](#method-play-stinger-of)( `source_music: DynamicMusic, stinger_name: String` ) |
| `float` | [get_layer_level](#method-get-layer-level)( `part_name: String, layer_index: int` ) |

## Signals

### finished() {#signal-finished}

The part that was playing ended and no other follows: the music is over

### state_changed( state_name: String ) {#signal-state-changed}

The state changed (the name of the new one)

## Variable descriptions

### DynamicMusic music {#var-music}

The music that plays (null when nothing does)

### String current_state = "" {#var-current-state}

The state the music is in

### float intensity = 0.0 {#var-intensity}

The intensity, 0 to 1

### AudioStreamInteractive interactive {#var-interactive}

The stream that plays

### AudioStreamPlayer player {#var-player}

The player of the music

## Method descriptions

### bool is_playing() {#method-is-playing}

*No description yet.*

### int get_clip_of_part( part_name: String ) {#method-get-clip-of-part}

The index of the clip of a part (-1 when the part is not in the stream)

### int get_current_clip() {#method-get-current-clip}

The clip that plays now (-1 when none)

### bool start( p_music: DynamicMusic, state_name: String = "", fade: float = 0.0, p_volume_db: float = 0.0 ) {#method-start}

Starts a music in a state (empty = its start state), fading in over `fade` seconds. False when nothing can be played

### void stop( fade: float = 0.0 ) {#method-stop}

Stops the music, fading out over `fade` seconds

### bool set_state( state_name: String ) {#method-set-state}

Changes the state: the part of the new state takes over by the rule of the music for this change. A state that plays the part that plays only changes the intensity. False when the state does not exist

### void set_intensity( value: float, instant: bool = false ) {#method-set-intensity}

The intensity, 0 to 1: the layers whose "from intensity" is at most this play, the others fade out

### bool play_stinger( stinger_name: String ) {#method-play-stinger}

Plays a stinger of this music over it, lowering the music while it plays. False when there is no such stinger

### bool play_stinger_of( source_music: DynamicMusic, stinger_name: String ) {#method-play-stinger-of}

Plays a stinger of any Dynamic Music (the music need not be the one that plays); the music that plays is lowered

### float get_layer_level( part_name: String, layer_index: int ) {#method-get-layer-level}

The level (0 to 1) a layer of a part has now (for the tests and the editor)

