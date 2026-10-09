<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ConversationStartGraphNode

**Inherits:** `GraphNode`

Start point node for conversation system Manages multiple starting chat options with requirement priorities

## Variables

| | | |
|---|---|---|
| `Array[Dictionary]` | [start_entries](#var-start-entries) | `[]  # {chat_id: int, requirements: Array}` |
| `DialogManager` | [dialog_manager](#var-dialog-manager) |  |
| `Array[Dictionary]` | [entry_widgets](#var-entry-widgets) | `[]  # {hbox, priority_label, label, edit_button, move_up,...` |
| `int` | [initial_child_count](#var-initial-child-count) | `0` |

## Methods

| | |
|---|---|
| `void` | [set_dialog_manager](#method-set-dialog-manager)( `p_dialog_manager: DialogManager` ) |
| `void` | [setup_with_start_entries](#method-setup-with-start-entries)( `entries: Array[Dictionary]` ) |
| `Array[Dictionary]` | [get_start_entries](#method-get-start-entries)() |
| `int` | [get_start_entry_count](#method-get-start-entry-count)() |
| `int` | [get_chat_id_at_index](#method-get-chat-id-at-index)( `idx: int` ) |
| `void` | [set_chat_id_at_index](#method-set-chat-id-at-index)( `idx: int, chat_id: int` ) |
| `Array` | [get_requirements_at_index](#method-get-requirements-at-index)( `idx: int` ) |

## Signals

### start_data_changed() {#signal-start-data-changed}

## Constants

- `const` **FIRST_START_OPTION_SLOT** = `2  # Start options begin at slot 2 (after description label and separator)`
- `const` **PORT_TYPE_CHAT_OUTPUT** = `0  # Green output - connects to chats`

## Variable descriptions

### Array[Dictionary] start_entries = []  # chat_id: int, requirements: Array {#var-start-entries}

*No description yet.*

### DialogManager dialog_manager {#var-dialog-manager}

*No description yet.*

### Array[Dictionary] entry_widgets = []  # hbox, priority_label, label, edit_button, move_up, mov {#var-entry-widgets}

*No description yet.*

### int initial_child_count = 0 {#var-initial-child-count}

*No description yet.*

## Method descriptions

### void set_dialog_manager( p_dialog_manager: DialogManager ) {#method-set-dialog-manager}

*No description yet.*

### void setup_with_start_entries( entries: Array[Dictionary] ) {#method-setup-with-start-entries}

Load start entries from conversation data

### Array[Dictionary] get_start_entries() {#method-get-start-entries}

Return current start entries for saving

### int get_start_entry_count() {#method-get-start-entry-count}

*No description yet.*

### int get_chat_id_at_index( idx: int ) {#method-get-chat-id-at-index}

*No description yet.*

### void set_chat_id_at_index( idx: int, chat_id: int ) {#method-set-chat-id-at-index}

*No description yet.*

### Array get_requirements_at_index( idx: int ) {#method-get-requirements-at-index}

*No description yet.*

