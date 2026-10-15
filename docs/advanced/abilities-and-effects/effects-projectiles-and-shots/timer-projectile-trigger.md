<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# TimerProjectileTrigger

**Inherits:** [ProjectileTrigger](/advanced/abilities-and-effects/effects-projectiles-and-shots/projectile-trigger) < [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

Timer-based trigger strategy - updated for InteractableObject support Used for delayed explosions, time bombs, etc.

## Variables

| | | |
|---|---|---|
| `float` | [trigger_delay](#var-trigger-delay) | `3.0` |
| `bool` | [trigger_on_expire](#var-trigger-on-expire) | `true` |
| `bool` | [also_trigger_on_collision](#var-also-trigger-on-collision) | `false` |
| `bool` | [trigger_on_cancelled](#var-trigger-on-cancelled) | `false` |
| `Timer` | [countdown_timer](#var-countdown-timer) |  |
| `bool` | [timer_finished](#var-timer-finished) | `false` |
| `CollisionLayerUtility.HitMode` | [hit_mode](#var-hit-mode) | `CollisionLayerUtility.HitMode.ALL_ENTITIES` |
| `int` | [pierce_count](#var-pierce-count) | `0` |
| `bool` | [stop_on_world_hit](#var-stop-on-world-hit) | `true` |
| `bool` | [stop_on_target_hit](#var-stop-on-target-hit) | `true` |
| `Array[Variant]` | [collision_targets_hit](#var-collision-targets-hit) | `[]` |

## Methods

| | |
|---|---|
| `bool` | [should_trigger_on_timer](#method-should-trigger-on-timer)() |
| `void` | [on_effect_cancelled](#method-on-effect-cancelled)() |
| `void` | [reset_timer](#method-reset-timer)() |
| `float` | [get_remaining_time](#method-get-remaining-time)() |
| `float` | [get_elapsed_time](#method-get-elapsed-time)() |
| `bool` | [is_timer_running](#method-is-timer-running)() |
| `void` | [set_trigger_delay](#method-set-trigger-delay)( `delay: float` ) |
| `void` | [set_trigger_on_expire](#method-set-trigger-on-expire)( `trigger: bool` ) |
| `void` | [set_also_trigger_on_collision](#method-set-also-trigger-on-collision)( `trigger: bool` ) |
| `void` | [set_trigger_on_cancelled](#method-set-trigger-on-cancelled)( `trigger: bool` ) |
| `void` | [configure_collision_settings](#method-configure-collision-settings)( `new_hit_mode: CollisionLayerUtility.HitMode, new_pierce_count: int = 0, new_stop_on_world: bool = true, new_stop_on_target: bool = true` ) |
| `void` | [cleanup](#method-cleanup)() |

## Variable descriptions

### float trigger_delay = 3.0 {#var-trigger-delay}

Time delay before trigger activates

### bool trigger_on_expire = true {#var-trigger-on-expire}

Whether to trigger on timer expiry

### bool also_trigger_on_collision = false {#var-also-trigger-on-collision}

Whether to also trigger on collision (combined behavior)

### bool trigger_on_cancelled = false {#var-trigger-on-cancelled}

Whether to trigger when effect is cancelled (manual detonation)

### Timer countdown_timer {#var-countdown-timer}

Timer for countdown

### bool timer_finished = false {#var-timer-finished}

Whether timer has finished

### CollisionLayerUtility.HitMode hit_mode = CollisionLayerUtility.HitMode.ALL_ENTITIES {#var-hit-mode}

Hit mode for collision detection (when combined behavior enabled)

### int pierce_count = 0 {#var-pierce-count}

Pierce count for collision (when combined behavior enabled)

### bool stop_on_world_hit = true {#var-stop-on-world-hit}

Whether to stop on world hit (when combined behavior enabled)

### bool stop_on_target_hit = true {#var-stop-on-target-hit}

Whether to stop on target hit (when combined behavior enabled)

### Array[Variant] collision_targets_hit = [] {#var-collision-targets-hit}

Targets hit by collision (when combined behavior enabled)

## Method descriptions

### bool should_trigger_on_timer() {#method-should-trigger-on-timer}

Check if timer has expired

### void on_effect_cancelled() {#method-on-effect-cancelled}

Called when effect is cancelled (for manual detonation)

### void reset_timer() {#method-reset-timer}

Reset the timer

### float get_remaining_time() {#method-get-remaining-time}

Get remaining time on timer

### float get_elapsed_time() {#method-get-elapsed-time}

Get elapsed time

### bool is_timer_running() {#method-is-timer-running}

Check if timer is running

### void set_trigger_delay( delay: float ) {#method-set-trigger-delay}

Set trigger delay

### void set_trigger_on_expire( trigger: bool ) {#method-set-trigger-on-expire}

Set whether to trigger on timer expiry

### void set_also_trigger_on_collision( trigger: bool ) {#method-set-also-trigger-on-collision}

Set whether to also trigger on collision

### void set_trigger_on_cancelled( trigger: bool ) {#method-set-trigger-on-cancelled}

Set whether to trigger on effect cancellation (manual detonation)

### void configure_collision_settings( new_hit_mode: CollisionLayerUtility.HitMode, new_pierce_count: int = 0, new_stop_on_world: bool = true, new_stop_on_target: bool = true ) {#method-configure-collision-settings}

Configure collision settings (for combined behavior)

### void cleanup() {#method-cleanup}

Override cleanup to handle timer

