<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# SoundLayers

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

Who decides what music and ambience play: the album of the world is the base, and four layers lie over it. The highest layer that has a track for a channel wins, for music and for ambience on their own: world album &lt; ZONE (the place the party is in) &lt; WEATHER (the weather that is on) &lt; SHELTER (the shelter the camera is in, the rain on its roof) &lt; EVENT (an event that plays a track). A layer holds the list of tracks it plays on each channel (file paths), a volume and whether it loops. The AudioManager asks `resolve_music()` and `resolve_ambience()` and plays what it says; a channel nobody has a track for plays the album.

## Methods

| | |
|---|---|
| `void` | [set_layer](#method-set-layer)( `layer: Layer, music_tracks: PackedStringArray, ambience_tracks: PackedStringArray, music_db: float = 0.0, ambience_db: float = 0.0, loop: bool = true` ) |
| `void` | [set_channel](#method-set-channel)( `layer: Layer, channel: StringName, tracks: PackedStringArray, volume_db: float = 0.0, loop: bool = true` ) |
| `void` | [clear_layer](#method-clear-layer)( `layer: Layer` ) |
| `void` | [clear_channel](#method-clear-channel)( `layer: Layer, channel: StringName` ) |
| `void` | [clear](#method-clear)() |
| `bool` | [has_layer](#method-has-layer)( `layer: Layer` ) |
| `PackedStringArray` | [get_tracks](#method-get-tracks)( `layer: Layer, channel: StringName` ) |
| `Dictionary` | [resolve_music](#method-resolve-music)() |
| `Dictionary` | [resolve_ambience](#method-resolve-ambience)() |

## Enumerations

### enum Layer {#enum-layer}

The layers, lowest first

- **ZONE** = `0`
- **WEATHER** = `1`
- **SHELTER** = `2`
- **EVENT** = `3`

## Constants

- `StringName` **MUSIC** = `&"music"` - The channels
- `StringName` **AMBIENCE** = `&"ambience"`

## Method descriptions

### void set_layer( layer: Layer, music_tracks: PackedStringArray, ambience_tracks: PackedStringArray, music_db: float = 0.0, ambience_db: float = 0.0, loop: bool = true ) {#method-set-layer}

Sets both channels of a layer: the tracks it plays on each (an empty list = it leaves that channel to the layers below) and how loud. A layer with no track at all is taken off

### void set_channel( layer: Layer, channel: StringName, tracks: PackedStringArray, volume_db: float = 0.0, loop: bool = true ) {#method-set-channel}

Sets one channel of a layer and leaves the other as it is (an event plays a music track and an ambience track on its own). `loop` false: the track plays once and the channel of the layer goes when it has finished

### void clear_layer( layer: Layer ) {#method-clear-layer}

Takes a layer off

### void clear_channel( layer: Layer, channel: StringName ) {#method-clear-channel}

Takes one channel (MUSIC or AMBIENCE) of a layer off and leaves the other

### void clear() {#method-clear}

Takes all layers off

### bool has_layer( layer: Layer ) {#method-has-layer}

Is this layer set?

### PackedStringArray get_tracks( layer: Layer, channel: StringName ) {#method-get-tracks}

The track list of a layer for a channel (empty when it has none)

### Dictionary resolve_music() {#method-resolve-music}

What the music is now: &#123;layer, tracks, volume_db, loop&#125; of the highest layer with music tracks; empty when no layer has any (the album plays)

### Dictionary resolve_ambience() {#method-resolve-ambience}

What the ambience is now (the same)

