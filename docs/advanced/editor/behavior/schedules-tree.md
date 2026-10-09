<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# SchedulesTree

**Inherits:** `Tree`

Tree control for managing behavior schedules and their conditions

## Variables

| | | |
|---|---|---|
| `PopupMenu` | [context_menu](#var-context-menu) |  |
| `PopupMenu` | [condition_context_menu](#var-condition-context-menu) |  |
| `ModularBehaviorScript` | [current_script](#var-current-script) |  |
| `TreeItem` | [schedules_root](#var-schedules-root) |  |

## Methods

| | |
|---|---|
| `void` | [set_behavior_script](#method-set-behavior-script)( `script: ModularBehaviorScript` ) |
| `void` | [refresh](#method-refresh)() |
| `int` | [get_selected_schedule_index](#method-get-selected-schedule-index)() |

## Signals

### schedule_edit_requested( schedule: TaskSchedule ) {#signal-schedule-edit-requested}

### schedule_deleted( schedule_index: int ) {#signal-schedule-deleted}

### schedule_moved_up( schedule_index: int ) {#signal-schedule-moved-up}

### schedule_moved_down( schedule_index: int ) {#signal-schedule-moved-down}

### condition_added( schedule_index: int ) {#signal-condition-added}

### condition_edited( schedule: TaskSchedule, condition: EntityCondition ) {#signal-condition-edited}

### condition_deleted( schedule_index: int, condition_index: int ) {#signal-condition-deleted}

### schedule_selected( schedule_index: int ) {#signal-schedule-selected}

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

### TreeItem schedules_root {#var-schedules-root}

*No description yet.*

## Method descriptions

### void set_behavior_script( script: ModularBehaviorScript ) {#method-set-behavior-script}

*No description yet.*

### void refresh() {#method-refresh}

*No description yet.*

### int get_selected_schedule_index() {#method-get-selected-schedule-index}

*No description yet.*

