<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# AssetPreviewHeader

**Inherits:** [PanelContainer](https://docs.godotengine.org/en/stable/classes/class_panelcontainer.html)

The top of the info panel of an Assets editor: the **picture** of the selected file, its **name**, a line about it (its kind) and its path. The buttons of the editor go under it. The same look as the header of the Foliage tab, so the Assets editors read the same way.

## Variables

| | | |
|---|---|---|
| `TextureRect` | [picture](#var-picture) |  |
| `Label` | [title_label](#var-title-label) |  |
| `Label` | [subtitle_label](#var-subtitle-label) |  |
| `Label` | [path_label](#var-path-label) |  |

## Methods

| | |
|---|---|
| `void` | [show_file](#method-show-file)( `texture: Texture2D, title: String, subtitle: String, path: String` ) |
| `void` | [add_to](#method-add-to)( `panel: Control` ) |

## Constants

- `float` **PICTURE_SIZE** = `128.0`

## Variable descriptions

### TextureRect picture {#var-picture}

*No description yet.*

### Label title_label {#var-title-label}

*No description yet.*

### Label subtitle_label {#var-subtitle-label}

*No description yet.*

### Label path_label {#var-path-label}

*No description yet.*

## Method descriptions

### void show_file( texture: Texture2D, title: String, subtitle: String, path: String ) {#method-show-file}

Shows a file: its picture (null: an empty box), its name, a line about it and its path.

### void add_to( panel: Control ) {#method-add-to}

Puts the header at the top of an info panel.

