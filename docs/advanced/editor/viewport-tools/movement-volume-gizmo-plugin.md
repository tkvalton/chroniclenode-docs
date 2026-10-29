<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# MovementVolumeGizmoPlugin

**Inherits:** `EditorNode3DGizmoPlugin`

Draws the flow of a movement volume in the 3D editor: arrows across the volume that point the way the water or the wind carries whoever is in it, longer when it is stronger. Nothing is drawn for a volume that does not flow. The arrows are in the space of the volume, so turning the volume turns them.

## Methods

| | |
|---|---|
| `PackedVector3Array` | [arrow_lines](#method-arrow-lines)( `strength: float, direction: Vector3, box: AABB` ) *static* |

## Constants

- `Color` **COLOR** = `Color(0.35, 0.8, 1.0)`

## Method descriptions

### PackedVector3Array arrow_lines( strength: float, direction: Vector3, box: AABB ) {#method-arrow-lines}

The segments of the arrows (pairs of points) for a flow in a box (all in the space of the volume). Empty when there is no flow

