# Trigger areas: how they are built

A [`TriggerArea`](/advanced/world/runtime/trigger-area) is an `Area3D` node placed in a world scene. It is both the thing in the world and its own manager: it makes its [`TriggerAreaData`](/advanced/world/world-data/trigger-area-data) in the database, keeps it in step with the node, registers with the [`ObjectRegistry`](/advanced/world/runtime/object-registry), and sleeps until something watches it.

## In the editor

| Event | What the trigger area does |
|---|---|
| Enters a world scene (`_enter_tree` in the editor) | `_check_and_create_trigger_area_data`: if it has no `trigger_area_data`, makes a `TriggerAreaData` (new id, `map_id` of the world) and saves it in the `trigger_area` database |
| `area_name` is set | Copies it to `trigger_area_data.display_name` and saves the record |
| The scene is about to be saved (`scene_pre_save`) | `_sync_position_to_data`: writes `global_position` and `global_rotation` into the record |
| Leaves the tree | `_check_if_really_deleted` waits a frame; a node that is truly gone runs `_on_trigger_area_deleted`, which deletes the record. A node that is only reparented keeps it |
| `_get_configuration_warnings` | "Trigger area must be placed in a WorldScene", and "Trigger area missing TriggerAreaData" |

The node's own exports are `trigger_area_data` and `area_name`. `display_name` (a property) is the area name, else the record's name; the event triggers read it for their descriptions.

## At run time

A trigger area registers with the registry (`register_trigger_area`, found by `get_trigger_area(id)`) when its world loads, and unregisters itself when it leaves the tree.

**It sleeps until watched.** `set_active(false)` sets `monitoring` and `monitorable` off, so an unwatched trigger area costs nothing. Watchers call `add_reference()` (the first one calls `set_active(true)`) and `remove_reference()` (the last one calls `set_active(false)`). The four **trigger area triggers** of the events ([`TriggerAreaDetectionAnyEntityTrigger`](/advanced/events-and-quests/triggers-trigger-area/trigger-area-detection-any-entity-trigger), [`TriggerAreaDetectionPlayerTrigger`](/advanced/events-and-quests/triggers-trigger-area/trigger-area-detection-player-trigger), [`TriggerAreaDetectionFactionTrigger`](/advanced/events-and-quests/triggers-trigger-area/trigger-area-detection-faction-trigger), [`TriggerAreaDetectionUniqueEntityTrigger`](/advanced/events-and-quests/triggers-trigger-area/trigger-area-detection-unique-entity-trigger)) add a reference when their event is armed and remove it when it ends or is disarmed. Two watchers keep it awake until both are gone.

**Asking without watching.** `get_bodies_inside() -> Array[Node3D]` asks the physics space with the shapes of the trigger area: for each *direct* `CollisionShape3D` child that is enabled and has a shape, it runs `intersect_shape` with the trigger area's collision mask (bodies only, up to 64 per shape). It works whether or not the trigger area is awake, so the two conditions ([`PlayerTriggerAreaPresenceCondition`](/advanced/shared-systems/general-conditions/player-trigger-area-presence-condition), [`TriggerAreaPresenceCondition`](/advanced/shared-systems/general-conditions/trigger-area-presence-condition)) can ask any trigger area at any time. A shape that is not a direct child of the trigger area is not seen.

`PlayerTriggerAreaPresenceCondition.player_slot` is a [`PlayerEventAction.PlayerTarget`](/advanced/events-and-quests/bases/player-event-action): `ANY_PLAYER`, `ALL_PLAYERS`, `CURRENT_PLAYER`, `PLAYER_1...`. `TriggerAreaPresenceCondition` takes a `trigger_area_id`, an optional placed NPC (`entity_unique_id`) and an optional faction.

## Layers

`TriggerArea._init` sets what a trigger area **built in code** feels: it sits on the `TRIGGER_AREAS` layer ([`CollisionLayerUtility.CollisionLayer`](/advanced/game-settings/collision/collision-layer-utility)) and its mask has `PLAYER_CHARACTERS`, `ALL_NPCS` and `PLAYER_PETS`. A trigger area saved in a scene keeps the layers it was saved with.

## Extending

- **A new trigger on trigger areas:** extend [`EventTrigger`](/advanced/events-and-quests/bases/event-trigger), call `add_reference()` on the trigger area when armed, connect to `body_entered` / `body_exited`, `remove_reference()` when done (see the existing four).
- **A new presence rule:** extend [`Condition`](/advanced/shared-systems/condition-bases/condition), ask `trigger_area.get_bodies_inside()` and filter the bodies.

## See also

- [World: how it is built](/advanced/world/), [Trigger areas](/basic/world/trigger-areas).
