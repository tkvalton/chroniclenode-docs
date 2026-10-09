<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# QuestEditor

**Inherits:** [ResourceEditor](/advanced/editor/base/resource-editor) < [Control](https://docs.godotengine.org/en/stable/classes/class_control.html)

Quest Editor using the new ResourceManager and EditorFileList system

## Variables

| | | |
|---|---|---|
| `SpinBox` | [level_spinbox](#var-level-spinbox) |  |
| `OptionButton` | [on_fail_option](#var-on-fail-option) |  |
| `OptionButton` | [abandonable_option](#var-abandonable-option) |  |
| `EventTypeManager  # Reuse EventTypeManager for actions` | [type_manager](#var-type-manager) |  |
| `PopupMenu` | [reward_context_menu](#var-reward-context-menu) |  |

## Methods

| | |
|---|---|
| `void` | [setup_managers](#method-setup-managers)( `p_resource_manager: ResourceManager, p_dialog_manager: DialogManager` ) |
| `Quest` | [get_current_quest](#method-get-current-quest)() |
| `void` | [set_current_quest](#method-set-current-quest)( `quest: Quest` ) |
| `void` | [refresh_quest_structure](#method-refresh-quest-structure)() |
| `EventTypeManager` | [get_type_manager](#method-get-type-manager)() |
| `Reward` | [get_selected_reward](#method-get-selected-reward)() |
| `int` | [get_reward_count](#method-get-reward-count)() |

## Enumerations

### enum RewardContextMenuItem {#enum-rewardcontextmenuitem}

- **EDIT_REWARD** = `0`
- **REMOVE_REWARD** = `1`
- **MOVE_UP** = `2`
- **MOVE_DOWN** = `3`
- **SEPARATOR** = `4`
- **CLEAR_ALL** = `5`

## Variable descriptions

### SpinBox level_spinbox {#var-level-spinbox}

*No description yet.*

### OptionButton on_fail_option {#var-on-fail-option}

*No description yet.*

### OptionButton abandonable_option {#var-abandonable-option}

*No description yet.*

### EventTypeManager  # Reuse EventTypeManager for actions type_manager {#var-type-manager}

*No description yet.*

### PopupMenu reward_context_menu {#var-reward-context-menu}

*No description yet.*

## Method descriptions

### void setup_managers( p_resource_manager: ResourceManager, p_dialog_manager: DialogManager ) {#method-setup-managers}

*Overrides this function of [ResourceEditor](/advanced/editor/base/resource-editor).*

### Quest get_current_quest() {#method-get-current-quest}

*No description yet.*

### void set_current_quest( quest: Quest ) {#method-set-current-quest}

*No description yet.*

### void refresh_quest_structure() {#method-refresh-quest-structure}

*No description yet.*

### EventTypeManager get_type_manager() {#method-get-type-manager}

*No description yet.*

### Reward get_selected_reward() {#method-get-selected-reward}

*No description yet.*

### int get_reward_count() {#method-get-reward-count}

*No description yet.*

