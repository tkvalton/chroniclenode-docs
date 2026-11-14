<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# AxisGizmo3D

**Inherits:** [Node3D](https://docs.godotengine.org/en/stable/classes/class_node3d.html)

THE MOVE GIZMO of our 3D views (2026-11-14, the user: a gizmo with an X, a Y and a Z arrow, so a point is moved along one direction while the mouse holds the arrow down). Three arrows on the point: X red, Y green, Z blue. Hold an arrow and drag: the point moves along that axis only (Ctrl: in steps of `snap_step`, a centimetre). The arrow under the mouse lights up. The arrows keep the same size on the screen however far the camera is, and are drawn over everything. Axes: the world's (X east, Y up, Z south), or with `local` the axes of `local_space` (the bone or the mesh the point is in). How a view uses it (AssetViewport3D does all of it with add_gizmo()): put it in the 3D world of the view, set `camera`, give it the mouse events of the view first (handle_input: true when it used one), and listen to `dragged` (the offset from where the drag started, in the world): the editor moves its point, then puts the gizmo on it (or sets `follow`). The maths (which arrow is under the mouse, how far along its axis the mouse is) are static, so the tools that work in Godot's own 3D view (EditorNode3DGizmoPlugin) use them too.

## Variables

| | | |
|---|---|---|
| `Camera3D` | [camera](#var-camera) | `null` |
| `Node3D` | [follow](#var-follow) | `null` |
| `bool` | [local](#var-local) | `false` |
| `Node3D` | [local_space](#var-local-space) | `null` |
| `float` | [snap_step](#var-snap-step) | `0.01` |
| `int` | [drag_axis](#var-drag-axis) | `-1` |
| `int` | [hover_axis](#var-hover-axis) | `-1` |

## Methods

| | |
|---|---|
| `Basis` | [axes_basis](#method-axes-basis)() |
| `Vector3` | [axis_direction](#method-axis-direction)( `axis: int` ) |
| `bool` | [handle_input](#method-handle-input)( `event: InputEvent` ) |
| `int` | [axis_at](#method-axis-at)( `point: Vector2` ) |
| `float` | [world_length](#method-world-length)( `view_camera: Camera3D, at: Vector3, pixels: float` ) *static* |
| `int` | [pick_axis](#method-pick-axis)( `view_camera: Camera3D, origin: Vector3, directions: Array, length: float, point: Vector2` ) *static* |
| `float` | [axis_parameter](#method-axis-parameter)( `view_camera: Camera3D, origin: Vector3, direction: Vector3, point: Vector2` ) *static* |
| `float` | [closest_on_line](#method-closest-on-line)( `origin: Vector3, direction: Vector3, ray_origin: Vector3, ray_direction: Vector3` ) *static* |

## Signals

### drag_started( axis: int ) {#signal-drag-started}

A drag began on an axis (0 X, 1 Y, 2 Z)

### dragged( offset: Vector3 ) {#signal-dragged}

The mouse moved while an arrow is held: the point goes to where the drag started plus `offset` (in the world)

### drag_ended() {#signal-drag-ended}

The arrow was let go

## Constants

- `Array[Color]` **AXIS_COLORS** = `[Color(0.96, 0.25, 0.3), Color(0.45, 0.9, 0.25), Color(0.25, 0.55, 1.0)]`
- `Array[String]` **AXIS_NAMES** = `["X", "Y", "Z"]`
- `float` **ARROW_PIXELS** = `72.0` - How long an arrow is on the screen (pixels), and how near the mouse must be to take it
- `float` **PICK_PIXELS** = `9.0`
- `float` **MIN_SCREEN_PIXELS** = `8.0` - An arrow pointing almost at the camera (shorter than this on the screen) cannot be taken

## Variable descriptions

### Camera3D camera = null {#var-camera}

The camera of the view (the arrows keep their size on its screen; the mouse is read through it)

### Node3D follow = null {#var-follow}

The node the gizmo sits on (each frame; null: it stays where it is put)

### bool local = false {#var-local}

Along the axes of `local_space` (true), or of the world

### Node3D local_space = null {#var-local-space}

The node whose axes are the local ones (the parent of the point: a bone, a mesh). null: the gizmo's own parent

### float snap_step = 0.01 {#var-snap-step}

The step of a drag with Ctrl held (metres)

### int drag_axis = -1 {#var-drag-axis}

The arrow being dragged (-1 none), the arrow under the mouse (-1 none)

### int hover_axis = -1 {#var-hover-axis}

*No description yet.*

## Method descriptions

### Basis axes_basis() {#method-axes-basis}

The three axes the arrows point along (unit length): the world's, or the local ones

### Vector3 axis_direction( axis: int ) {#method-axis-direction}

The direction of an axis (0 X, 1 Y, 2 Z) in the world

### bool handle_input( event: InputEvent ) {#method-handle-input}

The mouse of the view (its position in the view's pixels). True when the gizmo used the event (the camera must not move)

### int axis_at( point: Vector2 ) {#method-axis-at}

The arrow under a point of the view (-1 none)

### float world_length( view_camera: Camera3D, at: Vector3, pixels: float ) {#method-world-length}

How long (world units) `pixels` are on the screen at a point of the world

### int pick_axis( view_camera: Camera3D, origin: Vector3, directions: Array, length: float, point: Vector2 ) {#method-pick-axis}

Which of the arrows (from `origin`, along `directions`, `length` long in the world) is under a point of the screen: its index, -1 none (the nearest within PICK_PIXELS)

### float axis_parameter( view_camera: Camera3D, origin: Vector3, direction: Vector3, point: Vector2 ) {#method-axis-parameter}

How far along the line (from `origin` along the unit `direction`) the ray of the camera through a point of the screen comes nearest to it

### float closest_on_line( origin: Vector3, direction: Vector3, ray_origin: Vector3, ray_direction: Vector3 ) {#method-closest-on-line}

The parameter t of the point of the line origin + direction * t nearest to the ray (0 when they run side by side)

