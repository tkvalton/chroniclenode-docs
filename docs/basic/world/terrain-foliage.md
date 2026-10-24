# Foliage tools

The **Foliage** group of the strip on the left of the 3D viewport paints **more or less of an entry** of the [foliage library](/basic/assets/foliage): grass, weeds, pebbles, bushes, trees. The terrain draws it in the editor and in the game.

## Where it comes from

There are two sources of what grows on the ground, and they add up:

1. **The textures.** A [terrain texture](/basic/assets/terrain-textures#ground-clutter) lists the entries that grow on it, with a **weight** each. Paint grass and the tufts appear; paint a path over it and they go. Nothing to place by hand.
2. **Your brush.** On top of the textures, the foliage tools paint **more** of an entry (even where no texture grows it, a lone tree on bare rock) or **less** (a clearing in the grass).

Every cell of 2 m remembers one number for each entry you painted on it: **as the textures give** (the start), more, or less down to none. The scatter reads it, so the same ground always gives the same plants. Nothing is stored for each plant.

## The tools

Turn the terrain mode on, choose a foliage tool and pick the entry in the **foliage bar** that shows above the tool's settings. The bar has the ground scatter and the foliage with their pictures, a filter and a menu for the kind.

| Tool | What it does |
|---|---|
| **Add foliage** | Paints more of the chosen entry where you go. Ctrl at the start of the stroke takes it away |
| **Remove foliage** | Takes the chosen entry away where you paint (also what a texture grows). Ctrl at the start adds it |
| **Reset foliage** | Puts the chosen entry back to what the textures give: what you painted by hand is forgotten |

The **paint tools** have a box in their bar, **Clear hand-placed foliage** (on at first): where you paint a texture, the foliage you painted by hand goes back to what the textures give, so the clutter of the new texture grows there. Turn it off to keep a tree you placed when you repaint the ground round it. The paint and the clearing are one undo action.

The tools work on **one entry at a time**, the one you chose. Radius, strength and hardness are the ones of the bar at the bottom, and the **shape** of the [Cursor bar](/basic/world/terrain-sculpting#the-cursor-ring-colour-and-brush-shape) works here too (a square brush, a ring, a spray of spots). Strength is how fast it grows or goes away; hardness is how much of the brush works fully. A stroke is one undo action.

The amounts are saved in the tiles, with the rest of the painting, when you save the scene.

## What you see

While you paint, the cells of 32 m near the camera are made again behind the scenes and swapped in when they are ready, so the picture does not flicker. Entries are drawn up to their **view distance** (40 m for ground scatter, 250 m for foliage by default, scaled by the player's view distance setting). A cell is made in a worker thread, so a big brush costs frames, not seconds.

## Trees are solid, and the navigation goes round them

- **Collision.** The shapes of the StaticBody3D nodes of a foliage scene are made real **near the player and the party members** (about the same distance as the ground's collision) and taken away when they leave. A tree you paint is solid in the game; in the editor nothing collides.
- **Navigation.** When you [bake the navigation](/basic/world/terrain-navigation#trees-and-other-foliage), every tree takes its footprint out of it, so NPCs walk round trunks. Painting trees makes the tiles out of date.

## The Inspect tool and the foliage

The **Inspect** tool's box in the corner of the viewport has a line **Foliage**: how many instances are drawn in the tile under the mouse and the biggest entries (*1205 drawn in this tile: Grass tuft 900, Weed 300, Oak 3, ...*). Only what is near the camera is drawn, so it counts the cells that are there now.

## The player's setting and the project's switch

- **Ground clutter** is a video setting of the player: **Off**, **Low**, **Medium**, **High**. Off draws no grass, weeds or pebbles; the other three are percentages **you** set in [Terrain Settings](/basic/game-settings/terrain-settings#ground-clutter) (35, 65 and 100 at first). The scatter keeps that share of every entry, so nothing moves when the player changes it. Trees and bushes are level design: the setting does not touch them.
- **Clutter grows on textures** (Terrain Settings) turns the texture lists off for the whole project: only what you painted by hand is drawn.

::: info Not here
Wind and bending away from the player are done by the shader of your material, not by settings on the entry. A scatter-by-rules brush (fill a tile by its rules) may come later.
:::

## See also

- [Foliage library](/basic/assets/foliage): the files, the entries and their numbers.
- [Terrain](/basic/world/terrain): the mode, the bars and the keys.
- [Painting](/basic/world/terrain-painting): the textures the scatter grows on.
