<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ColorButton

**Inherits:** `MarginContainer`

ColorButton - Button that displays and selects a color Used in character creation for skin, hair, and eye color selection

## Properties

| | | |
|---|---|---|
| `Color` | [button_color](#prop-button-color) | `Color.WHITE:` |
| `Color` | [border_selected_color](#prop-border-selected-color) | `Color(1.0, 0.843, 0.0)` |
| `Color` | [border_unselected_color](#prop-border-unselected-color) | `Color(0.5, 0.5, 0.5)` |

## Variables

| | | |
|---|---|---|
| `bool` | [selected](#var-selected) | `false:` |

## Methods

| | |
|---|---|
| `void` | [set_color](#method-set-color)( `color: Color` ) |
| `Color` | [get_color](#method-get-color)() |
| `void` | [set_selected](#method-set-selected)( `is_selected: bool` ) |
| `void` | [toggle_selected](#method-toggle-selected)() |

## Signals

### pressed() {#signal-pressed}

Emitted when the button is pressed.

### color_selected( color: Color ) {#signal-color-selected}

Emitted when the color is picked.

## Property descriptions

### Color button_color = Color.WHITE: {#prop-button-color}

The color the button shows and picks.

### Color border_selected_color = Color(1.0, 0.843, 0.0) {#prop-border-selected-color}

Gold

### Color border_unselected_color = Color(0.5, 0.5, 0.5) {#prop-border-unselected-color}

Grey

## Variable descriptions

### bool selected = false: {#var-selected}

True when this is the color picked.

## Method descriptions

### void set_color( color: Color ) {#method-set-color}

Set the button's color

### Color get_color() {#method-get-color}

Get the button's color

### void set_selected( is_selected: bool ) {#method-set-selected}

Set selected state

### void toggle_selected() {#method-toggle-selected}

Toggle selection state

