<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# MovementPresetBar

**Inherits:** [HBoxContainer](https://docs.godotengine.org/en/stable/classes/class_hboxcontainer.html)

The preset row of the Unique Object panel for a movement volume: a menu of the presets (Water, Lava... and yours), "(modified)" when the numbers were changed after the preset was taken, and the buttons to save the volume as a new preset, to update the preset with the numbers of the volume, and to delete one of yours. A volume does not need a preset.

## Methods

| | |
|---|---|
| `void` | [setup](#method-setup)( `volumes: Array[MovementVolume]` ) |
| `MovementVolumePreset` | [current_preset](#method-current-preset)() |

## Signals

### apply_requested( preset: MovementVolumePreset ) {#signal-apply-requested}

A preset was chosen (null = no preset): the panel gives its settings to the selected volumes

### named( preset_name: String ) {#signal-named}

The volumes were made from the preset with this name (a preset was just saved from them), or from none ("")

### changed() {#signal-changed}

The list of presets changed: the panel shows itself again

## Method descriptions

### void setup( volumes: Array[MovementVolume] ) {#method-setup}

*No description yet.*

### MovementVolumePreset current_preset() {#method-current-preset}

The preset the first volume was made from (null: none, or one that is gone).

