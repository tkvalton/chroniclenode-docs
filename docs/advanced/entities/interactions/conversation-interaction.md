<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ConversationInteraction

**Inherits:** [Interaction](/advanced/entities/interactions/interaction) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Interaction for dialogue/conversations with NPCs Uses the Conversation resource system with ConversationInstance for runtime state

## Properties

| | | |
|---|---|---|
| `int` | [conversation_id](#prop-conversation-id) |  |

## Variables

| | | |
|---|---|---|
| `ConversationInstance` | [conversation_instance](#var-conversation-instance) | `null` |

## Methods

| | |
|---|---|
| `void` | [set_entity_reference](#method-set-entity-reference)( `new_entity: Variant, p_system_hub: GameHost.SystemHub` ) |
| `void` | [start_interaction](#method-start-interaction)( `player: Player` ) |
| `void` | [end_interaction](#method-end-interaction)() |
| `void` | [on_response_selected](#method-on-response-selected)( `response: ConversationResponse` ) |
| `void` | [switch_to_interaction](#method-switch-to-interaction)( `target_interaction: Interaction` ) |
| `ConversationInstance` | [get_conversation_instance](#method-get-conversation-instance)() |
| `Dictionary` | [get_save_data](#method-get-save-data)() |
| `void` | [load_save_data](#method-load-save-data)( `data: Dictionary` ) |

## Signals

### conversation_ui_requested( conversation_instance: ConversationInstance, starting_chat: ConversationChat, interaction: ConversationInteraction ) {#signal-conversation-ui-requested}

## Property descriptions

### int conversation_id {#prop-conversation-id}

The conversation resource to use

## Variable descriptions

### ConversationInstance conversation_instance = null {#var-conversation-instance}

Runtime instance wrapping the resource

## Method descriptions

### void set_entity_reference( new_entity: Variant, p_system_hub: GameHost.SystemHub ) {#method-set-entity-reference}

Called by NPC when setting up interactions Creates the ConversationInstance here so it persists for the session

### void start_interaction( player: Player ) {#method-start-interaction}

Start the interaction with the given player *(from [Interaction](/advanced/entities/interactions/interaction))*

### void end_interaction() {#method-end-interaction}

End the current interaction *(from [Interaction](/advanced/entities/interactions/interaction))*

### void on_response_selected( response: ConversationResponse ) {#method-on-response-selected}

Called when user selects a response

### void switch_to_interaction( target_interaction: Interaction ) {#method-switch-to-interaction}

Switch to a different interaction on the same entity

### ConversationInstance get_conversation_instance() {#method-get-conversation-instance}

Get the current conversation instance (for save/load systems)

### Dictionary get_save_data() {#method-get-save-data}

Get save data for this interaction's conversation state

### void load_save_data( data: Dictionary ) {#method-load-save-data}

Load conversation state from save data Call this AFTER set_entity_reference has been called

