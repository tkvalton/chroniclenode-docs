<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# TerrainLevelsEditor

**Inherits:** [VBoxContainer](https://docs.godotengine.org/en/stable/classes/class_vboxcontainer.html)

The editor of "Presets" in the Terrain Settings: what Low, Medium, High and Ultra terrain detail mean in this game. One row per level (slots drawn, how far the detail reaches, how sharp the textures are, how many textures stay on the graphics card, how many tiles round the camera are textured, shadows), and under them what the settings cost in memory. It writes straight to the settings and tells the Terrain Settings editor to save.

## Methods

| | |
|---|---|
| `void` | [setup](#method-setup)( `config: TerrainConfig` ) |
| `void` | [refresh](#method-refresh)() |

## Signals

### changed() {#signal-changed}

## Constants

- `Array[String]` **COLUMNS** = `["Level", "Slots drawn", "Detail reach", "Sharpness bias", "Resident textures...`
- `Array[String]` **TIPS** = `[`

## Method descriptions

### void setup( config: TerrainConfig ) {#method-setup}

*No description yet.*

### void refresh() {#method-refresh}

The numbers under the table: what the texture memory of each level costs, and what is wrong with the levels.

