<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ChatViewer

**Inherits:** [HUDUIElement](/advanced/user-interface/hud/hudui-element) < [Control](https://docs.godotengine.org/en/stable/classes/class_control.html)

**Inherited by:** [ChatBox](/advanced/user-interface/hud/chat-box), [MessagesManager](/advanced/user-interface/in-game/messages-manager), [SpeechBubbles](/advanced/user-interface/hud/speech-bubbles)

The base class of everything that **shows messages**: the chat box, a level up toast, the warning label, a loot feed. Give it channels (in the inspector) and override _on_message(). It listens to the message manager (system_hub.chat_manager) and calls _on_message() for each message posted to one of its channels. A viewer placed in the HUD is set up by the interface like any HUD element; a viewer placed anywhere else calls bind(system_hub.chat_manager).

## Properties

| | | |
|---|---|---|
| `Array[String]` | [channels](#prop-channels) | `[]` |
| `bool` | [show_history_on_start](#prop-show-history-on-start) | `true` |

## Variables

| | | |
|---|---|---|
| `ChatManager` | [chat_manager](#var-chat-manager) |  |

## Methods

| | |
|---|---|
| `void` | [initialize_ui](#method-initialize-ui)( `p_system_hub: GameHost.SystemHub` ) |
| `void` | [bind](#method-bind)( `manager: ChatManager` ) |
| `void` | [unbind](#method-unbind)() |
| `bool` | [accepts](#method-accepts)( `channel_id: String` ) |
| `Color` | [get_channel_color](#method-get-channel-color)( `channel_id: String` ) |
| `String` | [get_channel_name](#method-get-channel-name)( `channel_id: String` ) |
| `bool` | [accepts_message](#method-accepts-message)( `message: ChatMessage` ) |

## Property descriptions

### Array[String] channels = [] {#prop-channels}

The channels this viewer shows (their ids: pick them in the list)

### bool show_history_on_start = true {#prop-show-history-on-start}

When the viewer is set up it also shows the lines the manager remembers for its channels (a viewer that appears late, a chat box that opens after a fight)

## Variable descriptions

### ChatManager chat_manager {#var-chat-manager}

The message manager this viewer listens to

## Method descriptions

### void initialize_ui( p_system_hub: GameHost.SystemHub ) {#method-initialize-ui}

Sets the viewer up as a HUD element: it listens to the manager of the hub

### void bind( manager: ChatManager ) {#method-bind}

Starts listening to a message manager (and stops listening to the one it had)

### void unbind() {#method-unbind}

Stops listening

### bool accepts( channel_id: String ) {#method-accepts}

Does this viewer show a channel? By default the channels in its list. A viewer can override this (the fading messages show every channel that is marked as one)

### Color get_channel_color( channel_id: String ) {#method-get-channel-color}

The colour of a channel (white when there is no such channel)

### String get_channel_name( channel_id: String ) {#method-get-channel-name}

The name of a channel

### bool accepts_message( message: ChatMessage ) {#method-accepts-message}

Does this viewer show this message? By default when it shows one of the channels the message belongs to. A viewer that filters more (the chat box: the kind of a combat line) overrides this

