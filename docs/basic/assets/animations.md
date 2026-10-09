# Animations

The **animation library** holds the animations of the game, sorted by **entity type**: one set for `humanoid`, another for `monster`, `humanoid_female` and so on. **Assets > Animations** lists the [entity types](/basic/types-and-groups/entity-types) and edits the **animation map** of the selected one, which says which animation plays for walking, running, blocking, dying and the rest.

The animations are files under `res://src/data/animations/`:

```text
animations/
  humanoid/                         an entity type
    animation_map.tres              which animation plays for what (made for you)
    core/                           a package
      movement/walk/                a category and a subcategory
        walk_f.res  walk_b.res ...  the animations
      combat_system/block/
      death/   interact/
    ability_animations/             another package
      casting/  spell_cast/  special_attack/  aim/  reload/
      weapon/1h_weapon_r/           animations for one kind of weapon
    social/
      emotes/  actions/  random/talk/
    status_effects/
  humanoid_female/                  another entity type
```

The demo has `humanoid`, `humanoid_male` and `humanoid_female`.

## Packages

The packages are fixed; you fill their folders.

| Package | Categories | What it is for |
|---|---|---|
| **core** | movement, combat system, death, interact | What every entity needs: idles, walk and run in eight directions, crouch, sprint, strafe, turn, jump, fall, landing, swim; combat idle, block, dodge, hit, sheathe and unsheathe; death; using an object |
| **ability_animations** | casting, special attack, spell cast, weapon, aim, reload | What an [ability](/basic/abilities-and-effects/abilities) plays: the wind-up of a cast, the release of a spell, a special attack, a weapon swing (a folder for each kind of weapon, with several animations to pick from at random), aiming and reloading |
| **social** | actions, emotes, random | Emotes (picked at random), small actions with a start, a loop and an end, and idle behaviour such as talking |
| **status_effects** | one folder for each effect | What an entity does while it is stunned, frozen, feared and so on: a **start**, a **loop** and an **end** animation |

The way the folders are arranged in a category is one of four patterns: **flat** (animations in the folder), **categorized** (subfolders, each a kind of animation), **flat categorized** (subfolders that each hold several animations, one picked at random), and **three phase** (a start, a loop and an end).

## Parents

An entity type can **inherit** from another. A `humanoid_female` that has no jump animation uses the one from `humanoid`. Choose the **Parent Entity** on the entity type; every animation it does not have of its own is taken from the parent, and the parent's parent after that. This lets one base set serve many body types, and each one overrides only what is different.

## The editor

| Control | What it does |
|---|---|
| The list | The entity types. Select one to edit its map |
| **Settings > Create New Entity** | Makes an entity type: its folders and its `animation_map.tres`. You can pick a parent |
| **Settings > Validate All Animations** | Checks every entity type and tells how many have problems |
| **Settings > Build Animation Library** | Builds the Godot `AnimationLibrary` of one entity type, to look at or to use in your own animation tree |
| **Parent Entity** | The entity type this one inherits from, or none |
| **The map** | One drop-down for each animation: pick the file that plays. The groups are Movement (idles, walk, crouch walk, run, sprint, strafe, turn, crouch turn, jump, fall, landing, swim), Combat System (combat idle, block, dodge, hit, sheathe, unsheathe), Death and Interact Object |

An animation left empty falls back to the parent's.

## Where animations are chosen

- The **Animation type** of an [NPC](/basic/entities/npcs), character or class is an entity type from this library.
- A [weapon class](/basic/equipment-definitions/weapon-class#animation-tags) names the animation tags of a weapon's attack, combat idle, aim and reload.
- An [ability](/basic/abilities-and-effects/abilities) picks the animation it plays from the ability packages.
- A [status effect](/basic/abilities-and-effects/status-effects) can play a looping animation while it lasts.

## See also

- [Model Scenes](/basic/assets/model-scenes): the skeleton the animations are played on.
- [How the animation library is built](/advanced/assets/).
