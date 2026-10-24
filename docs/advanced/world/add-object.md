# Placing objects: how it is built

[`PlacementTool`](/advanced/world/add-object) is a `RefCounted` made by the plugin (`plugin.gd`: `placement_tool`). It replaced the Add Object menu manager. Files are in `editor_components/3d_scene_tools/placement/`.

| Class | What it is |
|---|---|
| `PlacementTool` | The buttons (one `Button` for each `PlacementKinds.Kind`, in a `HBoxContainer` in `CONTAINER_SPATIAL_EDITOR_MENU`, plus Test World), the palette, the ghost, the input and the placing. Watches `scene_changed` (a `WorldScene` shows the buttons) and `main_screen_changed` (3D only) |
| `PlacementKinds` | Static: the kinds, what each lists (`entries`), the shape of the ghost (`ghost_of`) and the node each makes (`make_node`: the code of the old menu: `NPC.new()` with its definition, `InteractableObject.new()`, `DroppedItem.make_node()` with a placement id, `Encounter.new()`, the volumes with a box shape) |
| `PlacementPalette` | The bar along the bottom of the viewport: the list with pictures, the search, the Encounter menu, *Align to the ground*. Signal `entry_chosen` |
| `PlacementSnap` | The mouse ray: the terrain picker and a physics ray, the nearest wins; a hit on a placed object is skipped (the ray is cast again past it, up to 8 times); a plane when nothing is hit; `make_transform(hit, yaw, align)` |
| `PlacementGhost` | The model on the mouse: parts (the `MeshInstance3D` nodes of the scene, taken apart like a foliage scene, or a capsule, box or ball) drawn with the `RenderingServer` at 45 percent transparency. No node, no script, no collision |
| `PlacementKinds` (assets) | `ASSET_FOLDER`, `asset_files()` (every scene of the folder and its subfolders; the category is the path below the folder) and `asset_pictures()` (an `AssetThumbnails` that keeps its pictures in `ASSET_PICTURES`). The entries carry a `category`; `make_node` instantiates the scene and keeps its link to the file |
| `PlacementIcons` | The SVG icons of the buttons |

## The mouse

`plugin.gd` passes every event of the 3D viewport to `PlacementTool.forward_input` first. Mouse motion moves the ghost (it is not consumed: the camera keeps working). A left click places and is consumed (with its release). Esc stops; Q, E and R turn the ghost. The terrain tool stops the placement when its mode goes on, and the placement turns the terrain mode off.

## The snap

`PlacementSnap.find_along` casts a `TerrainPicker` ray over the terrain data (the editor makes no collision for the terrain) and a `PhysicsRayQueryParameters3D` ray in the world of the scene. The terrain gives the ground, the physics ray the floor of a building or a bridge; the nearest hit wins. About 72 microseconds for both, so it runs on every mouse move. The result is `{position, normal, source, collider}`.

## Placing

`place_at(transform)` makes the node with `PlacementKinds.make_node`, works out its local transform in the parent (the container, or the encounter chosen in the menu), and adds it as **one action** of the editor's `EditorUndoRedoManager` (`add_child`, `set_owner` for the node and its children (an instance of a scene owns only itself: its nodes stay inside the scene file), a reference to keep it alive). A new encounter is the first step of the same action. Without a plugin (a test) the nodes are added directly.

## Where the database comes in

The tool does not create database resources. The **node** does, when it enters a world scene in the editor (see the uniques): `NPC` / `InteractableObject` create their unique data, `TriggerArea` and `Encounter` theirs, each writes its position on `scene_pre_save`, and deleting the node deletes the data. A scene built by hand or by script gets the same uniques.

## Tests

`tests/placement_tool_check.gd` (72 checks, the asset folder and categories included): the snap on terrain, a building, a slanted ray, a placed object, the plane; the kinds, their icons and nodes; the ghost; the tool placing, the encounter menu, the palette.

## See also

- [Placing objects](/basic/world/add-object)
