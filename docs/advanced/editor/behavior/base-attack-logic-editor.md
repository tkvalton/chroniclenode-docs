<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# BaseAttackLogicEditor

**Inherits:** [VBoxContainer](https://docs.godotengine.org/en/stable/classes/class_vboxcontainer.html)

**Inherited by:** [PriorityAttackLogicEditor](/advanced/editor/behavior/priority-attack-logic-editor), [TacticalAttackLogicEditor](/advanced/editor/behavior/tactical-attack-logic-editor), [TimelineAttackLogicEditor](/advanced/editor/behavior/timeline-attack-logic-editor)

Base class for attack logic editors - provides shared functionality

## Variables

| | | |
|---|---|---|
| `PopupMenu` | [actions_popup_menu](#var-actions-popup-menu) |  |
| `ConditionalEditDialog` | [condition_dialog](#var-condition-dialog) |  |
| `DialogManager` | [dialog_manager](#var-dialog-manager) |  |
| `TreeItem` | [selected_item](#var-selected-item) | `null` |
| `Tree` | [selected_tree](#var-selected-tree) | `null` |
| `bool` | [is_loading](#var-is-loading) | `false` |

## Methods

| | |
|---|---|
| `void` | [setup_tree](#method-setup-tree)( `tree: Tree` ) |
| `void` | [setup_timeline_tree](#method-setup-timeline-tree)( `tree: Tree` ) |
| `TreeItem` | [create_condition_item](#method-create-condition-item)( `tree: Tree, parent: TreeItem, condition: Condition, action_index: int, condition_index: int, category: String = ""` ) |
| `TreeItem` | [create_combo_sequence_item](#method-create-combo-sequence-item)( `tree: Tree, parent: TreeItem, sequence_action: CombatAction, combo_index: int, sequence_index: int, category: String = ""` ) |
| `TreeItem` | [create_wait_condition_item](#method-create-wait-condition-item)( `tree: Tree, parent: TreeItem, wait_condition: Condition, action_index: int, category: String = ""` ) |
| `void` | [add_combo_sequence_items](#method-add-combo-sequence-items)( `tree: Tree, parent: TreeItem, combo_action: ComboAction, action_index: int, category: String = ""` ) |
| `void` | [add_wait_condition_items](#method-add-wait-condition-items)( `tree: Tree, parent: TreeItem, wait_action: WaitForConditionAction, action_index: int, category: String = ""` ) |
| `String` | [get_action_display_name](#method-get-action-display-name)( `action: CombatAction` ) |
| `String` | [get_action_details](#method-get-action-details)( `action: CombatAction` ) |
| `String` | [get_condition_display_name](#method-get-condition-display-name)( `condition: Condition` ) |
| `String` | [get_condition_details](#method-get-condition-details)( `condition: Condition` ) |
| `void` | [setup_tree_signals](#method-setup-tree-signals)( `tree: Tree` ) |
| `Condition` | [create_condition_instance](#method-create-condition-instance)( `type_data: Dictionary, param_values: Dictionary` ) |
| `CombatAction` | [create_action_instance](#method-create-action-instance)( `type_data: Dictionary, param_values: Dictionary` ) |

## Signals

### logic_modified() {#signal-logic-modified}

## Enumerations

### enum MenuAction {#enum-menuaction}

- **ADD_ACTION** = `0`
- **EDIT_ACTION** = `1`
- **DUPLICATE_ACTION** = `2`
- **REMOVE_ACTION** = `3`
- **ADD_CONDITION** = `4`
- **EDIT_CONDITION** = `5`
- **REMOVE_CONDITION** = `6`
- **MOVE_UP** = `7`
- **MOVE_DOWN** = `8`
- **ADD_COMBO_ACTION** = `9`
- **REMOVE_COMBO_ACTION** = `10`
- **SET_WAIT_CONDITION** = `11`
- **REMOVE_WAIT_CONDITION** = `12`

## Constants

- `const` **META_TYPE** = `"type"`
- `const` **META_INDEX** = `"index"`
- `const` **META_ACTION_INDEX** = `"action_index"`
- `const` **META_RESOURCE** = `"resource"`
- `const` **META_CATEGORY** = `"category"`

## Variable descriptions

### PopupMenu actions_popup_menu {#var-actions-popup-menu}

*No description yet.*

### ConditionalEditDialog condition_dialog {#var-condition-dialog}

*No description yet.*

### DialogManager dialog_manager {#var-dialog-manager}

*No description yet.*

### TreeItem selected_item = null {#var-selected-item}

*No description yet.*

### Tree selected_tree = null {#var-selected-tree}

*No description yet.*

### bool is_loading = false {#var-is-loading}

*No description yet.*

## Method descriptions

### void setup_tree( tree: Tree ) {#method-setup-tree}

*No description yet.*

### void setup_timeline_tree( tree: Tree ) {#method-setup-timeline-tree}

*No description yet.*

### TreeItem create_condition_item( tree: Tree, parent: TreeItem, condition: Condition, action_index: int, condition_index: int, category: String = "" ) {#method-create-condition-item}

*No description yet.*

### TreeItem create_combo_sequence_item( tree: Tree, parent: TreeItem, sequence_action: CombatAction, combo_index: int, sequence_index: int, category: String = "" ) {#method-create-combo-sequence-item}

*No description yet.*

### TreeItem create_wait_condition_item( tree: Tree, parent: TreeItem, wait_condition: Condition, action_index: int, category: String = "" ) {#method-create-wait-condition-item}

*No description yet.*

### void add_combo_sequence_items( tree: Tree, parent: TreeItem, combo_action: ComboAction, action_index: int, category: String = "" ) {#method-add-combo-sequence-items}

*No description yet.*

### void add_wait_condition_items( tree: Tree, parent: TreeItem, wait_action: WaitForConditionAction, action_index: int, category: String = "" ) {#method-add-wait-condition-items}

*No description yet.*

### String get_action_display_name( action: CombatAction ) {#method-get-action-display-name}

*No description yet.*

### String get_action_details( action: CombatAction ) {#method-get-action-details}

*No description yet.*

### String get_condition_display_name( condition: Condition ) {#method-get-condition-display-name}

*No description yet.*

### String get_condition_details( condition: Condition ) {#method-get-condition-details}

*No description yet.*

### void setup_tree_signals( tree: Tree ) {#method-setup-tree-signals}

*No description yet.*

### Condition create_condition_instance( type_data: Dictionary, param_values: Dictionary ) {#method-create-condition-instance}

*No description yet.*

### CombatAction create_action_instance( type_data: Dictionary, param_values: Dictionary ) {#method-create-action-instance}

*No description yet.*

