# Data and the Database

Everything a designer makes in the editor is a **resource**: an ability, an effect, an NPC, an item, a quest, a faction, a stat. ChronicleNode keeps them all in one place, the **Database**, and every other system finds them there.
This page explains how the database stores, loads and references resources. The [Basic guide](/basic/database) introduces the idea without code.

| Page | What it covers |
|---|---|
| This page | The registry, files and ids, caches, references between resources, the resources the database makes itself |
| [Database types](/advanced/data-and-database/database-types) | Every type of resource: its class, its folder and the editor tab it is edited in |
| [Asset databases](/advanced/data-and-database/asset-databases) | The libraries of animations, audio, VFX, meshes, model scenes and icons, which are files in folders and not resources |
| [Database](/advanced/data-and-database/database-classes/database) and [DatabaseResource](/advanced/data-and-database/database-classes/database-resource) | The class reference |

## The idea in four lines

- A resource is a Godot `Resource` that extends [DatabaseResource](/advanced/data-and-database/database-classes/database-resource), so it has an `id`, a `display_name`, an `icon` and a `description`.
- It is saved as one file, `<id>.tres`, in the folder of its **type** under `res://src/data/`.
- The class `Database` has a **registry** that lists the types, and reads and writes the files.
- Resources refer to each other by **id**, never by file path or by object.

## The registry

`Database.REGISTRY` maps a **type name** to the folder of its files and the class its resources must be:

```gdscript
"effect": { "path": "res://src/data/effects/", "class": Effect },
"npc":    { "path": "res://src/data/npc/",     "class": NPCDefinition },
```

The type name is what every call takes. The [Database types](/advanced/data-and-database/database-types) page lists all of them, and is written from the code, so it is always the real list.

The first time anything uses the database (`ensure_initialized`) it makes the folder of every type that does not exist yet, then the [built-in resources](#built-in-resources).

## Files and ids

A resource is the file `<id>.tres`. **The file name is the id.** When the database reads a folder it takes every `.tres` file whose name is a number other than 0, loads it, and keeps it only if it is an instance of the class the registry names for that type.
A file that was renamed to something that is not a number is therefore ignored: the resource seems to have vanished from the game, while the file is still on disk.

`create_resource(type, name)` makes a resource of the type's class, gives it an id and saves it. An id is a random number from 1,000,000 to 9,999,999 that is not in use in that type (it tries 100 times).
Ids are only unique **within a type**: an effect and a quest can have the same number.

`save_resource(type, resource)` writes `<folder>/<id>.tres`, sets the resource's `resource_path` and puts it in the cache. In the editor it also asks Godot to rescan the file system. It returns `false` when the resource has no id,
the type is unknown, or the file cannot be written (an exported game cannot write to `res://`).

`delete_resource(type, id)` deletes the file and takes the resource out of the cache.

## Caches

Each type is read from disk **once**, the first time it is asked for, into a cache: a dictionary `id -> resource`. The cache lives for the session.

```gdscript
var effect: Effect = Database.get_resource("effect", 3330202) as Effect   # one resource, or null
var all_effects: Dictionary = Database.get_cache("effect")                # id -> resource
if Database.resource_exists("quest", quest_id):
    ...
```

`get_cache` returns the real dictionary, not a copy. Code that adds a resource to it by hand (a test, a resource that exists only in memory) makes the database see it until the session ends.
`get_list_for_ui(type)` gives `{id, name, description}` entries sorted by name for the pickers of the editor.

The world type has helpers of its own, because worlds are found by scene path as well as by id: `get_world_data_by_scene_path`, `register_world_data` and `reload_world_cache` (which throws the cache away and reads the folder again).
Global variables are found by key (`get_global_variable_by_key`).

## References between resources

A resource that needs another one stores its **id** in an `int` property, or in an `Array[int]`:

```gdscript
@export var faction_id: int = 0
@export var child_effects: Array[int] = []
```

and looks it up when it needs it: `Database.get_resource("effect", child_effect_id)`. This keeps resources independent files (a saved game, a copied file and a merge all work on ids), and means a reference can break:
**deleting a resource does not change the resources that point at it**. A lookup of a deleted id returns `null`, and the code that uses ids checks for that. The editors show a warning for a reference that no longer exists (for example an invalid child effect id).

The editor draws the picker of an id property by the **name of the property**. `PropertySelectorRegistry.PROPERTY_SELECTORS` maps names such as `faction_id`, `effect_id`, `quest_id` or `stat_id` to the type they point at, and the generic property panels (the effect editor, the Unique Object tool) show a picker for the right type without any code of their own.
A new id property is picked up automatically if its name is in that table.

## Built-in resources

Some resources must exist in every project. The database makes them when they are missing, and never overwrites them:

| Resource | Type | Id |
|---|---|---|
| The *Environmental* faction (the faction of destructible scenery) | `faction` | 1000001 |
| The *Player* faction | `faction` | 1000002 |
| The *Health* pool | `pool` | 1000001 |
| The *Shield* pool (absorbs damage before health, never healed) | `pool` | 1000002 |
| The default time, sun, sky and environment configs | `time`, `sun`, `sky`, `enviroment` | 1000001 |
| The default popup (title, text, icon, button) | `popup` | 1000001 |
| The stat groups *Core* and *Hidden*, and a starting set (Primary, Secondary, Offensive, Defensive, Utility) when the project has none | `stat_group` | see `StatGroupDefinition.DEFAULTS` |
| Every core stat (movement speed, attack speed and the rest) | `stat` | see `CoreStatDefaults.DEFINITIONS` |

Each is made and saved as a normal file, so it is the project's afterwards and can be edited. When the file cannot be written (an exported game) the stat groups, the core stats and the Shield pool still exist in the cache for the session.
The ids are constants of `Database` (`ID_ENVIRONMENTAL_FACTION`, `ID_PLAYER_FACTION`, `ID_HEALTH_POOL`, `ID_SHIELD_POOL`, `ID_DEFAULT_POPUP` ...).

## What is not in the registry

| Thing | Where it lives |
|---|---|
| The settings files (Settings, Gameplay Config, UI Settings, Character Creation, Collision Layers) | `res://src/data/config_data/`, one file each, read by their `get_config()` |
| The toggle groups (names that toggle abilities share) | `res://src/data/abilities/toggle_groups/toggle_groups.tres`, through `Database.get_toggle_groups_resource()` |
| Animations, audio, VFX, meshes, model scenes, icons | Folders of files with their own classes: [Asset databases](/advanced/data-and-database/asset-databases) |
| Saved games | See [Save and load](/advanced/save-and-load) |

## Adding a type

A new type of resource is a class that extends `DatabaseResource` and a line in `Database.REGISTRY` with its folder and class. After that `create_resource`, `save_resource`, `get_resource` and the caches work for it, and an id property with a name in
`PropertySelectorRegistry` gets a picker. See [Extending the toolkit](/advanced/extending).

## Things to know

- **Never rename a resource file by hand.** The number is the id (see above). Rename the resource in the editor; its *display name* is a field, not the file name.
- **A resource is shared, not copied.** `get_resource` returns the one object in the cache. Code that wants to change a resource for one entity only must duplicate it with `duplicate(true)`.
- **The registry type for environment configs is spelled `"enviroment"`** in the code. Use it as it is.
