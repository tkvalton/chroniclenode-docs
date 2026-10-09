<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ResponseStatePopup

**Inherits:** `ConfirmationDialog`

## Variables

| | | |
|---|---|---|
| `PopupMode` | [popup_mode](#var-popup-mode) | `PopupMode.RESPONSE_STATE` |
| `Conversation` | [conversation](#var-conversation) |  |
| `OptionButton` | [option_button](#var-option-button) |  |
| `CheckBox` | [state_checkbox](#var-state-checkbox) |  |

## Methods

| | |
|---|---|
| `void` | [setup_response_state](#method-setup-response-state)( `p_conversation: Conversation, current_response_id: int, current_state: bool` ) |
| `void` | [setup_starting_chat](#method-setup-starting-chat)( `p_conversation: Conversation, current_chat_id: int` ) |

## Signals

### response_state_selected( response_id: int, response_state: bool ) {#signal-response-state-selected}

### starting_chat_selected( chat_id: int ) {#signal-starting-chat-selected}

## Enumerations

### enum PopupMode {#enum-popupmode}

- **RESPONSE_STATE** = `0`
- **STARTING_CHAT** = `1`

## Variable descriptions

### PopupMode popup_mode = PopupMode.RESPONSE_STATE {#var-popup-mode}

*No description yet.*

### Conversation conversation {#var-conversation}

*No description yet.*

### OptionButton option_button {#var-option-button}

*No description yet.*

### CheckBox state_checkbox {#var-state-checkbox}

*No description yet.*

## Method descriptions

### void setup_response_state( p_conversation: Conversation, current_response_id: int, current_state: bool ) {#method-setup-response-state}

*No description yet.*

### void setup_starting_chat( p_conversation: Conversation, current_chat_id: int ) {#method-setup-starting-chat}

*No description yet.*

