<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# Terrain3DProvider

**Inherits:** [TerrainProvider](/advanced/world/runtime/terrain-provider) < [Node](https://docs.godotengine.org/en/stable/classes/class_node.html)

Tells which surface type the ground is at a position on a Terrain3D terrain: the texture under the position is looked up in `texture_surface_map`, and `default_surface` is used when it has no entry.

## Properties

| | | |
|---|---|---|
| `Dictionary[int, String]` | [texture_surface_map](#prop-texture-surface-map) | `{}` |

## Methods

| | |
|---|---|
| `String` | [get_surface_type](#method-get-surface-type)( `position: Vector3` ) |

## Property descriptions

### Dictionary[int, String] texture_surface_map =  {#prop-texture-surface-map}

Which surface type each texture of the terrain stands for.

## Method descriptions

### String get_surface_type( position: Vector3 ) {#method-get-surface-type}

The surface type of the ground at a position (the default when it is not known).

