<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# VolumeLook

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

The look of a movement volume: a mesh made from its box shape (the top, the bottom or all six faces), with the material you give it (a shader, or a texture). The volume itself draws nothing; this is the water, the lava, the cloud. Static functions, so a test can build a mesh without a node. The mesh is meant for a **box** shape: other shapes get no look.

## Methods

| | |
|---|---|
| `ArrayMesh` | [build_mesh](#method-build-mesh)( `size: Vector3, faces: Faces, grid: int = 24, double_sided: bool = true, proportional: bool = false` ) *static* |
| `Material` | [make_material](#method-make-material)( `material: Material, texture: Texture2D, tint: Color` ) *static* |
| `ShaderMaterial` | [make_water_material](#method-make-water-material)() *static* |
| `ShaderMaterial` | [make_river_material](#method-make-river-material)() *static* |
| `bool` | [has_flow_parameters](#method-has-flow-parameters)( `material: Material` ) *static* |
| `bool` | [apply_flow](#method-apply-flow)( `material: Material, direction: Vector3, strength: float` ) *static* |
| `bool` | [has_parameter](#method-has-parameter)( `material: Material, parameter: String, type: int` ) *static* |
| `void` | [apply_size](#method-apply-size)( `material: Material, box_size: Vector3` ) *static* |
| `int` | [auto_grid](#method-auto-grid)( `box_size: Vector3` ) *static* |
| `ShaderMaterial` | [make_lava_material](#method-make-lava-material)() *static* |

## Enumerations

### enum Faces {#enum-faces}

- **NONE** = `0`
- **TOP** = `1`
- **BOTTOM** = `2`
- **ALL_SIDES** = `3`

## Constants

- `String` **WATER_SHADER** = `"res://addons/chroniclenode/assets/shaders/volume_water.gdshader"`
- `String` **LAVA_SHADER** = `"res://addons/chroniclenode/assets/shaders/volume_lava.gdshader"`
- `String` **RIVER_SHADER** = `"res://addons/chroniclenode/assets/shaders/volume_river.gdshader"`
- `int` **SIDE_CELLS** = `4` - How many cells the sides of a box are cut in (they are flat: waves are for the top).
- `float` **AUTO_CELL** = `0.5` - The cells of a look mesh when the volume works them out itself (Look grid 0): about this many metres each

## Method descriptions

### ArrayMesh build_mesh( size: Vector3, faces: Faces, grid: int = 24, double_sided: bool = true, proportional: bool = false ) {#method-build-mesh}

The mesh of a box of this size, centred on the origin: the top and the bottom are grids of `grid` x `grid` cells (a shader that moves the surface needs the vertices), the sides are coarse. With `double_sided` every face is made again looking the other way (a surface seen from under the water). Null for NONE.

### Material make_material( material: Material, texture: Texture2D, tint: Color ) {#method-make-material}

The material a look has: the one given, else a plain one with the texture and the tint (see-through when the tint is), else a plain tinted one.

### ShaderMaterial make_water_material() {#method-make-water-material}

The water of the Water preset: the shipped water shader with its usual numbers.

### ShaderMaterial make_river_material() {#method-make-river-material}

The river of the River preset: water that flows (the shader has flow_direction and flow_speed, which a volume with "Look follows flow" sets from its own flow).

### bool has_flow_parameters( material: Material ) {#method-has-flow-parameters}

Does the material have a shader with a flow_direction (vec2) and a flow_speed (float) to set?

### bool apply_flow( material: Material, direction: Vector3, strength: float ) {#method-apply-flow}

Gives the material the flow of a volume: the direction on the ground plane (x and z of the direction in the space of the volume) and the speed. False when the material has no such parameters.

### bool has_parameter( material: Material, parameter: String, type: int ) {#method-has-parameter}

Does the shader of the material have a parameter of this name and type?

### void apply_size( material: Material, box_size: Vector3 ) {#method-apply-size}

Gives the shader the size of the volume (half of its box), for the water that flattens towards the edge of its volume. Nothing happens when the shader has no volume_half_size.

### int auto_grid( box_size: Vector3 ) {#method-auto-grid}

How many cells the long side of the look has for a box of this size when the grid is automatic: AUTO_CELL metres each, at least 8, at most 128

### ShaderMaterial make_lava_material() {#method-make-lava-material}

The lava of the Lava preset.

