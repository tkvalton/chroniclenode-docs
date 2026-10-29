<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# TerrainDetilePreview

**Inherits:** [VBoxContainer](https://docs.godotengine.org/en/stable/classes/class_vboxcontainer.html)

The preview of the Detiling section of the Terrain Textures editor: the albedo of the texture repeated over three squares, as it is (the repeats line up), with hex tiling (what the ground shows near the camera) and with the second look (what it shows far away), drawn by the same code as the ground (terrain_hex.gdshaderinc). It follows the numbers of the texture as they change, so the settings can be tuned without looking at the 3D viewport. It says which method the terrain of the open scene uses: the hex numbers only do something when it is Hex tiling. See docs: World &gt; Terrain Textures.

## Variables

| | | |
|---|---|---|
| `Array[TextureRect]` | [panels](#var-panels) | `[]` |
| `Array[ShaderMaterial]` | [materials](#var-materials) | `[]` |
| `Label` | [note_label](#var-note-label) |  |
| `Label` | [hint_label](#var-hint-label) |  |
| `SpinBox` | [repeats_spin](#var-repeats-spin) |  |
| `CheckBox` | [zones_check](#var-zones-check) |  |
| `TerrainTextureDefinition` | [texture](#var-texture) | `null` |

## Methods

| | |
|---|---|
| `void` | [show_texture](#method-show-texture)( `new_texture: TerrainTextureDefinition` ) |
| `void` | [refresh](#method-refresh)() |
| `String` | [describe_method](#method-describe-method)( `terrain: ChronicleTerrain` ) *static* |

## Constants

- `Shader` **SHADER** = `preload("res://addons/chroniclenode/assets/shaders/terrain_detile_preview.gds...`
- `float` **DEFAULT_CONTRAST** = `0.75` - The contrast used when neither the texture nor a terrain gives one.

## Variable descriptions

### Array[TextureRect] panels = [] {#var-panels}

*No description yet.*

### Array[ShaderMaterial] materials = [] {#var-materials}

*No description yet.*

### Label note_label {#var-note-label}

*No description yet.*

### Label hint_label {#var-hint-label}

*No description yet.*

### SpinBox repeats_spin {#var-repeats-spin}

*No description yet.*

### CheckBox zones_check {#var-zones-check}

*No description yet.*

### TerrainTextureDefinition texture = null {#var-texture}

*No description yet.*

## Method descriptions

### void show_texture( new_texture: TerrainTextureDefinition ) {#method-show-texture}

Shows a texture (null: nothing to show) and draws it with its numbers.

### void refresh() {#method-refresh}

Draws the squares again with the numbers the texture has now, and says what the terrain of the open scene does.

### String describe_method( terrain: ChronicleTerrain ) {#method-describe-method}

What the terrain of the open scene does with these numbers, in a sentence.

