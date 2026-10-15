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

Runs the action in the conversation.

### Array[Dictionary] validate() {#method-validate}

Checks the settings of the action. Gives the problems found (empty when it is fine).

### String get_description() {#method-get-description}

A short text about what the action does, for the editor.

