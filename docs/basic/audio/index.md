# Audio

The **Audio** category of the editor is everything you hear: the files of the game's sound, and how music is put together from them.

| Page | What it holds | Folder |
|---|---|---|
| [Sound Library](/basic/audio/sound-library) | Music, ambience, voices, footsteps, ability and world sounds, as files; the Import button, the folders, the interface sounds | `src/data/audio/` |
| [Music Albums](/basic/audio/music-albums) | Collections of tracks with an order, pauses and fades; the **sound sources** (a track or an album) that worlds, zones, weather, encounters, events and menus play; the music of the menus | `src/data/audio/albums/sound_albums/` |

Three more pages belong here, although they are about sound in the world:

- [Sound layers](/basic/world/sound-layers): who decides what plays when a world, a zone, a weather, a shelter, an event and a menu all want to be heard.
- [3D sounds](/basic/world/3d-sounds): sounds that come from a place in the world.
- [Audio zones](/basic/world/audio-zones): how the whole mix changes in a cave, underwater or indoors.

## Where to start

1. Put your sound files in the [Sound Library](/basic/audio/sound-library) (Import).
2. Make a [Music Album](/basic/audio/music-albums) of a few tracks, or just pick one track.
3. Give a [world](/basic/world/worlds#music-and-ambience) its music and its ambient sound; give a [zone](/basic/world/zones#music-and-ambient-sound) its own.
4. Give the menus theirs in the [Gameplay Config](/basic/game-settings/gameplay-config#menu-music).
