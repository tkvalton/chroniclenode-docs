<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ChronicleTerrainProvider

**Inherits:** [TerrainProvider](/advanced/world/runtime/terrain-provider) < [Node](https://docs.godotengine.org/en/stable/classes/class_node.html)

Answers the TerrainService from a ChronicleTerrain: heights, directions and holes come straight from the data of the terrain (no physics, no rendering: the same answer on a server as in front of a screen). Where the terrain has no tile the answer is the physics one (other ground on the ground layer: an island, a bridge), and for a ray or a search that can hit more than one ground the nearest of the terrain and the physics wins. ChronicleTerrain makes one of these itself: you do not add it to a scene.

## Methods

| | |
|---|---|
| `bool` | [supports](#method-supports)( `_feature: StringName` ) |
| `float` | [get_height](#method-get-height)( `world: World3D, x: float, z: float` ) |
| `Vector3` | [get_normal](#method-get-normal)( `world: World3D, x: float, z: float` ) |
| `Dictionary` | [get_ground](#method-get-ground)( `world: World3D, position: Vector3, up: float, down: float, exclude: Array = [], mask: int = -1` ) |
| `Dictionary` | [raycast_ground](#method-raycast-ground)( `world: World3D, from: Vector3, to: Vector3, exclude: Array = []` ) |
| `bool` | [is_hole](#method-is-hole)( `_world: World3D, x: float, z: float` ) |
| `bool` | [is_ground_solid](#method-is-ground-solid)( `_world: World3D, x: float, z: float` ) |
| `bool` | [is_navigable](#method-is-navigable)( `world: World3D, x: float, z: float` ) |
| `String` | [get_surface_type](#method-get-surface-type)( `position: Vector3` ) |
| `Dictionary` | [get_texture_weights](#method-get-texture-weights)( `position: Vector3` ) |

## Method descriptions

### bool supports( _feature: StringName ) {#method-supports}

Does this provider answer the thing from the data of its terrain? The base class knows nothing but the physics of the world, so it supports nothing. A plugin provider lists what it can. *(from [TerrainProvider](/advanced/world/runtime/terrain-provider))*

### float get_height( world: World3D, x: float, z: float ) {#method-get-height}

The height of the terrain at x, z (NAN in a hole); where the terrain has no tile, the physics answer.

### Vector3 get_normal( world: World3D, x: float, z: float ) {#method-get-normal}

The direction of the ground of the terrain at x, z.

### Dictionary get_ground( world: World3D, position: Vector3, up: float, down: float, exclude: Array = [], mask: int = -1 ) {#method-get-ground}

The first ground near a position: the terrain, and anything else on the ground layers (a bridge); the higher one of the two, since the search goes down from above. A mask of layers that does not include the layers of the terrain is answered by the physics alone.

### Dictionary raycast_ground( world: World3D, from: Vector3, to: Vector3, exclude: Array = [] ) {#method-raycast-ground}

A ray that only the ground can stop: the terrain and the other ground, whichever is nearest.

### bool is_hole( _world: World3D, x: float, z: float ) {#method-is-hole}

Is there a hole in the terrain at x, z.

### bool is_ground_solid( _world: World3D, x: float, z: float ) {#method-is-ground-solid}

Is there solid ground at x, z: false where the terrain has ground it has not made solid (too far from every player).

### bool is_navigable( world: World3D, x: float, z: float ) {#method-is-navigable}

Can something walk at x, z: the ground of the terrain and navigation mesh on it.

### String get_surface_type( position: Vector3 ) {#method-get-surface-type}

The surface type of the terrain texture with the most weight at a position (the default surface where the terrain is not painted).

### Dictionary get_texture_weights( position: Vector3 ) {#method-get-texture-weights}

The textures under a position and their shares: &#123;terrain texture id: share&#125;.

