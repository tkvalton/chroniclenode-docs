<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# VoicelineSFXSelection

**Inherits:** [SFXSelection](/advanced/assets/selections-sfx/sfx-selection) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Specialized SFX selection for voiceline sound effects (dialogue/conversation) Structure: character_name -&gt; audio files (flat, no line_id)

## Properties

| | | |
|---|---|---|
| `String` | [character_name](#prop-character-name) | `""` |
| `String` | [file_name](#prop-file-name) | `""  # Optional specific file, empty = random` |

## Methods

| | |
|---|---|
| `Array[String]` | [get_available_characters](#method-get-available-characters)() |
| `Array[String]` | [get_available_files](#method-get-available-files)() |
| `AudioStream` | [get_sound_resource](#method-get-sound-resource)() |

## Property descriptions

### String character_name = "" {#prop-character-name}

The character who speaks.

### String file_name = ""  # Optional specific file, empty = random {#prop-file-name}

The file of the voice line.

## Method descriptions

### Array[String] get_available_characters() {#method-get-available-characters}

The characters the database has voice lines for.

### Array[String] get_available_files() {#method-get-available-files}

The sound files the database has for the settings now (for the editor list).

### AudioStream get_sound_resource() {#method-get-sound-resource}

The sound this selection points to, or null when it is not set.

