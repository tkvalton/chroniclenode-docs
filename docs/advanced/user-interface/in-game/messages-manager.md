<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# MessagesManager

**Inherits:** [ChatViewer](/advanced/user-interface/hud/chat-viewer) < [HUDUIElement](/advanced/user-interface/hud/hudui-element) < [Control](https://docs.godotengine.org/en/stable/classes/class_control.html)

Displays the short messages that fade at the top of the screen: a viewer of every channel that is marked "also show as a fading message" in the Chat settings (System, Highlight, Warning, Level up, Quest ...). The colour of a message is the colour of its channel.

## Variables

| | | |
|---|---|---|
| `VBoxContainer` | [v_box_container](#var-v-box-container) |  |

## Methods

| | |
|---|---|
| `bool` | [accepts](#method-accepts)( `channel_id: String` ) |
| `void` | [print_message](#method-print-message)( `message: String, type: MessageType` ) |

## Enumerations

### enum MessageType {#enum-messagetype}

Message type: the three channels the older calls use (ui_manager.message / yellow_message / warning_message)

- **WARNING** = `0`
- **YELLOW** = `1`
- **PLAIN** = `2`

## Constants

- `int` **FONT_SIZE** = `18` - Font size for message labels.
- `float` **HOLD_DURATION** = `2.0` - How long the message stays fully visible.
- `float` **FADE_DURATION** = `1.0` - How long the fade out takes.
- `Dictionary` **CHANNELS** = `{` - The channel of each message type.

## Variable descriptions

### VBoxContainer v_box_container {#var-v-box-container}

Container for message labels.

## Method descriptions

### bool accepts( channel_id: String ) {#method-accepts}

Every channel that is marked as a fading message

### void print_message( message: String, type: MessageType ) {#method-print-message}

Displays a message with the specified type (the colour and the channel of the type).

