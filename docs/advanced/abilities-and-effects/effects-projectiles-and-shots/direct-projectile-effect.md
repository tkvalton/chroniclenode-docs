<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# DirectProjectileEffect

**Inherits:** [BaseProjectileEffect](/advanced/abilities-and-effects/effects-base/base-projectile-effect) < [CompositeEffect](/advanced/abilities-and-effects/effects-composite/composite-effect) < [Effect](/advanced/abilities-and-effects/effects-base/effect) < [DatabaseResource](/advanced/data-and-database/database-classes/database-resource) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Direct projectile effect - straight line movement with selectable trigger Can use collision, destination, or timer triggers for different behaviors

## Properties

| | | |
|---|---|---|
| `TriggerType` | [trigger_type](#prop-trigger-type) | `TriggerType.COLLISION` |
| `float` | [arrival_threshold](#prop-arrival-threshold) | `1.0` |
| `bool` | [use_curved_movement](#prop-use-curved-movement) | `false` |
| `CurveType` | [curve_type](#prop-curve-type) | `CurveType.STRAIGHT` |
| `float` | [curve_amplitude](#prop-curve-amplitude) | `2.0` |
| `float` | [curve_frequency](#prop-curve-frequency) | `1.0` |
| `ParametricCurvedMovement.CurveRotationMode` | [curve_rotation_mode](#prop-curve-rotation-mode) | `ParametricCurvedMovement.CurveRotationMode.RANDOM_RANGE` |
| `float` | [fixed_curve_rotation](#prop-fixed-curve-rotation) | `0.0` |
| `float` | [random_rotation_range](#prop-random-rotation-range) | `90.0` |
| `CollisionLayerUtility.HitMode` | [hit_mode](#prop-hit-mode) | `CollisionLayerUtility.HitMode.TARGET_ONLY` |
| `int` | [pierce_count](#prop-pierce-count) | `0` |
| `bool` | [stop_on_world_hit](#prop-stop-on-world-hit) | `true` |
| `bool` | [stop_on_target_hit](#prop-stop-on-target-hit) | `true` |
| `bool` | [track_moving_targets](#prop-track-moving-targets) | `true` |
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
- **ARC** = `1`
- **SINE_WAVE** = `2`
- **SPIRAL** = `3`
- **BEZIER** = `4`

## Property descriptions

*Trigger Settings*

### TriggerType trigger_type = TriggerType.COLLISION {#prop-trigger-type}

*No description yet.*

*Movement Settings*

### float arrival_threshold = 1.0 {#prop-arrival-threshold}

Distance to consider target reached

*Curve Settings*

### bool use_curved_movement = false {#prop-use-curved-movement}

Enable curved projectile path

### CurveType curve_type = CurveType.STRAIGHT {#prop-curve-type}

Type of curve

### float curve_amplitude = 2.0 {#prop-curve-amplitude}

How pronounced the curve is

### float curve_frequency = 1.0 {#prop-curve-frequency}

For wave patterns (sine/spiral)

*Curve Rotation*

### ParametricCurvedMovement.CurveRotationMode curve_rotation_mode = ParametricCurvedMovement.CurveRotationMode.RANDOM_RANGE {#prop-curve-rotation-mode}

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

*Destination Settings*

### bool track_moving_targets = true {#prop-track-moving-targets}

Update destination for moving Entity targets

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

