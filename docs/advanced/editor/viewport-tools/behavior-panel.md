<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# BehaviorPanel

**Inherits:** [VBoxContainer](https://docs.godotengine.org/en/stable/classes/class_vboxcontainer.html)

The Behaviour tab: what the NPC selected in the 3D viewport does. It shows the behaviour script of the NPC and where it comes from (its definition or its own), the day as a strip of 24 hours, the schedules with their tasks (a colour per schedule, the same as the lines in the viewport), the reactions and the fallback, and who else uses the script. Choosing a schedule or a task in the list makes it bright in the viewport (BehaviorGizmoPlugin asks this panel what to draw). Read only in this build: the script is edited in the Behaviour Scripts editor (Open script).

## Variables

| | | |
|---|---|---|
| `EditorPlugin` | [plugin](#var-plugin) | `null` |
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

## Methods

| | |
|---|---|
| `Dictionary` | [get_draw_state](#method-get-draw-state)( `npc: NPC` ) |
| `void` | [load_npc](#method-load-npc)( `npc: NPC` ) |
| `void` | [clear](#method-clear)() |
| `void` | [reload](#method-reload)() |
| `void` | [tick](#method-tick)() |

## Signals

### draw_state_changed() {#signal-draw-state-changed}

The viewport has to draw again

## Variable descriptions

### EditorPlugin plugin = null {#var-plugin}

*No description yet.*

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

