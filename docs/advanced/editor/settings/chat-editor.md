<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ChatEditor

**Inherits:** [VBoxContainer](https://docs.godotengine.org/en/stable/classes/class_vboxcontainer.html)

The Chat page of the Game Settings: the channels of the message manager (name, colour, text of a line, flags) and how much it remembers. Everything is saved when it changes, in `chat_config.tres`. The channels of the toolkit can be changed but not removed or renamed (their ids); a game adds channels of its own.

## Signals

### chat_changed() {#signal-chat-changed}

Emitted when the channels or the settings changed

