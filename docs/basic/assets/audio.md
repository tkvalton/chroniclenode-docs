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
| **Voicelines** | `voicelines/` | One folder for each character; a folder of a language inside it for the recordings in that language | Spoken lines in [conversations](/basic/behaviors/conversations), speak interactions, quests and events. See [voice lines in other languages](/basic/game-settings/localization#voice-lines-in-other-languages) |
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
- **Footsteps.** The same entity type is used for `motion/`: when it walks, the game looks for a file for the surface it stands on (`stone`, `grass`, `wood`) and the movement (`walk`, `run`). A world's terrain provider tells it the surface; on the toolkit's own terrain it is the **surface type** of the [terrain texture](/basic/assets/terrain-textures) the entity stands on, so name the folders like your surface types (`grass`, `rock`, `sand`, `snow`). The game times the steps by the distance walked (see [Footsteps](/basic/game-settings/gameplay-config#footsteps)); an animation can call for a step itself instead. A [movement volume](/basic/world/movement-volumes#footsteps-in-the-volume) can say what the ground sounds like inside it (shallow water, mud), and swimming makes `swim` sounds.

## Choosing a track in the editor

Wherever the editor asks for music or an ambient sound, the **+** (or **...**) button opens the same **track window** of the library: the *Albums* tab, the *Set Music Track* and *Set Ambient Track* event actions, the **Music** and **Ambient sound** of a [zone](/basic/world/zones#music-and-ambient-sound), a [weather](/basic/world/weather#sound) and the weather sounds of a [shelter](/basic/world/shelter#the-sound-for-each-kind-of-weather). It shows the music or the ambient sounds (loop and non-loop), you listen to a file with **Preview**, and the files you choose are added. A file outside the library can still be typed in the line next to the button.

## Interface sounds

The **ui_sfx** category holds the sounds of the interface. The game looks for them by name: click, hover, confirm, cancel, error_click, panel, navigation, tab_switch, window_open, window_close, loot, purchase_sell_item, inventory_move, equip_item, quest_complete, quest_failed, game_over, character_select, level_up, notification, and the item, crafting and map sounds: item_drop, item_use, money, craft_complete, item_break, item_repair, map_open, map_close, journal_update, achievement, cant_do. The item and crafting sounds are interface sounds, not a separate kind. In the tree of the Audio tab the names the game knows that have no folder yet are listed greyed, **(no sound yet)**: create the folder and import files into it.

An **event** can play any of them with Play SFX Global (choose the *Interface sound* type of sound effect and the name). The interface itself plays them as it is built (the UI work).

## Adding a sound folder

**Settings > Add a sound folder...** (the tools button of the Audio tab) asks what the sound is for (music and ambience, interface, characters, abilities, world), then the kind of sound, and says in plain words what the folder name is used for ("the kind of casting sound, chosen in the Casting sound of an ability"). It lists the folders there already, offers for the interface sounds the names the game knows that have none yet, and shows the folder it will make. A name is lower case letters, numbers and underscores. Music, ambience, footsteps, voices and dialogue are not in the list: their folders are made when you **Import** (and loops and spawns are only files).

## Playing sounds

Sounds are played by pooled audio players (50 positional, 20 global, 5 for the interface): see [Pooling](/advanced/pooling#audio-players). When none is free the sound is skipped.

## See also

- [Albums](/basic/assets/albums) for music and ambience, [Worlds](/basic/world/worlds#audio) for giving a world an album.
- [How the audio library is built](/advanced/assets/).
