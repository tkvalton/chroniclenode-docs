<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# CurvedHomingMovement

**Inherits:** [HomingMovement](/advanced/abilities-and-effects/effects-projectiles-and-shots/homing-movement) < [ProjectileMovement](/advanced/abilities-and-effects/effects-projectiles-and-shots/projectile-movement) < [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

Homing movement with curve patterns and rotation control Adds oscillation, spiraling, or wave patterns while still tracking target

## Variables

| | | |
|---|---|---|
| `HomingCurveType` | [curve_type](#var-curve-type) | `HomingCurveType.STRAIGHT` |
| `float` | [curve_strength](#var-curve-strength) | `0.3` |
| `float` | [oscillation_frequency](#var-oscillation-frequency) | `2.0` |
| `float` | [oscillation_amplitude](#var-oscillation-amplitude) | `1.0` |
| `float` | [curve_time](#var-curve-time) | `0.0` |
| `CurveRotationMode` | [curve_rotation_mode](#var-curve-rotation-mode) | `CurveRotationMode.UP` |
| `float` | [fixed_curve_rotation](#var-fixed-curve-rotation) | `0.0` |
| `float` | [random_rotation_range](#var-random-rotation-range) | `90.0` |
| `float` | [curve_rotation](#var-curve-rotation) | `0.0` |
| `bool` | [use_left_curve](#var-use-left-curve) | `false` |

## Methods

| | |
|---|---|
| `void` | [set_curve_type](#method-set-curve-type)( `type: int` ) |
| `void` | [set_curve_strength](#method-set-curve-strength)( `strength: float` ) |
| `void` | [set_oscillation_parameters](#method-set-oscillation-parameters)( `frequency: float, amplitude: float` ) |
| `void` | [set_curve_rotation_mode](#method-set-curve-rotation-mode)( `mode: CurveRotationMode` ) |
| `void` | [set_fixed_curve_rotation](#method-set-fixed-curve-rotation)( `rotation_degrees: float` ) |
| `void` | [set_random_rotation_range](#method-set-random-rotation-range)( `range_degrees: float` ) |
| `bool` | [wants_to_continue](#method-wants-to-continue)() |
| `void` | [cleanup](#method-cleanup)() |

## Enumerations

### enum HomingCurveType {#enum-homingcurvetype}

The options of homing curve type: straight, oscillating, spiral, sine wave, drunken.

- **STRAIGHT** = `0`
- **OSCILLATING** = `1`
- **SPIRAL** = `2`
- **SINE_WAVE** = `3`

### enum CurveRotationMode {#enum-curverotationmode}

The options of curve rotation mode: fixed, left, right, up, down, alternating, random full, random range.

- **FIXED** = `0`
- **LEFT** = `1`
- **RIGHT** = `2`
- **UP** = `3`
- **DOWN** = `4`
- **ALTERNATING** = `5`
- **RANDOM_FULL** = `6`

## Variable descriptions

### HomingCurveType curve_type = HomingCurveType.STRAIGHT {#var-curve-type}

The shape of the curve added to the homing.

### float curve_strength = 0.3 {#var-curve-strength}

How much curve affects movement (0.0 to 1.0)

### float oscillation_frequency = 2.0 {#var-oscillation-frequency}

Oscillation speed

### float oscillation_amplitude = 1.0 {#var-oscillation-amplitude}

Oscillation strength

### float curve_time = 0.0 {#var-curve-time}

Time tracker for curve calculations

### CurveRotationMode curve_rotation_mode = CurveRotationMode.UP {#var-curve-rotation-mode}

How the curve is rotated for each projectile.

### float fixed_curve_rotation = 0.0 {#var-fixed-curve-rotation}

Degrees from UP

### float random_rotation_range = 90.0 {#var-random-rotation-range}

Degrees of random variation

### float curve_rotation = 0.0 {#var-curve-rotation}

Calculated rotation in radians

### bool use_left_curve = false {#var-use-left-curve}

Set externally for alternating mode

## Method descriptions

### void set_curve_type( type: int ) {#method-set-curve-type}

Set curve type

### void set_curve_strength( strength: float ) {#method-set-curve-strength}

Set curve strength (how much curve affects movement)

### void set_oscillation_parameters( frequency: float, amplitude: float ) {#method-set-oscillation-parameters}

Set oscillation parameters

### void set_curve_rotation_mode( mode: CurveRotationMode ) {#method-set-curve-rotation-mode}

Set curve rotation mode

### void set_fixed_curve_rotation( rotation_degrees: float ) {#method-set-fixed-curve-rotation}

Set fixed curve rotation (in degrees)

### void set_random_rotation_range( range_degrees: float ) {#method-set-random-rotation-range}

Set random rotation range (in degrees)

### bool wants_to_continue() {#method-wants-to-continue}

Curved homing movement doesn't need to continue after triggers

### void cleanup() {#method-cleanup}

Resets the curve.

