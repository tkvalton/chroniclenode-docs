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

Execute this action with the given context Must be overridden in child classes player: The entity (player) involved in the conversation conversation_instance: The runtime ConversationInstance (not the resource) *(from [ConversationAction](/advanced/behaviors/conversations/conversation-action))*

### Array[Dictionary] validate() {#method-validate}

Validate that this action is properly configured Returns an array of error dictionaries if invalid *(from [ConversationAction](/advanced/behaviors/conversations/conversation-action))*

### String get_description() {#method-get-description}

Get a human-readable description of this action for editor display *(from [ConversationAction](/advanced/behaviors/conversations/conversation-action))*

