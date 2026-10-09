<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# EncounterReactionsEditor

**Inherits:** [VBoxContainer](https://docs.godotengine.org/en/stable/classes/class_vboxcontainer.html)

Embedded editor for UniqueEncounterData.reactions property Used by UniqueObjectInspector to provide a custom interface for the reactions array

## Variables

| | | |
|---|---|---|
| `Label` | [header_label](#var-header-label) |  |
| `Button` | [add_reaction_button](#var-add-reaction-button) |  |
| `Tree` | [reactions_tree](#var-reactions-tree) |  |
| `TreeItem` | [root_item](#var-root-item) |  |
| `EncounterReactionEditDialog` | [reaction_edit_dialog](#var-reaction-edit-dialog) |  |
| `EncounterActionEditDialog` | [action_edit_dialog](#var-action-edit-dialog) |  |
| `EncounterConditionEditDialog` | [condition_edit_dialog](#var-condition-edit-dialog) |  |
| `Array[EncounterReaction]` | [current_reactions](#var-current-reactions) | `[]` |
| `PopupMenu` | [context_menu](#var-context-menu) |  |
| `EditorPlugin` | [plugin](#var-plugin) |  |

## Methods

| | |
|---|---|
| `void` | [load_reactions](#method-load-reactions)( `reactions: Array[EncounterReaction]` ) |
| `Array[EncounterReaction]` | [get_reactions](#method-get-reactions)() |

## Signals

### reactions_changed( new_reactions: Array[EncounterReaction] ) {#signal-reactions-changed}

## Variable descriptions

### Label header_label {#var-header-label}

*No description yet.*

### Button add_reaction_button {#var-add-reaction-button}

*No description yet.*

### Tree reactions_tree {#var-reactions-tree}

*No description yet.*

### TreeItem root_item {#var-root-item}

*No description yet.*

### EncounterReactionEditDialog reaction_edit_dialog {#var-reaction-edit-dialog}

*No description yet.*

### EncounterActionEditDialog action_edit_dialog {#var-action-edit-dialog}

*No description yet.*

### EncounterConditionEditDialog condition_edit_dialog {#var-condition-edit-dialog}

*No description yet.*

### Array[EncounterReaction] current_reactions = [] {#var-current-reactions}

*No description yet.*

### PopupMenu context_menu {#var-context-menu}

*No description yet.*

### EditorPlugin plugin {#var-plugin}

*No description yet.*

## Method descriptions

### void load_reactions( reactions: Array[EncounterReaction] ) {#method-load-reactions}

Load reactions array for editing

### Array[EncounterReaction] get_reactions() {#method-get-reactions}

Get the current reactions array

