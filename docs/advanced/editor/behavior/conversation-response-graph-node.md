<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ConversationResponseGraphNode

**Inherits:** `GraphNode`

GraphNode representation of a ConversationResponse Uses DialogManager.setup_dialog() for guaranteed clean connections

## Variables

| | | |
|---|---|---|
| `ConversationResponse` | [response_data](#var-response-data) |  |
| `Conversation` | [conversation](#var-conversation) |  |
| `int` | [current_language_index](#var-current-language-index) | `0` |
| `DialogManager` | [dialog_manager](#var-dialog-manager) |  |
| `Dictionary` | [action_entries](#var-action-entries) | `{}` |

## Methods

| | |
|---|---|
| `void` | [set_dialog_manager](#method-set-dialog-manager)( `p_dialog_manager: DialogManager` ) |
| `void` | [setup_with_response](#method-setup-with-response)( `response: ConversationResponse, language_index: int, p_conversation: Conversation = null` ) |
| `void` | [update_language](#method-update-language)( `language_index: int` ) |
| `int` | [get_response_id](#method-get-response-id)() |

## Signals

### response_data_changed() {#signal-response-data-changed}

### action_added( action_idx: int ) {#signal-action-added}

### action_removed( action_idx: int ) {#signal-action-removed}

## Constants

- `const` **SLOT_DISPLAY_NAME** = `0`
- `const` **FIRST_ACTION_SLOT** = `7`
- `const` **PORT_TYPE_RESPONSE_INPUT** = `1`
- `const` **PORT_TYPE_PROCEED_ACTION** = `0`
- `const` **PORT_TYPE_ACTION_OUTPUT** = `2`

## Variable descriptions

### ConversationResponse response_data {#var-response-data}

*No description yet.*

### Conversation conversation {#var-conversation}

*No description yet.*

### int current_language_index = 0 {#var-current-language-index}

*No description yet.*

### DialogManager dialog_manager {#var-dialog-manager}

*No description yet.*

### Dictionary action_entries =  {#var-action-entries}

*No description yet.*

## Method descriptions

### void set_dialog_manager( p_dialog_manager: DialogManager ) {#method-set-dialog-manager}

*No description yet.*

### void setup_with_response( response: ConversationResponse, language_index: int, p_conversation: Conversation = null ) {#method-setup-with-response}

*No description yet.*

### void update_language( language_index: int ) {#method-update-language}

*No description yet.*

### int get_response_id() {#method-get-response-id}

*No description yet.*

