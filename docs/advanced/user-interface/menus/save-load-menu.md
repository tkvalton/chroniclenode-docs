<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# SaveLoadMenu

**Inherits:** [PanelUI](/advanced/user-interface/panels/panel-ui) < [Control](https://docs.godotengine.org/en/stable/classes/class_control.html)

SaveLoadMenu manages the save/load interface for both main menu and in-game menu. Displays available save files, allows selecting and loading saves, and provides save functionality during gameplay.

## Description

Key features:

- Display all available save files with metadata
- Load selected save via signal emission
- Create new saves during gameplay
- Delete save files (optional)
- Sort saves by date/name

## Properties

| | | |
|---|---|---|
| `PackedScene` | [save_file_button_scene](#prop-save-file-button-scene) |  |

## Variables

| | | |
|---|---|---|
| `SaveFileButton` | [current_selected_save_file](#var-current-selected-save-file) | `null` |

## Methods

| | |
|---|---|
| `void` | [add_save_files_to_list](#method-add-save-files-to-list)() |
| `void` | [close_panel](#method-close-panel)() |

## Signals

### save_load_menu_exit_button_clicked() {#signal-save-load-menu-exit-button-clicked}

Emitted when the exit button is clicked

### load_game_button_pressed( save_file_name: String ) {#signal-load-game-button-pressed}

Emitted when a save file is selected to load save_file_name: The name of the save file to load (without extension)

## Property descriptions

### PackedScene save_file_button_scene {#prop-save-file-button-scene}

The scene to instantiate for each save file button

## Variable descriptions

### SaveFileButton current_selected_save_file = null {#var-current-selected-save-file}

Currently selected save file button

## Method descriptions

### void add_save_files_to_list() {#method-add-save-files-to-list}

Populate the save file list with all available saves

### void close_panel() {#method-close-panel}

Handle exit button press

