<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ThirdPersonCameraLogic

**Inherits:** [CameraLogic](/advanced/game-settings/camera-and-controller/camera-logic) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Unified third-person camera with configurable orbit and follow behavior. Input arrives from the InputManager (uses_input_manager() == true); this logic never polls mouse buttons and never touches Input.mouse_mode.

## Description

Authority: the CONTROLLER owns the body's facing, this camera owns yaw/pitch of the view. The camera yaw is absolute (it does not ride the body), which is what makes both control schemes work. The scheme is chosen by the controller (ControllerLogic.get_movement_basis):

CHARACTER basis (W = the way the character faces):

- Right-drag (CHARACTER_LOOK): the controller turns the body; the camera applies pitch only and

locks its yaw to the body's facing. The camera never writes the body's rotation.

- Left-drag (FREE_LOOK): manual orbit that leaves the body alone (optional, disables the

follow until the player moves)

- Auto-follow: the camera swings back behind the body while the player walks (optional)

CAMERA basis (W = the way the camera faces):

- Right-drag and left-drag both orbit the camera (FREE_LOOK); the body turns to face the way it

moves, so the camera must NOT follow the body while walking (it never does in this basis)

Look speed: the player's mouse sensitivity setting x look_sensitivity_scale (see CameraLogic)

## Properties

| | | |
|---|---|---|
| `float` | [vertical_angle_min](#prop-vertical-angle-min) | `-80.0` |
| `float` | [vertical_angle_max](#prop-vertical-angle-max) | `80.0` |
| `bool` | [allow_manual_orbit](#prop-allow-manual-orbit) | `true` |
| `bool` | [enable_auto_follow_on_movement](#prop-enable-auto-follow-on-movement) | `true` |
| `float` | [follow_direction_speed](#prop-follow-direction-speed) | `5.0` |
| `bool` | [collision_enabled](#prop-collision-enabled) | `true` |
| `CollisionLayerUtility.CollisionLayer` | [collision_layer](#prop-collision-layer) | `CollisionLayerUtility.CollisionLayer.CAMERA_DETECTION` |
| `float` | [camera_radius](#prop-camera-radius) | `0.3` |
| `float` | [collision_smoothing](#prop-collision-smoothing) | `10.0` |

## Variables

| | | |
|---|---|---|
| `Node3D` | [target](#var-target) |  |
| `float` | [horizontal_angle](#var-horizontal-angle) | `0.0` |
| `float` | [vertical_angle](#var-vertical-angle) | `0.0` |
| `bool` | [is_character_look_active](#var-is-character-look-active) | `false` |
| `bool` | [is_free_look_active](#var-is-free-look-active) | `false` |
| `float` | [target_camera_z](#var-target-camera-z) | `3.5` |
| `bool` | [is_follow_enabled](#var-is-follow-enabled) | `true` |
| `bool` | [is_aligning_to_body](#var-is-aligning-to-body) | `false` |
| `RayCast3D` | [camera_raycast](#var-camera-raycast) | `null` |

## Methods

| | |
|---|---|
| `void` | [setup](#method-setup)( `cm: CameraController` ) |
| `void` | [process_camera](#method-process-camera)( `delta: float` ) |
| `bool` | [uses_input_manager](#method-uses-input-manager)() |
| `Array[LookBinding]` | [get_look_bindings](#method-get-look-bindings)() |
| `void` | [on_look_state](#method-on-look-state)( `kind: LookBinding.Kind, active: bool` ) |
| `void` | [handle_look](#method-handle-look)( `kind: LookBinding.Kind, delta_rad: Vector2` ) |
| `void` | [handle_zoom](#method-handle-zoom)( `steps: int` ) |
| `void` | [set_target](#method-set-target)( `new_target: Variant, use_pan: bool = true` ) |
| `void` | [cleanup](#method-cleanup)() |
| `float` | [get_view_yaw](#method-get-view-yaw)() |
| `String` | [get_type_display_name](#method-get-type-display-name)() |
| `Array[String]` | [validate](#method-validate)() |
| `bool` | [is_camera_being_controlled](#method-is-camera-being-controlled)() |

## Constants

- `float` **EVENT_PAN_SECONDS** = `1.0` - Seconds a pan to an event position (set_target with a Vector3) takes

## Property descriptions

*Third Person Rotation*

### float vertical_angle_min = -80.0 {#prop-vertical-angle-min}

Minimum vertical angle

### float vertical_angle_max = 80.0 {#prop-vertical-angle-max}

Maximum vertical angle

*Orbit Behavior*

### bool allow_manual_orbit = true {#prop-allow-manual-orbit}

Allow left mouse drag for manual camera orbit (drag distance before it starts: GameplayConfig.look_drag_threshold)

### bool enable_auto_follow_on_movement = true {#prop-enable-auto-follow-on-movement}

Enable auto-follow when player moves (character-relative movement only)

*Follow Behavior*

### float follow_direction_speed = 5.0 {#prop-follow-direction-speed}

Speed at which camera follows player direction

*Collision Detection*

### bool collision_enabled = true {#prop-collision-enabled}

Enable collision detection

### CollisionLayerUtility.CollisionLayer collision_layer = CollisionLayerUtility.CollisionLayer.CAMERA_DETECTION {#prop-collision-layer}

Collision layer to check

### float camera_radius = 0.3 {#prop-camera-radius}

Buffer distance from collision

### float collision_smoothing = 10.0 {#prop-collision-smoothing}

Collision smoothing speed

## Variable descriptions

### Node3D target {#var-target}

*No description yet.*

### float horizontal_angle = 0.0 {#var-horizontal-angle}

Camera yaw in degrees (absolute, same convention as Node3D.rotation_degrees.y)

### float vertical_angle = 0.0 {#var-vertical-angle}

Camera pitch in degrees (+ = looking up)

### bool is_character_look_active = false {#var-is-character-look-active}

RMB mouse-look is active (set from InputManager via on_look_state)

### bool is_free_look_active = false {#var-is-free-look-active}

A free-look orbit is active (set from InputManager via on_look_state)

### float target_camera_z = 3.5 {#var-target-camera-z}

*No description yet.*

### bool is_follow_enabled = true {#var-is-follow-enabled}

*No description yet.*

### bool is_aligning_to_body = false {#var-is-aligning-to-body}

True from mouse-look start until the camera has eased back to the player's facing (after a free orbit)

### RayCast3D camera_raycast = null {#var-camera-raycast}

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

### void on_look_state( kind: LookBinding.Kind, active: bool ) {#method-on-look-state}

A gesture this camera declared started (active = true) or ended (active = false) *(from [CameraLogic](/advanced/game-settings/camera-and-controller/camera-logic))*

### void handle_look( kind: LookBinding.Kind, delta_rad: Vector2 ) {#method-handle-look}

Look movement for a gesture this camera declared. delta_rad is screen-space radians with the player's sensitivity and invert settings applied (x &gt; 0 = mouse right, y &gt; 0 = mouse down). Multiply by look_sensitivity_scale. *(from [CameraLogic](/advanced/game-settings/camera-and-controller/camera-logic))*

### void handle_zoom( steps: int ) {#method-handle-zoom}

Mouse wheel notches. &gt; 0 = zoom in, &lt; 0 = zoom out *(from [CameraLogic](/advanced/game-settings/camera-and-controller/camera-logic))*

### void set_target( new_target: Variant, use_pan: bool = true ) {#method-set-target}

Set camera target - override in child classes *(from [CameraLogic](/advanced/game-settings/camera-and-controller/camera-logic))*

### void cleanup() {#method-cleanup}

Cleanup when switching cameras - override in child classes *(from [CameraLogic](/advanced/game-settings/camera-and-controller/camera-logic))*

### float get_view_yaw() {#method-get-view-yaw}

The camera's own yaw (not derived from the node, so it is exact right after input)

### String get_type_display_name() {#method-get-type-display-name}

Get display name for editor *(from [CameraLogic](/advanced/game-settings/camera-and-controller/camera-logic))*

### Array[String] validate() {#method-validate}

Validate settings - return errors array *(from [CameraLogic](/advanced/game-settings/camera-and-controller/camera-logic))*

### bool is_camera_being_controlled() {#method-is-camera-being-controlled}

*No description yet.*

