<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ConversationEditor

**Inherits:** [ResourceEditor](/advanced/editor/base/resource-editor) < [Control](https://docs.godotengine.org/en/stable/classes/class_control.html)

Conversation Editor for managing conversations Embeds the ConversationGraphEditor for visual conversation editing

## Variables

| | | |
|---|---|---|
| `PopupMenu` | [quest_hand_in_context_menu](#var-quest-hand-in-context-menu) |  |
| `PopupMenu` | [offer_quests_context_menu](#var-offer-quests-context-menu) |  |
| `Conversation:` | [current_conversation](#var-current-conversation) |  |

## Methods

| | |
|---|---|
| `void` | [setup_managers](#method-setup-managers)( `p_resource_manager: ResourceManager, p_dialog_manager: DialogManager` ) |
| `Array[String]` | [validate_conversation](#method-validate-conversation)() |
| `void` | [perform_full_validation](#method-perform-full-validation)() |
| `Conversation` | [get_current_conversation](#method-get-current-conversation)() |
| `void` | [refresh_graph](#method-refresh-graph)() |

## Enumerations

### enum QuestHandInMenuItem {#enum-questhandinmenuitem}

- **ADD_QUEST** = `0`
- **REMOVE_QUEST** = `1`
- **CLEAR_ALL** = `2`

### enum OfferQuestsMenuItem {#enum-offerquestsmenuitem}

- **ADD_QUEST** = `0`
- **REMOVE_QUEST** = `1`
- **CLEAR_ALL** = `2`

## Variable descriptions

### PopupMenu quest_hand_in_context_menu {#var-quest-hand-in-context-menu}

*No description yet.*

### PopupMenu offer_quests_context_menu {#var-offer-quests-context-menu}

*No description yet.*

### Conversation: current_conversation {#var-current-conversation}

*No description yet.*

## Method descriptions

### void setup_managers( p_resource_manager: ResourceManager, p_dialog_manager: DialogManager ) {#method-setup-managers}

*Overrides this function of [ResourceEditor](/advanced/editor/base/resource-editor).*

### Array[String] validate_conversation() {#method-validate-conversation}

*No description yet.*

### void perform_full_validation() {#method-perform-full-validation}

*No description yet.*

### Conversation get_current_conversation() {#method-get-current-conversation}

*No description yet.*

### void refresh_graph() {#method-refresh-graph}

*No description yet.*

