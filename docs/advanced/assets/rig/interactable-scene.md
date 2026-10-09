<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# InteractableScene

**Inherits:** [Node3D](https://docs.godotengine.org/en/stable/classes/class_node3d.html)

InteractableScene serves as the visual/physics template for interactable objects. Contains the mesh, collision shape, and AnimationPlayer. Auto-detects and exports available animations when saved in editor.

## Properties

| | | |
|---|---|---|
| `Marker3D` | [body_mark](#prop-body-mark) |  |
| `Marker3D` | [top_mark](#prop-top-mark) |  |
| `Marker3D` | [nameplate_marker](#prop-nameplate-marker) |  |
| `Array[String]` | [available_animations](#prop-available-animations) | `[]` |

## Variables

| | | |
|---|---|---|
| `CollisionShape3D` | [collision_shape](#var-collision-shape) |  |
| `AnimationPlayer` | [animation_player](#var-animation-player) |  |
| `Marker3D` | [chest_marker](#var-chest-marker) |  |
| `Marker3D` | [overhead_marker](#var-overhead-marker) |  |
| `Array[MeshInstance3D]` | [mesh_instances](#var-mesh-instances) | `[]` |

## Methods

| | |
|---|---|
| `void` | [set_visual_layer](#method-set-visual-layer)( `layer: int` ) |
| `Array[String]` | [get_available_animations](#method-get-available-animations)() |
| `bool` | [has_animation](#method-has-animation)( `anim_name: String` ) |
| `bool` | [play_animation](#method-play-animation)( `anim_name: String` ) |
| `AnimationPlayer` | [get_animation_player](#method-get-animation-player)() |
| `void` | [set_mesh_overlay](#method-set-mesh-overlay)( `highlight_type: RigComponent.HighlightType` ) |
| `void` | [set_target_highlight_with_color](#method-set-target-highlight-with-color)( `target_color: Color` ) |
| `void` | [clear_target_marker](#method-clear-target-marker)() |
| `void` | [apply_selection_outline](#method-apply-selection-outline)( `selection_color: Color, power: float = 3.0, intensity: float = 0.5, threshold: float = 0.0` ) |

## Property descriptions

### Marker3D body_mark {#prop-body-mark}

Main marker for VFX

### Marker3D top_mark {#prop-top-mark}

VFX marker for above object

### Marker3D nameplate_marker {#prop-nameplate-marker}

Marker for nameplate positioning (optional - enables overhead nameplate when object has stats)

### Array[String] available_animations = [] {#prop-available-animations}

Available animation names (auto-populated from AnimationPlayer on save)

## Variable descriptions

### CollisionShape3D collision_shape {#var-collision-shape}

Collision shape for physics interactions

### AnimationPlayer animation_player {#var-animation-player}

Animation player for visual animations (open, close, damaged, etc.)

### Marker3D chest_marker {#var-chest-marker}

Optional markers for VFX attachment points

### Marker3D overhead_marker {#var-overhead-marker}

*No description yet.*

### Array[MeshInstance3D] mesh_instances = [] {#var-mesh-instances}

*No description yet.*

## Method descriptions

### void set_visual_layer( layer: int ) {#method-set-visual-layer}

Set the visual layer for all meshes in this skeleton Used for camera cull mask isolation (e.g., character previews)

### Array[String] get_available_animations() {#method-get-available-animations}

Get all available animation names

### bool has_animation( anim_name: String ) {#method-has-animation}

Check if a specific animation exists

### bool play_animation( anim_name: String ) {#method-play-animation}

Play an animation (runtime only)

### AnimationPlayer get_animation_player() {#method-get-animation-player}

Get the AnimationPlayer reference

### void set_mesh_overlay( highlight_type: RigComponent.HighlightType ) {#method-set-mesh-overlay}

Core mesh overlay system

### void set_target_highlight_with_color( target_color: Color ) {#method-set-target-highlight-with-color}

Set target highlight with faction-based color

### void clear_target_marker() {#method-clear-target-marker}

Clear target marker visibility

### void apply_selection_outline( selection_color: Color, power: float = 3.0, intensity: float = 0.5, threshold: float = 0.0 ) {#method-apply-selection-outline}

*No description yet.*

