<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# RiverTool

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

Edits a river that winds in the 3D viewport. While one river is selected the **edit bar** is over the viewport and the gizmo of the river has its handles (RiverGizmoPlugin). On top of that: **Ctrl+click on the river** adds a point there (between the two it is nearest to); **Ctrl+click on the ground** extends the river from the end that is nearer. The click is one step of Undo.

## Variables

| | | |
|---|---|---|
| `EditorPlugin` | [plugin](#var-plugin) |  |
| `RiverEditBar` | [bar](#var-bar) | `null` |
| `RiverVolume` | [river](#var-river) | `null` |

## Methods

| | |
|---|---|
| `void` | [deactivate](#method-deactivate)() |
| `void` | [update_selection](#method-update-selection)( `nodes: Array` ) |
| `int` | [forward_input](#method-forward-input)( `camera: Camera3D, event: InputEvent` ) |
| `bool` | [add_point_by_ray](#method-add-point-by-ray)( `world: World3D, origin: Vector3, direction: Vector3` ) |

## Variable descriptions

### EditorPlugin plugin {#var-plugin}

*No description yet.*

### RiverEditBar bar = null {#var-bar}

*No description yet.*

### RiverVolume river = null {#var-river}

*No description yet.*

## Method descriptions

### void deactivate() {#method-deactivate}

*No description yet.*

### void update_selection( nodes: Array ) {#method-update-selection}

The selection changed (or is looked at again): the bar shows for one selected river and goes away otherwise

### int forward_input( camera: Camera3D, event: InputEvent ) {#method-forward-input}

A click of a 3D viewport: Ctrl+click adds a point (AFTER_GUI_INPUT_STOP when it was used)

### bool add_point_by_ray( world: World3D, origin: Vector3, direction: Vector3 ) {#method-add-point-by-ray}

A Ctrl+click along a ray: on the river it adds a point there, on the ground it extends the nearer end. True when a point was added

