<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# SaveFileButton

**Inherits:** `MarginContainer`

One saved game in the list of the load menu: its name and details, with colors for the unselected, the hovered and the selected state. `save_button_selected` is emitted when it is clicked.

## Properties

| | | |
|---|---|---|
| `Color` | [unselected_background_colour](#prop-unselected-background-colour) |  |
| `Color` | [mouse_over_background_colour](#prop-mouse-over-background-colour) |  |
| `Color` | [selected_background_colour](#prop-selected-background-colour) |  |

## Variables

| | | |
|---|---|---|
| `String` | [save_file_path](#var-save-file-path) |  |

## Methods

| | |
|---|---|
| `void` | [set_save](#method-set-save)( `save_name: String, file_path: String` ) |
| `void` | [save_file_selected](#method-save-file-selected)() |
| `void` | [unselect_save_file](#method-unselect-save-file)() |

## Signals

### save_button_selected( save_file: SaveFileButton ) {#signal-save-button-selected}

Emitted when the button is clicked.

## Property descriptions

### Color unselected_background_colour {#prop-unselected-background-colour}

The color of the background when it is not picked.

### Color mouse_over_background_colour {#prop-mouse-over-background-colour}

The color of the background under the mouse.

### Color selected_background_colour {#prop-selected-background-colour}

The color of the background when it is picked.

## Variable descriptions

### String save_file_path {#var-save-file-path}

The path of the save file.

## Method descriptions

### void set_save( save_name: String, file_path: String ) {#method-set-save}

Fills the button with a save: its name and the time it was written.

### void save_file_selected() {#method-save-file-selected}

Marks the button as the one picked.

### void unselect_save_file() {#method-unselect-save-file}

Marks the button as not picked.

