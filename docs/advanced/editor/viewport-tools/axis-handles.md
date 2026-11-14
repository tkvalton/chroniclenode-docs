<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# AxisHandles

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

THE MOVE GIZMO IN GODOT'S OWN 3D VIEW (2026-11-14, the user: the X, Y, Z arrows of our views for the 3D tools too: the river, the behaviour routes). A tool whose points are handles of an EditorNode3DGizmoPlugin draws three arrows on its picked point (the handle pressed last): red X, green Y, blue Z, along the world's axes. The tip of each arrow is a handle: drag it and the point moves along that axis only (Ctrl: in steps of a centimetre), one step of Undo like any drag of the tool. The arrows are as long on the screen as those of AxisGizmo3D (when the plugin draws them; zooming far in or out, select the point again to fit them). The maths are AxisGizmo3D's.

## Methods

| | |
|---|---|
| `bool` | [is_axis](#method-is-axis)( `handle_id: int` ) *static* |
| `int` | [axis_of](#method-axis-of)( `handle_id: int` ) *static* |
| `String` | [axis_name](#method-axis-name)( `handle_id: int` ) *static* |
| `void` | [create_materials](#method-create-materials)( `plugin: EditorNode3DGizmoPlugin` ) *static* |
| `void` | [draw](#method-draw)( `plugin: EditorNode3DGizmoPlugin, gizmo: EditorNode3DGizmo, world_origin: Vector3` ) *static* |
| `float` | [arrow_length](#method-arrow-length)( `at: Vector3` ) *static* |
| `Vector3` | [drag](#method-drag)( `camera: Camera3D, handle_id: int, point: Vector2, origin_now: Vector3` ) *static* |
| `void` | [end](#method-end)() *static* |

## Constants

- `int` **ID_BASE** = `2000000000` - The ids of the three tips (far above the ids of the tools' own handles)
- `float` **ARROW_PIXELS** = `80.0`

## Method descriptions

### bool is_axis( handle_id: int ) {#method-is-axis}

*No description yet.*

### int axis_of( handle_id: int ) {#method-axis-of}

*No description yet.*

### String axis_name( handle_id: int ) {#method-axis-name}

*No description yet.*

### void create_materials( plugin: EditorNode3DGizmoPlugin ) {#method-create-materials}

The materials of the arrows, made once by the plugin (in its _init)

### void draw( plugin: EditorNode3DGizmoPlugin, gizmo: EditorNode3DGizmo, world_origin: Vector3 ) {#method-draw}

Draws the three arrows on a point of the world, the tips as handles (in the space of the gizmo's node)

### float arrow_length( at: Vector3 ) {#method-arrow-length}

How long the arrows are in the world at a point (as long as ARROW_PIXELS on the screen of the first 3D view)

### Vector3 drag( camera: Camera3D, handle_id: int, point: Vector2, origin_now: Vector3 ) {#method-drag}

A step of the drag of a tip: where the point goes (in the world). `origin_now` is where the point is (taken at the first step)

### void end() {#method-end}

The drag is over (the tool's _commit_handle)

