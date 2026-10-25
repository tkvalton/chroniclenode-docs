# Terrain streaming: how it is built

This page is for developers. For the fields and the way to use them, see [Terrain streaming](/basic/world/terrain-streaming).

## The pieces

| Piece | What it does |
|---|---|
| `ChronicleTerrain.streaming`, `stream_load_distance`, `stream_unload_distance` | The settings. Streaming only applies in the game (`Engine.is_editor_hint()` loads everything) |
| `TerrainStreaming` (`runtime_classes/world/terrain/terrain_streaming.gd`) | One look (`update(positions, force_now)`): `tiles_within(data, positions, load_distance)` are requested, finished ones are applied (`APPLIES_PER_LOOK` = 1), tiles farther than the unload distance from every position are unloaded. `finish_all()` waits for the readings, `get_pending()` lists them |
| `TerrainData.request_tile`, `take_requested_tile`, `check_tile`, `load_tile` | The reading of a tile file in the background with the engine's threaded loader (`ResourceLoader.load_threaded_request`, cache mode ignore), and the checks every loaded tile passes |
| `ChronicleTerrain.stream_apply(coord, tile)`, `stream_unload(coord)`, `is_tile_loaded`, `is_loaded_at` | Put a read tile in (`_load_tile` with the tile, navigation, the drawing of the tile and its neighbours, `heights_changed`) and take one out (`_remove_tile_live(coord, true)`: nothing is marked changed) |

## Behaviour

- `_physics_process` of the terrain runs the look every 0.25 s with the focus positions (the group `terrain_focus` and the extra focus nodes). The first look reads what is wanted on the spot.
- With streaming `get_bounds()` stays the bounds of the whole manifest (`data.get_bounds()`), and `covers(x, z)` is true for any tile of the manifest: a tile that is not loaded has no height (NAN), a normal of up, no hole, and `is_solid_at` is false (there is no collision body), so what stands on it is held by the same rule as ground beyond the collision radius.
- The texture library is built from the **manifest**: `TerrainData.save_tile` writes `"textures"` (the palette of the tile) into the entry of the tile, and `get_painted_texture_ids()` of a streaming terrain lists them all. A tile that brings a texture the manifest did not list (a manifest from before) makes `stream_apply` call `ensure_library_texture`.
- Paint layers (`TerrainLayers`), the foliage amounts and the not-walkable cells are in the tile and come and go with it. A Painted spawner reads the layer through `ChronicleTerrain.layers`, so its chunks over unloaded tiles are empty.

## Tests and numbers

`tests/terrain_streaming_audit.gd` (31 checks): the manifest lists textures, the tile wanted by distance, a streaming terrain starting empty with the bounds of the manifest, the first look, the loaded ground equal to the ground of a terrain that loads all, a move (the new tiles read in the background, the old ones unloaded, a tile between the two distances kept), the answers for ground that is not loaded, the terrain service, and the paint layers of a tile coming back with it. `tests/benchmarks/terrain_streaming_bench.gd` prints the numbers of the [basic page](/basic/world/terrain-streaming#the-numbers).
