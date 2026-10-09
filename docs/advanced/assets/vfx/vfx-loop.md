<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# VFXLoop

**Inherits:** [VFX](/advanced/assets/vfx/vfx) < [Node3D](https://docs.godotengine.org/en/stable/classes/class_node3d.html)

**Inherited by:** [VFXWeather](/advanced/assets/vfx/vfx-weather)

Loop VFX - Continuous effects like auras, channeling, persistent buffs/debuffs Supports start/loop/end animation sequence Now supports duration override with graceful stop sequence

## Variables

| | | |
|---|---|---|
| `LoopState` | [loop_state](#var-loop-state) | `LoopState.STARTING` |
| `bool` | [manually_stopped](#var-manually-stopped) | `false` |
| `bool` | [has_start_animation](#var-has-start-animation) | `false` |
| `bool` | [has_loop_animation](#var-has-loop-animation) | `false` |
| `bool` | [has_end_animation](#var-has-end-animation) | `false` |

## Methods

| | |
|---|---|
| `void` | [activate_vfx](#method-activate-vfx)( `selection: VFXSelection = null` ) |
| `void` | [stop_loop_vfx](#method-stop-loop-vfx)() |
| `void` | [attach_to_entity](#method-attach-to-entity)( `entity: Variant, location: VFXSelection.VfxLocation, offset: Vector3 = Vector3.ZERO` ) |
| `void` | [deactivate_vfx](#method-deactivate-vfx)() |
| `void` | [spawn_at_position](#method-spawn-at-position)( `pos: Vector3, new_rotation: Vector3 = Vector3.ZERO` ) |
| `void` | [spawn_attached_to_entity](#method-spawn-attached-to-entity)( `entity: Entity, location: VFXSelection.VfxLocation, offset: Vector3 = Vector3.ZERO` ) |
| `bool` | [is_fading](#method-is-fading)() |
| `bool` | [is_looping](#method-is-looping)() |
| `bool` | [is_ending](#method-is-ending)() |
| `void` | [force_stop](#method-force-stop)() |
| `void` | [restart_loop](#method-restart-loop)() |
| `bool` | [has_duration_override](#method-has-duration-override)() |

## Enumerations

### enum LoopState {#enum-loopstate}

- **STARTING** = `0`
- **LOOPING** = `1`
- **ENDING** = `2`
- **FINISHED** = `3`

## Variable descriptions

### LoopState loop_state = LoopState.STARTING {#var-loop-state}

*No description yet.*

### bool manually_stopped = false {#var-manually-stopped}

*No description yet.*

### bool has_start_animation = false {#var-has-start-animation}

*No description yet.*

### bool has_loop_animation = false {#var-has-loop-animation}

*No description yet.*

### bool has_end_animation = false {#var-has-end-animation}

*No description yet.*

## Method descriptions

### void activate_vfx( selection: VFXSelection = null ) {#method-activate-vfx}

Loop VFX should NOT auto-cleanup by default (manual control)

### void stop_loop_vfx() {#method-stop-loop-vfx}

Manually stop the loop VFX (triggers end sequence)

### void attach_to_entity( entity: Variant, location: VFXSelection.VfxLocation, offset: Vector3 = Vector3.ZERO ) {#method-attach-to-entity}

Attach VFX to an entity using RemoteTransform *(from [VFX](/advanced/assets/vfx/vfx))*

### void deactivate_vfx() {#method-deactivate-vfx}

Deactivate VFX and prepare for pool return *(from [VFX](/advanced/assets/vfx/vfx))*

### void spawn_at_position( pos: Vector3, new_rotation: Vector3 = Vector3.ZERO ) {#method-spawn-at-position}

*No description yet.*

### void spawn_attached_to_entity( entity: Entity, location: VFXSelection.VfxLocation, offset: Vector3 = Vector3.ZERO ) {#method-spawn-attached-to-entity}

*No description yet.*

### bool is_fading() {#method-is-fading}

*No description yet.*

### bool is_looping() {#method-is-looping}

*No description yet.*

### bool is_ending() {#method-is-ending}

*No description yet.*

### void force_stop() {#method-force-stop}

*No description yet.*

### void restart_loop() {#method-restart-loop}

*No description yet.*

### bool has_duration_override() {#method-has-duration-override}

*No description yet.*

