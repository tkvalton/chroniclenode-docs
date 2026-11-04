<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# AlbumTrack

**Inherits:** [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

One track of a Music Album: the file, how likely it is to be picked (for the weighted order) and how loud it is. See docs: Audio &gt; Music Albums.

## Properties

| | | |
|---|---|---|
| `String` | [path](#prop-path) | `""` |
| `float` | [weight](#prop-weight) | `1.0` |
| `float` | [volume_db](#prop-volume-db) | `0.0` |

## Methods

| | |
|---|---|
| `String` | [describe](#method-describe)() |
| `PackedStringArray` | [validate](#method-validate)() |

## Property descriptions

### String path = "" {#prop-path}

The track (a file of the audio library)

### float weight = 1.0 {#prop-weight}

How likely the track is compared with the others when the album picks by weight (a track of 3 comes up three times as often as a track of 1; 0 = never)

### float volume_db = 0.0 {#prop-volume-db}

How loud this track is on top of the album's volume (dB)

## Method descriptions

### String describe() {#method-describe}

The title of the track in the editor

### PackedStringArray validate() {#method-validate}

The warnings of this track

