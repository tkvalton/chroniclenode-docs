<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ApplicationTracker

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

Tracks applications of a status effect for diminishing returns

## Variables

| | | |
|---|---|---|
| `int` | [status_effect_id](#var-status-effect-id) |  |
| `int` | [application_count](#var-application-count) | `0` |
| `float` | [last_application_time](#var-last-application-time) | `0.0` |
| `ChronoManager` | [chrono_manager](#var-chrono-manager) |  |
| `Timer` | [reset_timer](#var-reset-timer) |  |

## Methods

| | |
|---|---|
| `int` | [add_application](#method-add-application)( `reset_time: float` ) |
| `void` | [reset_applications](#method-reset-applications)() |
| `float` | [get_time_since_last_application](#method-get-time-since-last-application)() |
| `float` | [get_reset_time_remaining](#method-get-reset-time-remaining)() |
| `bool` | [has_reset_timer](#method-has-reset-timer)() |
| `String` | [get_display_string](#method-get-display-string)() |
| `Dictionary` | [get_state_info](#method-get-state-info)() |
| `Dictionary` | [to_save_data](#method-to-save-data)() |
| `void` | [from_save_data](#method-from-save-data)( `data: Dictionary, reset_time: float = 0.0` ) |
| `void` | [cleanup](#method-cleanup)() |

## Signals

### applications_reset( tracker: ApplicationTracker ) {#signal-applications-reset}

### application_added( tracker: ApplicationTracker, new_count: int ) {#signal-application-added}

## Variable descriptions

### int status_effect_id {#var-status-effect-id}

*No description yet.*

### int application_count = 0 {#var-application-count}

*No description yet.*

### float last_application_time = 0.0 {#var-last-application-time}

*No description yet.*

### ChronoManager chrono_manager {#var-chrono-manager}

*No description yet.*

### Timer reset_timer {#var-reset-timer}

*No description yet.*

## Method descriptions

### int add_application( reset_time: float ) {#method-add-application}

Counts one more application and restarts the reset timer (`reset_time` seconds; 0 = no reset). Returns the new count

### void reset_applications() {#method-reset-applications}

Sets the count back to 0 and emits `applications_reset`

### float get_time_since_last_application() {#method-get-time-since-last-application}

Seconds since the last application

### float get_reset_time_remaining() {#method-get-reset-time-remaining}

Seconds until the count resets (0 when no timer runs)

### bool has_reset_timer() {#method-has-reset-timer}

Is the reset timer running?

### String get_display_string() {#method-get-display-string}

A line for debugging: the id, the count and the time until the reset

### Dictionary get_state_info() {#method-get-state-info}

A dictionary with the id, count, times and whether the reset timer runs, for debugging

### Dictionary to_save_data() {#method-to-save-data}

The id, the count, the time of the last application and the time the reset timer has left

### void from_save_data( data: Dictionary, reset_time: float = 0.0 ) {#method-from-save-data}

Restores the values of `to_save_data` and restarts the reset timer with the time that was left

### void cleanup() {#method-cleanup}

Stops and returns the reset timer

