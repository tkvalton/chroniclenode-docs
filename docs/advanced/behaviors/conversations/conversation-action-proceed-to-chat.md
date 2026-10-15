<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ConversationActionProceedToChat

**Inherits:** [ConversationAction](/advanced/behaviors/conversations/conversation-action) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Proceeds to a different chat in the conversation Sets the active chat and executes that chat's entry actions

## Properties

| | | |
|---|---|---|
| `int` | [next_chat_id](#prop-next-chat-id) | `0` |

## Methods

| | |
|---|---|
| `void` | [execute](#method-execute)( `player: Entity, conversation_instance: ConversationInstance` ) |
| `Array[Dictionary]` | [validate](#method-validate)() |
| `String` | [get_description](#method-get-description)() |

## Property descriptions

### int next_chat_id = 0 {#prop-next-chat-id}

The ID of the chat to proceed to

## Method descriptions

### void execute( player: Entity, conversation_instance: ConversationInstance ) {#method-execute}

Runs the action in the conversation.

### Array[Dictionary] validate() {#method-validate}

Checks the settings of the action. Gives the problems found (empty when it is fine).

### String get_description() {#method-get-description}

A short text about what the action does, for the editor.

