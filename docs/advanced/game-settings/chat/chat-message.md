<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ChatMessage

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

One line of the message manager: the channel it was posted to, the text, and the data it was made from (the item, the amount, the entity ...). A message is plain data: it holds ids and numbers, never objects, so it converts to a dictionary and back (what a network would carry).

## Variables

| | | |
|---|---|---|
| `int` | [sequence](#var-sequence) | `0` |
| `String` | [channel_id](#var-channel-id) | `""` |
| `PackedStringArray` | [extra_channels](#var-extra-channels) | `PackedStringArray()` |
| `String` | [text](#var-text) | `""` |
| `Dictionary` | [data](#var-data) | `{}` |
| `float` | [game_hours](#var-game-hours) | `0.0` |

## Methods

| | |
|---|---|
| `PackedStringArray` | [get_channels](#method-get-channels)() |
| `bool` | [is_in_any](#method-is-in-any)( `channel_ids: PackedStringArray` ) |
| `Dictionary` | [to_dict](#method-to-dict)() |
| `ChatMessage` | [from_dict](#method-from-dict)( `source: Dictionary` ) *static* |

## Variable descriptions

### int sequence = 0 {#var-sequence}

The number of the message in the order they were posted (every message has its own)

### String channel_id = "" {#var-channel-id}

The key of the channel (ChatChannel.id). When a line belongs to several channels this is the first, the most specific one

### PackedStringArray extra_channels = PackedStringArray() {#var-extra-channels}

The other channels the line belongs to (a line about the player is also a party line and a friendly line). A viewer that shows several of them shows the line once

### String text = "" {#var-text}

The text, finished: the language and the names are those of the moment it was posted

### Dictionary data =  {#var-data}

What the line was made from: ids and numbers (a viewer may use them: a toast shows data["level"])

### float game_hours = 0.0 {#var-game-hours}

The game time it was posted at (ChronoManager.total_game_hours)

## Method descriptions

### PackedStringArray get_channels() {#method-get-channels}

Every channel the line belongs to, the first one first

### bool is_in_any( channel_ids: PackedStringArray ) {#method-is-in-any}

Does the line belong to one of these channels? (An empty list = any)

### Dictionary to_dict() {#method-to-dict}

The message as a dictionary (a save, a network)

### ChatMessage from_dict( source: Dictionary ) {#method-from-dict}

A message from a dictionary

