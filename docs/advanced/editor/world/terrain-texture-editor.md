<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# TerrainTextureEditor

**Inherits:** [ResourceEditor](/advanced/editor/base/resource-editor) < [Control](https://docs.godotengine.org/en/stable/classes/class_control.html)

The Terrain Textures editor (the TerrainTextureDefinition database): the library a terrain is painted from. A texture has its textures (albedo, normal, roughness), how big one repeat is on the ground, the surface type footsteps use, and how the weather changes it. See docs: World &gt; Terrain Textures.

## Description

Files can be **dragged from the FileSystem dock** onto the Albedo, Normal, Roughness, Height, Emission and Subsurface buttons (one file each), or **several at once** onto the Texture maps section or any of the buttons: they are sorted by the words in their names (albedo, basecolor, diffuse, color / normal, nrm / orm, arm / roughness / height, displacement, bump / emission, emissive / sss, subsurface), so the maps of a material exported from Material Maker, Substance or ambientCG land where they belong. A file with orm in its name turns on "Roughness texture is ORM".

## Variables

| | | |
|---|---|---|
| `TerrainTextureDefinition:` | [current_texture](#var-current-texture) |  |
| `LineEdit` | [library_search](#var-library-search) |  |
| `Button` | [library_refresh](#var-library-refresh) |  |
| `Label` | [library_status](#var-library-status) |  |
| `Tree` | [library_tree](#var-library-tree) |  |
| `HBoxContainer` | [source_row](#var-source-row) |  |
| `Label` | [source_label](#var-source-label) |  |
| `Button` | [source_show_button](#var-source-show-button) |  |
| `Button` | [source_reload_button](#var-source-reload-button) |  |
| `Button` | [source_delete_button](#var-source-delete-button) |  |
| `Dictionary` | [detile_boxes](#var-detile-boxes) | `{}  # (DetileSlider)` |
| `TerrainDetilePreview` | [detile_preview](#var-detile-preview) |  |
| `Dictionary` | [sections](#var-sections) | `{}` |

## Methods

| | |
|---|---|
| `void` | [refresh_library](#method-refresh-library)() |
| `PackedStringArray` | [dropped_paths](#method-dropped-paths)( `data: Variant` ) *static* |
| `StringName` | [classify_file](#method-classify-file)( `path: String` ) *static* |
| `Array[StringName]` | [drop_files](#method-drop-files)( `paths: PackedStringArray, slot: StringName` ) |

## Constants

- `PackedStringArray` **IMAGE_EXTENSIONS** = `TerrainTextureFiles.IMAGE_EXTENSIONS`

## Variable descriptions

### TerrainTextureDefinition: current_texture {#var-current-texture}

*No description yet.*

### LineEdit library_search {#var-library-search}

*No description yet.*

### Button library_refresh {#var-library-refresh}

*No description yet.*

### Label library_status {#var-library-status}

*No description yet.*

### Tree library_tree {#var-library-tree}

*No description yet.*

### HBoxContainer source_row {#var-source-row}

*No description yet.*

### Label source_label {#var-source-label}

*No description yet.*

### Button source_show_button {#var-source-show-button}

*No description yet.*

### Button source_reload_button {#var-source-reload-button}

*No description yet.*

### Button source_delete_button {#var-source-delete-button}

*No description yet.*

### Dictionary detile_boxes =   # (DetileSlider) {#var-detile-boxes}

The rows of the Detiling numbers of a texture (made in code under the Anti-tiling check box): property name -&gt; its box

### TerrainDetilePreview detile_preview {#var-detile-preview}

The preview of the detiling (under the numbers)

### Dictionary sections =  {#var-sections}

The sub sections of the textures part of the editor (name -&gt; the section), made in code from the rows of the scene

## Method descriptions

### void refresh_library() {#method-refresh-library}

Looks for new, changed and missing folders (making the entries they need) and shows the tree again.

### PackedStringArray dropped_paths( data: Variant ) {#method-dropped-paths}

The texture files in what was dragged (the FileSystem dock gives &#123;"type": "files", "files": [paths]&#125;): only picture files.

### StringName classify_file( path: String ) {#method-classify-file}

Which map a file is, from the words in its name: &amp;"albedo", &amp;"normal", &amp;"orm", &amp;"height", &amp;"roughness" or &amp;"" when the name says nothing.

### Array[StringName] drop_files( paths: PackedStringArray, slot: StringName ) {#method-drop-files}

Puts dropped files in the texture: one file goes to the slot it was dropped on (slot &amp;"" = the section: by its name); several go where their names say. An ORM file turns on "Roughness texture is ORM". Returns the slots that were set, in the order they were set.

