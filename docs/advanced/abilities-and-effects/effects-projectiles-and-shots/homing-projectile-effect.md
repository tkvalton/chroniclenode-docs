<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# HomingProjectileEffect

**Inherits:** [BaseProjectileEffect](/advanced/abilities-and-effects/effects-base/base-projectile-effect) < [CompositeEffect](/advanced/abilities-and-effects/effects-composite/composite-effect) < [Effect](/advanced/abilities-and-effects/effects-base/effect) < [DatabaseResource](/advanced/data-and-database/database-classes/database-resource) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Homing projectile effect - tracks target with optional curve patterns Uses steering behaviors to home in on moving or stationary targets

## Properties

| | | |
|---|---|---|
| `TriggerType` | [trigger_type](#prop-trigger-type) | `TriggerType.COLLISION` |
| `float` | [homing_strength](#prop-homing-strength) | `0.8` |
| `float` | [max_turn_rate_degrees](#prop-max-turn-rate-degrees) | `180.0` |
| `bool` | [use_smooth_steering](#prop-use-smooth-steering) | `true` |
| `float` | [max_speed](#prop-max-speed) | `30.0` |
| `float` | [arrival_threshold](#prop-arrival-threshold) | `1.5` |
| `bool` | [use_curved_homing](#prop-use-curved-homing) | `false` |
| `CurveType` | [curve_type](#prop-curve-type) | `0` |
| `float` | [curve_strength](#prop-curve-strength) | `0.3` |
| `float` | [oscillation_frequency](#prop-oscillation-frequency) | `2.0` |
| `float` | [oscillation_amplitude](#prop-oscillation-amplitude) | `1.0` |
| `CurvedHomingMovement.CurveRotationMode` | [curve_rotation_mode](#prop-curve-rotation-mode) | `CurvedHomingMovement.CurveRotationMode.RANDOM_RANGE` |
| `float` | [fixed_curve_rotation](#prop-fixed-curve-rotation) | `0.0` |
| `float` | [random_rotation_range](#prop-random-rotation-range) | `90.0` |
| `CollisionLayerUtility.HitMode` | [hit_mode](#prop-hit-mode) | `CollisionLayerUtility.HitMode.TARGET_ONLY` |
| `int` | [pierce_count](#prop-pierce-count) | `0` |
| `bool` | [stop_on_world_hit](#prop-stop-on-world-hit) | `true` |
| `bool` | [stop_on_target_hit](#prop-stop-on-target-hit) | `true` |
| `float` | [detonation_timer](#prop-detonation-timer) | `3.0` |
| `bool` | [trigger_on_expire](#prop-trigger-on-expire) | `true` |
| `bool` | [trigger_on_cancelled](#prop-trigger-on-cancelled) | `false` |
| `bool` | [also_trigger_on_collision_timer](#prop-also-trigger-on-collision-timer) | `false` |

## Methods

| | |
|---|---|
| `String` | [get_effect_description](#method-get-effect-description)() |
| `String` | [get_editor_description](#method-get-editor-description)() |

## Enumerations

### enum CurveType {#enum-curvetype}

- **STRAIGHT** = `0`
- **OSCILLATING** = `1`
- **SPIRAL** = `2`
- **SINE_WAVE** = `3`
- **DRUNKE** = `4`

## Property descriptions

*Trigger Settings*

### TriggerType trigger_type = TriggerType.COLLISION {#prop-trigger-type}

*No description yet.*

*Homing Settings*

### float homing_strength = 0.8 {#prop-homing-strength}

*No description yet.*

### float max_turn_rate_degrees = 180.0 {#prop-max-turn-rate-degrees}

*No description yet.*

### bool use_smooth_steering = true {#prop-use-smooth-steering}

*No description yet.*

### float max_speed = 30.0 {#prop-max-speed}

*No description yet.*

### float arrival_threshold = 1.5 {#prop-arrival-threshold}

*No description yet.*

*Curve Settings*

### bool use_curved_homing = false {#prop-use-curved-homing}

Enable curved patterns while homing

### CurveType curve_type = 0 {#prop-curve-type}

Type of curve pattern

### float curve_strength = 0.3 {#prop-curve-strength}

How much curve affects movement (0.0 to 1.0)

### float oscillation_frequency = 2.0 {#prop-oscillation-frequency}

Oscillation speed for patterns

### float oscillation_amplitude = 1.0 {#prop-oscillation-amplitude}

Oscillation strength for patterns

*Curve Rotation*

### CurvedHomingMovement.CurveRotationMode curve_rotation_mode = CurvedHomingMovement.CurveRotationMode.RANDOM_RANGE {#prop-curve-rotation-mode}

*No description yet.*

### float fixed_curve_rotation = 0.0 {#prop-fixed-curve-rotation}

Degrees from default UP position

### float random_rotation_range = 90.0 {#prop-random-rotation-range}

Degrees of random variation from default

*Collision Settings*

### CollisionLayerUtility.HitMode hit_mode = CollisionLayerUtility.HitMode.TARGET_ONLY {#prop-hit-mode}

*No description yet.*

### int pierce_count = 0 {#prop-pierce-count}

0 = stop on first, -1 = infinite, &gt;0 = pierce X targets

### bool stop_on_world_hit = true {#prop-stop-on-world-hit}

*No description yet.*

### bool stop_on_target_hit = true {#prop-stop-on-target-hit}

*No description yet.*

*Timer Settings*

### float detonation_timer = 3.0 {#prop-detonation-timer}

Time before trigger activates

### bool trigger_on_expire = true {#prop-trigger-on-expire}

Trigger when timer expires

### bool trigger_on_cancelled = false {#prop-trigger-on-cancelled}

Manual detonation when effect cancelled

### bool also_trigger_on_collision_timer = false {#prop-also-trigger-on-collision-timer}

Also trigger on collision for timer

## Method descriptions

### String get_effect_description() {#method-get-effect-description}

Get effect description for tooltips

### String get_editor_description() {#method-get-editor-description}

*Overrides this function of [BaseProjectileEffect](/advanced/abilities-and-effects/effects-base/base-projectile-effect).*

