<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ConversationGraphEditor

**Inherits:** `GraphEdit`

Graph editor for conversation system with flat response structure Responses stored in conversation.conversation_responses, referenced by ID

## Variables

| | | |
|---|---|---|
| `Conversation` | [conversation](#var-conversation) |  |
| `int` | [current_language_index](#var-current-language-index) | `0` |
| `Dictionary` | [chat_nodes](#var-chat-nodes) | `{}  # chat_id -> ChatGraphNode` |
| `Dictionary` | [response_nodes](#var-response-nodes) | `{}  # response_id -> ResponseGraphNode` |
| `Dictionary` | [dice_roll_nodes](#var-dice-roll-nodes) | `{}  # dice_roll_id -> DiceRollGraphNode` |
| `Array[RequirementGraphNode]` | [requirement_nodes](#var-requirement-nodes) | `[]` |
| `ConversationStartGraphNode` | [start_node](#var-start-node) | `null  # Only one start node per conversation` |
| `Dictionary` | [requirement_gate_mappings](#var-requirement-gate-mappings) | `{}  # gate_node_name -> {chat_id, slot_idx}` |
| `DialogManager` | [dialog_manager](#var-dialog-manager) |  |
| `PopupMenu` | [context_menu](#var-context-menu) |  |
| `Vector2` | [context_menu_position](#var-context-menu-position) |  |

## Methods

| | |
|---|---|
| `void` | [set_dialog_manager](#method-set-dialog-manager)( `p_dialog_manager: DialogManager` ) |
| `void` | [load_conversation](#method-load-conversation)( `conv: Conversation` ) |
| `void` | [save_layout](#method-save-layout)() |
| `void` | [clear_graph](#method-clear-graph)() |
| `void` | [set_current_language](#method-set-current-language)( `index: int` ) |
| `void` | [create_new_chat](#method-create-new-chat)() |
| `void` | [create_new_response_node](#method-create-new-response-node)() |
| `void` | [create_new_requirement_gate](#method-create-new-requirement-gate)() |
| `void` | [create_new_dice_roll](#method-create-new-dice-roll)() |
| `void` | [create_start_node](#method-create-start-node)() |

## Signals

### conversation_modified() {#signal-conversation-modified}

## Constants

- `const` **PORT_TYPE_CHAT_INPUT** = `0      # Green - Chat entry point (all nodes use this)`
- `const` **PORT_TYPE_RESPONSE_FLOW** = `1   # Blue - Response connections`
- `const` **CHAT_NODE_SCENE** = `"res://addons/chroniclenode/editor_components/editors/behavior/conversations/...`
- `const` **RESPONSE_NODE_SCENE** = `"res://addons/chroniclenode/editor_components/editors/behavior/conversations/...`
- `const` **REQUIREMENT_NODE_SCENE** = `"res://addons/chroniclenode/editor_components/editors/behavior/conversations/...`
- `const` **DICE_ROLL_NODE_SCENE** = `"res://addons/chroniclenode/editor_components/editors/behavior/conversations/...`
- `const` **START_NODE_SCENE** = `"res://addons/chroniclenode/editor_components/editors/behavior/conversations/...`

## Variable descriptions

### Conversation conversation {#var-conversation}

*No description yet.*

### int current_language_index = 0 {#var-current-language-index}

*No description yet.*

### Dictionary chat_nodes =   # chat_id -&gt; ChatGraphNode {#var-chat-nodes}

*No description yet.*

### Dictionary response_nodes =   # response_id -&gt; ResponseGraphNode {#var-response-nodes}

*No description yet.*

### Dictionary dice_roll_nodes =   # dice_roll_id -&gt; DiceRollGraphNode {#var-dice-roll-nodes}

*No description yet.*

### Array[RequirementGraphNode] requirement_nodes = [] {#var-requirement-nodes}

*No description yet.*

### ConversationStartGraphNode start_node = null  # Only one start node per conversation {#var-start-node}

*No description yet.*

### Dictionary requirement_gate_mappings =   # gate_node_name -&gt; chat_id, slot_idx {#var-requirement-gate-mappings}

*No description yet.*

### DialogManager dialog_manager {#var-dialog-manager}

*No description yet.*

### PopupMenu context_menu {#var-context-menu}

*No description yet.*

### Vector2 context_menu_position {#var-context-menu-position}

*No description yet.*

## Method descriptions

### void set_dialog_manager( p_dialog_manager: DialogManager ) {#method-set-dialog-manager}

Set dialog manager reference

### void load_conversation( conv: Conversation ) {#method-load-conversation}

Load conversation into the graph editor

### void save_layout() {#method-save-layout}

*No description yet.*

### void clear_graph() {#method-clear-graph}

*No description yet.*

### void set_current_language( index: int ) {#method-set-current-language}

*No description yet.*

### void create_new_chat() {#method-create-new-chat}

*No description yet.*

### void create_new_response_node() {#method-create-new-response-node}

*No description yet.*

### void create_new_requirement_gate() {#method-create-new-requirement-gate}

*No description yet.*

### void create_new_dice_roll() {#method-create-new-dice-roll}

*No description yet.*

### void create_start_node() {#method-create-start-node}

*No description yet.*

