# Weather, shelters and sound: how they are built

This page is for developers who want to read or extend the parts of the weather that reach the screen, the people and the ears. The pages for designers are [Weather](/basic/world/weather), [Shelters](/basic/world/shelter) and [Sound layers](/basic/world/sound-layers).

## Local weather: which weather is wanted

`WeatherSystem._wanted()` answers which weather the camera has now. In this order, the first that applies: an event for the zone (`_zone_events`: zone id to weather, for the zone the party is in or a zone above it, innermost first), an event for the world (`_current_config` / `_current_selection`), the weather of the zone (`ZoneLookup.get_weather_owner`: the zone or the nearest zone above it whose `weather_rule` is not Inherit; Clear = null, Fixed = `weather_config_id`, Table = a pick of the table `weather_table_id`), the table of the world (`WorldData.default_weather_table`), the default weather of the world. `get_current_config()` and `get_current_selection()` both read it, so the ground, the sky, the wind, the sound and the exposed effects follow.

- **Tables.** `WeatherTable` is a database kind (`weather_table`, `src/data/worlds/weather_tables/`) of `WeatherTableEntry` lines (`weather_config_id`, `weight`, `min_minutes`, `max_minutes`). `_rolled` keeps the pick for each place (a zone id, 0 = the world): the weather and the seconds left. `tick()` (every 0.25 s) counts them down; one whose time is up is dropped and the weather is looked at again, which picks anew. The picks are not saved. `_rng` is a `RandomNumberGenerator` (a test sets its seed).
- **A change.** `refresh()` compares `_wanted()` with `_shown` (set by `_apply_weather`) and, when it is another, calls `_begin_transition(seconds)`: the same fade as `transition_to_weather` (the look, the wind, the ground and the sound over the seconds, the particles of the old weather stop in the first half, the new start in the second; a newer change stops an older one). The zone tracker's `zone_changed` calls `on_zone_changed`; within four seconds of the world being entered it snaps (0 s) instead of fading from the weather of the world.
- **Events.** `set_weather` / `transition_to_weather` set the event for the world; `set_zone_weather(weather, camera, seconds, scale)` the event for the innermost zone of the party (false when it is in none); `release_weather(scope, seconds)` (`WeatherSystem.Scope`: WORLD, CURRENT_ZONE, ALL) takes them away and resets the intensity scale. `SetWeatherAction` has a `scope`; `ReleaseWeatherAction` is the other action.

## The pieces

| Class | Kind | What it does |
|---|---|---|
| `WeatherConfig` | resource (`DatabaseResource`) | Everything a weather says: effect, wind, ground, sky and light, fog, **Screen**, **Sound**, **Exposed Effects**, intensity |
| `WeatherSystem` | node of the `WorldContainer` | Applies a weather: the particles, the wind, the ground, the sky/fog/light (`WeatherLook`), the screen layer, the sound layers, the shelter tracker and the exposure |
| `WeatherScreen` | helper | `blend(a, b, t)` between two `ScreenLook`s; the weather's screen look is a layer of `CameraLook` at `PRIORITY_WEATHER` (15, over a zone's 10, under an effect's 20) |
| `ShelterVolume` | `SpaceVolume` | A place with its own settings (`shelter_amount`, `stops_effects`, `audio_profile`, `weather_sounds` lines, `preset_name`); it is in the group `shelter_volumes` and only measures. An old `profile` (`ShelterProfile`, registry `"shelter"`) or `amount_override` in a scene is read into these settings by its setters |
| `ShelterPreset` | `Resource` | The settings of a cabin, a cave, a tent: built-ins in code, yours in `res://src/data/shelter_presets/`; copied into a volume by the Unique Object panel (`MovementPresetBar` is given the class of the presets) |
| `Shelter` | static queries | `volume_at`, `amount_at`, `protects_at`, `camera_position`, `amount_at_camera` |
| `ShelteredCondition` | `Condition` | Is the camera sheltered by at least a given amount (or in the open) |
| `WeatherExposure` | `RefCounted` of the weather system | Gives and takes the exposed effects |
| `SoundLayers` | `RefCounted` of the `AudioManager` | The layers and the resolver |

## The shelter tracker

`WeatherSystem` has a `Timer` (`TICK_INTERVAL`, 0.25 s) that calls `tick()`. `tick()` calls `track_shelter()`:

1. find the camera of the viewport (`Shelter.camera_position`), then the best `ShelterVolume` it is inside (`Shelter.volume_at`, the highest amount);
2. if the volume is not `current_shelter`, set it, ask the shelter for the weather sound of this weather (`profile.find_weather_sound(config.get_sound_kinds())`) and emit `shelter_changed(volume)`;
3. `set_shelter_amount(amount)`: the screen look is made again with `config.make_screen_look(intensity, shelter_amount)` and eased in over 0.6 s.

The shelter volume itself pushes its `audio_profile` onto the `AudioProfileStack` when the camera is inside, like an [audio zone](/advanced/world/audio-zones). It is group-based, so there is no per-frame cost for volumes the camera is not in.

## The exposure

`WeatherExposure.update(config, tree, delta)` runs from `tick()` and does real work every `EXPOSURE_INTERVAL` (0.5 s). For each entry of `config.exposed_effects`:

- the targets are the party (`PartyManager.players`) or, for **Everyone**, the party and every entity of the `ObjectRegistry`;
- an entity is **exposed** when it is alive, in the tree and `Shelter.protects_at(tree, position)` is false;
- **Held**: spawned once with `CombatManager.spawn_world_effect_on_target` (the environment is the originator, like the effects of a movement volume) and remembered; taken off with `remove_effect()` when the entity is not exposed any more, the weather changes into one without the effect, the intensity is 0 or the entity is gone. An effect the entity already has from another source is left alone. An effect that ended by itself is not given again until the entity has left the weather and come back;
- **Refreshed**: every `interval` seconds, if the entity has the effect with a duration it is renewed (`update_duration(base_duration)`, no extra stack); if not it is spawned.

Each instance gets `custom_effect_data["from_weather"] = weather id`. `WeatherEffectEntry.validate()` warns about a Held effect with a duration and a Refreshed effect without one.

## The sound layers

`SoundLayers` holds, for each `Layer` (`WORLD`, `ZONE`, `WEATHER`, `SHELTER`, `ENCOUNTER`, `EVENT`, lowest first), a `SoundSource` (a track with options or an album: `set_source`) or an old list of tracks for each of the two channels (`MUSIC`, `AMBIENCE`). `resolve_music()` and `resolve_ambience()` return the highest layer that has something: `{layer, tracks, volume_db, loop, source}` (`source` is null for an old list), or an empty dictionary when nothing plays. The `AudioManager` keeps two sets: `sound_layers` and `combat_layers` (world, zone, encounter), the second used while `party_in_combat` is true. See [Music albums](/basic/world/music-albums) for the player side.

`AudioManager` keeps the key of what it plays (`_layer_music_key`, `_layer_ambience_key`). `_apply_music(fade)` and `_apply_ambience(fade)` resolve a channel (the music from the combat layers while the party is in combat and some layer has combat music): a changed key crossfades to the new source (`_start_run`: a track, or the first track of an album from an `AlbumCursor`); nothing to play fades the channel out; the same key only fades the volume of a track. When a track ends `_continue_run` decides: the next album track after the album pause, the same track after its pause, or the end of the source (`_end_run` clears its layer and the one below plays). Streams are copied before the loop flag is set. `set_sound_sources`, `set_combat_source` and `set_sound_source_channel` are what the zone, weather, encounter and event call; `start_world_sound` sets the world layer and asks for the tracks `AudioPreload.collect` found. `set_party_in_combat` (from `PartyManager.party_combat_changed`) starts and, after `audio_combat_music_end_delay`, ends the combat music.

| Who sets it | Where |
|---|---|
| Zone | `ZoneLookDriver._play_sound` on `zone_changed`, with the owners from `ZoneLookup.get_music_owner` / `get_ambience_owner` (the zone, else its parents) |
| Weather | `WeatherSystem._apply_sound` (on every `_apply_weather`, so a new intensity changes the volume: `ambience_volume_db + linear_to_db(intensity)`) |
| Shelter | `WeatherSystem._apply_shelter_sound`: the line of the profile for the kinds of the weather |
| Event | `SetMusicTrackAction` / `SetAmbientTrackAction` through `set_sound_channel`, `Clear` through `clear_sound_channel` |

`WorldContainer.unload_current_world()` calls `clear_sound_layers()`, so the next world starts clean. A track that does not exist is skipped with a warning and the weather editor warns about it.

## Extending

- Another layer is a new value of `SoundLayers.Layer` (keep the order: later is higher) and a call to `set_sound_sources` (or `set_sound_source_channel`) from wherever it lives.
- Your own targets for the exposed effects: change `WeatherExposure._targets`.
- Your own idea of "sheltered": `Shelter.protects_at` and `amount_at` look at every node of the group `shelter_volumes`, so a `ShelterVolume` subclass (or any node of the group with `contains_point`, `get_amount` and `protects_from_effects`) takes part.

## The ground picture, the camera and the sky drivers

**The rain follows the camera.** `VFXWeather.attach_to_camera` points the `RemoteTransform3D` of the `CameraController` (`weather_transform`) at the weather node, so the rain box moves with the camera controller (the position of the party, not the lens). The remote transform has to be **in the tree** to do anything: it was created but never added for a while, so the weather stayed where it started; `weather_exposure_audit` now moves the player and checks that the rain goes with it.

**`WeatherGround`** makes the terrain picture the rain lands on. `WeatherSystem.tick()` calls `ground_map.follow(position of the rain)`; if there is a terrain provider (`TerrainService.provider_for`) and no picture, or the rain is more than 8 m from its middle, a build starts: `TerrainService.get_heights` for a row of 96 cells, as many rows a `_process` as fit in about 2.5 ms, then an `ImageTexture` (`FORMAT_RF`, a hole is `NO_GROUND`) is written to the globals `weather_ground` and `weather_ground_rect` (corner x, z, width in metres, cells). The old picture is shown until the new one is whole. `weather_particles.gdshader` calls `ground_height(xz)` (a `texelFetch`) in `process()` before it moves a particle: at or below the ground, and not more than 3 m below it, the particle lands (a splash along the normal of the ground, or ACTIVE = false), like a `COLLIDED` particle. Because it asks the service, it works for every provider (our terrain, Terrain3D, HTerrain, Terra Brush). A world with no provider makes no picture (the rect width is 0).

**Sky drivers.** `SkyDriver.apply_weather(params, look)` is how the weather reaches a sky: the default is `WeatherLook.apply_sky_params` (the stylized names), `SkyDriverProcedural` and `SkyDriverPanorama` override it with `WeatherLook.apply_sky_colours(params, look, keys)`. `WorldSkyEnvironment` and `EnvironmentPreview` call it for every change of the sky, and `WeatherLook.write_globals` writes `weather_sky` and `weather_sky_tint` for sky shaders that read them.
