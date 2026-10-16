# Audio zones: how they are built

This page is for developers. For the fields and the way to use them, see [Audio zones](/basic/world/audio-zones).

## The pieces

| Piece | What it does |
|---|---|
| [`AudioProfile`](/advanced/world/audio-profiles/audio-profile) | A resource: for each of the five channels a low-pass cutoff, a volume offset (dB) and a reverb, plus a fade time and a room size. Three ready-made ones: `make_underwater()`, `make_cave()`, `make_indoors()` |
| [`AudioProfileStack`](/advanced/world/runtime/audio-profile-stack) | A static class. Keeps the list of places the camera is in, puts the profile of the last one on the buses with a fade, and takes it off |
| [`AudioZone`](/advanced/world/runtime/audio-zone) | An `Area3D` that checks every 0.1 s whether the camera is inside its shape and calls the stack |
| [`SpaceVolume`](/advanced/world/runtime/space-volume) | The base of `AudioZone` and `MovementVolume`: the shape, the surface, `contains_point`, `is_camera_inside` and the editor warnings |
| [`MovementVolume`](/advanced/world/runtime/movement-volume) | Has an `audio_profile` and calls the stack when the camera is under its surface (whether or not the screen look is on) |
| [`AmbientSound`](/advanced/world/runtime/ambient-sound) | An `AudioStreamPlayer3D` for a placed sound: bus `Ambiance`, autoplay, loop; it joins the groups `ambient_sounds` (paused and resumed by `AudioManager.pause_all_audio` / `resume_all_audio`) and `EntitySFX` (the pitch follows the time scale) |
| [`AudioManager`](/advanced/managers/managers/audio-manager) | The players of the UI sounds play on the `UI` bus |

## What the stack puts on a bus

For each bus that the profile changes, the stack adds three effects, and takes them off again when the bus is neutral at the end of a fade:

| Effect | Set from |
|---|---|
| `AudioEffectLowPassFilter` | `<bus>_low_pass_hz` |
| `AudioEffectAmplify` | `<bus>_volume_db` |
| `AudioEffectReverb` (dry 1, damping 0.5) | `<bus>_reverb` as the wet level, and `reverb_room_size` |

The **volume of the bus is never set**: the settings of the player ([`AudioSettingsManager`](/advanced/game-settings/settings-runtime/audio-settings-manager) sets `volume_db` of each bus) stay as they are, and the offset is an effect on top.

### The fade

`enter(source, profile)` and `leave(source)` call `_refresh`. It takes where each bus is now (`_applied`) and where it should be (the profile of the last entry, or neutral) and runs a `Tween` (`TWEEN_PAUSE_PROCESS`, so a fade finishes while the game is paused) of `fade_time` seconds that calls `_set_progress(0..1)`. The cutoff is moved **evenly in octaves** (`exp(lerp(log(a), log(b)), t)`), the volume and the reverb linearly. A fade time of 0 applies at once. A fade that is interrupted starts from where the sound is. The fade time of the profile **being left** is used when the last place is left.

| Function | |
|---|---|
| `enter(source, profile)`, `leave(source)` | Add or take away a place. The source is the zone or volume; a second `enter` of the same source replaces the first |
| `get_active_profile()` | The profile of the last place, or `null` |
| `get_applied(bus)` | `low_pass`, `volume_db` and `reverb` now (they move during a fade) |
| `has_effects_on(bus)` | Is an effect of the stack on the bus? |
| `reset()` | Forget every place and take the effects off at once |

Sources that are freed are dropped from the list the next time it is read.

## The zone

`AudioZone._physics_process` counts `CHECK_INTERVAL` (0.1 s), then asks `is_camera_inside()`: the camera of the viewport (`get_viewport().get_camera_3d()`) against the first `CollisionShape3D`. On entering it calls `AudioProfileStack.enter(self, profile)`, on leaving `leave(self)`. It has no collision layers and does not monitor bodies. `_exit_tree` leaves.

`MovementVolume` does the same each physics frame with `is_camera_inside(has_surface)`: a camera above the surface of a water volume is outside. It keeps two flags, one for the screen look ([`MovementVolumeCamera`](/advanced/world/runtime/movement-volume-camera)) and one for the sound (`AudioProfileStack`), so the sound works with the look switched off.

## The UI channel

`AudioManager._create_sfx_pools` makes three groups of players. The **UI audio players** (`play_ui_sound`, `play_ui_effect`) are on the `UI` bus; the 2D pool of global effects (`play_sfx_global`) and the 3D pool stay on `SFX`. The volume of the `UI` bus is the setting `ui_volume` (`AudioSettingsManager.UI_VOLUME_LABEL`), and the settings menu shows it with the other volumes. [`AudioBusUtility.REQUIRED_BUSES`](/advanced/game-settings/helpers/audio-bus-utility) makes sure the bus exists.

## Your own profile

```gdscript
var profile := AudioProfile.new()
profile.fade_time = 1.0
profile.sfx_low_pass_hz = 3000.0     # duller effects
profile.ambiance_volume_db = -12.0   # a quiet ambiance
profile.voice_reverb = 0.4           # echo on voices
AudioProfileStack.enter(self, profile)   # on; leave(self) takes it off
```

## Tests

`tests/audio_zone_audit.gd` runs the real game: the profile and its three versions, the stack (fade, which buses get effects, the player's volume untouched, nesting, leaving, a freed source, a fade time of 0), the zone following the camera, a movement volume with a profile, and the UI bus. `tests/movement_volume_editor_check.gd` covers the editor side of the profile and the zone.
