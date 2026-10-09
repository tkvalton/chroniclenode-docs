<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# CombatReactionEditor

**Inherits:** [VBoxContainer](https://docs.godotengine.org/en/stable/classes/class_vboxcontainer.html)

Editor for managing CombatReaction resources in a Tree view

## Variables

| | | |
|---|---|---|
| `PopupMenu` | [reactions_popup_menu](#var-reactions-popup-menu) |  |
| `ConditionalEditDialog` | [condition_dialog](#var-condition-dialog) |  |
| `DialogManager` | [dialog_manager](#var-dialog-manager) |  |
| `Array[CombatReaction]` | [reactions](#var-reactions) | `[]` |
| `TreeItem` | [selected_item](#var-selected-item) | `null` |
| `bool` | [is_loading](#var-is-loading) | `false` |

## Methods

| | |
|---|---|
| `void` | [load_reactions](#method-load-reactions)( `p_reactions: Array[CombatReaction]` ) |
| `Array[CombatReaction]` | [get_reactions](#method-get-reactions)() |

## Signals

### reactions_modified() {#signal-reactions-modified}

## Enumerations

### enum MenuAction {#enum-menuaction}

- **ADD_REACTION** = `0`
- **EDIT_REACTION** = `1`
- **DUPLICATE_REACTION** = `2`
- **REMOVE_REACTION** = `3`
- **ADD_CONDITION** = `4`
- **ADD_ACTION** = `5`
- **ADD_ACTION_CONDITION** = `6`
- **EDIT_CONDITION** = `7`
- **EDIT_ACTION** = `8`
- **REMOVE_CONDITION** = `9`
- **REMOVE_ACTION** = `10`

## Constants

- `const` **META_TYPE** = `"type"`
- `const` **META_INDEX** = `"index"`
- `const` **META_PARENT_INDEX** = `"parent_index"`
- `const` **META_ACTION_INDEX** = `"action_index"  # For action conditions`
- `const` **META_RESOURCE** = `"resource"`

## Variable descriptions

### PopupMenu reactions_popup_menu {#var-reactions-popup-menu}

*No description yet.*

### ConditionalEditDialog condition_dialog {#var-condition-dialog}

*No description yet.*

### DialogManager dialog_manager {#var-dialog-manager}

*No description yet.*

### Array[CombatReaction] reactions = [] {#var-reactions}

*No description yet.*

### TreeItem selected_item = null {#var-selected-item}

*No description yet.*

### bool is_loading = false {#var-is-loading}

*No description yet.*

## Method descriptions

### void load_reactions( p_reactions: Array[CombatReaction] ) {#method-load-reactions}

*No description yet.*

### Array[CombatReaction] get_reactions() {#method-get-reactions}

*No description yet.*

