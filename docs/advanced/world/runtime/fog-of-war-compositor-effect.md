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
| `float` | [blur_radius](#var-blur-radius) | `1.0  # Multiplier for blur sampling distance (1.0 = norma...` |

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

- `String` **SHADER_PATH** = `"res://addons/chroniclenode/runtime_classes/world/fog/fog_of_war.glsl"`

## Variable descriptions

### RenderingDevice rd {#var-rd}

*No description yet.*

### RID shader {#var-shader}

*No description yet.*

### RID pipeline {#var-pipeline}

*No description yet.*

### RID sampler_linear {#var-sampler-linear}

*No description yet.*

### RID shroud_texture_rid {#var-shroud-texture-rid}

*No description yet.*

### RID vision_texture_rid {#var-vision-texture-rid}

*No description yet.*

### Vector2 map_min = Vector2(-256, -256) {#var-map-min}

*No description yet.*

### Vector2 map_max = Vector2(256, 256) {#var-map-max}

*No description yet.*

### float shroud_alpha = 1.0 {#var-shroud-alpha}

*No description yet.*

### float fog_alpha = 0.2 {#var-fog-alpha}

*No description yet.*

### float edge_threshold = 0.3 {#var-edge-threshold}

*No description yet.*

### float edge_softness = 1.0 {#var-edge-softness}

*No description yet.*

### float blur_radius = 1.0  # Multiplier for blur sampling distance (1.0 = normal,  {#var-blur-radius}

*No description yet.*

## Method descriptions

### void set_fog_textures( shroud_rid: RID, vision_rid: RID ) {#method-set-fog-textures}

*No description yet.*

### void set_map_bounds( min_bounds: Vector2, max_bounds: Vector2 ) {#method-set-map-bounds}

*No description yet.*

### void set_fog_colors( p_shroud_alpha: float, p_fog_alpha: float ) {#method-set-fog-colors}

*No description yet.*

### void set_edge_params( p_threshold: float, p_softness: float ) {#method-set-edge-params}

*No description yet.*

### void set_blur_radius( p_blur_radius: float ) {#method-set-blur-radius}

*No description yet.*

### void set_debug( enabled: bool ) {#method-set-debug}

*No description yet.*

