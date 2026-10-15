<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# PointAndClickRTSLogic

**Inherits:** [ControllerLogic](/advanced/game-settings/camera-and-controller/controller-logic) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Point-and-click RTS-style controller Left-click: Select units (drag for group selection) Right-click: Issue commands (move, attack, interact) Shift: Add/remove from selection

## Properties

| | | |
|---|---|---|
| `bool` | [allow_drag_selection](#prop-allow-drag-selection) | `true` |
| `int` | [min_drag_distance_squared](#prop-min-drag-distance-squared) | `1` |
| `bool` | [shift_multi_select](#prop-shift-multi-select) | `true` |
| `ControllerLogic.SecondaryActionTrigger` | [secondary_action_trigger](#prop-secondary-action-trigger) | `ControllerLogic.SecondaryActionTrigger.PRESS` |
| `bool` | [allow_formation_movement](#prop-allow-formation-movement) | `true` |
| `FormationSystem.FormationType` | [default_formation](#prop-default-formation) | `FormationSystem.FormationType.LINE` |
| `bool` | [right_click_smart_command](#prop-right-click-smart-command) | `true` |
| `bool` | [smart_cast_abilities](#prop-smart-cast-abilities) | `true` |
| `bool` | [allow_mouse_interact](#prop-allow-mouse-interact) | `true` |
| `bool` | [allow_keyboard_interact](#prop-allow-keyboard-interact) | `true` |
| `bool` | [movement_cancels_cast](#prop-movement-cancels-cast) | `true` |
| `bool` | [auto_face_target_on_attack](#prop-auto-face-target-on-attack) | `true` |

## Variables

| | | |
|---|---|---|
| `Array[Entity]` | [selected_units](#var-selected-units) | `[]` |
| `FormationSystem` | [formation_system](#var-formation-system) |  |
| `bool` | [mouse_left_click](#var-mouse-left-click) | `false` |
| `Vector3` | [drag_start_position_3d](#var-drag-start-position-3d) |  |
| `Vector2` | [drag_start_position_2d](#var-drag-start-position-2d) |  |
| `Dictionary` | [pending_interaction_targets](#var-pending-interaction-targets) | `{}` |

## Methods

| | |
|---|---|
| `void` | [setup](#method-setup)( `pc: PlayerController` ) |
| `void` | [cleanup](#method-cleanup)() |
| `void` | [handle_input_event](#method-handle-input-event)( `event: InputEvent` ) |
| `void` | [process_input](#method-process-input)( `delta: float` ) |
| `Array[Entity]` | [get_selected_units](#method-get-selected-units)() |
| `Array[LookBinding]` | [get_look_bindings](#method-get-look-bindings)() |
| `void` | [on_click_completed](#method-on-click-completed)( `button_index: int, position: Vector2` ) |
| `Array[int]` | [get_exclusive_buttons](#method-get-exclusive-buttons)() |
| `Entity` | [get_current_player](#method-get-current-player)() |
| `void` | [select_single_player](#method-select-single-player)( `player: Entity` ) |
| `void` | [toggle_player_selection](#method-toggle-player-selection)( `player: Entity` ) |
| `String` | [get_type_display_name](#method-get-type-display-name)() |

## Property descriptions

*RTS Selection*

### bool allow_drag_selection = true {#prop-allow-drag-selection}

Enable drag-box selection

### int min_drag_distance_squared = 1 {#prop-min-drag-distance-squared}

Minimum drag distance squared to trigger drag selection

### bool shift_multi_select = true {#prop-shift-multi-select}

Allow Shift+click to add/remove from selection

*RTS Commands*

### ControllerLogic.SecondaryActionTrigger secondary_action_trigger = ControllerLogic.SecondaryActionTrigger.PRESS {#prop-secondary-action-trigger}

When the right-click command fires. RELEASE_WITHOUT_DRAG lets a camera that uses right-drag to look (e.g. third-person) tell "click to command" from "drag to look".

### bool allow_formation_movement = true {#prop-allow-formation-movement}

Enable formation movement for multiple units

### FormationSystem.FormationType default_formation = FormationSystem.FormationType.LINE {#prop-default-formation}

Default formation type for group movement

### bool right_click_smart_command = true {#prop-right-click-smart-command}

Right-click intelligently chooses action (attack/move/interact)

### bool smart_cast_abilities = true {#prop-smart-cast-abilities}

Smart cast abilities without entering targeting mode

*Interaction*

### bool allow_mouse_interact = true {#prop-allow-mouse-interact}

Allow mouse-click interactions

### bool allow_keyboard_interact = true {#prop-allow-keyboard-interact}

Allow keyboard (E/F) interactions

*Movement*

### bool movement_cancels_cast = true {#prop-movement-cancels-cast}

Moving a unit cancels active casts

### bool auto_face_target_on_attack = true {#prop-auto-face-target-on-attack}

Auto-face target when attacking

## Variable descriptions

### Array[Entity] selected_units = [] {#var-selected-units}

Runtime state (not exported)

### FormationSystem formation_system {#var-formation-system}

Places the selected units in a formation when they are sent somewhere.

### bool mouse_left_click = false {#var-mouse-left-click}

True while the left button is held.

### Vector3 drag_start_position_3d {#var-drag-start-position-3d}

Where in the world the drag selection started.

### Vector2 drag_start_position_2d {#var-drag-start-position-2d}

Where on the screen the drag selection started.

### Dictionary pending_interaction_targets =  {#var-pending-interaction-targets}

What each unit goes to interact with, by unit.

## Method descriptions

### void setup( pc: PlayerController ) {#method-setup}

Sets the logic up when it becomes the one in use.

### void cleanup() {#method-cleanup}

Lets go of what the logic holds when it is replaced.

### void handle_input_event( event: InputEvent ) {#method-handle-input-event}

Handles one input event (a click, a key).

### void process_input( delta: float ) {#method-process-input}

Handles the input of one frame.

### Array[Entity] get_selected_units() {#method-get-selected-units}

The entities the player has selected.

### Array[LookBinding] get_look_bindings() {#method-get-look-bindings}

With RELEASE_WITHOUT_DRAG: report a right-click only if the pointer was not dragged (a camera that uses right-drag to look then waits for the drag instead of starting at the press)

### void on_click_completed( button_index: int, position: Vector2 ) {#method-on-click-completed}

Called when a click ends (the button and the place on the screen).

### Array[int] get_exclusive_buttons() {#method-get-exclusive-buttons}

LMB press/drag/release is this controller's own drag-box selection, so no camera may also claim it for a look gesture (e.g. the third-person camera's left-drag orbit)

### Entity get_current_player() {#method-get-current-player}

The player the logic controls now.

### void select_single_player( player: Entity ) {#method-select-single-player}

Selects one player.

### void toggle_player_selection( player: Entity ) {#method-toggle-player-selection}

Adds the player to the selection, or takes it out.

### String get_type_display_name() {#method-get-type-display-name}

The name of the logic in the editor.

