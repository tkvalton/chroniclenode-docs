# The editor at a glance

The **Database** tab is where you author the game. This page shows how it is laid out and how its editors work, so every chapter of the [Basic guide](/basic/) feels familiar.

## The top bar

<Shot name="general-top-bar" caption="The top bar: category drop-down, tabs, Docs and the version." />

Along the top of the tab you find, from left to right:

- the **category drop-down**, which switches between the groups of editors;
- the **tabs of the current category**, one button for each editor;
- **Docs**, which opens this documentation in your browser;
- the **version** of the toolkit;
- **F** pops the editor out into its own floating window, and **P** keeps that window on top of the others.

## The categories

<Shot name="general-category-dropdown" caption="The category drop-down." />

Each category holds the editors for one part of the game.

| Category | Its tabs | What it is for |
|---|---|---|
| **World** | Worlds, World Configs, Uniques | The places of the game, their time, sky and weather, and the one-of-a-kind characters and objects placed in them |
| **Events & Quests** | Events, Quests, Quest Lines, Global Variables, Popups | What happens in the game: triggers and actions, quests and the chains they form, variables the game remembers, and message popups |
| **Entities** | Playable Character, Player Classes, NPCs, Interactables | The characters, creatures and objects of the game |
| **Abilities & Effects** | Abilities, Effects, Skill Trees | What entities can do, what that does to the world, and how players unlock it |
| **Behaviors** | Factions, Combat Scripts, Behavior Scripts, Conversations | How non-player characters act, fight and talk |
| **Entity Stats** | Stats, Pool, Status Effects, Calculations | The numbers that describe an entity and how damage and healing are worked out |
| **Tags & Groups** | Damage Types, School Types, Trigger Tags, Entity Tags, Groups, Stat Groups, Immunities | The labels that connect the other systems: what kind of damage, what an entity is, and what shares a cooldown |
| **Items** | Items, Currency, Loot Tables, Craft Recipes, Craft Schools, Vendors | Everything a player can own, find, make and trade |
| **Equipment Definitions** | Armor Class, Weapon Class, Equipment Type, Equipment Slot, Quality, Set Bonus, Socket | The rules that equipment is built from |
| **Assets** | Model Scenes, Meshes, Animations, VFX, Audio, Albums, Icons | The art and sound libraries the other editors pick from |
| **Game Settings** | Game Settings, Gameplay Config, Character Creation, Collision Layers, Controller & Camera, UI Settings, Localization | How the game plays, looks and is controlled |

## How an editor works

<Shot name="general-editor-layout" caption="The list on the left and the fields of the selected item on the right." />

Most editors share the same layout:

- On the **left** is a **list** of everything of that kind. A **Filter files** box narrows it down, the **Add** button above it makes a new one, and a right click on an entry offers **Duplicate**, **Delete** and **Copy Path**.
- On the **right** are the **fields** of the one you selected. A change is saved to the project as soon as you make it.

Some things you will see again and again:

- **Hover for help.** Fields have tooltips that say what they do. Fields that take text with special words (such as a player's name) list those words in the tooltip.
- **Pickers.** Wherever one thing refers to another (an ability that uses an effect, a quest that gives an item) you choose it from a catalog with a search box, not by typing an id.
- **Every item has an id.** The toolkit assigns it when you create the item, and it is how everything else refers to it. You never need to type one, and changing an item's name does not change its id.
- **Display Name and Description.** Almost everything has a name and a description that the player sees in the game.

## Where your work is saved

Everything you create is a resource file under `res://src/data/`, in a folder for its kind (for example `src/data/abilities/`). The files are named after the item's id. They are normal Godot resources, so you can see them in the **FileSystem** dock, and they work with version control. The settings from **Game Settings** are saved in `src/data/config_data/`.

## Next

The [Basic guide](/basic/) has a chapter for each category, starting with **Abilities & Effects**.
