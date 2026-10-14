<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# PopupUI

**Inherits:** [Control](https://docs.godotengine.org/en/stable/classes/class_control.html)

**Inherited by:** [DefaultPopupUI](/advanced/user-interface/in-game/default-popup-ui)

The root of a popup scene. Build a popup as a scene with this script on its root: whatever the developer wants it to be (a tutorial page, a message, a toast, an achievement) with a button called ExitButton if it should have one (a node whose name is made unique with %: it closes the popup). How it behaves (ESC, pause, blocking, closing by itself, once only, what to do when another popup is open) is set with the options of this node in the inspector, on the saved scene. Save the scene and the popup is in the database. A new popup is made with the Create new popup button of the UI Settings editor.

## Description

Override setup(data) to show what the caller passes, and on_shown() for what happens when the popup appears. Call close() to close it (a button of your own, the end of an animation).

## Properties

| | | |
|---|---|---|
| `bool` | [close_on_escape](#prop-close-on-escape) | `true` |
| `bool` | [block_gameplay_input](#prop-block-gameplay-input) | `true` |
| `bool` | [pause_game](#prop-pause-game) | `false` |
| `float` | [auto_close_seconds](#prop-auto-close-seconds) | `0.0` |
| `bool` | [show_once](#prop-show-once) | `false` |
| `PopupData.WhenBusy` | [when_another_is_open](#prop-when-another-is-open) | `PopupData.WhenBusy.QUEUE` |

## Variables

| | | |
|---|---|---|
| `Dictionary` | [data](#var-data) | `{}` |
| `GameHost.SystemHub` | [system_hub](#var-system-hub) |  |

## Methods

| | |
|---|---|
| `void` | [initialize_ui](#method-initialize-ui)( `p_system_hub: GameHost.SystemHub` ) |
| `void` | [setup](#method-setup)( `p_data: Dictionary` ) |
| `void` | [on_shown](#method-on-shown)() |
| `void` | [close](#method-close)() |

## Signals

### closed( popup: PopupUI ) {#signal-closed}

Emitted when the popup closes (the manager removes it)

## Property descriptions

*Behaviour*

### bool close_on_escape = true {#prop-close-on-escape}

ESC closes the popup (when it is the one on top)

### bool block_gameplay_input = true {#prop-block-gameplay-input}

Gameplay does not react to the mouse and the keys while the popup is open (the popup itself does)

### bool pause_game = false {#prop-pause-game}

The game is paused while the popup is open (time stands still)

### float auto_close_seconds = 0.0 {#prop-auto-close-seconds}

The popup closes itself after this many seconds (real seconds, also while the game is paused; 0 = it waits to be closed)

### bool show_once = false {#prop-show-once}

The popup is shown once in a game (tutorials): after that it is never shown again, also not after a load. A new game shows it again

### PopupData.WhenBusy when_another_is_open = PopupData.WhenBusy.QUEUE {#prop-when-another-is-open}

What to do when this popup is asked for while another popup is on the screen

## Variable descriptions

### Dictionary data =  {#var-data}

What the caller passed to show_popup

### GameHost.SystemHub system_hub {#var-system-hub}

The systems of the game

## Method descriptions

### void initialize_ui( p_system_hub: GameHost.SystemHub ) {#method-initialize-ui}

Called by the manager when the popup is made, before it appears

### void setup( p_data: Dictionary ) {#method-setup}

Called with what the caller passed (title, text, anything: it is up to the scene). Override it

### void on_shown() {#method-on-shown}

Called when the popup is on the screen. Override it (an animation, a sound)

### void close() {#method-close}

Close the popup

