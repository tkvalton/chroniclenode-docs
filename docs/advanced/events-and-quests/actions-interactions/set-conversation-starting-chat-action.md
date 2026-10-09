<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# SetConversationStartingChatAction

**Inherits:** [EventAction](/advanced/events-and-quests/bases/event-action) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Action to set which chat a conversation starts from on next interaction Works with both NPC and InteractableObject conversations

## Properties

| | | |
|---|---|---|
| `SourceType` | [source_type](#prop-source-type) | `SourceType.NPC` |
| `int` | [entity_unique_id](#prop-entity-unique-id) | `0` |
| `int` | [interactable_unique_id](#prop-interactable-unique-id) | `0` |
| `int` | [conversation_chat_id](#prop-conversation-chat-id) | `0` |

## Variables

| | | |
|---|---|---|
| `NPC` | [target_npc](#var-target-npc) | `null` |
| `InteractableObject` | [target_interactable](#var-target-interactable) | `null` |
| `ConversationInteraction` | [target_conversation_interaction](#var-target-conversation-interaction) | `null` |

## Methods

| | |
|---|---|
| `String` | [get_function_description](#method-get-function-description)() |
| `Dictionary` | [save](#method-save)() |
| `void` | [load_data](#method-load-data)( `data: Dictionary` ) |

## Enumerations

### enum SourceType {#enum-sourcetype}

- **NPC** = `0`
- **INTERACTABLE** = `1`

## Property descriptions

### SourceType source_type = SourceType.NPC {#prop-source-type}

Source type - NPC or Interactable

### int entity_unique_id = 0 {#prop-entity-unique-id}

Unique ID of the NPC (used when source_type == NPC)

### int interactable_unique_id = 0 {#prop-interactable-unique-id}

Unique ID of the interactable (used when source_type == INTERACTABLE)

### int conversation_chat_id = 0 {#prop-conversation-chat-id}

ID of the chat to start from next time

## Variable descriptions

### NPC target_npc = null {#var-target-npc}

*No description yet.*

### InteractableObject target_interactable = null {#var-target-interactable}

*No description yet.*

### ConversationInteraction target_conversation_interaction = null {#var-target-conversation-interaction}

*No description yet.*

## Method descriptions

### String get_function_description() {#method-get-function-description}

Return a description of this action with parameter placeholders

### Dictionary save() {#method-save}

Save action state to a dictionary

### void load_data( data: Dictionary ) {#method-load-data}

Load action state from a dictionary

