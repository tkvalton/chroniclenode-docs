<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# BehaviorPanel

**Inherits:** [VBoxContainer](https://docs.godotengine.org/en/stable/classes/class_vboxcontainer.html)

The Behaviour tab: what the NPC selected in the 3D viewport does, and the place to change it. It shows the behaviour script of the NPC and where it comes from (its definition or its own), the day as a strip of 24 hours, the schedules with their tasks and conditions (a colour per schedule, the same as the lines in the viewport), the reactions and the fallback, and who else uses the script. Choosing a schedule or a task in the list makes it bright in the viewport (BehaviorGizmoPlugin asks this panel what to draw). The list works like the lists of the Behavior Scripts editor: right click a row for Edit, Add Task, Add Condition, Delete, Move Up and Move Down (double click edits), and the same windows open (the new schedule window, the schedule window, the task windows, the condition window). The strip of the day can be dragged to set the time of a schedule. Everything changes only the script that is **this NPC's own** (a script of the definition is shared); each change is saved and is one step of Undo.

## Variables

| | | |
|---|---|---|
| `EditorPlugin` | [plugin](#var-plugin) | `null` |
| `DialogManager` | [dialog_manager](#var-dialog-manager) | `null` |
| `EditorUndoRedoManager` | [undo_redo](#var-undo-redo) | `null` |
| `BehaviorEditing.Mode` | [tool_mode](#var-tool-mode) | `BehaviorEditing.Mode.NONE` |
| `NPC` | [current_npc](#var-current-npc) | `null` |
| `ModularBehaviorScript` | [current_script](#var-current-script) | `null` |
| `int` | [focus_schedule](#var-focus-schedule) | `-1` |
| `int` | [focus_task](#var-focus-task) | `-1` |
| `bool` | [show_paths](#var-show-paths) | `true` |
| `bool` | [only_focus](#var-only-focus) | `false` |
| `Label` | [title_label](#var-title-label) |  |
| `Label` | [source_label](#var-source-label) |  |
| `Label` | [users_label](#var-users-label) |  |
| `Tree` | [tree](#var-tree) |  |
| `BehaviorTimeStrip` | [strip](#var-strip) |  |
| `RichTextLabel` | [details](#var-details) |  |
| `CheckBox` | [show_check](#var-show-check) |  |
| `CheckBox` | [only_check](#var-only-check) |  |
| `Button` | [open_button](#var-open-button) |  |
| `Button` | [refresh_button](#var-refresh-button) |  |
| `Button` | [own_button](#var-own-button) |  |
| `Button` | [shared_button](#var-shared-button) |  |
| `Button` | [add_schedule_button](#var-add-schedule-button) |  |
| `Button` | [add_task_button](#var-add-task-button) |  |
| `Dictionary` | [tool_buttons](#var-tool-buttons) | `{}` |
| `Button` | [remove_point_button](#var-remove-point-button) |  |
| `CheckBox` | [relative_check](#var-relative-check) |  |
| `Label` | [status_label](#var-status-label) |  |
| `PopupMenu` | [context_menu](#var-context-menu) |  |
| `NewScheduleDialog` | [new_schedule_dialog](#var-new-schedule-dialog) |  |
| `ScheduleEditDialog` | [schedule_edit_dialog](#var-schedule-edit-dialog) |  |
| `ConditionalEditDialog` | [condition_dialog](#var-condition-dialog) |  |

## Methods

| | |
|---|---|
| `Dictionary` | [get_draw_state](#method-get-draw-state)( `npc: NPC` ) |
| `void` | [load_npc](#method-load-npc)( `npc: NPC` ) |
| `void` | [clear](#method-clear)() |
| `void` | [reload](#method-reload)() |
| `void` | [tick](#method-tick)() |
| `bool` | [is_editable](#method-is-editable)() |
| `void` | [set_tool](#method-set-tool)( `mode: BehaviorEditing.Mode` ) |
| `void` | [make_own](#method-make-own)() |
| `void` | [use_definitions_script](#method-use-definitions-script)() |
| `void` | [set_override_id](#method-set-override-id)( `data: UniqueEntityData, script_id: int` ) |
| `BehaviorTask` | [chosen_task](#method-chosen-task)() |
| `TaskSchedule` | [chosen_schedule](#method-chosen-schedule)() |
| `bool` | [add_point_at](#method-add-point-at)( `world: Vector3` ) |
| `bool` | [pick_target](#method-pick-target)( `unique_id: int, target_name: String` ) |
| `void` | [remove_last_point](#method-remove-last-point)() |
| `void` | [add_schedule_made](#method-add-schedule-made)( `schedule: TaskSchedule` ) |
| `void` | [request_add_task](#method-request-add-task)() |
| `void` | [add_task_made](#method-add-task-made)( `task: BehaviorTask, schedule_index: int` ) |
| `void` | [delete_entry](#method-delete-entry)( `entry: Dictionary` ) |
| `void` | [move_entry](#method-move-entry)( `entry: Dictionary, delta: int` ) |
| `void` | [finish_edit](#method-finish-edit)( `action_name: String, before: Dictionary` ) |
| `void` | [apply_state](#method-apply-state)( `state: Dictionary, save: bool = true` ) |
| `bool` | [build_menu](#method-build-menu)( `entry: Dictionary` ) |
| `void` | [edit_entry](#method-edit-entry)( `entry: Dictionary` ) |
| `void` | [request_add_condition](#method-request-add-condition)( `entry: Dictionary` ) |
| `void` | [add_condition_made](#method-add-condition-made)( `condition: EntityCondition, schedule_index: int, task_index: int` ) |

## Signals

### draw_state_changed() {#signal-draw-state-changed}

The viewport has to draw again

## Enumerations

### enum MenuID {#enum-menuid}

What the items of the right click menu do (the ids of the menus of the Behavior Scripts editor, plus Add Task)

- **EDIT** = `0`
- **ADD_CONDITION** = `1`
- **DELETE** = `2`
- **MOVE_UP** = `3`
- **MOVE_DOWN** = `4`
- **ADD_TASK** = `5`

## Constants

- `String` **NOT_OWN** = `"Make this NPC's own behaviour first (the shared script would change for ever...`

## Variable descriptions

### EditorPlugin plugin = null {#var-plugin}

*No description yet.*

### DialogManager dialog_manager = null {#var-dialog-manager}

The windows that choose a task and edit it (set by the plugin; the same manager the editors use)

### EditorUndoRedoManager undo_redo = null {#var-undo-redo}

Where the editor's undo history is (set by the plugin; without it a change is made and saved but cannot be undone)

### BehaviorEditing.Mode tool_mode = BehaviorEditing.Mode.NONE {#var-tool-mode}

What a click in the viewport does (BehaviorEditing.Mode; BehaviorTool does the click)

### NPC current_npc = null {#var-current-npc}

*No description yet.*

### ModularBehaviorScript current_script = null {#var-current-script}

*No description yet.*

### int focus_schedule = -1 {#var-focus-schedule}

The schedule and the task chosen in the list (-1 = none)

### int focus_task = -1 {#var-focus-task}

*No description yet.*

### bool show_paths = true {#var-show-paths}

*No description yet.*

### bool only_focus = false {#var-only-focus}

*No description yet.*

### Label title_label {#var-title-label}

*No description yet.*

### Label source_label {#var-source-label}

*No description yet.*

### Label users_label {#var-users-label}

*No description yet.*

### Tree tree {#var-tree}

*No description yet.*

### BehaviorTimeStrip strip {#var-strip}

*No description yet.*

### RichTextLabel details {#var-details}

*No description yet.*

### CheckBox show_check {#var-show-check}

*No description yet.*

### CheckBox only_check {#var-only-check}

*No description yet.*

### Button open_button {#var-open-button}

*No description yet.*

### Button refresh_button {#var-refresh-button}

*No description yet.*

### Button own_button {#var-own-button}

*No description yet.*

### Button shared_button {#var-shared-button}

*No description yet.*

### Button add_schedule_button {#var-add-schedule-button}

*No description yet.*

### Button add_task_button {#var-add-task-button}

*No description yet.*

### Dictionary tool_buttons =  {#var-tool-buttons}

BehaviorEditing.Mode -&gt; Button

### Button remove_point_button {#var-remove-point-button}

*No description yet.*

### CheckBox relative_check {#var-relative-check}

*No description yet.*

### Label status_label {#var-status-label}

*No description yet.*

### PopupMenu context_menu {#var-context-menu}

*No description yet.*

### NewScheduleDialog new_schedule_dialog {#var-new-schedule-dialog}

*No description yet.*

### ScheduleEditDialog schedule_edit_dialog {#var-schedule-edit-dialog}

*No description yet.*

### ConditionalEditDialog condition_dialog {#var-condition-dialog}

*No description yet.*

## Method descriptions

### Dictionary get_draw_state( npc: NPC ) {#method-get-draw-state}

The answer to the gizmo: what to draw for this NPC (empty when nothing)

### void load_npc( npc: NPC ) {#method-load-npc}

An NPC is selected in the viewport (null = none): the tab shows its behaviour

### void clear() {#method-clear}

Nothing (or something else than an NPC) is selected

### void reload() {#method-reload}

Reads the script of the NPC again from the database

### void tick() {#method-tick}

Called now and then by the plugin: an NPC that was moved draws its routes from its new place

### bool is_editable() {#method-is-editable}

Can the script be changed? Only when it is this NPC's own: a script of the definition is shared by every NPC that has it

### void set_tool( mode: BehaviorEditing.Mode ) {#method-set-tool}

What a click in the viewport does (NONE = nothing)

### void make_own() {#method-make-own}

Copies the script into a new record for this NPC alone (an empty one when it has no script) and gives it to the NPC. The record is a script of the database: it stays there when the NPC is deleted

### void use_definitions_script() {#method-use-definitions-script}

Follows the script of the definition again (the own script stays in the database)

### void set_override_id( data: UniqueEntityData, script_id: int ) {#method-set-override-id}

Sets the script the placed NPC follows instead of its definition's (0 = the definition's), saves it and shows it

### BehaviorTask chosen_task() {#method-chosen-task}

The task chosen in the list (null when none)

### TaskSchedule chosen_schedule() {#method-chosen-schedule}

The schedule chosen in the list (null when none)

### bool add_point_at( world: Vector3 ) {#method-add-point-at}

A click on the ground with the tool on: adds what the tool adds there. False when nothing was added

### bool pick_target( unique_id: int, target_name: String ) {#method-pick-target}

A click on an NPC or an object with Pick target on: it becomes the target of the chosen task

### void remove_last_point() {#method-remove-last-point}

Takes the last point off the chosen patrol

### void add_schedule_made( schedule: TaskSchedule ) {#method-add-schedule-made}

A schedule made in the New Schedule window goes at the end of the script and is chosen

### void request_add_task() {#method-request-add-task}

The task window opens for the chosen schedule: the task that is made goes in it

### void add_task_made( task: BehaviorTask, schedule_index: int ) {#method-add-task-made}

A task made in the task window goes at the end of its schedule and is chosen

### void delete_entry( entry: Dictionary ) {#method-delete-entry}

Takes a row of the list off the script ("kind": schedule, task or condition)

### void move_entry( entry: Dictionary, delta: int ) {#method-move-entry}

Moves a schedule or a task of the list up (-1) or down (+1)

### void finish_edit( action_name: String, before: Dictionary ) {#method-finish-edit}

A window changed the script: it is saved, the list and the viewport show it, and it is one step of Undo (`before` is what BehaviorEditing.capture found before)

### void apply_state( state: Dictionary, save: bool = true ) {#method-apply-state}

Puts the script back as a state of BehaviorEditing.capture (Undo and Redo, and a cancelled drag)

### bool build_menu( entry: Dictionary ) {#method-build-menu}

Fills the menu for a kind of row. False when the row has no menu (the reactions, the fallback)

### void edit_entry( entry: Dictionary ) {#method-edit-entry}

The window that edits a row opens (the schedule window, the task window or the condition window); what it changes is one step of Undo

### void request_add_condition( entry: Dictionary ) {#method-request-add-condition}

The condition window opens to add a condition to a schedule (activation) or a task (execution)

### void add_condition_made( condition: EntityCondition, schedule_index: int, task_index: int ) {#method-add-condition-made}

A condition made in the condition window goes to a schedule (task_index -1) or to one of its tasks

