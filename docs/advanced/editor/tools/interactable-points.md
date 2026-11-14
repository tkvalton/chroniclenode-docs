<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# InteractablePoints

**Inherits:** [ScenePoints](/advanced/editor/tools/scene-points) < [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

THE POINTS OF AN INTERACTABLE SCENE (2026-11-14): its markers, on the scene itself (InteractableScene): Chest (body_mark: effects on the object), Overhead (top_mark: effects above it) and Nameplate (nameplate_marker: the name over an object that has stats). A marker is the one the export names, or found by its name (ChestMarker, OverheadMarker, NameplateMarker); one that is made gets that name and is set on the export.

## Methods

| | |
|---|---|
| `Array[Dictionary]` | [entries](#method-entries)() |
| `Node3D` | [node_of](#method-node-of)( `root: Node, key: String` ) |
| `Node3D` | [ensure](#method-ensure)( `root: Node, key: String` ) |
| `Transform3D` | [default_transform](#method-default-transform)( `root: Node, key: String` ) |

## Constants

- `Array[Dictionary]` **MARKERS** = `[`

## Method descriptions

### Array[Dictionary] entries() {#method-entries}

Every point of the kind: [&#123;key, label, used, group&#125;] (the key is the name of its node) *(from [ScenePoints](/advanced/editor/tools/scene-points))*

### Node3D node_of( root: Node, key: String ) {#method-node-of}

The node of a point (null: the scene has none) *(from [ScenePoints](/advanced/editor/tools/scene-points))*

### Node3D ensure( root: Node, key: String ) {#method-ensure}

The node of a point, made when the scene has none (where it goes by default) *(from [ScenePoints](/advanced/editor/tools/scene-points))*

### Transform3D default_transform( root: Node, key: String ) {#method-default-transform}

Where a marker goes by default: Chest in the middle of what the scene draws, Overhead a little above it, Nameplate above that (the scene in the tree; out of it: 1 m, 2 m, 2.3 m)

