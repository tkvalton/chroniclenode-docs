<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# RiverEditing

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

What the river tools do to a river, apart from the editor: the maths of dragging a point, the width or a handle with the mouse (from a ray of the camera), joining an end to another water, and keeping one change as one step of Undo. The gizmo on the river, the edit bar and the drawing of a river with clicks all use these, so the tests can too.

## Methods

| | |
|---|---|
| `int` | [handle_id](#method-handle-id)( `index: int, kind: Handle` ) *static* |
| `int` | [handle_index](#method-handle-index)( `id: int` ) *static* |
| `Handle` | [handle_kind](#method-handle-kind)( `id: int` ) *static* |
| `void` | [drag_point](#method-drag-point)( `river: RiverVolume, index: int, ray_origin: Vector3, ray_direction: Vector3, terrain: ChronicleTerrain, free_height: bool` ) *static* |
| `void` | [drag_width](#method-drag-width)( `river: RiverVolume, index: int, ray_origin: Vector3, ray_direction: Vector3` ) *static* |
| `void` | [drag_handle](#method-drag-handle)( `river: RiverVolume, index: int, outgoing: bool, ray_origin: Vector3, ray_direction: Vector3` ) *static* |
| `void` | [update_join](#method-update-join)( `river: RiverVolume, at_end: bool` ) *static* |
| `void` | [run](#method-run)( `undo_redo: EditorUndoRedoManager, river: RiverVolume, action_name: String, change: Callable` ) *static* |
| `void` | [record](#method-record)( `undo_redo: EditorUndoRedoManager, river: RiverVolume, action_name: String, before: Dictionary` ) *static* |
| `ChronicleTerrain` | [terrain_of](#method-terrain-of)( `river: Node` ) *static* |
| `Dictionary` | [pick_river](#method-pick-river)( `river: RiverVolume, ray_origin: Vector3, ray_direction: Vector3` ) *static* |

## Enumerations

### enum Handle {#enum-handle}

The kinds of handle on a point (the id of a handle is the index of the point times 4 plus one of these)

- **POINT** = `0`
- **WIDTH** = `1`
- **OUT** = `2`
- **IN** = `3`

## Constants

- `float` **JOIN_MARGIN** = `1.5` - How close (metres) an end must be dragged to another water to join it

## Method descriptions

### int handle_id( index: int, kind: Handle ) {#method-handle-id}

*No description yet.*

### int handle_index( id: int ) {#method-handle-index}

*No description yet.*

### Handle handle_kind( id: int ) {#method-handle-kind}

*No description yet.*

### void drag_point( river: RiverVolume, index: int, ray_origin: Vector3, ray_direction: Vector3, terrain: ChronicleTerrain, free_height: bool ) {#method-drag-point}

Drags a point to where the ray points: on the ground (the terrain or a floor) at the lift of the river, or, with `free_height`, over the plane at the height the point has now

### void drag_width( river: RiverVolume, index: int, ray_origin: Vector3, ray_direction: Vector3 ) {#method-drag-width}

Drags the width handle of a point: the width is twice the distance of the ray from the point, measured across the river

### void drag_handle( river: RiverVolume, index: int, outgoing: bool, ray_origin: Vector3, ray_direction: Vector3 ) {#method-drag-handle}

Drags a curve handle of a point to where the ray points (on the plane through the point that faces the camera, or the horizontal one when the ray runs along it)

### void update_join( river: RiverVolume, at_end: bool ) {#method-update-join}

After an end point was moved: joins it to the water it is over (or near), or frees it when it is nowhere near any

### void run( undo_redo: EditorUndoRedoManager, river: RiverVolume, action_name: String, change: Callable ) {#method-run}

Does a change to a river as one step of Undo: `change` is called, and what it did to the course is what Undo takes back. Without an undo manager (a test) it is only called

### void record( undo_redo: EditorUndoRedoManager, river: RiverVolume, action_name: String, before: Dictionary ) {#method-record}

Makes one step of Undo of the change from `before` (a course state kept earlier) to what the course is now. Nothing when nothing changed

### ChronicleTerrain terrain_of( river: Node ) {#method-terrain-of}

The terrain of the scene a river is in (null when there is none)

### Dictionary pick_river( river: RiverVolume, ray_origin: Vector3, ray_direction: Vector3 ) {#method-pick-river}

Where a ray of the camera meets the surface of the river (its ribbon): &#123;"position", "distance"&#125;, or &#123;&#125; when it misses

