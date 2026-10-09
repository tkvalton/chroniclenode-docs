<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# RPGShapeUtility

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

Unified utility class for creating RPG area effect shapes Supports both directional (origin-based, facing -Z) and centered (point-based) shapes Includes custom mesh shapes and Godot built-in shape wrappers

## Methods

| | |
|---|---|
| `Shape3D` | [create_directional_shape](#method-create-directional-shape)( `shape_type: DirectionalShapeType, params: Dictionary` ) *static* |
| `Shape3D` | [create_centered_shape](#method-create-centered-shape)( `shape_type: CenteredShapeType, params: Dictionary` ) *static* |
| `ArrayMesh` | [get_directional_debug_mesh](#method-get-directional-debug-mesh)( `shape_type: DirectionalShapeType, params: Dictionary` ) *static* |
| `ArrayMesh` | [get_centered_debug_mesh](#method-get-centered-debug-mesh)( `shape_type: CenteredShapeType, params: Dictionary` ) *static* |

## Enumerations

### enum DirectionalShapeType {#enum-directionalshapetype}

- **CONE** = `0`
- **TRUNCATED_CONE** = `1`
- **ARC** = `2`
- **WEDGE** = `3`
- **DIRECTIONAL_LINE** = `4`

### enum CenteredShapeType {#enum-centeredshapetype}

- **DONUT** = `0`
- **LINE** = `1`
- **CROSS** = `2`
- **DIAMOND** = `3`
- **SPHERE** = `4`
- **DOME** = `5`
- **BOX** = `6`
- **CYLINDER** = `7`
- **CAPSULE** = `8`

## Method descriptions

### Shape3D create_directional_shape( shape_type: DirectionalShapeType, params: Dictionary ) {#method-create-directional-shape}

Create a directional shape that originates at (0,0,0) and extends in -Z direction (forward)

### Shape3D create_centered_shape( shape_type: CenteredShapeType, params: Dictionary ) {#method-create-centered-shape}

Create a centered shape that is positioned around (0,0,0)

### ArrayMesh get_directional_debug_mesh( shape_type: DirectionalShapeType, params: Dictionary ) {#method-get-directional-debug-mesh}

Get debug mesh for visualization (works for both directional and centered shapes)

### ArrayMesh get_centered_debug_mesh( shape_type: CenteredShapeType, params: Dictionary ) {#method-get-centered-debug-mesh}

*No description yet.*

