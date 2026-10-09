<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# WeatherSystem

**Inherits:** [Node](https://docs.godotengine.org/en/stable/classes/class_node.html)

Deals with weather application logic

## Variables

| | | |
|---|---|---|
| `VFXWeather` | [current_weather](#var-current-weather) | `null` |
| `WorldData:` | [world_data](#var-world-data) |  |
| `GameHost.SystemHub` | [system_hub](#var-system-hub) |  |
| `VFXManager:` | [vfx_manager](#var-vfx-manager) |  |

## Methods

| | |
|---|---|
| `void` | [start_world_weather](#method-start-world-weather)( `camera_controller: CameraController` ) |
| `VFXSelectionWeather` | [get_current_selection](#method-get-current-selection)() |
| `void` | [set_weather](#method-set-weather)( `selection: VFXSelectionWeather, camera_controller: CameraController` ) |
| `void` | [stop_world_weather](#method-stop-world-weather)() |
| `void` | [transition_to_weather](#method-transition-to-weather)( `new_weather_selection: VFXSelectionWeather, camera_controller: CameraController, transition_duration: float = 5.0` ) |
| `void` | [set_wind_direction](#method-set-wind-direction)( `direction: Vector3, smooth_transition: bool = true, duration: float = 2.0` ) |
| `void` | [set_wind_intensity](#method-set-wind-intensity)( `intensity: float, smooth_transition: bool = true, duration: float = 2.0` ) |
| `bool` | [has_active_weather](#method-has-active-weather)() |
| `Dictionary` | [get_weather_data](#method-get-weather-data)() |
| `void` | [restore_weather_data](#method-restore-weather-data)( `data: Dictionary, camera_controller: CameraController` ) |
| `Dictionary` | [to_save_data](#method-to-save-data)() |
| `void` | [from_save_data](#method-from-save-data)( `save_data: Dictionary` ) |

## Variable descriptions

### VFXWeather current_weather = null {#var-current-weather}

Current active weather VFX

### WorldData: world_data {#var-world-data}

The current worlds data (a new world starts with its own default weather again)

### GameHost.SystemHub system_hub {#var-system-hub}

The systems of the game (the VFX manager is made after this system, so it is asked for when needed)

### VFXManager: vfx_manager {#var-vfx-manager}

*No description yet.*

## Method descriptions

### void start_world_weather( camera_controller: CameraController ) {#method-start-world-weather}

Start weather for this map (typically called when map loads)

### VFXSelectionWeather get_current_selection() {#method-get-current-selection}

The weather that is wanted now: the one an event chose, else the default one of the world

### void set_weather( selection: VFXSelectionWeather, camera_controller: CameraController ) {#method-set-weather}

Change the weather at once

### void stop_world_weather() {#method-stop-world-weather}

Stop current weather

### void transition_to_weather( new_weather_selection: VFXSelectionWeather, camera_controller: CameraController, transition_duration: float = 5.0 ) {#method-transition-to-weather}

Change weather with smooth transition

### void set_wind_direction( direction: Vector3, smooth_transition: bool = true, duration: float = 2.0 ) {#method-set-wind-direction}

Update wind properties dynamically

### void set_wind_intensity( intensity: float, smooth_transition: bool = true, duration: float = 2.0 ) {#method-set-wind-intensity}

Update wind intensity dynamically

### bool has_active_weather() {#method-has-active-weather}

Check if weather is currently active

### Dictionary get_weather_data() {#method-get-weather-data}

Get current weather data (useful for save/load)

### void restore_weather_data( data: Dictionary, camera_controller: CameraController ) {#method-restore-weather-data}

Restore weather from saved data

### Dictionary to_save_data() {#method-to-save-data}

Save weather state (minimal - weather resets on world entry)

### void from_save_data( save_data: Dictionary ) {#method-from-save-data}

Load weather state (minimal - weather resets on world entry)

