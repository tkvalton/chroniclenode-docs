<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# PopupData

**Inherits:** [DatabaseResource](/advanced/data-and-database/database-classes/database-resource) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

A popup of the game: a scene (a tutorial, a message, a toast, an achievement) and how it behaves when it is shown. The scene is built by the developer on PopupUI; this resource is made for it when the scene is saved in the editor (as a WorldData is made for a world). Show one with UIManager.popups.show_popup(id, data) or with the Popup event action.

## Properties

| | | |
|---|---|---|
| `String` | [scene_path](#prop-scene-path) | `""` |
| `bool` | [close_on_escape](#prop-close-on-escape) | `true` |
| `bool` | [block_gameplay_input](#prop-block-gameplay-input) | `true` |
| `bool` | [pause_game](#prop-pause-game) | `false` |
| `float` | [auto_close_seconds](#prop-auto-close-seconds) | `0.0` |
| `bool` | [show_once](#prop-show-once) | `false` |
| `WhenBusy` | [when_another_is_open](#prop-when-another-is-open) | `WhenBusy.QUEUE` |

## Methods

| | |
|---|---|
| `PackedScene` | [get_scene](#method-get-scene)() |

## Enumerations

### enum WhenBusy {#enum-whenbusy}

What to do when this popup is asked for while another popup is on the screen

- **QUEUE** = `0` - Wait: it is shown when the popups before it are closed
- **REPLACE** = `1` - The popups that are open are closed and this one is shown
- **STACK** = `2` - It is shown on top of the ones that are open (toasts, achievements)

## Property descriptions

### String scene_path = "" {#prop-scene-path}

Path of the scene (its root is a PopupUI)

### bool close_on_escape = true {#prop-close-on-escape}

ESC closes the popup (when it is the one on top)

### bool block_gameplay_input = true {#prop-block-gameplay-input}

Gameplay does not react to the mouse and the keys while the popup is open (the popup itself does)

### bool pause_game = false {#prop-pause-game}

The game is paused while the popup is open (time stands still)

### float auto_close_seconds = 0.0 {#prop-auto-close-seconds}

The popup closes itself after this many seconds (real seconds, also while the game is paused; 0 = it waits to be closed)

### bool show_once = false {#prop-show-once}

The popup is shown once in a game (tutorials): after that it is never shown again, also not after a load

### WhenBusy when_another_is_open = WhenBusy.QUEUE {#prop-when-another-is-open}

What happens when another popup is open

## Method descriptions

### PackedScene get_scene() {#method-get-scene}

*No description yet.*

