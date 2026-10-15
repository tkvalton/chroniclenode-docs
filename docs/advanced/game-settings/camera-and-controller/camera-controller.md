<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# CameraController

**Inherits:** [Node3D](https://docs.godotengine.org/en/stable/classes/class_node3d.html)

Moves the camera of the player: it holds the current camera logic, the camera socket and the camera, and a remote transform that follows the camera for the mini map and the weather. It sets the camera to a position (with or without a pan), gives the view yaw and zooms the map.

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

Camera state

### CameraLogic current_camera_logic {#var-current-camera-logic}

Camera logic

### Node3D camera_socket {#var-camera-socket}

Node references

### Camera3D camera {#var-camera}

The camera of the player.

### RemoteTransform3D minimap_transform {#var-minimap-transform}

The remote transform that moves the mini map camera with the player camera.

### DirectionalLight3D mini_map_light {#var-mini-map-light}

The light of the mini map.

### RemoteTransform3D weather_transform {#var-weather-transform}

The remote transform that moves the weather with the player camera.

## Method descriptions

### void legacy_input( event: InputEvent ) {#method-legacy-input}

Raw input for camera logics that have NOT been migrated to the InputManager contract (uses_input_manager() == false). Called by InputManager: presses/motion after the GUI, releases before it. Migrated logics get semantic look/zoom calls instead.

### void set_camera_position( target: Variant, use_pan: bool = true ) {#method-set-camera-position}

Public interface methods

### float get_view_yaw() {#method-get-view-yaw}

The yaw the camera is facing (radians, Node3D.rotation.y convention). Read-only.

### void camera_process_off() {#method-camera-process-off}

Stops the camera logic from running.

### void camera_process_on() {#method-camera-process-on}

Lets the camera logic run.

### RemoteTransform3D get_remote_transform() {#method-get-remote-transform}

Minimap functionality

### void set_minimap_remote_path( path: NodePath ) {#method-set-minimap-remote-path}

Sets the node the mini map camera follows.

### void map_zoom( direction: int ) {#method-map-zoom}

Zooms the mini map in or out.

### RemoteTransform3D get_weather_transform() {#method-get-weather-transform}

Weather functionality

### void set_weather_remote_path( path: NodePath ) {#method-set-weather-remote-path}

Sets the node the weather follows.

