# Terrain streaming

A terrain normally keeps **every tile** in memory. That is right for a world up to a few kilometres: a world of 100 tiles (2.5 km a side) holds about 27 MB of ground data and loads in under a second. For a bigger world turn on **Streaming** on the terrain node: the game then keeps only the tiles **round the party** in memory.

## Turning it on

Select the **Terrain** node of the world scene and open **Streaming** in the Inspector:

| Field | What it does | Default |
|---|---|---|
| **Streaming** | Load and unload the tiles as the party moves (in the game; the editor always loads all the tiles, so you can work anywhere) | off |
| **Stream load distance** | Tiles within this distance (metres) of a player are loaded | 400 |
| **Stream unload distance** | Tiles farther than this from every player are unloaded again. Always at least a quarter of a tile more than the load distance, so a tile at the border is not loaded and unloaded again and again | 640 |

The distances must be bigger than what you see and what the party and the NPCs do: at least the **collision radius** of the terrain (96 m) plus a tile, and the view distance of your world if the far ground is drawn from the tiles (a tile that is not loaded is not drawn).

## What streams and what does not

| Streams (in memory only near the party) | Stays loaded |
|---|---|
| The heights, the holes, the painting, the not-walkable cells, the paint layers (zones and spawners), the foliage amounts and the baked navigation of a tile | The placed NPCs, interactables and dropped items, the zone volumes and everything else in the scene |

- The **first look** loads the wanted tiles at once, so the party never starts on nothing. After that tiles are read in the background and put in **one at a time**, so walking does not hitch (a look costs about 0.2 ms on average and 4 ms at the worst in a test; the whole walk is in [the numbers](#the-numbers)).
- A tile that is **not loaded** answers "no ground": no height, not solid. An NPC standing on it stops (the same rule as for ground beyond the collision radius) and wakes when the tile loads. Where the terrain has the tile in its manifest the ground still **counts as covered**, so a place that is only not loaded is not mistaken for open air.
- Painted [zones](/basic/world/zones) and [spawners](/basic/world/spawners) are part of the tile: they come back with it. A Painted spawner is only filled where its tiles are loaded.
- The textures a tile uses are listed in the **manifest** (they are written when the terrain is saved in the editor), so the texture library is built once at the start. A terrain saved before this lists none: save it again in the editor, or the library is rebuilt the first time a tile with a new texture arrives (a short pause).

## The numbers

From `tests/benchmarks/terrain_streaming_bench.gd` (a world of 10 x 10 tiles, headless, ground data only; the drawing adds the textures and meshes of the tiles):

| | Every tile loaded | Streamed (load 400 m, unload 640 m) |
|---|---|---|
| Tiles in memory | 100 | 16 |
| Time to load at the start | 0.72 s | 0.08 s |
| Memory of the ground data | 26.9 MB | 4.2 MB |
| Walking 1 km | | 255 looks, 0.22 ms on average, 4.2 ms at the worst; 28 tiles loaded and 12 unloaded |

## Tips

- Turn it on only for a world that needs it: a world of a few tiles gains nothing.
- Test the world with the party at the edge of the world and at a portal: a place the party is teleported to loads at once on the next look (a quarter of a second).
- The things that stand in the world are not streamed. A world with thousands of placed NPCs still needs the [behaviour LOD](/basic/game-settings/gameplay-config) of the Gameplay Config.

## See also

- [Terrain](/basic/world/terrain), [Terrain navigation](/basic/world/terrain-navigation), [Zones](/basic/world/zones).
- [How terrain streaming is built](/advanced/world/terrain-streaming).
