<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# AssetViewport3D

**Inherits:** [VBoxContainer](https://docs.godotengine.org/en/stable/classes/class_vboxcontainer.html)

A 3D preview of a scene you can turn around: the scene is shown in a world of its own (a ground grid, a light, a background), and you drag to orbit, turn the wheel to zoom and drag with the middle or right button to move. A row of buttons above it has Frame (fits the scene in the view), Reset, the grid, the floor (off: the parts of an effect under the ground show), the Figure to judge the size by, and the light (neutral, bright, dark: the glow of an effect shows in the dark). Every new scene starts from the Reset angle, framed. The FIGURE (a row under the buttons while it is on) is a skeleton of Model Scenes playing an animation of a set you choose (search the list), or the plain 1.8 m stand-in; with `figure_attach_enabled` what is shown can be put ON it (Attach: base, feet, chest, head, overhead, a hand, the weapon in either hand) and rides it as it moves. Used by the Model Scenes and VFX tabs (Entity Assets / Assets), and made to be put in the catalogs that choose a skeleton or an effect. It only draws while it is visible. Put your own controls in `extra_bar` (the row of buttons), or under the view. See docs: Entity Assets &gt; Model Scenes.

## Properties

| | | |
|---|---|---|
| `float` | [view_height](#prop-view-height) | `340.0:` |
| `float` | [max_frame_radius](#prop-max-frame-radius) | `40.0` |
| `bool` | [show_figure_by_default](#prop-show-figure-by-default) | `false` |
| `bool` | [figure_attach_enabled](#prop-figure-attach-enabled) | `false:` |

## Variables

| | | |
|---|---|---|
| `int` | [last_look](#var-last-look) | `0` |
| `bool` | [show_floor](#var-show-floor) | `true` |
| `Node` | [content](#var-content) | `null` |
| `Vector3` | [target](#var-target) | `Vector3(0.0, 1.0, 0.0)` |
| `float` | [distance](#var-distance) | `5.0` |
| `float` | [yaw](#var-yaw) | `DEFAULT_YAW` |
| `float` | [pitch](#var-pitch) | `0.35` |
| `HBoxContainer` | [figure_row](#var-figure-row) | `null` |
| `OptionButton` | [skeleton_option](#var-skeleton-option) | `null` |
| `OptionButton` | [animation_set_option](#var-animation-set-option) | `null` |
| `LineEdit` | [animation_search](#var-animation-search) | `null` |
| `OptionButton` | [animation_option](#var-animation-option) | `null` |
| `OptionButton` | [attach_option](#var-attach-option) | `null` |
| `Node3D` | [figure_holder](#var-figure-holder) | `null` |
| `Node3D` | [figure_skeleton](#var-figure-skeleton) | `null` |
| `AnimationPlayer` | [figure_player](#var-figure-player) | `null` |
| `String` | [attach_key](#var-attach-key) | `""` |
| `Callable` | [tool_input](#var-tool-input) | `Callable()` |
| `Array[AxisGizmo3D]` | [gizmos](#var-gizmos) | `[]` |
| `CheckBox` | [local_axes_check](#var-local-axes-check) | `null` |
| `bool` | [gizmo_local](#var-gizmo-local) | `false` |
| `MeshInstance3D` | [material_item](#var-material-item) | `null` |
| `String` | [locked_skeleton](#var-locked-skeleton) | `""` |

## Methods

| | |
|---|---|
| `AssetViewport3D` | [attach_under](#method-attach-under)( `anchor: Control, height: float = 240.0` ) *static* |
| `bool` | [show_scene](#method-show-scene)( `path: String` ) |
| `bool` | [show_material](#method-show-material)( `path: String` ) |
| `void` | [set_material_item](#method-set-material-item)( `node: MeshInstance3D` ) |
| `bool` | [material_is_coat](#method-material-is-coat)() |
| `void` | [show_node](#method-show-node)( `node: Node` ) |
| `void` | [clear](#method-clear)() |
| `void` | [show_note](#method-show-note)( `text: String` ) |
| `AABB` | [get_content_bounds](#method-get-content-bounds)() |
| `void` | [frame](#method-frame)() |
| `void` | [reset_view](#method-reset-view)() |
| `void` | [turn_around](#method-turn-around)() |
| `Array` | [ray_through](#method-ray-through)( `point: Vector2` ) |
| `Vector2` | [screen_point](#method-screen-point)( `world_point: Vector3` ) |
| `bool` | [is_in_front](#method-is-in-front)( `world_point: Vector3` ) |
| `bool` | [is_attached](#method-is-attached)() |
| `String` | [selected_animation_set](#method-selected-animation-set)() |
| `Node3D` | [get_figure_point](#method-get-figure-point)( `key: String` ) |
| `AxisGizmo3D` | [add_gizmo](#method-add-gizmo)() |
| `void` | [remove_gizmo](#method-remove-gizmo)( `gizmo: AxisGizmo3D` ) |
| `void` | [lock_figure](#method-lock-figure)( `skeleton_name: String` ) |

## Signals

### content_loaded( instance: Node ) {#signal-content-loaded}

A scene was put in the view (its instance)

### content_cleared() {#signal-content-cleared}

The view was emptied

### figure_changed( skeleton: Node3D ) {#signal-figure-changed}

The figure changed (a skeleton was put in, or the stand-in): `skeleton` is the GeneralSkeleton, null for the stand-in

## Constants

- `Array[Dictionary]` **LOOKS** = `[` - The light of the world of the view: the name, the colour of the background, the ambient light and the strength of the sun
- `float` **PARTICLE_FRAME_SIZE** = `3.0` - How big the box of one particle node counts when a scene is framed (metres across, at most)
- `String` **SCENE** = `"res://addons/chroniclenode/editor_components/controls/asset_viewport_3d.tscn"` - The scene of the control
- `Array` **ATTACH_POINTS** = `[["None", ""], ["Base", "base"], ["Feet", "feet"], ["Chest", "chest"], ["Head...` - The places the scene can be put on the figure: [what it is called, its key] (the VFX locations, and the two weapons)
- `String` **STAND_IN** = `"None"` - The first entry of the Skeleton list: the plain 1.8 m figure (2026-11-14, the user: no skeleton and no animation set at first, None in both lists; a set that does not suit the skeleton floods the output with track warnings)
- `String` **NO_SET** = `"None"`
- `String` **SETTINGS_SECTION** = `"asset_viewport_figure"` - Where the choices of the figure are kept (per project, per person: the editor's project metadata)
- `float` **DEFAULT_YAW** = `0.6 + PI` - The first angle: the camera is in front of a character (a character of Godot faces -Z, so the camera is on the -Z side), a little to its right
- `float` **DEFAULT_PITCH** = `0.35`

## Property descriptions

### float view_height = 340.0: {#prop-view-height}

How tall the view is at least

### float max_frame_radius = 40.0 {#prop-max-frame-radius}

The size of the biggest thing Frame fits in the view: a scene bigger than this (a weather over a whole sky) is framed as if it were this big

### bool show_figure_by_default = false {#prop-show-figure-by-default}

Is the 1.8 m figure shown to begin with?

### bool figure_attach_enabled = false: {#prop-figure-attach-enabled}

Can what is in the view be put ON the figure (Attach: a hand, the head, the weapon in its hand ...)? The VFX preview and the Equipment Mesh editor turn it on

## Variable descriptions

### int last_look = 0 {#var-last-look}

The look every view opens with (the one you chose last)

### bool show_floor = true {#var-show-floor}

Is the solid floor shown (the one you chose last, in every view)? Off shows the parts of an effect under the ground

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

### HBoxContainer figure_row = null {#var-figure-row}

THE FIGURE (2026-11-14, the user: a real skeleton playing an animation in place of the 1.8 m stand-in, and what is shown can be put on it) The row under the buttons (shown while Figure is on)

### OptionButton skeleton_option = null {#var-skeleton-option}

*No description yet.*

### OptionButton animation_set_option = null {#var-animation-set-option}

*No description yet.*

### LineEdit animation_search = null {#var-animation-search}

*No description yet.*

### OptionButton animation_option = null {#var-animation-option}

*No description yet.*

### OptionButton attach_option = null {#var-attach-option}

*No description yet.*

### Node3D figure_holder = null {#var-figure-holder}

What holds the skeleton and its AnimationPlayer (its root node is this holder, as character creation does)

### Node3D figure_skeleton = null {#var-figure-skeleton}

The GeneralSkeleton of the figure (null: the stand-in)

### AnimationPlayer figure_player = null {#var-figure-player}

*No description yet.*

### String attach_key = "" {#var-attach-key}

Where the scene is put on the figure ("" none)

### Callable tool_input = Callable() {#var-tool-input}

A TOOL of an editor that works in the view (handles you drag, a click on a mesh): it gets the mouse first, and when it returns true the camera does not move. func(event: InputEvent) -&gt; bool

### Array[AxisGizmo3D] gizmos = [] {#var-gizmos}

THE MOVE GIZMOS in the view (2026-11-14: AxisGizmo3D, an X, a Y and a Z arrow on a point; add_gizmo()): they get the mouse before the tool and the camera

### CheckBox local_axes_check = null {#var-local-axes-check}

The Local axes switch of the toolbar (shown while the view has a gizmo): the arrows along the axes of the bone or mesh the point is in, not the world's

### bool gizmo_local = false {#var-gizmo-local}

(the choice of the last view, in every view)

### MeshInstance3D material_item = null {#var-material-item}

the weapon a coat (a material for "The Enchanted Item") is shown on, set by the VFX tab's Weapon row (in the figure's hand or a mesh of its own); null: the weapon in the figure's main hand

### String locked_skeleton = "" {#var-locked-skeleton}

The skeleton the figure is held to ("" none: the Skeleton list chooses)

## Method descriptions

### AssetViewport3D attach_under( anchor: Control, height: float = 240.0 ) {#method-attach-under}

Makes a view and puts it under a control (the row of a picker that chooses a scene), for the editors that show what was chosen

### bool show_scene( path: String ) {#method-show-scene}

Puts the scene of a file in the view (the one in it goes) and fits it in the view. A file that holds a mesh is shown as a mesh. False (and a message) when the file is not a scene or a mesh that loads

### bool show_material( path: String ) {#method-show-material}

Shows a material on a capsule (1.8 m tall, the size of a character) as its material override, so an effect that changes the look of a creature can be judged. False when the file is not a material

### void set_material_item( node: MeshInstance3D ) {#method-set-material-item}

The weapon a coat is shown on (null: none picked); the material is put on again

### bool material_is_coat() {#method-material-is-coat}

True when the material shown goes on a weapon (a coat)

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

### Array ray_through( point: Vector2 ) {#method-ray-through}

The ray of the camera through a point of the view (the position of a mouse event on it): [origin, direction] in the world of the view

### Vector2 screen_point( world_point: Vector3 ) {#method-screen-point}

Where a point of the world is on the view (pixels), and is it in front of the camera?

### bool is_in_front( world_point: Vector3 ) {#method-is-in-front}

*No description yet.*

### bool is_attached() {#method-is-attached}

Is what is shown put on the figure?

### String selected_animation_set() {#method-selected-animation-set}

The animation set chosen ("" for None)

### Node3D get_figure_point( key: String ) {#method-get-figure-point}

The node of the figure an attach key names (null: none, or the stand-in)

### AxisGizmo3D add_gizmo() {#method-add-gizmo}

Makes a move gizmo in the view (three arrows; AxisGizmo3D): it gets the mouse first, keeps its size on the screen, and the toolbar shows Local axes. Listen to its `dragged`; set its `follow` (or its position)

### void remove_gizmo( gizmo: AxisGizmo3D ) {#method-remove-gizmo}

Takes a move gizmo out of the view

### void lock_figure( skeleton_name: String ) {#method-lock-figure}

Shows one skeleton as the figure and hides the Skeleton list (the Skeletons tab shows the skeleton it edits); "" gives the list back. The animation set and the animation stay to choose

