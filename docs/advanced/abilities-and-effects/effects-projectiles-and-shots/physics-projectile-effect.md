<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# PhysicsProjectileEffect

**Inherits:** [BaseProjectileEffect](/advanced/abilities-and-effects/effects-base/base-projectile-effect) < [CompositeEffect](/advanced/abilities-and-effects/effects-composite/composite-effect) < [Effect](/advanced/abilities-and-effects/effects-base/effect) < [DatabaseResource](/advanced/data-and-database/database-classes/database-resource) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Physics projectile effect - ballistic movement with selectable trigger

## Properties

| | | |
|---|---|---|
| `TriggerType` | [trigger_type](#prop-trigger-type) | `TriggerType.COLLISION` |
| `bool` | [use_high_arc](#prop-use-high-arc) | `false` |
| `float` | [launch_angle_override](#prop-launch-angle-override) | `0.0` |
| `float` | [gravity_scale](#prop-gravity-scale) | `1.0` |
| `bool` | [use_gravity](#prop-use-gravity) | `true` |
| `float` | [projectile_mass](#prop-projectile-mass) | `1.0` |
| `float` | [linear_damping](#prop-linear-damping) | `0.0` |
| `CollisionLayerUtility.HitMode` | [hit_mode](#prop-hit-mode) | `CollisionLayerUtility.HitMode.TARGET_ONLY` |
| `int` | [pierce_count](#prop-pierce-count) | `0` |
| `bool` | [stop_on_world_hit](#prop-stop-on-world-hit) | `true` |
| `bool` | [stop_on_target_hit](#prop-stop-on-target-hit) | `true` |
| `float` | [arrival_threshold](#prop-arrival-threshold) | `2.0` |
| `bool` | [track_moving_targets](#prop-track-moving-targets) | `true` |
| `bool` | [also_trigger_on_collision](#prop-also-trigger-on-collision) | `false` |
| `float` | [detonation_timer](#prop-detonation-timer) | `4.0` |
| `bool` | [trigger_on_expire](#prop-trigger-on-expire) | `true` |
| `bool` | [trigger_on_cancelled](#prop-trigger-on-cancelled) | `false` |
| `bool` | [also_trigger_on_collision_timer](#prop-also-trigger-on-collision-timer) | `true` |

## Methods

| | |
|---|---|
| `String` | [get_effect_description](#method-get-effect-description)() |
| `String` | [get_editor_description](#method-get-editor-description)() |

## Property descriptions

*Trigger Settings*

### TriggerType trigger_type = TriggerType.COLLISION {#prop-trigger-type}

*No description yet.*

*Physics Settings*

### bool use_high_arc = false {#prop-use-high-arc}

Use high arc vs low arc trajectory

### float launch_angle_override = 0.0 {#prop-launch-angle-override}

Override angle in degrees (0 = auto)

### float gravity_scale = 1.0 {#prop-gravity-scale}

Gravity multiplier

### bool use_gravity = true {#prop-use-gravity}

Enable/disable gravity

### float projectile_mass = 1.0 {#prop-projectile-mass}

Mass for physics calculations

### float linear_damping = 0.0 {#prop-linear-damping}

Air resistance

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

### float arrival_threshold = 2.0 {#prop-arrival-threshold}

Distance to consider destination reached

### bool track_moving_targets = true {#prop-track-moving-targets}

Update destination for moving Entity targets

### bool also_trigger_on_collision = false {#prop-also-trigger-on-collision}

Also trigger on collision while moving to destination

*Timer Settings*

### float detonation_timer = 4.0 {#prop-detonation-timer}

Time before trigger activates

### bool trigger_on_expire = true {#prop-trigger-on-expire}

Trigger when timer expires

### bool trigger_on_cancelled = false {#prop-trigger-on-cancelled}

Manual detonation when effect cancelled

### bool also_trigger_on_collision_timer = true {#prop-also-trigger-on-collision-timer}

Also trigger on collision for timer

## Method descriptions

### String get_effect_description() {#method-get-effect-description}

Get effect description for tooltips

### String get_editor_description() {#method-get-editor-description}

*Overrides this function of [BaseProjectileEffect](/advanced/abilities-and-effects/effects-base/base-projectile-effect).*

