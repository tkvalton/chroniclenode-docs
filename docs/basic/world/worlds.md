# Worlds

**World > Worlds** lists every world of the game and edits the record of the selected one. The scene itself (the terrain, the models, the objects) is edited in the 3D viewport; this editor is for everything *about* the world.

The demo has three: *Test Dungeon*, *Test World* and *Tutorial*.

## The list

| Control | What it does |
|---|---|
| **Search** | Filters the list by name |
| **Category** | Shows one category (*Town*, *Dungeon*...) or all of them, with a count for each |
| **Settings > Create New Map** | Makes a new world (see below) |
| **Settings > Validate All Maps** | Checks every world and lists the warnings of each |
| **Settings > Reload Cache** | Reads the worlds from disk again |
| **Refresh Database** | Refreshes the list |
| The line at the bottom | The number of categories, worlds, worlds shown and worlds with warnings |

### Create New Map

| Field | What it does |
|---|---|
| **Map Name** | The name of the world |
| **Category** | A word that groups worlds in the list (`forest`, `town`, `dungeon`). Empty = *uncategorized* |
| **Description** | Optional, for you |

**Create Map** makes the world record and a new scene named after its id (`res://src/data/worlds/<id>.tscn`), with a *PartySpawn* marker at the origin, and opens the scene. The name and category are labels; they do not change the file.

## The world

| Field | What it does |
|---|---|
| **Open Scene** | Opens the scene of the world in the 3D viewport |
| **Validate** | Lists what is wrong with this world (see *Validation* below) |
| **Play Test World** | Runs the game in this world, without the main menu |
| **World name**, **Category**, **Description** | Labels. The name shows in the list and can show in your own interface |

### Audio

| Field | What it does |
|---|---|
| **World Album** | The [audio album](/basic/assets/audio) of the world: its music, combat and ambient tracks. *Clear Selection* removes it |
| **Default music**, **Default ambient** | The tracks of the album that play when the party enters. *No Default* plays none |

### Loading screen

**Select Texture** picks an image to show while this world loads. With none, the game uses its default loading screens.

### Map preview

A small picture of the world, shown for you. It is made by the **Generate Map Preview** button of the scene (a top-down capture), not by this editor.

### Config overrides

A world uses the project's default **Time**, **Sun**, **Sky** and **Environment** configs. Choose another for this world here: a dungeon with no sun and heavy fog, a dream with fast time. See [World Configs](/basic/world/world-configs). *Default* means the project's.

### Default weather

**Select Weather** opens the weather effects (the VFX library's *weather* effects: rain, snow, fog drifts). The weather starts when the party enters the world and follows the camera. A [Set Weather event](/basic/events-and-quests/events) changes it later; the world's setting is not changed by that, so the next visit starts with the default again. **Clear Weather** removes it.

### Persistence

What does the world remember when the party leaves and comes back? NPCs that died, chests that were opened, doors that were unlocked.

| Setting | What it does |
|---|---|
| **Persistent** | Everything is remembered, and written to the save file. The normal choice for towns and open worlds |
| **Instance** | Nothing is remembered. Every visit starts fresh. A dungeon you can run again |
| **Timed reset** | Remembered until *Reset after* game seconds have passed since the party left (3600 = one game hour at normal time), then fresh. A camp whose enemies come back |
| **Session only** | Remembered while the game runs, but never written to a save, so loading a save starts it fresh |
| **Reset after** | The time of *Timed reset*, in game seconds. Only shown for that choice |
| **Interactables stay when the rest starts over** | When the world starts fresh (instance, an expired timer, session only after loading), chests, doors and switches still keep their state while the NPCs start over |

Two things are true whatever you choose:

- **Saving the game saves the world the party is in, exactly as it is.** The setting only says what is remembered when the party *leaves*. Saving in an instance dungeon with a chest open, then loading, gives you the open chest.
- **A new game forgets every remembered world** and the exploration of the fog of war.

## Validation

**Validate** (and *Validate All Maps*) warns about: a missing name or category, a missing or non-existing scene file, a unique that the world lists but the database does not have, a default music or ambient track that is not in the album, an album with no tracks, and a default weather with no effect chosen. A world with warnings is counted at the bottom of the list.

## See also

- [Uniques](/basic/world/uniques) to see what a world holds, [Add Object](/basic/world/add-object) to place it.
- [How worlds are loaded and remembered](/advanced/world/)
