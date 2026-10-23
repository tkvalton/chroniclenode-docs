# Terrain Navigation

NPCs, companions and the party walk on a **navigation mesh**: a simplified copy of the ground that says where an entity can go. The terrain **bakes it for you**, one tile at a time, and saves it with the tiles. You bake from the **Terrain tab**, you can mark ground that nobody should walk on, and the world check tells you when the navigation is out of date.

## Baking

Open the **Terrain tab** in the editor (the Terrain mode must be on). The **Navigation** section has:

| Button | What it does |
|---|---|
| **Bake navigation** | Bakes the tiles whose ground changed since the last bake, and tiles that were never baked |
| **Bake all tiles** | Bakes every tile again |

Under the buttons a line says where you are: **Not baked yet**, **N of M tiles out of date**, or **Up to date**.

While it bakes, the top bar of the 3D view shows a **progress bar** with what is being baked (the tile and the entity size) and a **Cancel** button. The bake runs in the background, so you can keep working; Cancel stops after the mesh being baked. Every finished mesh is saved at once, so a cancelled bake keeps what it did.

::: tip How long it takes
Each tile is baked once for every distinct entity size. On hilly ground at the default settings a mesh takes about a third of a second; making the cell size smaller (0.25) takes about five times longer.
:::

### Out of date

The navigation of a tile goes **out of date** when you change the ground there: sculpting, holes, not-walkable ground. The tiles **next to it** go out of date too, because a bake looks a few metres into its neighbours so that the meshes of two tiles meet exactly at the border. The Terrain tab and the [world check](/basic/world/terrain#the-world-check) say so; bake again before you test the game.

Undoing an edit does not make the navigation current again. Bake once you are happy with the ground.

## Not-walkable ground

Some ground is not walkable although the slope allows it: a fenced garden, a lake bed, a ledge you do not want NPCs on. The **Navigation** row of the tool strip has two tools:

| Tool | What it does |
|---|---|
| **Block walking** | Marks ground as not walkable |
| **Allow walking** | Makes it walkable again |

Both use the brush radius only, and work in cells of 2 m (the same cells as holes). **Ctrl** at the start of a stroke does the opposite, and a stroke is one undo step. The ground stays: it is drawn and solid, only the navigation leaves it out. Marked cells show **orange** with the **Not walkable** button of the top bar. The change takes effect at the next bake.

Steep ground (more than the **Max slope**) and **holes** have no navigation either; you do not need to mark them.

## What is shown

Two buttons of the top bar show navigation in the editor only:

| Button | Shows |
|---|---|
| **Not walkable** | The cells you marked, in orange |
| **Navigation mesh** | The baked mesh, in green, over the ground. Where it stops (cliffs, holes, marked cells, a margin along walls) is where nobody walks |

Both have keys you can set in **Hotkeys**.

## Entity sizes

A big creature cannot squeeze through a gap a rat fits through, so the navigation is baked for the **collision shape** sizes of your entities:

| Collision shape | Capsule (radius x height) |
|---|---|
| Tiny | 0.2 x 0.7 m |
| Small | 0.3 x 1.2 m |
| Normal | 0.4 x 1.8 m |
| Large | 0.6 x 2.8 m |
| Huge | 2.0 x 5.0 m |

The baker rounds the radius up to a whole cell, so shapes whose radius rounds to the same value **share one bake**: at the default cell size of 0.5 the five shapes need only three meshes (Tiny, Small and Normal together; Large; Huge). In the game each entity's navigation agent takes the size of its shape and walks on the navigation made for it. Which shapes are baked is chosen in the [Terrain Settings](/basic/game-settings/terrain-settings#navigation).

The meshes are saved in a `navigation` folder next to the tile files and are listed in the terrain manifest, so an export includes them.

## Settings

In **Game Settings > Terrain Settings > Navigation**:

| Setting | Meaning |
|---|---|
| **Navigation cell size** | How fine the mesh is (0.5 or 0.25 m). Changing it makes the baked navigation out of date |
| **Navigation max slope** | The steepest ground an entity walks (degrees) |
| **Navigation max climb** | The highest step an entity climbs without a ramp (metres) |
| **Navigation tiny / small / normal / large / huge** | Which entity sizes get a mesh. Leave **Normal** ticked: it is the navigation the world's own questions ("can something stand here?") use |

When you change which sizes are ticked and bake, the meshes of sizes you took out are deleted.

## The world check

| Finding | What it means |
|---|---|
| **Note:** the navigation was never baked | NPCs cannot walk on this ground. Bake it |
| **Warning:** the navigation of N tiles is out of date or missing | Ground changed since the bake, or a size has no mesh. Bake again |
| **Warning:** every cell of a tile is marked not walkable | Nothing can walk there |

## What is not included yet

- **Objects and buildings** are not part of the bake: the navigation is made from the ground only. An NPC can path through the footprint of a house; block the ground under it with **Block walking** until objects join the bake.
- **Water, lava and other movement volumes** do not change the navigation yet.
- If you already bake your own `NavigationRegion3D` for ground that the terrain covers, do not use both: the two meshes would overlap.
