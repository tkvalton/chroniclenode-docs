<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ReactionsTree

**Inherits:** `Tree`

Tree control for managing behavior reactions

## Variables

| | | |
|---|---|---|
| `PopupMenu` | [context_menu](#var-context-menu) |  |
| `PopupMenu` | [condition_context_menu](#var-condition-context-menu) |  |
| `ModularBehaviorScript` | [current_script](#var-current-script) |  |
| `TreeItem` | [reactions_root](#var-reactions-root) |  |

## Methods

| | |
|---|---|
| `void` | [set_behavior_script](#method-set-behavior-script)( `script: ModularBehaviorScript` ) |
| `void` | [refresh](#method-refresh)() |

## Signals

### reaction_edit_requested( reaction: BehaviorReaction ) {#signal-reaction-edit-requested}

### reaction_deleted( reaction_index: int ) {#signal-reaction-deleted}

### reaction_add_requested() {#signal-reaction-add-requested}

### condition_added( reaction_index: int ) {#signal-condition-added}

### condition_edited( reaction: BehaviorReaction, condition: EntityCondition ) {#signal-condition-edited}

### condition_deleted( reaction_index: int, condition_index: int ) {#signal-condition-deleted}

## Enumerations

### enum ContextMenuID {#enum-contextmenuid}

- **EDIT** = `0`
- **ADD_CONDITION** = `1`
- **DELETE** = `2`

## Variable descriptions

### PopupMenu context_menu {#var-context-menu}

*No description yet.*

### PopupMenu condition_context_menu {#var-condition-context-menu}

*No description yet.*

### ModularBehaviorScript current_script {#var-current-script}

*No description yet.*

### TreeItem reactions_root {#var-reactions-root}

*No description yet.*

## Method descriptions

### void set_behavior_script( script: ModularBehaviorScript ) {#method-set-behavior-script}

*No description yet.*

### void refresh() {#method-refresh}

*No description yet.*

