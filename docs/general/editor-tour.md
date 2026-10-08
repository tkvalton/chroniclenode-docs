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
| **World** | [Worlds](/basic/world/worlds), [World Configs](/basic/world/world-configs), [Uniques](/basic/world/uniques) | The places of the game, their time, sky and weather, and the one-of-a-kind characters and objects placed in them |
| **Events & Quests** | [Events](/basic/events-and-quests/events), [Quests](/basic/events-and-quests/quests), [Quest Lines](/basic/events-and-quests/quest-lines), [Global Variables](/basic/events-and-quests/global-variables), [Popups](/basic/events-and-quests/popups) | What happens in the game: triggers and actions, quests and the chains they form, variables the game remembers, and message popups |
| **Entities** | [Playable Character](/basic/entities/playable-character), [Player Classes](/basic/entities/player-classes), [NPCs](/basic/entities/npcs), [Interactables](/basic/entities/interactables) | The characters, creatures and objects of the game |
| **Abilities & Effects** | [Abilities](/basic/abilities-and-effects/abilities), [Effects](/basic/abilities-and-effects/effects), [Status Effects](/basic/abilities-and-effects/status-effects), [Skill Trees](/basic/abilities-and-effects/skill-trees) | What entities can do, what that does to the world, and how players unlock it |
| **Behaviors** | [Factions](/basic/behaviors/factions), [Combat Scripts](/basic/behaviors/combat-scripts), [Behavior Scripts](/basic/behaviors/behavior-scripts), [Conversations](/basic/behaviors/conversations) | How non-player characters act, fight and talk |
| **Entity Stats** | [Stats](/basic/entity-stats/stats), [Pool](/basic/entity-stats/pool), [Calculations](/basic/entity-stats/calculations) | The numbers that describe an entity and how damage and healing are worked out |
| **Tags & Groups** | [Damage Types](/basic/tags-and-groups/damage-types), [School Types](/basic/tags-and-groups/school-types), [Trigger Tags](/basic/tags-and-groups/trigger-tags), [Entity Tags](/basic/tags-and-groups/entity-tags), [Groups](/basic/tags-and-groups/groups), [Stat Groups](/basic/tags-and-groups/stat-groups), [Immunities](/basic/tags-and-groups/immunities) | The labels that connect the other systems: what kind of damage, what an entity is, and what shares a [cooldown](/basic/keywords#cooldown) |
| **Items** | [Items](/basic/items/items), [Currency](/basic/items/currency), [Loot Tables](/basic/items/loot-tables), [Craft Recipes](/basic/items/craft-recipes), [Craft Schools](/basic/items/craft-schools), [Vendors](/basic/items/vendors) | Everything a player can own, find, make and trade |
| **Equipment Definitions** | [Armor Class](/basic/equipment-definitions/armor-class), [Weapon Class](/basic/equipment-definitions/weapon-class), [Equipment Type](/basic/equipment-definitions/equipment-type), [Equipment Slot](/basic/equipment-definitions/equipment-slot), [Quality](/basic/equipment-definitions/quality), [Set Bonus](/basic/equipment-definitions/set-bonus), [Socket](/basic/equipment-definitions/socket) | The rules that equipment is built from |
| **Assets** | [Model Scenes](/basic/assets/model-scenes), [Meshes](/basic/assets/meshes), [Animations](/basic/assets/animations), [VFX](/basic/assets/vfx), [Audio](/basic/assets/audio), [Albums](/basic/assets/albums), [Icons](/basic/assets/icons) | The art and sound libraries the other editors pick from |
| **Game Settings** | [Game Settings](/basic/game-settings/settings), [Gameplay Config](/basic/game-settings/gameplay-config), [Character Creation](/basic/game-settings/character-creation), [Collision Layers](/basic/game-settings/collision-layers), [Controller & Camera](/basic/game-settings/controller-and-camera), [UI Settings](/basic/game-settings/ui-settings), [Localization](/basic/game-settings/localization) | How the game plays, looks and is controlled |

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
