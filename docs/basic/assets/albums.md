# Albums

An **album** is a set of music and ambience tracks, with the rules for how they play. **Assets > Albums** makes and edits them. There are two kinds:

| Kind | Used by | Tracks it has |
|---|---|---|
| **Map album** | A [world](/basic/world/worlds#audio) | **Music** (exploring), **Combat** (fighting), **Ambient** (wind, water, birds) |
| **UI album** | The menus of the game | **Menu music**, **Ambient**, **Transition** sounds |

The tracks are the files of the [Audio](/basic/assets/audio) library (music and atmospheric ambience); an album lists them by name.

## UI albums

The game has four UI albums that always exist, one for each part of the interface:

| Built-in album | Plays in |
|---|---|
| **Main menu** | The main menu |
| **Character creation** | The character creator |
| **Pause menu** | The pause menu |
| **Loading screen** | The loading screen |

You cannot delete them, but you can fill them. You can also make **custom UI albums**.

## The editor

| Control | What it does |
|---|---|
| The filter | **All Albums**, **UI Albums**, **Map Albums** |
| The list | The albums, with the number of tracks |
| **Settings > Create New Map Album** | Name it and give it a description |
| **Settings > Create New Custom UI Album** | The same, for a menu |
| **Settings > Validate All Albums** | Lists albums with problems (a track that is missing, an empty album) |
| **Duplicate**, **Delete** | As they say. A duplicate copies the tracks and every setting. The built-in UI albums cannot be deleted |
| **Save** | Changes are held until saved; switching to another album asks what to do with them |

### Tracks

Add tracks from the library to each list (the track lists are *Music*, *Combat* and *Ambient* for a map album).

### Volume

| Setting | What it does | Default |
|---|---|---|
| **Music**, **Combat**, **Ambient volume** | Loudness of each list in decibels (`0` = as recorded). A UI album has a menu music, an ambient and a transition volume | `0` (ambient of a UI album `-10`) |

The sliders in the editor show these as percentages.

### Playback settings: not used yet

The album also stores a **default track** for each list, **shuffle**, **loop**, **crossfade**, **fade in and out**, **silence between tracks** and a **pitch scale**. The editor shows them and saves them, but the music player does not read them yet: it picks a **random** track of the list, and crossfades with its own fixed length. Only the tracks and the volumes above change what you hear today.

## How a world uses its album

A [world](/basic/world/worlds) names an album. When the party enters, the game picks a music track and an ambient track of the album. When combat starts the album's **combat** tracks take over, and when it ends the exploration music returns. A world with no album plays nothing of its own.

## See also

- [Audio](/basic/assets/audio), [Worlds](/basic/world/worlds).
- [How albums are built](/advanced/assets/).
