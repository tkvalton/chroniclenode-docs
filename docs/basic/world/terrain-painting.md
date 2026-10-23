# Painting the terrain

The **Textures** and **Colour** groups of the strip on the left of the 3D viewport paint the ground. You paint with the [terrain textures](/basic/assets/terrain-textures) of your library. For the layout of the Terrain mode and the keys, see [Terrain](/basic/world/terrain); the brush (radius, strength, hardness, shapes) is the one in [Sculpting](/basic/world/terrain-sculpting).

## Choosing a texture

The **Textures** section of the **Terrain tab** (next to the Inspector) lists the textures of your library with their previews.

- The menu above the list chooses a **pack**: **All textures**, **No pack** (the textures that belong to none) or one of your packs. A pack is a group you name yourself ("Forest", "Desert", "Dungeon"); a texture joins a pack in the **Pack** section of the [Terrain Textures](/basic/assets/terrain-textures) editor.
- Type in the **filter** to narrow the list by name.
- Click a texture to choose it. The bottom bar shows the one you chose.
- **Refresh** looks again for new textures and packs after you have added some in the Database.

Hover a texture to see its pack, its surface type and how many metres one repeat of its texture covers.

## The painting tools

| Tool | What it does |
|---|---|
| **Paint** | Paints the chosen texture. On a tile that is not painted yet, the first stroke **fills the whole tile** with the texture (it becomes the base layer), then paints on top of it |
| **Erase** | Takes the chosen texture off the ground: what was under it shows. Where nothing else is, the texture with the most paint in the chunk takes over |
| **Replace** | Turns the texture under the mouse **where you start** into the chosen one, only where that texture is. The others stay |
| **Blend** | Softens the borders between textures |
| **Lighten** / **Darken** | Makes the ground lighter or darker, keeping its colour. It paints on the tile's colour map |
| **Tint** | Paints the colour of the bar over the ground (it multiplies the texture's colour; white changes nothing, painting white takes a tint away) |

Lighten, Darken and Tint are on a **colour map**, a picture over the tile that is separate from the textures. They need a painted tile (paint it first). They change the look without changing which texture is where, and they undo on their own.

## Eight textures a chunk

Each chunk of 16 m holds up to **8** textures (the number is set in [Terrain Settings](/basic/game-settings/terrain-settings)). Painting a ninth texture in a chunk **replaces the one with the least paint** there. This is how large terrains stay light enough to draw. If a texture you painted seems to vanish, the chunk was full: turn on the **Layer budget** overlay (top bar). Green is up to 4 textures, yellow 5 or 6, orange 7, red full.

Spread the textures sensibly: a base (grass), a few detail textures, a road and a rock face per area, and you will seldom reach 8.

## Surfaces and footsteps

Each texture has a **surface type** (grass, rock, sand...). A character walking on painted ground makes the footstep sound of the surface under its feet, and effects and spawners can ask what the ground is. Inspect (key 2) shows the surface and textures under the mouse. The [world check](/basic/world/terrain#the-world-check) warns about painted textures that have no surface type.

## Undo

A paint stroke is one undo step: Ctrl+Z gives the weights and the colours back exactly. Escape cancels a stroke in progress.

## Tips

- Paint the **big areas first** with a large soft brush, then add details with a smaller one.
- **Replace** is the way to change a whole texture over a region without redoing the borders.
- If a new tile is grey, paint it, or turn on **Paint new tiles with the chosen texture** in the Tiles tool next time.
- Use a **Scatter** or **Rough** shape with a low strength for natural-looking patches of dirt on grass.
