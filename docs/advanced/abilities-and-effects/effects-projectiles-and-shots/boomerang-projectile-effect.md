<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# BoomerangProjectileEffect

**Inherits:** [BaseProjectileEffect](/advanced/abilities-and-effects/effects-base/base-projectile-effect) < [CompositeEffect](/advanced/abilities-and-effects/effects-composite/composite-effect) < [Effect](/advanced/abilities-and-effects/effects-base/effect) < [DatabaseResource](/advanced/data-and-database/database-classes/database-resource) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Boomerang projectile effect - travels to target then returns to caster

## Properties

| | | |
|---|---|---|
| `float` | [return_speed_multiplier](#prop-return-speed-multiplier) | `1.2` |
| `bool` | [track_moving_target](#prop-track-moving-target) | `true` |
| `float` | [target_arrival_threshold](#prop-target-arrival-threshold) | `1.0` |
| `float` | [originator_arrival_threshold](#prop-originator-arrival-threshold) | `0.5` |
| `float` | [curve_intensity](#prop-curve-intensity) | `0.3` |
| `CollisionLayerUtility.HitMode` | [hit_mode](#prop-hit-mode) | `CollisionLayerUtility.HitMode.TARGET_ONLY` |
| `int` | [pierce_count](#prop-pierce-count) | `-1` |
| `bool` | [stop_on_world_hit](#prop-stop-on-world-hit) | `false` |
| `bool` | [stop_on_target_hit](#prop-stop-on-target-hit) | `false` |

## Methods

| | |
|---|---|
| `String` | [get_effect_description](#method-get-effect-description)() |
| `String` | [get_editor_description](#method-get-editor-description)() |

## Property descriptions

*Boomerang Settings*

### float return_speed_multiplier = 1.2 {#prop-return-speed-multiplier}

Speed multiplier on return journey

### bool track_moving_target = true {#prop-track-moving-target}

Track target during outbound phase

### float target_arrival_threshold = 1.0 {#prop-target-arrival-threshold}

Distance to target before returning

### float originator_arrival_threshold = 0.5 {#prop-originator-arrival-threshold}

Distance to originator to complete

*Curve Settings*

### float curve_intensity = 0.3 {#prop-curve-intensity}

Curve intensity (0.0 = straight, 1.0 = pronounced curve)

*Collision Settings*

### CollisionLayerUtility.HitMode hit_mode = CollisionLayerUtility.HitMode.TARGET_ONLY {#prop-hit-mode}

*No description yet.*

### int pierce_count = -1 {#prop-pierce-count}

Default to infinite piercing for boomerangs

### bool stop_on_world_hit = false {#prop-stop-on-world-hit}

Usually want boomerangs to continue

### bool stop_on_target_hit = false {#prop-stop-on-target-hit}

Continue past target to return

## Method descriptions

### String get_effect_description() {#method-get-effect-description}

Override this to provide complete effect description *(from [BaseProjectileEffect](/advanced/abilities-and-effects/effects-base/base-projectile-effect))*

### String get_editor_description() {#method-get-editor-description}

*Overrides this function of [BaseProjectileEffect](/advanced/abilities-and-effects/effects-base/base-projectile-effect).*

