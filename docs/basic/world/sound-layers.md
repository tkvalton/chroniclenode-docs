# Sound layers

The **album** of a world (chosen in the [Worlds editor](/basic/world/worlds)) plays the music and the ambient sound of the world. Four things can play **their own music and ambient sound over it**, each in a **layer**. The highest layer that has a track wins, for the music and for the ambient sound on their own:

| Layer | Who sets it | Plays while |
|---|---|---|
| Album of the world | the [Worlds editor](/basic/world/worlds) | always, as the base |
| **Zone** | the **Music** and **Ambient sound** of a [zone](/basic/world/zones#music-and-ambient-sound) | the party is in the zone (a sub-zone takes the sound of the zone above) |
| **Weather** | the **Sound** container of a [weather](/basic/world/weather#sound) | the weather is on |
| **Shelter** | the **Weather sounds** of a [shelter profile](/basic/world/shelter#the-sound-for-each-kind-of-weather) | the camera is in a shelter and a weather the shelter knows is on |
| **Event** | the actions [Set Music Track](/advanced/events-and-quests/actions-audio/set-music-track-action) and [Set Ambient Track](/advanced/events-and-quests/actions-audio/set-ambient-track-action) | the track plays |

So a storm over a swamp: the swamp zone plays its frogs, the storm puts its rain over them, and when the party steps into a cabin the cabin's rain-on-the-roof replaces the rain; the music stays with the zone because neither the storm nor the cabin has music. Step out and the rain comes back; the storm ends and the frogs are alone again.

## Rules

- **Each channel is chosen on its own.** A storm that has only an ambient sound leaves the music to the zone.
- **A change crossfades** over the seconds of whatever changed (the **fade seconds** of a weather, the **look blends** of a zone, a second and a half for a shelter). The same source twice is not started again.
- **Combat music wins over every layer.** When the fight ends the music of the layers comes back.
- **A layer's track loops.** A layer with several tracks picks one each time it starts.
- **Leaving the world clears all the layers.** The next world sets its own.
- A weather's **ambient sound is quieter in a light weather**: its volume follows the intensity (half the intensity is 6 dB quieter).

## Events

The [Set Music Track](/advanced/events-and-quests/actions-audio/set-music-track-action) and [Set Ambient Track](/advanced/events-and-quests/actions-audio/set-ambient-track-action) actions take the **event layer**:

| Action value | What it does |
|---|---|
| **Play track** | The track is the event layer: it plays over the zone, the weather and the shelter. **Loop track** off: it plays once, then the layer goes and what is under it comes back |
| **Stop** and **Fade stop** | The sound stops and the track of the event is dropped. What is under it plays again the next time a layer changes |
| **Clear** | Takes the track of the event off and brings what is under it back over the **Fade duration** |

The values of the older actions did not change (**Clear** is added last), so the events you made keep working.

## For developers

`AudioManager.set_sound_layer(layer, music_tracks, ambience_tracks, music_db, ambience_db, fade, loop)` sets both channels of a layer, `set_sound_channel(...)` one of them, `clear_sound_layer(layer, fade)` and `clear_sound_channel(...)` take them off. The layers are held by `SoundLayers`. See [Weather, shelters and sound: how they are built](/advanced/world/weather-shelter-sound).
