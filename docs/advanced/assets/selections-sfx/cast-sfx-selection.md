<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# CastSFXSelection

**Inherits:** [SFXSelection](/advanced/assets/selections-sfx/sfx-selection) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Specialized SFX selection for cast sound effects

## Properties

| | | |
|---|---|---|
| `String` | [audio_type](#prop-audio-type) | `""` |

## Methods

| | |
|---|---|
| `Array[String]` | [get_available_audio_types](#method-get-available-audio-types)() |
| `Array[String]` | [get_available_files](#method-get-available-files)() |
| `AudioStream` | [get_sound_resource](#method-get-sound-resource)() |

## Property descriptions

### String audio_type = "" {#prop-audio-type}

The cast sound type to use (now dynamic based on discovered folders)

## Method descriptions

### Array[String] get_available_audio_types() {#method-get-available-audio-types}

Get available cast sound types (for editor dropdown)

### Array[String] get_available_files() {#method-get-available-files}

Get available file names for current audio type (for specific selection)

### AudioStream get_sound_resource() {#method-get-sound-resource}

The sound this selection points to, or null when it is not set.

