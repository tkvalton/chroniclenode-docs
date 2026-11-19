# Skeletons

A **skeleton** is the body of a creature or a character: the scene with its `Skeleton3D`, its meshes and its **points**, the places where effects, shots and weapons sit on it. **Entity Assets > Skeletons** lists the skeleton scenes of `res://src/data/meshes/skeletons/` and lets you set the points of the selected one in a large 3D view.

Every `.tscn` file in that folder is an entry, named by its file name. NPCs, characters and classes choose one as their [Entity skeleton](/basic/entities/npcs). The scenes of chests, doors and other objects are in the [Interactable Scenes](/basic/entity-assets/interactable-scenes) tab.

## The tab

| Part | What it does |
|---|---|
| **The list** (left) | Every skeleton with a small picture, a **Search** box and **Refresh** (read the folder again). **Create Skeleton** is under it |
| **The line** over the right side | The name and file of the selected skeleton, and **Open in Editor** (Godot's own scene editor) |
| **Type** | The kind of skeleton: General, Modular or Custom (see below) |
| **The Points tool** | The points of the skeleton: a list on the left, the skeleton in a 3D view on the right |

## Kinds of skeleton

A skeleton scene has a `Skeleton3D` with a ChronicleNode script. There are three kinds, each building on the one before:

| Kind | What it is for |
|---|---|
| **General skeleton** | A creature or character made of **one mesh**: a wolf, a skeleton, a ready-made hero |
| **Modular skeleton** | A character made of **swappable body parts** (head, torso, arms, hands, hips, legs, feet) and face features. Armor replaces the body parts it covers. Its **equipment tag** (`humanoid`, `beast`, `undead`) picks which folder of [meshes](/basic/entity-assets/equipment-meshes) its equipment comes from |
| **Custom skeleton** | A modular skeleton with **materials for skin, hair and eyes** and blend shapes, so the player can customize it in [character creation](/basic/game-settings/character-creation) |

## The points

A point is a `Marker3D` under a `BoneAttachment3D` of the bone it is on, so it follows that bone as the model moves, and sits **where you put it** on the bone: the palm rather than the wrist bone, the middle of the head rather than the neck. Overhead, Feet, Front and Behind are on the model itself, not on a bone: they turn with the model but not with its animations. Each skeleton has the same fixed list:

| Point | Bone it starts on | Used by |
|---|---|---|
| **Head** | Head | Head effects, where shots leave (the muzzle), the eyes (line of sight, aim) |
| **Chest** | Chest | Chest effects, the end of beams aimed at the body |
| **Left hand**, **Right hand** | LeftHand, RightHand | Effects in the hands (casting, the **Hands** location) |
| **Overhead** | The model | Effects above the model (stuns, markers) |
| **Feet** | The model | Effects on the ground under the model |
| **Front** | The model | Effects in front of the model at its chest (a tome, a scroll, a circle in front of a caster), whatever its height |
| **Behind** | The model | Effects behind the model at its chest (wings, a portal behind) |
| **Back**, **Hip left**, **Hip right** | Chest, Hips | Gear on the back and hips |
| **Shoulder**, **Elbow**, **Knee** (left and right) | The upper arm, lower arm, lower leg | Gear on the shoulders, elbows, knees |

The **effect locations** of a VFX selection (Head, Chest, Left hand, Right hand, Overhead, Feet, Front, Behind) are these points. **Weapon** is the weapon in the main hand.

Front and Behind are made at the height of the chest bone, in front of and behind it by a share of that height (closer on a small creature). The model's front is its +Z. A model without them still works: the game puts stand-ins at the height of its Chest point. Use **Add missing points** to give an older skeleton its own.

### The weapon grips

The two **grips** (**Main hand grip**, **Off hand grip**) are points too: the weapon meshes of the skeleton are under them. A weapon mesh has its **pivot at the handle**, so setting the grip once in the palm makes every weapon sit in the hand. A weapon's own offset, set in [Equipment Meshes](/basic/entity-assets/equipment-meshes) with its Grip tool, is added on top of the grip for one weapon that needs it.

### Equipment mesh holders

The nodes that hold the meshes of equipment (a helmet, shoulder pads, a cloak) are separate from the points. They are listed by the [equipment types](/basic/equipment-definitions/equipment-type) that use them, and the points tool does not change them.

## The Points tool

The list on the left has every point and grip, with the bone each is on. A point the skeleton does not have yet says **missing** in orange; **Add missing points** makes them all where they start (on their bone) and saves the scene.

The 3D view on the right shows the skeleton in the middle, playing an animation you choose (the **Animations** set and the **Animation** above the view; choose **None** to see it standing still). Every point is a **dot**: white for the points, orange for the grips, yellow for the picked one. **Click a dot** or a name in the list to pick it.

The picked point has the **move gizmo**: a red X, a green Y and a blue Z arrow.

- **Hold an arrow and drag** to move the point along that axis only.
- Hold **Ctrl** to move in steps of a centimetre.
- **Local axes** (above the view) turns the arrows to the axes of the bone; off, they are the world's (Y is up).

Under the list, for the picked point:

| Control | What it does |
|---|---|
| **Bone** | The bone the point is on (**The model**: on the model itself). It stays where it is in the view; its place on the new bone is worked out |
| **Position** | Where it is on its bone, in metres along the bone's axes (typed) |
| **Turn** | How it is turned on its bone, in degrees. An effect or a weapon on it is turned the same way |
| **X +90**, **Y +90**, **Z +90** | A quarter turn round an axis of the bone |
| **Reset** | Back where it starts on its bone |
| **Effect** | Plays a loop effect on the picked point, to judge where it is (not saved) |
| **Weapon** | For a grip: a weapon held in both hands, to judge the grips (not saved) |

**Every change is saved into the skeleton scene at once**, so the game and Godot's own scene view have it; the line under the list says what was saved. You can also open the scene and move the `Marker3D` nodes by hand.

## Create Skeleton

**Create Skeleton** converts a scene you imported from your 3D program:

1. **Browse** to the `.tscn` that contains a `Skeleton3D`.
2. Give it a **name** (`humanoid_warrior`, `beast_wolf`) and choose the **kind**: General, Modular or Custom.
3. **Convert** finds the skeleton, gives it the script of its kind, the equipment mesh holders, the weapon meshes and every point on its bone, saves it in the skeletons folder and selects it.

Then set the points with the Points tool. The points are made on the right bones, but only you can put them in the palm or the middle of the head.

## Pictures

Every skeleton in the list has a small **picture**, drawn by the editor and kept in `res://src/data/model_scenes/.thumbnails/`. They are made the first time the tab opens and on **Refresh**; delete the folder to make them all again.

## See also

- [Interactable Scenes](/basic/entity-assets/interactable-scenes): the markers of objects, with the same tool.
- [Entities](/basic/entities/) for choosing a skeleton; [Equipment Meshes](/basic/entity-assets/equipment-meshes) for what goes on one.
- [How model scenes are built](/advanced/assets/).
