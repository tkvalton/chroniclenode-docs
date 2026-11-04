# Music albums

A **music album** is a collection of tracks that play one after the other: the music of a world, a zone or a weather, or the music of a fight. You make them in **World > Music Albums**. Where the music comes from is always a **sound source**, which is either a single track with its own options or an album, so a place can use one or the other with the same picker.

There are two kinds of album:

| Kind | Used for |
|---|---|
| **Music** | The music of a place: a [world](/basic/world/worlds#music-and-ambience), a [zone](/basic/world/zones#music-and-ambient-sound) or a [weather](/basic/world/weather#sound) |
| **Combat Music** | The music of a fight: a world, a zone or an [encounter](/basic/world/encounters#combat-music) |

The pickers show the albums of the kind they need, so a combat album is never offered for the music of a forest. (The ambient sound of a place is not an album: it is background noise that changes with the place, so it is one track.)

## The Music Albums tab

The list is on the left (with **New**; right-click for **Duplicate**, **Delete** and **Copy Path**), the settings on the right in containers.

| Container | Field | What it does | Default |
|---|---|---|---|
| **Album** | **Kind** | Music or Combat Music | Music |
| | **Order** | **In order**: from the top of the list. **Shuffle**: every track plays once, in a new random order, before any plays again (the last track of a round is never the first of the next). **True random**: any track, the same one may come twice in a row. **Weighted**: any track, by its weight | Shuffle |
| | **Loop the album** | When every track has played, start again (on) or stop (off: the music of the place below takes over) | on |
| | **Shortest pause**, **Longest pause** | The silence between two tracks: a random time between the two (0 = the next track follows at once) | 0 |
| | **Volume** | How loud the album is, on top of the volume of each track | 0 dB |
| | **Fade** | Seconds one track fades into the next and the album takes to come in. -1 = the project default ([Gameplay Config > Audio](/basic/game-settings/gameplay-config#audio)) | -1 |
| | **Restart each fight** | Combat music only: each fight begins with the first track again (on) or goes on where it was (off) | on |
| **Tracks** | the list | Each track is a file of the [audio library](/basic/assets/audio): **...** opens the track window with a preview. Each has a **Weight** (how likely it is in the weighted order: a track of 3 comes up three times as often as a track of 1; 0 = never) and a **Volume** | |
| **Warnings** | | What is probably a mistake: an album with no track, a track with no file or a file that is not in the project, a weighted album where no track has a weight | |

## A sound source

Wherever the game asks for music, combat music or an ambient sound, you fill in a **sound source**:

| Choice | What it is |
|---|---|
| **None** | The source says nothing: the place below it in the [order](/basic/world/sound-layers) decides |
| **Track** | One track of the audio library, with **Loop** (on: it plays again when it ends; off: it plays once and then the place below takes over), **Pause** (the silence before a looping track plays again, a random time between two numbers; 0 = it loops with no break), **Volume** and **Fade** |
| **Album** | A music album (or a combat album) of the project. The album has its own loop, pauses and fades; the source adds a **Volume** and a **Fade** |

## Combat music

The combat music follows the **combat state of the party**: it starts when a member of the party is in combat, and ends a few seconds after the last fight (the seconds are in the [Gameplay Config](/basic/game-settings/gameplay-config#audio) so a short break in a fight does not cut it). It takes the place of the music while the fight lasts, and the music of the place comes back after it.

Which combat music plays is decided like this: the **encounter** the party is fighting, then the **zone** the party is in (or the zone above it), then the **world**. A fight with no combat music anywhere keeps the music of the place.

## Loading

When a world starts it looks through its zones, its weather and weather tables, its encounters and the Set Music Track and Set Ambient Track actions of its events, and asks for every track and every album track it finds to be loaded. By default the game goes on while they load; in the [Gameplay Config > Audio](/basic/game-settings/gameplay-config#audio) you can make the loading screen wait for them all (more memory at the start, no pause later). A track the world did not know about is loaded when it is needed.

## Older albums

The map albums of earlier versions (one list of music, combat and ambient tracks for a world) are not used any more: a world holds sources instead. The **UI Albums** tab ([Albums](/basic/assets/albums)) is for the menus.
