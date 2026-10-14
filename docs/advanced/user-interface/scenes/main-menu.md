<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# MainMenu

**Inherits:** [CurrentUI](/advanced/user-interface/scenes/current-ui) < [Control](https://docs.godotengine.org/en/stable/classes/class_control.html)

MainMenu manages the game's main menu interface and navigation. Handles new game creation, continuing from last save, loading specific saves, settings access, credits display, and game exit.

## Description

Key features:

- New game functionality via TransitionManager
- Continue from autosave or latest save
- Save/load game menu integration
- Settings menu management
- Credits display with animation
- Autosave detection and UI updates
- UI scaling support

## Variables

| | | |
|---|---|---|
| `Array[Control]` | [panel_interfaces](#var-panel-interfaces) | `[]` |

## Methods

| | |
|---|---|
| `void` | [initialize_ui](#method-initialize-ui)( `p_system_hub: GameHost.SystemHub` ) |
| `void` | [connect_signals](#method-connect-signals)() |
| `void` | [set_ui_scale](#method-set-ui-scale)( `ui_scale: float` ) |
| `bool` | [check_if_saves_exist](#method-check-if-saves-exist)() |
| `String` | [get_most_recent_save](#method-get-most-recent-save)() |
| `void` | [close_all_windows](#method-close-all-windows)() |

## Variable descriptions

### Array[Control] panel_interfaces = [] {#var-panel-interfaces}

Array of panel interfaces for UI scaling

## Method descriptions

### void initialize_ui( p_system_hub: GameHost.SystemHub ) {#method-initialize-ui}

Initialize the main menu UI and sub-menus

### void connect_signals() {#method-connect-signals}

Connect all necessary signals

### void set_ui_scale( ui_scale: float ) {#method-set-ui-scale}

Apply UI scale to all panel interfaces

### bool check_if_saves_exist() {#method-check-if-saves-exist}

Check if any save files exist (autosave or manual saves)

### String get_most_recent_save() {#method-get-most-recent-save}

Get the most recent save file (prioritizes autosave, then latest manual save)

### void close_all_windows() {#method-close-all-windows}

Close all sub-menus and return to main menu options

