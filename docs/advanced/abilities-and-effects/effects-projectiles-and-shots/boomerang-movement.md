<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# BoomerangMovement

**Inherits:** [ProjectileMovement](/advanced/abilities-and-effects/effects-projectiles-and-shots/projectile-movement) < [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

Boomerang movement strategy - travels to target, then returns to originator Has two phases: outbound and return with optional curve intensity

## Variables

| | | |
|---|---|---|
| `BoomerangPhase` | [current_phase](#var-current-phase) | `BoomerangPhase.OUTBOUND` |
| `Entity` | [originator](#var-originator) |  |
| `Vector3` | [outbound_target_position](#var-outbound-target-position) |  |
| `float` | [target_arrival_threshold](#var-target-arrival-threshold) | `1.0` |
| `float` | [originator_arrival_threshold](#var-originator-arrival-threshold) | `0.5` |
| `bool` | [track_moving_target](#var-track-moving-target) | `true` |
| `float` | [return_speed_multiplier](#var-return-speed-multiplier) | `1.2` |
| `float` | [curve_intensity](#var-curve-intensity) | `0.3` |
| `Vector3` | [curve_bias](#var-curve-bias) | `Vector3.ZERO` |

## Methods

| | |
|---|---|
| `void` | [set_target_arrival_threshold](#method-set-target-arrival-threshold)( `threshold: float` ) |
| `void` | [set_originator_arrival_threshold](#method-set-originator-arrival-threshold)( `threshold: float` ) |
| `void` | [set_track_moving_target](#method-set-track-moving-target)( `enabled: bool` ) |
| `void` | [set_return_speed_multiplier](#method-set-return-speed-multiplier)( `multiplier: float` ) |
| `void` | [set_curve_intensity](#method-set-curve-intensity)( `intensity: float` ) |
| `void` | [set_curve_bias](#method-set-curve-bias)( `bias: Vector3` ) |
| `void` | [force_return_phase](#method-force-return-phase)() |
| `bool` | [wants_to_continue](#method-wants-to-continue)() |
| `BoomerangPhase` | [get_current_phase](#method-get-current-phase)() |
| `bool` | [is_outbound](#method-is-outbound)() |
| `bool` | [is_returning](#method-is-returning)() |
| `float` | [get_distance_to_current_target](#method-get-distance-to-current-target)() |
| `float` | [get_current_effective_speed](#method-get-current-effective-speed)() |
| `bool` | [is_originator_valid](#method-is-originator-valid)() |
| `float` | [get_distance_to_target](#method-get-distance-to-target)() |
| `void` | [cleanup](#method-cleanup)() |

## Enumerations

### enum BoomerangPhase {#enum-boomerangphase}

Current movement phase

- **OUTBOUND** = `0`
- **RETURNING** = `1`
- **FINISHED** = `2`

## Variable descriptions

### BoomerangPhase current_phase = BoomerangPhase.OUTBOUND {#var-current-phase}

Which way the projectile goes now: out or back.

### Entity originator {#var-originator}

Reference to originator for return journey

### Vector3 outbound_target_position {#var-outbound-target-position}

Target position for outbound phase (captured at start)

### float target_arrival_threshold = 1.0 {#var-target-arrival-threshold}

Distance thresholds

### float originator_arrival_threshold = 0.5 {#var-originator-arrival-threshold}

How close to the originator the projectile must be to count as back.

### bool track_moving_target = true {#var-track-moving-target}

Whether to track moving entities during outbound phase

### float return_speed_multiplier = 1.2 {#var-return-speed-multiplier}

Return speed multiplier (can be different from outbound speed)

### float curve_intensity = 0.3 {#var-curve-intensity}

Curve intensity (0.0 = straight, 1.0 = pronounced curve)

### Vector3 curve_bias = Vector3.ZERO {#var-curve-bias}

Curve direction bias for consistent arcing

## Method descriptions

### void set_target_arrival_threshold( threshold: float ) {#method-set-target-arrival-threshold}

Set target arrival threshold

### void set_originator_arrival_threshold( threshold: float ) {#method-set-originator-arrival-threshold}

Set originator arrival threshold

### void set_track_moving_target( enabled: bool ) {#method-set-track-moving-target}

Enable/disable target tracking during outbound phase

### void set_return_speed_multiplier( multiplier: float ) {#method-set-return-speed-multiplier}

Set return speed multiplier

### void set_curve_intensity( intensity: float ) {#method-set-curve-intensity}

Set curve intensity

### void set_curve_bias( bias: Vector3 ) {#method-set-curve-bias}

Set curve bias direction

### void force_return_phase() {#method-force-return-phase}

Force transition to return phase (useful for triggered returns)

### bool wants_to_continue() {#method-wants-to-continue}

Check if boomerang movement wants to continue

### BoomerangPhase get_current_phase() {#method-get-current-phase}

Get current phase

### bool is_outbound() {#method-is-outbound}

Check if in outbound phase

### bool is_returning() {#method-is-returning}

Check if returning

### float get_distance_to_current_target() {#method-get-distance-to-current-target}

Get distance to current target (target during outbound, originator during return)

### float get_current_effective_speed() {#method-get-current-effective-speed}

Get current effective speed

### bool is_originator_valid() {#method-is-originator-valid}

Check if originator is still valid

### float get_distance_to_target() {#method-get-distance-to-target}

Override distance calculation based on current phase

### void cleanup() {#method-cleanup}

Override cleanup to reset phase

