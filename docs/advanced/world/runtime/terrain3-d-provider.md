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
| `bool` | [supports](#method-supports)( `feature: StringName` ) |
| `Dictionary` | [get_texture_weights](#method-get-texture-weights)( `position: Vector3` ) |
| `String` | [get_surface_type](#method-get-surface-type)( `position: Vector3` ) |

## Property descriptions

### Dictionary[int, String] texture_surface_map =  {#prop-texture-surface-map}

Which surface type each texture of the terrain stands for.

## Method descriptions

### bool supports( feature: StringName ) {#method-supports}

What this provider answers from the data of Terrain3D: the height and the direction of the ground, the surface type and the textures under a place. (Holes, paint layers, streaming and the weather of the ground are things of the toolkit terrain.)

### Dictionary get_texture_weights( position: Vector3 ) {#method-get-texture-weights}

The textures under a place: Terrain3D keeps a base texture, an overlay texture and a blend between them (&#123;the id of the texture in Terrain3D: share&#125;).

### String get_surface_type( position: Vector3 ) {#method-get-surface-type}

The surface type of the ground at a position (the default when it is not known).

