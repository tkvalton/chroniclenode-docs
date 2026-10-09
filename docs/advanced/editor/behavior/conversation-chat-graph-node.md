<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ConversationChatGraphNode

**Inherits:** `GraphNode`

GraphNode representation of a ConversationChat Uses DialogManager.setup_dialog() for guaranteed clean connections

## Variables

| | | |
|---|---|---|
| `ConversationChat` | [chat_data](#var-chat-data) |  |
| `Conversation` | [conversation](#var-conversation) |  |
| `int` | [current_language_index](#var-current-language-index) | `0` |
| `DialogManager` | [dialog_manager](#var-dialog-manager) |  |
| `Dictionary` | [response_slot_entries](#var-response-slot-entries) | `{}` |

## Methods

| | |
|---|---|
| `void` | [set_dialog_manager](#method-set-dialog-manager)( `p_dialog_manager: DialogManager` ) |
| `void` | [setup_with_chat](#method-setup-with-chat)( `chat: ConversationChat, conv: Conversation, language_index: int` ) |
| `void` | [update_language](#method-update-language)( `language_index: int` ) |
| `int` | [get_chat_id](#method-get-chat-id)() |
| `void` | [update_response_display](#method-update-response-display)( `slot_idx: int` ) |

## Signals

### response_slot_added( slot_idx: int ) {#signal-response-slot-added}

### response_slot_removed( slot_idx: int ) {#signal-response-slot-removed}

### chat_data_changed() {#signal-chat-data-changed}

## Constants

- `const` **SLOT_TEXT_EDIT_LABEL** = `0`
- `const` **FIRST_RESPONSE_SLOT** = `6`
- `const` **PORT_TYPE_CHAT_INPUT** = `0`
- `const` **PORT_TYPE_RESPONSE_FLOW** = `1`

## Variable descriptions

### ConversationChat chat_data {#var-chat-data}

*No description yet.*

### Conversation conversation {#var-conversation}

*No description yet.*

### int current_language_index = 0 {#var-current-language-index}

*No description yet.*

### DialogManager dialog_manager {#var-dialog-manager}

*No description yet.*

### Dictionary response_slot_entries =  {#var-response-slot-entries}

*No description yet.*

## Method descriptions

### void set_dialog_manager( p_dialog_manager: DialogManager ) {#method-set-dialog-manager}

*No description yet.*

### void setup_with_chat( chat: ConversationChat, conv: Conversation, language_index: int ) {#method-setup-with-chat}

*No description yet.*

### void update_language( language_index: int ) {#method-update-language}

*No description yet.*

### int get_chat_id() {#method-get-chat-id}

*No description yet.*

### void update_response_display( slot_idx: int ) {#method-update-response-display}

*No description yet.*

