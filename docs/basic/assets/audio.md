# Audio

The **audio library** is every sound file of the game: music, ambience, voices, footsteps, the sounds of abilities and objects. **Assets > Audio** lists them by category, plays them so you can listen, and helps you add and sort them.

Sounds are `.wav`, `.ogg` or `.mp3` files under `res://src/data/audio/`. The folder is the organisation: a **category** folder, then (usually) a **type** folder inside it named for what the sound is. The game asks for "a sound of this category and type" and picks one of the files in that folder **at random**, so putting several files in a folder gives variety for free.

## Categories

| Category | Folder | Inside | Used by |
|---|---|---|---|
| **Music** | `music/` | `loop/` and `non_loop/` | World and menu [albums](/basic/assets/albums) |
| **Atmospheric ambience** | `atmospheric_ambience/` | `loop/` and `non_loop/` | Albums. 2D background sounds: rain, wind, birds |
| **UI SFX** | `ui_sfx/` | One folder for each interface sound | Buttons, windows, item moves |
| **Entity voices** | `entity_voices/` | `<entity type>/<voice variant>/<action>/` | Grunts, yells and reactions in combat; the **voice** of an [NPC](/basic/entities/npcs) or character |
| **Voicelines** | `voicelines/` | One folder for each line | Spoken lines in [conversations](/basic/behaviors/conversations) |
| **Motion** | `motion/` | `<entity type>/<surface>/<movement>/` | Footsteps and movement sounds, by the ground the entity walks on and how it moves |
| **Casting** | `casting/` | A folder for each sound | The wind-up of a cast |
| **Cast** | `cast/` | A folder for each sound | The release of a spell |
| **Shoot** | `shoot/` | A folder for each sound | Firing a projectile |
| **Impact** | `impact/` | A folder for each sound | Hits and impacts |
| **Status effects** | `status_effects/` | A folder for each sound | A buff or a debuff being applied |
| **Loop** | `loop/` | The files themselves | Looping ability sounds |
| **Environmental** | `environmental/` | A folder for each sound | 3D sounds of the world: a waterfall, a fire, a mechanism |
| **Interactables** | `interactables/` | A folder for each sound | Doors, chests, switches |
| **Spawns** | `spawns/` | The files themselves | The sound of something appearing |

A **loop** folder holds sounds that repeat; a **non-loop** folder holds sounds that play once. The editor asks which one when you import music or ambience.

Choose **sounds** in the editors with a [sound selection](/basic/abilities-and-effects/abilities): a category, a type, and optionally one particular file.

## The editor

| Control | What it does |
|---|---|
| The tree | The categories, each with its types and files, with counts |
| **Search**, **Refresh** | Filter; read the folders again |
| **Import** | Copy audio files in. For a category with types, it asks for a **new folder name** and imports into it; for music and ambience it asks for **loop** or **non-loop** |
| **Settings > Add New Type/Folder** | Makes a new type folder in a category (`fire`, `ice`, `combat_music`) |
| **Settings > Validate Database** | Checks every file and lists the ones that cannot be read |
| **Play**, **Pause**, **Stop** and the time bar | Listen to the selected file |
| The label | The selected file and its category |

## Sounds of an entity

- **Voice.** An NPC, character or class has a voice: an [entity type](/basic/types-and-groups/entity-types) and a variant. Choose it in the editor ([NPCs](/basic/entities/npcs), Audio). The game plays files from `entity_voices/<type>/<variant>/<action>/` when the entity attacks, is hurt, dies, and so on.
- **Footsteps.** The same entity type is used for `motion/`: when it walks, the game looks for a file for the surface it stands on (`stone`, `grass`, `wood`) and the movement (`walk`, `run`). A world's terrain provider tells it the surface.

## Playing sounds

Sounds are played by pooled audio players (50 positional, 20 global, 5 for the interface): see [Pooling](/advanced/pooling#audio-players). When none is free the sound is skipped.

## See also

- [Albums](/basic/assets/albums) for music and ambience, [Worlds](/basic/world/worlds#audio) for giving a world an album.
- [How the audio library is built](/advanced/assets/).
