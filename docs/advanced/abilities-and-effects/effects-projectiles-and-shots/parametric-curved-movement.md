<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ParametricCurvedMovement

**Inherits:** [DirectMovement](/advanced/abilities-and-effects/effects-projectiles-and-shots/direct-movement) < [ProjectileMovement](/advanced/abilities-and-effects/effects-projectiles-and-shots/projectile-movement) < [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

Parametric curved movement strategy - uses mathematical curves with rotation control Extends DirectMovement but overrides movement logic for curved paths

## Variables

| | | |
|---|---|---|
| `CurveType` | [curve_type](#var-curve-type) | `CurveType.STRAIGHT` |
| `float` | [curve_amplitude](#var-curve-amplitude) | `2.0  # How pronounced the curve is` |
| `float` | [curve_frequency](#var-curve-frequency) | `1.0   # For wave patterns` |
| `float` | [curve_progress](#var-curve-progress) | `0.0    # 0.0 to 1.0 progress along path` |
| `Vector3        # Starting position for curve calculations` | [start_position](#var-start-position) |  |
| `Vector3       # Base direction from start to target` | [curve_direction](#var-curve-direction) |  |
| `float          # Total distance to travel` | [total_distance](#var-total-distance) |  |
| `CurveRotationMode` | [curve_rotation_mode](#var-curve-rotation-mode) | `CurveRotationMode.UP` |
| `float` | [fixed_curve_rotation](#var-fixed-curve-rotation) | `0.0      # Degrees from UP` |
| `float` | [random_rotation_range](#var-random-rotation-range) | `90.0    # Degrees of random variation` |
| `float` | [curve_rotation](#var-curve-rotation) | `0.0            # Calculated rotation in radians` |
| `bool` | [use_left_curve](#var-use-left-curve) | `false           # Set externally for alternating mode` |

## Methods

| | |
|---|---|
| `bool` | [wants_to_continue](#method-wants-to-continue)() |
| `void` | [set_curve_type](#method-set-curve-type)( `type: int` ) |
| `void` | [set_curve_amplitude](#method-set-curve-amplitude)( `amplitude: float` ) |
| `void` | [set_curve_frequency](#method-set-curve-frequency)( `frequency: float` ) |
| `void` | [set_curve_rotation_mode](#method-set-curve-rotation-mode)( `mode: CurveRotationMode` ) |
| `void` | [set_fixed_curve_rotation](#method-set-fixed-curve-rotation)( `rotation_degrees: float` ) |
| `void` | [set_random_rotation_range](#method-set-random-rotation-range)( `range_degrees: float` ) |
| `float` | [get_distance_to_target](#method-get-distance-to-target)() |
| `void` | [cleanup](#method-cleanup)() |

## Enumerations

### enum CurveType {#enum-curvetype}

- **STRAIGHT** = `0`
- **ARC** = `1`
- **SINE_WAVE** = `2`
- **SPIRAL** = `3`

### enum CurveRotationMode {#enum-curverotationmode}

- **FIXED** = `0`
- **LEFT** = `1`
- **RIGHT** = `2`
- **UP** = `3`
- **DOWN** = `4`
- **ALTERNATING** = `5`
- **RANDOM_FULL** = `6`

## Variable descriptions

### CurveType curve_type = CurveType.STRAIGHT {#var-curve-type}

*No description yet.*

### float curve_amplitude = 2.0  # How pronounced the curve is {#var-curve-amplitude}

*No description yet.*

### float curve_frequency = 1.0   # For wave patterns {#var-curve-frequency}

*No description yet.*

### float curve_progress = 0.0    # 0.0 to 1.0 progress along path {#var-curve-progress}

*No description yet.*

### Vector3        # Starting position for curve calculations start_position {#var-start-position}

*No description yet.*

### Vector3       # Base direction from start to target curve_direction {#var-curve-direction}

*No description yet.*

### float          # Total distance to travel total_distance {#var-total-distance}

*No description yet.*

### CurveRotationMode curve_rotation_mode = CurveRotationMode.UP {#var-curve-rotation-mode}

*No description yet.*

### float fixed_curve_rotation = 0.0      # Degrees from UP {#var-fixed-curve-rotation}

*No description yet.*

### float random_rotation_range = 90.0    # Degrees of random variation {#var-random-rotation-range}

*No description yet.*

### float curve_rotation = 0.0            # Calculated rotation in radians {#var-curve-rotation}

*No description yet.*

### bool use_left_curve = false           # Set externally for alternating mode {#var-use-left-curve}

*No description yet.*

## Method descriptions

### bool wants_to_continue() {#method-wants-to-continue}

Parametric curved movement doesn't need to continue after triggers

### void set_curve_type( type: int ) {#method-set-curve-type}

Set curve type

### void set_curve_amplitude( amplitude: float ) {#method-set-curve-amplitude}

Set curve amplitude

### void set_curve_frequency( frequency: float ) {#method-set-curve-frequency}

Set curve frequency (for wave/spiral patterns)

### void set_curve_rotation_mode( mode: CurveRotationMode ) {#method-set-curve-rotation-mode}

Set curve rotation mode

### void set_fixed_curve_rotation( rotation_degrees: float ) {#method-set-fixed-curve-rotation}

Set fixed curve rotation (in degrees)

### void set_random_rotation_range( range_degrees: float ) {#method-set-random-rotation-range}

Set random rotation range (in degrees)

### float get_distance_to_target() {#method-get-distance-to-target}

Override to account for curved path

### void cleanup() {#method-cleanup}

Override cleanup to reset curve state

