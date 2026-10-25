# Spawners

::: tip Built
Everything the first design of this page asked for is built now: see [Spawners](/basic/world/spawners) (the three modes, the paint tools, events, conditions and the trigger). What is **not** built yet is below: faction or behaviour settings of the spawner itself (what an NPC that spawns here is and what it does). The conditions (hours, weather, an event's conditions) are built: see [Spawners](/basic/world/spawners#conditions-of-a-spawner).
:::

A **spawner** makes the world fill itself: you describe **where** something can appear, **what** can appear, and **how often**, and the toolkit places it for you and keeps the place alive. It will cover both of the things a world is full of:

- **NPCs**: the wolves of a forest, the bandits of a road, the fish of a lake.
- **Interactable nodes**: the herbs of a meadow, the ore of a mountain, the trees of a wood (see [gathering nodes](/basic/entities/interaction-types#gather)).

## Where: areas and painted terrain

A spawner lives in an **area**. There will be two ways to make one:

| Way | What it is |
|---|---|
| **A volume** | A shape you place in the 3D view (a box, a sphere, a cylinder): everything inside it counts |
| **Painted terrain** | You **paint** the ground with a brush: a mask of where things may appear. This is the way for a forest edge, a riverbank or a mountain ridge, which are not boxes. It belongs to the [terrain tool of the World Builder](/planned/world-builder) |

The area can be made to **avoid** places: water, steep ground, the inside of a [trigger area](/basic/world/trigger-areas) that is a town, the spot next to a player.

## What: spawn tables (built)

The tables are built: see [Spawn tables](/basic/world/spawn-tables). A spawner has a **spawn table**, much like a [loot table](/basic/items/loot-tables):

| Field | What it does |
|---|---|
| **Entries** | The NPCs or the nodes that can appear, each with a **weight** |
| **Level range** | For NPCs: the level they appear at, or a range |
| **Group size** | How many appear at once: a lone wolf, a pack of three to five |
| **Faction, behaviour** | What an NPC that spawns here is and what it does (a patrol, a sleep, a wander) |

## How often: respawn and limits

| Setting | What it does |
|---|---|
| **Maximum in the area** | The most that may stand there at once (a density) |
| **Respawn time** | How long after something dies or is used up before a new one may appear. Can be a range |
| **Not while a player is near** | Nothing appears in front of the player's eyes; it appears out of sight and out of range |
| **Despawn when far** | What nobody is near can leave again, so a world full of spawners does not cost anything when nobody is there |
| **Conditions** | Only at night, only in the rain, only while a quest is running: the same [conditions](/basic/shared-systems/conditions) events use |
| **Saved** | Whether what stands in the area, and what is waiting to come back, is kept in the save |

## How it fits what exists

- A spawner makes the same **uniques** the [Add Object tool](/basic/world/add-object) places by hand, so everything about an NPC or an object (loot, behaviour, quests that count its death) works for what a spawner makes.
- A [gathering node](/basic/entities/interaction-types#gather) already comes back by itself on a timer. A spawner will take over the job of **placing** the nodes and choosing which one appears where.
- [Encounters](/basic/world/encounters) stay for hand-made groups with a story (a camp that fights together). A spawner is for the living world around them.

## What is there today

- The *Spawn Entity* and *Spawn Interactable* [event actions](/basic/events-and-quests/event-actions) put one thing in the world when an event runs: the building block.
- An NPC (a [unique](/basic/world/uniques)) can have a **respawn timer** and an encounter can respawn its group.
- A gathering node can respawn itself in place.

## Decided

- **One Spawner node with three modes.** **Point**: one place, one spawn at a time (a boss spot, a random herb or ore, a loot spot, anything inside a building). **Volume**: a shape of the node (a box, sphere or cylinder); things appear at random places inside it, snapped down to the floor (caves, dungeon rooms). **Painted**: the node is the handle and a brush paints the ground it works on (forests, meadows, riverbanks).
- **Spawn tables** are a database type in the World category, like loot tables: weighted entries (an NPC with a level range and a group size, an interactable, a dropped item, some money, a loot table roll, another table, or nothing). A spawn can be a **group** that fights together as an [encounter](/basic/world/encounters).
- **Saving** keeps the state of each spawner (what stands where, when the next comes back), not every spawned thing.
- **Painted areas fill near the player** and empty when far, so a huge forest costs nothing while nobody is there.
- A thing comes back in the same kind of place it left (no "respawn somewhere else" setting).
- **Encounters stop being nodes**: an NPC is given an encounter in its own settings, and the encounter is a record you can find in the Uniques list.
