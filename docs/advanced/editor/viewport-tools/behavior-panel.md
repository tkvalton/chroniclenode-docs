<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# BehaviorPanel

**Inherits:** [VBoxContainer](https://docs.godotengine.org/en/stable/classes/class_vboxcontainer.html)

The Behaviour tab: what the NPC selected in the 3D viewport does. It shows the behaviour script of the NPC and where it comes from (its definition or its own), the day as a strip of 24 hours, the schedules with their tasks (a colour per schedule, the same as the lines in the viewport), the reactions and the fallback, and who else uses the script. Choosing a schedule or a task in the list makes it bright in the viewport (BehaviorGizmoPlugin asks this panel what to draw). Read only in this build: the script is edited in the Behaviour Scripts editor (Open script).

## Variables

| | | |
|---|---|---|
| `EditorPlugin` | [plugin](#var-plugin) | `null` |
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
| `Dictionary` | [tool_buttons](#var-tool-buttons) | `{}` |
| `Button` | [remove_point_button](#var-remove-point-button) |  |
| `CheckBox` | [relative_check](#var-relative-check) |  |
| `Label` | [status_label](#var-status-label) |  |

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
| `bool` | [add_point_at](#method-add-point-at)( `world: Vector3` ) |
| `BehaviorTask` | [chosen_task](#method-chosen-task)() |
| `void` | [remove_last_point](#method-remove-last-point)() |
| `void` | [finish_edit](#method-finish-edit)( `action_name: String, before: Dictionary` ) |
| `void` | [apply_state](#method-apply-state)( `state: Dictionary, save: bool = true` ) |

## Signals

### draw_state_changed() {#signal-draw-state-changed}

The viewport has to draw again

## Variable descriptions

### EditorPlugin plugin = null {#var-plugin}

*No description yet.*

### EditorUndoRedoManager undo_redo = null {#var-undo-redo}

Where the editor's undo history is (set by the plugin; without it a change is made and saved but cannot be undone)

### BehaviorEditing.Mode tool_mode = BehaviorEditing.Mode.NONE {#var-tool-mode}

What a click on the ground adds (BehaviorEditing.Mode; BehaviorTool does the click)

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

### Dictionary tool_buttons =  {#var-tool-buttons}

BehaviorEditing.Mode -&gt; Button

### Button remove_point_button {#var-remove-point-button}

*No description yet.*

### CheckBox relative_check {#var-relative-check}

*No description yet.*

### Label status_label {#var-status-label}

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

Can the routes be changed? Only when the script is this NPC's own: a script of the definition is shared by every NPC that has it

### void set_tool( mode: BehaviorEditing.Mode ) {#method-set-tool}

What a click on the ground adds (NONE = nothing)

### void make_own() {#method-make-own}

Copies the script into a new record for this NPC alone (an empty one when it has no script) and gives it to the NPC. The record is a script of the database: it stays there when the NPC is deleted

### void use_definitions_script() {#method-use-definitions-script}

Follows the script of the definition again (the own script stays in the database)

### void set_override_id( data: UniqueEntityData, script_id: int ) {#method-set-override-id}

Sets the script the placed NPC follows instead of its definition's (0 = the definition's), saves it and shows it

### bool add_point_at( world: Vector3 ) {#method-add-point-at}

A click on the ground with the tool on: adds what the tool adds there. False when nothing was added

### BehaviorTask chosen_task() {#method-chosen-task}

The task chosen in the list (null when none)

### void remove_last_point() {#method-remove-last-point}

Takes the last point off the chosen patrol

### void finish_edit( action_name: String, before: Dictionary ) {#method-finish-edit}

A change was made to the script (`before` is what BehaviorEditing.capture found before it): it is saved, the list and the viewport show it, and it is one step of Undo

### void apply_state( state: Dictionary, save: bool = true ) {#method-apply-state}

Puts the script back as a state of BehaviorEditing.capture (Undo and Redo, and a cancelled drag)

