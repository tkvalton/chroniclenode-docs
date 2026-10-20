<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ChatListeners

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

Turns what happens in the game into messages: it listens to the signals that exist already (a level up, an item received, a quest accepted ...) and posts a line to the right channel of the message manager, so no system has to know about the chat. Created and connected by the ChatManager (connect_game).

## Description

A line is made from the template of its channel (ChatChannel.template: "You gain &#123;amount&#125; experience.") when the channel has one, else from the text the listener gives. Things that happen while the game loads or while a character is made (the abilities it starts with, the items of a save) are not news: they are left out.

## Variables

| | | |
|---|---|---|
| `GameHost.SystemHub` | [system_hub](#var-system-hub) |  |
| `ChatManager` | [chat](#var-chat) |  |

## Methods

| | |
|---|---|
| `void` | [connect_game](#method-connect-game)() |
| `void` | [connect_events](#method-connect-events)() |
| `bool` | [is_quiet](#method-is-quiet)() |
| `void` | [rebaseline](#method-rebaseline)() |

## Constants

- `int` **QUIET_MSEC** = `1500` - How long after a character appears or a save is loaded nothing is reported, in milliseconds

## Variable descriptions

### GameHost.SystemHub system_hub {#var-system-hub}

*No description yet.*

### ChatManager chat {#var-chat}

*No description yet.*

## Method descriptions

### void connect_game() {#method-connect-game}

Starts listening to the systems of the game

### void connect_events() {#method-connect-events}

Starts listening to the quests (the event manager is made later than the rest, so this is called when it is ready)

### bool is_quiet() {#method-is-quiet}

Is it too soon after something appeared or loaded to report?

### void rebaseline() {#method-rebaseline}

Looks at every bag again without reporting (after a load)

