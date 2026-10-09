# The Database

Everything you make in a ChronicleNode editor is saved in the project's **database**: an ability, an effect, an NPC, an item, a [quest](/basic/events-and-quests/quests), a [faction](/basic/behaviors/factions), a stat. This page explains what that means for you, so the rest of the guide can say "pick the effect" or "choose a faction" without explaining where those come from.
You never open the database itself. The editors read and write it for you.

## A resource is a file

Each thing you create is one file in the `src/data` folder of your project. An effect is a file in `src/data/effects/`, an NPC a file in `src/data/npc/`, a quest a file in `src/data/quests/`, and so on. The file is a normal Godot resource (`.tres`), so it works with version control, the file system dock and every Godot tool.
A change in an editor is saved to its file straight away.

| You make | It is saved in |
|---|---|
| Abilities | `src/data/abilities/` |
| Effects | `src/data/effects/` |
| NPCs and [player classes](/basic/entities/player-classes) | `src/data/npc/`, `src/data/player_classes/` |
| Items | `src/data/items/` |
| Quests and events | `src/data/quests/`, `src/data/events/` |
| Factions | `src/data/factions/` |
| Stats, pools and [status effects](/basic/abilities-and-effects/status-effects) | `src/data/stats/` |

The [Database types](/advanced/data-and-database/database-types) page in the Advanced section lists every folder.

## What every resource has

Whatever its kind, every resource in the database has the same four fields, so every editor starts the same way:

| Field | What it is |
|---|---|
| **ID** | A number the toolkit gives it when you create it. You never type it |
| **Display name** | The name you see in lists and in the game |
| **Icon** | The picture shown in the interface |
| **Description** | Free text; many systems show it to the player as a tooltip |

Everything else in an editor is specific to the kind of resource. Technically all of them are built on one base class, [`DatabaseResource`](/advanced/data-and-database/database-classes/database-resource); the [Advanced section](/advanced/data-and-database/) describes it.

## Things refer to each other by ID

When one resource uses another (an ability uses effects, an NPC belongs to a faction, a quest gives an item) it stores the **ID** of the other one, not a copy of it. The editors hide the numbers: you pick from a list by name.
This has three consequences you can rely on:

- **Change it once, it changes everywhere.** Edit an effect and every ability that uses it uses the new version.
- **Renaming is safe.** The display name is just a field. Everything that refers to the resource still finds it.
- **Deleting is not undone by the editor.** If you delete a resource that others use, those others keep the number of a resource that no longer exists, and some editors warn about it (for example an effect that lists a missing [child effect](/basic/abilities-and-effects/child-effects-and-auras)). Look at what uses a resource before you delete it.

## Do not rename the files

The ID is the **file name**: `3330202.tres` is the resource with ID 3330202. If you rename or move a file in the file system, outside the editor, the database no longer finds it, and the resource seems to be gone while the file is still there.
Rename things with the **Display name** field, and use the editor to delete.

## Resources that are already there

A new project is not empty. The toolkit makes the resources every game needs, if they are missing: the *Environmental* and *Player* factions, the *Health* and *Shield* pools, the core stats and their groups, the default environment configurations and a default popup. They are normal resources: look at them, and edit them if you must,
but do not delete them, because parts of the toolkit expect them.

## Assets are not in the database

Models, meshes, animations, sounds, visual effects and icons are **files you add to folders**, not resources you make in an editor. The **Assets** category shows them, and the toolkit scans the folders to find what you put there:

| Editor tab | What it manages |
|---|---|
| [Model Scenes](/basic/assets/model-scenes) | The scenes of characters, creatures and interactable objects |
| [Meshes](/basic/assets/meshes) | Weapons, the parts of modular characters, attachments, facial features and materials |
| [Animations](/basic/assets/animations) | Animations, in folders for each kind of character |
| [VFX](/basic/assets/vfx) | Visual effects: one-shot, looping, beams, weather, telegraphs |
| [Audio](/basic/assets/audio) and [Albums](/basic/assets/albums) | Sound effects, music, voices, and the playlists the menus and worlds use |
| [Icons](/basic/assets/icons) | The pictures, each named by a number |

Add a file to the right folder and it appears in the pickers of the other editors. The [Advanced section](/advanced/data-and-database/asset-databases) describes the folders and how they are read.

## The settings are not in the database either

The **Game Settings** editors (settings, [gameplay config](/basic/game-settings/gameplay-config), UI settings, character creation, [collision layers](/basic/game-settings/collision-layers)) are saved as their own files in `src/data/config_data/`. They are single settings files, one for the whole project, not a collection you add to.

## See also

- [Data and the Database](/advanced/data-and-database/) (Advanced): how it is built.
- [Database types](/advanced/data-and-database/database-types): every kind of resource and its folder.
- [The editor at a glance](/general/editor-tour).
