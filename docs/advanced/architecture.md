# Architecture

A map of the whole toolkit: what lives where, how the game starts, how the big systems fit together, and the habits the code follows. Each system has its own chapter in this section; this page tells you which one to open.

## Two halves

| Path | What it is |
|---|---|
| `res://addons/chroniclenode/` | The **toolkit**: the editor plugin and every reusable runtime system. It knows nothing about your game |
| `res://src/data/` | Your **content**: the resources the editor makes (`.tres`), the asset folders, the configuration. The demo's content is here, so the project runs out of the box |

A rule of thumb: *behaviour* belongs in the addon; *values, content and which preset is active* belong in `src/data/`. The engine is Godot 4.7 with the Forward Plus renderer.

## The addon

```text
addons/chroniclenode/
  plugin.cfg, plugin.gd      the editor plugin (the Database editor, the viewport tools)
  databases/                 Database and the asset libraries
  data_classes/              Resource scripts: what things ARE (abilities, items, events, settings ...)
  runtime_classes/           what RUNS: entities, world, managers, combat, UI-independent systems
  editor_components/         the editors and their dialogs, catalogs and tools
  ui_scenes/                 menus, the HUD, panels, the loading and splash screens
  assets/, test_scenes/      the toolkit's own icons, materials and test scenes
```

`data_classes` and `runtime_classes` are split on purpose: a `*Definition` resource in `data_classes` describes something and is **shared and never changed**; the matching object in `runtime_classes` (an `*Instance`, a manager, an entity) is what runs and holds the state. See [Definitions and instances](/advanced/definitions-and-instances).

## How the game starts

`project.godot` runs [`GameHost.tscn`](/advanced/managers/game-host/game-host). `GameHost` builds the managers, hands them out in a `SystemHub`, and asks the [`TransitionManager`](/advanced/managers/game-host/transition-manager) for the main menu. Everything after that is a transition between three states (`MAIN_MENU`, `CHARACTER_CREATION`, `MAIN_GAME`) or a swap of the world inside the game. The whole story is in [Game host](/advanced/game-host).

## The managers

Almost every class that needs another system takes a `system_hub` and reads it from there, instead of using an autoload or a global.

| Manager | Responsibility | Chapter |
|---|---|---|
| `TransitionManager` | Game states, loading, world swaps, cleanup | [Game host](/advanced/game-host) |
| [`WorldContainer`](/advanced/world/runtime/world-container), [`ObjectRegistry`](/advanced/world/runtime/object-registry) | The loaded world and everything placed in it | [World](/advanced/world/) |
| [`PartyManager`](/advanced/entities/runtime/party-manager) | The party and the player in control; owns the controller and camera | [Entities](/advanced/entities/) |
| [`CombatManager`](/advanced/entity-stats/combat/combat-manager), [`VFXManager`](/advanced/assets/vfx/vfx-manager) | Combat sessions, world effects, damage and healing; visual effects | [Abilities & Effects](/advanced/abilities-and-effects/), [Pooling](/advanced/pooling) |
| [`EventManager`](/advanced/events-and-quests/runtime/event-manager) | Events, quests, quest lines, global variables | [Events & Quests](/advanced/events-and-quests/) |
| [`FactionManager`](/advanced/managers/managers/faction-manager) | Reputation between factions | [Behaviors](/advanced/behaviors/) |
| [`ChronoManager`](/advanced/managers/managers/chrono-manager) | The game clock and the timer pool | [Pooling](/advanced/pooling), [World configs](/basic/world/world-configs) |
| [`AudioManager`](/advanced/managers/managers/audio-manager) | Music, ambience, sound effects, the pooled players | [Assets](/advanced/assets/) |
| [`SettingsManager`](/advanced/game-settings/settings-runtime/settings-manager), [`InputManager`](/advanced/game-settings/camera-and-controller/input-manager) | The player's settings; raw gameplay input | [Game settings](/advanced/game-settings/) |
| [`UIManager`](/advanced/managers/game-host/ui-manager) | The current UI scene, loading screen, fades, popups | [Events & Quests](/advanced/events-and-quests/) |

## The content: the database

Content is `Resource` files. [`Database`](/advanced/data-and-database/database-classes/database) finds them by **type** and **id** (`Database.get_resource("npc", 5295853)`), each type in a folder under `src/data/`, and resources refer to each other by id. See [Data and the database](/advanced/data-and-database/) and the [table of types](/advanced/data-and-database/database-types). The asset libraries (models, meshes, animations, VFX, audio, icons) are folders read by their own classes: [Asset databases](/advanced/data-and-database/asset-databases).

## Entities and their components

[`Entity`](/advanced/entities/runtime/entity) (`CharacterBody3D`) is the base of players, NPCs and pets. It is built from **components** reached through `entity.components`: abilities, effects, stats (with pools, status effects and immunities), inventory and equipment, rig (skeleton, meshes, animations), states (navigation, movement and action state machines), audio, threat, pets. Anything that changes behaviour shared by players and NPCs (facing, movement, states) has to be checked against both. See [Entities](/advanced/entities/) and [Entity Stats](/advanced/entity-stats/).

## What a hit goes through

An ability is used, its targeting is validated, the cost is paid, its use strategy runs, and its effects start on their targets. A damage effect asks the stat system for the numbers, a hit roll may turn it into a miss or a glancing blow, the result goes through the target's mitigation and pools, and the combat manager announces it. The details are in [Abilities & Effects](/advanced/abilities-and-effects/) and [the hit and heal pipeline](/advanced/entity-stats/pipeline).

## The editor plugin

`plugin.gd` makes a main-screen **Database** editor with one sub-editor for each kind of content (`editor_components/editors/<area>/`), an **Add Object** menu in the 3D viewport, and a **Unique Object** panel at the bottom ([World](/advanced/world/)). On enable it sets the project up (main scene, shader parameters, audio buses, input actions). The editors are mostly built **by reflection**: the fields of a resource are its `@export` variables, grouped by `@export_group`, with the `##` comment as the tooltip. Add an export and the editor shows it; override a `_create_control_for_type` to draw it differently. The documentation is built the same way: the class pages of this section are generated from the same comments.

## Conventions worth knowing

- **Pass `system_hub`, do not reach for globals.**
- **Definitions are shared and never changed at run time;** state lives in instances. Resources hold `int` ids to refer to each other.
- **Strategy-as-resource:** a thin host node plus a preset `Resource` that holds the configuration and the state; the host uses a *copy* so state never leaks into the shared file (the camera and controller, the use and target strategies).
- **`@tool` on every script the editor edits,** so it can be instantiated and listed.
- **Pooled things are created by their factory** (effect instances, projectiles, VFX, timers) and returned by the code that borrowed them: [Pooling](/advanced/pooling).
- **Pure logic is pulled into static helpers** ([`FacingMath`](/advanced/game-settings/camera-and-controller/facing-math), [`LookGestureTracker`](/advanced/game-settings/camera-and-controller/look-gesture-tracker), [`FormulaPipeline`](/advanced/shared-systems/formula-support/formula-pipeline), [`HitRules`](/advanced/entity-stats/combat/hit-rules)) so a headless test can run it.
- **Never `load()` a resource in a per-frame or per-event path** unless something keeps it alive.
- **Mouse picking uses `MouseUtility.get_pointer_position()`,** never the viewport's mouse position.
- **Entity facing goes through the `Entity` API,** never a write to `rotation.y`.
- **An action that cannot do its job fails** (and its event with it); it never waits for ever.

## Where to go next

| I want to... | Open |
|---|---|
| Understand the data model | [Definitions and instances](/advanced/definitions-and-instances), [Data and the database](/advanced/data-and-database/) |
| Add my own effect, trigger, action, condition, reward | The *Extending* section of the system's chapter ([Abilities & Effects](/advanced/abilities-and-effects/#extending), [Events & Quests](/advanced/events-and-quests/#extending), [Shared systems](/advanced/shared-systems/)) |
| See how a game boots and changes state | [Game host](/advanced/game-host) |
| See what a save holds and in what order it loads | [Save and load](/advanced/save-and-load) |
| Write a camera or controller | [Game settings](/advanced/game-settings/#camera-controller-and-input) |
