<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# MusicPart

**Inherits:** [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

A part of a Dynamic Music: one piece of music (a file) with its tempo, which a state plays. It can have layers (stems that play with it). Parts of different tempo switch at a bar line of the old part and start from the beginning of the new one. See docs: Audio &gt; Dynamic Music.

## Properties

| | | |
|---|---|---|
| `String` | [name](#prop-name) | `""` |
| `String` | [path](#prop-path) | `""` |
| `float` | [bpm](#prop-bpm) | `120.0` |
| `int` | [beats_per_bar](#prop-beats-per-bar) | `4` |
| `bool` | [loop](#prop-loop) | `true` |
| `String` | [next_part](#prop-next-part) | `""` |
| `float` | [volume_db](#prop-volume-db) | `0.0` |
| `Array[MusicLayer]` | [layers](#prop-layers) | `[]` |

## Methods

| | |
|---|---|
| `String` | [describe](#method-describe)() |
| `PackedStringArray` | [get_paths](#method-get-paths)() |
| `PackedStringArray` | [validate](#method-validate)() |

## Property descriptions

### String name = "" {#prop-name}

The name of the part ("Explore", "Boss phase 1"); states and transitions refer to it

### String path = "" {#prop-path}

The file of the part (an audio file of the library: Ogg or MP3, a WAV has no tempo)

### float bpm = 120.0 {#prop-bpm}

The tempo of the piece, in beats per minute. The transitions wait for the next beat or bar by it

### int beats_per_bar = 4 {#prop-beats-per-bar}

Beats in a bar (4 for 4/4, 3 for waltz time)

### bool loop = true {#prop-loop}

The part plays again when it ends (on), or once (off: then the part named below follows, or the music ends)

### String next_part = "" {#prop-next-part}

When the part does not loop: the part that follows it (empty = the music ends and the music below takes over)

### float volume_db = 0.0 {#prop-volume-db}

How loud the part is (dB)

### Array[MusicLayer] layers = [] {#prop-layers}

Stems that play with the part and fade in and out with the intensity

## Method descriptions

### String describe() {#method-describe}

The title of the part in the editor

### PackedStringArray get_paths() {#method-get-paths}

Every file of the part: the piece and its layers

### PackedStringArray validate() {#method-validate}

The warnings of this part

