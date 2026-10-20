<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ChatConfig

**Inherits:** [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

The settings of the message manager: the **channels** of the game (their names, colours, templates and flags) and how much it remembers. Edited on the Chat page of the Game Settings. A project without the file has the channels of the toolkit; a channel that is not in the file but is one of the toolkit channels (a later version added it) is added when the settings are loaded.

## Properties

| | | |
|---|---|---|
| `Array[ChatChannel]` | [channels](#prop-channels) | `[]` |
| `int` | [history_lines](#prop-history-lines) | `200` |

## Methods

| | |
|---|---|
| `Array[ChatChannel]` | [default_channels](#method-default-channels)() *static* |
| `ChatConfig` | [create_default](#method-create-default)() *static* |
| `ChatConfig` | [get_config](#method-get-config)() *static* |
| `void` | [reload](#method-reload)() *static* |
| `void` | [add_missing_channels](#method-add-missing-channels)() |
| `ChatChannel` | [get_channel](#method-get-channel)( `channel_id: String` ) |
| `PackedStringArray` | [get_channel_ids](#method-get-channel-ids)() |
| `Array[String]` | [get_problems](#method-get-problems)() |

## Constants

- `const` **CONFIG_PATH** = `"res://src/data/config_data/chat_config.tres"` - The file the settings are saved in.

## Property descriptions

### Array[ChatChannel] channels = [] {#prop-channels}

The channels of the game. The viewers (chat box, toasts, labels) name them by their id

### int history_lines = 200 {#prop-history-lines}

How many lines the manager remembers for each channel while the game runs (a viewer that is made late shows them). 0 = it remembers none

## Method descriptions

### Array[ChatChannel] default_channels() {#method-default-channels}

The channels of the toolkit: id, name, colour, group, whether a line is also a fading message, whether it is kept in the save, and the template of a line

### ChatConfig create_default() {#method-create-default}

The settings with the channels of the toolkit

### ChatConfig get_config() {#method-get-config}

The chat settings of the project (the file, or the defaults when the project has none). The toolkit channels that the file does not have are added.

### void reload() {#method-reload}

Forget the loaded settings (after they were saved or changed on disk)

### void add_missing_channels() {#method-add-missing-channels}

Adds the channels of the toolkit that the settings do not have (a channel added by a later version, or one deleted by hand)

### ChatChannel get_channel( channel_id: String ) {#method-get-channel}

The channel with this id, or null

### PackedStringArray get_channel_ids() {#method-get-channel-ids}

The ids of all channels

### Array[String] get_problems() {#method-get-problems}

The problems of the settings, as readable messages (an empty or doubled id)

