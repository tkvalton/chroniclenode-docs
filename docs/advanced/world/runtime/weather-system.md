<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# WeatherSystem

**Inherits:** [Node](https://docs.godotengine.org/en/stable/classes/class_node.html)

Deals with weather application logic: which weather is wanted (an event's choice, else the world's), the particles that fall, the wind, the ground (TerrainWeatherDriver) and the sky, fog and light the weather is laid on (WorldSkyEnvironment.set_weather_look, see WeatherLook)

## Variables

| | | |
|---|---|---|
| `VFXWeather` | [current_weather](#var-current-weather) | `null` |
| `WorldData:` | [world_data](#var-world-data) |  |
| `TerrainWeatherDriver` | [ground](#var-ground) | `null` |
| `FoliageWindDriver` | [wind](#var-wind) | `null` |
| `GroundMarkManager` | [marks](#var-marks) | `null` |
| `GameHost.SystemHub` | [system_hub](#var-system-hub) |  |
| `VFXManager:` | [vfx_manager](#var-vfx-manager) |  |

## Methods

| | |
|---|---|
| `Dictionary` | [get_wind_state](#method-get-wind-state)() |
| `void` | [start_world_weather](#method-start-world-weather)( `camera_controller: CameraController` ) |
| `WeatherConfig` | [get_current_config](#method-get-current-config)() |
| `VFXSelectionWeather` | [get_current_selection](#method-get-current-selection)() |
| `void` | [set_weather](#method-set-weather)( `weather: Resource, camera_controller: CameraController` ) |
| `void` | [stop_world_weather](#method-stop-world-weather)() |
| `void` | [transition_to_weather](#method-transition-to-weather)( `new_weather: Resource, camera_controller: CameraController, transition_duration: float = 5.0` ) |
| `void` | [set_wind_direction](#method-set-wind-direction)( `direction: Vector3, smooth_transition: bool = true, duration: float = 2.0` ) |
| `void` | [set_wind_intensity](#method-set-wind-intensity)( `intensity: float, smooth_transition: bool = true, duration: float = 2.0` ) |
| `bool` | [has_active_weather](#method-has-active-weather)() |
| `Dictionary` | [get_weather_data](#method-get-weather-data)() |
| `void` | [restore_weather_data](#method-restore-weather-data)( `data: Dictionary, camera_controller: CameraController` ) |
| `Dictionary` | [to_save_data](#method-to-save-data)() |
| `void` | [from_save_data](#method-from-save-data)( `save_data: Dictionary` ) |

## Constants

- `float` **DEFAULT_FADE_SECONDS** = `10.0` - How many seconds a look takes to change when a weather does not say

## Variable descriptions

### VFXWeather current_weather = null {#var-current-weather}

Current active weather VFX

### WorldData: world_data {#var-world-data}

The current worlds data (a new world starts with its own default weather again)

### TerrainWeatherDriver ground = null {#var-ground}

What the weather does to the ground of the terrain (how wet it is, the snow, the tint of the world)

### FoliageWindDriver wind = null {#var-wind}

What moves in the world, for the plants: the wind and the bodies that push through grass (the plant shaders read them)

### GroundMarkManager marks = null {#var-marks}

The marks on the ground of the world: footprints, tracks, scorches (decals that fade out)

### GameHost.SystemHub system_hub {#var-system-hub}

The systems of the game (the VFX manager is made after this system, so it is asked for when needed)

### VFXManager: vfx_manager {#var-vfx-manager}

The manager of visual effects (from the hub).

## Method descriptions

### Dictionary get_wind_state() {#method-get-wind-state}

The wind that blows from the weather now: direction, strength (0 to 1) and how far it has taken over from the wind of the world (0 to 1)

### void start_world_weather( camera_controller: CameraController ) {#method-start-world-weather}

Start weather for this map (typically called when map loads)

### WeatherConfig get_current_config() {#method-get-current-config}

The weather that is wanted now: the one an event chose, else the default one of the world (null = clear)

### VFXSelectionWeather get_current_selection() {#method-get-current-selection}

The particles and the wind of the weather wanted now, as the spawner of the weather VFX takes them (null = clear)

### void set_weather( weather: Resource, camera_controller: CameraController ) {#method-set-weather}

Change the weather at once. The weather is a Weather config (or an old weather selection)

### void stop_world_weather() {#method-stop-world-weather}

Stop current weather

### void transition_to_weather( new_weather: Resource, camera_controller: CameraController, transition_duration: float = 5.0 ) {#method-transition-to-weather}

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

