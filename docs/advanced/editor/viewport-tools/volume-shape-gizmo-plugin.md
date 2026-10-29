<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# VolumeShapeGizmoPlugin

**Inherits:** `EditorNode3DGizmoPlugin`

Resize handles on a volume itself. A click in the viewport selects the volume (not the CollisionShape3D under it), and the handles of the shape are Godot's only while the shape node is selected: so the volume gets the same handles. Drag a handle to resize a box (three axes), a sphere (radius), a cylinder or a capsule (radius and height), from the centre, as the handles of the shape do. One drag is one step of Undo.

## Variables

| | | |
|---|---|---|
| `EditorUndoRedoManager` | [undo_redo](#var-undo-redo) |  |

## Methods

| | |
|---|---|
| `PackedVector3Array` | [handle_points](#method-handle-points)( `shape: Shape3D` ) *static* |
| `int` | [handle_axis](#method-handle-axis)( `shape: Shape3D, handle_id: int` ) *static* |
| `Variant` | [shape_values](#method-shape-values)( `shape: Shape3D` ) *static* |
| `void` | [apply_values](#method-apply-values)( `shape: Shape3D, values: Variant` ) |
| `void` | [set_from_handle](#method-set-from-handle)( `shape: Shape3D, handle_id: int, distance: float` ) *static* |

## Variable descriptions

### EditorUndoRedoManager undo_redo {#var-undo-redo}

Where the editor's undo history is (set by the plugin)

## Method descriptions

### PackedVector3Array handle_points( shape: Shape3D ) {#method-handle-points}

Where the handles are, in the space of the shape: the sides of a box, the radius of a sphere, the radius and the top of a cylinder or a capsule

### int handle_axis( shape: Shape3D, handle_id: int ) {#method-handle-axis}

The axis a handle slides along (0 x, 1 y, 2 z), -1 for none

### Variant shape_values( shape: Shape3D ) {#method-shape-values}

The size of a shape as one value, to keep for undo: a vector for a box, a number for a sphere, (radius, height) for a cylinder and a capsule

### void apply_values( shape: Shape3D, values: Variant ) {#method-apply-values}

Gives a shape the size that shape_values read

### void set_from_handle( shape: Shape3D, handle_id: int, distance: float ) {#method-set-from-handle}

A handle was dragged to `distance` from the centre along its axis: the size follows (never under a millimetre; a capsule is never shorter than its two caps)

