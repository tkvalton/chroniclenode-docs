<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# MiniMenuButton

**Inherits:** [Control](https://docs.godotengine.org/en/stable/classes/class_control.html)

Individual button in the MiniMenu for toggling a UI panel. It belongs to a panel key number (1 to 20), shows an icon, handles hover/press states, shows a tooltip and the key that opens the panel.

## Variables

| | | |
|---|---|---|
| `int` | [panel_number](#var-panel-number) | `0` |
| `String` | [panel_name](#var-panel-name) |  |
| `String` | [description](#var-description) |  |
| `Texture2D` | [slot_texture](#var-slot-texture) |  |

## Methods

| | |
|---|---|
| `void` | [setup_button](#method-setup-button)( `p_panel_number: int, p_panel_name: String, p_description: String = "", p_texture: Texture2D = null` ) |
| `String` | [get_key_text](#method-get-key-text)() |

## Signals

### panel_number_requested( panel_number: int ) {#signal-panel-number-requested}

Signal emitted when the button is clicked to toggle the panel of its number

### description_tooltip_requested( object_name: String, description_text: String ) {#signal-description-tooltip-requested}

Signal emitted when mouse enters for tooltip

### hide_tooltip( force_hide: bool ) {#signal-hide-tooltip}

Signal emitted when mouse exits to hide tooltip

## Variable descriptions

### int panel_number = 0 {#var-panel-number}

The panel key number (1 to 20) this button toggles

### String panel_name {#var-panel-name}

The name of the panel (the title of the tooltip)

### String description {#var-description}

Description text for the tooltip

### Texture2D slot_texture {#var-slot-texture}

Icon texture for the button

## Method descriptions

### void setup_button( p_panel_number: int, p_panel_name: String, p_description: String = "", p_texture: Texture2D = null ) {#method-setup-button}

Configure the button with panel data

### String get_key_text() {#method-get-key-text}

The key of the action of this number ("" when there is none)

