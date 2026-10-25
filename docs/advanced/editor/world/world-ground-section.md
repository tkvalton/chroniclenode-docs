<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# WorldGroundSection

**Inherits:** `FoldableContainer`

The **Ground weather** section of the Worlds editor: how fast the ground of this world gets wet and dries, how fast the snow builds and melts, and the tint of the ground (a season). The weather itself (rain, snow) is chosen above, in the Weather section; this says how the terrain follows it. See docs: World &gt; Ground weather.

## Variables

| | | |
|---|---|---|
| `WorldData` | [world](#var-world) | `null` |
| `SpinBox` | [wet_spin](#var-wet-spin) |  |
| `SpinBox` | [dry_spin](#var-dry-spin) |  |
| `SpinBox` | [snow_spin](#var-snow-spin) |  |
| `SpinBox` | [melt_spin](#var-melt-spin) |  |
| `ColorPickerButton` | [tint_button](#var-tint-button) |  |
| `HSlider` | [tint_strength_slider](#var-tint-strength-slider) |  |

## Methods

| | |
|---|---|
| `void` | [setup](#method-setup)( `panel_style: StyleBox = null` ) |
| `void` | [show_world](#method-show-world)( `new_world: WorldData` ) |

## Signals

### world_changed() {#signal-world-changed}

Something of the world changed: the editor saves the world.

## Variable descriptions

### WorldData world = null {#var-world}

*No description yet.*

### SpinBox wet_spin {#var-wet-spin}

*No description yet.*

### SpinBox dry_spin {#var-dry-spin}

*No description yet.*

### SpinBox snow_spin {#var-snow-spin}

*No description yet.*

### SpinBox melt_spin {#var-melt-spin}

*No description yet.*

### ColorPickerButton tint_button {#var-tint-button}

*No description yet.*

### HSlider tint_strength_slider {#var-tint-strength-slider}

*No description yet.*

## Method descriptions

### void setup( panel_style: StyleBox = null ) {#method-setup}

Builds the section. `panel_style` is the style of the other sections of the editor.

### void show_world( new_world: WorldData ) {#method-show-world}

Shows the world (null: nothing is shown and nothing can be changed).

