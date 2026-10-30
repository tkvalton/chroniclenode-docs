# Terrain: how it is built

The [Terrain chapter](/basic/world/terrain) explains the editor. This page is the map of the code: the data a terrain is made of, how it is drawn and asked questions, how the editor tool edits it, and where to plug in a brush, a world check rule or another terrain plugin.

## The shape of it

A terrain is a grid of **tiles** of 256 m. A tile is one file with 257 x 257 height samples (one per metre, the last row and column shared with the next tile), 16 x 16 **chunks** of 16 m, a mask of **holes** and, when painted, the **weights** of up to 8 textures per chunk. The game never scans folders: a `TerrainData` manifest lists every tile and its file.

| Class | What it is | Where |
|---|---|---|
| `TerrainData` | The **manifest**: the tiles (coordinate, file, checksum, lowest and highest height), the height range, the tile folder. Makes, saves, loads and removes tiles; `validate` checks the files | `data_classes/terrain/` |
| `TerrainTile` | One tile: 16-bit heights, holes (128 x 128 bits), the weights, the slots of every chunk, the palette, the optional colour map. Format version 3 | `data_classes/terrain/` |
| `TerrainConfig` | The project settings: slots per chunk, painting resolution, library texture size, limits, the four detail levels, autosave | `data_classes/terrain/` |
| `TerrainTextureDefinition` | A database entry of the texture library: the texture maps, tile size, pack, surface type, weather response | `data_classes/terrain/` |
| `ChronicleTerrain` | The **node**. Loads the tiles into memory, draws them, makes the ground solid near the players, answers questions from its data, and offers the editing API | `runtime_classes/world/terrain/` |
| `TerrainService` | One provider per `World3D`. Everything that asks the ground (movement effects, spawners, footsteps, dropped items) asks the service, which asks the world's provider | `runtime_classes/world/terrain/` |
| `TerrainRenderer` | Draws the ground: a quadtree of nodes (levels of detail) sharing one grid mesh, through the `RenderingServer` | `runtime_classes/world/terrain/` |
| `TerrainKernels` | Pure functions on packed arrays: bilinear height, normals, slope, hole tests, edge stitching, chunk heights for collision | `runtime_classes/world/terrain/` |
| `TerrainTextureLibrary` | The texture arrays (colour with roughness, normals) the shader reads, built from the textures the tiles are painted with | `runtime_classes/world/terrain/` |
| `TerrainPaintWork` | The working copy of a tile's painting while the editor paints on it | `runtime_classes/world/terrain/` |

Other terrain plugins plug in through the **providers** of `runtime_classes/world/terrain_provider/` (`ChronicleTerrainProvider` for this terrain, one each for Terrain3D, HTerrain and Terra Brush, and a physics-raycast provider for no terrain).

## Asking the ground

`ChronicleTerrain` answers `get_height`, `get_normal`, `is_hole`, `get_surface_type`, `get_texture_weights`, `get_ground` and `raycast` **from its data**, not from physics or rendering. A headless server and an NPC on the other side of the map get the same answers as a player standing on the ground. The service is the only thing the rest of the toolkit talks to.

A **second `ChronicleTerrain` in one world is refused**: `TerrainService.register_world` takes one owner per world; the second is marked a duplicate, loads and draws nothing, and gets a configuration warning.

## Drawing

- The renderer selects, every frame, the nodes of the quadtree (5 levels, from 16 m up to a whole tile) near the camera and draws each as an instance of one **shared grid mesh**, scaled and moved to its place. The shader reads the heights from a texture per tile (with a one-sample apron so the slope is the same on both sides of a tile edge), morphs between levels of detail, and discards holes.
- The textured shader reads the weights (3 RGBA8 images, 8 slots) and the **slot list of each chunk**, and blends the textures of the chunk from the texture arrays. How many slots are drawn, how sharp, and how many textures stay resident come from the **terrain detail level** (a `TerrainQualityPreset`) the player chose.
- The editor draws a second material pass over the ground (grid, chunk grid, tile grid, holes, layer budget). It exists only while the Terrain mode is on.

## Collision

One `HeightMapShape3D` per **chunk**, only around the nodes in the group `terrain_focus` (the players, anything that must stand on the ground). A chunk within 32 m of a focus is built at once, the others a few per frame. A hole's samples sit a kilometre under the lowest ground (a NaN there would stall the physics).

## Painting data

Each chunk keeps up to 8 textures in its slots; the three weight images hold the weight of each slot at each texel (about 255 in total). A slot a chunk does not use has weight 0. Painting a ninth texture replaces the slot with the least paint. The palette of a tile lists the texture ids; the library maps them to layers of the arrays. The optional colour map is one picture over the tile that multiplies the colour.

## The editor tool

All in `editor_components/3d_scene_tools/terrain/`. The pieces know nothing of the editor window except `TerrainEditorTool`, so tests drive them with made-up events.

| Class | What it does |
|---|---|
| `TerrainEditorTool` | The mode: the Terrain button, the bars on every 3D viewport, the dock, the dialogs, the world check, saving with the scene |
| `TerrainToolController` | Gets the viewport events, finds the place under the mouse, shows the ring, turns the held button into a stroke, handles the keys and the wheel, and runs the Tiles tool |
| `TerrainStrokeHandler` | The base of a brush: `begin`, `dab`, `end`, `cancel`. The brushes in `brushes/` are subclasses |
| `TerrainBrushSettings` | Radius, strength, hardness, the shape, and the **kernels** (the weights a dab applies, made once per setting) |
| `TerrainPicker` | A ray walked over the terrain's data (no physics) |
| `TerrainBrushRing` | The ring: a decal made on the `RenderingServer`, in no scene. With a shape it draws the shape's outline |
| `TerrainToolbar`, `TerrainOptionsBar`, `TerrainViewBar`, `TerrainCursorBar` | The left strip, the bottom bar, the top bar, the cursor bar |
| `TerrainPaletteBar` | The row of textures (paint tools) or of foliage (foliage tools) above the bottom bar |
| `TerrainSettingsMenu` | The Terrain settings drop-down: Objects, Navigation, World check, Hotkeys |
| `TerrainClutter`, `TerrainClutterBrush` | The drawing of the clutter and the foliage (cells of 32 m made in workers, MultiMeshes on the RenderingServer), and the Add, Remove and Reset foliage tools |
| `TerrainCreator`, `TerrainCreateDialog` | Make the terrain of a map (`res://src/data/worlds/terrain/<map id>/`) |
| `TerrainTileEditor`, `TerrainTileOverlay` | Add and remove tiles with undo; draw the ghost squares |
| `TerrainSaveManager` | The automatic saves, over several frames with a progress |
| `TerrainWorldCheck` | The rules of the world check |
| `TerrainBrushShapes` | The folder of brush shapes (`res://src/data/terrain_brush_shapes/`) |

### Heights and undo

Brushes work in **samples of the whole terrain** (sample x, z is at metre x, z): `ChronicleTerrain.read_block` and `write_block` read and write a block of them across tiles, mirroring the samples on a shared edge. A stroke is **one undo action** that stores only the **chunks it touched**, before and after (`snapshot_chunks` and `apply_chunk_heights` for heights, `snapshot_paint_chunk` and `apply_paint_record` for painting, `snapshot_hole_chunk` and `apply_hole_record` for holes). `TerrainEditorHistory` registers them with the editor's own undo, in the history of the scene.

### Tiles

`add_tile`, `remove_tile`, `snapshot_tile` and `apply_tile_record` add and take away tiles live (the drawing, the collision, the bounds follow). A new tile has the flag `DIRTY_NEW` and no file until the save; a removed tile has `DIRTY_REMOVED` and keeps its file until the save, so undo is exact. `make_tile_heights` copies the edges of the neighbours and blends the ground beside them to a flat level over 96 m.

### Saving

`save_dirty` writes only the tiles that changed (and deletes the removed ones) and then the manifest. `save_next_dirty` writes one tile, which `TerrainSaveManager.step` uses to spread an automatic save over frames. The scene's own save calls `save_dirty` through the plugin's `_save_external_data`.

## Navigation

The terrain bakes its own navigation. **Per tile and per agent class**: `TerrainNavigation.plan_classes` turns the entity collision shapes (`EntityDefinition.COLLISION_SIZES`, the one table of capsules) into classes: the baker rounds a radius up to whole cells, and shapes that round to the same radius share a class. `TerrainKernels.navigation_faces` makes the baker's triangles from a tile's heights (two a cell, **wound (a, b, c), (b, d, c) with b along +x and c along +z**: the usual order bakes nothing), leaving out hole cells and cells in the tile's **not-walkable mask** (`TerrainTile.blocked`: the same 128 x 128 cell bits as the holes, format version 4, `DIRTY_BLOCKED`). Tiles are baked one by one and still meet: the bake box is the tile widened by a margin, `border_size` is that margin, and the triangles of up to eight neighbours reach into it. Meshes are saved in `<tile folder>/navigation/nav_x_z_<class>.res`; the manifest (`TerrainData.navigation_classes`, `TerrainData.navigation`) lists them with a **stale** flag that every edit of heights, holes or blocked cells sets on the tile and its eight neighbours (`is_navigation_stale`, `ChronicleTerrain.get_stale_navigation_tiles`).

At run time `TerrainNavigationRuntime` makes a `NavigationRegion3D` for each loaded tile and class and a navigation map for each class: the class of the **Normal** shape lives in the world's own map (so `TerrainService.is_navigable` answers for it), the others get a map of their own with the cell size they were baked with. `ChronicleTerrain.get_navigation_map(shape)` returns the map for a collision shape; `NavigationController` sets its radius and height from the shape and uses that map. The engine syncs a new map over several frames: right after a tile loads, paths and `map_get_closest_point` can still be empty.

**Objects.** `TerrainNavigation.parse_objects(root, tile, margin, mode, group)` reads the scene's solid objects with the engine's parser (static colliders on the World Terrain layer, meshes, both; a group when one is named) on the **main thread**, then keeps the triangles that touch the tile and its margin (`crop_to_rect`: the parser ignores the bake box) and `bake_tile` merges them into the tile's source geometry. `fingerprint(source, mode, group)` is a number for what was read; the bake stores it per tile (`TerrainData.navigation_objects`), and `TerrainNavigationBake.start` parses every tile when asked for "what changed" and bakes again the tiles whose number differs (the ground's stale flag cannot know about objects). Settings: `TerrainConfig.navigation_objects` and `navigation_objects_group`.

The editor bakes with `TerrainNavigationBake`: one job (a tile and a class) at a time on a `WorkerThreadPool` task, each finished mesh applied and saved at once (`ChronicleTerrain.apply_baked_navigation`), progress reported per mesh, Cancel after the mesh in flight, the manifest saved at the end.

## Adding to it

- **A brush.** Subclass `TerrainStrokeHandler`, set `category`, `uses_strength`, `uses_hardness`, `uses_texture`, `uses_shape`, override `begin`, `dab` and `end`, and register it in `TerrainEditorTool.activate` with a name and a description. Read and write heights with `read_block` and `write_block`; take a record before and after for the undo.
- **A world check rule.** Add a static function to `TerrainWorldCheck` that appends findings (`_finding(rule, severity, message, node, position)`) and call it from `run`.
- **Another terrain.** Implement `TerrainProvider` (`runtime_classes/world/terrain_provider/`) and set it as the provider of the world scene.
