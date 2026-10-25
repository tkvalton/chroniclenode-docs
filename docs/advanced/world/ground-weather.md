# Ground weather: how it is built

This page is for developers. For the fields and the way to use them, see [Ground weather](/basic/world/ground-weather).

## The pieces

| Piece | What it does |
|---|---|
| `TerrainWeather` | Static: the three global shader parameters `terrain_wetness`, `terrain_snow` (floats) and `terrain_tint` (a vec4: rgb, and a = strength). `set_wetness`, `set_snow`, `set_tint`, and the getters. `ensure_globals()` adds the parameters (a project that defines them itself is left alone) |
| `TerrainWeatherDriver` (`runtime_classes/world/terrain/terrain_weather_driver.gd`) | A node child of `WeatherSystem` (`weather_system.ground`). Holds `wetness`, `snow` (what the shader shows), `target_wetness`, `target_snow` (where the weather is taking them) and `held_wetness`, `held_snow` (an event's hold, -1 = none) |
| `VFXSelectionWeather` | `ground_auto`, `ground_wetness`, `ground_snow` and `get_ground_wetness()` / `get_ground_snow()`: by the name of the weather when automatic |
| `WorldData` | The group *Ground Weather*: `ground_wet_seconds`, `ground_dry_seconds`, `ground_snow_seconds`, `ground_melt_seconds`, `ground_tint`, `ground_tint_strength` |
| `ZoneDefinition` | `wetness_scale`, `snow_scale` |
| `SetGroundWeatherAction`, `GroundWeatherCondition` | The event action (`SET`, `HOLD`, `RELEASE`, fade seconds, tint) and the condition (reads `TerrainWeather`) |

## The driver

`_process` calls `refresh_targets()` every `LOOK_INTERVAL` (0.5 s): the target is the weather's level times the scale of the zone the party is in (`zone_tracker.current_zone_id`), or the held level. `step(delta)` moves the levels toward the targets at 1 / seconds per second (up and down have their own seconds in the world data) and writes them to `TerrainWeather`. A fade (`set_levels` with seconds) interpolates and ignores the weather until it arrives. `snap_to_weather()` puts the levels at the targets at once and the tint of the world on the terrain: `WeatherSystem` calls it when `world_data` is set (a world was entered).

The state is not saved: weather resets on entry, so the ground does too.

## The shader

`terrain_textured.gdshader` declares `global uniform vec4 terrain_tint` and applies `albedo = mix(albedo, albedo * tint.rgb, tint.a)` before the wet darkening. The wet and snow responses per texture are the library entry's (see [terrain textures](/basic/assets/terrain-textures#weather)).

## Tests

`tests/world_audit.gd` `t_ground_weather`: names to levels, the rates, the dry slower than the wet, snow, the zone scales, hold and release by the action, the fade, the tint of the world and of an action, and the condition.
