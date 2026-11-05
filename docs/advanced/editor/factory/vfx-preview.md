<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# VFXPreview

**Inherits:** [VBoxContainer](https://docs.godotengine.org/en/stable/classes/class_vboxcontainer.html)

The preview of a visual effect (VFX tab): the effect plays in a 3D view you can turn around (AssetViewport3D). A **loop** effect plays by itself; a **one shot** plays again and again (Repeat, on to begin with) or once each time you press Play; a **weather** has a slider for its intensity; a **beam** stretches between two points (a length slider, and a sweep that moves the far end); a **path** puts its section along a line; a **telegraph** fills up on the ground (a circle or a square, a size); a **material** is on a capsule the size of a character. A speed slider slows the effect down to look at it. The effect is shown as the scene is: the preview does not run the game's effect code (pools, timers, targets), it starts the particles and the animation of the scene and places the parts of a beam and a path the way the effect does. See docs: Assets &gt; VFX.

## Variables

| | | |
|---|---|---|
| `String` | [vfx_type](#var-vfx-type) | `""` |
| `Node` | [instance](#var-instance) | `null` |
| `ShaderMaterial` | [telegraph_material](#var-telegraph-material) | `null` |
| `ColorPickerButton` | [color_button](#var-color-button) | `null` |
| `CheckBox` | [chain_check](#var-chain-check) | `null` |

## Methods

| | |
|---|---|
| `bool` | [show_vfx](#method-show-vfx)( `path: String, type: String` ) |
| `void` | [clear](#method-clear)() |
| `void` | [play](#method-play)() |

## Constants

- `Array[String]` **PREVIEWED** = `["oneshot", "loop", "weather", "beam", "path", "telegraph", "material"]` - The kinds of effect the preview plays
- `float` **REPEAT_GAP** = `0.6` - The seconds between the end of a one shot and the next play when it repeats
- `Vector3` **BEAM_START** = `Vector3(0.0, 1.0, 0.0)` - Where a beam starts and a path begins (metres above the ground)

## Variable descriptions

### String vfx_type = "" {#var-vfx-type}

The kind of the effect in the view ("oneshot", "loop" ...)

### Node instance = null {#var-instance}

The effect in the view

### ShaderMaterial telegraph_material = null {#var-telegraph-material}

The material of the warning of a telegraph, and the clock of its fill

### ColorPickerButton color_button = null {#var-color-button}

The colour of the warning of a telegraph, and the switch that shows a beam that chains as a chain of beams (made in _ready)

### CheckBox chain_check = null {#var-chain-check}

*No description yet.*

## Method descriptions

### bool show_vfx( path: String, type: String ) {#method-show-vfx}

Shows an effect: the scene of the file, and the controls of its kind. Plays at once. False when the kind has no preview or the file does not load

### void clear() {#method-clear}

Empties the preview

### void play() {#method-play}

Plays the effect from its start: a one shot once (and again after its length when Repeat is on), a loop from the beginning, a beam and a path placed again

