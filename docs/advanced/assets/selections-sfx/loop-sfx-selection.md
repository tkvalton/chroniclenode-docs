<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# LoopSFXSelection

**Inherits:** [SFXSelection](/advanced/assets/selections-sfx/sfx-selection) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Specialized SFX selection for loop sound effects Note: Loop SFX has a flat structure (all files in one folder)

## Properties

| | | |
|---|---|---|
| `String` | [audio_name](#prop-audio-name) | `""` |

## Methods

| | |
|---|---|
| `Array[String]` | [get_available_audio_names](#method-get-available-audio-names)() |
| `Array[String]` | [get_available_files](#method-get-available-files)() |
| `AudioStream` | [get_sound_resource](#method-get-sound-resource)() |

## Property descriptions

### String audio_name = "" {#prop-audio-name}

The name of the loop.

## Method descriptions

### Array[String] get_available_audio_names() {#method-get-available-audio-names}

The names of the loops the audio database has.

### Array[String] get_available_files() {#method-get-available-files}

The sound files the database has for the settings now (for the editor list).

### AudioStream get_sound_resource() {#method-get-sound-resource}

The sound this selection points to, or null when it is not set.

