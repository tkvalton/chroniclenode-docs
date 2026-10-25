# Spawners

A **spawner** (the `Spawner` node) makes things appear in a world and keeps the place alive. It rolls a [spawn table](/basic/world/spawn-tables) and makes what comes up: an NPC, or a group of them, an [interactable](/basic/entities/interactables) (a herb, an ore vein), an item or some money on the ground, a roll of a [loot table](/basic/items/loot-tables), or nothing. When what it made is gone (killed, taken, used up) it waits a while and rolls again.

::: info What is built
The **Point** spawner is built: one place, one thing (or one group) at a time. It is what you want for a boss spot, a guard post, a chest that fills again, the herb in a corner of a cave, anything inside a building. The **Volume** spawner (things appear at random places inside a shape) and the **Painted** spawner (a brush paints where things may appear on the terrain) are planned: see [Planned: spawners](/planned/spawners).
:::

## Placing one

1. Open a world scene and click the **Spawners** button of the 3D toolbar (a circle with a cross).
2. Choose **Point spawner** and click where it goes. A *Spawner* node appears in the *Spawners* container and is selected.
3. In the [Unique Object panel](/basic/world/unique-object-tool) choose its **Spawn table** and set how often it works. A spawner with no table makes nothing and the node shows a warning.

The spawner gets an id and a record in the database ([`UniqueSpawnerData`](/advanced/world/world-data/unique-spawner-data)) as soon as it is in a world scene, like every other [unique](/basic/world/uniques). It is in the **Spawners** list of the [Uniques](/basic/world/uniques) editor.

## Settings

| Field | What it does | Default |
|---|---|---|
| **Spawner name** | A name for you (the Uniques list shows it) | Spawner |
| **Is active** | Whether the spawner works. An event can switch it on and off (planned) | on |
| **Mode** | How the spawner chooses its places. Only *Point* exists today | Point |
| **Spawn table** | What it rolls every time it makes something | none |
| **Respawn min / max** | The seconds between what it made going away and the next one coming. The time is chosen between the two numbers | 60 and 60 |
| **Spawn at start** | Whether the first thing appears at once when the spawner starts working (a player comes near), or only after a respawn time | on |
| **Activation radius** | The spawner only works while a player of the party is this close (metres). `0` = it works everywhere | 80 |
| **Min player distance** | Nothing appears this close to a player, so nothing pops up in front of the party | 12 |
| **Despawn radius** | What stands there when no player is within this distance leaves again (things in a fight stay), so a world full of spawners costs nothing while nobody is there. `0` = it stays | 0 |

## What it makes

The line of the table that comes up decides:

| Line | What appears |
|---|---|
| **NPC** | The NPC at the spawner, at the level of the line. A **group** (*Together* of two or more) stands in a ring round the spawner; with **Fight as one** the group is a new [encounter](/basic/world/encounters) that lives as long as the group does |
| **Interactable** | The object at the spawner, turned like the spawner |
| **Dropped item**, **Dropped money**, **Loot table roll** | The items or money lie on the ground at the spawner (the item level is the level of the world, or else of the player). Needs *Items can lie in the world* in the Gameplay Config |
| **Nothing** | Nothing: the spawner waits a respawn time and rolls again |

When what the spawner made is gone, **the wait begins**: all the NPCs of a group dead, the object freed, the items taken. After the wait the corpses are taken away and the spawner rolls again. A spawner that is switched off makes nothing but leaves what stands there.

## Saving

The game saves the **state of each spawner**, not every thing it made: for each place whether it is alive, empty or waiting (and how long is left), and what it made. When a game is loaded the spawner makes the same thing again when a player is near, and a wait goes on for the time that was left. What a spawner made is **not** saved with the other NPCs and objects, so nothing is made twice.

## Tips

- A spawner needs a player near it (the activation radius) to work, so a spawner you walk away from stops. Use the *despawn radius* for big worlds.
- For an NPC that always stands in the same place and comes back, a spawner with one NPC line and a respawn time is the way: it also fills the place when the party arrives.
- Make a table of one line of an interactable with a *Nothing* line next to it, and you have a herb that is sometimes there.

## See also

- [Spawn tables](/basic/world/spawn-tables), [Encounters](/basic/world/encounters), [Placing objects](/basic/world/add-object), [Zones](/basic/world/zones).
- [How spawners are built](/advanced/world/spawners).
