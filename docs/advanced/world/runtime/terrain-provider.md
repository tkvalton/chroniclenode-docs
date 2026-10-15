<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# TerrainProvider

**Inherits:** [Node](https://docs.godotengine.org/en/stable/classes/class_node.html)

**Inherited by:** [HTerrainProvider](/advanced/world/runtime/h-terrain-provider), [TerraBrushProvider](/advanced/world/runtime/terra-brush-provider), [Terrain3DProvider](/advanced/world/runtime/terrain3-d-provider), [VoxelTerrainProvider](/advanced/world/runtime/voxel-terrain-provider)

The fallback surface type if detection fails

## Properties

| | | |
|---|---|---|
| `String` | [default_surface](#prop-default-surface) | `""` |
| `Node3D` | [terrain](#prop-terrain) |  |

## Methods

| | |
|---|---|
| `String` | [get_surface_type](#method-get-surface-type)( `_position: Vector3` ) |

## Property descriptions

### String default_surface = "" {#prop-default-surface}

The fallback surface type if detection fails

### Node3D terrain {#prop-terrain}

*No description yet.*

## Method descriptions

### String get_surface_type( _position: Vector3 ) {#method-get-surface-type}

To be overridden by specific plugin implementations

