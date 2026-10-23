# Terrain

The **terrain** is the ground of a world: hills, valleys, plains, the textures painted on them. ChronicleNode has its own terrain and its own editor for it, built into the 3D viewport. You make the terrain of a map, then **sculpt** it ([Sculpting](/basic/world/terrain-sculpting)) and **paint** it ([Painting](/basic/world/terrain-painting)) with brushes.

| Page | What it covers |
|---|---|
| **Terrain** (this page) | How the terrain is made, the Terrain mode and its layout, adding and removing tiles, saving, the world check |
| [Sculpting](/basic/world/terrain-sculpting) | Raise, lower, smooth, flatten, noise, stamp, holes, and the brush settings and shapes |
| [Painting](/basic/world/terrain-painting) | Painting with textures, packs, the layer limit, lighter, darker and tinted ground |
| [Navigation](/basic/world/terrain-navigation) | Baking the navigation NPCs walk on, marking ground nobody walks on, entity sizes |
| [Terrain Textures](/basic/world/terrain-textures) | The library the terrain is painted from |
| [Terrain Settings](/basic/game-settings/terrain-settings) | The project settings: the quality levels, the limits, how the terrain saves while you edit |

## What a terrain is made of

A terrain is made of **tiles** of 256 m by 256 m. Each tile is one file, so two people can work on different tiles and only the tiles you change are saved. A tile holds 16 x 16 **chunks** of 16 m; a chunk is the piece the painting is organised in (each chunk can use up to 8 textures). You never place a chunk on its own: the size of a terrain is a number of tiles.

The ground has one height for every metre. The heights of all the tiles share one **range** (by default from -500 m to 1500 m, stored with steps of about 3 cm).

A world has **one terrain**. A second terrain node in the same scene is ignored and shows a warning.

## Making the terrain of a map

1. Open the map's scene and **save it** (the terrain's folder is named after the map, so the scene needs a file).
2. Press the **Terrain** button in the 3D toolbar, next to **Add Object**. In a map with no terrain, this opens the **Create terrain** dialog.
3. Choose:

| Setting | What it does |
|---|---|
| **Tiles across / deep** | How many tiles the terrain is wide and deep, 1 to 8 each way (default 2 x 2 = 512 m). You can add more tiles later |
| **Where** | **From the origin**: tile 0, 0 has its corner at the origin and the terrain grows east and south. **Centred on the origin**: the origin is in the middle |
| **Start height** | The ground starts flat at this height |
| **Lowest height** and **Height range** | The range of heights the whole terrain can hold. Make it big enough for your tallest mountain and deepest valley; you can change what is *in* it freely, the range not so easily |
| **Fill the ground with a texture** | Off: the ground starts grey and you paint it yourself. On: pick a texture and every new tile is painted with it |

4. Press **Create**. The files are written to `res://src/data/terrain/<map id>/` (the `terrain.tres` file and a `tiles` folder), a **Terrain** node is added to the scene, and the Terrain mode turns on. **Save the scene** to keep the node.

If you delete the Terrain node and press the button again, the dialog offers **Use it**: the terrain files of the map are still there.

## The Terrain mode

Press the **Terrain** button to turn the mode on or off. When it is off the viewport is the editor's own. When it is on:

- **The left strip** has the tools in groups: **View** (Select, Inspect), **Terrain** (Tiles), **Ground** (the sculpting tools), **Textures** and **Colour**. Hover an icon for its name, its key and what it does. **Undo and redo** are at the bottom of the strip. The first tool, **Select**, leaves the mouse as it normally is, so you can still move trees and buildings without leaving the mode.
- **The bar along the bottom** shows the tool you chose and its settings. Every number has a slider and a box where you can type an exact value.
- **The small bar at the top left** has the overlay buttons and a warning when tiles are not saved.
- **The Terrain tab** next to the Inspector has the cursor, the texture library, the object tools and the world check.
- **A box in the bottom right corner** tells you what is under the mouse: position, tile, chunk, slope, surface and textures.

### Keys and mouse

| Key | What it does |
|---|---|
| **1** to **9**, **0** | The first ten tools: Select, Inspect, Raise, Lower, Smooth, Flatten, Paint, Erase, Replace, Tint |
| **[** and **]** | Smaller and bigger brush |
| **Shift + wheel** | The radius of the brush |
| **Ctrl + wheel** | The strength of the brush |
| **Alt + wheel** | The hardness of the brush |
| **Ctrl** held as a stroke starts | The opposite (Raise lowers, Cut hole fills) |
| **Escape** | Cancels the stroke; with no stroke, goes back to Select |
| Right mouse button | Moves the camera as always. The brush ring hides while you do, and the wheel stays Godot's (the flying speed) |

The wheel alone zooms the camera as always. Every key can be changed: **Terrain tab > Hotkeys**.

### What is shown over the ground

The buttons of the top bar show things over the terrain **in the editor only** (the game never has them):

| Button | Shows |
|---|---|
| **Grid** and its size box | A grid on the ground, from 1 m to 32 m squares |
| **Chunk grid** | The squares of 16 m |
| **Tile grid** | The squares of 256 m (one file each) |
| **Holes** | Where the ground is cut (a hole is not drawn, so without this you would not see it) |
| **Layer budget** | Each chunk coloured by how many of its 8 textures it uses: green up to 4, yellow 5 or 6, orange 7, red 8 (full) |
| **Not walkable** | The cells marked not walkable (orange), see [Navigation](/basic/world/terrain-navigation) |
| **Navigation mesh** | The baked navigation (green) |

## Adding and removing tiles

Choose the **Tiles** tool. Green squares appear on the free tiles next to the terrain, and the tile under the mouse is highlighted with its coordinates.

- **Click** a green square to add a tile there.
- **Ctrl + click** a tile to remove it. It asks first, and tells you what is lost.
- The bottom bar has **X** and **Z** boxes (they follow the mouse) with **Add tile** and **Remove tile** buttons, to work on an exact tile, and **Paint new tiles with the chosen texture** (off: new tiles are grey).

A new tile **joins its neighbours without a seam**: its edges copy the edges of the tiles next to it, the ground beside such an edge blends from their heights to a flat level over 96 m, and the rest is flat. You can then sculpt it. A tile away from the others (an island) is allowed; you get a message, and the world check lists it. **The last tile of a terrain cannot be removed.**

Both can be **undone** (Ctrl+Z). A new tile has no file until you save the scene; a removed tile keeps its file until then, and the save deletes it (a copy goes to the `backup` folder).

## Putting objects on the ground

- **Add Object** puts a new NPC, interactable, region or other object on the ground that the middle of the 3D view looks at, so it appears where you are working. If the view looks at the sky or at nothing, it goes to the origin.
- **Snap selected to the ground** (**Terrain tab > Objects**) puts the nodes you selected in the Scene dock on the terrain: the same place, the height of the ground. **Height above** raises them (a negative number sinks them) and **Tilt to the slope** makes them lean with the hill (their heading is kept). It can be undone. Objects over a hole or off the terrain are left where they are and the message says so. Godot's own *Snap Object to Floor* cannot find this terrain in the editor, so use this one.

## Saving

The terrain **always saves with the scene**: Ctrl+S writes the tiles you changed, and only those. The terrain's heights, painting and holes are not in the scene file; they are in the tile files. The top bar says how many tiles are not saved, and the scene shows a `*` from your first edit, so closing the editor asks to save.

On top of that, **Game Settings > Terrain Settings > Saving while editing** can save automatically while you work: every few minutes (the default is 5) or after every stroke. A save of several tiles runs over a few frames with a **progress bar** in the top bar, so the editor stays usable. **Keep tile backups** (on by default) copies the file a tile had to a `backup` folder next to the tiles before overwriting it.

## The world check

**Terrain tab > World check > Check the world** looks for likely mistakes and lists them (it changes nothing). It also runs when you save the scene, and tells you with a message when it finds a problem. Double click a line about an object to select that object.

| Finding | What it means |
|---|---|
| **Error:** a tile of the terrain has no file | The game would not load that tile |
| **Error:** a painted texture is not in the database | That ground is drawn grey. The texture was deleted after it was painted |
| **Warning:** a painted texture has no surface type | Footsteps and effects use the default surface there. Set a [surface type](/basic/world/terrain-textures#surface) on the texture |
| **Warning:** a painted texture has a texture problem | For example no albedo, or a texture that is not square |
| **Warning:** an object is under the ground | A unique, spawn marker or other object with a script is more than half a metre below the ground |
| **Warning:** a tile reaches the top or the bottom of the height range | Higher or lower ground is cut off there. Make the range bigger |
| **Note:** an object stands over a hole | It falls through unless something is under it |
| **Note:** tiles are in separate groups, or not painted, or not saved | Islands, grey tiles, unsaved work |
| **Note / Warning:** the navigation was never baked, is out of date, or a tile is all not walkable | See [Navigation](/basic/world/terrain-navigation#the-world-check) |

An object that is under the ground on purpose (the floor of a pit, a cave) can be left out of the check: give the node the metadata **terrain_check_ignore**.

## Tips

- **Plan the height range** before you sculpt a lot: it is shared by every tile.
- **Paint after you sculpt** the big shapes. Painting is per chunk; sculpting moves the ground under it.
- **Save often** while you learn: the scene shows `*` and the top bar counts the unsaved tiles. Undo works until you close the scene.
- Use the **Layer budget** overlay if painting a texture seems to replace another: a red chunk is full.
