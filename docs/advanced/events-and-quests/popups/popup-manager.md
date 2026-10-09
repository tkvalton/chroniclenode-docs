<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# PopupManager

**Inherits:** [Control](https://docs.godotengine.org/en/stable/classes/class_control.html)

Shows the popups of the game (scenes built on PopupUI, kept as PopupData in the database): a tutorial, a message, a toast, an achievement. It decides what the popup data says: what to do when another popup is open, whether the game pauses and gameplay input waits, whether ESC closes it, whether it closes by itself, whether it is shown once in a game.

## Description

Use: ui_manager.popups.show_popup(popup_id, {"title": "...", "text": "..."}). The data is given to the scene's setup().

## Variables

| | | |
|---|---|---|
| `GameHost.SystemHub` | [system_hub](#var-system-hub) |  |

## Methods

| | |
|---|---|
| `PopupUI` | [show_popup](#method-show-popup)( `popup_id: int, arguments: Dictionary = {}` ) |
| `void` | [hide_popup](#method-hide-popup)( `popup_id: int` ) |
| `void` | [hide_all](#method-hide-all)() |
| `bool` | [is_popup_open](#method-is-popup-open)( `popup_id: int` ) |
| `bool` | [is_popup_queued](#method-is-popup-queued)( `popup_id: int` ) |
| `Array[PopupUI]` | [get_open_popups](#method-get-open-popups)() |
| `PopupUI` | [get_popup](#method-get-popup)( `popup_id: int` ) |
| `bool` | [handle_escape](#method-handle-escape)() |

## Signals

### popup_opened( popup_id: int ) {#signal-popup-opened}

A popup appeared

### popup_closed( popup_id: int ) {#signal-popup-closed}

A popup was closed (by the player, by ESC, by itself, by the game)

## Variable descriptions

### GameHost.SystemHub system_hub {#var-system-hub}

*No description yet.*

## Method descriptions

### PopupUI show_popup( popup_id: int, arguments: Dictionary = {} ) {#method-show-popup}

Show a popup. The popup's own data decides what happens when others are open (it may wait: nothing is returned then), and a popup that is shown once is not shown a second time. Returns the popup that was put on the screen, or null

### void hide_popup( popup_id: int ) {#method-hide-popup}

Close the popups with this id, and take it out of the queue

### void hide_all() {#method-hide-all}

Close everything and forget what waits (a new game, a load)

### bool is_popup_open( popup_id: int ) {#method-is-popup-open}

*No description yet.*

### bool is_popup_queued( popup_id: int ) {#method-is-popup-queued}

Is this popup waiting for the ones before it?

### Array[PopupUI] get_open_popups() {#method-get-open-popups}

*No description yet.*

### PopupUI get_popup( popup_id: int ) {#method-get-popup}

*No description yet.*

### bool handle_escape() {#method-handle-escape}

ESC: closes the popup on top when its data says so. True when ESC was used up here (a popup that does not close on ESC but blocks gameplay swallows it too: ESC must not open the pause menu behind a tutorial)

