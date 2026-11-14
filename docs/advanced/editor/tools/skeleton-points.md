<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# SkeletonPoints

**Inherits:** [ScenePoints](/advanced/editor/tools/scene-points) < [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

THE POINTS OF A SKELETON (2026-11-14; GeneralSkeleton.POINTS and GRIPS): each point is a Marker3D under the BoneAttachment3D of its bone (one per bone, shared by the points on it), Overhead and Feet are on the skeleton itself. The weapon grips are points too, and the weapon mesh of the slot is under its grip. A skeleton made before the points gets them with ensure_all (Entity Assets &gt; Skeletons: Add missing points): the old BoneAttachment3D of a bone is reused, the weapon meshes go under new grips (where they were: nothing moves), and Head (on human_male, a mesh holder at the feet before) is put on the Head bone.

## Methods

| | |
|---|---|
| `Array[Dictionary]` | [entries](#method-entries)() |
| `Node3D` | [node_of](#method-node-of)( `root: Node, key: String` ) |
| `Node3D` | [ensure](#method-ensure)( `root: Node, key: String` ) |
| `BoneAttachment3D` | [bone_attachment](#method-bone-attachment)( `skeleton: Skeleton3D, bone: String, make: bool, owner_root: Node = null` ) *static* |
| `Array[String]` | [parents](#method-parents)( `root: Node` ) |
| `String` | [parent_of](#method-parent-of)( `root: Node, key: String` ) |
| `void` | [set_parent](#method-set-parent)( `root: Node, key: String, bone: String` ) |
| `Transform3D` | [default_transform](#method-default-transform)( `root: Node, key: String` ) |
| `Skeleton3D` | [skeleton_of](#method-skeleton-of)( `root: Node` ) *static* |

## Constants

- `String` **BONE_PREFIX** = `"Bone"` - The name of a BoneAttachment3D this makes for a bone ("Bone" + the bone)
- `float` **OVERHEAD_SHARE** = `0.16` - How far above the head the Overhead point is made (of the height of the head), at least
- `float` **OVERHEAD_MIN** = `0.2`
- `float` **FEET_HEIGHT** = `0.1` - Feet: a little above the ground (as the effects were before the points)

## Method descriptions

### Array[Dictionary] entries() {#method-entries}

Every point of the kind: [&#123;key, label, used, group&#125;] (the key is the name of its node) *(from [ScenePoints](/advanced/editor/tools/scene-points))*

### Node3D node_of( root: Node, key: String ) {#method-node-of}

The node of a point (null: the scene has none) *(from [ScenePoints](/advanced/editor/tools/scene-points))*

### Node3D ensure( root: Node, key: String ) {#method-ensure}

The node of a point, made when the scene has none (where it goes by default) *(from [ScenePoints](/advanced/editor/tools/scene-points))*

### BoneAttachment3D bone_attachment( skeleton: Skeleton3D, bone: String, make: bool, owner_root: Node = null ) {#method-bone-attachment}

The BoneAttachment3D of a bone (a child of the skeleton on that bone: an old one is used too), made when there is none and `make`

### Array[String] parents( root: Node ) {#method-parents}

What a point can be put on (the bones of a skeleton; "" the model itself). Empty: the points are on the scene itself *(from [ScenePoints](/advanced/editor/tools/scene-points))*

### String parent_of( root: Node, key: String ) {#method-parent-of}

What a point is on now ("" the scene itself) *(from [ScenePoints](/advanced/editor/tools/scene-points))*

### void set_parent( root: Node, key: String, bone: String ) {#method-set-parent}

Puts a point on another bone (its transform, relative to what it is on, is kept) *(from [ScenePoints](/advanced/editor/tools/scene-points))*

### Transform3D default_transform( root: Node, key: String ) {#method-default-transform}

Where a point goes by default, relative to what it is on (the scene must be in the tree for what needs its shape) *(from [ScenePoints](/advanced/editor/tools/scene-points))*

### Skeleton3D skeleton_of( root: Node ) {#method-skeleton-of}

The skeleton of a scene (its root, or the first Skeleton3D under it: a scene the converter made from another keeps its own root)

