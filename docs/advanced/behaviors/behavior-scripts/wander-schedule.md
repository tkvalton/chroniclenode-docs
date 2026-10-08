<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# WanderSchedule

**Inherits:** [OrderedSchedule](/advanced/behaviors/behavior-scripts/ordered-schedule) < [TaskSchedule](/advanced/behaviors/behavior-scripts/task-schedule) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

WanderSchedule is a pre-configured OrderedSchedule with a single WanderTask. Uses clean signal-based communication for zero-configuration wandering behavior. Perfect for background characters that just need to move around naturally.

## Properties

| | | |
|---|---|---|
| `float` | [wander_radius](#prop-wander-radius) | `5.0: set = _set_wander_radius` |
| `bool` | [use_walk_speed](#prop-use-walk-speed) | `true: set = _set_use_walk_speed` |
| `float` | [min_idle_time](#prop-min-idle-time) | `3.0: set = _set_min_idle_time` |
| `float` | [max_idle_time](#prop-max-idle-time) | `8.0: set = _set_max_idle_time` |

## Methods

| | |
|---|---|
| `void` | [setup_schedule](#method-setup-schedule)( `system_hub: GameHost.SystemHub, entity_ref: Entity` ) |
| `WanderTask` | [get_wander_task](#method-get-wander-task)() |
| `void` | [set_wander_center](#method-set-wander-center)( `new_center: Vector3` ) |
| `Vector3` | [get_wander_center](#method-get-wander-center)() |
| `bool` | [is_within_wander_bounds](#method-is-within-wander-bounds)() |
| `void` | [return_to_wander_center](#method-return-to-wander-center)() |
| `void` | [update_wander_settings](#method-update-wander-settings)( `radius: float, walk_speed: bool, min_idle: float, max_idle: float` ) |
| `void` | [pause_wandering](#method-pause-wandering)() |
| `void` | [resume_wandering](#method-resume-wandering)() |
| `void` | [set_temporary_wander_area](#method-set-temporary-wander-area)( `center: Vector3, radius: float, duration: float` ) |
| `bool` | [is_wandering](#method-is-wandering)() |
| `Dictionary` | [get_wander_stats](#method-get-wander-stats)() |
| `String` | [get_debug_status](#method-get-debug-status)() |
| `Array[String]` | [validate_wander_settings](#method-validate-wander-settings)() |

## Signals

### wander_settings_updated( radius: float, walk_speed: bool ) {#signal-wander-settings-updated}

Emitted when wander settings are updated

### wander_center_changed( old_center: Vector3, new_center: Vector3 ) {#signal-wander-center-changed}

Emitted when wander center is changed

### wandered_out_of_bounds( entity_position: Vector3, wander_center: Vector3 ) {#signal-wandered-out-of-bounds}

Emitted when entity moves outside wander bounds

## Property descriptions

*Wander Settings*

### float wander_radius = 5.0: set = _set_wander_radius {#prop-wander-radius}

Radius around spawn point to wander within

### bool use_walk_speed = true: set = _set_use_walk_speed {#prop-use-walk-speed}

Whether to use walking speed instead of running

### float min_idle_time = 3.0: set = _set_min_idle_time {#prop-min-idle-time}

Minimum time to wait at each location

### float max_idle_time = 8.0: set = _set_max_idle_time {#prop-max-idle-time}

Maximum time to wait at each location

## Method descriptions

### void setup_schedule( system_hub: GameHost.SystemHub, entity_ref: Entity ) {#method-setup-schedule}

Setup the schedule with entity reference

### WanderTask get_wander_task() {#method-get-wander-task}

Get the wander task (convenience method)

### void set_wander_center( new_center: Vector3 ) {#method-set-wander-center}

Update wander center dynamically

### Vector3 get_wander_center() {#method-get-wander-center}

Get current wander center

### bool is_within_wander_bounds() {#method-is-within-wander-bounds}

Check if entity is within wander bounds

### void return_to_wander_center() {#method-return-to-wander-center}

Force entity back to wander center

### void update_wander_settings( radius: float, walk_speed: bool, min_idle: float, max_idle: float ) {#method-update-wander-settings}

Update all wander settings at once

### void pause_wandering() {#method-pause-wandering}

Pause wandering at current location

### void resume_wandering() {#method-resume-wandering}

Resume wandering from current location

### void set_temporary_wander_area( center: Vector3, radius: float, duration: float ) {#method-set-temporary-wander-area}

Set a temporary wander override (returns to original after duration)

### bool is_wandering() {#method-is-wandering}

Check if currently wandering

### Dictionary get_wander_stats() {#method-get-wander-stats}

Get wander statistics

### String get_debug_status() {#method-get-debug-status}

Get debug status string

### Array[String] validate_wander_settings() {#method-validate-wander-settings}

Validate wander settings

