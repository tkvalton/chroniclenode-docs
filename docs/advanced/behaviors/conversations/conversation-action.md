<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ConversationAction

**Inherits:** [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

**Inherited by:** [ConversationActionEndChat](/advanced/behaviors/conversations/conversation-action-end-chat), [ConversationActionGrantReward](/advanced/behaviors/conversations/conversation-action-grant-reward), [ConversationActionNewInteraction](/advanced/behaviors/conversations/conversation-action-new-interaction), [ConversationActionProceedToChat](/advanced/behaviors/conversations/conversation-action-proceed-to-chat), [ConversationActionProceedToDiceRoll](/advanced/behaviors/conversations/conversation-action-proceed-to-dice-roll), [ConversationActionSetResponseState](/advanced/behaviors/conversations/conversation-action-set-response-state), [ConversationActionSetStartingChat](/advanced/behaviors/conversations/conversation-action-set-starting-chat)

Base class for all conversation actions Actions are executed when responses are chosen or chats are entered

## Methods

| | |
|---|---|
| `void` | [execute](#method-execute)( `player: Entity, conversation_instance: ConversationInstance` ) |
| `Array[Dictionary]` | [validate](#method-validate)() |
| `String` | [get_description](#method-get-description)() |

## Method descriptions

### void execute( player: Entity, conversation_instance: ConversationInstance ) {#method-execute}

Execute this action with the given context Must be overridden in child classes player: The entity (player) involved in the conversation conversation_instance: The runtime ConversationInstance (not the resource)

### Array[Dictionary] validate() {#method-validate}

Validate that this action is properly configured Returns an array of error dictionaries if invalid

### String get_description() {#method-get-description}

Get a human-readable description of this action for editor display

