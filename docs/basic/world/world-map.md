# World map

The **world map** is a window the player opens (the **M** key, panel number 4) that shows the world from above with its **zones** laid over it. Move the mouse over the map and the zone under it lights up with its name; click it and the map **zooms into that zone** with the world around it darkened and its own sub-zones to hover and click in turn. **Back** goes up one zone, the list on the left opens any zone, and a marker shows where the party is.

It is a [UI panel](/basic/user-interface/ui-panels) (`WorldMapPanelUI`, the panel name `world_map`) in the `UIPanels` of the in-game interface, so it opens, closes and gets its mini menu button like the quest log. It costs nothing until the player opens it.

## What it is made of

| Part | Where it comes from |
|---|---|
| The **picture** of the world | The **Generate Map Preview** button of the world scene (a capture from above, see below) |
| **Where the picture is** in the world | The map rect the same button stores in the world (`WorldData.map_rect`) |
| The **zones** | Worked out from the world every time the map is opened, so a zone you painted a minute ago is on it: the **default zone** of the world fills everything, the zones **painted on the terrain** go over it, and the **zone volumes** go over those (the highest priority on top). The same order the game uses to say which zone the party is in |
| The **names** | The name of each zone, in the middle of its ground. The default zone is "everywhere else" and gets no name on the map |
| The **colours** | The colour of each zone ([Zones](/basic/world/zones)) |
| The **party marker** | The position and the direction of the current player |

Nothing about the zones is saved with the map: only the picture and its rect are. If you change a zone, you do not have to make the map again; if you change the **world** (a new hill, a new road) you make the picture again.

## Making the picture

Open the world scene and press **Generate Map Preview** in the Inspector of the `WorldScene`. It takes the picture with an **orthogonal camera straight down** over the area of your **terrain** (a square round it; a world with no terrain uses the square of the *Minimap size*), at the **Map preview quality** you chose. An orthogonal camera is what makes the picture line up with the zones: every place of the picture is the same place of the world whatever its height. Older pictures were taken with a perspective camera that slides the hills sideways; make them again. The area is stored with the picture (**Map rect**, in the world's data).

Until a picture is made the map shows the zones over a flat colour, so you can try it at once.

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

- **Discovered zones**: showing only the zones the party has been in (the zone tracker already knows which ones), with the rest as blank ground.
- **A picture for each zone**: a zone map that is a crop of the world picture gets blurry for a small zone in a very big world, and an interior under a hill (a cave) is not seen from above. A zone could have a picture of its own, baked or drawn by you, that the map shows instead of the crop.
- **Fog of war** on the map picture (the exploration the game already keeps).
- Markers for quests, vendors and other things.

## For developers

- `ZoneMap.build(zone_ids, default_zone, rect, terrain, volumes)` makes the picture of the zones (one byte a cell, the cell is the 4 m of the terrain's zone layer, up to 2048 cells a side) and answers `zone_at_world`, `zone_at_uv`, `bounds_of(zone, with_children)`, `centre_of`, `family_of`, `uv_of_world` and `world_of_uv`.
- `WorldMapView` is the control that draws it: the shader `world_map.gdshader` (the picture, the zone tint, the outlines, the dark outside the open zone; the borders of the cells are smoothed so a zoomed map has no staircases), the names, the party marker and the mouse. Put your own `WorldMapView` in a scene of your own to make a different window (a map on the pause menu, a map in a quest).
- To change the look, change the shader or the panel scene `world_map_panel_ui_template.tscn`.

Related: [Zones](/basic/world/zones), [UI panels](/basic/user-interface/ui-panels), [Worlds](/basic/world/worlds#map-preview).
