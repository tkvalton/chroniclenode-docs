<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ChatBox

**Inherits:** [ChatViewer](/advanced/user-interface/hud/chat-viewer) < [HUDUIElement](/advanced/user-interface/hud/hudui-element) < [Control](https://docs.godotengine.org/en/stable/classes/class_control.html)

The chat box: a HUD element with **tabs**. A tab (ChatTab) is a list of channels (and, for the combat channels, the kinds of event); the box writes the lines of the message manager in the tabs that show their channel. The combat log is a tab of it. Set the tabs, the line limit and the look in the inspector of the scene (chat_box.tscn).

## Description

The lines are written as they arrived: a line stays in the language it was written in. Place the box where you want it in your HUD; it is not a window.

## Properties

| | | |
|---|---|---|
| `Array[ChatTab]` | [tabs](#prop-tabs) | `[]` |
| `int` | [line_limit](#prop-line-limit) | `200` |
| `bool` | [show_time](#prop-show-time) | `false` |
| `int` | [font_size](#prop-font-size) | `12` |
| `bool` | [allow_typing](#prop-allow-typing) | `true` |
| `Key` | [focus_key](#prop-focus-key) | `KEY_ENTER` |
| `int` | [max_length](#prop-max-length) | `255` |

## Methods

| | |
|---|---|
| `bool` | [accepts](#method-accepts)( `channel_id: String` ) |
| `bool` | [accepts_message](#method-accepts-message)( `message: ChatMessage` ) |
| `String` | [format_line](#method-format-line)( `message: ChatMessage` ) |
| `void` | [open_input](#method-open-input)( `start_text: String = ""` ) |
| `void` | [close_input](#method-close-input)() |
| `RichTextLabel` | [get_log](#method-get-log)( `tab_index: int` ) |
| `void` | [clear_logs](#method-clear-logs)() |

## Property descriptions

### Array[ChatTab] tabs = [] {#prop-tabs}

The tabs of the box

### int line_limit = 200 {#prop-line-limit}

How many lines each tab keeps (the oldest go first). 0 = no limit

### bool show_time = false {#prop-show-time}

Write the game time in front of each line

### int font_size = 12 {#prop-font-size}

The size of the text

### bool allow_typing = true {#prop-allow-typing}

The player can type: Enter opens a line to type in, / opens it with a slash, Enter sends and Esc closes it. A line is said; a line that starts with a slash is a command

### Key focus_key = KEY_ENTER {#prop-focus-key}

The key that opens the line to type in

### int max_length = 255 {#prop-max-length}

The most characters of a line

## Method descriptions

### bool accepts( channel_id: String ) {#method-accepts}

Does this viewer show a channel? By default the channels in its list. A viewer can override this (the fading messages show every channel that is marked as one) *(from [ChatViewer](/advanced/user-interface/hud/chat-viewer))*

### bool accepts_message( message: ChatMessage ) {#method-accepts-message}

Does this viewer show this message? By default when it shows one of the channels the message belongs to. A viewer that filters more (the chat box: the kind of a combat line) overrides this *(from [ChatViewer](/advanced/user-interface/hud/chat-viewer))*

### String format_line( message: ChatMessage ) {#method-format-line}

The line as it is written: the time (when shown) and the text, in the colour of the event or of the channel

### void open_input( start_text: String = "" ) {#method-open-input}

Shows the line to type in, with a start of text

### void close_input() {#method-close-input}

Closes the line to type in

### RichTextLabel get_log( tab_index: int ) {#method-get-log}

The text area of a tab (for tests and for scripts)

### void clear_logs() {#method-clear-logs}

Empties every tab

