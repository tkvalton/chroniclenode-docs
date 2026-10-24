<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ToolbarIcons

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

Turns an SVG file into the picture of a toolbar button. The icons of the toolkit's toolbars are plain SVG files in `res://addons/chroniclenode/assets/toolbar_icons/` (a folder for each toolbar: terrain, placement): white outlines, so a button colours them like the text of the editor theme. Replace a file with your own SVG to change an icon. The size follows the scale of the editor.

## Methods

| | |
|---|---|
| `Texture2D` | [from_file](#method-from-file)( `path: String` ) *static* |
| `Array` | [names_in](#method-names-in)( `folder: String` ) *static* |

## Constants

- `String` **FOLDER** = `"res://addons/chroniclenode/assets/toolbar_icons/"` - The folder of the toolbar icons
- `String` **NODE_ICONS** = `"res://addons/chroniclenode/assets/node_icons/"` - The folder of the icons of the nodes (the scene tree shows them; the placement toolbar uses them too when there is one for the kind)

## Method descriptions

### Texture2D from_file( path: String ) {#method-from-file}

The picture of an SVG file, or null when the file is not there or cannot be read.

### Array names_in( folder: String ) {#method-names-in}

The names (file names without .svg) of the icons in a folder, sorted.

