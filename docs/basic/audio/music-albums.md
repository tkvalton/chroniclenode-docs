# Music albums

A **music album** is a collection of tracks that play one after the other: the music of a world, a zone, a weather, a menu, or the music of a fight. You make them in **Audio > Music Albums**. Where the music comes from is always a **sound source**, which is a single track with its own options, an album, or a [Dynamic Music](/basic/audio/dynamic-music), so a place can use any of them with the same picker.

There are two kinds of album:

| Kind | Used for |
|---|---|
| **Music** | The music of a place or a menu: a [world](/basic/world/worlds#music-and-ambience), a [zone](/basic/world/zones#music-and-ambient-sound), a [weather](/basic/world/weather#sound) or a [menu](#menu-music) |
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
| **Tracks** | the list | Each track is a file of the [audio library](/basic/audio/sound-library): **...** opens the track window with a preview. Each has a **Weight** (how likely it is in the weighted order: a track of 3 comes up three times as often as a track of 1; 0 = never), **Plays** (any time, **day only** or **night only**: the sun decides, see [Day and night](#day-and-night)) and a **Volume** | |
| **Warnings** | | What is probably a mistake: an album with no track, a track with no file or a file that is not in the project, a weighted album where no track has a weight | |

## A sound source

Wherever the game asks for music, combat music or an ambient sound, you fill in a **sound source**:

| Choice | What it is |
|---|---|
| **None** | The source says nothing: the place below it in the [order](/basic/world/sound-layers) decides |
| **Track** | One track of the audio library, with **Loop** (on: it plays again when it ends; off: it plays once and then the place below takes over), **Pause** (the silence before a looping track plays again, a random time between two numbers; 0 = it loops with no break), **Volume** and **Fade** |
| **Album** | A music album (or a combat album) of the project. The album has its own loop, pauses and fades; the source adds a **Volume** and a **Fade** |
| **Dynamic** | A [Dynamic Music](/basic/audio/dynamic-music): music that changes with the game, and the state it starts in. Music and combat music only |

Under the choices, **Different at night** gives the source a second source of its own for the night (see [Day and night](#day-and-night)).

## Day and night

A sound source can have a **night version**, and the tracks of an album can belong to the day or the night. The sound follows **the sun**: it is night between the sunset and the sunrise of the [Sun config](/basic/world/world-configs) of the world (6:00 and 20:30 to begin with), and a sun with no day night cycle never sets.

- **Different at night** (on any source except a menu's) shows a second source called **At night**: a track, an album or a Dynamic Music with its own options. It plays from sunset to sunrise instead of the source above, and the sound crossfades when the sun goes down and comes up. A night source that says nothing is ignored.
- **Plays** on a track of an album: *Any time*, *Day only* or *Night only*. The album picks from the tracks that fit the time; when the sun sets, the track that plays goes on to its end and the next one is picked from the night ones. An album with no track for the time plays all of them.
- A [Dynamic Music](/basic/audio/dynamic-music#day-and-night) with states called **Day** and **Night** goes to them by itself.

See the guide [8. Day and night](/basic/audio/guides/day-and-night).

## Combat music

The combat music follows the **combat state of the party**: it starts when a member of the party is in combat, and ends a few seconds after the last fight (the seconds are in the [Gameplay Config](/basic/game-settings/gameplay-config#audio) so a short break in a fight does not cut it). It takes the place of the music while the fight lasts, and the music of the place comes back after it.

Which combat music plays is decided like this: the **encounter** the party is fighting, then the **zone** the party is in (or the zone above it), then the **world**. A fight with no combat music anywhere keeps the music of the place.

## Loading

When a world starts it looks through its zones, its weather and weather tables, its encounters and the Set Music Track and Set Ambience Track actions of its events, and asks for every track and every album track it finds to be loaded. By default the game goes on while they load; in the [Gameplay Config > Audio](/basic/game-settings/gameplay-config#audio) you can make the loading screen wait for them all (more memory at the start, no pause later). A track the world did not know about is loaded when it is needed.

## Menu music

The menus take their music from the **Gameplay Config > Audio > Menu music**: the **main menu**, **character creation**, the **loading screen** and the **pause menu** each have a sound source (None, a Track or a Music Album, the same field as everywhere else). The tab that used to hold the "UI albums" is gone: a menu's music is a [Music Album](#the-music-albums-tab) like any other (kind **Music**), so it has the same orders, pauses, weights and fades.

- The menu music plays through the [sound layers](/basic/world/sound-layers) as the **top layer**, over everything else. When the game starts a world, the menu layer goes and the world's music takes over.
- The **pause menu** plays over the game: it replaces the music of the game, even in a fight, and when the game goes on the music of the game (or of the fight) comes back. A pause menu with no music leaves the music of the game on.
- Going back from the game to a menu clears the sound of the world.
- A menu with no music is silent.

## Older albums

The map albums of earlier versions (one list of music, combat and ambient tracks for a world) and the **UI albums** (the menus' lists of music, ambient and transition sounds) are gone: a world, a zone, a weather, an encounter and a menu hold a sound source instead. The transition sounds of the old UI albums have no replacement; play an [interface sound](/basic/audio/sound-library#interface-sounds) from an event if you need one.
