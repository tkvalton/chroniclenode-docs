# Dropped items: how they are built

This page is for developers. For the settings and the way to use them, see [Dropped items](/basic/items/dropped-items).

A dropped item is a `RigidBody3D` made from a scene. A few classes make it, find it, save it and let characters take it; everything else (the loot rules, the event action, the drag out of the windows) only **asks the registry to make one**.

## The pieces

| Piece | What it does |
|---|---|
| [`DroppedItem`](/advanced/items/runtime/dropped-item) | The body: the visual, the label, the effects, the physics, the pickup area, the pickup itself, its own saving. Made from `dropped_item.tscn` |
| [`ObjectRegistry`](/advanced/world/runtime/object-registry) | Makes the items (`spawn_dropped_item`, `spawn_dropped_currency`), keeps the **placed** and the **spawned** ones apart, remembers what was taken, keeps the cap, counts the respawns and saves everything |
| [`LootDispatcher`](/advanced/items/generation-runtime/loot-dispatcher) | `deliver_to_ground` turns the drops of a loot rule into dropped items; `can_drop_to_ground` says whether it can |
| [`DroppedItemTargeting`](/advanced/game-settings/camera-and-controller/dropped-item-targeting) | Owned by the [`PlayerController`](/advanced/game-settings/camera-and-controller/player-controller): finds the item under the pointer or the crosshair, lights it up and picks it up |
| [`Player`](/advanced/entities/runtime/player) | `drop_from_bag`, `drop_item_instance`, the loss on death (`_lose_items_on_death`: the bag and what is worn, dropped or destroyed by `death_item_loss` and `death_equipment_loss`), and the interact target check |
| [`DragController`](/advanced/user-interface/in-game/drag-controller) | `_drop_to_world`: an item let go over the world |
| [`DropItemAction`](/advanced/events-and-quests/actions-items/drop-item-action), [`DropItemTask`](/advanced/behaviors/tasks/drop-item-task) | The event action and the behavior task |

## The life of an item

1. **Made.** Something calls `DroppedItem.drop(hub, instance, position, launch, velocity)` (or `drop_currency`). That reaches `ObjectRegistry.spawn_dropped_item`, which checks `dropped_items_enabled`, makes the node (`DroppedItem.make_node()`: the scene of the Gameplay Config, else the toolkit's) in the **SpawnedDroppedItems** container of the world scene, gives it the instance and **registers** it.
2. **Activated.** `register_dropped_item` calls `activate(hub, launch, velocity, restoring)`: the collision layer and mask are set (layer 8 *Items and loot* and the mouse layer; it collides with what the collision config says layer 8 collides with, the world by default), the visual, the label and the pickup area are built, the visual effects start and the physics mode is applied.
3. **Physics.** *Place on ground*: a ray down from above the item finds the ground and the item is frozen on it. *Settle then freeze*: the body gets a velocity (a given one, or a random upward throw) and is frozen when it sleeps, or after 6 seconds (`SETTLE_TIMEOUT`) whichever is first. An item that falls 60 m (`FALL_LIMIT`) below where it started goes back there. *Always simulated*: nothing freezes it. Then `landed` is emitted and the **pickup delay** counts down.
4. **Taken.** One of the ways in [Picking up](#picking-up) calls `try_pickup(taker, warn)`. The bag is asked first (`calculate_addable_quantity`), the stack (or the part that fits) goes in, `picked_up` is emitted, the sound plays; when nothing is left the item **finishes**.
5. **Finished.** `_finish(was_taken)` stops the effects, emits `removed`, tells the registry (`on_dropped_item_finished`) and frees the node. An item **placed by hand** is not freed but hidden and switched off, so it can be put back.

An item also finishes when its lifetime is over (`expire()`), when the cap of the world removes it (the oldest one) and when the world is unloaded.

### A quirk worth knowing

[`InventoryComponent.add_item`](/advanced/items/runtime/inventory-component) merges **part** of a stack into the stacks that are there, lowers the stack size of the instance and **returns false** when the rest does not fit. So a pickup never calls it before asking `calculate_addable_quantity`: it gives the instance whole when it all fits, and a new instance of the part that fits otherwise. Use the same order in your own code.

## The scene

`dropped_item.tscn` is a `RigidBody3D` with the `DroppedItem` script and these children, found by **unique name** (`%`). A node that is missing is made by the script, so `DroppedItem.new()` works too:

| Node | Type | What it is for |
|---|---|---|
| `%Visual` | Node3D | Holds the mesh or the sprite. The script clears and fills it |
| `%CollisionShape3D` | CollisionShape3D | The body. The script sizes a box to the model |
| `%PickupArea` | Area3D | Detects the player characters for walking over. Its shape is `%PickupShape`, a sphere of *Walk over radius* |
| `%NameLabel` | Label3D | The name. A billboard; shown by the label mode |
| `%EffectsRemote` | RemoteTransform3D | The visual effects of the item and its quality attach to it, so they follow the body. It does not push rotation or scale, so a beam stays upright |

### Changing how an item looks

Copy `dropped_item.tscn`, change the nodes (a different label font, a ring on the ground, a particle node), and put the copy in the Gameplay Config (*Scene*). The root must have the `DroppedItem` script or a script that extends it. Placed items are saved as instances of the scene they were made from, so a scene you change later changes the placed items that use it.

## Picking up

| Way | How it is done |
|---|---|
| **Walk over** | The pickup area. Only a `Player` that `is_current_player` takes the item; the check runs when someone enters, when the delay ends, and every physics frame while someone stands there |
| **Interact key** | The interaction area of the player already includes layer 8. `DroppedItem` answers what the player asks of an interact target (`is_interactable()`, `process_interaction`, `show_interact_prompt`, `set_current_target_on/off`) and `Player._is_valid_interact_target` accepts it. `is_interactable()` is only the *setting* (not the delay), because the list of nearby targets of the player is built when a body enters |
| **Mouse over** | `DroppedItemTargeting` casts a ray from the pointer on layers 1 and 8 twenty times a second; the item hit within *Mouse range* is hovered (`set_hover`: label and outline). A left click that the interface did not use picks it up. A pointer over a [`PanelUI`](/advanced/user-interface/panels/panel-ui) or a [`HUDUIElement`](/advanced/user-interface/hud/hudui-element) counts as not over the world |
| **Look at** | The same ray from the centre of the screen, when the mouse is captured; the interact key picks it up |

`try_pickup(taker, warn)` is the one door: it checks the delay, asks the bag, takes what fits, and (with `warn`) says "Your bag is full" through [`InstanceUtility.warn_player`](/advanced/managers/utilities/instance-utility). After a refusal the item waits 1.5 seconds (`RETRY_DELAY`) before it tries again, so a full bag does not warn every frame.

## Where items come from, in code

| You want | Call |
|---|---|
| An item instance on the ground | `DroppedItem.drop(hub, instance, position, launch, velocity)` |
| A pile of money | `DroppedItem.drop_currency(hub, currency_id, amount, position, launch)` |
| The drops of a loot table (a dictionary `{"items": [...], "currency": {...}}`) scattered around a place | `LootDispatcher.deliver_to_ground(drops, position, hub, rng, launch)` |
| The item of the player | `player.drop_from_bag(item, quantity)` (out of the bag), `player.drop_item_instance(instance)` (already out of it) |
| Scatter spots | `DroppedItem.scatter_position(origin, index, count, radius, rng)` |

[`LootRule.delivery`](/advanced/items/item-definitions/loot-rule) is read by `LootDispatcher.run`: a rule set to `GROUND` calls `deliver_to_ground` at the position of the holder when `can_drop_to_ground` says yes, else it delivers to the inventory as before (the holder needs no inventory for a ground rule). [`GatherInteraction.LootMode.ON_THE_GROUND`](/advanced/entities/interactions/gather-interaction) does the same for a gathering node.

## Placed items and the registry

The registry keeps two lists apart:

- **`placed_dropped_items`**, by `placement_id`: the items in the **DroppedItems** container of the world scene ([`WorldScene.get_world_objects()["dropped_items"]`](/advanced/world/runtime/world-scene)), registered with the other placed objects when a world loads. A placed item is **frozen where it was put** until it is taken, unless its *physics override* says otherwise.
- **`dynamic_dropped_items`**, by instance id: the items made while playing, in the **SpawnedDroppedItems** container. The cap (*Max in world*) counts these.

`taken_placements` maps the placement id of a taken item to the seconds until it lies there again (`-1` = for ever). It is part of the save. `process_lod` (called every frame by the [world container](/advanced/world/runtime/world-container)) counts it down and calls `respawn()` on the item, which makes a fresh roll of its item and puts it back at its place.

Placement ids are random positive numbers made by the Add Object tool (`DroppedItem.new_placement_id(container)`), and an item copied in the editor gets a new one when its `_ready` finds a sibling with the same id.

## Saving

`ObjectRegistry.to_save_data()` adds three keys to what it already saved:

```
"placed_dropped_items":  [ DroppedItem.to_save_data() ... ]   # only the ones still lying there
"dynamic_dropped_items": [ DroppedItem.to_save_data() ... ]   # only when droped_items_saved_to_map is on
"taken_placements":      { "placement id": seconds, ... }
```

An item saves its position, rotation, age, whether it has landed, and the **whole item instance** ([`ItemInstance.to_save_data()`](/advanced/items/runtime/item-instance)), so a generated item keeps its roll; a pile of money saves the currency and the amount. On loading (`from_save_data` of the registry, as for every placed object) the taken items are switched off, the placed ones that lie there take their saved state, the spawned ones that exist are removed and the saved ones are made again (frozen where they were, ready to take at once).

Because the registry state travels with the world snapshot, leaving a world and coming back uses the same path, and the *persistence logic* of the world decides whether it is remembered.

## Tests

`tests/dropped_items_audit.gd` (the body, the physics modes, every way of picking up, a full bag and part of a stack, the sources, the registry, placed items, saving) and `tests/dropped_items_editor_check.gd` (the settings, the editors, the placement ids, the Add Object entries).

## See also

- [Dropped items](/basic/items/dropped-items) (the chapter for designers)
- [Loot: how it is built](/advanced/items/loot), [Inventories: how they are built](/advanced/items/inventories)
