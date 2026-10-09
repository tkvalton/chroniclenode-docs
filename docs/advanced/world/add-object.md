# Add Object: how it is built

[`AddObjectToolbarManager`](/advanced/world/editor-tools/add-object-toolbar-manager) is a `RefCounted` made by the plugin (`plugin.gd`: `_setup_add_object_manager_functionality`). It watches the editor and shows a `MenuButton` ("Add Object") in the 3D editor's menu container (`CONTAINER_SPATIAL_EDITOR_MENU`) while the open scene is a world scene.

## What it watches

| Signal | What it does |
|---|---|
| `EditorPlugin.scene_changed` | If the new root `is WorldScene`, keeps it as `current_world_scene` and shows the button; otherwise hides it |
| `EditorPlugin.main_screen_changed` | The button is shown on the **3D** screen only |

`activate()` / `deactivate()` are called by the plugin; `deactivate()` removes the button, frees the catalog dialog and disconnects the signals.

## The four choices

| Menu item | Code | Result |
|---|---|---|
| Add NPC | opens the `ListCatalog` on `"entities"`; `_on_entity_selected(id)` | `NPC.new()` with `definition` = `Database.get_resource("npc", id)`, a child of the `Entities` container |
| Add Interactable | the catalog on `"interactables"`; `_on_interactable_selected(id)` | `InteractableObject.new()` with its definition, in `Interactables` |
| Add Region | `_create_region_directly()` | `Region.new()` in `Regions` |
| Add Encounter | `_create_encounter_directly()` | `Encounter.new()` in `Entities` |

`_get_or_create_container(name)` finds a `Node3D` child of the world scene with that name or makes it. Every node is given `owner = current_world_scene` (so it is saved with the scene), named `<display name>_<unix time>`, placed at the origin, and selected.

## Where the database comes in

The manager does not create database resources. The **node** does, when it enters a world scene in the editor:

- `NPC` / `InteractableObject` create their `UniqueEntityData` / `UniqueInteractableData` in `_enter_tree` if they have none, with the id of the world from `WorldScene.world_data`.
- `Region` (`_check_and_create_region_data`) and `Encounter` (`_check_and_create_unique_data`) do the same for `RegionData` and `UniqueEncounterData`.
- On `scene_pre_save` each node writes its position and rotation into its data (`update_position_from_node`, `_sync_position_to_data`).
- Deleting the node runs its `_on_*_deleted` cleanup, which deletes the data from the database. A node that is only reparented is not deleted (`_check_if_really_deleted` waits a frame and checks it is still out of the tree).

Because the nodes manage themselves, a scene edited by hand, copied, or built by script gets the same uniques as one built with the menu.

## Extending

To add a fifth kind, give your node the same four duties (create its data when it enters a world scene, sync on save, clean up on delete, register in `ObjectRegistry`), add an entry to `MenuItems` and `_on_menu_item_selected`, and a creation function like `_create_region_directly`.

## See also

- [World: how it is built](/advanced/world/), [Regions](/advanced/world/regions), [Encounters](/advanced/world/encounters).
