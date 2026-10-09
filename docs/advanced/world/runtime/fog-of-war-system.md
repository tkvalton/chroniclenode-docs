<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# FogOfWarSystem

**Inherits:** [Node3D](https://docs.godotengine.org/en/stable/classes/class_node3d.html)

FogOfWarSystem manages fog of war using a CompositorEffect for rendering.

## Description

Uses depth buffer reconstruction to apply fog based on world position. Supports configurable edge smoothing, colors, and performance settings.

Entity visibility is determined via spatial queries (RangeQueryUtil) and line-of-sight checks (LineOfSightUtility) for improved performance over viewport texture sampling.

## Variables

| | | |
|---|---|---|
| `PartyManager` | [party_manager](#var-party-manager) |  |
| `WorldContainer` | [world_container](#var-world-container) |  |
| `float` | [radius](#var-radius) | `50.0` |
| `Color` | [color](#var-color) | `Color.WHITE` |

## Methods

| | |
|---|---|
| `void` | [initialize](#method-initialize)( `map_size: Vector2, map_origin: Vector2 = Vector2.ZERO` ) |
| `void` | [update_fog_colors](#method-update-fog-colors)( `shroud_alpha: float, fog_alpha: float` ) |
| `void` | [update_edge_smoothing](#method-update-edge-smoothing)( `threshold: float, softness: float` ) |
| `void` | [update_blur_radius](#method-update-blur-radius)( `radius: float` ) |
| `void` | [apply_config_settings](#method-apply-config-settings)() |
| `void` | [register_vision_source](#method-register-vision-source)( `entity: Entity` ) |
| `void` | [unregister_vision_source](#method-unregister-vision-source)( `entity: Entity` ) |
| `void` | [set_radius](#method-set-radius)( `new_radius: float` ) |
| `GameplayConfig.FogState` | [get_fog_state_at_position](#method-get-fog-state-at-position)( `world_position: Vector3` ) |
| `bool` | [is_position_visible](#method-is-position-visible)( `world_position: Vector3` ) |
| `bool` | [is_position_explored](#method-is-position-explored)( `world_position: Vector3` ) |
| `Image` | [get_exploration_image](#method-get-exploration-image)() |
| `void` | [clear_exploration](#method-clear-exploration)() |
| `void` | [reveal_all](#method-reveal-all)() |
| `void` | [cleanup](#method-cleanup)() |
| `void` | [debug_save_viewport_textures](#method-debug-save-viewport-textures)() |

## Signals

### fog_initialized() {#signal-fog-initialized}

### entity_fog_state_changed( entity: Entity, old_state: GameplayConfig.FogState, new_state: GameplayConfig.FogState ) {#signal-entity-fog-state-changed}

### exploration_changed() {#signal-exploration-changed}

## Variable descriptions

### PartyManager party_manager {#var-party-manager}

*No description yet.*

### WorldContainer world_container {#var-world-container}

*No description yet.*

### float radius = 50.0 {#var-radius}

*No description yet.*

### Color color = Color.WHITE {#var-color}

*No description yet.*

## Method descriptions

### void initialize( map_size: Vector2, map_origin: Vector2 = Vector2.ZERO ) {#method-initialize}

*No description yet.*

### void update_fog_colors( shroud_alpha: float, fog_alpha: float ) {#method-update-fog-colors}

Update fog colors at runtime

### void update_edge_smoothing( threshold: float, softness: float ) {#method-update-edge-smoothing}

Update edge smoothing at runtime

### void update_blur_radius( radius: float ) {#method-update-blur-radius}

Update blur radius at runtime

### void apply_config_settings() {#method-apply-config-settings}

Apply current config settings (call after changing gameplay_config)

### void register_vision_source( entity: Entity ) {#method-register-vision-source}

*No description yet.*

### void unregister_vision_source( entity: Entity ) {#method-unregister-vision-source}

*No description yet.*

### void set_radius( new_radius: float ) {#method-set-radius}

*No description yet.*

### GameplayConfig.FogState get_fog_state_at_position( world_position: Vector3 ) {#method-get-fog-state-at-position}

*No description yet.*

### bool is_position_visible( world_position: Vector3 ) {#method-is-position-visible}

*No description yet.*

### bool is_position_explored( world_position: Vector3 ) {#method-is-position-explored}

*No description yet.*

### Image get_exploration_image() {#method-get-exploration-image}

*No description yet.*

### void clear_exploration() {#method-clear-exploration}

*No description yet.*

### void reveal_all() {#method-reveal-all}

*No description yet.*

### void cleanup() {#method-cleanup}

*No description yet.*

### void debug_save_viewport_textures() {#method-debug-save-viewport-textures}

*No description yet.*

