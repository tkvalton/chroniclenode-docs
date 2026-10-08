<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ConversationActionEndChat

**Inherits:** [ConversationAction](/advanced/behaviors/conversations/conversation-action) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Ends the current conversation This signals the conversation system to close the UI and cleanup

## Methods

| | |
|---|---|
| `void` | [execute](#method-execute)( `player: Entity, conversation_instance: ConversationInstance` ) |
| `String` | [get_description](#method-get-description)() |

## Method descriptions

### void execute( player: Entity, conversation_instance: ConversationInstance ) {#method-execute}

Execute this action with the given context Must be overridden in child classes player: The entity (player) involved in the conversation conversation_instance: The runtime ConversationInstance (not the resource) *(from [ConversationAction](/advanced/behaviors/conversations/conversation-action))*

### String get_description() {#method-get-description}

Get a human-readable description of this action for editor display *(from [ConversationAction](/advanced/behaviors/conversations/conversation-action))*

