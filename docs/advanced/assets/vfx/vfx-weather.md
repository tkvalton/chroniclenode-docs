<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# VFXWeather

**Inherits:** [VFXLoop](/advanced/assets/vfx/vfx-loop) < [VFX](/advanced/assets/vfx/vfx) < [Node3D](https://docs.godotengine.org/en/stable/classes/class_node3d.html)

Weather VFX - Continuous environmental effects like rain, snow, fog Supports shader global control for wind direction and intensity Designed to be attached to the camera for consistent visibility

## Variables

| | | |
|---|---|---|
| `Vector3` | [wind_direction](#var-wind-direction) | `Vector3.ZERO : set = set_wind_direction` |
| `float` | [wind_intensity](#var-wind-intensity) | `0.0 : set = set_wind_intensity` |
| `bool` | [has_set_shader_globals](#var-has-set-shader-globals) | `false` |

## Methods

| | |
|---|---|
| `void` | [activate_vfx](#method-activate-vfx)( `selection: VFXSelection = null` ) |
| `void` | [deactivate_vfx](#method-deactivate-vfx)() |
| `void` | [set_wind_direction](#method-set-wind-direction)( `new_direction: Vector3` ) |
| `void` | [set_wind_intensity](#method-set-wind-intensity)( `new_intensity: float` ) |
| `void` | [transition_wind_direction](#method-transition-wind-direction)( `new_direction: Vector3, duration: float = 2.0` ) |
| `void` | [transition_wind_intensity](#method-transition-wind-intensity)( `new_intensity: float, duration: float = 2.0` ) |
| `void` | [transition_wind](#method-transition-wind)( `new_direction: Vector3, new_intensity: float, duration: float = 2.0` ) |
| `void` | [attach_to_camera](#method-attach-to-camera)( `camera_controller: CameraController` ) |
| `bool` | [is_attached_to_camera](#method-is-attached-to-camera)() |
| `CameraController` | [get_attached_camera](#method-get-attached-camera)() |
| `Dictionary` | [get_wind_data](#method-get-wind-data)() |
| `void` | [set_wind_data](#method-set-wind-data)( `data: Dictionary` ) |

## Variable descriptions

### Vector3 wind_direction = Vector3.ZERO : set = set_wind_direction {#var-wind-direction}

Wind direction (Vector3 normalized direction vector)

### float wind_intensity = 0.0 : set = set_wind_intensity {#var-wind-intensity}

Wind intensity (float 0.0 to 1.0)

### bool has_set_shader_globals = false {#var-has-set-shader-globals}

*No description yet.*

## Method descriptions

### void activate_vfx( selection: VFXSelection = null ) {#method-activate-vfx}

Weather VFX should NOT auto-cleanup (manual control for persistent weather)

### void deactivate_vfx() {#method-deactivate-vfx}

Override deactivation to clean up shader globals

### void set_wind_direction( new_direction: Vector3 ) {#method-set-wind-direction}

Set wind direction and update shader global

### void set_wind_intensity( new_intensity: float ) {#method-set-wind-intensity}

Set wind intensity and update shader global

### void transition_wind_direction( new_direction: Vector3, duration: float = 2.0 ) {#method-transition-wind-direction}

Smoothly transition to new wind direction over time

### void transition_wind_intensity( new_intensity: float, duration: float = 2.0 ) {#method-transition-wind-intensity}

Smoothly transition to new wind intensity over time

### void transition_wind( new_direction: Vector3, new_intensity: float, duration: float = 2.0 ) {#method-transition-wind}

Transition both wind properties simultaneously

### void attach_to_camera( camera_controller: CameraController ) {#method-attach-to-camera}

Attach weather VFX to camera via RemoteTransform3D

### bool is_attached_to_camera() {#method-is-attached-to-camera}

Check if weather is attached to camera

### CameraController get_attached_camera() {#method-get-attached-camera}

Get the camera controller this weather is attached to

### Dictionary get_wind_data() {#method-get-wind-data}

Get current wind data as dictionary (useful for saving/loading)

### void set_wind_data( data: Dictionary ) {#method-set-wind-data}

Set wind data from dictionary (useful for saving/loading)

