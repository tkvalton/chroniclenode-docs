# Terrain Settings

**Game Settings > Terrain Settings** holds the settings of the terrain of your project: what is **stored with the painting**, the **limits**, and what **Low, Medium, High and Ultra terrain detail** mean. The player's own choices (how far the world is drawn, which level of terrain detail) are in the video settings of [Game Settings](/basic/game-settings/settings); the numbers behind them are yours.

## Stored with the painted data

These are decided once, when you start a terrain, because the painting is made with them. Changing them later changes the data, and the editor warns before a change that loses something.

| Setting | What it does |
|---|---|
| **Stored slots** | How many different textures one chunk (16 m) can hold: 4, 6 or 8. **8** keeps the borders between chunks seamless in ordinary painting; 4 is cheaper but shows seams. Lowering it later drops the weakest texture of every chunk that has more |
| **Weight map resolution** | The fineness of the painting per tile (a tile is 256 m): 256, 512 or 1024 pixels. 512 is a texel every 0.5 m. Changing it later resamples the painting |
| **Library texture size** | The size every [terrain texture](/basic/assets/terrain-textures) is made at: 512, 1024 or 2048 |

## Saving while editing

The terrain **always saves with the scene** (Ctrl+S). These settings add saving while you work in the [terrain editor](/basic/world/terrain#saving). They are for the whole project.

| Setting | What it does |
|---|---|
| **Autosave** | **Only when the scene is saved**: nothing extra. **Every few minutes** (the default): the tiles you changed are written once they have waited that long. **After every stroke**: written after each brush stroke, so nothing is ever lost (a big painted tile takes a moment) |
| **Autosave minutes** | For *Every few minutes*: how long changed tiles wait (1 to 120, default 5) |
| **Keep tile backups** | Before a tile file is overwritten, copy the file it had to a `backup` folder next to the tiles (one copy: the last version). On by default |

## Navigation

How the [navigation of the terrain](/basic/world/terrain-navigation) is baked (**Terrain settings > Navigation** in the 3D editor).

| Setting | What it does |
|---|---|
| **Navigation cell size** | How fine the mesh is: 0.5 m (the default, about five times faster to bake) or 0.25 m (follows narrow gaps more exactly). Changing it makes the baked navigation out of date |
| **Navigation max slope** | The steepest ground an entity walks, in degrees (default 45). Steeper ground has no navigation |
| **Navigation max climb** | The highest step an entity climbs without a ramp, in metres (default 0.5) |
| **Navigation objects** | Which solid objects of the map the bake includes next to the ground: **Static colliders** (default: the `StaticBody3D` nodes on the World Terrain collision layer), **Meshes**, both, or **Nothing**. See [Buildings and other objects](/basic/world/terrain-navigation#buildings-and-other-objects) |
| **Navigation objects group** | Only the nodes of this group and their children are used as objects (empty: every node of the map) |
| **Navigation tiny, small, normal, large, huge** | Which entity [collision shape](/basic/world/terrain-navigation#entity-sizes) sizes get a mesh (all on by default). Shapes whose size rounds to the same agent share one mesh. Leave **Normal** on: the world's own questions about the ground use it |

## Ground clutter

| Setting | What it does |
|---|---|
| **Clutter grows on textures** | On: the [Ground clutter list of a terrain texture](/basic/assets/terrain-textures#ground-clutter) makes grass, weeds and pebbles appear where the texture is painted. Off: no texture grows anything, only what you painted with the [foliage tools](/basic/world/terrain-foliage) is drawn |
| **Clutter low / medium / high percent** | What the player's **Ground clutter** setting means: the share of every clutter entry that is drawn on Low, Medium and High (35, 65 and 100 at first). Off is always none |

## Limits

| Setting | What it does |
|---|---|
| **Max view distance** | The farthest the terrain is ever drawn, whatever the player asks (metres) |
| **Weight maps 16 bit** | Keep the painting on the graphics card with 16 bits per value (a soft brush paints smoothly: needed while painting in the editor) or 8 (half the memory; a finished terrain can use it) |

## Terrain detail levels

What each level the player can pick means in your game, one row per level:

| Column | What it does |
|---|---|
| **Slots drawn** | How many of the textures of a chunk are drawn (the strongest first); never more than the slots stored |
| **Detail reach** | Scales how far each level of ground detail reaches: below 1 coarser sooner (cheaper), above 1 sharper further away (more triangles) |
| **Sharpness bias** | 0 full-size textures, 1 half size |
| **Resident textures** | How many library textures stay on the graphics card at once |
| **Detail distance (m)** | How far the ground keeps its full detail. The bump of the normal textures and all but the strongest 3 textures of a chunk **fade out smoothly** between 45 percent of this distance and the distance itself; beyond it the ground is drawn flat from the strongest textures. A bigger distance looks better (no visible edge near you) and costs more |
| **Shadows** | Does the terrain cast shadows |
| **Anti-tiling** | Break up the visible repeats of the ground far from the camera (see [Anti-tiling](/basic/assets/terrain-textures#anti-tiling)). Costs one more colour read per painted texture, far from the camera only. Off on **Low**, on from **Medium** up |
| **Height blend, Parallax, ORM, Metallic, Emission, Subsurface** | Which [texture maps](/basic/assets/terrain-textures#texture-maps) this level uses. A map a level leaves out is not loaded on the graphics card at all (it saves the memory) and its effect is simply not drawn. The defaults: **Low** uses only emission; **Medium** adds height blending, ORM and metal; **High** and **Ultra** use everything |

Under the table the editor shows what the settings cost: the memory of the textures kept on the graphics card for each level, and of the painting of one tile. **Low is the level the minimum hardware** (about a GTX 1060 or RX 580 class card at 1080p) **is designed for**; make sure it is playable on a machine like that.

## The player's settings

In the video settings of **Game Settings > Quality** the player gets three choices (you tick them in *Player accessible settings* like the others):

- **View distance scale** (0.5 to 1.5): how far the world is drawn compared with the distances you set. It scales the terrain, and whatever you tie to it with `ViewDistance.scaled(metres)` (foliage and props that hide at a distance).
- **Terrain detail** (Low, Medium, High, Ultra): the level above.
- **Ground clutter** (Off, Low, Medium, High): how much grass, weeds and pebbles there are. The three levels are the percentages of [Ground clutter](#ground-clutter) above; trees and bushes are not touched.

The AI of NPCs gets simpler at a distance (the LOD distances of the [Gameplay Config](/basic/game-settings/gameplay-config)). By default these are **the same for every player**, so the game plays the same on every computer. Tick **LOD follows view distance** there if you want a player who halves the view distance to halve those distances too.
