<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# TopdownFreeLogic

**Inherits:** [CameraLogic](/advanced/game-settings/camera-and-controller/camera-logic) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Top-down camera with WASD movement and target following This resource IS the runtime logic - no separate instance needed Save to: res://src/data/controller_logic/camera/ Input arrives from the InputManager (uses_input_manager() == true). WASD pans the camera only when the controller does not move the player with WASD; with a WASD controller the camera simply follows the player.

## Properties

| | | |
|---|---|---|
| `float` | [camera_move_speed](#prop-camera-move-speed) | `20.0` |
| `float` | [zoom_speed_damp](#prop-zoom-speed-damp) | `0.8` |
| `float` | [camera_x_at_min](#prop-camera-x-at-min) | `10.0` |
| `float` | [camera_x_at_max](#prop-camera-x-at-max) | `-20.0` |
| `float` | [socket_x_at_min](#prop-socket-x-at-min) | `-35.0` |
| `float` | [socket_x_at_max](#prop-socket-x-at-max) | `-75.0` |
| `float` | [pan_teleport_distance](#prop-pan-teleport-distance) | `90.0` |
| `Vector3` | [pan_teleport_offset](#prop-pan-teleport-offset) | `Vector3(0, 0, 9)` |
| `bool` | [enable_nameplate_scaling](#prop-enable-nameplate-scaling) | `true` |
| `float` | [nameplate_scale_min](#prop-nameplate-scale-min) | `0.6` |
| `float` | [nameplate_scale_max](#prop-nameplate-scale-max) | `1.2` |

## Variables

| | | |
|---|---|---|
| `Node3D` | [follow_target](#var-follow-target) |  |
| `bool` | [follow_cam_on](#var-follow-cam-on) | `true` |
| `Vector3` | [current_velocity](#var-current-velocity) | `Vector3.ZERO` |
| `float` | [camera_zoom_direction](#var-camera-zoom-direction) | `0` |
| `float` | [camera_x_rotation](#var-camera-x-rotation) | `0.0` |
| `Vector3` | [pan_target_position](#var-pan-target-position) | `Vector3.ZERO` |
| `bool` | [is_panning_to_position](#var-is-panning-to-position) | `false` |

## Methods

| | |
|---|---|
| `void` | [setup](#method-setup)( `cm: CameraController` ) |
| `void` | [process_camera](#method-process-camera)( `delta: float` ) |
| `bool` | [uses_input_manager](#method-uses-input-manager)() |
| `Array[LookBinding]` | [get_look_bindings](#method-get-look-bindings)() |
| `void` | [handle_look](#method-handle-look)( `kind: LookBinding.Kind, delta_rad: Vector2` ) |
| `void` | [handle_zoom](#method-handle-zoom)( `steps: int` ) |
| `void` | [set_target](#method-set-target)( `target: Variant, use_pan: bool = true` ) |
| `String` | [get_type_display_name](#method-get-type-display-name)() |
| `Array[String]` | [validate](#method-validate)() |

## Constants

- `float` **VIEW_ROTATE_FEEL** = `0.5` - View rotation relative to free look at the same mouse setting. Top-down rotation was always half the speed of a free orbit (0.1 vs 0.2 degrees per pixel at the default setting).

## Property descriptions

*Topdown Movement*

### float camera_move_speed = 20.0 {#prop-camera-move-speed}

WASD keyboard movement speed

*Zoom Behavior*

### float zoom_speed_damp = 0.8 {#prop-zoom-speed-damp}

Zoom speed damping

*Dynamic Camera Angles*

### float camera_x_at_min = 10.0 {#prop-camera-x-at-min}

Camera X rotation at min zoom

### float camera_x_at_max = -20.0 {#prop-camera-x-at-max}

Camera X rotation at max zoom

*Socket Rotation*

### float socket_x_at_min = -35.0 {#prop-socket-x-at-min}

*No description yet.*

### float socket_x_at_max = -75.0 {#prop-socket-x-at-max}

*No description yet.*

*Pan Behavior*

### float pan_teleport_distance = 90.0 {#prop-pan-teleport-distance}

*No description yet.*

### Vector3 pan_teleport_offset = Vector3(0, 0, 9) {#prop-pan-teleport-offset}

*No description yet.*

*UI Scaling*

### bool enable_nameplate_scaling = true {#prop-enable-nameplate-scaling}

*No description yet.*

### float nameplate_scale_min = 0.6 {#prop-nameplate-scale-min}

*No description yet.*

### float nameplate_scale_max = 1.2 {#prop-nameplate-scale-max}

*No description yet.*

## Variable descriptions

### Node3D follow_target {#var-follow-target}

*No description yet.*

### bool follow_cam_on = true {#var-follow-cam-on}

*No description yet.*

### Vector3 current_velocity = Vector3.ZERO {#var-current-velocity}

*No description yet.*

### float camera_zoom_direction = 0 {#var-camera-zoom-direction}

*No description yet.*

### float camera_x_rotation = 0.0 {#var-camera-x-rotation}

*No description yet.*

### Vector3 pan_target_position = Vector3.ZERO {#var-pan-target-position}

*No description yet.*

### bool is_panning_to_position = false {#var-is-panning-to-position}

*No description yet.*

## Method descriptions

### void setup( cm: CameraController ) {#method-setup}

Setup camera behavior - override in child classes *(from [CameraLogic](/advanced/game-settings/camera-and-controller/camera-logic))*

### void process_camera( delta: float ) {#method-process-camera}

Per-frame camera update - override in child classes *(from [CameraLogic](/advanced/game-settings/camera-and-controller/camera-logic))*

### bool uses_input_manager() {#method-uses-input-manager}

true = this camera receives look/zoom from the InputManager instead of raw events *(from [CameraLogic](/advanced/game-settings/camera-and-controller/camera-logic))*

### Array[LookBinding] get_look_bindings() {#method-get-look-bindings}

Mouse gestures this camera wants (button + LookBinding.Kind) *(from [CameraLogic](/advanced/game-settings/camera-and-controller/camera-logic))*

### void handle_look( kind: LookBinding.Kind, delta_rad: Vector2 ) {#method-handle-look}

Look movement for a gesture this camera declared. delta_rad is screen-space radians with the player's sensitivity and invert settings applied (x &gt; 0 = mouse right, y &gt; 0 = mouse down). Multiply by look_sensitivity_scale. *(from [CameraLogic](/advanced/game-settings/camera-and-controller/camera-logic))*

### void handle_zoom( steps: int ) {#method-handle-zoom}

Mouse wheel notches. &gt; 0 = zoom in, &lt; 0 = zoom out *(from [CameraLogic](/advanced/game-settings/camera-and-controller/camera-logic))*

### void set_target( target: Variant, use_pan: bool = true ) {#method-set-target}

Set camera target - override in child classes *(from [CameraLogic](/advanced/game-settings/camera-and-controller/camera-logic))*

### String get_type_display_name() {#method-get-type-display-name}

Get display name for editor *(from [CameraLogic](/advanced/game-settings/camera-and-controller/camera-logic))*

### Array[String] validate() {#method-validate}

Validate settings - return errors array *(from [CameraLogic](/advanced/game-settings/camera-and-controller/camera-logic))*

