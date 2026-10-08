<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# AreaRandomizeTargetEffect

**Inherits:** [MinimumApplicationAreaEffect](/advanced/abilities-and-effects/effects-area/minimum-application-area-effect) < [AreaEffect](/advanced/abilities-and-effects/effects-area/area-effect) < [CollisionEffect](/advanced/abilities-and-effects/effects-base/collision-effect) < [CompositeEffect](/advanced/abilities-and-effects/effects-composite/composite-effect) < [Effect](/advanced/abilities-and-effects/effects-base/effect) < [DatabaseResource](/advanced/data-and-database/database-classes/database-resource) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

AreaRandomizeTargetEffect with pure raycast collision detection Supports entity targeting, position targeting, and temporal distribution

## Properties

| | | |
|---|---|---|
| `int` | [maximum_targets](#prop-maximum-targets) | `1` |
| `bool` | [allow_duplicate_targets](#prop-allow-duplicate-targets) | `false` |
| `bool` | [ignore_original_target](#prop-ignore-original-target) | `false` |
| `TargetType` | [target_type](#prop-target-type) | `TargetType.ENTITIES` |
| `bool` | [select_targets_over_time](#prop-select-targets-over-time) | `false` |
| `DistributionMode` | [distribution_mode](#prop-distribution-mode) | `DistributionMode.EQUALLY_SPACED` |
| `float` | [minimum_interval](#prop-minimum-interval) | `0.5` |
| `float` | [position_spread_radius](#prop-position-spread-radius) | `1.0` |
| `bool` | [avoid_obstacles](#prop-avoid-obstacles) | `true` |
| `int` | [max_position_attempts](#prop-max-position-attempts) | `10` |
| `bool` | [follow_terrain](#prop-follow-terrain) | `true` |
| `float` | [terrain_offset](#prop-terrain-offset) | `0.1` |
| `float` | [max_slope_angle](#prop-max-slope-angle) | `45.0` |
| `float` | [raycast_height](#prop-raycast-height) | `100.0` |

## Methods

| | |
|---|---|
| `void` | [process_before_start](#method-process-before-start)( `effect_instance: EffectInstance` ) |
| `void` | [specific_effect_logic](#method-specific-effect-logic)( `effect_instance: EffectInstance` ) |
| `void` | [on_apply_finished](#method-on-apply-finished)( `effect_instance: EffectInstance` ) |
| `String` | [get_effect_description](#method-get-effect-description)() |
| `String` | [get_editor_description](#method-get-editor-description)() |

## Enumerations

### enum TargetType {#enum-targettype}

- **ENTITIES** = `0`
- **POSITIONS** = `1`
- **ENTITY_POSITIONS** = `2`

### enum DistributionMode {#enum-distributionmode}

- **EQUALLY_SPACED** = `0`
- **RANDOM_INTERVALS** = `1`

## Property descriptions

*Target Selection*

### int maximum_targets = 1 {#prop-maximum-targets}

Maximum number of targets to select

### bool allow_duplicate_targets = false {#prop-allow-duplicate-targets}

Allow same target multiple times

### bool ignore_original_target = false {#prop-ignore-original-target}

Exclude the original effect target

### TargetType target_type = TargetType.ENTITIES {#prop-target-type}

What to target

*Temporal Distribution*

### bool select_targets_over_time = false {#prop-select-targets-over-time}

Spread target selection over effect duration

### DistributionMode distribution_mode = DistributionMode.EQUALLY_SPACED {#prop-distribution-mode}

How to distribute over time

### float minimum_interval = 0.5 {#prop-minimum-interval}

Minimum time between selections (for random mode)

*Position Settings*

### float position_spread_radius = 1.0 {#prop-position-spread-radius}

Random spread around selected positions

### bool avoid_obstacles = true {#prop-avoid-obstacles}

Try to avoid obstacle positions

### int max_position_attempts = 10 {#prop-max-position-attempts}

Max attempts to find valid position

*Terrain Following*

### bool follow_terrain = true {#prop-follow-terrain}

Adjust Y position to ground level

### float terrain_offset = 0.1 {#prop-terrain-offset}

Height offset above terrain

### float max_slope_angle = 45.0 {#prop-max-slope-angle}

Skip surfaces steeper than this (degrees)

### float raycast_height = 100.0 {#prop-raycast-height}

How high above to start raycasting

## Method descriptions

### void process_before_start( effect_instance: EffectInstance ) {#method-process-before-start}

Override to calculate required duration before EffectInstance creates timers

### void specific_effect_logic( effect_instance: EffectInstance ) {#method-specific-effect-logic}

*Overrides this function of [CollisionEffect](/advanced/abilities-and-effects/effects-base/collision-effect).*

### void on_apply_finished( effect_instance: EffectInstance ) {#method-on-apply-finished}

*Overrides this function of [CollisionEffect](/advanced/abilities-and-effects/effects-base/collision-effect).*

### String get_effect_description() {#method-get-effect-description}

*Overrides this function of [MinimumApplicationAreaEffect](/advanced/abilities-and-effects/effects-area/minimum-application-area-effect).*

### String get_editor_description() {#method-get-editor-description}

*Overrides this function of [MinimumApplicationAreaEffect](/advanced/abilities-and-effects/effects-area/minimum-application-area-effect).*

