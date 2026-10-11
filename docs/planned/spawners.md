# Spawners

::: warning Not built yet
This page describes a planned feature. Today everything that lives in the world is **placed by hand**, one NPC or one object at a time, and what comes back after it is gone is decided by the thing itself (an [encounter](/basic/world/encounters) that respawns its group, an NPC with a respawn timer, a [gathering node](/basic/entities/interactables#gather) that fills up again).
:::

A **spawner** makes the world fill itself: you describe **where** something can appear, **what** can appear, and **how often**, and the toolkit places it for you and keeps the place alive. It will cover both of the things a world is full of:

- **NPCs**: the wolves of a forest, the bandits of a road, the fish of a lake.
- **Interactable nodes**: the herbs of a meadow, the ore of a mountain, the trees of a wood (see [gathering nodes](/basic/entities/interactables#gather)).

## Where: areas and painted terrain

A spawner lives in an **area**. There will be two ways to make one:

| Way | What it is |
|---|---|
| **A volume** | A shape you place in the 3D view (a box, a sphere, a cylinder): everything inside it counts |
| **Painted terrain** | You **paint** the ground with a brush: a mask of where things may appear. This is the way for a forest edge, a riverbank or a mountain ridge, which are not boxes. It belongs to the [terrain tool of the World Builder](/planned/world-builder) |

The area can be made to **avoid** places: water, steep ground, the inside of a [region](/basic/world/regions) that is a town, the spot next to a player.

## What: spawn tables

A spawner has a **spawn table**, much like a [loot table](/basic/items/loot-tables):

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
- A [gathering node](/basic/entities/interactables#gather) already comes back by itself on a timer. A spawner will take over the job of **placing** the nodes and choosing which one appears where.
- [Encounters](/basic/world/encounters) stay for hand-made groups with a story (a camp that fights together). A spawner is for the living world around them.

## What is there today

- The *Spawn Entity* and *Spawn Interactable* [event actions](/basic/events-and-quests/event-actions) put one thing in the world when an event runs: the building block.
- An NPC (a [unique](/basic/world/uniques)) can have a **respawn timer** and an encounter can respawn its group.
- A gathering node can respawn itself in place.

## Still to decide

- Whether an area can hold **several spawners** (a mixed forest) or one spawner has several tables.
- How the **painted mask** is stored (a texture of the area, or paint data on the terrain itself).
- Whether spawned things are saved one by one, or only the **state of the spawner** (how many, how long until the next).
