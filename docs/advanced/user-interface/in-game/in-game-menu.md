<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# InGameMenu

**Inherits:** [Control](https://docs.godotengine.org/en/stable/classes/class_control.html)

InGameMenu manages the pause menu during gameplay. Provides options for resuming, saving/loading, accessing settings, returning to main menu, and exiting the game.

## Description

Key features:

- Resume game functionality
- Save/load game access
- Settings menu access
- Return to main menu via TransitionManager
- Exit game with autosave

## Variables

| | | |
|---|---|---|
| `GameHost.SystemHub` | [system_hub](#var-system-hub) |  |

## Methods

| | |
|---|---|
| `void` | [initialize_ui](#method-initialize-ui)( `p_system_hub: GameHost.SystemHub` ) |
| `void` | [connect_signals](#method-connect-signals)() |

## Signals

### return_to_main_menu_requested() {#signal-return-to-main-menu-requested}

Emitted when requesting to return to main menu

### load_menu_requested() {#signal-load-menu-requested}

Emitted when requesting to open the load menu

### ui_sfx_request( sound: AudioManager.UISound, volume_modifier: float ) {#signal-ui-sfx-request}

Audio Request

## Variable descriptions

### GameHost.SystemHub system_hub {#var-system-hub}

SystemHub reference

## Method descriptions

### void initialize_ui( p_system_hub: GameHost.SystemHub ) {#method-initialize-ui}

Initialize the in-game menu and connect signals

### void connect_signals() {#method-connect-signals}

Connect all necessary signals for button interactions

