# Audio

The **Audio** category of the editor is everything you hear: the files of the game's sound, and how music is put together from them.

| Page | What it holds | Folder |
|---|---|---|
| [Sound Library](/basic/audio/sound-library) | Music, ambience, voices, footsteps, ability and world sounds, as files; the Import button, the folders, the interface sounds | `src/data/audio/` |
| [Music Albums](/basic/audio/music-albums) | Collections of tracks with an order, pauses and fades; the **sound sources** (a track, an album or a Dynamic Music) that worlds, zones, weather, encounters, events and menus play; the music of the menus | `src/data/audio/albums/sound_albums/` |
| [Entity Voices](/basic/audio/entity-voices) | The voices of creatures lined up with the calls the game makes (hit, death, dodge ...): which files each voice has, what is missing, import and play | `src/data/audio/entity_voices/` |
| [Dynamic Music](/basic/audio/dynamic-music) | Music that changes with the game: parts with a tempo, layers, states, transitions and stingers; boss phases and events change its state | `src/data/audio/dynamic_music/` |

Three more pages belong here, although they are about sound in the world:

- [Sound layers](/basic/world/sound-layers): who decides what plays when a world, a zone, a weather, a shelter, an event and a menu all want to be heard.
- [3D sounds](/basic/world/3d-sounds): sounds that come from a place in the world.
- [Audio zones](/basic/world/audio-zones): how the whole mix changes in a cave, underwater or indoors.

## The guides

Seven short [guides](/basic/audio/guides/) take you from a file on your disk to a boss fight with music that changes: importing audio, choosing file types, how audio is chosen, your first album, a dynamic boss fight, music that follows the story, and a voice for your creatures.

## Where to start

1. Put your sound files in the [Sound Library](/basic/audio/sound-library) (Import).
2. Make a [Music Album](/basic/audio/music-albums) of a few tracks, or just pick one track.
3. For a fight that needs music that changes, make a [Dynamic Music](/basic/audio/dynamic-music).
4. Give a [world](/basic/world/worlds#music-and-ambience) its music and its ambient sound; give a [zone](/basic/world/zones#music-and-ambient-sound) its own.
5. Give the menus theirs in the [Gameplay Config](/basic/game-settings/gameplay-config#menu-music).
