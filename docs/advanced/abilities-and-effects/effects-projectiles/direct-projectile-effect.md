<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# DirectProjectileEffect

**Inherits:** [BaseProjectileEffect](/advanced/abilities-and-effects/effects-base/base-projectile-effect) < [CompositeEffect](/advanced/abilities-and-effects/effects-composite/composite-effect) < [Effect](/advanced/abilities-and-effects/effects-base/effect) < `DatabaseResource` < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Direct projectile effect - straight line movement with selectable trigger

## Properties

| | | |
|---|---|---|
| `TriggerType` | [trigger_type](#prop-trigger-type) | `TriggerType.COLLISION` |
| `float` | [arrival_threshold](#prop-arrival-threshold) | `1.0 ## Distance to consider target reached` |
| `bool` | [use_curved_movement](#prop-use-curved-movement) | `false ## Enable curved projectile path` |
| `CurveType` | [curve_type](#prop-curve-type) | `CurveType.STRAIGHT ## Type of curve` |
| `float` | [curve_amplitude](#prop-curve-amplitude) | `2.0 ## How pronounced the curve is` |
| `float` | [curve_frequency](#prop-curve-frequency) | `1.0 ## For wave patterns (sine/spiral)` |
| `ParametricCurvedMovement.CurveRotationMode` | [curve_rotation_mode](#prop-curve-rotation-mode) | `ParametricCurvedMovement.CurveRotationMode.RANDOM_RANGE` |
| `float` | [fixed_curve_rotation](#prop-fixed-curve-rotation) | `0.0 ## Degrees from default UP position` |
| `float` | [random_rotation_range](#prop-random-rotation-range) | `90.0 ## Degrees of random variation from default` |
| `CollisionLayerUtility.HitMode` | [hit_mode](#prop-hit-mode) | `CollisionLayerUtility.HitMode.TARGET_ONLY` |
| `int` | [pierce_count](#prop-pierce-count) | `0 ## 0 = stop on first, -1 = infinite, >0 = pierce X targets` |
| `bool` | [stop_on_world_hit](#prop-stop-on-world-hit) | `true` |
| `bool` | [stop_on_target_hit](#prop-stop-on-target-hit) | `true` |
| `bool` | [track_moving_targets](#prop-track-moving-targets) | `true ## Update destination for moving Entity targets` |
| `float` | [detonation_timer](#prop-detonation-timer) | `3.0 ## Time before trigger activates` |
| `bool` | [trigger_on_expire](#prop-trigger-on-expire) | `true ## Trigger when timer expires` |
| `bool` | [trigger_on_cancelled](#prop-trigger-on-cancelled) | `false ## Manual detonation when effect cancelled` |
| `bool` | [also_trigger_on_collision_timer](#prop-also-trigger-on-collision-timer) | `false ## Also trigger on collision for timer` |

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

### float arrival_threshold = 1.0 ## Distance to consider target reached {#prop-arrival-threshold}

*No description yet.*

*Curve Settings*

### bool use_curved_movement = false ## Enable curved projectile path {#prop-use-curved-movement}

*No description yet.*

### CurveType curve_type = CurveType.STRAIGHT ## Type of curve {#prop-curve-type}

*No description yet.*

### float curve_amplitude = 2.0 ## How pronounced the curve is {#prop-curve-amplitude}

*No description yet.*

### float curve_frequency = 1.0 ## For wave patterns (sine/spiral) {#prop-curve-frequency}

*No description yet.*

*Curve Rotation*

### ParametricCurvedMovement.CurveRotationMode curve_rotation_mode = ParametricCurvedMovement.CurveRotationMode.RANDOM_RANGE {#prop-curve-rotation-mode}

*No description yet.*

### float fixed_curve_rotation = 0.0 ## Degrees from default UP position {#prop-fixed-curve-rotation}

*No description yet.*

### float random_rotation_range = 90.0 ## Degrees of random variation from default {#prop-random-rotation-range}

*No description yet.*

*Collision Settings*

### CollisionLayerUtility.HitMode hit_mode = CollisionLayerUtility.HitMode.TARGET_ONLY {#prop-hit-mode}

*No description yet.*

### int pierce_count = 0 ## 0 = stop on first, -1 = infinite, &gt;0 = pierce X targets {#prop-pierce-count}

*No description yet.*

### bool stop_on_world_hit = true {#prop-stop-on-world-hit}

*No description yet.*

### bool stop_on_target_hit = true {#prop-stop-on-target-hit}

*No description yet.*

*Destination Settings*

### bool track_moving_targets = true ## Update destination for moving Entity targets {#prop-track-moving-targets}

*No description yet.*

*Timer Settings*

### float detonation_timer = 3.0 ## Time before trigger activates {#prop-detonation-timer}

*No description yet.*

### bool trigger_on_expire = true ## Trigger when timer expires {#prop-trigger-on-expire}

*No description yet.*

### bool trigger_on_cancelled = false ## Manual detonation when effect cancelled {#prop-trigger-on-cancelled}

*No description yet.*

### bool also_trigger_on_collision_timer = false ## Also trigger on collision for timer {#prop-also-trigger-on-collision-timer}

*No description yet.*

## Method descriptions

### String get_effect_description() {#method-get-effect-description}

Get effect description for tooltips

### String get_editor_description() {#method-get-editor-description}

*No description yet.*

