<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ChatCommands

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

What the player types in the chat box. A line that does not start with a slash is **said** by the character the player controls. A line that starts with a slash is a **command**: the commands of the toolkit (/say, /yell, /me, /help), the **emotes** of the library (/wave) and, when the Gameplay Config allows it, the **developer commands** (/give, /xp, /level, /money, /addtime, /settime, /quest). A game adds commands with register(). Answers and errors are written in the chat (the Debug channel for the developer commands, the Warning channel for a mistake).

## Variables

| | | |
|---|---|---|
| `GameHost.SystemHub` | [system_hub](#var-system-hub) |  |
| `ChatManager` | [chat](#var-chat) |  |

## Methods

| | |
|---|---|
| `void` | [register](#method-register)( `name: String, callable: Callable, help: String, developer: bool = false, aliases: Array = []` ) |
| `void` | [unregister](#method-unregister)( `name: String` ) |
| `bool` | [developer_commands_enabled](#method-developer-commands-enabled)() |
| `bool` | [submit](#method-submit)( `typed: String` ) |
| `EmoteDefinition` | [find_emote](#method-find-emote)( `word: String` ) |

## Variable descriptions

### GameHost.SystemHub system_hub {#var-system-hub}

*No description yet.*

### ChatManager chat {#var-chat}

*No description yet.*

## Method descriptions

### void register( name: String, callable: Callable, help: String, developer: bool = false, aliases: Array = [] ) {#method-register}

Adds a command. `name` and the aliases are lower case words without the slash. `callable` gets (arguments: PackedStringArray, text: String): the words after the command and the same as one text. A developer command works only when GameplayConfig.developer_commands is on

### void unregister( name: String ) {#method-unregister}

Removes a command (and its aliases)

### bool developer_commands_enabled() {#method-developer-commands-enabled}

Are the developer commands on?

### bool submit( typed: String ) {#method-submit}

What the player typed. Returns true when it was understood (a command was run or a line was said)

### EmoteDefinition find_emote( word: String ) {#method-find-emote}

The emote with this command or alias

