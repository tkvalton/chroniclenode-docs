<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# WeatherSystem

**Inherits:** [Node](https://docs.godotengine.org/en/stable/classes/class_node.html)

Deals with weather application logic: which weather is wanted (an event's choice for the zone, an event's choice for the world, the weather or table of the zone the party is in, the weather or table of the world), the particles that fall, the wind, the ground (TerrainWeatherDriver) and the sky, fog and light the weather is laid on (WorldSkyEnvironment.set_weather_look, see WeatherLook)

## Variables

| | | |
|---|---|---|
| `VFXWeather` | [current_weather](#var-current-weather) | `null` |
| `WorldData:` | [world_data](#var-world-data) |  |
| `TerrainWeatherDriver` | [ground](#var-ground) | `null` |
| `FoliageWindDriver` | [wind](#var-wind) | `null` |
| `GroundMarkManager` | [marks](#var-marks) | `null` |
| `float` | [intensity_scale](#var-intensity-scale) | `1.0` |
| `float` | [shelter_amount](#var-shelter-amount) | `0.0` |
| `ShelterVolume` | [current_shelter](#var-current-shelter) | `null` |
| `WeatherExposure` | [exposure](#var-exposure) | `null` |
| `WeatherGround` | [ground_map](#var-ground-map) | `null` |
| `GameHost.SystemHub` | [system_hub](#var-system-hub) |  |
| `VFXManager:` | [vfx_manager](#var-vfx-manager) |  |

## Methods

| | |
|---|---|
| `void` | [tick](#method-tick)() |
| `void` | [track_shelter](#method-track-shelter)() |
| `void` | [set_shelter_amount](#method-set-shelter-amount)( `amount: float, seconds: float = 0.6` ) |
| `Dictionary` | [get_wind_state](#method-get-wind-state)() |
| `void` | [start_world_weather](#method-start-world-weather)( `camera_controller: CameraController, fade_seconds: float = 0.0` ) |
| `float` | [get_intensity](#method-get-intensity)() |
| `void` | [set_intensity](#method-set-intensity)( `scale: float, seconds: float = 3.0` ) |
| `WeatherConfig` | [get_current_config](#method-get-current-config)() |
| `VFXSelectionWeather` | [get_current_selection](#method-get-current-selection)() |
| `void` | [on_zone_changed](#method-on-zone-changed)( `_old_zone_id: int, _new_zone_id: int` ) |
| `void` | [refresh](#method-refresh)( `seconds: float = -1.0` ) |
| `bool` | [set_zone_weather](#method-set-zone-weather)( `weather: Resource, camera_controller: CameraController, seconds: float, scale: float = 1.0` ) |
| `void` | [release_weather](#method-release-weather)( `scope: int, seconds: float = 5.0` ) |
| `void` | [set_weather](#method-set-weather)( `weather: Resource, camera_controller: CameraController, scale: float = 1.0` ) |
| `void` | [stop_world_weather](#method-stop-world-weather)() |
| `void` | [transition_to_weather](#method-transition-to-weather)( `new_weather: Resource, camera_controller: CameraController, transition_duration: float = 5.0, scale: float = 1.0` ) |
| `void` | [set_wind_direction](#method-set-wind-direction)( `direction: Vector3, smooth_transition: bool = true, duration: float = 2.0` ) |
| `void` | [set_wind_intensity](#method-set-wind-intensity)( `intensity: float, smooth_transition: bool = true, duration: float = 2.0` ) |
| `bool` | [has_active_weather](#method-has-active-weather)() |
| `Dictionary` | [get_weather_data](#method-get-weather-data)() |
| `void` | [restore_weather_data](#method-restore-weather-data)( `data: Dictionary, camera_controller: CameraController` ) |
| `Dictionary` | [to_save_data](#method-to-save-data)() |
| `void` | [from_save_data](#method-from-save-data)( `save_data: Dictionary` ) |

## Signals

### shelter_changed( volume: ShelterVolume ) {#signal-shelter-changed}

The camera went into a shelter, or out of one (null = the open)

## Enumerations

### enum Scope {#enum-scope}

Which weather a release takes away: the weather an event set for the whole world, the weather it set for the current zone, or both (and every zone's)

- **WORLD** = `0`
- **CURRENT_ZONE** = `1`
- **ALL** = `2`

## Constants

- `float` **DEFAULT_FADE_SECONDS** = `10.0` - How many seconds a look takes to change when a weather does not say
- `int` **ENTRY_SNAP_MSEC** = `4000`
- `String` **SCREEN_KEY** = `"weather"` - The key of the layer the weather has in the camera look
- `float` **TICK_INTERVAL** = `0.25` - How often (seconds) the world is checked for the shelter of the camera
- `float` **SHELTER_SOUND_SECONDS** = `1.5` - Seconds the sound takes to change when the camera goes into a shelter or comes out

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

### float intensity_scale = 1.0 {#var-intensity-scale}

A runtime multiplier on the intensity of the weather (0 to 1, 1 = as the weather says): an event or the game makes a storm lighter or heavier without bringing another weather. A new weather resets it

### float shelter_amount = 0.0 {#var-shelter-amount}

How much of the screen look of the weather a shelter keeps off (0 in the open, 1 inside a shelter that hides it all): set by the shelter tracker

### ShelterVolume current_shelter = null {#var-current-shelter}

The shelter the camera is in now (null in the open)

### WeatherExposure exposure = null {#var-exposure}

Gives the exposed effects of the weather to those who stand in it

### WeatherGround ground_map = null {#var-ground-map}

The height of the terrain around the camera as a picture, so rain lands on a terrain whatever draws it (see WeatherGround)

### GameHost.SystemHub system_hub {#var-system-hub}

The systems of the game (the VFX manager is made after this system, so it is asked for when needed)

### VFXManager: vfx_manager {#var-vfx-manager}

The manager of visual effects (from the hub).

## Method descriptions

### void tick() {#method-tick}

One look at the world, every TICK_INTERVAL seconds: which shelter the camera is in, and who is exposed to the effects of the weather

### void track_shelter() {#method-track-shelter}

Finds the shelter the camera is in and lets the weather follow it: the screen look weakens by its amount

### void set_shelter_amount( amount: float, seconds: float = 0.6 ) {#method-set-shelter-amount}

A shelter keeps part of the weather off the screen (0 = none, 1 = all): the screen look moves to it

### Dictionary get_wind_state() {#method-get-wind-state}

The wind that blows from the weather now: direction, strength (0 to 1) and how far it has taken over from the wind of the world (0 to 1)

### void start_world_weather( camera_controller: CameraController, fade_seconds: float = 0.0 ) {#method-start-world-weather}

Start weather for this map (typically called when map loads) `fade_seconds` is how long the particles take to come up to the intensity of the weather (0 = at once: a world that is entered has been raining for a while)

### float get_intensity() {#method-get-intensity}

How strong the weather is now (0 to 1): the intensity of the weather times the runtime scale; 0 when it is clear

### void set_intensity( scale: float, seconds: float = 3.0 ) {#method-set-intensity}

Makes the weather lighter or heavier while it lasts (`scale` 0 to 1 times the intensity of the weather), over `seconds`: the particles, the ground it goes to, the sky, the fog, the sun and the wind all follow

### WeatherConfig get_current_config() {#method-get-current-config}

The weather that is wanted now (null = clear): see _wanted

### VFXSelectionWeather get_current_selection() {#method-get-current-selection}

The particles and the wind of the weather wanted now, as the spawner of the weather VFX takes them (null = clear)

### void on_zone_changed( _old_zone_id: int, _new_zone_id: int ) {#method-on-zone-changed}

The party walked into another zone (the zone tracker says so): the weather of the zone is looked at

### void refresh( seconds: float = -1.0 ) {#method-refresh}

Looks at which weather is wanted and changes into it if it is another one than is shown. `seconds` &lt; 0 = the fade seconds of the weather that comes (of the one that goes when it is a clear sky)

### bool set_zone_weather( weather: Resource, camera_controller: CameraController, seconds: float, scale: float = 1.0 ) {#method-set-zone-weather}

An event sets the weather for the zone the party is in (and the zones in it): it stays until it is released. Returns false when the party is in no zone (nothing was set)

### void release_weather( scope: int, seconds: float = 5.0 ) {#method-release-weather}

Takes away what events set: `scope` is Scope.WORLD (the weather set for the whole world), CURRENT_ZONE (the one set for the zone the party is in, or the nearest zone above it that has one) or ALL (both, and every zone's). The weather then goes back to the zones and the world

### void set_weather( weather: Resource, camera_controller: CameraController, scale: float = 1.0 ) {#method-set-weather}

Change the weather at once. The weather is a Weather config (or an old weather selection) `scale` is the runtime intensity (see intensity_scale)

### void stop_world_weather() {#method-stop-world-weather}

Stop current weather

### void transition_to_weather( new_weather: Resource, camera_controller: CameraController, transition_duration: float = 5.0, scale: float = 1.0 ) {#method-transition-to-weather}

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

