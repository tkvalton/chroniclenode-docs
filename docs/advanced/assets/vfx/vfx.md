<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# VFX

**Inherits:** [Node3D](https://docs.godotengine.org/en/stable/classes/class_node3d.html)

**Inherited by:** [VFXLoop](/advanced/assets/vfx/vfx-loop), [VFXOneShot](/advanced/assets/vfx/vfx-one-shot), [VFXPointToPointBeam](/advanced/assets/vfx/vfx-point-to-point-beam), [VFXPointToPointPath](/advanced/assets/vfx/vfx-point-to-point-path), [VFXTelegraph](/advanced/assets/vfx/vfx-telegraph)

Base class for all VFX nodes - handles pooling, lifecycle, and common functionality All VFX types inherit from this class

## Properties

| | | |
|---|---|---|
| `String` | [vfx_type](#prop-vfx-type) | `""  # The VFX type identifier (from database)` |
| `bool` | [auto_cleanup](#prop-auto-cleanup) | `true` |
| `bool` | [on_top_level](#prop-on-top-level) | `false` |

## Variables

| | | |
|---|---|---|
| `bool` | [is_pooled](#var-is-pooled) | `false  # Is this instance from a pool?` |
| `bool` | [is_active](#var-is-active) | `false` |
| `bool` | [is_finished](#var-is-finished) | `false` |
| `bool` | [original_top_level](#var-original-top-level) | `false` |
| `VFXSelection` | [source_selection](#var-source-selection) |  |
| `Callable` | [pool_return_callback](#var-pool-return-callback) |  |
| `Dictionary` | [attachment_info](#var-attachment-info) | `{}  # Stores entity, remote, rig references` |
| `AnimationPlayer` | [animation_player](#var-animation-player) |  |
| `Node` | [primary_particle_system](#var-primary-particle-system) |  |
| `Timer` | [duration_timer](#var-duration-timer) |  |
| `Timer` | [particle_finish_timer](#var-particle-finish-timer) |  |
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

========== SIGNALS ==========

### vfx_finished() {#signal-vfx-finished}

Emitted when the effect is done.

### vfx_cleanup_requested() {#signal-vfx-cleanup-requested}

Emitted when the effect asks the manager to take it back into the pool.

### remote_cleanup_requested( remote: RemoteTransform3D ) {#signal-remote-cleanup-requested}

Emitted when the effect gives back the remote transform it used.

## Constants

- `Array[String]` **START_ANIMATION_NAMES** = `["start", "Start", "Init", "init", "BEGIN", "Begin"]` - Animation name variations (constants) - shared across all VFX types
- `Array[String]` **LOOP_ANIMATION_NAMES** = `["loop", "Loop", "Idle", "idle", "Idle_Loop", "idle_loop", "LOOP"]` - The animation names that count as the loop part of an effect.
- `Array[String]` **END_ANIMATION_NAMES** = `["end", "End", "Finish", "finish", "Stop", "stop", "EXIT", "Exit"]` - The animation names that count as the end part of an effect.

## Property descriptions

*VFX Settings*

### String vfx_type = ""  # The VFX type identifier (from database) {#prop-vfx-type}

The name of the effect in the database.

### bool auto_cleanup = true {#prop-auto-cleanup}

Automatically return to pool when finished

### bool on_top_level = false {#prop-on-top-level}

Set top_level = true when activated (for world-space positioning)

## Variable descriptions

### bool is_pooled = false  # Is this instance from a pool? {#var-is-pooled}

========== RUNTIME STATE ==========

### bool is_active = false {#var-is-active}

Is the VFX currently playing?

### bool is_finished = false {#var-is-finished}

Has the VFX completed?

### bool original_top_level = false {#var-original-top-level}

Store original top_level state for restoration

### VFXSelection source_selection {#var-source-selection}

Selection that spawned this VFX (for reference)

### Callable pool_return_callback {#var-pool-return-callback}

Pool management

### Dictionary attachment_info =   # Stores entity, remote, rig references {#var-attachment-info}

Entity attachment management

### AnimationPlayer animation_player {#var-animation-player}

VFX component references (discovered at runtime)

### Node primary_particle_system {#var-primary-particle-system}

The particle system we're listening to for completion

### Timer duration_timer {#var-duration-timer}

Duration override management

### Timer particle_finish_timer {#var-particle-finish-timer}

Timer for particle lifetime tracking

### Label3D debug_label {#var-debug-label}

Debug visualization

### MeshInstance3D debug_sphere {#var-debug-sphere}

A sphere that shows where the effect is (debug).

### ChronoManager chrono_manager {#var-chrono-manager}

SystemRefs

## Method descriptions

### void set_systems_refs( system_hub: GameHost.SystemHub ) {#method-set-systems-refs}

Gives the effect the managers it needs.

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

