<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# SoundSource

**Inherits:** [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Where a sound comes from: one track with its own options, an album, or a Dynamic Music. The world, a zone, a weather and an encounter each hold some (music, ambience, combat music); an event sets one. An empty source says nothing, and the place below it in the order (encounter &gt; event &gt; shelter &gt; weather &gt; zone &gt; world) decides. Ambience uses a track only; music and combat music can use an album or a Dynamic Music. See docs: Audio &gt; Music Albums, Audio &gt; Dynamic Music.

## Properties

| | | |
|---|---|---|
| `Kind` | [kind](#prop-kind) | `Kind.NONE` |
| `String` | [track_path](#prop-track-path) | `""` |
| `int` | [album_id](#prop-album-id) | `0` |
| `int` | [dynamic_id](#prop-dynamic-id) | `0` |
| `String` | [start_state](#prop-start-state) | `""` |
| `bool` | [loop](#prop-loop) | `true` |
| `float` | [delay_min](#prop-delay-min) | `0.0` |
| `float` | [delay_max](#prop-delay-max) | `0.0` |
| `float` | [volume_db](#prop-volume-db) | `0.0` |
| `float` | [fade_seconds](#prop-fade-seconds) | `-1.0` |

## Methods

| | |
|---|---|
| `SoundSource` | [of_track](#method-of-track)( `path: String, p_loop: bool = true, p_volume_db: float = 0.0` ) *static* |
| `SoundSource` | [of_album](#method-of-album)( `p_album_id: int` ) *static* |
| `SoundSource` | [of_dynamic](#method-of-dynamic)( `p_dynamic_id: int, p_start_state: String = ""` ) *static* |
| `bool` | [is_set](#method-is-set)() |
| `SoundAlbum` | [get_album](#method-get-album)() |
| `DynamicMusic` | [get_dynamic](#method-get-dynamic)() |
| `float` | [roll_delay](#method-roll-delay)( `rng: RandomNumberGenerator` ) |
| `PackedStringArray` | [get_track_paths](#method-get-track-paths)() |
| `String` | [describe](#method-describe)() |
| `PackedStringArray` | [validate](#method-validate)() |
| `SoundSource` | [with_volume_offset](#method-with-volume-offset)( `offset_db: float` ) |
| `bool` | [same_as](#method-same-as)( `other: SoundSource` ) |

## Enumerations

### enum Kind {#enum-kind}

What the source is

- **NONE** = `0`
- **TRACK** = `1`
- **ALBUM** = `2`
- **DYNAMIC** = `3`

## Property descriptions

### Kind kind = Kind.NONE {#prop-kind}

None = this source says nothing; Track = one track with the options below; Album = a collection of tracks (Audio &gt; Music Albums); Dynamic = music that changes with the game (Audio &gt; Dynamic Music)

### String track_path = "" {#prop-track-path}

The track (a file of the audio library) when the source is a Track

### int album_id = 0 {#prop-album-id}

The id of the album when the source is an Album (a Music Album for music, a Combat Music Album for combat music)

### int dynamic_id = 0 {#prop-dynamic-id}

The id of the Dynamic Music when the source is Dynamic

### String start_state = "" {#prop-start-state}

Dynamic: the state the music starts in (empty = the start state of the music)

### bool loop = true {#prop-loop}

A track plays again when it ends (on) or once (off). An album has its own loop setting

### float delay_min = 0.0 {#prop-delay-min}

The silence before a looping track plays again, in seconds (a random time between the two; 0 = it loops with no break)

### float delay_max = 0.0 {#prop-delay-max}

*No description yet.*

### float volume_db = 0.0 {#prop-volume-db}

How loud it is (dB)

### float fade_seconds = -1.0 {#prop-fade-seconds}

The seconds the sound takes to come in when this source starts (-1 = the project's default)

## Method descriptions

### SoundSource of_track( path: String, p_loop: bool = true, p_volume_db: float = 0.0 ) {#method-of-track}

A source that is a track

### SoundSource of_album( p_album_id: int ) {#method-of-album}

A source that is an album

### SoundSource of_dynamic( p_dynamic_id: int, p_start_state: String = "" ) {#method-of-dynamic}

A source that is a Dynamic Music, starting in a state (empty = its start state)

### bool is_set() {#method-is-set}

Does this source say anything? A track needs a path, an album or a Dynamic Music an id

### SoundAlbum get_album() {#method-get-album}

The album of an Album source (null when it is not one, or the album is gone)

### DynamicMusic get_dynamic() {#method-get-dynamic}

The Dynamic Music of a Dynamic source (null when it is not one, or the music is gone)

### float roll_delay( rng: RandomNumberGenerator ) {#method-roll-delay}

The silence before the next play, picked now (seconds)

### PackedStringArray get_track_paths() {#method-get-track-paths}

Every file this source can play (the track, or the tracks of the album): what the world preloads

### String describe() {#method-describe}

A name for the editor and the logs

### PackedStringArray validate() {#method-validate}

The warnings of this source

### SoundSource with_volume_offset( offset_db: float ) {#method-with-volume-offset}

A copy with a louder or quieter volume (the weather makes its ambience quieter in a light weather)

### bool same_as( other: SoundSource ) {#method-same-as}

Two sources that play the same thing the same way (the player does not start the same source again)

