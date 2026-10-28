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
| **Remove selected foliage** | Takes the chosen entry away where you paint (also what a texture grows). Ctrl at the start adds it |
| **Remove all foliage** | Takes **every** kind of foliage away where you paint, what the textures grow and what you painted by hand, with no entry chosen (the foliage bar is not shown). It works on all the entries that are drawn there at once, and one Ctrl+Z gives them all back. Ctrl at the start gives the foliage back: every entry goes to what the textures give |
| **Remove ground clutter** | Takes away only what the **textures** grow (the entries in the ground clutter list of the texture painted there: grass, weeds, pebbles) and leaves the trees and bushes you placed by hand. No entry needs to be chosen. Ctrl at the start restores it |
| **Restore ground clutter** | Gives back what the textures grow where you took it away (those entries go back to what the textures give). Ctrl at the start removes it |
| **Reset foliage** | Puts the chosen entry back to what the textures give: what you painted by hand is forgotten |

The **paint tools** have a box in their bar, **Clear hand-placed foliage** (on at first): where you paint a texture, the foliage you painted by hand goes back to what the textures give, so the clutter of the new texture grows there. Turn it off to keep a tree you placed when you repaint the ground round it. The paint and the clearing are one undo action.

The tools work on **one entry at a time**, the one you chose (Remove all works on every entry). Radius, strength and hardness are the ones of the bar at the bottom, and the **shape** of the [Cursor bar](/basic/world/terrain-sculpting#the-cursor-ring-colour-and-brush-shape) works here too (a square brush, a ring, a spray of spots). Strength is how fast it grows or goes away; hardness is how much of the brush works fully. A stroke is one undo action.

The amounts are saved in the tiles, with the rest of the painting, when you save the scene.

## How much grows, and where

Many numbers meet in the foliage, so here they are in the order they are used. Each answers one question, and each lives in **one** place.

| Question | The number | Where it is |
|---|---|---|
| How thick can it be at most? | **Density**: the most plants in a square metre (short grass 55, long grass 12, a tree 0.02) | the foliage entry (a group has one for all its scenes) |
| Where do the textures grow it, and how much of the density? | **Weight** of the entry in the **Ground clutter** list of a texture: 1 = the full density, 0.2 = a fifth | the terrain texture |
| Where do you add it by hand? | The **foliage brush**: painting up to the full density, never more | the brush |
| Which scene of a group is placed, how often? | **Weight** of each scene in the group (2 = twice as often as 1, 0 = never) | the group |
| How much of the ground is left bare? | **Patchiness**: 0 none, 0.5 half, 1 all | the foliage entry |
| How big are the patches and the gaps? | **Patch size** in metres | the foliage entry |
| How close can two stand? | **Spacing** in metres | the foliage entry |
| What can the player turn down? | The clutter setting of the game's settings: it only **takes some away**, nothing moves | the player |

In words, for one square metre of ground: *the density is the most there can be; the texture weight or the brush decides how much of that there is; patchiness and patch size cut patches out of it; spacing keeps neighbours apart; the player's setting can thin it out further.*

**A worked example.** Short grass with density 55, on a texture with the weight 0.5, patchiness 0.3 and patch size 10 m: about 27 blades a square metre where it grows, in patches of about 10 m, with about 30% of the ground bare between them. Paint the same grass by hand with the brush at full and the bare parts stay bare (patchiness applies to the brush too), but where it grows it is the full 55, not more. A tree with density 0.02 and spacing 4 m: one tree in 50 square metres at most, and none closer than 4 m to another.

**Things that are easy to mix up**
- *Density* is how thick, *weight* is how much of that grows **here**. A weight never makes it thicker than the density.
- *Patchiness* is how much is **bare**, *patch size* is how **big** the patches are. They work together: patchiness 0.4 and patch size 20 m is groves of about 20 m with clearings between them.
- *Spacing* only keeps plants apart, it does not make a forest thinner by itself. If it takes too many away, raise the density.
- A **group** has the density, spacing, patchiness and patch size; its scenes only have how they look, and their **weights** in the group say how often each is placed. A tree in a group never has a density of its own.

**The brush numbers** do not say how much grows, only what one stroke does:
- **Radius**: the size of the brush on the ground, in metres.
- **Strength**: how much **one stroke** does, as a share of the way to full. At 1 a stroke puts down (or takes away) everything under the core of the brush at once; at 0.3 it goes 30% of the way, and you paint again to add more. Holding the mouse still adds nothing more.
- **Hardness**: how big the full-strength core is, as a share of the radius. At 1 the brush is at full strength right to its edge; at 0.5 it is full in the inner half and fades to nothing at the edge; at 0 only the centre is full. A soft edge makes your strokes thin out into what is round them.

## What you see

While you paint, the cells of 32 m near the camera are made again behind the scenes and swapped in when they are ready, so the picture does not flicker. Entries are drawn up to their **view distance** (40 m for ground scatter, 250 m for foliage by default, scaled by the player's view distance setting). A cell is made in a worker thread, so a big brush costs frames, not seconds.

**The edge fades.** The last quarter of the view distance of an entry **fades out in a circle round the camera**, and what comes into range fades in: the foliage thins out and is gone, it does not switch off a square cell at a time. The **Foliage fade** property of the Terrain node (*Drawing*, default 0.25) is the share of the view distance the fade takes; 0 turns it off. It is done by the **material**: the materials of the entries are copied with the *Distance Fade* of a StandardMaterial3D set to *Pixel Dither* (cheap, and nothing has to be sorted). A material that already has a distance fade of its own is left as it is, and a **material with your own shader does not fade** (give it a fade in the shader, or it is cut off at the view distance).

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
