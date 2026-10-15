<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# CombatLogManager

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

CombatLogManager now receives comprehensive reports from CombatSystem

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

Emitted when a batch log is ready

### damage_done_details( entity: Entity, amount: int ) {#signal-damage-done-details}

Emits damage done to the details manager

### healing_taken_details( entity: Entity, amount: int ) {#signal-healing-taken-details}

Emits healing taken to the details manager

## Enumerations

### enum LogLevel {#enum-loglevel}

Log levels for controlling verbosity

- **CRITICAL** = `0`
- **NORMAL** = `1`

### enum LogCategory {#enum-logcategory}

Log categories with associated colors

- **DAMAGE** = `0`
- **HEALING** = `1`
- **STATUS** = `2`

## Constants

- `const` **CATEGORY_COLORS** = `{` - Color mapping for log categories
- `const` **MAX_BATCH_SIZE** = `50` - Maximum number of entries in a single batch

## Variable descriptions

### String current_time = "" {#var-current-time}

Current time string in format "HH:MM:SS"

### Array log_batch = [] {#var-log-batch}

Array to store log entries before batching

### Array[Timer] active_timers = [] {#var-active-timers}

========== CHRONO MANAGER INTEGRATION ========== Track active timers so we can return them properly

### Timer batch_timer {#var-batch-timer}

Store timer references for easy access

### Timer time_update_timer {#var-time-update-timer}

The timer that updates the time shown in the log.

### int current_log_level = LogLevel.NORMAL {#var-current-log-level}

Current log level (default to NORMAL)

### bool logging_enabled = true {#var-logging-enabled}

Whether logging is enabled

## Method descriptions

### void set_batch_interval( interval: float ) {#method-set-batch-interval}

Sets how many seconds the log waits to send its lines together.

### void update_time() {#method-update-time}

Updates the clock shown in the log lines.

