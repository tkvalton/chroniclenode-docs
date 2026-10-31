# Ground weather: how it is built

This page is for developers. For the fields and the way to use them, see [Ground weather](/basic/world/ground-weather).

## The pieces

| Piece | What it does |
|---|---|
| `TerrainWeather` | Static: the global shader parameters `terrain_wetness`, `terrain_snow` (floats, `snow` is the amount of **cover**), `terrain_tint` (a vec4: rgb, and a = strength), `terrain_cover_color` (rgb the cover colour, a its roughness), `terrain_cover_stick` (float: how steep the ground can be) and `terrain_wet_tint` (rgb, a = amount). `set_wetness`, `set_snow`, `set_tint`, `set_cover_look(color, roughness, stick)`, `set_wet_tint(color, amount)` and the getters. `ensure_globals()` adds the parameters (a project that defines them itself is left alone) |
| `TerrainWeatherDriver` (`runtime_classes/world/terrain/terrain_weather_driver.gd`) | A node child of `WeatherSystem` (`weather_system.ground`). Holds `wetness`, `snow` (what the shader shows), `target_wetness`, `target_snow` (where the weather is taking them) and `held_wetness`, `held_snow` (an event's hold, -1 = none) |
| `WeatherConfig` (`data_classes/world/configs/weather_config.gd`, Database type `"weather"`) | The weather as data: `ground_wetness`, `wet_tint`, `wet_tint_amount`, `cover_amount`, `cover_color`, `cover_sticks_on`, `cover_roughness`, the VFX name and the wind. `to_selection()` builds the `VFXSelectionWeather` the spawner of the weather VFX takes; `WeatherConfig.from_selection()` makes a config from an old selection |
| `VFXSelectionWeather` | The old form (still read): `ground_auto`, `ground_wetness`, `ground_snow` and `get_ground_wetness()` / `get_ground_snow()`: by the name of the weather when automatic. `WorldData.default_weather` keeps one until the Worlds editor converts it to `default_weather_config` |
| `WorldData` | The group *Ground Weather*: `ground_wet_seconds`, `ground_dry_seconds`, `ground_snow_seconds`, `ground_melt_seconds`, `ground_tint`, `ground_tint_strength` |
| `ZoneDefinition` | `wetness_scale`, `snow_scale` |
| `SetGroundWeatherAction`, `GroundWeatherCondition` | The event action (`SET`, `HOLD`, `RELEASE`, fade seconds, tint) and the condition (reads `TerrainWeather`) |

## The driver

`_process` calls `refresh_targets()` every `LOOK_INTERVAL` (0.5 s): it reads `WeatherSystem.get_current_config()` (an event's choice, else the world's `default_weather_config`, else an old selection made into a config), puts the look of the cover and the wet tint on `TerrainWeather` (only for a weather that covers or wets: melting cover keeps its colour) and the target is the weather's level times the scale of the zone the party is in (`zone_tracker.current_zone_id`), or the held level. `step(delta)` moves the levels toward the targets at 1 / seconds per second (up and down have their own seconds in the world data) and writes them to `TerrainWeather`. A fade (`set_levels` with seconds) interpolates and ignores the weather until it arrives. `snap_to_weather()` puts the levels at the targets at once and the tint of the world on the terrain: `WeatherSystem` calls it when `world_data` is set (a world was entered).

The state is not saved: weather resets on entry, so the ground does too.

## The shader

`terrain_textured.gdshader` declares `global uniform vec4 terrain_tint` and applies `albedo = mix(albedo, albedo * tint.rgb, tint.a)` before the wet darkening, then `terrain_wet_tint` (times the wetness). The cover is `terrain_snow * texture cover * smoothstep(mix(0.55, 0.0, stick), mix(0.85, 0.3, stick), slope)`, drawn in `terrain_cover_color.rgb` with `terrain_cover_color.a` as the roughness. The wet and snow responses per texture are the library entry's (see [terrain textures](/basic/assets/terrain-textures#weather)).

## Tests

`tests/weather_config_check.gd` (the config, the Database type, the world, the weather system, the cover look and wet tint reaching `TerrainWeather`, the shader reading the globals) and `tests/world_audit.gd` `t_ground_weather`: names to levels, the rates, the dry slower than the wet, snow, the zone scales, hold and release by the action, the fade, the tint of the world and of an action, and the condition.

## The weather on the sky, the fog, the sun and the wind

The same `WeatherConfig` also carries modifiers for the look that is shown. They are a layer **on top of** `LookLayers` (world, zone, event), never part of it:

| Class | What it does |
|---|---|
| `WeatherLook` | One set of modifiers (`of(config)`, `blend(a, b, t)`, `is_neutral()`) and the static functions that lay them on: `apply_environment(env, config, hour, look)` (fog density times `fog_thicker` plus `fog_added`, fog colour, ambient light), `apply_sky_params(params, look)` (darken, tint, more clouds, stars hidden; only the parameters of the stylized sky: a driver that names others is left alone) and `apply_cloud_cover(cover, look)` (the global `world_cloud_cover`). All of them work from the config again, so laying them on twice does not pile up |
| `WorldSkyEnvironment` | Keeps the shown `weather_look`. `set_weather_look(config, seconds)` blends it (eased, from what is shown) and calls `_show_weather()` each step; it is laid on again after every `_show_environment` (a look blend step), every game minute (`apply_hour`) and every sky update. Emits `sun_dimmed(brightness)` |
| `WorldSun` | `set_weather_dim(brightness)` multiplies the light energy the clock and the environment give; `GameHost` connects `sun_dimmed` to it |
| `WeatherSystem` | `_apply_weather(config, seconds)` sends the look to `WorldSkyEnvironment` and the wind to its own blend; called when `world_data` is set (0 s: a world starts with its weather), from `set_weather` (the weather's `fade_seconds`) and from `transition_to_weather` (its seconds, at the start of the transition) |
| `FoliageWind` | `set_weather_wind(direction, intensity, amount = 1)`: `amount` is how far the weather's wind has taken over from the wind of the world while it fades (direction turns the short way round) |

The wind used to be set by `VFXWeather` while its particles lived; `WeatherSystem` owns it now (`get_wind_state()`), so a weather with `uses_own_wind` blows with or without particles, and a weather without it leaves the wind of the world alone. `VFXWeather` keeps its wind numbers for the particles.

Tests: `tests/weather_look_check.gd` (48 checks: the modifiers, the blend, the fog and ambient light with and without an hourly curve, the sky parameters, a fade in the middle of another, the sun, the wind blend and the weather system).
