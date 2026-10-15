<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# CastingSFXSelection

**Inherits:** [SFXSelection](/advanced/assets/selections-sfx/sfx-selection) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Specialized SFX selection for casting sound effects

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

The kind of casting sound.

## Method descriptions

### Array[String] get_available_audio_types() {#method-get-available-audio-types}

The kinds of sound the audio database has for this category (for the editor list).

### Array[String] get_available_files() {#method-get-available-files}

The sound files the database has for the settings now (for the editor list).

### AudioStream get_sound_resource() {#method-get-sound-resource}

The sound this selection points to, or null when it is not set.

