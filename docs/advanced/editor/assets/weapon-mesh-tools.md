<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# WeaponMeshTools

**Inherits:** [VBoxContainer](https://docs.godotengine.org/en/stable/classes/class_vboxcontainer.html)

THE TOOLS OF A WEAPON MESH (Assets &gt; Meshes, 2026-11-14; the user: a 3D view of the equipment mesh where the data a dev sets on it is set with tools, not typed blind). The weapon is shown IN THE HAND of the figure of the view (a skeleton of Model Scenes playing an animation: AssetViewport3D), in the very weapon slot the game puts it in, so what is set is what is seen in game. Tools (the row above the view): View        turn the camera round (no handles) Grip        where the weapon sits in the hand: drag the white handle (its position offset); the X, Y, Z +90 buttons turn it (its rotation offset) Enchant     the part of the weapon an enchant covers: click the mesh to place START, click again for END (Shift+click: END), drag the green START, red END and yellow WIDTH handles; the rings show its width Spawn       where projectiles leave the weapon: click the mesh, or drag the handle Hold Ctrl while dragging to snap to the centimetre. A value is told (the signals) when a drag ends or a click places it; the Meshes tab saves it on the mesh (MeshSettings) and shows it in its fields. Main hand or Off hand: which hand of the figure holds it. Without a skeleton (the stand-in) the mesh is shown on its own and the Grip tool has nothing to hold it.

## Variables

| | | |
|---|---|---|
| `AssetViewport3D` | [viewport](#var-viewport) | `null` |
| `Tool` | [active_tool](#var-active-tool) | `Tool.VIEW` |
| `int` | [hand_slot](#var-hand-slot) | `GeneralSkeleton.WeaponSlot.MAIN_HAND` |
| `Mesh` | [mesh](#var-mesh) | `null` |
| `Vector3` | [grip_position](#var-grip-position) | `Vector3.ZERO` |
| `Vector3` | [grip_rotation](#var-grip-rotation) | `Vector3.ZERO` |
| `Vector3` | [enchant_start](#var-enchant-start) | `Vector3.ZERO` |
| `Vector3` | [enchant_end](#var-enchant-end) | `Vector3(0, 1, 0)` |
| `float` | [enchant_width](#var-enchant-width) | `0.06` |
| `Vector3` | [spawn_point](#var-spawn-point) | `Vector3.ZERO` |
| `MeshInstance3D` | [weapon_node](#var-weapon-node) | `null` |
| `Node3D` | [gizmos](#var-gizmos) | `null` |
| `MeshInstance3D` | [grip_gizmo](#var-grip-gizmo) | `null` |
| `Dictionary` | [handles](#var-handles) | `{}` |
| `MeshInstance3D` | [lines](#var-lines) | `null` |
| `Array[Button]` | [tool_buttons](#var-tool-buttons) | `[]` |
| `OptionButton` | [hand_option](#var-hand-option) | `null` |
| `OptionButton` | [effect_option](#var-effect-option) | `null` |
| `VFXEnchant` | [effect](#var-effect) | `null` |
| `HBoxContainer` | [rotate_row](#var-rotate-row) | `null` |
| `Label` | [hint_label](#var-hint-label) | `null` |

## Methods

| | |
|---|---|
| `String` | [effect_label](#method-effect-label)( `effect_name: String` ) *static* |
| `void` | [set_weapon](#method-set-weapon)( `new_mesh: Mesh, values: Dictionary` ) |
| `void` | [set_values](#method-set-values)( `values: Dictionary` ) |
| `Dictionary` | [default_enchant](#method-default-enchant)( `of_mesh: Mesh, old_point: Variant = null` ) *static* |
| `void` | [frame_weapon](#method-frame-weapon)() |
| `void` | [set_tool](#method-set-tool)( `index: int` ) |
| `Variant` | [ray_mesh](#method-ray-mesh)( `point: Vector2` ) |
| `void` | [move_handle](#method-move-handle)( `key: String, world_point: Vector3, snap: bool = false` ) |
| `void` | [turn_grip](#method-turn-grip)( `axis: Vector3` ) |

## Signals

### grip_edited( position: Vector3, rotation: Vector3 ) {#signal-grip-edited}

The weapon was moved or turned in the hand (its position and rotation offsets)

### enchant_edited( start: Vector3, end: Vector3, width: float ) {#signal-enchant-edited}

The enchant segment was set (mesh space: the start, the end, the width)

### spawn_edited( point: Vector3 ) {#signal-spawn-edited}

The projectile spawn point was set (mesh space)

## Enumerations

### enum Tool {#enum-tool}

- **VIEW** = `0`
- **GRIP** = `1`
- **ENCHANT** = `2`
- **SPAWN** = `3`

## Constants

- `float` **HANDLE_PICK_PIXELS** = `14.0` - How near (pixels) the mouse must be to a handle to take it
- `float` **HANDLE_RADIUS** = `0.018`
- `Color` **COLOR_START** = `Color(0.35, 1.0, 0.45)`
- `Color` **COLOR_END** = `Color(1.0, 0.38, 0.32)`
- `Color` **COLOR_WIDTH** = `Color(1.0, 0.85, 0.3)`
- `Color` **COLOR_SPAWN** = `Color(1.0, 0.95, 0.25)`
- `Color` **COLOR_GRIP** = `Color(1.0, 1.0, 1.0)`
- `Color` **COLOR_LINE** = `Color(0.6, 0.9, 1.0)`
- `Dictionary` **TOOL_HINTS** = `{`

## Variable descriptions

### AssetViewport3D viewport = null {#var-viewport}

*No description yet.*

### Tool active_tool = Tool.VIEW {#var-active-tool}

*No description yet.*

### int hand_slot = GeneralSkeleton.WeaponSlot.MAIN_HAND {#var-hand-slot}

*No description yet.*

### Mesh mesh = null {#var-mesh}

*No description yet.*

### Vector3 grip_position = Vector3.ZERO {#var-grip-position}

The values (the weapon's position and rotation offsets in the hand; the enchant segment and the spawn point in the mesh's own space)

### Vector3 grip_rotation = Vector3.ZERO {#var-grip-rotation}

*No description yet.*

### Vector3 enchant_start = Vector3.ZERO {#var-enchant-start}

*No description yet.*

### Vector3 enchant_end = Vector3(0, 1, 0) {#var-enchant-end}

*No description yet.*

### float enchant_width = 0.06 {#var-enchant-width}

*No description yet.*

### Vector3 spawn_point = Vector3.ZERO {#var-spawn-point}

*No description yet.*

### MeshInstance3D weapon_node = null {#var-weapon-node}

Where the mesh is shown (a weapon slot of the figure, or a node of its own), its handles (in its space), the grip handle (in the hand's space)

### Node3D gizmos = null {#var-gizmos}

*No description yet.*

### MeshInstance3D grip_gizmo = null {#var-grip-gizmo}

*No description yet.*

### Dictionary handles =  {#var-handles}

*No description yet.*

### MeshInstance3D lines = null {#var-lines}

*No description yet.*

### Array[Button] tool_buttons = [] {#var-tool-buttons}

*No description yet.*

### OptionButton hand_option = null {#var-hand-option}

*No description yet.*

### OptionButton effect_option = null {#var-effect-option}

The enchant effect shown on the weapon (No effect, or one of the enchant folder), and the one shown

### VFXEnchant effect = null {#var-effect}

*No description yet.*

### HBoxContainer rotate_row = null {#var-rotate-row}

*No description yet.*

### Label hint_label = null {#var-hint-label}

*No description yet.*

## Method descriptions

### String effect_label( effect_name: String ) {#method-effect-label}

The name of an enchant in the list: its theme and its name ("Fire Weapon 02")

### void set_weapon( new_mesh: Mesh, values: Dictionary ) {#method-set-weapon}

Shows a weapon mesh with its values: position_offset, rotation_offset, enchant_start, enchant_end, enchant_width, projectile_spawn_point (and the old enchant_vfx_position, read as the start)

### void set_values( values: Dictionary ) {#method-set-values}

Takes the values (from the fields of the Meshes tab) without telling them back

### Dictionary default_enchant( of_mesh: Mesh, old_point: Variant = null ) {#method-default-enchant}

The segment a mesh without one gets: along its longest side, from a third of the way to its far end (or from the old enchant point), reaching three quarters of its wider side from the line (a sword 8 cm wide: 6 cm)

### void frame_weapon() {#method-frame-weapon}

The camera looks at the weapon (in the hand, or on its own)

### void set_tool( index: int ) {#method-set-tool}

*No description yet.*

### Variant ray_mesh( point: Vector2 ) {#method-ray-mesh}

Where the ray through a point of the view first meets the mesh, in the mesh's own space (null: it misses)

### void move_handle( key: String, world_point: Vector3, snap: bool = false ) {#method-move-handle}

Moves a handle to a point of the world (snapped to the centimetre with `snap`)

### void turn_grip( axis: Vector3 ) {#method-turn-grip}

Turns the weapon a quarter turn round an axis of the hand

