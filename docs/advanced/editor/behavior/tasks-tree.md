<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# TasksTree

**Inherits:** `Tree`

Tree control for managing behavior tasks within a selected schedule

## Variables

| | | |
|---|---|---|
| `PopupMenu` | [context_menu](#var-context-menu) |  |
| `PopupMenu` | [condition_context_menu](#var-condition-context-menu) |  |
| `ModularBehaviorScript` | [current_script](#var-current-script) |  |
| `int` | [current_schedule_index](#var-current-schedule-index) | `-1` |
| `TreeItem` | [tasks_root](#var-tasks-root) |  |

## Methods

| | |
|---|---|
| `void` | [set_behavior_script](#method-set-behavior-script)( `script: ModularBehaviorScript, schedule_index: int = -1` ) |
| `void` | [set_selected_schedule](#method-set-selected-schedule)( `schedule_index: int` ) |
| `void` | [refresh](#method-refresh)() |
| `int` | [get_current_schedule_index](#method-get-current-schedule-index)() |

## Signals

### task_edit_requested( schedule_index: int, task: BehaviorTask ) {#signal-task-edit-requested}

### task_deleted( schedule_index: int, task_index: int ) {#signal-task-deleted}

### task_moved_up( schedule_index: int, task_index: int ) {#signal-task-moved-up}

### task_moved_down( schedule_index: int, task_index: int ) {#signal-task-moved-down}

### task_add_requested( schedule_index: int ) {#signal-task-add-requested}

### condition_added( schedule_index: int, task_index: int ) {#signal-condition-added}

### condition_edited( schedule_index: int, task: BehaviorTask, condition: EntityCondition ) {#signal-condition-edited}

### condition_deleted( schedule_index: int, task_index: int, condition_index: int ) {#signal-condition-deleted}

## Enumerations

### enum ContextMenuID {#enum-contextmenuid}

- **EDIT** = `0`
- **ADD_CONDITION** = `1`
- **DELETE** = `2`
- **MOVE_UP** = `3`
- **MOVE_DOWN** = `4`

## Variable descriptions

### PopupMenu context_menu {#var-context-menu}

*No description yet.*

### PopupMenu condition_context_menu {#var-condition-context-menu}

*No description yet.*

### ModularBehaviorScript current_script {#var-current-script}

*No description yet.*

### int current_schedule_index = -1 {#var-current-schedule-index}

*No description yet.*

### TreeItem tasks_root {#var-tasks-root}

*No description yet.*

## Method descriptions

### void set_behavior_script( script: ModularBehaviorScript, schedule_index: int = -1 ) {#method-set-behavior-script}

*No description yet.*

### void set_selected_schedule( schedule_index: int ) {#method-set-selected-schedule}

*No description yet.*

### void refresh() {#method-refresh}

*No description yet.*

### int get_current_schedule_index() {#method-get-current-schedule-index}

*No description yet.*

