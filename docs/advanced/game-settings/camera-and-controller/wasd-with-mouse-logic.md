<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# WASDWithMouseLogic

**Inherits:** [ControllerLogic](/advanced/game-settings/camera-and-controller/controller-logic) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

WASD movement with mouse for rotation and targeting WASD: Move character (relative to the character or to the camera: movement_basis) Right-drag: Rotate character (CHARACTER basis) / orbit the camera (CAMERA basis) Left-click: Select/target (left-drag orbits the camera) Right-click: Attack/interact

## Properties

| | | |
|---|---|---|
| `SecondaryActionTrigger` | [secondary_action_trigger](#prop-secondary-action-trigger) | `SecondaryActionTrigger.PRESS` |
| `bool` | [auto_face_overrides_mouse_look](#prop-auto-face-overrides-mouse-look) | `true` |
| `ControllerLogic.MovementBasis` | [movement_basis](#prop-movement-basis) | `ControllerLogic.MovementBasis.CHARACTER` |
| `bool` | [snap_body_to_camera_on_look](#prop-snap-body-to-camera-on-look) | `false` |
| `float` | [direction_stability_threshold](#prop-direction-stability-threshold) | `0.7` |
| `bool` | [allow_lock_on](#prop-allow-lock-on) | `true` |
| `bool` | [allow_lock_on_switch](#prop-allow-lock-on-switch) | `true` |
| `float` | [target_lock_rotation_speed](#prop-target-lock-rotation-speed) | `10.0` |
| `bool` | [auto_face_on_attack](#prop-auto-face-on-attack) | `true` |
| `bool` | [enable_keyboard_interact](#prop-enable-keyboard-interact) | `true` |
| `bool` | [fire_aimed_attack_with_primary](#prop-fire-aimed-attack-with-primary) | `true` |

## Variables

| | | |
|---|---|---|
| `Vector2` | [input_vector](#var-input-vector) | `Vector2.ZERO` |
| `Vector2` | [last_movement_direction](#var-last-movement-direction) | `Vector2.ZERO` |
| `Variant` | [pending_interaction_target](#var-pending-interaction-target) | `null` |

## Methods

| | |
|---|---|
| `void` | [setup](#method-setup)( `pc: PlayerController` ) |
| `void` | [cleanup](#method-cleanup)() |
| `void` | [handle_input_event](#method-handle-input-event)( `event: InputEvent` ) |
| `void` | [process_input](#method-process-input)( `delta: float` ) |
| `Player` | [get_current_player](#method-get-current-player)() |
| `Array[Entity]` | [get_selected_units](#method-get-selected-units)() |
| `bool` | [can_handle_direct_movement](#method-can-handle-direct-movement)() |
| `bool` | [can_handle_keyboard_interact](#method-can-handle-keyboard-interact)() |
| `void` | [select_single_player](#method-select-single-player)( `player: Entity` ) |
| `String` | [get_type_display_name](#method-get-type-display-name)() |
| `bool` | [handle_interact_input](#method-handle-interact-input)() |
| `bool` | [handle_esc_input](#method-handle-esc-input)() |
| `ControllerLogic.MovementBasis` | [get_movement_basis](#method-get-movement-basis)() |
| `Array[LookBinding]` | [get_look_bindings](#method-get-look-bindings)() |
| `void` | [handle_look](#method-handle-look)( `kind: LookBinding.Kind, delta_rad: Vector2` ) |
| `void` | [on_look_state](#method-on-look-state)( `kind: LookBinding.Kind, active: bool` ) |
| `void` | [on_click_completed](#method-on-click-completed)( `button_index: int, position: Vector2` ) |
| `void` | [process_target_lock](#method-process-target-lock)( `delta: float` ) |
| `void` | [on_target_lock_changed](#method-on-target-lock-changed)( `is_locked: bool, target: Variant` ) |

## Property descriptions

*WASD Movement*

### SecondaryActionTrigger secondary_action_trigger = SecondaryActionTrigger.PRESS {#prop-secondary-action-trigger}

When the right-click action fires. RELEASE_WITHOUT_DRAG separates "click to act" from "drag to look" (mouse-look then starts only after the pointer moves GameplayConfig.look_drag_threshold pixels).

### bool auto_face_overrides_mouse_look = true {#prop-auto-face-overrides-mouse-look}

What happens when an ability/effect asks the player to auto-face a target while right-mouse look is held. true = the auto-face turn wins (mouse turning pauses until it finishes; the original behaviour). false = mouse-look wins (auto-face requests are ignored while held, so the ability fires the way the player is facing).

### ControllerLogic.MovementBasis movement_basis = ControllerLogic.MovementBasis.CHARACTER {#prop-movement-basis}

What WASD is relative to. CHARACTER: W moves the way the character faces and right-drag turns the body (the camera locks behind it). CAMERA: W moves away from the camera; right- and left-drag orbit the camera; the body turns to face the way it moves (and faces a locked target).

### bool snap_body_to_camera_on_look = false {#prop-snap-body-to-camera-on-look}

CHARACTER basis only. When right-drag mouse-look starts while the camera has been orbited away from the body: true = the body snaps to where the camera is facing (the camera does not move); false = the camera eases back behind the body (the body does not move until you drag).

### float direction_stability_threshold = 0.7 {#prop-direction-stability-threshold}

Direction stability threshold (prevents animation flickering)

*WASD Targeting*

### bool allow_lock_on = true {#prop-allow-lock-on}

Lock-on targeting system

### bool allow_lock_on_switch = true {#prop-allow-lock-on-switch}

Switch targets while locked on

### float target_lock_rotation_speed = 10.0 {#prop-target-lock-rotation-speed}

Target lock rotation speed (radians per second)

*Combat*

### bool auto_face_on_attack = true {#prop-auto-face-on-attack}

Auto-face target when attacking

*Interaction*

### bool enable_keyboard_interact = true {#prop-enable-keyboard-interact}

Enable keyboard interaction (E key)

### bool fire_aimed_attack_with_primary = true {#prop-fire-aimed-attack-with-primary}

Hold the primary button while the mouse is captured (looking around) to fire the basic attack of an aimed weapon (a bow, a gun) at what the crosshair aims at; a basic attack that waits for the release (a drawn bow) is loosed when the button is let go. With a target locked on, the auto attack already fires at it.

## Variable descriptions

### Vector2 input_vector = Vector2.ZERO {#var-input-vector}

*No description yet.*

### Vector2 last_movement_direction = Vector2.ZERO {#var-last-movement-direction}

*No description yet.*

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

### Array[Entity] get_selected_units() {#method-get-selected-units}

Get currently selected units (RTS mode) *(from [ControllerLogic](/advanced/game-settings/camera-and-controller/controller-logic))*

### bool can_handle_direct_movement() {#method-can-handle-direct-movement}

Can this controller handle direct WASD movement? *(from [ControllerLogic](/advanced/game-settings/camera-and-controller/controller-logic))*

### bool can_handle_keyboard_interact() {#method-can-handle-keyboard-interact}

Can this controller handle keyboard-based interactions? *(from [ControllerLogic](/advanced/game-settings/camera-and-controller/controller-logic))*

### void select_single_player( player: Entity ) {#method-select-single-player}

Select a single player (called by UI/external systems) *(from [ControllerLogic](/advanced/game-settings/camera-and-controller/controller-logic))*

### String get_type_display_name() {#method-get-type-display-name}

Get display name for editor *(from [ControllerLogic](/advanced/game-settings/camera-and-controller/controller-logic))*

### bool handle_interact_input() {#method-handle-interact-input}

Handle keyboard interaction (E key) - uses Area3D detection from Player

### bool handle_esc_input() {#method-handle-esc-input}

Handle ESC key press with priority chain Returns true if the logic handled it, false to let controller handle it Priority chain (controller will handle these if logic returns false): 1. Cancel targeting mode 2. Clear target 3. Clear selection (multi-unit) *(from [ControllerLogic](/advanced/game-settings/camera-and-controller/controller-logic))*

### ControllerLogic.MovementBasis get_movement_basis() {#method-get-movement-basis}

What movement is relative to. The camera asks this: with CAMERA movement it must not follow the body while walking (the body follows the camera instead) and right-drag orbits the camera. *(from [ControllerLogic](/advanced/game-settings/camera-and-controller/controller-logic))*

### Array[LookBinding] get_look_bindings() {#method-get-look-bindings}

Mouse gestures this controller wants (button + LookBinding.Kind). Called when a gesture starts. *(from [ControllerLogic](/advanced/game-settings/camera-and-controller/controller-logic))*

### void handle_look( kind: LookBinding.Kind, delta_rad: Vector2 ) {#method-handle-look}

Look movement for a gesture this controller declared. delta_rad is screen-space radians with the player's sensitivity and invert settings applied (x &gt; 0 = mouse right, y &gt; 0 = mouse down). Multiply by look_sensitivity_scale. *(from [ControllerLogic](/advanced/game-settings/camera-and-controller/controller-logic))*

### void on_look_state( kind: LookBinding.Kind, active: bool ) {#method-on-look-state}

A gesture this controller declared started (active = true) or ended (active = false) *(from [ControllerLogic](/advanced/game-settings/camera-and-controller/controller-logic))*

### void on_click_completed( button_index: int, position: Vector2 ) {#method-on-click-completed}

A look binding that requires a drag was released before it became a drag (a plain click) *(from [ControllerLogic](/advanced/game-settings/camera-and-controller/controller-logic))*

### void process_target_lock( delta: float ) {#method-process-target-lock}

Process target lock - rotate character to face locked target

### void on_target_lock_changed( is_locked: bool, target: Variant ) {#method-on-target-lock-changed}

Called when target lock state changes

