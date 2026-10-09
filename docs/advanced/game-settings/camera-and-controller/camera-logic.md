<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# CameraLogic

**Inherits:** [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

**Inherited by:** [ThirdPersonCameraLogic](/advanced/game-settings/camera-and-controller/third-person-camera-logic), [TopdownFocusedLogic](/advanced/game-settings/camera-and-controller/topdown-focused-logic), [TopdownFreeLogic](/advanced/game-settings/camera-and-controller/topdown-free-logic)

Base camera logic resource - both configuration and runtime behavior Save instances to res://src/data/controller_logic/camera/

## Description

Child classes:

1. Add exported properties for configuration

2. Override setup/process_camera/handle_input for behavior

3. Override get_type_display_name() for editor display

## Properties

| | | |
|---|---|---|
| `String` | [preset_name](#prop-preset-name) | `"Unnamed Camera"` |
| `String` | [description](#prop-description) | `""` |
| `Vector3` | [initial_socket_position](#prop-initial-socket-position) | `Vector3.ZERO` |
| `Vector3` | [initial_socket_rotation_degrees](#prop-initial-socket-rotation-degrees) | `Vector3(-20.0, 0.0, 0.0)` |
| `Vector3` | [initial_camera_position](#prop-initial-camera-position) | `Vector3(0, 1.5, 3.5)` |
| `Vector3` | [initial_camera_rotation_degrees](#prop-initial-camera-rotation-degrees) | `Vector3(-7.0, 0.0, 0.0)` |
| `float` | [field_of_view](#prop-field-of-view) | `75.0` |
| `float` | [near_clip](#prop-near-clip) | `0.05` |
| `float` | [far_clip](#prop-far-clip) | `500.0` |
| `float` | [zoom_min](#prop-zoom-min) | `3.0` |
| `float` | [zoom_max](#prop-zoom-max) | `10.0` |
| `float` | [zoom_speed](#prop-zoom-speed) | `2.0` |
| `float` | [zoom_smoothing](#prop-zoom-smoothing) | `0.1` |
| `float` | [follow_speed](#prop-follow-speed) | `5.0` |
| `float` | [follow_smoothing](#prop-follow-smoothing) | `0.95` |
| `float` | [follow_distance_threshold](#prop-follow-distance-threshold) | `0.1` |
| `bool` | [enable_target_lock](#prop-enable-target-lock) | `true` |
| `float` | [target_lock_rotation_speed](#prop-target-lock-rotation-speed) | `8.0` |
| `float` | [target_lock_screen_offset](#prop-target-lock-screen-offset) | `0.1` |
| `float` | [look_sensitivity_scale](#prop-look-sensitivity-scale) | `1.0` |

## Variables

| | | |
|---|---|---|
| `GameHost.SystemHub` | [system_hub](#var-system-hub) |  |
| `CameraController` | [camera_manager](#var-camera-manager) |  |
| `bool` | [is_locked_to_target](#var-is-locked-to-target) | `false` |
| `Variant` | [locked_target](#var-locked-target) | `null` |

## Methods

| | |
|---|---|
| `void` | [initialize](#method-initialize)( `p_system_hub: GameHost.SystemHub` ) |
| `void` | [bind_lock_source](#method-bind-lock-source)( `player: Variant` ) |
| `void` | [unbind_lock_source](#method-unbind-lock-source)() |
| `void` | [apply_to_camera_manager](#method-apply-to-camera-manager)( `camera_manager: CameraController` ) |
| `void` | [setup](#method-setup)( `camera_manager: CameraController` ) |
| `void` | [process_camera](#method-process-camera)( `delta: float` ) |
| `void` | [handle_input](#method-handle-input)( `event: InputEvent` ) |
| `bool` | [uses_input_manager](#method-uses-input-manager)() |
| `Array[LookBinding]` | [get_look_bindings](#method-get-look-bindings)() |
| `void` | [handle_look](#method-handle-look)( `kind: LookBinding.Kind, delta_rad: Vector2` ) |
| `void` | [on_look_state](#method-on-look-state)( `kind: LookBinding.Kind, active: bool` ) |
| `void` | [handle_zoom](#method-handle-zoom)( `steps: int` ) |
| `void` | [set_target](#method-set-target)( `target: Variant, use_pan: bool = true` ) |
| `void` | [cleanup](#method-cleanup)() |
| `Vector3` | [get_camera_position](#method-get-camera-position)() |
| `Vector3` | [get_camera_rotation](#method-get-camera-rotation)() |
| `float` | [get_view_yaw](#method-get-view-yaw)() |
| `void` | [set_controller_for_validation](#method-set-controller-for-validation)( `controller_logic: ControllerLogic` ) |
| `String` | [get_type_display_name](#method-get-type-display-name)() |
| `String` | [get_editor_icon](#method-get-editor-icon)() |
| `Array[String]` | [validate](#method-validate)() |

## Property descriptions

### String preset_name = "Unnamed Camera" {#prop-preset-name}

Display name shown in editor dropdowns

### String description = "" {#prop-description}

Description of camera behavior

*Camera Socket*

### Vector3 initial_socket_position = Vector3.ZERO {#prop-initial-socket-position}

Initial position of camera socket (parent node that moves/rotates)

### Vector3 initial_socket_rotation_degrees = Vector3(-20.0, 0.0, 0.0) {#prop-initial-socket-rotation-degrees}

Initial rotation of camera socket in degrees

*Camera*

### Vector3 initial_camera_position = Vector3(0, 1.5, 3.5) {#prop-initial-camera-position}

Initial Camera3D position (relative to socket)

### Vector3 initial_camera_rotation_degrees = Vector3(-7.0, 0.0, 0.0) {#prop-initial-camera-rotation-degrees}

Initial Camera3D rotation in degrees

*Rendering*

### float field_of_view = 75.0 {#prop-field-of-view}

Field of view in degrees

### float near_clip = 0.05 {#prop-near-clip}

Near clipping plane

### float far_clip = 500.0 {#prop-far-clip}

Far clipping plane (view distance)

*Zoom*

### float zoom_min = 3.0 {#prop-zoom-min}

Minimum zoom distance

### float zoom_max = 10.0 {#prop-zoom-max}

Maximum zoom distance

### float zoom_speed = 2.0 {#prop-zoom-speed}

Zoom input speed

### float zoom_smoothing = 0.1 {#prop-zoom-smoothing}

Zoom smoothing (0=instant, 1=very smooth)

*Follow Behavior*

### float follow_speed = 5.0 {#prop-follow-speed}

Follow speed multiplier

### float follow_smoothing = 0.95 {#prop-follow-smoothing}

Follow smoothing (higher=smoother/slower)

### float follow_distance_threshold = 0.1 {#prop-follow-distance-threshold}

Distance threshold to stop following

*Target Lock*

### bool enable_target_lock = true {#prop-enable-target-lock}

Enable camera lock to player's locked target

### float target_lock_rotation_speed = 8.0 {#prop-target-lock-rotation-speed}

Speed at which camera rotates to target when locked

### float target_lock_screen_offset = 0.1 {#prop-target-lock-screen-offset}

Keep target this far from screen center (0 = center, 0.3 = offset)

*Input*

### float look_sensitivity_scale = 1.0 {#prop-look-sensitivity-scale}

How sensitive THIS preset feels, relative to the player's mouse sensitivity setting (SettingsConfig.mouse_x/y_axis_sensitivity). 1.0 = exactly the player's setting. Used by cameras that receive look input from the InputManager (uses_input_manager()).

## Variable descriptions

### GameHost.SystemHub system_hub {#var-system-hub}

System hub reference (set at runtime)

### CameraController camera_manager {#var-camera-manager}

*No description yet.*

### bool is_locked_to_target = false {#var-is-locked-to-target}

Target lock state

### Variant locked_target = null {#var-locked-target}

*No description yet.*

## Method descriptions

### void initialize( p_system_hub: GameHost.SystemHub ) {#method-initialize}

Initialize with system hub reference - called by CameraController

### void bind_lock_source( player: Variant ) {#method-bind-lock-source}

Follows a player's target lock. Call from set_target with the new target: it disconnects the previous player, connects the new one and picks up the lock state it already has.

### void unbind_lock_source() {#method-unbind-lock-source}

*No description yet.*

### void apply_to_camera_manager( camera_manager: CameraController ) {#method-apply-to-camera-manager}

Apply settings to CameraController nodes

### void setup( camera_manager: CameraController ) {#method-setup}

Setup camera behavior - override in child classes

### void process_camera( delta: float ) {#method-process-camera}

Per-frame camera update - override in child classes

### void handle_input( event: InputEvent ) {#method-handle-input}

DEPRECATED raw input path. All shipped camera presets use the InputManager contract below; this is only called for custom cameras whose uses_input_manager() is false, so they keep working. Delivered by InputManager (after the GUI for presses/motion, before it for releases).

### bool uses_input_manager() {#method-uses-input-manager}

true = this camera receives look/zoom from the InputManager instead of raw events

### Array[LookBinding] get_look_bindings() {#method-get-look-bindings}

Mouse gestures this camera wants (button + LookBinding.Kind)

### void handle_look( kind: LookBinding.Kind, delta_rad: Vector2 ) {#method-handle-look}

Look movement for a gesture this camera declared. delta_rad is screen-space radians with the player's sensitivity and invert settings applied (x &gt; 0 = mouse right, y &gt; 0 = mouse down). Multiply by look_sensitivity_scale.

### void on_look_state( kind: LookBinding.Kind, active: bool ) {#method-on-look-state}

A gesture this camera declared started (active = true) or ended (active = false)

### void handle_zoom( steps: int ) {#method-handle-zoom}

Mouse wheel notches. &gt; 0 = zoom in, &lt; 0 = zoom out

### void set_target( target: Variant, use_pan: bool = true ) {#method-set-target}

Set camera target - override in child classes

### void cleanup() {#method-cleanup}

Cleanup when switching cameras - override in child classes

### Vector3 get_camera_position() {#method-get-camera-position}

Get camera position - override in child classes

### Vector3 get_camera_rotation() {#method-get-camera-rotation}

Get camera rotation - override in child classes

### float get_view_yaw() {#method-get-view-yaw}

The yaw the view is facing, in radians, in the same convention as Node3D.rotation.y (forward = -Z rotated by yaw). Read-only for controllers: camera-relative movement and "snap the body to the camera" use it. Cameras with their own yaw state override this.

### void set_controller_for_validation( controller_logic: ControllerLogic ) {#method-set-controller-for-validation}

Editor / validation only: pretend this controller is the active one, so get_look_bindings() can be evaluated for a pairing without a running game. Pass null to clear.

### String get_type_display_name() {#method-get-type-display-name}

Get display name for editor

### String get_editor_icon() {#method-get-editor-icon}

Get icon for editor

### Array[String] validate() {#method-validate}

Validate settings - return errors array

