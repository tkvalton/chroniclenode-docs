<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ChainProjectileEffect

**Inherits:** [BaseProjectileEffect](/advanced/abilities-and-effects/effects-base/base-projectile-effect) < [CompositeEffect](/advanced/abilities-and-effects/effects-composite/composite-effect) < [Effect](/advanced/abilities-and-effects/effects-base/effect) < `DatabaseResource` < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Chain projectile effect - bounces between multiple targets with selectable trigger

## Properties

| | | |
|---|---|---|
| `TriggerType` | [trigger_type](#prop-trigger-type) | `TriggerType.DESTINATION ## Default to destination for cha...` |
| `int` | [max_chains](#prop-max-chains) | `3 ## Maximum number of chain bounces` |
| `float` | [chain_range](#prop-chain-range) | `5.0 ## Range to find next chain target` |
| `ChainEffect.ChainTargetType` | [chain_target_filter](#prop-chain-target-filter) | `ChainEffect.ChainTargetType.ENAMY` |
| `bool` | [allow_repeat_targets](#prop-allow-repeat-targets) | `false ## Allow hitting same target multiple times` |
| `float` | [arrival_threshold](#prop-arrival-threshold) | `1.0 ## Distance to consider target reached` |
| `CollisionLayerUtility.HitMode` | [hit_mode](#prop-hit-mode) | `CollisionLayerUtility.HitMode.ENEMY_ENTITIES` |
| `int` | [pierce_count](#prop-pierce-count) | `0` |
| `bool` | [stop_on_world_hit](#prop-stop-on-world-hit) | `true` |
| `bool` | [stop_on_target_hit](#prop-stop-on-target-hit) | `false` |
| `float` | [detonation_timer](#prop-detonation-timer) | `3.0` |
| `bool` | [trigger_on_expire](#prop-trigger-on-expire) | `true` |
| `bool` | [trigger_on_cancelled](#prop-trigger-on-cancelled) | `false` |
| `bool` | [also_trigger_on_collision_timer](#prop-also-trigger-on-collision-timer) | `false` |

## Methods

| | |
|---|---|
| `String` | [get_effect_description](#method-get-effect-description)() |
| `String` | [get_editor_description](#method-get-editor-description)() |

## Property descriptions

*Trigger Settings*

### TriggerType trigger_type = TriggerType.DESTINATION ## Default to destination for chaini {#prop-trigger-type}

*No description yet.*

*Chain Settings*

### int max_chains = 3 ## Maximum number of chain bounces {#prop-max-chains}

*No description yet.*

### float chain_range = 5.0 ## Range to find next chain target {#prop-chain-range}

*No description yet.*

### ChainEffect.ChainTargetType chain_target_filter = ChainEffect.ChainTargetType.ENAMY {#prop-chain-target-filter}

*No description yet.*

### bool allow_repeat_targets = false ## Allow hitting same target multiple times {#prop-allow-repeat-targets}

*No description yet.*

### float arrival_threshold = 1.0 ## Distance to consider target reached {#prop-arrival-threshold}

*No description yet.*

*Collision Settings*

### CollisionLayerUtility.HitMode hit_mode = CollisionLayerUtility.HitMode.ENEMY_ENTITIES {#prop-hit-mode}

*No description yet.*

### int pierce_count = 0 {#prop-pierce-count}

*No description yet.*

### bool stop_on_world_hit = true {#prop-stop-on-world-hit}

*No description yet.*

### bool stop_on_target_hit = false {#prop-stop-on-target-hit}

*No description yet.*

*Timer Settings*

### float detonation_timer = 3.0 {#prop-detonation-timer}

*No description yet.*

### bool trigger_on_expire = true {#prop-trigger-on-expire}

*No description yet.*

### bool trigger_on_cancelled = false {#prop-trigger-on-cancelled}

*No description yet.*

### bool also_trigger_on_collision_timer = false {#prop-also-trigger-on-collision-timer}

*No description yet.*

## Method descriptions

### String get_effect_description() {#method-get-effect-description}

*No description yet.*

### String get_editor_description() {#method-get-editor-description}

*No description yet.*

