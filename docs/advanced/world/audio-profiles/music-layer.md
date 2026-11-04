<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# MusicLayer

**Inherits:** [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

A layer (a stem) of a part of a Dynamic Music: an extra file that plays in sync with the part, on top of it, and fades in and out with the **intensity** (drums that come in when a fight starts). It must be as long as the part and have the same tempo. See docs: Audio &gt; Dynamic Music.

## Properties

| | | |
|---|---|---|
| `String` | [name](#prop-name) | `""` |
| `String` | [path](#prop-path) | `""` |
| `float` | [volume_db](#prop-volume-db) | `0.0` |
| `float` | [from_intensity](#prop-from-intensity) | `0.5` |

## Methods

| | |
|---|---|
| `String` | [describe](#method-describe)() |
| `PackedStringArray` | [validate](#method-validate)() |

## Property descriptions

### String name = "" {#prop-name}

The name of the layer, as the editor lists it ("Drums", "Brass")

### String path = "" {#prop-path}

The layer's file (an audio file of the library, Ogg or MP3, as long as the part)

### float volume_db = 0.0 {#prop-volume-db}

How loud the layer is when it plays (dB)

### float from_intensity = 0.5 {#prop-from-intensity}

The layer plays when the intensity (0 to 1) is at least this; below it the layer fades out. 0 = always

## Method descriptions

### String describe() {#method-describe}

The title of the layer in the editor

### PackedStringArray validate() {#method-validate}

The warnings of this layer

