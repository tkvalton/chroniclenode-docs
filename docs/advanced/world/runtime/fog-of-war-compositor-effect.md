<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# FogOfWarCompositorEffect

**Inherits:** `CompositorEffect`

CompositorEffect that renders fog of war as a post-process. Uses depth buffer reconstruction to apply fog based on world position.

## Variables

| | | |
|---|---|---|
| `RenderingDevice` | [rd](#var-rd) |  |
| `RID` | [shader](#var-shader) |  |
| `RID` | [pipeline](#var-pipeline) |  |
| `RID` | [sampler_linear](#var-sampler-linear) |  |
| `RID` | [shroud_texture_rid](#var-shroud-texture-rid) |  |
| `RID` | [vision_texture_rid](#var-vision-texture-rid) |  |
| `Vector2` | [map_min](#var-map-min) | `Vector2(-256, -256)` |
| `Vector2` | [map_max](#var-map-max) | `Vector2(256, 256)` |
| `float` | [shroud_alpha](#var-shroud-alpha) | `1.0` |
| `float` | [fog_alpha](#var-fog-alpha) | `0.2` |
| `float` | [edge_threshold](#var-edge-threshold) | `0.3` |
| `float` | [edge_softness](#var-edge-softness) | `1.0` |
| `float` | [blur_radius](#var-blur-radius) | `1.0` |

## Methods

| | |
|---|---|
| `void` | [set_fog_textures](#method-set-fog-textures)( `shroud_rid: RID, vision_rid: RID` ) |
| `void` | [set_map_bounds](#method-set-map-bounds)( `min_bounds: Vector2, max_bounds: Vector2` ) |
| `void` | [set_fog_colors](#method-set-fog-colors)( `p_shroud_alpha: float, p_fog_alpha: float` ) |
| `void` | [set_edge_params](#method-set-edge-params)( `p_threshold: float, p_softness: float` ) |
| `void` | [set_blur_radius](#method-set-blur-radius)( `p_blur_radius: float` ) |
| `void` | [set_debug](#method-set-debug)( `enabled: bool` ) |

## Constants

- `String` **SHADER_PATH** = `"res://addons/chroniclenode/runtime_classes/world/fog/fog_of_war.glsl"` - The compute shader that draws the fog.

## Variable descriptions

### RenderingDevice rd {#var-rd}

The rendering device the effect draws with.

### RID shader {#var-shader}

The compiled shader.

### RID pipeline {#var-pipeline}

The compute pipeline of the shader.

### RID sampler_linear {#var-sampler-linear}

The sampler of the fog textures.

### RID shroud_texture_rid {#var-shroud-texture-rid}

The texture of the shroud (the places that were never seen).

### RID vision_texture_rid {#var-vision-texture-rid}

The texture of the places seen now.

### Vector2 map_min = Vector2(-256, -256) {#var-map-min}

The corner of the map with the lowest coordinates.

### Vector2 map_max = Vector2(256, 256) {#var-map-max}

The corner of the map with the highest coordinates.

### float shroud_alpha = 1.0 {#var-shroud-alpha}

How dark the shroud is (1 = fully dark).

### float fog_alpha = 0.2 {#var-fog-alpha}

How dark the places that were seen but are not in view are.

### float edge_threshold = 0.3 {#var-edge-threshold}

Where the soft edge of the fog starts.

### float edge_softness = 1.0 {#var-edge-softness}

How soft the edge of the fog is.

### float blur_radius = 1.0 {#var-blur-radius}

Multiplier for blur sampling distance (1.0 = normal, 1.5 = wider blur)

## Method descriptions

### void set_fog_textures( shroud_rid: RID, vision_rid: RID ) {#method-set-fog-textures}

Gives the effect the shroud and the vision textures.

### void set_map_bounds( min_bounds: Vector2, max_bounds: Vector2 ) {#method-set-map-bounds}

Sets the corners of the map the fog covers.

### void set_fog_colors( p_shroud_alpha: float, p_fog_alpha: float ) {#method-set-fog-colors}

Sets how dark the shroud and the fog are.

### void set_edge_params( p_threshold: float, p_softness: float ) {#method-set-edge-params}

Sets the threshold and the softness of the edge of the fog.

### void set_blur_radius( p_blur_radius: float ) {#method-set-blur-radius}

Sets how wide the blur of the edge is (0.5 to 3).

### void set_debug( enabled: bool ) {#method-set-debug}

Turns the debug output on or off.

