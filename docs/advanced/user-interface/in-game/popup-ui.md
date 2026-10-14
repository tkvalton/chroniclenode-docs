<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# PopupUI

**Inherits:** [Control](https://docs.godotengine.org/en/stable/classes/class_control.html)

**Inherited by:** [DefaultPopupUI](/advanced/user-interface/in-game/default-popup-ui)

The root of a popup scene. Build a popup as a scene with this script on its root: whatever the developer wants it to be (a tutorial page, a message, a toast, an achievement) with a button called ExitButton if it should have one (a node whose name is made unique with %: it closes the popup). The behaviour (ESC, pause, blocking, closing by itself, once only, what to do when another popup is open) is set on the popup data of the root node. Save the scene and the popup is in the database.

## Description

Override setup(data) to show what the caller passes, and on_shown() for what happens when the popup appears. Call close() to close it (a button of your own, the end of an animation).

## Properties

| | | |
|---|---|---|
| `PopupData` | [popup_data](#prop-popup-data) |  |

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

### PopupData popup_data {#prop-popup-data}

The data of this popup: made by the editor when the scene is saved in src/data/popups/

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

