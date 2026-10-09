<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# VFXTelegraph

**Inherits:** [VFX](/advanced/assets/vfx/vfx) < [Node3D](https://docs.godotengine.org/en/stable/classes/class_node3d.html)

Telegraph VFX - Warning/indicator effects for abilities Uses shader-based approach for smooth fill animations without texture regeneration

## Properties

| | | |
|---|---|---|
| `Vector2` | [telegraph_size](#prop-telegraph-size) | `Vector2(5.0, 5.0)` |
| `TelegraphShape` | [telegraph_shape](#prop-telegraph-shape) | `TelegraphShape.CIRCLE` |
| `Color` | [telegraph_color](#prop-telegraph-color) | `Color.RED` |
| `TelegraphAttachment` | [attachment_type](#prop-attachment-type) | `TelegraphAttachment.POINT` |
| `float` | [orientation_offset](#prop-orientation-offset) | `0.0  # Y rotation in degrees` |

## Variables

| | | |
|---|---|---|
| `float` | [telegraph_duration](#var-telegraph-duration) | `0.0` |
| `float` | [completion_percentage](#var-completion-percentage) | `0.0  # 0.0 to 1.0 progression` |
| `Tween` | [telegraph_tween](#var-telegraph-tween) |  |
| `MeshInstance3D` | [telegraph_mesh](#var-telegraph-mesh) |  |
| `ShaderMaterial` | [telegraph_material](#var-telegraph-material) |  |
| `Shader` | [telegraph_shader](#var-telegraph-shader) |  |
| `bool` | [is_telegraph_active](#var-is-telegraph-active) | `false` |
| `bool` | [is_interrupted](#var-is-interrupted) | `false` |

## Methods

| | |
|---|---|
| `void` | [setup_from_selection](#method-setup-from-selection)( `selection: VFXSelectionTelegraph` ) |
| `void` | [set_outline_texture](#method-set-outline-texture)( `texture: Texture2D` ) |
| `void` | [start_telegraph](#method-start-telegraph)( `duration: float` ) |
| `void` | [interrupt_telegraph](#method-interrupt-telegraph)() |
| `void` | [deactivate_vfx](#method-deactivate-vfx)() |
| `bool` | [is_telegraph_valid](#method-is-telegraph-valid)() |
| `float` | [get_remaining_time](#method-get-remaining-time)() |
| `void` | [set_telegraph_shape](#method-set-telegraph-shape)( `shape: TelegraphShape` ) |
| `void` | [set_telegraph_color](#method-set-telegraph-color)( `color: Color` ) |
| `void` | [set_shader_parameter](#method-set-shader-parameter)( `param_name: String, value` ) |
| `void` | [reset_for_pooling](#method-reset-for-pooling)() |

## Enumerations

### enum TelegraphAttachment {#enum-telegraphattachment}

- **POINT** = `0`

### enum TelegraphShape {#enum-telegraphshape}

- **CIRCLE** = `0`
- **SQUARE** = `1`

## Constants

- `const` **TELEGRAPH_FILL_SHADER** = `preload("res://addons/chroniclenode/assets/shaders/telegraph_fill_shader.gdsh...`

## Property descriptions

*Telegraph Settings*

### Vector2 telegraph_size = Vector2(5.0, 5.0) {#prop-telegraph-size}

*No description yet.*

### TelegraphShape telegraph_shape = TelegraphShape.CIRCLE {#prop-telegraph-shape}

*No description yet.*

### Color telegraph_color = Color.RED {#prop-telegraph-color}

*No description yet.*

### TelegraphAttachment attachment_type = TelegraphAttachment.POINT {#prop-attachment-type}

*No description yet.*

### float orientation_offset = 0.0  # Y rotation in degrees {#prop-orientation-offset}

*No description yet.*

## Variable descriptions

### float telegraph_duration = 0.0 {#var-telegraph-duration}

*No description yet.*

### float completion_percentage = 0.0  # 0.0 to 1.0 progression {#var-completion-percentage}

*No description yet.*

### Tween telegraph_tween {#var-telegraph-tween}

*No description yet.*

### MeshInstance3D telegraph_mesh {#var-telegraph-mesh}

*No description yet.*

### ShaderMaterial telegraph_material {#var-telegraph-material}

*No description yet.*

### Shader telegraph_shader {#var-telegraph-shader}

*No description yet.*

### bool is_telegraph_active = false {#var-is-telegraph-active}

*No description yet.*

### bool is_interrupted = false {#var-is-interrupted}

*No description yet.*

## Method descriptions

### void setup_from_selection( selection: VFXSelectionTelegraph ) {#method-setup-from-selection}

Setup telegraph from selection (called by VFXManager)

### void set_outline_texture( texture: Texture2D ) {#method-set-outline-texture}

Set outline texture from VFXManager (called after creation)

### void start_telegraph( duration: float ) {#method-start-telegraph}

Start the telegraph animation with given duration

### void interrupt_telegraph() {#method-interrupt-telegraph}

Called when telegraph is interrupted (cast cancelled, etc.)

### void deactivate_vfx() {#method-deactivate-vfx}

Override cleanup to handle telegraph-specific cleanup

### bool is_telegraph_valid() {#method-is-telegraph-valid}

Check if telegraph is still valid

### float get_remaining_time() {#method-get-remaining-time}

Get remaining time on telegraph

### void set_telegraph_shape( shape: TelegraphShape ) {#method-set-telegraph-shape}

Set telegraph shape (can be called at runtime)

### void set_telegraph_color( color: Color ) {#method-set-telegraph-color}

Set telegraph color (can be called at runtime)

### void set_shader_parameter( param_name: String, value ) {#method-set-shader-parameter}

Set shader parameter directly (for advanced customization)

### void reset_for_pooling() {#method-reset-for-pooling}

Reset telegraph for pool reuse

