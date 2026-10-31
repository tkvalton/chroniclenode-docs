<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ShelterWeatherSound

**Inherits:** [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

One line of the weather sounds of a shelter: for a kind of weather (rain, snow, wind ...) the track that plays while the camera is inside and that weather is on. Written once for a kind of shelter (a wooden cabin: the rain on its roof) and used by every volume that has the profile. A kind of weather the profile has no line for does nothing: the sound of the weather goes on, muffled by the audio profile of the shelter.

## Properties

| | | |
|---|---|---|
| `String` | [kind](#prop-kind) | `""` |
| `String` | [ambience_track](#prop-ambience-track) | `""` |
| `float` | [volume_db](#prop-volume-db) | `0.0` |

## Methods

| | |
|---|---|
| `String` | [describe](#method-describe)() |
| `PackedStringArray` | [validate](#method-validate)() |

## Property descriptions

### String kind = "" {#prop-kind}

The kind of weather this line is for: the words the weather lists in its sound kinds (rain, snow, sleet, wind, sand ...)

### String ambience_track = "" {#prop-ambience-track}

The ambience track that plays inside (an audio file: the rain on the roof). Empty = the line does nothing

### float volume_db = 0.0 {#prop-volume-db}

How loud the track is (dB)

## Method descriptions

### String describe() {#method-describe}

One line that says what the entry is (the title of its container in the editor)

### PackedStringArray validate() {#method-validate}

The warnings of this line

