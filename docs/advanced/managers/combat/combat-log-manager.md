<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# CombatLogManager

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

## Variables

| | | |
|---|---|---|
| `String` | [current_time](#var-current-time) | `""` |
| `Array` | [log_batch](#var-log-batch) | `[]` |
| `Array[Timer]` | [active_timers](#var-active-timers) | `[]` |
| `Timer` | [batch_timer](#var-batch-timer) |  |
| `Timer` | [time_update_timer](#var-time-update-timer) |  |
| `int` | [current_log_level](#var-current-log-level) | `LogLevel.NORMAL` |
| `bool` | [logging_enabled](#var-logging-enabled) | `true` |

## Methods

| | |
|---|---|
| `void` | [set_batch_interval](#method-set-batch-interval)( `interval: float` ) |
| `void` | [update_time](#method-update-time)() |

## Signals

### batch_log( log_entries: Array ) {#signal-batch-log}

### damage_done_details( entity: Entity, amount: int ) {#signal-damage-done-details}

### healing_taken_details( entity: Entity, amount: int ) {#signal-healing-taken-details}

## Enumerations

### enum LogLevel {#enum-loglevel}

- **CRITICAL** = `0`
- **NORMAL** = `1`

### enum LogCategory {#enum-logcategory}

- **DAMAGE** = `0`
- **HEALING** = `1`
- **STATUS** = `2`

## Constants

- `const` **CATEGORY_COLORS** = `{`
- `const` **MAX_BATCH_SIZE** = `50`

## Variable descriptions

### String current_time = "" {#var-current-time}

*No description yet.*

### Array log_batch = [] {#var-log-batch}

*No description yet.*

### Array[Timer] active_timers = [] {#var-active-timers}

*No description yet.*

### Timer batch_timer {#var-batch-timer}

*No description yet.*

### Timer time_update_timer {#var-time-update-timer}

*No description yet.*

### int current_log_level = LogLevel.NORMAL {#var-current-log-level}

*No description yet.*

### bool logging_enabled = true {#var-logging-enabled}

*No description yet.*

## Method descriptions

### void set_batch_interval( interval: float ) {#method-set-batch-interval}

*No description yet.*

### void update_time() {#method-update-time}

*No description yet.*

