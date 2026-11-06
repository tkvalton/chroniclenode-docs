<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# LocalEventPanel

**Inherits:** [VBoxContainer](https://docs.godotengine.org/en/stable/classes/class_vboxcontainer.html)

The Local Events tab: the small events of the world you have open. Each rule is a **When** (what sets it off), an optional **If** and a **Then** (what it does), made from short menus of the common things ("A switch is turned on", "Open a door") and pointed at objects by clicking them in the 3D view. A rule is a node of the world scene (LocalEvent, in the LocalEvents container); the list shows every rule of the scene, a row for each cause, condition and effect with the name of what it points at. Everything is one step of Undo and marks the scene as changed. **More...** in every menu opens the full list of the event editor. See docs: Events &gt; Local events.

## Variables

| | | |
|---|---|---|
| `EditorPlugin` | [plugin](#var-plugin) | `null` |
| `DialogManager` | [dialog_manager](#var-dialog-manager) | `null` |
| `EditorUndoRedoManager` | [undo_redo](#var-undo-redo) | `null` |
| `Node` | [world_scene](#var-world-scene) | `null` |
| `LocalEvent` | [current_rule](#var-current-rule) | `null` |
| `int` | [current_side](#var-current-side) | `-1` |
| `int` | [current_index](#var-current-index) | `-1` |
| `bool` | [show_all_wires](#var-show-all-wires) | `false` |
| `Resource` | [pick_unit](#var-pick-unit) | `null` |
| `LocalEvent` | [pick_rule](#var-pick-rule) | `null` |
| `Label` | [title_label](#var-title-label) |  |
| `Label` | [status_label](#var-status-label) |  |
| `Tree` | [tree](#var-tree) |  |
| `RichTextLabel` | [details](#var-details) |  |
| `LineEdit` | [name_input](#var-name-input) |  |
| `CheckBox` | [enabled_check](#var-enabled-check) |  |
| `CheckBox` | [once_check](#var-once-check) |  |
| `CheckBox` | [wires_check](#var-wires-check) |  |
| `MenuButton` | [new_button](#var-new-button) |  |
| `Button` | [duplicate_button](#var-duplicate-button) |  |
| `Button` | [delete_button](#var-delete-button) |  |
| `Dictionary` | [add_buttons](#var-add-buttons) | `{}` |
| `Button` | [edit_button](#var-edit-button) |  |
| `Button` | [pick_button](#var-pick-button) |  |
| `Button` | [remove_button](#var-remove-button) |  |
| `Button` | [up_button](#var-up-button) |  |
| `Button` | [promote_button](#var-promote-button) |  |
| `ConfirmationDialog` | [promote_dialog](#var-promote-dialog) |  |
| `Dictionary` | [problems](#var-problems) | `{}` |
| `Button` | [down_button](#var-down-button) |  |
| `PopupMenu` | [context_menu](#var-context-menu) |  |
| `EventTypeManager` | [type_manager](#var-type-manager) | `null` |

## Methods

| | |
|---|---|
| `void` | [load_scene](#method-load-scene)( `root: Node` ) |
| `void` | [tick](#method-tick)() |
| `void` | [select_rule](#method-select-rule)( `rule: LocalEvent` ) |
| `void` | [refresh_list](#method-refresh-list)() |
| `String` | [rule_text](#method-rule-text)( `rule: LocalEvent` ) |
| `String` | [unit_text](#method-unit-text)( `unit: Resource` ) |
| `Resource` | [chosen_unit](#method-chosen-unit)() |
| `String` | [rule_details](#method-rule-details)( `rule: LocalEvent, unit: Resource` ) |
| `LocalEvent` | [new_rule](#method-new-rule)( `recipe: Dictionary = {}` ) |
| `void` | [duplicate_rule](#method-duplicate-rule)() |
| `void` | [delete_rule](#method-delete-rule)() |
| `void` | [finish_edit](#method-finish-edit)( `rule: LocalEvent, action_name: String, before: Dictionary` ) |
| `void` | [apply_state](#method-apply-state)( `rule: LocalEvent, state: Dictionary` ) |
| `void` | [rename_rule](#method-rename-rule)( `rule: LocalEvent, new_name: String` ) |
| `void` | [set_rule_enabled](#method-set-rule-enabled)( `rule: LocalEvent, on: bool` ) |
| `void` | [set_rule_run_once](#method-set-rule-run-once)( `rule: LocalEvent, on: bool` ) |
| `Resource` | [add_entry](#method-add-entry)( `side: int, entry: Dictionary` ) |
| `Resource` | [add_unit](#method-add-unit)( `side: int, unit: Resource` ) |
| `void` | [remove_row](#method-remove-row)( `rule: LocalEvent, side: int, index: int` ) |
| `void` | [move_row](#method-move-row)( `rule: LocalEvent, side: int, index: int, delta: int` ) |
| `void` | [edit_row](#method-edit-row)( `rule: LocalEvent, side: int, index: int` ) |
| `void` | [request_more](#method-request-more)( `side: int` ) |
| `void` | [start_pick](#method-start-pick)( `rule: LocalEvent, unit: Resource` ) |
| `void` | [stop_pick](#method-stop-pick)() |
| `bool` | [pick_target](#method-pick-target)( `candidate: Dictionary` ) |
| `bool` | [pick_place](#method-pick-place)( `place: Vector3` ) |
| `bool` | [build_menu](#method-build-menu)( `entry: Dictionary` ) |
| `Dictionary` | [get_draw_state](#method-get-draw-state)( `rule: LocalEvent` ) |
| `Array` | [problems_of](#method-problems-of)( `rule: LocalEvent, side: int, index: int` ) |
| `void` | [request_promote](#method-request-promote)() |
| `Event` | [promote_rule](#method-promote-rule)() |

## Signals

### draw_state_changed() {#signal-draw-state-changed}

The viewport has to draw again (the wires of the rules)

## Enumerations

### enum MenuID {#enum-menuid}

What the right click menu of a row does

- **EDIT** = `0`
- **PICK** = `1`
- **DELETE** = `2`
- **MOVE_UP** = `3`
- **MOVE_DOWN** = `4`
- **DUPLICATE** = `5`
- **RENAME** = `6`
- **ENABLE** = `7`

## Variable descriptions

### EditorPlugin plugin = null {#var-plugin}

*No description yet.*

### DialogManager dialog_manager = null {#var-dialog-manager}

*No description yet.*

### EditorUndoRedoManager undo_redo = null {#var-undo-redo}

*No description yet.*

### Node world_scene = null {#var-world-scene}

The world scene that is open (null when the open scene is not a world)

### LocalEvent current_rule = null {#var-current-rule}

The rule chosen in the list (null = none)

### int current_side = -1 {#var-current-side}

The row chosen inside the rule: its side (LocalEventPalette.Side, -1 = the rule itself) and its place

### int current_index = -1 {#var-current-index}

*No description yet.*

### bool show_all_wires = false {#var-show-all-wires}

*No description yet.*

### Resource pick_unit = null {#var-pick-unit}

The row that waits for a click in the viewport, and what it wants

### LocalEvent pick_rule = null {#var-pick-rule}

*No description yet.*

### Label title_label {#var-title-label}

*No description yet.*

### Label status_label {#var-status-label}

*No description yet.*

### Tree tree {#var-tree}

*No description yet.*

### RichTextLabel details {#var-details}

*No description yet.*

### LineEdit name_input {#var-name-input}

*No description yet.*

### CheckBox enabled_check {#var-enabled-check}

*No description yet.*

### CheckBox once_check {#var-once-check}

*No description yet.*

### CheckBox wires_check {#var-wires-check}

*No description yet.*

### MenuButton new_button {#var-new-button}

*No description yet.*

### Button duplicate_button {#var-duplicate-button}

*No description yet.*

### Button delete_button {#var-delete-button}

*No description yet.*

### Dictionary add_buttons =  {#var-add-buttons}

LocalEventPalette.Side -&gt; MenuButton

### Button edit_button {#var-edit-button}

*No description yet.*

### Button pick_button {#var-pick-button}

*No description yet.*

### Button remove_button {#var-remove-button}

*No description yet.*

### Button up_button {#var-up-button}

*No description yet.*

### Button promote_button {#var-promote-button}

*No description yet.*

### ConfirmationDialog promote_dialog {#var-promote-dialog}

*No description yet.*

### Dictionary problems =  {#var-problems}

The problems of every rule of the scene (LocalEventCheck.check_scene): local_id -&gt; [problems]

### Button down_button {#var-down-button}

*No description yet.*

### PopupMenu context_menu {#var-context-menu}

*No description yet.*

### EventTypeManager type_manager = null {#var-type-manager}

*No description yet.*

## Method descriptions

### void load_scene( root: Node ) {#method-load-scene}

The scene that is open: a world scene shows its rules, any other scene shows nothing

### void tick() {#method-tick}

Called now and then by the plugin: the open scene changed, or rules were added or removed outside the tab

### void select_rule( rule: LocalEvent ) {#method-select-rule}

The rule of the scene that is chosen in the editor's own selection (a rule picked in the 3D view is chosen in the tab)

### void refresh_list() {#method-refresh-list}

*No description yet.*

### String rule_text( rule: LocalEvent ) {#method-rule-text}

The line of a rule in the list

### String unit_text( unit: Resource ) {#method-unit-text}

The line of a row: what it is, and what it points at

### Resource chosen_unit() {#method-chosen-unit}

*No description yet.*

### String rule_details( rule: LocalEvent, unit: Resource ) {#method-rule-details}

The text of the details for a rule (and the row chosen in it)

### LocalEvent new_rule( recipe: Dictionary = &#123;&#125; ) {#method-new-rule}

Makes a rule (empty, or from a recipe of the palette) and chooses it. One step of Undo

### void duplicate_rule() {#method-duplicate-rule}

*No description yet.*

### void delete_rule() {#method-delete-rule}

*No description yet.*

### void finish_edit( rule: LocalEvent, action_name: String, before: Dictionary ) {#method-finish-edit}

A change to a rule: it is one step of Undo (`before` is what LocalEventEditing.capture found before), the list shows it and the scene is marked changed

### void apply_state( rule: LocalEvent, state: Dictionary ) {#method-apply-state}

Puts a rule back as a state of capture (Undo and Redo)

### void rename_rule( rule: LocalEvent, new_name: String ) {#method-rename-rule}

*No description yet.*

### void set_rule_enabled( rule: LocalEvent, on: bool ) {#method-set-rule-enabled}

*No description yet.*

### void set_rule_run_once( rule: LocalEvent, on: bool ) {#method-set-rule-run-once}

*No description yet.*

### Resource add_entry( side: int, entry: Dictionary ) {#method-add-entry}

Adds the row of a palette entry to the chosen rule

### Resource add_unit( side: int, unit: Resource ) {#method-add-unit}

*No description yet.*

### void remove_row( rule: LocalEvent, side: int, index: int ) {#method-remove-row}

*No description yet.*

### void move_row( rule: LocalEvent, side: int, index: int, delta: int ) {#method-move-row}

*No description yet.*

### void edit_row( rule: LocalEvent, side: int, index: int ) {#method-edit-row}

The window with every setting of a row (the same as the event editor's)

### void request_more( side: int ) {#method-request-more}

More...: the full list of triggers, conditions or actions of the event editor

### void start_pick( rule: LocalEvent, unit: Resource ) {#method-start-pick}

The row waits for a click on the thing it is about

### void stop_pick() {#method-stop-pick}

*No description yet.*

### bool pick_target( candidate: Dictionary ) {#method-pick-target}

The row is about a thing: its number is set (one step of Undo), and the rule moves to it when it is still where it was made

### bool pick_place( place: Vector3 ) {#method-pick-place}

A place of the ground was clicked for a row about a place

### bool build_menu( entry: Dictionary ) {#method-build-menu}

Fills the right click menu for a row (false when the row has none)

### Dictionary get_draw_state( rule: LocalEvent ) {#method-get-draw-state}

The answer to the gizmo: what to draw for a rule (empty = nothing)

### Array problems_of( rule: LocalEvent, side: int, index: int ) {#method-problems-of}

The problems of a rule (side -1: the rule itself) or of one of its rows

### void request_promote() {#method-request-promote}

Asks whether to make a global event of the chosen rule

### Event promote_rule() {#method-promote-rule}

Makes the global event and takes the rule out of the world

