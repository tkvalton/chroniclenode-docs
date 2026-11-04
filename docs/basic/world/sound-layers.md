# Sound layers

The **world** says what plays by default: its music, its combat music and its ambient sound, each a [sound source](/basic/audio/music-albums#a-sound-source) (a track with its options, or a [Music Album](/basic/audio/music-albums)) chosen in the [Worlds editor](/basic/world/worlds#music-and-ambience). Other things can play **their own** over it, each in a **layer**. The highest layer that has something for a channel wins, for the music and for the ambient sound on their own:

| Layer | Who sets it | Plays while |
|---|---|---|
| **World** | the [Worlds editor](/basic/world/worlds#music-and-ambience) | always, as the base |
| **Zone** | the **Music**, **Combat music** and **Ambient sound** of a [zone](/basic/world/zones#music-and-ambient-sound) | the party is in the zone (a sub-zone takes the sound of the zone above) |
| **Weather** | the **Sound** container of a [weather](/basic/world/weather#sound) | the weather is on |
| **Shelter** | the **Weather sounds** of a [shelter](/basic/world/shelter#the-sound-for-each-kind-of-weather) | the camera is in a shelter and a weather the shelter knows is on |
| **Event** | the actions [Set Music Track](/advanced/events-and-quests/actions-audio/set-music-track-action) and [Set Ambience Track](/advanced/events-and-quests/actions-audio/set-ambient-track-action) | the source plays |
| **Menu** | the [menu music](/basic/game-settings/gameplay-config#menu-music) of the Gameplay Config | a menu is on: the main menu, character creation, the loading screen, or the pause menu over the game |

The **combat music** has its own, shorter list: the **world**, the **zone** and the **encounter** (the [encounter's](/basic/world/encounters#combat-music) wins). It takes the place of the music while the party is in combat.

So a storm over a swamp: the swamp zone plays its frogs, the storm puts its rain over them, and when the party steps into a cabin the cabin's rain-on-the-roof replaces the rain; the music stays with the zone because neither the storm nor the cabin has music. Step out and the rain comes back; the storm ends and the frogs are alone again.

## Rules

- **Each channel is chosen on its own.** A storm that has only an ambient sound leaves the music to the zone.
- **A change crossfades** over the seconds of whatever changed (the **fade seconds** of a weather, the **look blends** of a zone, a second and a half for a shelter). The same source twice is not started again.
- **A menu is over everything.** The menu layer is the top layer, so the pause menu's music plays over the game's, even in a fight (the combat music comes back when the game goes on, if the party is still fighting). A menu with no music of its own leaves the layers below as they are; the main menu, character creation and the loading screen start with no layers below.
- **Combat music wins over every other music layer.** It follows the combat state of the party (it ends a few seconds after the last fight: [Gameplay Config > Audio](/basic/game-settings/gameplay-config#audio)). When it ends the music of the layers comes back. A fight with no combat music anywhere leaves the music as it is.
- **A source plays by its own rules.** A track loops (with an optional pause between plays) or plays once; an album plays its tracks in its order with its pauses. A track or an album that is played once, or an album that is over, gives way to what is under it.
- **A Dynamic Music is a source like any other**: it plays as the music of its layer, a track or an album from a higher layer stops it, and when that layer goes it starts again in its start state. While the party is in combat a Dynamic Music of the world, a zone or a weather goes to its **Combat** state; one that is the combat music of an encounter is driven by the fight. See [Dynamic Music](/basic/audio/dynamic-music#playing-it).
- **Ambient sound is a track,** not an album: it is background noise that changes with the place.
- **Leaving the world clears all the layers.** The next world sets its own.
- **The world loads its tracks when it starts.** It looks through its zones, weather, encounters and the music actions of its events for every track and album and asks for them to be loaded ([Music Albums](/basic/audio/music-albums#loading)).
- A weather's **ambient sound is quieter in a light weather**: its volume follows the intensity (half the intensity is 6 dB quieter).

## Events

The [Set Music Track](/advanced/events-and-quests/actions-audio/set-music-track-action) and [Set Ambience Track](/advanced/events-and-quests/actions-audio/set-ambient-track-action) actions take the **event layer**:

| Action value | What it does |
|---|---|
| **Play track** | The track is the event layer: it plays over the zone, the weather and the shelter. **Loop track** off: it plays once, then the layer goes and what is under it comes back |
| **Stop** and **Fade stop** | The sound stops and the track of the event is dropped. What is under it plays again the next time a layer changes |
| **Clear** | Takes the track of the event off and brings what is under it back over the **Fade duration** |

The actions play a [sound source](/basic/audio/music-albums#a-sound-source): a track with **Loop** (off = once), a **Pause** between plays, a **Volume** and a **Fade**; **Set Music Track** can also play an album. Actions made before sources, with a track path, keep working. The values of the older actions did not change (**Clear** is added last).

## For developers

`AudioManager.set_sound_sources(layer, music, ambience, fade, ambience_gain_db)` sets both channels of a layer from sound sources, `set_sound_source_channel(layer, channel, source, fade)` one of them, `set_combat_source(layer, source, fade)` the combat music of a layer, `clear_sound_layer(layer, fade)` and `clear_sound_channel(...)` take them off (`set_sound_layer` with track paths still works). The layers are held by `SoundLayers`. See [Weather, shelters and sound: how they are built](/advanced/world/weather-shelter-sound).
