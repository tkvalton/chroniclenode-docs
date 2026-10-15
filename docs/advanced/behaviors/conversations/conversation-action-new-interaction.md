<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ConversationActionNewInteraction

**Inherits:** [ConversationAction](/advanced/behaviors/conversations/conversation-action) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Ends the conversation and starts a different interaction The interaction is pre-initialized and cached in ConversationInstance

## Properties

| | | |
|---|---|---|
| `Interaction` | [interaction](#prop-interaction) | `null` |

## Methods

| | |
|---|---|
| `void` | [execute](#method-execute)( `player: Entity, conversation_instance: ConversationInstance` ) |
| `Array[Dictionary]` | [validate](#method-validate)() |
| `String` | [get_description](#method-get-description)() |

## Property descriptions

### Interaction interaction = null {#prop-interaction}

The interaction resource to switch to

## Method descriptions

### void execute( player: Entity, conversation_instance: ConversationInstance ) {#method-execute}

Runs the action in the conversation.

### Array[Dictionary] validate() {#method-validate}

Checks the settings of the action. Gives the problems found (empty when it is fine).

### String get_description() {#method-get-description}

A short text about what the action does, for the editor.

