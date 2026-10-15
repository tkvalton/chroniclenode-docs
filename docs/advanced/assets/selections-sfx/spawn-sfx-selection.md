<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# SpawnSFXSelection

**Inherits:** [SFXSelection](/advanced/assets/selections-sfx/sfx-selection) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Specialized SFX selection for spawn sound effects Spawns uses FLAT_FILES pattern - all files directly in spawns/ folder

## Properties

| | | |
|---|---|---|
| `String` | [file_name](#prop-file-name) | `""` |

## Methods

| | |
|---|---|
| `Array[String]` | [get_available_files](#method-get-available-files)() |
| `AudioStream` | [get_sound_resource](#method-get-sound-resource)() |

## Property descriptions

### String file_name = "" {#prop-file-name}

The file of the spawn sound.

## Method descriptions

### Array[String] get_available_files() {#method-get-available-files}

The sound files the database has for the settings now (for the editor list).

### AudioStream get_sound_resource() {#method-get-sound-resource}

The sound this selection points to, or null when it is not set.

