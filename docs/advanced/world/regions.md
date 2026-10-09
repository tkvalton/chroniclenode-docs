# Regions: how they are built

A [`Region`](/advanced/world/runtime/region) is an `Area3D` node placed in a world scene. It is both the thing in the world and its own manager: it makes its [`RegionData`](/advanced/world/world-data/region-data) in the database, keeps it in step with the node, registers with the [`ObjectRegistry`](/advanced/world/runtime/object-registry), and sleeps until something watches it.

## In the editor

| Event | What the region does |
|---|---|
| Enters a world scene (`_enter_tree` in the editor) | `_check_and_create_region_data`: if it has no `region_data`, makes a `RegionData` (new id, `map_id` of the world) and saves it in the `region` database |
| `area_name` is set | Copies it to `region_data.display_name` and saves the record |
| The scene is about to be saved (`scene_pre_save`) | `_sync_position_to_data`: writes `global_position` and `global_rotation` into the record |
| Leaves the tree | `_check_if_really_deleted` waits a frame; a node that is truly gone runs `_on_region_deleted`, which deletes the record. A node that is only reparented keeps it |
| `_get_configuration_warnings` | "Region must be placed in a WorldScene", and "Region missing RegionData" |

The node's own exports are `region_data` and `area_name`. `display_name` (a property) is the area name, else the record's name; the event triggers read it for their descriptions.

## At run time

A region registers with the registry (`register_region`, found by `get_region(id)`) when its world loads, and unregisters itself when it leaves the tree.

**It sleeps until watched.** `set_active(false)` sets `monitoring` and `monitorable` off, so an unwatched region costs nothing. Watchers call `add_reference()` (the first one calls `set_active(true)`) and `remove_reference()` (the last one calls `set_active(false)`). The four **region triggers** of the events (`RegionDetectionAnyEntityTrigger`, `RegionDetectionPlayerTrigger`, `RegionDetectionFactionTrigger`, `RegionDetectionUniqueEntityTrigger`) add a reference when their event is armed and remove it when it ends or is disarmed. Two watchers keep it awake until both are gone.

**Asking without watching.** `get_bodies_inside() -> Array[Node3D]` asks the physics space with the shapes of the region: for each *direct* `CollisionShape3D` child that is enabled and has a shape, it runs `intersect_shape` with the region's collision mask (bodies only, up to 64 per shape). It works whether or not the region is awake, so the two conditions (`PlayerRegionPresenceCondition`, `RegionPresenceCondition`) can ask any region at any time. A shape that is not a direct child of the region is not seen.

`PlayerRegionPresenceCondition.player_slot` is a `PlayerEventAction.PlayerTarget`: `ANY_PLAYER`, `ALL_PLAYERS`, `CURRENT_PLAYER`, `PLAYER_1...`. `RegionPresenceCondition` takes a `region_id`, an optional placed NPC (`entity_unique_id`) and an optional faction.

## Layers

`Region._init` sets what a region **built in code** feels: it sits on the `REGIONS` layer (`CollisionLayerUtility.CollisionLayer`) and its mask has `PLAYER_CHARACTERS`, `ALL_NPCS` and `PLAYER_PETS`. A region saved in a scene keeps the layers it was saved with.

## Extending

- **A new trigger on regions:** extend `EventTrigger`, call `add_reference()` on the region when armed, connect to `body_entered` / `body_exited`, `remove_reference()` when done (see the existing four).
- **A new presence rule:** extend `Condition`, ask `region.get_bodies_inside()` and filter the bodies.

## See also

- [World: how it is built](/advanced/world/), [Regions](/basic/world/regions).
