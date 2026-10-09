<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# VFXPointToPointBeam

**Inherits:** [VFX](/advanced/assets/vfx/vfx) < [Node3D](https://docs.godotengine.org/en/stable/classes/class_node3d.html)

Point-to-Point Beam VFX - Direct beam/chain effects between targets Handles beams, lightning chains, tethers, laser effects, etc. Supports both Node3D (trackable) and Vector3 (static) targets Features start/loop/end animation sequence support

## Properties

| | | |
|---|---|---|
| `float` | [beam_width](#prop-beam-width) | `1.0` |
| `int` | [beam_segments](#prop-beam-segments) | `10` |
| `float` | [curve_intensity](#prop-curve-intensity) | `0.0` |
| `bool` | [follow_target_movement](#prop-follow-target-movement) | `true` |
| `bool` | [update_continuously](#prop-update-continuously) | `true` |

## Variables

| | | |
|---|---|---|
| `Variant  # Node3D or Vector3` | [start_target](#var-start-target) |  |
| `Variant    # Node3D or Vector3` | [end_target](#var-end-target) |  |
| `Array[Variant]` | [chain_targets](#var-chain-targets) | `[]  # For multi-target chains` |
| `MeshInstance3D` | [beam_mesh](#var-beam-mesh) |  |
| `Node3D` | [beam_rotation](#var-beam-rotation) |  |
| `Material` | [beam_material](#var-beam-material) |  |
| `Array[VFXPointToPointBeam]` | [chain_beams](#var-chain-beams) | `[]` |
| `bool` | [supports_chaining](#var-supports-chaining) | `false` |
| `int` | [max_chain_targets](#var-max-chain-targets) | `3` |
| `float` | [chain_range](#var-chain-range) | `5.0` |
| `Vector3` | [last_start_pos](#var-last-start-pos) |  |
| `Vector3` | [last_end_pos](#var-last-end-pos) |  |
| `BeamState` | [beam_state](#var-beam-state) | `BeamState.STARTING` |
| `bool` | [manually_stopped](#var-manually-stopped) | `false` |
| `bool` | [has_start_animation](#var-has-start-animation) | `false` |
| `bool` | [has_loop_animation](#var-has-loop-animation) | `false` |
| `bool` | [has_end_animation](#var-has-end-animation) | `false` |

## Methods

| | |
|---|---|
| `void` | [stop_beam](#method-stop-beam)() |
| `void` | [set_beam_targets_with_attachments](#method-set-beam-targets-with-attachments)( `start: Variant, end: Variant, start_attachment: VFXSelection.VfxLocation = VFXSelection.VfxLocation.BASE, end_attachment: VFXSelection.VfxLocation = VFXSelection.VfxLocation.BASE, start_offset: Vector3 = Vector3.ZERO, end_offset: Vector3 = Vector3.ZERO` ) |
| `void` | [set_beam_targets](#method-set-beam-targets)( `start: Variant, end: Variant` ) |
| `void` | [set_chain_targets](#method-set-chain-targets)( `targets: Array[Variant]` ) |
| `void` | [update_beam](#method-update-beam)() |
| `bool` | [are_targets_valid](#method-are-targets-valid)() |
| `void` | [activate_vfx](#method-activate-vfx)( `selection: VFXSelection = null` ) |
| `void` | [deactivate_vfx](#method-deactivate-vfx)() |
| `bool` | [is_beam_looping](#method-is-beam-looping)() |
| `bool` | [is_beam_ending](#method-is-beam-ending)() |
| `void` | [force_stop_beam](#method-force-stop-beam)() |
| `void` | [stop_continuous_updates](#method-stop-continuous-updates)() |
| `void` | [resume_continuous_updates](#method-resume-continuous-updates)() |
| `bool` | [has_duration_override](#method-has-duration-override)() |

## Enumerations

### enum BeamState {#enum-beamstate}

- **STARTING** = `0`
- **LOOPING** = `1`
- **ENDING** = `2`
- **FINISHED** = `3`

## Property descriptions

*Point-to-Point Settings*

### float beam_width = 1.0 {#prop-beam-width}

*No description yet.*

### int beam_segments = 10 {#prop-beam-segments}

*No description yet.*

### float curve_intensity = 0.0 {#prop-curve-intensity}

*No description yet.*

### bool follow_target_movement = true {#prop-follow-target-movement}

*No description yet.*

### bool update_continuously = true {#prop-update-continuously}

*No description yet.*

## Variable descriptions

### Variant  # Node3D or Vector3 start_target {#var-start-target}

*No description yet.*

### Variant    # Node3D or Vector3 end_target {#var-end-target}

*No description yet.*

### Array[Variant] chain_targets = []  # For multi-target chains {#var-chain-targets}

*No description yet.*

### MeshInstance3D beam_mesh {#var-beam-mesh}

*No description yet.*

### Node3D beam_rotation {#var-beam-rotation}

*No description yet.*

### Material beam_material {#var-beam-material}

*No description yet.*

### Array[VFXPointToPointBeam] chain_beams = [] {#var-chain-beams}

*No description yet.*

### bool supports_chaining = false {#var-supports-chaining}

*No description yet.*

### int max_chain_targets = 3 {#var-max-chain-targets}

*No description yet.*

### float chain_range = 5.0 {#var-chain-range}

*No description yet.*

### Vector3 last_start_pos {#var-last-start-pos}

*No description yet.*

### Vector3 last_end_pos {#var-last-end-pos}

*No description yet.*

### BeamState beam_state = BeamState.STARTING {#var-beam-state}

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

### void stop_beam() {#method-stop-beam}

Stop beam gracefully (triggers end sequence if available)

### void set_beam_targets_with_attachments( start: Variant, end: Variant, start_attachment: VFXSelection.VfxLocation = VFXSelection.VfxLocation.BASE, end_attachment: VFXSelection.VfxLocation = VFXSelection.VfxLocation.BASE, start_offset: Vector3 = Vector3.ZERO, end_offset: Vector3 = Vector3.ZERO ) {#method-set-beam-targets-with-attachments}

Set beam targets with attachment point support (called by VFXManager)

### void set_beam_targets( start: Variant, end: Variant ) {#method-set-beam-targets}

Set the start and end targets for the beam - supports Node3D and Vector3

### void set_chain_targets( targets: Array[Variant] ) {#method-set-chain-targets}

Set multiple targets for chain effects - supports mixed types

### void update_beam() {#method-update-beam}

Update beam geometry (enhanced for animation integration)

### bool are_targets_valid() {#method-are-targets-valid}

Check if targets are still valid

### void activate_vfx( selection: VFXSelection = null ) {#method-activate-vfx}

Override activate_vfx to ensure visibility

### void deactivate_vfx() {#method-deactivate-vfx}

Override cleanup to handle animation state and variant targets

### bool is_beam_looping() {#method-is-beam-looping}

Check if beam is in looping phase

### bool is_beam_ending() {#method-is-beam-ending}

Check if beam is ending

### void force_stop_beam() {#method-force-stop-beam}

Force stop without end animation (immediate cleanup)

### void stop_continuous_updates() {#method-stop-continuous-updates}

Stop updating beam (useful for performance when beam is static)

### void resume_continuous_updates() {#method-resume-continuous-updates}

Resume updating beam

### bool has_duration_override() {#method-has-duration-override}

Check if duration override is active

