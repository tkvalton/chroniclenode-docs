<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ConversationActionSetStartingChat

**Inherits:** [ConversationAction](/advanced/behaviors/conversations/conversation-action) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Sets which chat the conversation will start from on next interaction Useful for progressing storylines or unlocking new dialogue branches

## Properties

| | | |
|---|---|---|
| `int` | [chat_id](#prop-chat-id) | `0` |

## Methods

| | |
|---|---|
| `void` | [execute](#method-execute)( `player: Entity, conversation_instance: ConversationInstance` ) |
| `Array[Dictionary]` | [validate](#method-validate)() |
| `String` | [get_description](#method-get-description)() |

## Property descriptions

### int chat_id = 0 {#prop-chat-id}

The chat ID to start from next time

## Method descriptions

### void execute( player: Entity, conversation_instance: ConversationInstance ) {#method-execute}

Runs the action in the conversation.

### Array[Dictionary] validate() {#method-validate}

Checks the settings of the action. Gives the problems found (empty when it is fine).

### String get_description() {#method-get-description}

A short text about what the action does, for the editor.

