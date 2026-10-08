<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# IdleTask

**Inherits:** [BehaviorTask](/advanced/behaviors/tasks/behavior-task) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Modern IdleTask focused purely on positioning and waiting behavior. MovementStateManager automatically handles all movement and idle animations. This task simply ensures the entity is in the right location and orientation.

## Description

FIXES APPLIED:

- Removed async/await movement calls
- Fixed navigation signal timing (setup BEFORE movement)
- Eliminated duplicate state tracking (single source of truth)
- Centralized signal management with automatic cleanup
- Unique timer naming to prevent conflicts
- Removed timer-based player detection (will use Area3D in EntityStateComponent)

## Properties

| | | |
|---|---|---|
| `Vector3` | [idle_location](#prop-idle-location) | `Vector3.ZERO` |
| `bool` | [move_to_location](#prop-move-to-location) | `true` |
| `float` | [position_threshold](#prop-position-threshold) | `0.5` |
| `Vector3` | [face_direction](#prop-face-direction) | `Vector3.ZERO` |
| `bool` | [use_default_face_direction](#prop-use-default-face-direction) | `true` |
| `float` | [face_delay](#prop-face-delay) | `1.0` |
| `bool` | [look_at_players](#prop-look-at-players) | `false` |
| `float` | [look_at_player_chance](#prop-look-at-player-chance) | `0.3` |

## Variables

| | | |
|---|---|---|
| `bool` | [face_direction_initiated](#var-face-direction-initiated) | `false` |
| `bool` | [facing_complete](#var-facing-complete) | `false` |
| `Timer` | [face_delay_timer](#var-face-delay-timer) | `null` |

## Methods

| | |
|---|---|
| `void` | [execute_task_start](#method-execute-task-start)() |
| `void` | [execute_task_complete](#method-execute-task-complete)() |
| `void` | [execute_task_interrupt](#method-execute-task-interrupt)() |
| `void` | [execute_task_fail](#method-execute-task-fail)() |
| `void` | [on_player_nearby](#method-on-player-nearby)( `player: Player` ) |
| `void` | [on_player_left](#method-on-player-left)( `player: Player` ) |
| `void` | [handle_path_failure](#method-handle-path-failure)() |
| `void` | [cleanup_timers](#method-cleanup-timers)() |

## Property descriptions

*Location*

### Vector3 idle_location = Vector3.ZERO {#prop-idle-location}

Location where the entity should idle (Vector3.ZERO = current position)

### bool move_to_location = true {#prop-move-to-location}

Whether to move to the idle location if not already there

### float position_threshold = 0.5 {#prop-position-threshold}

Position threshold for considering position reached

*Facing*

### Vector3 face_direction = Vector3.ZERO {#prop-face-direction}

Direction to face while idle (Vector3.ZERO = no specific direction)

### bool use_default_face_direction = true {#prop-use-default-face-direction}

Whether to use entity's default face direction if none specified

### float face_delay = 1.0 {#prop-face-delay}

Time to wait after reaching position before starting to face direction

*Behavior*

### bool look_at_players = false {#prop-look-at-players}

Whether to look at nearby players occasionally (uses Area3D detection in EntityStateComponent)

### float look_at_player_chance = 0.3 {#prop-look-at-player-chance}

Chance to look at player when they're nearby (0.0-1.0)

## Variable descriptions

### bool face_direction_initiated = false {#var-face-direction-initiated}

Whether we've started the face direction process

### bool facing_complete = false {#var-facing-complete}

Whether we're currently facing the target direction

### Timer face_delay_timer = null {#var-face-delay-timer}

Timer for face delay

## Method descriptions

### void execute_task_start() {#method-execute-task-start}

Override this in subclasses to implement specific task behavior *(from [BehaviorTask](/advanced/behaviors/tasks/behavior-task))*

### void execute_task_complete() {#method-execute-task-complete}

Override this in subclasses for task completion logic *(from [BehaviorTask](/advanced/behaviors/tasks/behavior-task))*

### void execute_task_interrupt() {#method-execute-task-interrupt}

Override this in subclasses for task interruption logic *(from [BehaviorTask](/advanced/behaviors/tasks/behavior-task))*

### void execute_task_fail() {#method-execute-task-fail}

Override this in subclasses for task failure logic *(from [BehaviorTask](/advanced/behaviors/tasks/behavior-task))*

### void on_player_nearby( player: Player ) {#method-on-player-nearby}

Called by EntityStateComponent when player enters detection area

### void on_player_left( player: Player ) {#method-on-player-left}

Called by EntityStateComponent when player leaves detection area

### void handle_path_failure() {#method-handle-path-failure}

Handle path failure with recovery strategies *(from [BehaviorTask](/advanced/behaviors/tasks/behavior-task))*

### void cleanup_timers() {#method-cleanup-timers}

Clean up all timers and resources *(from [BehaviorTask](/advanced/behaviors/tasks/behavior-task))*

