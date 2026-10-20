<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ChatManager

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

The **message manager**: everything the game wants to tell the player goes through here. A system **posts** a message to a **channel** (post) and does not know who shows it; a **viewer** (the chat box, a level up toast, the warning label: ChatViewer) listens to message_posted and shows the channels it was given. Messages are plain data, and ingest() is the one other way in (a message made elsewhere: a server, a save), so a viewer never has to know where a message came from.

## Variables

| | | |
|---|---|---|
| `GameHost.SystemHub` | [system_hub](#var-system-hub) |  |
| `ChatListeners` | [listeners](#var-listeners) |  |
| `ChatCommands` | [commands](#var-commands) |  |

## Methods

| | |
|---|---|
| `void` | [start_listening](#method-start-listening)() |
| `ChatConfig` | [get_config](#method-get-config)() |
| `ChatChannel` | [get_channel](#method-get-channel)( `channel_id: String` ) |
| `ChatMessage` | [post](#method-post)( `channel_id: String, text: String, data: Dictionary = {}, extra_channels: PackedStringArray = PackedStringArray()` ) |
| `ChatMessage` | [post_template](#method-post-template)( `channel_id: String, values: Dictionary, fallback_text: String, data: Dictionary = {}` ) |
| `ChatMessage` | [ingest](#method-ingest)( `source: Dictionary` ) |
| `Array[ChatMessage]` | [get_history](#method-get-history)( `channel_ids: PackedStringArray = PackedStringArray(), limit: int = 0` ) |
| `void` | [clear_history](#method-clear-history)() |
| `Dictionary` | [to_save_data](#method-to-save-data)() |
| `void` | [from_save_data](#method-from-save-data)( `data: Dictionary` ) |

## Signals

### message_posted( message: ChatMessage ) {#signal-message-posted}

A message was posted or ingested

### history_replaced() {#signal-history-replaced}

What the manager remembers was replaced (a game was loaded, the history was cleared): a viewer that shows the history writes it again

## Constants

- `String` **FALLBACK_CHANNEL** = `"system"` - The channel a message goes to when the channel it names does not exist

## Variable descriptions

### GameHost.SystemHub system_hub {#var-system-hub}

*No description yet.*

### ChatListeners listeners {#var-listeners}

Turns what happens in the game into messages (set up by start_listening)

### ChatCommands commands {#var-commands}

What the player types: the commands (/say, an emote, the developer commands) and plain lines. The chat box hands its text to submit()

## Method descriptions

### void start_listening() {#method-start-listening}

Starts turning what happens in the game (a level up, an item received, a quest) into messages. Called once the systems exist

### ChatConfig get_config() {#method-get-config}

The settings of the channels

### ChatChannel get_channel( channel_id: String ) {#method-get-channel}

The channel with this id, or null

### ChatMessage post( channel_id: String, text: String, data: Dictionary = &#123;&#125;, extra_channels: PackedStringArray = PackedStringArray() ) {#method-post}

Posts a message to a channel. The text is finished; data is what it was made from (ids and numbers). Returns the message

### ChatMessage post_template( channel_id: String, values: Dictionary, fallback_text: String, data: Dictionary = &#123;&#125; ) {#method-post-template}

Posts a line of a channel that has a template ("You gain &#123;amount&#125; experience."): the &#123;holes&#125; are filled from values. A channel without a template uses the fallback text

### ChatMessage ingest( source: Dictionary ) {#method-ingest}

Takes in a message that was made elsewhere (a dictionary: ChatMessage.to_dict). It gets the next number here and is delivered like any other

### Array[ChatMessage] get_history( channel_ids: PackedStringArray = PackedStringArray(), limit: int = 0 ) {#method-get-history}

The remembered messages of some channels (all when the list is empty), in the order they were posted. `limit` 0 = all of them

### void clear_history() {#method-clear-history}

Forgets what it remembers

### Dictionary to_save_data() {#method-to-save-data}

The messages that go in the save (the channels that keep their lines in the save), as dictionaries

### void from_save_data( data: Dictionary ) {#method-from-save-data}

Takes back the messages of a save (they are remembered, not shown again)

