<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# TerrainProvider

**Inherits:** [Node](https://docs.godotengine.org/en/stable/classes/class_node.html)

**Inherited by:** [ChronicleTerrainProvider](/advanced/world/runtime/chronicle-terrain-provider), [HTerrainProvider](/advanced/world/runtime/h-terrain-provider), [TerraBrushProvider](/advanced/world/runtime/terra-brush-provider), [Terrain3DProvider](/advanced/world/runtime/terrain3-d-provider), [VoxelTerrainProvider](/advanced/world/runtime/voxel-terrain-provider)

The terrain of a world, seen by the TerrainService. The base class answers every question with the physics of the world (the ground is what is on the ground layer) and the surface type with `default_surface`; the providers of the terrain plugins (Terrain3D, HTerrain, ...) and our own terrain override what they know better. Every question that needs the world takes it: the service passes the world of the caller.

## Properties

| | | |
|---|---|---|
| `String` | [default_surface](#prop-default-surface) | `""` |
| `Node3D` | [terrain](#prop-terrain) |  |
| `float` | [search_top](#prop-search-top) | `PhysicsGround.DEFAULT_TOP` |
| `float` | [search_depth](#prop-search-depth) | `PhysicsGround.DEFAULT_DEPTH` |

## Methods

| | |
|---|---|
| `String` | [get_surface_type](#method-get-surface-type)( `_position: Vector3` ) |
| `float` | [get_height](#method-get-height)( `world: World3D, x: float, z: float` ) |
| `Vector3` | [get_normal](#method-get-normal)( `world: World3D, x: float, z: float` ) |
| `Dictionary` | [get_ground](#method-get-ground)( `world: World3D, position: Vector3, up: float, down: float, exclude: Array = [], mask: int = -1` ) |
| `Dictionary` | [raycast_ground](#method-raycast-ground)( `world: World3D, from: Vector3, to: Vector3, exclude: Array = []` ) |
| `bool` | [is_hole](#method-is-hole)( `_world: World3D, _x: float, _z: float` ) |
| `bool` | [is_ground_solid](#method-is-ground-solid)( `_world: World3D, _x: float, _z: float` ) |
| `bool` | [is_navigable](#method-is-navigable)( `world: World3D, x: float, z: float` ) |
| `Dictionary` | [get_texture_weights](#method-get-texture-weights)( `_position: Vector3` ) |
| `int` | [get_area_id](#method-get-area-id)( `_position: Vector3` ) |

## Property descriptions

### String default_surface = "" {#prop-default-surface}

The fallback surface type if detection fails

### Node3D terrain {#prop-terrain}

The terrain node the provider reads.

### float search_top = PhysicsGround.DEFAULT_TOP {#prop-search-top}

How high above the world origin the search for the ground at a position starts (metres).

### float search_depth = PhysicsGround.DEFAULT_DEPTH {#prop-search-depth}

The total length of that search (metres).

## Method descriptions

### String get_surface_type( _position: Vector3 ) {#method-get-surface-type}

To be overridden by specific plugin implementations

### float get_height( world: World3D, x: float, z: float ) {#method-get-height}

The height of the highest ground at x, z (NAN when there is none).

### Vector3 get_normal( world: World3D, x: float, z: float ) {#method-get-normal}

The direction the ground at x, z faces.

### Dictionary get_ground( world: World3D, position: Vector3, up: float, down: float, exclude: Array = [], mask: int = -1 ) {#method-get-ground}

The first ground below `up` metres above the position down to `down` metres below it: &#123;&#125; or &#123;"position", "normal", "collider"&#125;. A mask of -1 is the ground layers of the provider.

### Dictionary raycast_ground( world: World3D, from: Vector3, to: Vector3, exclude: Array = [] ) {#method-raycast-ground}

A ray between two points that hits only the ground: &#123;&#125; or the hit.

### bool is_hole( _world: World3D, _x: float, _z: float ) {#method-is-hole}

Is there a hole in the ground at x, z (a terrain with holes knows; the physics cannot tell a hole from no ground).

### bool is_ground_solid( _world: World3D, _x: float, _z: float ) {#method-is-ground-solid}

Is there solid ground at x, z for what stands there (a provider that cannot tell says yes: nothing is frozen on a ground it does not know).

### bool is_navigable( world: World3D, x: float, z: float ) {#method-is-navigable}

Can something walk at x, z.

### Dictionary get_texture_weights( _position: Vector3 ) {#method-get-texture-weights}

The library textures under a position and their weights: &#123;texture id: weight&#125;. Empty when the terrain does not know.

### int get_area_id( _position: Vector3 ) {#method-get-area-id}

The id of the area (zone) of the ground at a position (-1 = none).

