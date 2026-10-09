<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# VFXManager

**Inherits:** [Node](https://docs.godotengine.org/en/stable/classes/class_node.html)

Centralized VFX system with pooling, shader precompilation, and support for multiple effect types (scene-based, telegraphs, materials).

## Description

POOLING SYSTEM: Pre-instantiates all VFX during initialization and reuses from pools for zero-cost playback. Eliminates shader compilation hitches by compiling shaders during loading screen.

VFX TYPES:

- Scene VFX: Pre-built effects (oneshot, loop, beam, path) from DatabaseVFX
- Telegraph VFX: Runtime-created ground indicators and area markers
- Material VFX: Shader-based entity effects (dissolve, outline, tint, etc.)

INITIALIZATION: Call initialize(system_hub) during game setup. This:

1. Preloads all VFX from database

2. Compiles shaders by temporarily adding to scene tree

3. Returns instances to pools ready for instant playback

USAGE:

- play_vfx_from_selection(selection, target, timer) - Main API for all VFX types
- VFXSelection determines type, location, attachment, and parameters
- stop_vfx(vfx) / stop_vfx_array(array) - Manual cleanup if needed
- VFX automatically return to pool when finished

HANDS VFX: Special support for dual hand VFX - automatically creates and manages left/right pairs attached to entity hand bones.

TRACKING:

- active_vfx: Currently playing scene-based VFX
- active_material_effects: Currently active material effects on entities

## Variables

| | | |
|---|---|---|
| `Array[VFX]` | [active_vfx](#var-active-vfx) | `[]` |
| `Array[VFXMaterial]` | [active_material_effects](#var-active-material-effects) | `[]` |
| `Node3D` | [vfx_container](#var-vfx-container) |  |
| `Dictionary` | [vfx_pools](#var-vfx-pools) | `{} # "type/name" -> Array[VFX]` |
| `int` | [total_pooled](#var-total-pooled) | `0` |
| `bool` | [is_initialized](#var-is-initialized) | `false` |

## Methods

| | |
|---|---|
| `void` | [initialize](#method-initialize)( `system_hub: GameHost.SystemHub` ) |
| `void` | [preload_all_vfx](#method-preload-all-vfx)( `system_hub: GameHost.SystemHub` ) |
| `Array[VFX]` | [play_vfx_from_selection](#method-play-vfx-from-selection)( `selection: VFXSelection, target: Variant = null, timer: Timer = null` ) |
| `void` | [stop_material_effects_on_entity](#method-stop-material-effects-on-entity)( `entity: Entity` ) |
| `void` | [stop_material_effect](#method-stop-material-effect)( `material_effect: VFXMaterial` ) |
| `Array[VFXMaterial]` | [get_material_effects_for_entity](#method-get-material-effects-for-entity)( `entity: Entity` ) |
| `bool` | [entity_has_material_effect](#method-entity-has-material-effect)( `entity: Entity, target: VFXSelectionMaterial.MaterialTarget` ) |
| `int` | [get_active_material_effect_count](#method-get-active-material-effect-count)() |
| `void` | [stop_vfx](#method-stop-vfx)( `vfx: VFX` ) |
| `void` | [stop_vfx_array](#method-stop-vfx-array)( `vfx_array: Array` ) |
| `void` | [cleanup_everything](#method-cleanup-everything)() |

## Constants

- `int` **MAX_POOL_SIZE** = `500`

## Variable descriptions

### Array[VFX] active_vfx = [] {#var-active-vfx}

*No description yet.*

### Array[VFXMaterial] active_material_effects = [] {#var-active-material-effects}

*No description yet.*

### Node3D vfx_container {#var-vfx-container}

*No description yet.*

### Dictionary vfx_pools =  # "type/name" -&gt; Array[VFX] {#var-vfx-pools}

*No description yet.*

### int total_pooled = 0 {#var-total-pooled}

*No description yet.*

### bool is_initialized = false {#var-is-initialized}

*No description yet.*

## Method descriptions

### void initialize( system_hub: GameHost.SystemHub ) {#method-initialize}

*No description yet.*

### void preload_all_vfx( system_hub: GameHost.SystemHub ) {#method-preload-all-vfx}

Preload ALL VFX during loading screen and report memory usage

### Array[VFX] play_vfx_from_selection( selection: VFXSelection, target: Variant = null, timer: Timer = null ) {#method-play-vfx-from-selection}

*No description yet.*

### void stop_material_effects_on_entity( entity: Entity ) {#method-stop-material-effects-on-entity}

Stop all material effects on a specific entity

### void stop_material_effect( material_effect: VFXMaterial ) {#method-stop-material-effect}

Stop a specific material effect

### Array[VFXMaterial] get_material_effects_for_entity( entity: Entity ) {#method-get-material-effects-for-entity}

Get all active material effects for an entity

### bool entity_has_material_effect( entity: Entity, target: VFXSelectionMaterial.MaterialTarget ) {#method-entity-has-material-effect}

Check if entity has material effect with specific target

### int get_active_material_effect_count() {#method-get-active-material-effect-count}

Get material effect count for debugging

### void stop_vfx( vfx: VFX ) {#method-stop-vfx}

*No description yet.*

### void stop_vfx_array( vfx_array: Array ) {#method-stop-vfx-array}

*No description yet.*

### void cleanup_everything() {#method-cleanup-everything}

*No description yet.*

