# Spawners: how they are built

This page is for developers. For the fields and the way to use them, see [Spawners](/basic/world/spawners).

## The pieces

| Piece | What it does |
|---|---|
| [`Spawner`](/advanced/world/runtime/spawner) | The node (`SpaceVolume`, an `Area3D`). Makes and keeps its record, and at runtime keeps its **slots** and works on a tick |
| [`UniqueSpawnerData`](/advanced/world/world-data/unique-spawner-data) | The record (`unique_spawner`, `res://src/data/unique_spawners/`): the world, the position, the table and the rules. `pick_respawn_time`, `get_slot_count` |
| [`ObjectRegistry`](/advanced/world/runtime/object-registry) | `register_spawner`, `get_spawner`, `get_all_spawners`, `unregister_spawner`; saves `placed_spawners` and restores them; skips what a spawner made when it saves the entities, the objects and the dropped items |
| [`WorldScene`](/advanced/world/runtime/world-scene) | Collects the *Spawners* container (`objects["spawners"]`), lists spawners in `WorldData.spawners` and removes the record of one that was deleted from the scene |

## Slots

A spawner has `get_slot_count()` slots: one for *Point*, `max_alive` for *Volume*, none at the start for *Painted* (its slots are made per chunk, see below). A slot is in one of three states:

- **EMPTY**: it will roll when it may.
- **ALIVE**: what it made is there (`members`: the NPCs, the object, the dropped items; `group`: the `EncounterGroup` of a fight-as-one group; `snapshot`: what was made, to make it again after a load).
- **WAITING**: the respawn time runs (`wait` seconds).

`_process` calls `tick(seconds)` every `TICK` (0.5 s). One look at a slot:

1. **ALIVE and finished** (every NPC dead, every dropped item gone, an object freed): `_end_slot` releases the group, picks a respawn time and the slot **waits**. A thing that is none of these (an object that still stands) is never finished: an interactable is finished when it is freed.
2. **ALIVE with a despawn radius**, no player within it and nothing in combat: the members are freed and the slot is **empty**.
3. **WAITING**: the time goes down; at zero the corpses are freed and the slot is **empty**.
4. **EMPTY**, the spawner is active and `_may_spawn` (a player within the activation radius, none closer than the minimum distance): `_fill_slot`.

`_fill_slot` rolls `SpawnTableDefinition.roll`; *Nothing* (or an empty roll) sends the slot to **waiting**. The result is a **plan** (`kind`, `target_id`, `count`, `level`, `amount`, `group`, and `place` in the Volume and Painted modes) that `_make(plan, place)` turns into nodes: `ObjectRegistry.spawn_npc(id, position, level)`, `spawn_interactable`, or `LootDispatcher.deliver_to_ground`. Every node gets the meta `spawner_made`. A group (`group` and more than one member) gets a new `EncounterGroup` registered with the registry.

`spawn_npc` takes a **level**: it is kept in `Entity.spawn_level_override` and `NpcLevels.base_level_of` honours it.

## What is made: SpawnMaker

`SpawnMaker` (`data_classes/spawning/spawn_maker.gd`) turns a line of a table into things: `plan_of(entry, rng)` gives the plan (`kind`, `target_id`, `count`, `level`, `amount`, `group`), `make(plan, place, system_hub, rng, rotation, from_spawner)` makes the NPCs (`ObjectRegistry.spawn_npc`, in a ring round the place for a group), the interactable or the dropped things (`LootDispatcher.deliver_to_ground`), and `make_group` makes the dynamic `EncounterGroup` of a group that fights as one. `Spawner` uses it with `from_spawner = true` (the nodes get the meta `spawner_made`: the registry leaves them out of its save); the `SpawnFromTableAction` uses it with `false` (they are ordinary dynamic things and are saved).

## Events

The spawner has the signals `spawned(slot_index, members)`, `slot_emptied(slot_index)` (what a slot made is gone: the wait starts) and `active_changed(is_on)`. `SpawnerTrigger` connects to them in `setup()` (it finds the spawner with `ObjectRegistry.get_spawner`, so the world must be loaded) and fires with `{"spawner_id", "spawner_event"}`. `set_active_state(bool)`, `reset(remove_what_stands)` and `get_alive_count()` are what `SetSpawnerActiveAction`, `ResetSpawnerAction` and `SpawnerAliveCountCondition` call; `SpawnerActiveCondition` reads `active`. The property name `spawner_id` is mapped to the `unique_spawner` database in `PropertySelectorRegistry`, so the editors show a picker of the spawners of the Uniques list.

## Places (Volume and Painted)

A *Point* spawner makes everything at its own position. For the other modes `_fill_slot` asks `_pick_place(slot, for_npc, positions)` after the roll (a roll that finds no place stays in `slot.pending` and is tried again at the next look). A place is tried up to `PLACE_TRIES` (12) times; a candidate is rejected when:

- there is no ground (Volume: `TerrainService.get_ground` from the top of the shape down through its height, and the ground must be inside the shape: `contains_point`; Painted: `ChronicleTerrain.get_height` of the random point of a painted cell, NAN = no tile or a hole);
- the slope of the ground is above `max_slope`;
- a player is within `min_player_distance`;
- an NPC is to stand there, `only_walkable` is on and the navigation map has regions but none within 1.5 m of the place (a world with no baked navigation says yes).

The *Volume* activation and despawn distances are counted from the **world box of the shape** (`_world_bounds`, the shape box transformed), not from the node.

### Painted: chunks

`tick` calls `_update_chunks(positions, seconds)` first. `terrain_source` (or the first `ChronicleTerrain` of the group that is not a copy) gives the paint: the layer `TerrainLayers.SPAWNERS`, in which a cell holds the **id of the `UniqueSpawnerData`**. A chunk is 4 x 4 cells (16 m, `CHUNK_SIZE`). `_chunk_cells(chunk)` finds the cells of a chunk painted with this spawner (cached in `_cell_cache`, cleared when the layers emit `painted`). `get_chunk_slot_count(chunk)` is `floor(density * painted area / 1000 + fraction)`, where the fraction comes from the hash of the chunk and the spawner id: the same chunk always has the same number.

- A chunk **opens** (`_open_chunk`) when it is within the activation radius of a player (80 m when it is 0) and has places: slots are made for it (`Slot.chunk`, `Slot.chunk_index`), a slot that has a remembered wait starts waiting for it.
- A chunk **closes** (`_close_chunk`) when no player is within the despawn radius (or 1.25 x the activation radius), or when its paint is gone, unless something in it is in combat. The members are freed; the waits of the slots (and of killed things that were not yet counted) are kept in `_memory[chunk]` (a list of seconds), which counts down while the chunk is closed.

## Saving

`to_save_data()` returns `{"unique_id", "active", "slots": [{"state", "wait", "plan"}]}` (`plan` only for an alive slot; its `place` is saved as three numbers). A **Painted** spawner has no `slots` and saves `"memory": [{"chunk": [x, y], "waits": [...]}]` instead: only the chunks that have a place waiting. `from_save_data` frees what the spawner holds and puts the state back: a **waiting** slot keeps its time, an **alive** slot gets its plan as `pending` and **makes it again** at the next look that may spawn (a player near), so the numbers of the plan are turned back to ints (JSON gives floats). `ObjectRegistry.to_save_data` leaves out every entity, interactable and dropped item with the meta `spawner_made`.

## Editor

The Spawners button of the placement tool is `PlacementKinds.Kind.SPAWNER` (three entries: point, volume with a box shape, painted; the ghost is a ball or a box; it goes in the *Spawners* container). The volume and the painted entry give the new node a `UniqueSpawnerData` with the mode, which the record made on entering the scene takes over (with the density, slope and colour).

The terrain tools: `TerrainSpawnerBrush` (extends `TerrainZoneBrush` and works in `TerrainLayers.SPAWNERS` with `settings.spawner_id`; the tool ids are `spawner_paint`, `spawner_fill`, `spawner_erase`, category *Spawners*, icons `spawner_*.svg` in `assets/toolbar_icons/terrain`), `TerrainPaletteBar.Mode.SPAWNERS` (the Spawners bar: the Painted spawners of the world of the scene, each with a swatch of its `paint_color`) and `ChronicleTerrain.overlay_layer` (the layer the overlay of the *Zones* button shows: `TerrainEditorTool._update_palettes` sets it to the spawners while a spawner tool is chosen and back to the zones for a zone tool). `ChronicleTerrain.get_spawner_at(x, z)` reads the paint. The overlay is its own flag in `TerrainOverlaySettings` (`spawners`, which turns `zones` off and the other way round; `apply_to` sets `terrain.overlay_layer` and passes `zones or spawners` to `set_overlay`), with a Spawners button in the view bar and the hotkey action `overlay_spawners`. When a Painted spawner is deleted (`Spawner._on_deleted` in the editor, or `WorldScene` when the scene is saved without it) `Spawner.erase_paint(root, id)` calls `TerrainLayers.clear_value(SPAWNERS, id, record)` on every terrain below the root. The Unique Object panel shows the groups of `UniqueSpawnerData`; the Uniques editor has a **Spawners** type with its own list and info text. The icon is `res://addons/chroniclenode/assets/node_icons/spawner_icon.svg`.

## Tests

`tests/world_audit.gd` (`t_spawners`, `t_spawner_volume`, `t_spawner_painted`): registration, a group with its level, the encounter group, saving and the exclusion of spawner-made entities, the wait and the next group, the minimum distance, the activation radius, switching on and off, leaving when far, saving and loading (alive and waiting), *Nothing*, money and an interactable. The volume checks fill the places inside a box, save and restore them, and respect the distance to the shape and the minimum distance; the painted checks paint a test terrain, open the chunks round the player, check that things stand on painted ground, remember what was killed through closing a chunk and a save, and close the chunks when the paint is erased. `tests/terrain_spawner_paint_audit.gd` (22 checks) covers the brush, the layer being apart from the zones, saving into the tile, the overlay layer and the Spawners bar. `tests/placement_tool_check.gd` checks the button and the nodes it makes.

## See also

- [Spawn tables: how they are built](/advanced/world/spawn-tables), [Encounters](/advanced/world/encounters), [World: how it is built](/advanced/world/).
