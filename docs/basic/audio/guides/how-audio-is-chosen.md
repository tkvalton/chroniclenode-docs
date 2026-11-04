# 3. How audio is chosen

::: info Status
Written from the fields of the editors and the reference pages. Not yet checked step by step in the editor, and the music has not been listened to in a game.
:::

In this guide you follow a sound from the library to the speaker: the four ways the editors ask for audio, and what decides which sound plays when several want to.

**Time:** about 15 minutes of reading and looking around the editor.

## The four ways to choose audio

| Where | What you choose | How |
|---|---|---|
| **An ability, an effect, an object, an event** (a hit, a cast, a door) | A sound by **category and type** (and perhaps one file) | A **sound selection**: a small window with the category, the type, and a list of files with a player |
| **Music or ambience of a place** (world, zone, weather, encounter, event, menu) | A **sound source** | A field with **None / Track / Album / Dynamic** |
| **The tracks of an album** | Files of the library | The **track window**: category, type, a list, **Preview**, **Import files...** |
| **A 3D sound in the world** | A file | The **Sound path** of the node, with the same track window |

### Sound selections: by name, picked at random

A sound selection stores a **category** and a **type**, for instance *Impact / sword_hit*. When the sound is needed the game picks **one of the files** of that folder at random. Add three hit files to the folder and you get three variations, with nothing more to set. A selection can also name **one particular file**, and has its own volume and pitch.

Because the game looks sounds up by name, **the folder names matter**: rename a folder and the selections that named it no longer find it. The [Sound Library](/basic/audio/sound-library) page lists what each category is for.

### Sound sources: what a place plays

Wherever the editor asks for music, it is a **sound source**:

| Choice | What it is |
|---|---|
| **None** | Says nothing; the place below it decides |
| **Track** | One file, with **Loop**, a **Pause** before it plays again, a **Volume** and a **Fade** |
| **Album** | A [Music Album](/basic/audio/music-albums): many tracks in an order |
| **Dynamic** | A [Dynamic Music](/basic/audio/dynamic-music): music that changes with the game |

Ambient sound is a track only.

### The track window

The ... button next to a track opens the same window everywhere. It shows the library (music, or ambient sounds, or the 3D sounds, as the field needs); you choose a **Category** and a **Type**, select a file, listen with **Preview**, and press **Select Track**. **Import files...** adds files to the folder shown.

## Who wins: the sound layers

A world, a zone, a weather, a shelter, an encounter, an event and a menu can all have music. The [sound layers](/basic/world/sound-layers) put them in order, lowest first: *world, zone, weather, shelter, encounter, event, menu*. **The highest layer that has something wins**, for the music and the ambient sound on their own. The combat music has its own, shorter list (world, zone, encounter) and takes the place of the music while the party is in combat.

So: a world plays a calm album; a swamp zone plays its own track over it; a storm adds rain to the ambient sound; a fight puts the combat album over the music; the pause menu puts its own track over everything. When a layer goes, what is under it comes back.

## Try it

1. Open **Audio > Music Albums** and **Audio > Dynamic Music** to see the two kinds of music that sources can use.
2. Open a **zone** ([Zones](/basic/world/zones#music-and-ambient-sound)) and look at its **Music**, **Combat music** and **Ambient sound**: each is a sound source.
3. Open the **Gameplay Config > Audio** tab and find the **Menu music**.

## What next

[Your first music album](/basic/audio/guides/your-first-music-album).
