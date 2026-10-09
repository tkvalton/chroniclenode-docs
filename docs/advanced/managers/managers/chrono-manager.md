<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ChronoManager

**Inherits:** [Node](https://docs.godotengine.org/en/stable/classes/class_node.html)

Centralized timer pool and game time management system. Provides reusable timers and tracks in-game time with configurable day/night cycles.

## Description

TIMER POOL SYSTEM: Pre-allocates a pool of Timer nodes that can be requested, used, and returned. Eliminates runtime instantiation costs and prevents timer node proliferation.

- get_timer(name, duration, one_shot) - Request timer from pool
- return_timer(timer) - Return timer to pool when done
- Automatic signal disconnection on return
- Pool size warning when running low

GAME TIME SYSTEM: Tracks in-game time with day/night cycles, configurable speed, and time events.

- 24-hour cycle (0.0 to 24.0 hours)
- Configurable day length (real seconds = game 24hrs)
- Time multiplier for acceleration/slow-motion
- Signals for minute/hour changes
- Respects pause state from SystemHub

INITIALIZATION: Call initialize(system_hub) to connect pause state signals. This allows ChronoManager to automatically stop time progression when game is paused.

USAGE: Timers: Get from pool, use, return when done (or let callback return automatically) Time: apply_time_config() to set day length and starting time Events: Connect to game_minute_passed / game_hour_passed signals

PAUSE HANDLING: Listens to SystemHub.paused_changed signal to pause/resume time automatically. No need to manually pause - SystemHub coordinates all pause states.

## Variables

| | | |
|---|---|---|
| `TimeConfig` | [current_time_config](#var-current-time-config) |  |
| `float` | [game_time](#var-game-time) | `8.0` |
| `float` | [total_game_hours](#var-total-game-hours) | `8.0` |
| `float` | [day_length](#var-day-length) | `10800.0` |
| `float` | [time_multiplier](#var-time-multiplier) | `1.0` |
| `String` | [time_display](#var-time-display) | `"12:00"` |
| `float` | [time_since_last_update](#var-time-since-last-update) | `0.0` |
| `int` | [previous_minute](#var-previous-minute) | `-1` |
| `int` | [previous_hour](#var-previous-hour) | `-1` |
| `bool` | [is_paused](#var-is-paused) | `false` |
| `GameHost.SystemHub` | [system_hub](#var-system-hub) | `null` |
| `Array[Timer]` | [available_timers](#var-available-timers) | `[]` |

## Methods

| | |
|---|---|
| `void` | [initialize](#method-initialize)( `hub: GameHost.SystemHub` ) |
| `void` | [update_time_display](#method-update-time-display)() |
| `void` | [check_time_events](#method-check-time-events)() |
| `void` | [set_time_from_string](#method-set-time-from-string)( `time_string: String` ) |
| `void` | [set_time](#method-set-time)( `hours: int, minutes: int` ) |
| `void` | [advance_time](#method-advance-time)( `hours: int, minutes: int` ) |
| `void` | [initialize_timer_pool](#method-initialize-timer-pool)() |
| `Timer` | [get_timer](#method-get-timer)( `timer_name: String = "NoNameDefined", timer_duration: float = 0.5, timer_one_shot: bool = true` ) |
| `void` | [return_timer](#method-return-timer)( `timer: Timer` ) |
| `int` | [get_available_timer_count](#method-get-available-timer-count)() |
| `int` | [get_total_timer_count](#method-get-total-timer-count)() |
| `void` | [apply_time_config](#method-apply-time-config)( `config: TimeConfig, reset_clock: bool = true` ) |
| `Dictionary` | [to_save_data](#method-to-save-data)() |
| `void` | [from_save_data](#method-from-save-data)( `save_data: Dictionary` ) |
| `void` | [register_pool_for_ticking](#method-register-pool-for-ticking)( `pool: PoolInstance` ) |
| `void` | [unregister_pool_from_ticking](#method-unregister-pool-from-ticking)( `pool: PoolInstance` ) |
| `int` | [get_ticking_pool_count](#method-get-ticking-pool-count)() |

## Signals

### game_time_updated( game_time: float ) {#signal-game-time-updated}

Time related signals

### game_minute_passed( game_time: float, time_display: String, minute: int ) {#signal-game-minute-passed}

### game_hour_passed( game_time: float, time_display: String, hour: int ) {#signal-game-hour-passed}

### timer_pool_low( available_count: int ) {#signal-timer-pool-low}

Signal emitted when the timer pool is running low (less than 10% available)

## Constants

- `int` **TIMER_POOL_SIZE** = `300` - ========== TIMER POOL SETTINGS ========== Number of timers to pre-allocate in the pool
- `int` **TIMER_POOL_GROWTH** = `100` - Timers added when the pool runs out
- `float` **POOL_TICK_INTERVAL** = `0.1` - ========== SHARED POOL TICK ========== Pools that regenerate, decay or lose overfill are ticked from here (one tick for all of them) instead of owning a timer each

## Variable descriptions

### TimeConfig current_time_config {#var-current-time-config}

========== TIME MANAGEMENT ==========

### float game_time = 8.0 {#var-game-time}

Current game time (hours since game start)

### float total_game_hours = 8.0 {#var-total-game-hours}

Game hours since the start of the game: it never wraps (game_time is the hour of the day), so anything that waits N hours uses this one (saved)

### float day_length = 10800.0 {#var-day-length}

3 hours real time = 24 hours game time

### float time_multiplier = 1.0 {#var-time-multiplier}

Time multiplier (1.0 = normal, 2.0 = twice as fast)

### String time_display = "12:00" {#var-time-display}

Formatted time string

### float time_since_last_update = 0.0 {#var-time-since-last-update}

Track time since last update

### int previous_minute = -1 {#var-previous-minute}

Track previous time values to detect changes

### int previous_hour = -1 {#var-previous-hour}

*No description yet.*

### bool is_paused = false {#var-is-paused}

========== PAUSE STATE ==========

### GameHost.SystemHub system_hub = null {#var-system-hub}

*No description yet.*

### Array[Timer] available_timers = [] {#var-available-timers}

========== TIMER POOL STORAGE ========== Array of available timers

## Method descriptions

### void initialize( hub: GameHost.SystemHub ) {#method-initialize}

Initialize with system_hub to listen for pause state changes

### void update_time_display() {#method-update-time-display}

*No description yet.*

### void check_time_events() {#method-check-time-events}

*No description yet.*

### void set_time_from_string( time_string: String ) {#method-set-time-from-string}

*No description yet.*

### void set_time( hours: int, minutes: int ) {#method-set-time}

*No description yet.*

### void advance_time( hours: int, minutes: int ) {#method-advance-time}

*No description yet.*

### void initialize_timer_pool() {#method-initialize-timer-pool}

*No description yet.*

### Timer get_timer( timer_name: String = "NoNameDefined", timer_duration: float = 0.5, timer_one_shot: bool = true ) {#method-get-timer}

Returns a timer from the pool or null if none are available

### void return_timer( timer: Timer ) {#method-return-timer}

Return a timer back to the pool

### int get_available_timer_count() {#method-get-available-timer-count}

Get the number of available timers in the pool

### int get_total_timer_count() {#method-get-total-timer-count}

Get total number of timers in the pool

### void apply_time_config( config: TimeConfig, reset_clock: bool = true ) {#method-apply-time-config}

Apply a TimeConfig to control time flow `reset_clock` true (the start of a game): the clock of the day and the running clock both start at the config's starting time. False (a world was loaded): the running clock is never set back (timed worlds and cooldowns count on it); only when the config is a different one (a dream, a frozen dungeon) does the time of day go to its starting time, forwards, the same way set_time does

### Dictionary to_save_data() {#method-to-save-data}

Save time state

### void from_save_data( save_data: Dictionary ) {#method-from-save-data}

Load time state

### void register_pool_for_ticking( pool: PoolInstance ) {#method-register-pool-for-ticking}

*No description yet.*

### void unregister_pool_from_ticking( pool: PoolInstance ) {#method-unregister-pool-from-ticking}

*No description yet.*

### int get_ticking_pool_count() {#method-get-ticking-pool-count}

How many pools are on the shared tick right now

