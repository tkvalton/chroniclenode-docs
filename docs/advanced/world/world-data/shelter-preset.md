<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ShelterPreset

**Inherits:** [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

The settings of a shelter volume that make it a wooden cabin, a cave or a tent: how much of the weather it keeps off, whether it stops the exposed effects, the audio profile and the weather sounds. A volume takes a preset **by copy** (the Unique Object panel has a menu of them): the settings are then the volume's own, and changing the preset later does not change the volumes made from it. The toolkit ships Wooden cabin, Cave and Tent (made in code); yours are files in `res://src/data/shelter_presets/` made with *Save as preset* in the panel. See docs: World &gt; Shelter.

## Properties

| | | |
|---|---|---|
| `String` | [preset_name](#prop-preset-name) | `""` |
| `Dictionary` | [values](#prop-values) | `{}` |

## Variables

| | | |
|---|---|---|
| `String` | [folder](#var-folder) | `DEFAULT_FOLDER` |
| `bool` | [built_in](#var-built-in) | `false` |

## Methods

| | |
|---|---|
| `Variant` | [copy_setting](#method-copy-setting)( `value: Variant` ) *static* |
| `ShelterPreset` | [capture](#method-capture)( `volume: ShelterVolume, p_name: String` ) *static* |
| `void` | [apply_to](#method-apply-to)( `volume: ShelterVolume` ) |
| `bool` | [matches](#method-matches)( `volume: ShelterVolume` ) |
| `Array[ShelterPreset]` | [built_ins](#method-built-ins)() *static* |
| `Array[ShelterPreset]` | [list](#method-list)() *static* |
| `ShelterPreset` | [find](#method-find)( `p_name: String` ) *static* |
| `String` | [file_name_of](#method-file-name-of)( `p_name: String` ) *static* |
| `Error` | [save](#method-save)() |
| `Error` | [delete](#method-delete)() |

## Constants

- `String` **DEFAULT_FOLDER** = `"res://src/data/shelter_presets/"` - Where the presets of the project are kept
- `Array[String]` **SETTINGS** = `["shelter_amount", "stops_effects", "audio_profile", "weather_sounds"]` - The settings of a shelter volume that a preset holds

## Property descriptions

### String preset_name = "" {#prop-preset-name}

The name in the menu

### Dictionary values =  {#prop-values}

What the preset sets: the name of a setting of the volume, and its value

## Variable descriptions

### String folder = DEFAULT_FOLDER {#var-folder}

The folder the presets are read from and saved to (a test uses another one)

### bool built_in = false {#var-built-in}

A preset the toolkit ships: it is not a file, and it cannot be changed or deleted

## Method descriptions

### Variant copy_setting( value: Variant ) {#method-copy-setting}

A value for another volume: a resource that is not a file is copied (it is the volume's own), a list of weather sounds is copied line by line, the rest is shared as it is.

### ShelterPreset capture( volume: ShelterVolume, p_name: String ) {#method-capture}

A preset with the settings of a volume now.

### void apply_to( volume: ShelterVolume ) {#method-apply-to}

Gives the settings of the preset to a volume (and remembers its name there).

### bool matches( volume: ShelterVolume ) {#method-matches}

Does the volume have the settings of this preset?

### Array[ShelterPreset] built_ins() {#method-built-ins}

The presets the toolkit ships: a wooden cabin (all kept off, a muffled outside, the rain on the roof), a cave (all kept off, an echo), a tent (0.6, the effects do not stop, no muffle).

### Array[ShelterPreset] list() {#method-list}

Every preset: the ones of the toolkit, then yours by name.

### ShelterPreset find( p_name: String ) {#method-find}

The preset with a name (null when there is none).

### String file_name_of( p_name: String ) {#method-file-name-of}

The name as a file name.

### Error save() {#method-save}

Saves it as one of yours (a preset of the toolkit is not saved). The file is named after the preset.

### Error delete() {#method-delete}

Deletes the file of one of yours.

