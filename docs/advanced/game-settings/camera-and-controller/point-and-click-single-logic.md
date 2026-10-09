<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# PointAndClickSingleLogic

**Inherits:** [ControllerLogic](/advanced/game-settings/camera-and-controller/controller-logic) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Point-and-click single-character controller Left-click: Select entities/move Right-click: Issue commands Tab: Cycle through party members

## Description

UPDATED: Now uses direct process_interaction() calls instead of interact_with_target() This matches the WASD controller pattern for consistency

## Properties

| | | |
|---|---|---|
| `ControllerLogic.SecondaryActionTrigger` | [secondary_action_trigger](#prop-secondary-action-trigger) | `ControllerLogic.SecondaryActionTrigger.PRESS` |
| `bool` | [click_to_move](#prop-click-to-move) | `true` |
| `bool` | [hold_to_move](#prop-hold-to-move) | `false` |
| `bool` | [movement_cancels_cast](#prop-movement-cancels-cast) | `true` |
| `bool` | [auto_face_on_cast](#prop-auto-face-on-cast) | `true` |
| `bool` | [soft_targeting](#prop-soft-targeting) | `false` |
| `bool` | [allow_mouse_interact](#prop-allow-mouse-interact) | `true` |
| `bool` | [allow_keyboard_interact](#prop-allow-keyboard-interact) | `true` |
| `bool` | [auto_attack_on_target](#prop-auto-attack-on-target) | `false` |

## Variables

| | | |
|---|---|---|
| `Variant` | [pending_interaction_target](#var-pending-interaction-target) | `null` |

## Methods

| | |
|---|---|
| `void` | [setup](#method-setup)( `pc: PlayerController` ) |
| `void` | [cleanup](#method-cleanup)() |
| `void` | [handle_input_event](#method-handle-input-event)( `event: InputEvent` ) |
| `void` | [process_input](#method-process-input)( `delta: float` ) |
| `Player` | [get_current_player](#method-get-current-player)() |
| `Array[LookBinding]` | [get_look_bindings](#method-get-look-bindings)() |
| `void` | [on_click_completed](#method-on-click-completed)( `button_index: int, position: Vector2` ) |
| `Array[Entity]` | [get_selected_units](#method-get-selected-units)() |
| `void` | [select_single_player](#method-select-single-player)( `player: Entity` ) |
| `String` | [get_type_display_name](#method-get-type-display-name)() |

## Property descriptions

*Single Player Movement*

### ControllerLogic.SecondaryActionTrigger secondary_action_trigger = ControllerLogic.SecondaryActionTrigger.PRESS {#prop-secondary-action-trigger}

When the right-click command fires. RELEASE_WITHOUT_DRAG lets a camera that uses right-drag to look (e.g. third-person) tell "click to command" from "drag to look".

### bool click_to_move = true {#prop-click-to-move}

Click terrain to move there

### bool hold_to_move = false {#prop-hold-to-move}

Hold to continuous pathfind to cursor

### bool movement_cancels_cast = true {#prop-movement-cancels-cast}

Moving cancels active casts

*Single Player Targeting*

### bool auto_face_on_cast = true {#prop-auto-face-on-cast}

Face target when casting

### bool soft_targeting = false {#prop-soft-targeting}

Soft targeting (hover = target, doesn't lock)

*Interaction*

### bool allow_mouse_interact = true {#prop-allow-mouse-interact}

Allow mouse-click interactions

### bool allow_keyboard_interact = true {#prop-allow-keyboard-interact}

Allow keyboard (E/F) interactions

*Combat*

### bool auto_attack_on_target = false {#prop-auto-attack-on-target}

Auto-attack when target selected

## Variable descriptions

### Variant pending_interaction_target = null {#var-pending-interaction-target}

*No description yet.*

## Method descriptions

### void setup( pc: PlayerController ) {#method-setup}

Setup controller behavior - override in child classes *(from [ControllerLogic](/advanced/game-settings/camera-and-controller/controller-logic))*

### void cleanup() {#method-cleanup}

Cleanup when switching controllers - override in child classes *(from [ControllerLogic](/advanced/game-settings/camera-and-controller/controller-logic))*

### void handle_input_event( event: InputEvent ) {#method-handle-input-event}

Handle input events - override in child classes *(from [ControllerLogic](/advanced/game-settings/camera-and-controller/controller-logic))*

### void process_input( delta: float ) {#method-process-input}

Per-frame input processing - override in child classes *(from [ControllerLogic](/advanced/game-settings/camera-and-controller/controller-logic))*

### Player get_current_player() {#method-get-current-player}

Get the primary controlled player *(from [ControllerLogic](/advanced/game-settings/camera-and-controller/controller-logic))*

### Array[LookBinding] get_look_bindings() {#method-get-look-bindings}

With RELEASE_WITHOUT_DRAG: report a right-click only if the pointer was not dragged (a camera that uses right-drag to look then waits for the drag instead of starting at the press)

### void on_click_completed( button_index: int, position: Vector2 ) {#method-on-click-completed}

A look binding that requires a drag was released before it became a drag (a plain click) *(from [ControllerLogic](/advanced/game-settings/camera-and-controller/controller-logic))*

### Array[Entity] get_selected_units() {#method-get-selected-units}

Get currently selected units (RTS mode) *(from [ControllerLogic](/advanced/game-settings/camera-and-controller/controller-logic))*

### void select_single_player( player: Entity ) {#method-select-single-player}

Select a single player (called by UI/external systems) *(from [ControllerLogic](/advanced/game-settings/camera-and-controller/controller-logic))*

### String get_type_display_name() {#method-get-type-display-name}

Get display name for editor *(from [ControllerLogic](/advanced/game-settings/camera-and-controller/controller-logic))*

