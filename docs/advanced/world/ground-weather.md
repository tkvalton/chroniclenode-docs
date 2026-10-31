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
