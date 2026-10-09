<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# CameraController

**Inherits:** [Node3D](https://docs.godotengine.org/en/stable/classes/class_node3d.html)

## Variables

| | | |
|---|---|---|
| `bool` | [camera_can_process](#var-camera-can-process) | `false` |
| `CameraLogic` | [current_camera_logic](#var-current-camera-logic) |  |
| `Node3D` | [camera_socket](#var-camera-socket) |  |
| `Camera3D` | [camera](#var-camera) |  |
| `RemoteTransform3D` | [minimap_transform](#var-minimap-transform) |  |
| `DirectionalLight3D` | [mini_map_light](#var-mini-map-light) |  |
| `RemoteTransform3D` | [weather_transform](#var-weather-transform) |  |

## Methods

| | |
|---|---|
| `void` | [legacy_input](#method-legacy-input)( `event: InputEvent` ) |
| `void` | [set_camera_position](#method-set-camera-position)( `target: Variant, use_pan: bool = true` ) |
| `float` | [get_view_yaw](#method-get-view-yaw)() |
| `void` | [camera_process_off](#method-camera-process-off)() |
| `void` | [camera_process_on](#method-camera-process-on)() |
| `RemoteTransform3D` | [get_remote_transform](#method-get-remote-transform)() |
| `void` | [set_minimap_remote_path](#method-set-minimap-remote-path)( `path: NodePath` ) |
| `void` | [map_zoom](#method-map-zoom)( `direction: int` ) |
| `RemoteTransform3D` | [get_weather_transform](#method-get-weather-transform)() |
| `void` | [set_weather_remote_path](#method-set-weather-remote-path)( `path: NodePath` ) |

## Variable descriptions

### bool camera_can_process = false {#var-camera-can-process}

*No description yet.*

### CameraLogic current_camera_logic {#var-current-camera-logic}

*No description yet.*

### Node3D camera_socket {#var-camera-socket}

*No description yet.*

### Camera3D camera {#var-camera}

*No description yet.*

### RemoteTransform3D minimap_transform {#var-minimap-transform}

*No description yet.*

### DirectionalLight3D mini_map_light {#var-mini-map-light}

*No description yet.*

### RemoteTransform3D weather_transform {#var-weather-transform}

*No description yet.*

## Method descriptions

### void legacy_input( event: InputEvent ) {#method-legacy-input}

Raw input for camera logics that have NOT been migrated to the InputManager contract (uses_input_manager() == false). Called by InputManager: presses/motion after the GUI, releases before it. Migrated logics get semantic look/zoom calls instead.

### void set_camera_position( target: Variant, use_pan: bool = true ) {#method-set-camera-position}

*No description yet.*

### float get_view_yaw() {#method-get-view-yaw}

The yaw the camera is facing (radians, Node3D.rotation.y convention). Read-only.

### void camera_process_off() {#method-camera-process-off}

*No description yet.*

### void camera_process_on() {#method-camera-process-on}

*No description yet.*

### RemoteTransform3D get_remote_transform() {#method-get-remote-transform}

*No description yet.*

### void set_minimap_remote_path( path: NodePath ) {#method-set-minimap-remote-path}

*No description yet.*

### void map_zoom( direction: int ) {#method-map-zoom}

*No description yet.*

### RemoteTransform3D get_weather_transform() {#method-get-weather-transform}

*No description yet.*

### void set_weather_remote_path( path: NodePath ) {#method-set-weather-remote-path}

*No description yet.*

