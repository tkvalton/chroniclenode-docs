<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# PhysicsProjectileEffect

**Inherits:** [BaseProjectileEffect](/advanced/abilities-and-effects/effects-base/base-projectile-effect) < [CompositeEffect](/advanced/abilities-and-effects/effects-composite/composite-effect) < [Effect](/advanced/abilities-and-effects/effects-base/effect) < `DatabaseResource` < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Physics projectile effect - ballistic movement with selectable trigger

## Properties

| | | |
|---|---|---|
| `TriggerType` | [trigger_type](#prop-trigger-type) | `TriggerType.COLLISION` |
| `bool` | [use_high_arc](#prop-use-high-arc) | `false ## Use high arc vs low arc trajectory` |
| `float` | [launch_angle_override](#prop-launch-angle-override) | `0.0 ## Override angle in degrees (0 = auto)` |
| `float` | [gravity_scale](#prop-gravity-scale) | `1.0 ## Gravity multiplier` |
| `bool` | [use_gravity](#prop-use-gravity) | `true ## Enable/disable gravity` |
| `float` | [projectile_mass](#prop-projectile-mass) | `1.0 ## Mass for physics calculations` |
| `float` | [linear_damping](#prop-linear-damping) | `0.0 ## Air resistance` |
| `CollisionLayerUtility.HitMode` | [hit_mode](#prop-hit-mode) | `CollisionLayerUtility.HitMode.TARGET_ONLY` |
| `int` | [pierce_count](#prop-pierce-count) | `0 ## 0 = stop on first, -1 = infinite, >0 = pierce X targets` |
| `bool` | [stop_on_world_hit](#prop-stop-on-world-hit) | `true` |
| `bool` | [stop_on_target_hit](#prop-stop-on-target-hit) | `true` |
| `float` | [arrival_threshold](#prop-arrival-threshold) | `2.0 ## Distance to consider destination reached` |
| `bool` | [track_moving_targets](#prop-track-moving-targets) | `true ## Update destination for moving Entity targets` |
| `bool` | [also_trigger_on_collision](#prop-also-trigger-on-collision) | `false ## Also trigger on collision while moving to destin...` |
| `float` | [detonation_timer](#prop-detonation-timer) | `4.0 ## Time before trigger activates` |
| `bool` | [trigger_on_expire](#prop-trigger-on-expire) | `true ## Trigger when timer expires` |
| `bool` | [trigger_on_cancelled](#prop-trigger-on-cancelled) | `false ## Manual detonation when effect cancelled` |
| `bool` | [also_trigger_on_collision_timer](#prop-also-trigger-on-collision-timer) | `true ## Also trigger on collision for timer` |

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

### bool use_high_arc = false ## Use high arc vs low arc trajectory {#prop-use-high-arc}

*No description yet.*

### float launch_angle_override = 0.0 ## Override angle in degrees (0 = auto) {#prop-launch-angle-override}

*No description yet.*

### float gravity_scale = 1.0 ## Gravity multiplier {#prop-gravity-scale}

*No description yet.*

### bool use_gravity = true ## Enable/disable gravity {#prop-use-gravity}

*No description yet.*

### float projectile_mass = 1.0 ## Mass for physics calculations {#prop-projectile-mass}

*No description yet.*

### float linear_damping = 0.0 ## Air resistance {#prop-linear-damping}

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

### float arrival_threshold = 2.0 ## Distance to consider destination reached {#prop-arrival-threshold}

*No description yet.*

### bool track_moving_targets = true ## Update destination for moving Entity targets {#prop-track-moving-targets}

*No description yet.*

### bool also_trigger_on_collision = false ## Also trigger on collision while moving to destinati {#prop-also-trigger-on-collision}

*No description yet.*

*Timer Settings*

### float detonation_timer = 4.0 ## Time before trigger activates {#prop-detonation-timer}

*No description yet.*

### bool trigger_on_expire = true ## Trigger when timer expires {#prop-trigger-on-expire}

*No description yet.*

### bool trigger_on_cancelled = false ## Manual detonation when effect cancelled {#prop-trigger-on-cancelled}

*No description yet.*

### bool also_trigger_on_collision_timer = true ## Also trigger on collision for timer {#prop-also-trigger-on-collision-timer}

*No description yet.*

## Method descriptions

### String get_effect_description() {#method-get-effect-description}

Get effect description for tooltips

### String get_editor_description() {#method-get-editor-description}

*No description yet.*

