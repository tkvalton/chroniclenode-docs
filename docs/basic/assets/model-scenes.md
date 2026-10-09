# Model Scenes

A **model scene** is the body of something in the game: the scene that holds its meshes, its skeleton (for a creature or a character), its collision and its animations. **Assets > Model Scenes** lists them in two groups:

| Group | Folder | Used by |
|---|---|---|
| **Skeletons** | `res://src/data/meshes/skeletons/` | The [Entity skeleton](/basic/entities/npcs) of NPCs, characters and classes |
| **Interactables** | `res://src/data/meshes/interactable_models/` | The [Object model scene](/basic/entities/interactables) of chests, doors, switches and destructibles |

Every `.tscn` file in those folders is an entry, named by its file name. The demo has two skeletons (`human_male`, `human_female`) and one interactable, a `target_dummy`.

## The editor

| Control | What it does |
|---|---|
| **Search**, **Refresh Database** | Filter the lists; read the folders again |
| **Create Skeleton** | Turns a scene you already have (a model with a `Skeleton3D`) into a ChronicleNode skeleton, see below |
| **Create Interactable** | Makes a new interactable model scene with its essential nodes in place |
| **Open in Editor** | Opens the selected scene in the 3D editor |
| The information and checks | **Type**, the **Equipment Tag** (for a modular skeleton), and a list of required nodes that are **missing** |

The number of skeletons and interactables is at the bottom.

## Skeletons

A skeleton scene has a `Skeleton3D` as its root, with a ChronicleNode script that gives it **attachment points** (the places equipment and effects attach) and **weapon meshes** (the main-hand and off-hand weapon). There are three kinds, each building on the one before:

| Kind | What it is for |
|---|---|
| **General skeleton** | A creature or character made of **one mesh**: a wolf, a skeleton, a ready-made hero. Equipment appears on the attachment points and as weapons |
| **Modular skeleton** | A character made of **swappable body parts** (head, torso, upper and lower arms, hands, hips, upper and lower legs, feet) and face features. Armor replaces the body parts it covers. It has an **equipment tag** (`humanoid`, `beast`, `undead`) that picks which folder of [meshes](/basic/assets/meshes) its equipment is taken from |
| **Custom skeleton** | A modular skeleton with **materials for skin, hair and eyes** and blend shapes, so the player can customize it in [character creation](/basic/game-settings/character-creation) |

### Attachment points

A skeleton has named points (Godot nodes, usually a `BoneAttachment3D`). The editor lists which are missing. The required ones are:

| Point | Where |
|---|---|
| **HeadAttachment**, **ChestAttachment** | Head, chest |
| **LeftHandAttachment**, **RightHandAttachment** | Hands |
| **MainHandWeapon**, **OffHandWeapon** | The two weapon meshes, ready in the hands |

The others are optional and used by the equipment types that need them: face, helmet, back, cloak, left and right shoulder, left and right elbow, left and right knee, and four hip points (left, right, front, back). A mount-capable skeleton can also have a *mount seat* and a *rider marker*.

### Create Skeleton

**Create Skeleton** converts a scene you imported from your 3D program:

1. **Browse** to the `.tscn` that contains a `Skeleton3D`.
2. Give it a **target name** (`humanoid_warrior`, `beast_wolf`) and choose the **kind**: General, Modular or Custom.
3. **Convert** finds the skeleton, attaches the right script, adds the attachment points and the weapon meshes, saves the scene in the skeletons folder and opens it.

You still place the attachment points on the right bones afterwards: they are made, but only you know where the hand is.

## Interactable models

An **interactable model** is the look and the physics of a chest, a door or a barrel. **Create Interactable** makes a scene with:

- a `StaticBody3D` and a `CollisionShape3D` (a box to start with) for collision and for being hit;
- an `AnimationPlayer`, whose animations are found by themselves: when you save the scene its animation names are written into the scene, so the editors can offer *open*, *close*, *damaged* and so on;
- two `Marker3D` points: **BodyMark** (the middle of the object, for effects and sounds) and **TopMark** (above it, for effects);
- an optional **NameplateMarker**, which gives an object with stats a nameplate above it.

Put your meshes under the root, resize the collision, and add animations. Any `CollisionShape3D` in the scene counts as collision. The *Show detailed info* button lists the nodes and which are required.

## See also

- [Entities](/basic/entities/) and [Interactables](/basic/entities/interactables) for choosing a model; [Meshes](/basic/assets/meshes) for what goes on a skeleton.
- [How model scenes are built](/advanced/assets/).
