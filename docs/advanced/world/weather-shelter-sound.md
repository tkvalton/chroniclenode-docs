# Weather, shelters and sound: how they are built

This page is for developers who want to read or extend the parts of the weather that reach the screen, the people and the ears. The pages for designers are [Weather](/basic/world/weather), [Shelters](/basic/world/shelter) and [Sound layers](/basic/world/sound-layers).

## The pieces

| Class | Kind | What it does |
|---|---|---|
| `WeatherConfig` | resource (`DatabaseResource`) | Everything a weather says: effect, wind, ground, sky and light, fog, **Screen**, **Sound**, **Exposed Effects**, intensity |
| `WeatherSystem` | node of the `WorldContainer` | Applies a weather: the particles, the wind, the ground, the sky/fog/light (`WeatherLook`), the screen layer, the sound layers, the shelter tracker and the exposure |
| `WeatherScreen` | helper | `blend(a, b, t)` between two `ScreenLook`s; the weather's screen look is a layer of `CameraLook` at `PRIORITY_WEATHER` (15, over a zone's 10, under an effect's 20) |
| `ShelterProfile` | resource (`DatabaseResource`, registry `"shelter"`) | Amount, effects stopped, `audio_profile`, `weather_sounds` (`ShelterWeatherSound` lines) |
| `ShelterVolume` | `SpaceVolume` | A place with a profile; it is in the group `shelter_volumes` and only measures |
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

`SoundLayers` holds, for each `Layer` (`ZONE`, `WEATHER`, `SHELTER`, `EVENT`, lowest first), a list of tracks, a volume and a `loop` flag for each of the two channels (`MUSIC`, `AMBIENCE`). `resolve_music()` and `resolve_ambience()` return the highest layer that has tracks: `{layer, tracks, volume_db, loop}`, or an empty dictionary when only the album plays.

`AudioManager` keeps the key of what it plays from the layers (`"layer|tracks"`). `_apply_layers(fade)` resolves both channels: a changed key crossfades to a track picked from the new source (or back to the album when no layer has any; a world album with no music fades the music out); the same key only fades the volume. `play_music` and `play_ambiance` ask the layers first (everything but the `"ui"` album type), except that `in_combat` with combat tracks keeps the combat music; `combat_music_end()` therefore returns to the layers.

| Who sets it | Where |
|---|---|
| Zone | `ZoneLookDriver._play_sound` on `zone_changed`, with the owners from `ZoneLookup.get_music_owner` / `get_ambience_owner` (the zone, else its parents) |
| Weather | `WeatherSystem._apply_sound` (on every `_apply_weather`, so a new intensity changes the volume: `ambience_volume_db + linear_to_db(intensity)`) |
| Shelter | `WeatherSystem._apply_shelter_sound`: the line of the profile for the kinds of the weather |
| Event | `SetMusicTrackAction` / `SetAmbientTrackAction` through `set_sound_channel`, `Clear` through `clear_sound_channel` |

`WorldContainer.unload_current_world()` calls `clear_sound_layers()`, so the next world starts clean. A track that does not exist is skipped with a warning and the weather editor warns about it.

## Extending

- Another layer is a new value of `SoundLayers.Layer` (keep the order: later is higher) and a call to `set_sound_layer` from wherever it lives.
- Your own targets for the exposed effects: change `WeatherExposure._targets`.
- Your own idea of "sheltered": `Shelter.protects_at` and `amount_at` look at every node of the group `shelter_volumes`, so a `ShelterVolume` subclass (or any node of the group with `contains_point`, `get_amount` and `protects_from_effects`) takes part.
