<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# RiverGizmoPlugin

**Inherits:** `EditorNode3DGizmoPlugin`

The handles of a river that winds. It draws the course and the two banks (so you see how wide the river is), in red the stretches that have a problem (a bend too tight, a slope too steep), and a green post on an end that is joined to another water. Each point of the course has: a **handle on the point** (drag it: it slides over the ground at the lift of the river; hold Alt to move it freely sideways at its own height; an end dragged onto another water joins it), a **handle on the bank** (drag it to widen or narrow the river there), and, on the point being edited, the **handles of its curve** (Auto has none; Mirrored has one; Free has two). One drag is one step of Undo.

## Variables

| | | |
|---|---|---|
| `EditorUndoRedoManager` | [undo_redo](#var-undo-redo) |  |

## Variable descriptions

### EditorUndoRedoManager undo_redo {#var-undo-redo}

Where the editor's undo history is (set by the plugin)

