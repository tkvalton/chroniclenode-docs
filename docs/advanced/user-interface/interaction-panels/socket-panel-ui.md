<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# SocketPanelUI

**Inherits:** [PanelUI](/advanced/user-interface/panels/panel-ui) < [Control](https://docs.godotengine.org/en/stable/classes/class_control.html)

Socket Panel UI for managing sockets on equipment items Opens when shift+right-clicking equipment with sockets Refactored to remove ui_manager references

## Properties

| | | |
|---|---|---|
| `PackedScene` | [socket_slot_ui_scene](#prop-socket-slot-ui-scene) |  |

## Variables

| | | |
|---|---|---|
| `ItemInstance` | [current_equipment](#var-current-equipment) | `null` |
| `Array[SocketSlotUI]` | [socket_slot_uis](#var-socket-slot-uis) | `[]` |

## Methods

| | |
|---|---|
| `void` | [initialize_ui](#method-initialize-ui)( `p_system_hub: GameHost.SystemHub` ) |
| `void` | [open_for_equipment](#method-open-for-equipment)( `equipment_item: ItemInstance` ) |
| `void` | [close_panel](#method-close-panel)() |
| `String` | [strip_bbcode](#method-strip-bbcode)( `text: String` ) |
| `ItemInstance` | [get_current_equipment](#method-get-current-equipment)() |
| `bool` | [is_panel_open](#method-is-panel-open)() |
| `bool` | [is_showing_equipment](#method-is-showing-equipment)( `equipment_item: ItemInstance` ) |

## Property descriptions

### PackedScene socket_slot_ui_scene {#prop-socket-slot-ui-scene}

Custom Scenes

## Variable descriptions

### ItemInstance current_equipment = null {#var-current-equipment}

========== PROPERTIES ==========

### Array[SocketSlotUI] socket_slot_uis = [] {#var-socket-slot-uis}

The slots of the sockets shown.

## Method descriptions

### void initialize_ui( p_system_hub: GameHost.SystemHub ) {#method-initialize-ui}

========== INITIALIZATION ==========

### void open_for_equipment( equipment_item: ItemInstance ) {#method-open-for-equipment}

Open the socket panel for a specific equipment item

### void close_panel() {#method-close-panel}

Close the socket panel - overrides PanelUI's close_panel

### String strip_bbcode( text: String ) {#method-strip-bbcode}

The text without its BBCode tags.

### ItemInstance get_current_equipment() {#method-get-current-equipment}

========== PUBLIC GETTERS ==========

### bool is_panel_open() {#method-is-panel-open}

Is the panel open on an item?

### bool is_showing_equipment( equipment_item: ItemInstance ) {#method-is-showing-equipment}

Check if the panel is currently showing a specific equipment item

