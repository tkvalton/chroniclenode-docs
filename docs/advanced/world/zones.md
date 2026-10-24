# Zones: how they are built

This page is for developers. For the fields and the way to use them, see [Zones](/basic/world/zones).

A zone is a database record with a name and a parent. **Where** zones are is kept in three places and the **tracker** says which one the party is in. Nothing here moves anyone or changes the look of the world: a zone only names a place.

## The pieces

| Piece | What it does |
|---|---|
| [`ZoneDefinition`](/advanced/world/world-data/zone-definition) | The database type `zone` (`res://src/data/zones/`): `parent_zone_id`, `color`, `show_banner`, `banner_subtitle` (translated), and the name, description and icon of every database resource |
| [`ZoneLookup`](/advanced/world/world-data/zone-lookup) | What the database alone knows: `get_chain(id)` (the zone, its parent, the parent of that), `is_inside`, `get_top`, `get_full_name`, `get_children`, `get_tree_list`. A loop of parents is cut where it closes; a missing parent counts as none |
| `TerrainLayers` | The **paint layers** of the terrain: grids of numbers in cells of 4 m, kept in the tile (`TerrainTile.layers`). The zone layer is `TerrainLayers.ZONES` |
| `TerrainZoneBrush` | The three zone tools (paint, fill, erase) of the terrain editor |
| [`ZoneVolume`](/advanced/world/runtime/zone-volume) | A `SpaceVolume` with `zone_id` and `zone_priority` (not `priority`: `Area3D` has one). In the group `zone_volumes` while the game runs; no monitoring, no layers |
| [`ZoneTracker`](/advanced/world/runtime/zone-tracker) | Child of the `WorldContainer` (`world_container.zone_tracker`). Looks at the player in control every 0.2 s and fires the signals |
| [`ZoneBanner`](/advanced/user-interface/in-game/zone-banner) | The banner of the screen, made by the `UIManager` and connected to `banner_requested` |
| [`ZoneTrigger`](/advanced/events-and-quests/triggers-zone/zone-trigger) and [`PlayerInZoneCondition`](/advanced/shared-systems/general-conditions/player-in-zone-condition) | The event trigger (also the quest objective *Reach the zone*) and the condition |

## The paint layer

A tile keeps `layers: {layer name: {"cells": 64 x 64 bytes, "palette": PackedInt32Array}}`. A cell holds the **position of its number in the palette** of the tile (0 = none), so a tile holds up to 255 different numbers per layer whatever their size (database ids are large). It is added to the tile without a new format version: a tile without it reads as before, and a layer with nothing painted is not saved.

`ChronicleTerrain.layers` is a `TerrainLayers`. It puts the tiles in when they load (`load_tile`), saves them with `DIRTY_LAYERS` (`to_save` drops the numbers no cell uses), and includes them in the snapshot of a whole tile, so adding or removing a tile and undoing it keeps the zones.

| Call | What it does |
|---|---|
| `get_value(layer, x, z)` and `get_zone_at(x, z)` | The number painted at a place of the world (0 = none) |
| `paint_circle(layer, center, radius, value, record)` | The cells whose middle is within the radius (always the one under the center) |
| `fill_rect(layer, rect, value, record)` | The cells whose middle is inside a rectangle of the world |
| `set_cell_value(layer, cell, value, record)` | One cell. Returns false when nothing changed (no tile, the same number, a full palette) |

Every change takes a **record** (`{"tiles": {coord: {layer: {cells, palette} or null}}}`) and keeps what it touches before it changes it. `snapshot_after(before)` reads the same tiles after the stroke; `apply_layers_record(record)` puts either back: that is the undo and the redo of a stroke (`TerrainEditHistory.commit(..., &"apply_layers_record")`). A full palette is tidied (numbers no cell uses are dropped) before a new number is refused. The spawn mask of the planned spawners is meant to be a second layer of the same kind.

The overlay is a pass of the terrain material (`terrain_overlay.gdshader`): the cells of a tile as a 64 x 64 `R8` picture of palette positions, the colours of the zones as a 256 x 1 picture, a line where two neighbouring cells differ. `ChronicleTerrain.refresh_zone_overlay()` redraws it all after zones changed.

## Which zone is a place in

`ZoneTracker.resolve_at(tree, position, default_zone_id)` is static, so anything can ask:

1. every `ZoneVolume` of the group that contains the point (`contains_point`) and names a zone that exists: the highest `zone_priority`, then the smallest shape (`get_shape_size`);
2. else the terrain's painted zone, when it exists in the database;
3. else `default_zone_id` (`WorldScene.default_zone_id`) when it exists;
4. else 0.

A zone that does not exist counts as no zone at every step, so a deleted zone never leaves a ghost.

## The tracker

`update_at(position)` is what the look every 0.2 s calls (a test calls it by hand, `set_zone(id)` puts the party in a zone directly). When the innermost zone changes, with `old_chain` and `new_chain` (each: the zone, its parent, ...):

1. `zone_left(id)` for every zone of the old chain that is not in the new one, **the innermost first**;
2. `zone_entered(id)` for every zone of the new chain that is not in the old one, **the outermost first**;
3. `zone_changed(old, new)` (not for the very first look when it is in no zone);
4. `banner_requested(title, subtitle, zone_id)`.

So a trigger on *Elderwood* sees `zone_entered(Elderwood)` when the party arrives straight in *The Old Mill*, and nothing when it walks from one to the other. The banner is made from the zones just entered that have a banner and were not seen in the last 30 s (`BANNER_COOLDOWN_MSEC`; "seen" is being in the zone or leaving it): one zone gives its name and its `banner_subtitle`; a zone and a sub-zone give the outermost name and the innermost name. `reset()` forgets where the party was (the `WorldContainer` calls it when a world unloads), so the next look is an arrival.

## Replacing the banner

Any node with a `show_zone(title, subtitle)` method can take the place of `ZoneBanner`: connect it to `world_container.zone_tracker.banner_requested`. The tracker keeps no other connection to the interface.

## The editor

- `ZonesEditor` is a `ResourceEditor` (Database > World > Zones). Its *Part of* menu is made by `_fill_parent_options`: no parent, then every other zone in tree order (indented), without the zone itself and the zones inside it.
- The placement tool lists **Zone volume** with the other volumes (`PlacementKinds`, key `zone_volume`).
- A `WorldScene` and a `ZoneVolume` show their zone as a button that opens the catalog of zones (`UniqueObjectInspectorPlugin`, `IdCatalogPropertyEditor`), like the item of a dropped item.
- `TerrainPaletteBar.Mode.ZONES` is the zone bar; `TerrainStrokeHandler.uses_zone` tells the options bar to show the swatch and the editor tool to show the bar (and to turn the zone overlay on); `uses_radius` and `get_ring_radius()` let a tool that works in squares show a ring of its own size.

## Tests

`tests/terrain_zones_audit.gd` (53 checks): the zone type and its chains, painting, filling, the palette of a tile (255 numbers), undo and redo, the three tools, saving into the tile and reading it back, removing a tile. `tests/zones_runtime_audit.gd` (48 checks): which zone a place is in, the tracker's events and banner rules, the trigger, the condition, the tokens and the banner.

## What is not done

The look, weather, sound and music of a zone; the zones the player has discovered; the zone the party is in saved with the game; a zone map seen from above. See [planned: zones](/planned/zones).
