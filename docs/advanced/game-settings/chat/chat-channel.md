<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ChatChannel

**Inherits:** [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

One **kind of message** of the game: Level up, Loot, Warning, Combat (Personal) ... A system posts a message to a channel (ChatManager.post) and a viewer (the chat box, a toast, the warning label) shows the channels it is given. The channels of the game are listed in the ChatConfig (the Chat page of the Game Settings).

## Properties

| | | |
|---|---|---|
| `String` | [id](#prop-id) | `""` |
| `String` | [display_name](#prop-display-name) | `"":` |
| `Color` | [color](#prop-color) | `Color.WHITE` |
| `String` | [template](#prop-template) | `"":` |
| `bool` | [also_fading](#prop-also-fading) | `false` |
| `float` | [range_meters](#prop-range-meters) | `0.0` |
| `bool` | [keep_in_save](#prop-keep-in-save) | `false` |
| `String` | [group](#prop-group) | `""` |

## Property descriptions

### String id = "" {#prop-id}

The key of the channel (lower case, no spaces): what code and the viewers name it by ("level_up"). It does not change when the channel is renamed

### String display_name = "": {#prop-display-name}

The name the player reads.

### Color color = Color.WHITE {#prop-color}

The colour of the lines of the channel. The chat box, the toasts and the labels all use it

### String template = "": {#prop-template}

The text a line of this channel is made from when a system gives no text of its own, with &#123;holes&#125; for the details ("You gain &#123;amount&#125; experience."). Empty = the system writes the line

### bool also_fading = false {#prop-also-fading}

Also show a line of this channel as a short message that fades at the top of the screen (a level up, a warning)

### float range_meters = 0.0 {#prop-range-meters}

How far a line of this channel is heard, in metres, from the one who says it (Say 10, Yell 30). Players farther away do not get the line. 0 = no limit

### bool keep_in_save = false {#prop-keep-in-save}

Keep the lines of this channel in the save, so they come back after a load

### String group = "" {#prop-group}

The group the editor lists the channel under ("Combat", "Progress" ...)

