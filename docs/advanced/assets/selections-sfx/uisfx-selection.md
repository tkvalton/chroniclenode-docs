<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# UISFXSelection

**Inherits:** [SFXSelection](/advanced/assets/selections-sfx/sfx-selection) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Specialized SFX selection for the interface sounds (click, loot, level up, equip an item, a quest done ...): the sounds of the ui_sfx category of the audio library. An event plays one with Play SFX Global, and the game plays the same ones for its own interface (the item, crafting and window sounds are interface sounds).

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

The interface sound: the name of a folder of the ui_sfx category (click, confirm, level_up ...)

## Method descriptions

### Array[String] get_available_audio_types() {#method-get-available-audio-types}

The names of the interface sounds the audio library has (for the editor list).

### Array[String] get_available_files() {#method-get-available-files}

The sound files the library has for the sound now (for the editor list).

### AudioStream get_sound_resource() {#method-get-sound-resource}

The sound this selection points to, or null when it is not set.

