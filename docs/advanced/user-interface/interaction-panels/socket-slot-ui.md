<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# SocketSlotUI

**Inherits:** `MarginContainer`

Individual socket slot display - supports both tooltip and interactive socket panel modes Tooltips disappear on hover anyway, so all functionality is always enabled Refactored to use system_hub instead of ui_manager

## Properties

| | | |
|---|---|---|
| `Texture2D` | [socketable_texture](#prop-socketable-texture) |  |
| `String` | [socketable_effect_text](#prop-socketable-effect-text) | `"<Empty>"` |

## Variables

| | | |
|---|---|---|
| `ItemInstance.SocketInstance` | [socket_instance](#var-socket-instance) | `null` |
| `int` | [socket_index](#var-socket-index) | `-1` |
| `Color` | [socket_colour](#var-socket-colour) | `Color.GRAY` |
| `Color` | [hover_background_color](#var-hover-background-color) | `Color(0.5, 0.5, 0.5, 1.0)` |
| `Color` | [can_accept_color](#var-can-accept-color) | `Color(0.2, 0.6, 0.2, 1.0)` |
| `Color` | [cannot_accept_color](#var-cannot-accept-color) | `Color(0.6, 0.2, 0.2, 1.0)` |
| `GameHost.SystemHub` | [system_hub](#var-system-hub) |  |

## Methods

| | |
|---|---|
| `void` | [setup_socket](#method-setup-socket)( `socket_inst: ItemInstance.SocketInstance, p_system_hub: GameHost.SystemHub = null, index: int = -1` ) |
| `void` | [setup_socket_definition](#method-setup-socket-definition)( `socket_def: SocketDefinition, index: int = -1` ) |
| `String` | [strip_bbcode](#method-strip-bbcode)( `text: String` ) |
| `bool` | [can_accept_socketable_item](#method-can-accept-socketable-item)( `item: ItemInstance` ) |
| `bool` | [try_socket_item](#method-try-socket-item)( `item: ItemInstance` ) |
| `void` | [refresh_display](#method-refresh-display)() |

## Signals

### socket_item_removed( socket_index: int, removed_item: ItemInstance ) {#signal-socket-item-removed}

========== SIGNALS ==========

### socket_item_added( socket_index: int, added_item: ItemInstance ) {#signal-socket-item-added}

Emitted when a gem or rune is put in the socket.

### socket_hovered( socket_slot: SocketSlotUI, is_hovering: bool ) {#signal-socket-hovered}

Emitted when the mouse enters or leaves the socket.

## Property descriptions

### Texture2D socketable_texture {#prop-socketable-texture}

========== EXPORT PROPERTIES (for tooltip compatibility) ==========

### String socketable_effect_text = "&lt;Empty&gt;" {#prop-socketable-effect-text}

Effect description or placeholder

## Variable descriptions

### ItemInstance.SocketInstance socket_instance = null {#var-socket-instance}

========== PROPERTIES ==========

### int socket_index = -1 {#var-socket-index}

Index in the equipment's socket array

### Color socket_colour = Color.GRAY {#var-socket-colour}

Socket border/background color

### Color hover_background_color = Color(0.5, 0.5, 0.5, 1.0) {#var-hover-background-color}

========== VISUAL STATES ==========

### Color can_accept_color = Color(0.2, 0.6, 0.2, 1.0) {#var-can-accept-color}

The color of the socket when the item dragged fits.

### Color cannot_accept_color = Color(0.6, 0.2, 0.2, 1.0) {#var-cannot-accept-color}

The color of the socket when the item dragged does not fit.

### GameHost.SystemHub system_hub {#var-system-hub}

System Ref

## Method descriptions

### void setup_socket( socket_inst: ItemInstance.SocketInstance, p_system_hub: GameHost.SystemHub = null, index: int = -1 ) {#method-setup-socket}

Setup socket with socket instance data (updated to use system_hub)

### void setup_socket_definition( socket_def: SocketDefinition, index: int = -1 ) {#method-setup-socket-definition}

Setup socket for definition-only display (for vendor tooltips)

### String strip_bbcode( text: String ) {#method-strip-bbcode}

The text without its BBCode tags.

### bool can_accept_socketable_item( item: ItemInstance ) {#method-can-accept-socketable-item}

Does the item fit this socket?

### bool try_socket_item( item: ItemInstance ) {#method-try-socket-item}

Puts the item in the socket. False when it does not fit.

### void refresh_display() {#method-refresh-display}

Update display manually (useful for dynamic updates)

