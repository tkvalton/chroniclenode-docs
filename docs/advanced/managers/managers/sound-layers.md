<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# SoundLayers

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

Who decides what music and ambience play: layers lie one over the other, and the highest layer that has something for a channel wins, for music and for ambience on their own: WORLD (what the world says) &lt; ZONE (the place the party is in) &lt; WEATHER (the weather that is on) &lt; SHELTER (the shelter the camera is in, the rain on its roof) &lt; ENCOUNTER (the fight the party is in, combat music only) &lt; EVENT (an event that plays a track). A layer holds a SoundSource for each channel (a track with its options, or an album), or an old list of track paths. The AudioManager keeps two sets of layers, one for the music and the ambience and one for the combat music (world &lt; zone &lt; encounter), asks `resolve_music()` and `resolve_ambience()` and plays what they say. See docs: Assets &gt; Albums, World &gt; Sound layers.

## Methods

| | |
|---|---|
| `void` | [set_layer](#method-set-layer)( `layer: Layer, music_tracks: PackedStringArray, ambience_tracks: PackedStringArray, music_db: float = 0.0, ambience_db: float = 0.0, loop: bool = true` ) |
| `void` | [set_channel](#method-set-channel)( `layer: Layer, channel: StringName, tracks: PackedStringArray, volume_db: float = 0.0, loop: bool = true` ) |
| `void` | [set_source](#method-set-source)( `layer: Layer, channel: StringName, source: SoundSource` ) |
| `void` | [clear_layer](#method-clear-layer)( `layer: Layer` ) |
| `void` | [clear_channel](#method-clear-channel)( `layer: Layer, channel: StringName` ) |
| `void` | [clear](#method-clear)() |
| `bool` | [has_layer](#method-has-layer)( `layer: Layer` ) |
| `PackedStringArray` | [get_tracks](#method-get-tracks)( `layer: Layer, channel: StringName` ) |
| `SoundSource` | [get_source](#method-get-source)( `layer: Layer, channel: StringName` ) |
| `Dictionary` | [resolve_music](#method-resolve-music)() |
| `Dictionary` | [resolve_ambience](#method-resolve-ambience)() |

## Enumerations

### enum Layer {#enum-layer}

The layers, lowest first

- **WORLD** = `0`
- **ZONE** = `1`
- **WEATHER** = `2`
- **SHELTER** = `3`
- **ENCOUNTER** = `4`
- **EVENT** = `5`

## Constants

- `StringName` **MUSIC** = `&"music"` - The channels
- `StringName` **AMBIENCE** = `&"ambience"`

## Method descriptions

### void set_layer( layer: Layer, music_tracks: PackedStringArray, ambience_tracks: PackedStringArray, music_db: float = 0.0, ambience_db: float = 0.0, loop: bool = true ) {#method-set-layer}

Sets both channels of a layer from track lists (the old way): the tracks it plays on each (an empty list = it leaves that channel to the layers below) and how loud. A layer with nothing at all is taken off

### void set_channel( layer: Layer, channel: StringName, tracks: PackedStringArray, volume_db: float = 0.0, loop: bool = true ) {#method-set-channel}

Sets one channel of a layer from track paths and leaves the other as it is. `loop` false: the track plays once and the channel of the layer goes when it has finished

### void set_source( layer: Layer, channel: StringName, source: SoundSource ) {#method-set-source}

Sets one channel of a layer to a sound source (a track with its options, or an album). A source that says nothing takes the channel of the layer off

### void clear_layer( layer: Layer ) {#method-clear-layer}

Takes a layer off

### void clear_channel( layer: Layer, channel: StringName ) {#method-clear-channel}

Takes one channel (MUSIC or AMBIENCE) of a layer off and leaves the other

### void clear() {#method-clear}

Takes all layers off

### bool has_layer( layer: Layer ) {#method-has-layer}

Is this layer set?

### PackedStringArray get_tracks( layer: Layer, channel: StringName ) {#method-get-tracks}

The track list of a layer for a channel (empty when it has none, or when it has a source)

### SoundSource get_source( layer: Layer, channel: StringName ) {#method-get-source}

The source of a layer for a channel (null when it has none)

### Dictionary resolve_music() {#method-resolve-music}

What the music is now: &#123;layer, tracks, volume_db, loop, source&#125; of the highest layer with music; empty when no layer has any. `source` is null for an old track list

### Dictionary resolve_ambience() {#method-resolve-ambience}

What the ambience is now (the same)

