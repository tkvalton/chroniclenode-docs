<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ConversationActionGrantReward

**Inherits:** [ConversationAction](/advanced/behaviors/conversations/conversation-action) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Grants a reward to the player Uses the Reward system for implementation

## Properties

| | | |
|---|---|---|
| `Reward` | [reward](#prop-reward) |  |

## Methods

| | |
|---|---|
| `void` | [execute](#method-execute)( `player: Entity, conversation_instance: ConversationInstance` ) |
| `Array[Dictionary]` | [validate](#method-validate)() |
| `String` | [get_description](#method-get-description)() |

## Property descriptions

### Reward reward {#prop-reward}

The reward to grant

## Method descriptions

### void execute( player: Entity, conversation_instance: ConversationInstance ) {#method-execute}

Execute this action with the given context Must be overridden in child classes player: The entity (player) involved in the conversation conversation_instance: The runtime ConversationInstance (not the resource) *(from [ConversationAction](/advanced/behaviors/conversations/conversation-action))*

### Array[Dictionary] validate() {#method-validate}

Validate that this action is properly configured Returns an array of error dictionaries if invalid *(from [ConversationAction](/advanced/behaviors/conversations/conversation-action))*

### String get_description() {#method-get-description}

Get a human-readable description of this action for editor display *(from [ConversationAction](/advanced/behaviors/conversations/conversation-action))*

