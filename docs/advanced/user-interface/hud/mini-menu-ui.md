<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# MiniMenuUI

**Inherits:** [HUDUIElement](/advanced/user-interface/hud/hudui-element) < [Control](https://docs.godotengine.org/en/stable/classes/class_control.html)

MiniMenuUI is a row of quick-access buttons that open the panels of the interface. A button belongs to a panel KEY NUMBER (1 to 20): the number a panel sets in its "Panel keybind" option, which is also the input action `panel_keybind_N` that opens it from the keyboard. The button shows the icon and the description that the panel sets, and the key that opens it.

## Description

Key features:

- The buttons are made from the numbered panels of the interface: a panel you make and number gets a button without any list to keep up to date
- Which numbers show, and in what order, can be chosen; by default every panel that wants a button shows, by number
- Emits `panel_number_requested` to the InGameUI, which toggles the panel

## Properties

| | | |
|---|---|---|
| `PackedScene` | [mini_menu_button_scene](#prop-mini-menu-button-scene) |  |
| `Array[int]` | [button_numbers](#prop-button-numbers) | `[]` |

## Variables

| | | |
|---|---|---|
| `Array[MiniMenuButton]` | [menu_buttons](#var-menu-buttons) | `[]` |

## Methods

| | |
|---|---|
| `void` | [initialize_ui](#method-initialize-ui)( `p_system_hub: GameHost.SystemHub` ) |
| `void` | [setup_panels](#method-setup-panels)( `panels: Array[PanelUI]` ) |
| `Array[int]` | [get_button_numbers](#method-get-button-numbers)() |

## Signals

### panel_number_requested( panel_number: int ) {#signal-panel-number-requested}

Signal emitted when a menu button asks for the panel of a number to be toggled

## Property descriptions

### PackedScene mini_menu_button_scene {#prop-mini-menu-button-scene}

Scene to instantiate for each menu button

### Array[int] button_numbers = [] {#prop-button-numbers}

The panel key numbers that get a button, in the order of the buttons. Empty = every panel that has a number and asks for a button (its "Show in mini menu" option), by number

## Variable descriptions

### Array[MiniMenuButton] menu_buttons = [] {#var-menu-buttons}

The buttons that were made

## Method descriptions

### void initialize_ui( p_system_hub: GameHost.SystemHub ) {#method-initialize-ui}

Sets the part up with the hub of the game systems: connects the signals it listens to and fills it.

### void setup_panels( panels: Array[PanelUI] ) {#method-setup-panels}

The interface says which panels there are: the buttons are made (again) from them

### Array[int] get_button_numbers() {#method-get-button-numbers}

The numbers of the buttons, in order

