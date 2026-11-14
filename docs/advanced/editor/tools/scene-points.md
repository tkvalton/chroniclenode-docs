<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ScenePoints

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

**Inherited by:** [InteractablePoints](/advanced/editor/tools/interactable-points), [SkeletonPoints](/advanced/editor/tools/skeleton-points)

THE POINTS OF A SCENE, for the Points tool (2026-11-14): what points a kind of scene has, how to find, make and move them, and how the scene is saved with them. A kind of scene says it (SkeletonPoints: the points of a skeleton, each under the bone it is on; InteractablePoints: the markers of an interactable scene). Every function works on a ROOT: the scene shown in the view (in the tree: it moves with its animation) or the copy of the scene that is saved (not in the tree: GEN_EDIT_STATE_MAIN), so the Points tool changes both alike and saves the copy (the view's instance has what the game adds at run time: a weapon, its animation player).

## Methods

| | |
|---|---|
| `Array[Dictionary]` | [entries](#method-entries)() |
| `Node3D` | [node_of](#method-node-of)( `_root: Node, _key: String` ) |
| `Node3D` | [ensure](#method-ensure)( `_root: Node, _key: String` ) |
| `Array[String]` | [ensure_all](#method-ensure-all)( `root: Node` ) |
| `Array[String]` | [parents](#method-parents)( `_root: Node` ) |
| `String` | [parent_of](#method-parent-of)( `_root: Node, _key: String` ) |
| `void` | [set_parent](#method-set-parent)( `_root: Node, _key: String, _parent_name: String` ) |
| `Transform3D` | [default_transform](#method-default-transform)( `_root: Node, _key: String` ) |
| `Dictionary` | [entry_of](#method-entry-of)( `key: String` ) |
| `Marker3D` | [make_marker](#method-make-marker)( `root: Node, parent: Node, node_name: String, at: Transform3D` ) *static* |
| `void` | [own](#method-own)( `root: Node, node: Node` ) *static* |
| `void` | [move_under](#method-move-under)( `root: Node, node: Node, new_parent: Node` ) *static* |
| `Node` | [load_for_edit](#method-load-for-edit)( `path: String` ) *static* |
| `Error` | [save](#method-save)( `edit_root: Node, path: String` ) *static* |
| `String` | [header_uid](#method-header-uid)( `path: String` ) *static* |

## Method descriptions

### Array[Dictionary] entries() {#method-entries}

Every point of the kind: [&#123;key, label, used, group&#125;] (the key is the name of its node)

### Node3D node_of( _root: Node, _key: String ) {#method-node-of}

The node of a point (null: the scene has none)

### Node3D ensure( _root: Node, _key: String ) {#method-ensure}

The node of a point, made when the scene has none (where it goes by default)

### Array[String] ensure_all( root: Node ) {#method-ensure-all}

Makes every point the scene lacks: the labels of those made

### Array[String] parents( _root: Node ) {#method-parents}

What a point can be put on (the bones of a skeleton; "" the model itself). Empty: the points are on the scene itself

### String parent_of( _root: Node, _key: String ) {#method-parent-of}

What a point is on now ("" the scene itself)

### void set_parent( _root: Node, _key: String, _parent_name: String ) {#method-set-parent}

Puts a point on another bone (its transform, relative to what it is on, is kept)

### Transform3D default_transform( _root: Node, _key: String ) {#method-default-transform}

Where a point goes by default, relative to what it is on (the scene must be in the tree for what needs its shape)

### Dictionary entry_of( key: String ) {#method-entry-of}

The entry of a key (empty when none)

### Marker3D make_marker( root: Node, parent: Node, node_name: String, at: Transform3D ) {#method-make-marker}

Makes a Marker3D under a parent, owned by the root, with a unique name

### void own( root: Node, node: Node ) {#method-own}

The root owns the node (it is saved with the scene), with a unique name (%Name)

### void move_under( root: Node, node: Node, new_parent: Node ) {#method-move-under}

Moves a node under another parent, its transform relative to its parent kept, still owned by the root (its own children go with it)

### Node load_for_edit( path: String ) {#method-load-for-edit}

Loads a scene to change and save (the edit copy: not in the tree, as the editor loads it)

### Error save( edit_root: Node, path: String ) {#method-save}

Saves the edit copy over the scene's file (the loaded scene is replaced: the next load and the game get the new one)

### String header_uid( path: String ) {#method-header-uid}

The uid in the first line of a text scene ("uid://..."; "" none)

