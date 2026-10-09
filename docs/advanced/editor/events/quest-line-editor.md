<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# QuestLineEditor

**Inherits:** [ResourceEditor](/advanced/editor/base/resource-editor) < [Control](https://docs.godotengine.org/en/stable/classes/class_control.html)

QuestLine Editor using the new ResourceManager and EditorFileList system

## Variables

| | | |
|---|---|---|
| `EventTypeManager  # Reuse EventTypeManager for actions` | [type_manager](#var-type-manager) |  |
| `PopupMenu` | [reward_context_menu](#var-reward-context-menu) |  |

## Methods

| | |
|---|---|
| `void` | [setup_managers](#method-setup-managers)( `p_resource_manager: ResourceManager, p_dialog_manager: DialogManager` ) |
| `QuestLine` | [get_current_questline](#method-get-current-questline)() |
| `void` | [set_current_questline](#method-set-current-questline)( `questline: QuestLine` ) |
| `void` | [refresh_questline_structure](#method-refresh-questline-structure)() |
| `EventTypeManager` | [get_type_manager](#method-get-type-manager)() |
| `void` | [add_quest_to_current_step](#method-add-quest-to-current-step)( `quest_id: int, step_number: int` ) |
| `Array[int]` | [get_available_quest_steps](#method-get-available-quest-steps)() |
| `Reward` | [get_selected_reward](#method-get-selected-reward)() |
| `int` | [get_completion_reward_count](#method-get-completion-reward-count)() |

## Signals

### switch_to_quest_editor( quest_id: int ) {#signal-switch-to-quest-editor}

## Enumerations

### enum RewardContextMenuItem {#enum-rewardcontextmenuitem}

- **EDIT_REWARD** = `0`
- **REMOVE_REWARD** = `1`
- **MOVE_UP** = `2`
- **MOVE_DOWN** = `3`
- **SEPARATOR** = `4`
- **CLEAR_ALL** = `5`

## Variable descriptions

### EventTypeManager  # Reuse EventTypeManager for actions type_manager {#var-type-manager}

*No description yet.*

### PopupMenu reward_context_menu {#var-reward-context-menu}

*No description yet.*

## Method descriptions

### void setup_managers( p_resource_manager: ResourceManager, p_dialog_manager: DialogManager ) {#method-setup-managers}

*Overrides this function of [ResourceEditor](/advanced/editor/base/resource-editor).*

### QuestLine get_current_questline() {#method-get-current-questline}

*No description yet.*

### void set_current_questline( questline: QuestLine ) {#method-set-current-questline}

*No description yet.*

### void refresh_questline_structure() {#method-refresh-questline-structure}

*No description yet.*

### EventTypeManager get_type_manager() {#method-get-type-manager}

*No description yet.*

### void add_quest_to_current_step( quest_id: int, step_number: int ) {#method-add-quest-to-current-step}

Called by main view when a new quest is created and should be added to current step

### Array[int] get_available_quest_steps() {#method-get-available-quest-steps}

Get available quest steps for quest creation context

### Reward get_selected_reward() {#method-get-selected-reward}

*No description yet.*

### int get_completion_reward_count() {#method-get-completion-reward-count}

*No description yet.*

