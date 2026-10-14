<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# MessagesManager

**Inherits:** [Control](https://docs.godotengine.org/en/stable/classes/class_control.html)

Displays temporary messages at the top of the screen. Supports warning (red), highlight (yellow), and plain (white) message types.

## Variables

| | | |
|---|---|---|
| `VBoxContainer` | [v_box_container](#var-v-box-container) |  |

## Methods

| | |
|---|---|
| `void` | [print_message](#method-print-message)( `message: String, type: MessageType` ) |

## Enumerations

### enum MessageType {#enum-messagetype}

Message type determines the colour of the displayed text.

- **WARNING** = `0`
- **YELLOW** = `1`
- **PLAIN** = `2`

## Constants

- `int` **FONT_SIZE** = `18` - Font size for message labels.
- `float` **HOLD_DURATION** = `2.0` - How long the message stays fully visible.
- `float` **FADE_DURATION** = `1.0` - How long the fade out takes.
- `Dictionary` **COLOURS** = `{` - Colours for each message type.

## Variable descriptions

### VBoxContainer v_box_container {#var-v-box-container}

Container for message labels.

## Method descriptions

### void print_message( message: String, type: MessageType ) {#method-print-message}

Displays a message with the specified type.

