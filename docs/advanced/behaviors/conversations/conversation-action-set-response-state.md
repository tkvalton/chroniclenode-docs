<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ConversationActionSetResponseState

**Inherits:** [ConversationAction](/advanced/behaviors/conversations/conversation-action) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Sets the active state of a response in the conversation Used to dynamically enable or disable response options

## Properties

| | | |
|---|---|---|
| `int` | [response_id](#prop-response-id) | `0` |
| `bool` | [response_state](#prop-response-state) | `true` |

## Methods

| | |
|---|---|
| `void` | [execute](#method-execute)( `player: Entity, conversation_instance: ConversationInstance` ) |
| `Array[Dictionary]` | [validate](#method-validate)() |
| `String` | [get_description](#method-get-description)() |

## Property descriptions

### int response_id = 0 {#prop-response-id}

The ID of the response to modify

### bool response_state = true {#prop-response-state}

The new state (true = active/enabled, false = inactive/disabled)

## Method descriptions

### void execute( player: Entity, conversation_instance: ConversationInstance ) {#method-execute}

Execute this action with the given context Must be overridden in child classes player: The entity (player) involved in the conversation conversation_instance: The runtime ConversationInstance (not the resource) *(from [ConversationAction](/advanced/behaviors/conversations/conversation-action))*

### Array[Dictionary] validate() {#method-validate}

Validate that this action is properly configured Returns an array of error dictionaries if invalid *(from [ConversationAction](/advanced/behaviors/conversations/conversation-action))*

### String get_description() {#method-get-description}

Get a human-readable description of this action for editor display *(from [ConversationAction](/advanced/behaviors/conversations/conversation-action))*

