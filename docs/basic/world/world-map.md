# World map

The **world map** is a window the player opens (the **M** key, panel number 4) that shows the world from above with its **zones** laid over it. Move the mouse over the map and the zone under it lights up with its name; click it and the map **zooms into that zone** with the world around it darkened and its own sub-zones to hover and click in turn. **Back** goes up one zone, the list on the left opens any zone, and a marker shows where the party is.

It is a [UI panel](/basic/user-interface/ui-panels) (`WorldMapPanelUI`, the panel name `world_map`) in the `UIPanels` of the in-game interface, so it opens, closes and gets its mini menu button like the quest log. It costs nothing until the player opens it.

## What it is made of

| Part | Where it comes from |
|---|---|
| The **picture** of the world | The **Generate Map Preview** button of the world scene (a capture from above, see below). A file in the maps folder of the world |
| **Where the picture is** in the world | The map rect the same button stores in the world (`WorldData.map_rect`) |
| The **picture of each zone** | The **Generate Zone Maps** button (below): a picture of every zone and the area it covers, files in the maps folder of the world, listed in `WorldData.zone_maps` |
| The **zones** | Worked out from the world every time the map is opened, so a zone you painted a minute ago is on it: the **default zone** of the world fills everything, the zones **painted on the terrain** go over it, and the **zone volumes** go over those (the highest priority on top). The same order the game uses to say which zone the party is in |
| The **names** | The name of each zone, in the middle of its ground. The default zone is "everywhere else" and gets no name on the map |
| The **colours** | The colour of each zone ([Zones](/basic/world/zones)) |
| The **party marker** | The position and the direction of the current player |

Nothing about the zones is saved with the map: only the picture and its rect are. If you change a zone, you do not have to make the map again; if you change the **world** (a new hill, a new road) you make the picture again.

## Making the pictures

All of it is done by buttons in the Inspector of the world scene (the **WorldScene** node), in the group **Map Preview Settings**. The pictures are **files** (PNG) in a folder of their own, **`src/data/worlds/maps/<world id>/`**, and the world only points at them, so the world resource stays small.

### The picture of the world: Generate Map Preview

It takes the picture with an **orthogonal camera straight down** over the area of your **terrain** (a square round it; a world with no terrain uses the square of the *Minimap size*), at the **Map preview quality** you chose, and saves it as **`world.png`**. The terrain is drawn **whole** for the picture, not only the part the editor camera sees. An orthogonal camera is what makes the picture line up with the zones: every place of the picture is the same place of the world whatever its height (a perspective camera slides the hills sideways). Older pictures were taken that way; make them again. The area is stored with the picture (**Map rect**, in the world's data).

The mini map of the game is a separate thing (the **Generate Minimap** button makes tiles of pictures for a camera that follows the player), made with the same kind of capture.

Until a picture is made the map shows the zones over a flat colour, so you can try it at once.

### The picture of every zone: Generate Zone Maps

Press **Generate Zone Maps** and every zone of the world that has ground gets a picture of its own, at the **Zone map quality** you chose (1024 by default), so a small zone in a big world is as sharp as the world. For each zone:

- **The area** is a square round the zone **and its sub-zones**, with a quarter more room, never smaller than 64 m, with its corner on the 4 m grid, and moved inside the world if it can be.
- **A zone on the ground** is seen from above the whole world. **A zone that is only a zone volume** (a cave under a hill, the inside of a building) is an **interior**: the camera is put at the **top of the volume** and sees only down through it, so the hill over the cave is not in the picture.
- **The default zone** has no picture: it is everywhere, so its map is the map of the world.
- The pictures are named after the zone and its number (**`elderwood_9961001.png`**): the number is what the game goes by, so renaming a zone does not lose its picture, and two zones with one name do not share a file.
- Each picture and its area is an entry of `WorldData.zone_maps` (a **Zone Map Entry**: the zone, the picture, the rect and **Is custom**). A zone that was deleted or has no ground any more loses its entry; an entry marked **Is custom** is never touched.

Make sure the whole terrain is there (in the editor it is) and that the zones are painted and the zone volumes placed before you press it. It takes a few seconds for each zone.

## Aligned and to scale

Every picture is taken straight down and says which area of the world it covers, so **a place of the world is a place of the picture**: the world position of anything (an NPC, a quest target, a fast travel point) turns into a pixel with one line of arithmetic (`(x - rect.x) / rect.size.x` across, the same with z down). That is what lets markers sit where their things really are, and move in real time, like the marker of the party does. A map that keeps to this scale and framing is as true as a generated one.

## Your own stylized map

The generated pictures are accurate, not pretty. If you want a hand-drawn or painted map, you do not need to give up the alignment: **draw over the same area at the same scale**.

1. **Make the reference sheet.** Press **Generate Reference Sheet**. It writes two files next to the pictures: **`world_reference.png`**, the picture of the world a little darker with a **line every 100 m** (a stronger one every 500 m) and the **borders of the zones** in their colours, and **`world_reference.txt`**, with the area it covers (the corner and the size in metres), how many metres one pixel is, and the box of every zone in pixels.
2. **Draw on top of it** in your painting program, keeping the picture **square** and the **same framing**: do not crop, do not stretch, do not move it. You can draw at any size you like (a bigger picture is just a finer one). The grid and the zone borders are your guides: put the river where the grid says the river is. Hide the sheet when you are done.
3. **Put it in the world.** Import your picture in the project (a PNG in the maps folder is fine). On the world, set **Map Image** to it, keep **Map Rect** as it is (the area of the sheet), and tick **Map Is Custom** so that **Generate Map Preview** does not replace it.
4. **A picture for a zone**, the same way: make an entry in **Zone Maps** (the zone, your picture, the **Rect** of the area it is drawn over) and tick **Is custom**. For a zone picture draw over **its own** area: the sheet of the world shows the zone's box, and its entry says the rect (use the rect of the entry the button made before, or the one in the reference text).

The only rule is **scale and framing**: as long as your drawing covers exactly the area in **Map Rect** (or the **Rect** of the entry) with the same proportions, the zones, the marker of the party and any marker you add (see below) land on the right places of your drawing. If you move the picture, the rect has to say so; if you distort it, markers will be off by the distortion.

## What the player sees

- **World view.** The whole map. Every zone is tinted in its colour with a thin outline; the top zones have their names. The zone under the mouse is brighter and named at the top of the window. A **sub-zone** is not lit on its own here: its zone is, and it appears when that zone is opened.
- **Zone view.** A click zooms the map into the zone (with some room round it, never closer than a twentieth of the map) over about a third of a second. Everything outside the zone is darker, its sub-zones show their names and light up under the mouse, and a click on one opens it. The line at the top says where you are (*World > Elderwood > Oakford*).
- **Back** goes to the zone above, and from a top zone to the world. A zone with no ground of its own (only its sub-zones have) zooms to them.

## Settings of the window

On the root node of the panel scene:

| Setting | What it does | Default |
|---|---|---|
| **Zoom seconds** | How long the map takes to zoom into a zone | 0.35 |
| **Zoom margin** | How much room is left round a zone (1.35 = a third more than its box) | 1.35 |
| **Minimum view** | The smallest part of the map a zoom shows | 0.06 |

The panel options of every panel ([UI panels](/basic/user-interface/ui-panels#options-of-a-panel)) apply: the **Panel keybind** (4), the **Screen space**, the mini menu icon.

## Not built yet (the next steps)

The world side is done (the pictures, the areas, the files, the stylized map). What is left belongs to the interface, which comes next:

- **The window using the zone pictures.** The panel shows the world picture and zooms into a zone. It does not use the zone pictures yet: the next step is to show the picture of the zone (or your own) when you open a zone, and the world picture when there is none.
- **Markers.** Quest markers, fast travel buttons, info markers (town names, vendors) and the party's friends, put on the map by their world position. They will be **Control nodes** (so they can be hovered, clicked, themed and scaled like the rest of the interface), each kind made from a scene you can replace, shown or hidden by how far the map is zoomed, and fed from the world: markers placed in the scene at their real place, active quests, tagged entities and fast travel points.
- **Discovered zones**: showing only the zones the party has been in.
- **Fog of war** on the picture (the exploration the game already keeps).

## For developers

- `ZoneMap.build(zone_ids, default_zone, rect, terrain, volumes)` makes the picture of the zones (one byte a cell, the cell is the 4 m of the terrain's zone layer, up to 2048 cells a side) and answers `zone_at_world`, `zone_at_uv`, `bounds_of(zone, with_children)`, `centre_of`, `family_of`, `uv_of_world` and `world_of_uv`.
- `WorldMapView` is the control that draws it: the shader `world_map.gdshader` (the picture, the zone tint, the outlines, the dark outside the open zone; the borders of the cells are smoothed so a zoomed map has no staircases), the names, the party marker and the mouse. Put your own `WorldMapView` in a scene of your own to make a different window (a map on the pause menu, a map in a quest).
- To change the look, change the shader or the panel scene `world_map_panel_ui_template.tscn`.

Related: [Zones](/basic/world/zones), [UI panels](/basic/user-interface/ui-panels), [Worlds](/basic/world/worlds#map-preview).
