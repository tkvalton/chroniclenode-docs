<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# WorldScene

**Inherits:** [Node3D](https://docs.godotengine.org/en/stable/classes/class_node3d.html)

WorldScene manages all objects within a specific map/scene Handles object discovery, tracking, and provides query methods

## Properties

| | | |
|---|---|---|
| `WorldData` | [world_data](#prop-world-data) |  |
| `TerrainProvider` | [terrain_provider](#prop-terrain-provider) |  |
| `Marker3D` | [party_spawn](#prop-party-spawn) |  |
| `Array[Marker3D]` | [respawn_points](#prop-respawn-points) | `[]` |
| `Callable` | [generate_minimap](#prop-generate-minimap) | `_generate_minimap` |
| `float` | [minimap_size](#prop-minimap-size) | `512.0` |
| `int` | [minimap_grid_divisions](#prop-minimap-grid-divisions) | `4` |
| `Vector2i` | [minimap_image_size](#prop-minimap-image-size) | `Vector2i(512, 512)` |
| `MapQuality` | [map_preview_quality](#prop-map-preview-quality) | `MapQuality.MEDIUM` |
| `Callable` | [generate_map_preview_button](#prop-generate-map-preview-button) | `_generate_map_preview` |

## Variables

| | | |
|---|---|---|
| `bool` | [objects_discovered_flag](#var-objects-discovered-flag) | `false` |

## Methods

| | |
|---|---|
| `Dictionary` | [get_world_objects](#method-get-world-objects)() |
| `AABB` | [get_scene_bounds](#method-get-scene-bounds)() |
| `String` | [get_terrain_surface_type](#method-get-terrain-surface-type)( `target_position: Vector3` ) |
| `int` | [get_world_id](#method-get-world-id)() |
| `String` | [get_display_name](#method-get-display-name)() |

## Signals

### objects_discovered() {#signal-objects-discovered}

Emitted when object discovery is complete

### object_interacted( interactable: InteractableObject ) {#signal-object-interacted}

Emitted when an object is interacted with

### world_objects_ready() {#signal-world-objects-ready}

Emitted when all world objects have been collected and are ready for registration

### world_scene_ready() {#signal-world-scene-ready}

Emitted when the world scene is fully ready (after _ready() completes)

## Enumerations

### enum MapQuality {#enum-mapquality}

Quality preset for full map preview capture

- **LOW** = `256`
- **MEDIUM** = `512`
- **HIGH** = `1024`
- **ULTRA** = `2048`

## Property descriptions

### WorldData world_data {#prop-world-data}

WorldData reference for this scene

### TerrainProvider terrain_provider {#prop-terrain-provider}

Terrain3D reference for surface detection

### Marker3D party_spawn {#prop-party-spawn}

Party spawn point marker

### Array[Marker3D] respawn_points = [] {#prop-respawn-points}

Respawn/checkpoint points for player death respawning

*Minimap Settings*

### Callable generate_minimap = _generate_minimap {#prop-generate-minimap}

*No description yet.*

### float minimap_size = 512.0 {#prop-minimap-size}

Total world area to cover (will be divided into grid tiles)

### int minimap_grid_divisions = 4 {#prop-minimap-grid-divisions}

Number of grid tiles per side (map_size will be divided by this)

### Vector2i minimap_image_size = Vector2i(512, 512) {#prop-minimap-image-size}

Size of the image to capture per grid tile (pixels)

*Map Preview Settings*

### MapQuality map_preview_quality = MapQuality.MEDIUM {#prop-map-preview-quality}

*No description yet.*

### Callable generate_map_preview_button = _generate_map_preview {#prop-generate-map-preview-button}

*No description yet.*

## Variable descriptions

### bool objects_discovered_flag = false {#var-objects-discovered-flag}

Whether object discovery has been completed

## Method descriptions

### Dictionary get_world_objects() {#method-get-world-objects}

Get world objects from live scene tree at runtime Always collects current instances to ensure we work with actual scene nodes

### AABB get_scene_bounds() {#method-get-scene-bounds}

Get the bounds of the entire scene (uses same area as minimap)

### String get_terrain_surface_type( target_position: Vector3 ) {#method-get-terrain-surface-type}

*No description yet.*

### int get_world_id() {#method-get-world-id}

Get world ID

### String get_display_name() {#method-get-display-name}

Get world name

