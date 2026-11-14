<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ScenePointsTools

**Inherits:** `HSplitContainer`

THE POINTS TOOL (2026-11-14, the user: the points of a skeleton set in our editor with a 3D tool, as the weapon mesh tools set a weapon's; the move gizmo on them). The list of the points of the scene on the left (a point the scene lacks says "missing": Add missing points makes them where they go by default), the scene in a large 3D view on the right (a skeleton playing an animation you choose: a point follows its bone). Every point is a dot in the view (click one to pick it); the picked one has the move gizmo: hold an arrow and drag (Ctrl: snap 1 cm). Under the list: the bone the point is on (a skeleton), its position and turn on that bone (typed), quarter turns, Reset (where it goes by default), and to judge it: an effect played on the point, a weapon held in the grips. Every change is saved into the scene file at once (the scene a kind of points says: ScenePoints), so the game and Godot's own scene view have it. Used by Entity Assets &gt; Skeletons (SkeletonPoints) and Entity Assets &gt; Interactable Scenes (InteractablePoints).

## Variables

| | | |
|---|---|---|
| `ScenePoints` | [model](#var-model) | `null` |
| `String` | [scene_path](#var-scene-path) | `""` |
| `Node` | [shown_root](#var-shown-root) | `null` |
| `Node` | [edit_root](#var-edit-root) | `null` |
| `String` | [picked](#var-picked) | `""` |
| `AssetViewport3D` | [viewport](#var-viewport) | `null` |
| `AxisGizmo3D` | [gizmo](#var-gizmo) | `null` |
| `ItemList` | [point_list](#var-point-list) | `null` |
| `Button` | [add_missing_button](#var-add-missing-button) | `null` |
| `Label` | [picked_label](#var-picked-label) | `null` |
| `Label` | [used_label](#var-used-label) | `null` |
| `HBoxContainer` | [bone_row](#var-bone-row) | `null` |
| `OptionButton` | [bone_option](#var-bone-option) | `null` |
| `Array[SpinBox]` | [position_spins](#var-position-spins) | `[]` |
| `Array[SpinBox]` | [rotation_spins](#var-rotation-spins) | `[]` |
| `Button` | [reset_button](#var-reset-button) | `null` |
| `OptionButton` | [effect_option](#var-effect-option) | `null` |
| `OptionButton` | [weapon_option](#var-weapon-option) | `null` |
| `HBoxContainer` | [weapon_row](#var-weapon-row) | `null` |
| `Label` | [status_label](#var-status-label) | `null` |
| `VBoxContainer` | [editor_box](#var-editor-box) | `null` |

## Methods

| | |
|---|---|
| `void` | [edit_skeleton](#method-edit-skeleton)( `skeleton_name: String, path: String` ) |
| `void` | [edit_interactable](#method-edit-interactable)( `path: String` ) |
| `void` | [clear](#method-clear)() |
| `void` | [pick](#method-pick)( `key: String` ) |
| `void` | [add_missing](#method-add-missing)() |
| `void` | [set_point_transform](#method-set-point-transform)( `key: String, at: Transform3D` ) |
| `void` | [turn_picked](#method-turn-picked)( `axis: Vector3` ) |
| `void` | [reset_picked](#method-reset-picked)() |

## Signals

### point_saved( key: String ) {#signal-point-saved}

A point was changed and saved (its key)

## Constants

- `float` **DOT_RADIUS** = `0.022`
- `Color` **COLOR_DOT** = `Color(0.85, 0.9, 1.0, 0.85)`
- `Color` **COLOR_PICKED** = `Color(1.0, 0.85, 0.2, 1.0)`
- `Color` **COLOR_GRIP** = `Color(1.0, 0.55, 0.25, 0.9)`
- `float` **PICK_PIXELS** = `12.0`

## Variable descriptions

### ScenePoints model = null {#var-model}

The kind of scene (its points), the file, the instance shown in the view (in the tree) and the copy that is saved

### String scene_path = "" {#var-scene-path}

*No description yet.*

### Node shown_root = null {#var-shown-root}

*No description yet.*

### Node edit_root = null {#var-edit-root}

*No description yet.*

### String picked = "" {#var-picked}

The point picked ("" none)

### AssetViewport3D viewport = null {#var-viewport}

*No description yet.*

### AxisGizmo3D gizmo = null {#var-gizmo}

*No description yet.*

### ItemList point_list = null {#var-point-list}

*No description yet.*

### Button add_missing_button = null {#var-add-missing-button}

*No description yet.*

### Label picked_label = null {#var-picked-label}

*No description yet.*

### Label used_label = null {#var-used-label}

*No description yet.*

### HBoxContainer bone_row = null {#var-bone-row}

*No description yet.*

### OptionButton bone_option = null {#var-bone-option}

*No description yet.*

### Array[SpinBox] position_spins = [] {#var-position-spins}

*No description yet.*

### Array[SpinBox] rotation_spins = [] {#var-rotation-spins}

*No description yet.*

### Button reset_button = null {#var-reset-button}

*No description yet.*

### OptionButton effect_option = null {#var-effect-option}

*No description yet.*

### OptionButton weapon_option = null {#var-weapon-option}

*No description yet.*

### HBoxContainer weapon_row = null {#var-weapon-row}

*No description yet.*

### Label status_label = null {#var-status-label}

*No description yet.*

### VBoxContainer editor_box = null {#var-editor-box}

*No description yet.*

## Method descriptions

### void edit_skeleton( skeleton_name: String, path: String ) {#method-edit-skeleton}

Edits the points of a skeleton (shown as the figure of the view, playing an animation)

### void edit_interactable( path: String ) {#method-edit-interactable}

Edits the markers of an interactable scene (shown in the middle of the view)

### void clear() {#method-clear}

Empties the tool

### void pick( key: String ) {#method-pick}

Picks a point: the gizmo goes on it, its fields show it, the effect plays on it

### void add_missing() {#method-add-missing}

Makes every point the scene lacks, and saves it

### void set_point_transform( key: String, at: Transform3D ) {#method-set-point-transform}

Sets a point's transform on what it is on (the shown one and the copy), and saves

### void turn_picked( axis: Vector3 ) {#method-turn-picked}

A quarter turn of the picked point round an axis of its bone

### void reset_picked() {#method-reset-picked}

*No description yet.*

