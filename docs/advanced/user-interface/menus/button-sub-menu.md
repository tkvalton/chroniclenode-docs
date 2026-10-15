<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ButtonSubMenu

**Inherits:** `MarginContainer`

A button of the settings menu that opens one of its sub menus (display, audio, controls ...): its text, with colors for the normal, the highlighted and the active state. `button_up` is emitted when it is pressed.

## Properties

| | | |
|---|---|---|
| `String` | [button_text](#prop-button-text) |  |
| `Color` | [text_normal_color](#prop-text-normal-color) |  |
| `Color` | [brackets_active_color](#prop-brackets-active-color) |  |
| `Color` | [text_highlight_color](#prop-text-highlight-color) |  |
| `Color` | [active_colour_highlight](#prop-active-colour-highlight) |  |

## Variables

| | | |
|---|---|---|
| `bool` | [active](#var-active) | `false` |

## Signals

### button_up( button: MarginContainer ) {#signal-button-up}

Emitted when the button is released.

## Property descriptions

### String button_text {#prop-button-text}

The text of the button.

### Color text_normal_color {#prop-text-normal-color}

The color of the text.

### Color brackets_active_color {#prop-brackets-active-color}

The color of the brackets around the text when it is the one open.

### Color text_highlight_color {#prop-text-highlight-color}

The color of the text under the mouse.

### Color active_colour_highlight {#prop-active-colour-highlight}

The color of the button when it is the one open.

## Variable descriptions

### bool active = false {#var-active}

True when this is the sub menu that is open.

