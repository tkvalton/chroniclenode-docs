# Spawners

A **spawner** (the `Spawner` node) makes things appear in a world and keeps the place alive. It rolls a [spawn table](/basic/world/spawn-tables) and makes what comes up: an NPC, or a group of them, an [interactable](/basic/entities/interactables) (a herb, an ore vein), an item or some money on the ground, a roll of a [loot table](/basic/items/loot-tables), or nothing. When what it made is gone (killed, taken, used up) it waits a while and rolls again.

A spawner has one of three **modes**. They differ only in **where** things appear; the table, the respawn times and the rest work the same.

| Mode | Where things appear | Use it for |
|---|---|---|
| **Point** | At the spawner itself: one place, one thing (or one group) at a time | A boss spot, a guard post, a chest that fills again, the herb in a corner of a cave |
| **Volume** | At random places **inside the shape** of the spawner (a box you resize), on the floor | A cave, a dungeon room, the inside of a building, any space that is not terrain |
| **Painted** | On **ground you paint** with a brush, near the players | A forest, a meadow, a riverbank, a mountain ridge: places that are not boxes |

## Placing one

1. Open a world scene and click the **Spawners** button of the 3D toolbar (a circle with a cross).
2. Choose **Point spawner**, **Volume spawner** or **Painted spawner** and click where it goes. A *Spawner* node appears in the *Spawners* container and is selected. A volume spawner comes with a box shape (10 x 4 x 10 m): resize it with the gizmo, or replace it with a sphere, cylinder or capsule.
3. In the [Unique Object panel](/basic/world/unique-object-tool) choose its **Spawn table** and set how often it works. A spawner with no table makes nothing and the node shows a warning. The **Mode** of a placed spawner can be changed there too.
4. For a painted spawner, paint its ground: see [Painting a spawner](#painting-a-spawner).

The spawner gets an id and a record in the database ([`UniqueSpawnerData`](/advanced/world/world-data/unique-spawner-data)) as soon as it is in a world scene, like every other [unique](/basic/world/uniques). It is in the **Spawners** list of the [Uniques](/basic/world/uniques) editor.

## Settings

| Field | What it does | Default |
|---|---|---|
| **Spawner name** | A name for you (the Uniques list shows it) | Spawner |
| **Is active** | Whether the spawner works. An event can switch it on and off (planned) | on |
| **Mode** | How the spawner chooses its places: *Point*, *Volume* or *Painted* | Point |
| **Spawn table** | What it rolls every time it makes something | none |
| **Max alive** | *Volume* only: how many things the spawner keeps alive at once (each is a place of the volume; a group counts as one) | 1 |
| **Density** | *Painted* only: how many things stand on every 1000 square metres of painted ground. A chunk of 16 x 16 m that is all painted is 256 m2, so a density of `4` gives about one thing a chunk. Less than one thing a chunk means some chunks have none | 4 |
| **Respawn min / max** | The seconds between what it made going away and the next one coming. The time is chosen between the two numbers | 60 and 60 |
| **Spawn at start** | Whether the first thing appears at once when the spawner starts working (a player comes near), or only after a respawn time | on |
| **Max slope** | *Volume* and *Painted*: the steepest ground (degrees) a thing may appear on | 45 |
| **Only walkable** | *Volume* and *Painted*: NPCs only appear where they can walk (baked navigation). A world with no baked navigation ignores this | on |
| **Paint colour** | *Painted*: the colour of the spawner on the ground while you paint it (a colour of its own is chosen when the spawner is made) | |
| **Activation radius** | The spawner only works while a player of the party is this close (metres). For a *Volume* spawner the distance is counted from its shape, for a *Painted* one from every chunk. `0` = it works everywhere (a painted spawner then works 80 m round the players) | 80 |
| **Min player distance** | Nothing appears this close to a player, so nothing pops up in front of the party (a Volume or Painted spawner looks at the place it picks and tries another) | 12 |
| **Despawn radius** | What stands there when no player is within this distance leaves again (things in a fight stay), so a world full of spawners costs nothing while nobody is there. `0` = it stays. A *Painted* spawner always empties the chunks that are far: a chunk is let go when no player is within the despawn radius, or 1.25 times the activation radius when this is `0` | 0 |

## Painting a spawner

A **Painted** spawner is a handle: the node says *what* appears (its table and rules), and the **ground you paint for it** says *where*. The paint is another layer of the terrain, like the [zones](/basic/world/zones): cells of 4 m, kept in the tiles, saved with them.

1. Place a **Painted spawner** and set its table and density in the Unique Object panel.
2. Open the **Terrain** tools and choose **Paint spawner**, **Fill spawner** or **Erase spawner** (the last three buttons of the tool column). The **Spawners bar** appears under the viewport with the Painted spawners of this world: click the one to paint, each in its own colour. The ground shows the paint in that colour: choosing a spawner tool turns on the **Spawners** button of the view bar (a circle with three dots) and turns the *Zones* button off, because the two paints are shown one at a time. You can set a key for **Show or hide the painted spawners** in the Hotkeys dialog of the terrain tools.
3. Paint: the **Radius** of the options bar sets the brush. **Fill spawner** fills whole squares of the grid (the **Square** number snaps to 4, 16, 64 or 256 m). Ctrl held when a stroke starts does the opposite (paint erases, erase paints). One stroke is one undo action.

A cell holds **one** spawner, so two painted spawners cannot share the same ground: paint them side by side, or give one spawner a table that holds both (a table can hold other tables).

### How a painted spawner fills the ground

- Near each player (the **activation radius**) the painted ground is cut into **chunks** of 16 x 16 m. Every chunk that has paint of the spawner gets its **places**: the density over the painted part of the chunk (a chunk that is half painted gets half as many). The same chunk always gets the same number of places.
- Each place rolls the table and puts what comes up at a random painted spot of the chunk, on the ground. It follows the same rules as the other modes: the respawn time, the minimum distance from the players, the slope, walkable ground.
- When the players leave, the chunk is **closed**: what stands there is taken away. What was **killed** is remembered: when the chunk opens again that place still waits for the rest of its respawn time, so a cleared camp stays cleared for a while.
- If you erase the paint, the chunks of it close and what stood there leaves.

## What it makes

The line of the table that comes up decides:

| Line | What appears |
|---|---|
| **NPC** | The NPC at the spawner, at the level of the line. A **group** (*Together* of two or more) stands in a ring round the spawner; with **Fight as one** the group is a new [encounter](/basic/world/encounters) that lives as long as the group does |
| **Interactable** | The object at the spawner, turned like the spawner |
| **Dropped item**, **Dropped money**, **Loot table roll** | The items or money lie on the ground at the spawner (the item level is the level of the world, or else of the player). Needs *Items can lie in the world* in the Gameplay Config |
| **Nothing** | Nothing: the spawner waits a respawn time and rolls again |

When what the spawner made is gone, **the wait begins**: all the NPCs of a group dead, the object freed, the items taken. After the wait the corpses are taken away and the spawner rolls again. A spawner that is switched off makes nothing but leaves what stands there.

## Events and conditions

A spawner is a unique of the world, so [events](/basic/events-and-quests/events), [quests](/basic/events-and-quests/quests) and conditions can work with it by its id (choose it from the list of the **Spawners** of the Uniques editor).

| What | Kind | What it does |
|---|---|---|
| **Set Spawner Active** | action | Turns a spawner **on**, **off** or flips it. An off spawner makes nothing new; what it made stays. The state is saved |
| **Reset Spawner** | action | The spawner starts over: what it made is taken away (or left standing and forgotten), every place is empty, and it rolls again at once, with no respawn time. The waits of what was killed are forgotten |
| **Spawn From Table** | action | Rolls a [spawn table](/basic/world/spawn-tables) once or more at a place and makes what comes up: an ambush, a pack out of a cave, loot from the ceiling. *Rolls* sets how many times, *Spread radius* how far round the place. The things are ordinary things of the world: no spawner keeps them and the game saves them |
| **Spawner** | trigger | Fires when the spawner **makes something**, when what it made is **cleared** (all the NPCs of a group dead, the object used up, the items taken), or when it is **turned on** or **off**. "Clear the wolves" is a quest objective with the *cleared* event |
| **Spawner Active** | condition | The spawner is on (or off) |
| **Spawner Alive Count** | condition | How many things the spawner made are standing: NPCs alive, objects there, items that lie. Compare it with a number: "none left" is a count of 0 |

A spawner that an event switched off keeps that state in the save: switching it on again is the way to let a place come back to life when a quest step needs it (the bandit camp fills only after the letter is read).

## Deleting a spawner

Deleting a **Painted** spawner from the scene also takes its **paint** off the ground (the cells of the terrain painted for it). Undoing the delete brings back the node, not the paint: paint it again.

## Saving

The game saves the **state of each spawner**, not every thing it made: for each place whether it is alive, empty or waiting (and how long is left), and what it made (a Volume spawner also where). When a game is loaded the spawner makes the same thing again when a player is near, and a wait goes on for the time that was left. A **Painted** spawner saves only what **waits**, by chunk: the paint itself is in the terrain and the rest is made again near the players. What a spawner made is **not** saved with the other NPCs and objects, so nothing is made twice.

## Tips

- A spawner needs a player near it (the activation radius) to work, so a spawner you walk away from stops. Use the *despawn radius* for big worlds.
- A volume spawner finds the floor with a ray from the top of its shape down, so the shape should fit the room: a box much bigger than the cave also has places in the rock that find no floor (they are skipped).
- A Painted spawner needs the terrain of the world. Paint only inside tiles that exist.
- For an NPC that always stands in the same place and comes back, a spawner with one NPC line and a respawn time is the way: it also fills the place when the party arrives.
- Make a table of one line of an interactable with a *Nothing* line next to it, and you have a herb that is sometimes there.

## See also

- [Spawn tables](/basic/world/spawn-tables), [Encounters](/basic/world/encounters), [Placing objects](/basic/world/add-object), [Zones](/basic/world/zones).
- [How spawners are built](/advanced/world/spawners).
