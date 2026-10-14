<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ClassSelectionButton

**Inherits:** `MarginContainer`

ClassSelectionButton - Button for selecting a player class in character creation Displays class icon, name, and handles selection state

## Properties

| | | |
|---|---|---|
| `Color` | [text_normal_color](#prop-text-normal-color) | `Color(0.8, 0.8, 0.8)` |
| `Color` | [text_highlight_color](#prop-text-highlight-color) | `Color(1.0, 1.0, 1.0)` |
| `Color` | [brackets_active_color](#prop-brackets-active-color) | `Color(1.0, 0.843, 0.0)  # Gold` |
| `Color` | [brackets_inactive_color](#prop-brackets-inactive-color) | `Color(0.5, 0.5, 0.5)  # Grey` |
| `Color` | [active_colour_highlight](#prop-active-colour-highlight) | `Color(0.4, 0.6, 0.7)` |

## Variables

| | | |
|---|---|---|
| `PlayerClassDefinition` | [player_class](#var-player-class) | `null` |
| `bool` | [active](#var-active) | `false` |

## Methods

| | |
|---|---|
| `void` | [setup](#method-setup)( `class_def: PlayerClassDefinition` ) |
| `void` | [set_active](#method-set-active)( `is_active: bool` ) |
| `PlayerClassDefinition` | [get_player_class](#method-get-player-class)() |

## Signals

### button_up( button: MarginContainer ) {#signal-button-up}

### class_selected( player_class: PlayerClassDefinition ) {#signal-class-selected}

## Property descriptions

### Color text_normal_color = Color(0.8, 0.8, 0.8) {#prop-text-normal-color}

*No description yet.*

### Color text_highlight_color = Color(1.0, 1.0, 1.0) {#prop-text-highlight-color}

*No description yet.*

### Color brackets_active_color = Color(1.0, 0.843, 0.0)  # Gold {#prop-brackets-active-color}

*No description yet.*

### Color brackets_inactive_color = Color(0.5, 0.5, 0.5)  # Grey {#prop-brackets-inactive-color}

*No description yet.*

### Color active_colour_highlight = Color(0.4, 0.6, 0.7) {#prop-active-colour-highlight}

*No description yet.*

## Variable descriptions

### PlayerClassDefinition player_class = null {#var-player-class}

The PlayerClassDefinition this button represents

### bool active = false {#var-active}

*No description yet.*

## Method descriptions

### void setup( class_def: PlayerClassDefinition ) {#method-setup}

Setup the button with a PlayerClassDefinition

### void set_active( is_active: bool ) {#method-set-active}

Set active state

### PlayerClassDefinition get_player_class() {#method-get-player-class}

Get the associated player class

