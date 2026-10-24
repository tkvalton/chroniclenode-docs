<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# VolumeLook

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

The look of a movement volume: a mesh made from its box shape (the top, the bottom or all six faces), with the material you give it (a shader, or a texture). The volume itself draws nothing; this is the water, the lava, the cloud. Static functions, so a test can build a mesh without a node. The mesh is meant for a **box** shape: other shapes get no look.

## Methods

| | |
|---|---|
| `ArrayMesh` | [build_mesh](#method-build-mesh)( `size: Vector3, faces: Faces, grid: int = 24, double_sided: bool = true` ) *static* |
| `Material` | [make_material](#method-make-material)( `material: Material, texture: Texture2D, tint: Color` ) *static* |
| `ShaderMaterial` | [make_water_material](#method-make-water-material)() *static* |
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
- `int` **SIDE_CELLS** = `4` - How many cells the sides of a box are cut in (they are flat: waves are for the top).

## Method descriptions

### ArrayMesh build_mesh( size: Vector3, faces: Faces, grid: int = 24, double_sided: bool = true ) {#method-build-mesh}

The mesh of a box of this size, centred on the origin: the top and the bottom are grids of `grid` x `grid` cells (a shader that moves the surface needs the vertices), the sides are coarse. With `double_sided` every face is made again looking the other way (a surface seen from under the water). Null for NONE.

### Material make_material( material: Material, texture: Texture2D, tint: Color ) {#method-make-material}

The material a look has: the one given, else a plain one with the texture and the tint (see-through when the tint is), else a plain tinted one.

### ShaderMaterial make_water_material() {#method-make-water-material}

The water of the Water preset: the shipped water shader with its usual numbers.

### ShaderMaterial make_lava_material() {#method-make-lava-material}

The lava of the Lava preset.

