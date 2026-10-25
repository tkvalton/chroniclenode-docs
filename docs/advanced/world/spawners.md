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

A spawner has `get_slot_count()` slots (one for *Point*). A slot is in one of three states:

- **EMPTY**: it will roll when it may.
- **ALIVE**: what it made is there (`members`: the NPCs, the object, the dropped items; `group`: the `EncounterGroup` of a fight-as-one group; `snapshot`: what was made, to make it again after a load).
- **WAITING**: the respawn time runs (`wait` seconds).

`_process` calls `tick(seconds)` every `TICK` (0.5 s). One look at a slot:

1. **ALIVE and finished** (every NPC dead, every dropped item gone, an object freed): `_end_slot` releases the group, picks a respawn time and the slot **waits**. A thing that is none of these (an object that still stands) is never finished: an interactable is finished when it is freed.
2. **ALIVE with a despawn radius**, no player within it and nothing in combat: the members are freed and the slot is **empty**.
3. **WAITING**: the time goes down; at zero the corpses are freed and the slot is **empty**.
4. **EMPTY**, the spawner is active and `_may_spawn` (a player within the activation radius, none closer than the minimum distance): `_fill_slot`.

`_fill_slot` rolls `SpawnTableDefinition.roll`; *Nothing* (or an empty roll) sends the slot to **waiting**. The result is a **plan** (`kind`, `target_id`, `count`, `level`, `amount`, `group`) that `_make` turns into nodes: `ObjectRegistry.spawn_npc(id, position, level)`, `spawn_interactable`, or `LootDispatcher.deliver_to_ground`. Every node gets the meta `spawner_made`. A group (`group` and more than one member) gets a new `EncounterGroup` registered with the registry.

`spawn_npc` takes a **level**: it is kept in `Entity.spawn_level_override` and `NpcLevels.base_level_of` honours it.

## Saving

`to_save_data()` returns `{"unique_id", "active", "slots": [{"state", "wait", "plan"}]}` (`plan` only for an alive slot). `from_save_data` frees what the spawner holds and puts the state back: a **waiting** slot keeps its time, an **alive** slot gets its plan as `pending` and **makes it again** at the next look that may spawn (a player near), so the numbers of the plan are turned back to ints (JSON gives floats). `ObjectRegistry.to_save_data` leaves out every entity, interactable and dropped item with the meta `spawner_made`.

## Editor

The Spawners button of the placement tool is `PlacementKinds.Kind.SPAWNER` (one entry, the point spawner; the ghost is a ball; it goes in the *Spawners* container). The Unique Object panel shows the groups of `UniqueSpawnerData`; the Uniques editor has a **Spawners** type with its own list and info text. The icon is `res://addons/chroniclenode/assets/node_icons/spawner_icon.svg`.

## Tests

`tests/world_audit.gd` (`t_spawners`): registration, a group with its level, the encounter group, saving and the exclusion of spawner-made entities, the wait and the next group, the minimum distance, the activation radius, switching on and off, leaving when far, saving and loading (alive and waiting), *Nothing*, money and an interactable. `tests/placement_tool_check.gd` checks the button and the node it makes.

## See also

- [Spawn tables: how they are built](/advanced/world/spawn-tables), [Encounters](/advanced/world/encounters), [World: how it is built](/advanced/world/).
