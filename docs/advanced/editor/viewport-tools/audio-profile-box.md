<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# AudioProfileBox

**Inherits:** [VBoxContainer](https://docs.godotengine.org/en/stable/classes/class_vboxcontainer.html)

Everything an audio profile holds, for the Unique Object panel: a menu of presets (Cave, Indoors, Underwater... and yours), the fade time and room size, and for each of the five channels (music, effects, voices, ambiance, interface) how muffled it is, how loud, and how much reverb. A change is made to every selected volume's profile.

## Variables

| | | |
|---|---|---|
| `String` | [folder](#var-folder) | `DEFAULT_FOLDER` |

## Methods

| | |
|---|---|
| `void` | [setup](#method-setup)( `profiles: Array[AudioProfile]` ) |
| `Array[AudioProfile]` | [presets](#method-presets)() *static* |
| `String` | [file_name_of](#method-file-name-of)( `preset_name: String` ) *static* |

## Signals

### profile_chosen( profile: AudioProfile ) {#signal-profile-chosen}

A preset was chosen: the panel gives a copy of this profile to every selected volume

### edited() {#signal-edited}

A number of the profile changed

### presets_changed() {#signal-presets-changed}

A preset was saved or deleted: the panel shows itself again

## Constants

- `String` **DEFAULT_FOLDER** = `"res://src/data/audio_profiles/"` - Where the presets of the project are kept
- `Array` **CHANNELS** = `[["music", "Music"], ["sfx", "Sound effects"], ["voice", "Voices"], ["ambianc...`

## Variable descriptions

### String folder = DEFAULT_FOLDER {#var-folder}

The folder the presets are read from and saved to (a test uses another one)

## Method descriptions

### void setup( profiles: Array[AudioProfile] ) {#method-setup}

`profiles` are the profiles of the selected volumes (empty when they have none: the menu then makes one).

### Array[AudioProfile] presets() {#method-presets}

The built-in presets, then the ones of the project by name.

### String file_name_of( preset_name: String ) {#method-file-name-of}

*No description yet.*

