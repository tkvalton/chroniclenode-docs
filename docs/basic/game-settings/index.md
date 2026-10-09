# Game Settings

**Game Settings** is the category of the editor for everything that applies to the whole game rather than to one thing in it: the rules of play, the options the player gets, how a character is created, what collides with what, and how the camera and controls feel.

| Page | What it sets |
|---|---|
| [Game Settings](/basic/game-settings/settings) | The **player's options** (display, audio, controls, interface) with your defaults, and which of them the player may change |
| [Gameplay Config](/basic/game-settings/gameplay-config) | The **rules** of the game: parties, levels, experience, combat, hit chances, [quests](/basic/events-and-quests/quests), the world |
| [Character Creation](/basic/game-settings/character-creation) | The character creator: templates, the races or archetypes (profiles), colours, voices |
| [Collision Layers](/basic/game-settings/collision-layers) | Which kinds of object collide with which |
| [Controller & Camera](/basic/game-settings/controller-and-camera) | The camera and controls presets: third person with WASD, top-down, point and click |
| UI Settings | The cursors, textures and scenes of the interface |
| Localization | The languages of the game |

(UI Settings and Localization are documented with the interface.)

## Where the settings live

Each page edits one resource in `res://src/data/config_data/`:

| Editor | File |
|---|---|
| Game Settings | `settings_config.tres` |
| Gameplay Config | `gameplay_config.tres` |
| Character Creation | `character_creation_config.tres` |
| Collision Layers | `collision_layer_config.tres` |
| UI Settings | `ui_settings_config.tres` |

The camera and controller presets are separate files in `res://src/data/controller_logic/camera/` and `.../player/`; the Gameplay Config says which two are used.

They are plain resources. They are saved as you change them in the editor, they go into version control like the rest of the project, and the game reads them when it starts.

## Which setting is whose

A rule of thumb for deciding where something belongs:

- **The game's design** (a party of four, hit chances, fog of war): Gameplay Config. The player cannot change it.
- **The player's preference** (resolution, volume, mouse speed, UI size): Game Settings. You choose the default, and which ones the player can change.
- **What something is** (a sword, a wolf, a quest): the database, in the other categories.

## See also

- [How the settings are built](/advanced/game-settings/).
