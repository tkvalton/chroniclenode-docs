# Terrain Settings

**Game Settings > Terrain Settings** holds the settings of the terrain of your project: what is **stored with the painting**, the **limits**, and what **Low, Medium, High and Ultra terrain detail** mean. The player's own choices (how far the world is drawn, which level of terrain detail) are in the video settings of [Game Settings](/basic/game-settings/settings); the numbers behind them are yours.

## Stored with the painted data

These are decided once, when you start a terrain, because the painting is made with them. Changing them later changes the data, and the editor warns before a change that loses something.

| Setting | What it does |
|---|---|
| **Stored slots** | How many different textures one chunk (16 m) can hold: 4, 6 or 8. **8** keeps the borders between chunks seamless in ordinary painting; 4 is cheaper but shows seams. Lowering it later drops the weakest texture of every chunk that has more |
| **Weight map resolution** | The fineness of the painting per tile (a tile is 256 m): 256, 512 or 1024 pixels. 512 is a texel every 0.5 m. Changing it later resamples the painting |
| **Library texture size** | The size every [terrain texture](/basic/world/terrain-textures) is made at: 512, 1024 or 2048 |

## Saving while editing

The terrain **always saves with the scene** (Ctrl+S). These settings add saving while you work in the [terrain editor](/basic/world/terrain#saving). They are for the whole project.

| Setting | What it does |
|---|---|
| **Autosave** | **Only when the scene is saved**: nothing extra. **Every few minutes** (the default): the tiles you changed are written once they have waited that long. **After every stroke**: written after each brush stroke, so nothing is ever lost (a big painted tile takes a moment) |
| **Autosave minutes** | For *Every few minutes*: how long changed tiles wait (1 to 120, default 5) |
| **Keep tile backups** | Before a tile file is overwritten, copy the file it had to a `backup` folder next to the tiles (one copy: the last version). On by default |

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
| **Height blend, Parallax, ORM, Metallic, Emission, Subsurface** | Which [texture maps](/basic/world/terrain-textures#texture-maps) this level uses. A map a level leaves out is not loaded on the graphics card at all (it saves the memory) and its effect is simply not drawn. The defaults: **Low** uses only emission; **Medium** adds height blending, ORM and metal; **High** and **Ultra** use everything |

Under the table the editor shows what the settings cost: the memory of the textures kept on the graphics card for each level, and of the painting of one tile. **Low is the level the minimum hardware** (about a GTX 1060 or RX 580 class card at 1080p) **is designed for**; make sure it is playable on a machine like that.

## The player's settings

In the video settings of **Game Settings > Quality** the player gets two choices (you tick them in *Player accessible settings* like the others):

- **View distance scale** (0.5 to 1.5): how far the world is drawn compared with the distances you set. It scales the terrain, and whatever you tie to it with `ViewDistance.scaled(metres)` (foliage and props that hide at a distance).
- **Terrain detail** (Low, Medium, High, Ultra): the level above.

The AI of NPCs gets simpler at a distance (the LOD distances of the [Gameplay Config](/basic/game-settings/gameplay-config)). By default these are **the same for every player**, so the game plays the same on every computer. Tick **LOD follows view distance** there if you want a player who halves the view distance to halve those distances too.
