# Animations

The **animation library** holds the animations of the game, sorted into **animation packs**, one for each **entity type**: one set for `humanoid`, another for `monster`, `humanoid_female` and so on. **Entity Assets > Animations** lists the packs ([entity types](/basic/types-and-groups/entity-types)) and edits the **animation map** of the selected one, which says which animation plays for walking, running, blocking, dying and the rest.

The animations are files under `res://src/data/animations/`:

```text
animations/
  humanoid/                         an animation pack (one for each entity type)
    animation_map.tres              which animation plays for what (made for you)
    core/                           a section
      movement/walk/                a category and a subcategory
        walk_f.res  walk_b.res ...  the animations
      combat_system/dodge/
      death/   interact/
    weapon_animations/              the weapon section: one folder for each Weapon Profile
      one_hand/                     a weapon profile
        attack/  stance/  block/    its clips by role
      unarmed/
    ability_animations/             another section
      casting/  spell_cast/  special_attack/
    social/
      emotes/  actions/  random/talk/
    status_effects/
  humanoid_female/                  another animation pack
```

The demo has `humanoid`, `humanoid_male` and `humanoid_female`.

## Words used here

| Word | What it means |
|---|---|
| **Animation pack** | The whole set of animations of one entity type: a folder under `src/data/animations/` |
| **Parent pack** | The pack another pack inherits from (see [Parents](#parents)) |
| **Section** | One of the folders of a pack (the table below) |
| **Weapon profile** | One way of fighting (One Hand, Bow, Unarmed ...), with a folder in the weapon section of every pack. See [Weapon Profiles](/basic/entity-assets/weapon-profiles) |

## Sections

The sections are fixed; you fill their folders. The folders of the weapon section are made by the [weapon profiles](/basic/entity-assets/weapon-profiles).

| Section | Categories | What it is for |
|---|---|---|
| **core** | movement, combat system, death, interact | What every entity needs: idles, walk and run in eight directions, crouch, sprint, strafe, turn, jump, fall, landing, swim (also up and down), fly; dodge, hit, sheathe and unsheathe; death; using an object |
| **weapon_animations** | one folder for each [weapon profile](/basic/entity-assets/weapon-profiles) | What a weapon does: its attacks, its combat idle (stance), its block, and for a ranged weapon its aim and reload |
| **ability_animations** | casting, special attack, spell cast | What an [ability](/basic/abilities-and-effects/abilities) plays: the wind-up of a cast, the release of a spell, a special attack. (An ability that uses *the weapon in hand* plays the weapon section.) |
| **social** | actions, emotes, random | Emotes (picked at random), small actions with a start, a loop and an end, and idle behaviour such as talking |
| **status_effects** | one folder for each effect | What an entity does while it is stunned, frozen, feared and so on: a **start**, a **loop** and an **end** animation |

The way the folders are arranged in a category is one of four patterns: **flat** (animations in the folder), **categorized** (subfolders, each a kind of animation), **flat categorized** (subfolders that each hold several animations, one picked at random), and **three phase** (a start, a loop and an end).

::: tip Packs made before the weapon section
A pack from before weapon profiles has the old folders `ability_animations/weapon`, `aim` and `reload`, and the combat idle and block in `core/combat_system`. They keep working. [Weapon Profiles](/basic/entity-assets/weapon-profiles#moving-from-the-old-tags) has two buttons that move them into the profile folders.
:::

## Parents

A pack can **inherit** from another. A `humanoid_female` that has no jump animation uses the one from `humanoid`. Choose the **Parent Pack** on the pack; every animation it does not have of its own is taken from the parent, and the parent's parent after that. This lets one base set serve many body types, and each one overrides only what is different. The weapon section works the same way: a pack with no `attack` clips in `one_hand` plays the parent's.

## The editor

| Control | What it does |
|---|---|
| The list | The packs. Select one to edit its map |
| **Settings > Create New Pack** | Makes a pack: its folders (including the folders of every [weapon profile](/basic/entity-assets/weapon-profiles)) and its `animation_map.tres`. You can pick a parent |
| **Settings > Validate All Animations** | Checks every pack and tells how many have problems |
| **Settings > Build Animation Library** | Builds the Godot `AnimationLibrary` of one pack, to look at or to use in your own animation tree |
| **Parent Pack** | The pack this one inherits from, or none |
| **The map** | One drop-down for each animation: pick the file that plays. The groups are Movement (idles, walk, crouch walk, run, sprint, strafe, turn, crouch turn, jump, fall, landing, swim, fly: each fly animation that is empty plays the swimming one, see [Flying](/basic/world/flying#animations-of-flying)), Combat System (dodge, hit, sheathe, unsheathe, and the old combat idle and block lists), Death and Interact Object |

An animation left empty falls back to the parent's. Opening the tab also makes the folders of the weapon profiles in every pack that lacks them.

## Trigger animations

A [trigger tag](/basic/entity-stats/trigger-tags#entity-reactions) with **Has an animation** adds a list to every pack. They are in the **Triggers** section of the map (above the others), one block for each trigger:

- The **clips** are files in the folder `core/combat_system/triggers/` of the pack (put them there like any animation). Tick the clips a trigger plays; **one is picked at random** each time.
- A trigger that **depends on the weapon** has a list for *unarmed* and one for *each weapon profile* of the project. The creature plays the list of the weapon it holds, else the *unarmed* one, else the trigger's own list.
- A creature with no clip for a trigger plays the clip of the trigger it **falls back to** (*Parry* uses *Dodge*), and then nothing.
- A pack without a list for a trigger takes it from its **parent**.

The animations of triggers are stored in the map by the **slot name** of the trigger (`parry`, `parry/one_hand`): renaming a trigger's slot makes the maps lose their lists.

## Where animations are chosen

- The **Animation type** of an [NPC](/basic/entities/npcs), character or class is a pack from this library.
- A [weapon class](/basic/equipment-definitions/weapon-class#animation-tags) or an NPC picks a [weapon profile](/basic/entity-assets/weapon-profiles): the attack, stance, block, aim and reload clips of the weapon.
- An [ability](/basic/abilities-and-effects/abilities) picks the animation it plays: a casting or special attack from the ability section, or *the weapon in hand*.
- A [status effect](/basic/abilities-and-effects/status-effects) can play a looping animation while it lasts.

## See also

- [Weapon Profiles](/basic/entity-assets/weapon-profiles): the folders and clips of each way of fighting.
- [Model Scenes](/basic/entity-assets/model-scenes): the skeleton the animations are played on.
- [How the animation library is built](/advanced/assets/).
