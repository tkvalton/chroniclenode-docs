<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# VFX

**Inherits:** [Node3D](https://docs.godotengine.org/en/stable/classes/class_node3d.html)

**Inherited by:** [VFXLoop](/advanced/assets/vfx/vfx-loop), [VFXOneShot](/advanced/assets/vfx/vfx-one-shot), [VFXPointToPointBeam](/advanced/assets/vfx/vfx-point-to-point-beam), [VFXPointToPointPath](/advanced/assets/vfx/vfx-point-to-point-path), [VFXTelegraph](/advanced/assets/vfx/vfx-telegraph)

Base class for all VFX nodes - handles pooling, lifecycle, and common functionality All VFX types inherit from this class

## Properties

| | | |
|---|---|---|
| `String` | [vfx_type](#prop-vfx-type) | `""  # The VFX type identifier (from database)` |
| `bool` | [auto_cleanup](#prop-auto-cleanup) | `true  # Automatically return to pool when finished` |
| `bool` | [on_top_level](#prop-on-top-level) | `false  # Set top_level = true when activated (for world-s...` |

## Variables

| | | |
|---|---|---|
| `bool` | [is_pooled](#var-is-pooled) | `false  # Is this instance from a pool?` |
| `bool` | [is_active](#var-is-active) | `false  # Is the VFX currently playing?` |
| `bool` | [is_finished](#var-is-finished) | `false  # Has the VFX completed?` |
| `bool` | [original_top_level](#var-original-top-level) | `false  # Store original top_level state for restoration` |
| `VFXSelection` | [source_selection](#var-source-selection) |  |
| `Callable` | [pool_return_callback](#var-pool-return-callback) |  |
| `Dictionary` | [attachment_info](#var-attachment-info) | `{}  # Stores entity, remote, rig references` |
| `AnimationPlayer` | [animation_player](#var-animation-player) |  |
| `Node  # The particle system we're listening to for completion` | [primary_particle_system](#var-primary-particle-system) |  |
| `Timer` | [duration_timer](#var-duration-timer) |  |
| `Timer  # Timer for particle lifetime tracking` | [particle_finish_timer](#var-particle-finish-timer) |  |
| `Label3D` | [debug_label](#var-debug-label) |  |
| `MeshInstance3D` | [debug_sphere](#var-debug-sphere) |  |
| `ChronoManager` | [chrono_manager](#var-chrono-manager) |  |

## Methods

| | |
|---|---|
| `void` | [set_systems_refs](#method-set-systems-refs)( `system_hub: GameHost.SystemHub` ) |
| `void` | [activate_vfx](#method-activate-vfx)( `selection: VFXSelection = null` ) |
| `void` | [deactivate_vfx](#method-deactivate-vfx)() |
| `void` | [cleanup_vfx](#method-cleanup-vfx)() |
| `void` | [attach_to_entity](#method-attach-to-entity)( `target: Variant, location: VFXSelection.VfxLocation, offset: Vector3 = Vector3.ZERO` ) |
| `bool` | [is_attached_to_entity](#method-is-attached-to-entity)() |
| `Entity` | [get_attached_entity](#method-get-attached-entity)() |
| `void` | [set_pool_return_callback](#method-set-pool-return-callback)( `callback: Callable` ) |
| `bool` | [is_ready_for_pool](#method-is-ready-for-pool)() |
| `void` | [reset_for_pool](#method-reset-for-pool)() |
| `void` | [force_finish](#method-force-finish)() |
| `bool` | [has_active_components](#method-has-active-components)() |

## Signals

### vfx_started() {#signal-vfx-started}

### vfx_finished() {#signal-vfx-finished}

### vfx_cleanup_requested() {#signal-vfx-cleanup-requested}

### remote_cleanup_requested( remote: RemoteTransform3D ) {#signal-remote-cleanup-requested}

## Constants

- `Array[String]` **START_ANIMATION_NAMES** = `["start", "Start", "Init", "init", "BEGIN", "Begin"]`
- `Array[String]` **LOOP_ANIMATION_NAMES** = `["loop", "Loop", "Idle", "idle", "Idle_Loop", "idle_loop", "LOOP"]`
- `Array[String]` **END_ANIMATION_NAMES** = `["end", "End", "Finish", "finish", "Stop", "stop", "EXIT", "Exit"]`

## Property descriptions

*VFX Settings*

### String vfx_type = ""  # The VFX type identifier (from database) {#prop-vfx-type}

*No description yet.*

### bool auto_cleanup = true  # Automatically return to pool when finished {#prop-auto-cleanup}

*No description yet.*

### bool on_top_level = false  # Set top_level = true when activated (for world-spac {#prop-on-top-level}

*No description yet.*

## Variable descriptions

### bool is_pooled = false  # Is this instance from a pool? {#var-is-pooled}

*No description yet.*

### bool is_active = false  # Is the VFX currently playing? {#var-is-active}

*No description yet.*

### bool is_finished = false  # Has the VFX completed? {#var-is-finished}

*No description yet.*

### bool original_top_level = false  # Store original top_level state for restoration {#var-original-top-level}

*No description yet.*

### VFXSelection source_selection {#var-source-selection}

*No description yet.*

### Callable pool_return_callback {#var-pool-return-callback}

*No description yet.*

### Dictionary attachment_info =   # Stores entity, remote, rig references {#var-attachment-info}

*No description yet.*

### AnimationPlayer animation_player {#var-animation-player}

*No description yet.*

### Node  # The particle system we're listening to for completion primary_particle_system {#var-primary-particle-system}

*No description yet.*

### Timer duration_timer {#var-duration-timer}

*No description yet.*

### Timer  # Timer for particle lifetime tracking particle_finish_timer {#var-particle-finish-timer}

*No description yet.*

### Label3D debug_label {#var-debug-label}

*No description yet.*

### MeshInstance3D debug_sphere {#var-debug-sphere}

*No description yet.*

### ChronoManager chrono_manager {#var-chrono-manager}

SystemRefs

## Method descriptions

### void set_systems_refs( system_hub: GameHost.SystemHub ) {#method-set-systems-refs}

*No description yet.*

### void activate_vfx( selection: VFXSelection = null ) {#method-activate-vfx}

Activate VFX from pool or fresh spawn

### void deactivate_vfx() {#method-deactivate-vfx}

Deactivate VFX and prepare for pool return

### void cleanup_vfx() {#method-cleanup-vfx}

Force cleanup and return to pool

### void attach_to_entity( target: Variant, location: VFXSelection.VfxLocation, offset: Vector3 = Vector3.ZERO ) {#method-attach-to-entity}

Attach VFX to an entity using RemoteTransform

### bool is_attached_to_entity() {#method-is-attached-to-entity}

Check if VFX is attached to an entity

### Entity get_attached_entity() {#method-get-attached-entity}

Get the entity this VFX is attached to

### void set_pool_return_callback( callback: Callable ) {#method-set-pool-return-callback}

Set callback for returning to pool

### bool is_ready_for_pool() {#method-is-ready-for-pool}

Check if VFX is ready to be returned to pool

### void reset_for_pool() {#method-reset-for-pool}

Reset VFX for pool reuse

### void force_finish() {#method-force-finish}

Force finish VFX (for immediate cleanup)

### bool has_active_components() {#method-has-active-components}

Check if VFX has any active components

