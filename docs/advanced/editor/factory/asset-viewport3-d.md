<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# AssetViewport3D

**Inherits:** [VBoxContainer](https://docs.godotengine.org/en/stable/classes/class_vboxcontainer.html)

A 3D preview of a scene you can turn around: the scene is shown in a world of its own (a ground grid, a light, a background), and you drag to orbit, turn the wheel to zoom and drag with the middle or right button to move. A row of buttons above it has Frame (fits the scene in the view), Reset, the grid, a 1.8 m figure to judge the size by, and the light (neutral, bright, dark: the glow of an effect shows in the dark). Used by the Model Scenes and VFX tabs (Entity Assets / Assets), and made to be put in the catalogs that choose a skeleton or an effect. It only draws while it is visible. Put your own controls in `extra_bar` (the row of buttons), or under the view. See docs: Entity Assets &gt; Model Scenes.

## Properties

| | | |
|---|---|---|
| `float` | [view_height](#prop-view-height) | `340.0:` |
| `float` | [max_frame_radius](#prop-max-frame-radius) | `40.0` |
| `bool` | [show_figure_by_default](#prop-show-figure-by-default) | `false` |

## Variables

| | | |
|---|---|---|
| `int` | [last_look](#var-last-look) | `0` |
| `Node` | [content](#var-content) | `null` |
| `Vector3` | [target](#var-target) | `Vector3(0.0, 1.0, 0.0)` |
| `float` | [distance](#var-distance) | `5.0` |
| `float` | [yaw](#var-yaw) | `DEFAULT_YAW` |
| `float` | [pitch](#var-pitch) | `0.35` |

## Methods

| | |
|---|---|
| `AssetViewport3D` | [attach_under](#method-attach-under)( `anchor: Control, height: float = 240.0` ) *static* |
| `bool` | [show_scene](#method-show-scene)( `path: String` ) |
| `bool` | [show_material](#method-show-material)( `path: String` ) |
| `void` | [show_node](#method-show-node)( `node: Node` ) |
| `void` | [clear](#method-clear)() |
| `void` | [show_note](#method-show-note)( `text: String` ) |
| `AABB` | [get_content_bounds](#method-get-content-bounds)() |
| `void` | [frame](#method-frame)() |
| `void` | [reset_view](#method-reset-view)() |
| `void` | [turn_around](#method-turn-around)() |

## Signals

### content_loaded( instance: Node ) {#signal-content-loaded}

A scene was put in the view (its instance)

### content_cleared() {#signal-content-cleared}

The view was emptied

## Constants

- `Array[Dictionary]` **LOOKS** = `[` - The light of the world of the view: the name, the colour of the background, the ambient light and the strength of the sun
- `String` **SCENE** = `"res://addons/chroniclenode/editor_components/controls/asset_viewport_3d.tscn"` - The scene of the control
- `float` **DEFAULT_YAW** = `0.6 + PI` - The first angle: the camera is in front of a character (a character of Godot faces -Z, so the camera is on the -Z side), a little to its right
- `float` **DEFAULT_PITCH** = `0.35`

## Property descriptions

### float view_height = 340.0: {#prop-view-height}

How tall the view is at least

### float max_frame_radius = 40.0 {#prop-max-frame-radius}

The size of the biggest thing Frame fits in the view: a scene bigger than this (a weather over a whole sky) is framed as if it were this big

### bool show_figure_by_default = false {#prop-show-figure-by-default}

Is the 1.8 m figure shown to begin with?

## Variable descriptions

### int last_look = 0 {#var-last-look}

The look every view opens with (the one you chose last)

### Node content = null {#var-content}

The scene in the view (null when there is none)

### Vector3 target = Vector3(0.0, 1.0, 0.0) {#var-target}

Where the camera looks, how far it is, and the angles it is turned to (radians; the pitch is up positive)

### float distance = 5.0 {#var-distance}

*No description yet.*

### float yaw = DEFAULT_YAW {#var-yaw}

*No description yet.*

### float pitch = 0.35 {#var-pitch}

*No description yet.*

## Method descriptions

### AssetViewport3D attach_under( anchor: Control, height: float = 240.0 ) {#method-attach-under}

Makes a view and puts it under a control (the row of a picker that chooses a scene), for the editors that show what was chosen

### bool show_scene( path: String ) {#method-show-scene}

Puts the scene of a file in the view (the one in it goes) and fits it in the view. A file that holds a mesh is shown as a mesh. False (and a message) when the file is not a scene or a mesh that loads

### bool show_material( path: String ) {#method-show-material}

Shows a material on a capsule (1.8 m tall, the size of a character) as its material override, so an effect that changes the look of a creature can be judged. False when the file is not a material

### void show_node( node: Node ) {#method-show-node}

Puts a node you made in the view (the one in it goes) and fits it

### void clear() {#method-clear}

Empties the view

### void show_note( text: String ) {#method-show-note}

Says something in the view in place of a scene (the view stays empty)

### AABB get_content_bounds() {#method-get-content-bounds}

The box around everything the scene draws (an empty box when it draws nothing)

### void frame() {#method-frame}

Fits the scene in the view: the camera looks at the middle of it from far enough to see all of it

### void reset_view() {#method-reset-view}

Turns the camera back to its first angle and frames the scene

### void turn_around() {#method-turn-around}

Goes to the other side of the scene (half a turn): for a model that faces the other way

