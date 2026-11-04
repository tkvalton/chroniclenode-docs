<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# AmbientSound

**Inherits:** [AudioStreamPlayer3D](https://docs.godotengine.org/en/stable/classes/class_audiostreamplayer3d.html)

A sound that comes from a place in the world: a waterfall, a campfire, a market, wind in a ruin. It is an ordinary 3D audio player that is already set up the way the toolkit wants it: it plays on the **Ambience** channel (so the ambience volume of the player and the audio zones and the underwater muffle change it), it starts by itself, it loops (with an optional pause between plays) and it stops with the pause menu and follows the time scale like the other sounds of the game.

## Description

Put it in the world with the **Sound** entry of the Add Object palette and choose the sound in the Unique Object panel (a track of the audio library: the **environmental** sounds are the library's 3D sounds), or give it a stream by hand. Change its Bus for a sound that is not ambient (SFX for a machine that clanks). An event spawns one with the Spawn Sound action (and takes it away with Stop Sound). See docs: World &gt; 3D sounds.

## Properties

| | | |
|---|---|---|
| `String` | [sound_path](#prop-sound-path) | `""` |
| `bool` | [loop](#prop-loop) | `true` |
| `float` | [delay_min](#prop-delay-min) | `0.0` |
| `float` | [delay_max](#prop-delay-max) | `0.0` |
| `float` | [pitch_variation](#prop-pitch-variation) | `0.0` |
| `String` | [sound_name](#prop-sound-name) | `""` |

## Methods

| | |
|---|---|
| `AmbientSound` | [make](#method-make)( `parent: Node, audio: AudioStream, world_position: Vector3, p_name: String = "", p_loop: bool = true` ) *static* |
| `void` | [fade_out_and_free](#method-fade-out-and-free)( `seconds: float` ) |

## Property descriptions

### String sound_path = "" {#prop-sound-path}

The sound, as a file of the audio library. It is loaded when the node is ready (the scene keeps the path, not the sound). Leave it empty to use the stream of the node

### bool loop = true {#prop-loop}

Play the sound again when it ends (for a stream that does not loop by itself)

### float delay_min = 0.0 {#prop-delay-min}

The silence before the sound plays again, in seconds: a random time between the two (0 = it plays again at once). A fire that crackles in bursts, a bird now and then

### float delay_max = 0.0 {#prop-delay-max}

*No description yet.*

### float pitch_variation = 0.0 {#prop-pitch-variation}

Each play is higher or lower in pitch by a random amount up to this (0 = always the same pitch; 0.1 = up to 10 percent either way)

### String sound_name = "" {#prop-sound-name}

The name an event can stop the sound by (Stop Sound). Empty = it has none

## Method descriptions

### AmbientSound make( parent: Node, audio: AudioStream, world_position: Vector3, p_name: String = "", p_loop: bool = true ) {#method-make}

Makes one: a node at a place, playing a stream (used by the Spawn Sound action). `parent` is the node it goes under; it keeps its place in the world

### void fade_out_and_free( seconds: float ) {#method-fade-out-and-free}

Fades the sound out over some seconds and takes the node out of the world

