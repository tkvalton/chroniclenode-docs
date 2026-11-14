# Interactable Scenes

An **interactable scene** is the look and the physics of a chest, a door, a switch or a barrel. **Entity Assets > Interactable Scenes** lists the scenes of `res://src/data/meshes/interactable_models/` and lets you set the **markers** of the selected one in a large 3D view. Interactables choose one as their [Object model scene](/basic/entities/interactables).

The skeletons of creatures and characters are in the [Skeletons](/basic/entity-assets/skeletons) tab.

## The tab

| Part | What it does |
|---|---|
| **The list** (left) | Every scene with a small picture, a **Search** box and **Refresh**. **Create Interactable** is under it |
| **The line** over the right side | The name and file of the selected scene, and **Open in Editor** |
| **The Points tool** | The markers of the scene: a list on the left, the scene in a 3D view on the right |

## The markers

| Marker | Used by |
|---|---|
| **Chest** | Effects on the object: every effect location except Base, Feet and Overhead goes here |
| **Overhead** | Effects above the object |
| **Nameplate** | The name over an object that has stats (see [Nameplates](/basic/user-interface/nameplates)) |

A marker is a `Marker3D` on the scene, named by the scene's **Body Mark**, **Top Mark** and **Nameplate Marker** settings. If a setting is empty, the game looks for a marker by name (`ChestMarker`, `OverheadMarker`, `NameplateMarker`). A marker the scene lacks says **missing**; **Add missing points** makes it (Chest in the middle of the object, Overhead and Nameplate above it), sets the setting to it and saves the scene.

Pick a marker in the list or click its dot in the view, then **hold an arrow** of the move gizmo and drag to move it along that axis (Ctrl: steps of a centimetre). **Position** and **Turn** type it in; **Reset** puts it back where it starts. **Effect** plays a loop effect on it to judge it. Every change is saved into the scene at once. The tool works the same as in [Skeletons](/basic/entity-assets/skeletons#the-points-tool), without bones.

## Create Interactable

**Create Interactable** makes a scene with:

- a `StaticBody3D` and a `CollisionShape3D` (a box to start with) for collision and for being hit;
- an `AnimationPlayer`. When you save the scene, its animation names are written into it, so the editors can offer *open*, *close*, *damaged* and so on;
- the markers of effects.

It is saved to `res://src/data/meshes/interactable_models/`, selected, and opened in the editor. Put your meshes under the root, resize the collision and add animations. Any `CollisionShape3D` in the scene counts as collision.

## See also

- [Interactables](/basic/entities/interactables) for choosing a scene.
- [Skeletons](/basic/entity-assets/skeletons) for the points of creatures and characters.
