<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ModularBehaviorScript

**Inherits:** [DatabaseResource](/advanced/data-and-database/database-classes/database-resource) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

ModularBehaviorScript coordinates behavior schedules and reactions for entities. Clean signal-based version that doesn't require references to state components. Communicates purely through signals for better decoupling.

## Properties

| | | |
|---|---|---|
| `bool` | [enabled](#prop-enabled) | `true` |
| `Array[TaskSchedule]` | [schedules](#prop-schedules) | `[]` |
| `Array[BehaviorReaction]` | [schedule_reactions](#prop-schedule-reactions) | `[]` |
| `FallbackBehaviorType` | [fallback_behavior](#prop-fallback-behavior) | `FallbackBehaviorType.WANDER` |
| `float` | [wander_radius](#prop-wander-radius) | `5.0` |
| `bool` | [return_to_spawn](#prop-return-to-spawn) | `true` |

## Variables

| | | |
|---|---|---|
| `Entity` | [entity](#var-entity) |  |
| `TaskSchedule` | [current_schedule](#var-current-schedule) | `null` |
| `TaskSchedule` | [fallback_schedule](#var-fallback-schedule) | `null` |
| `TaskSchedule` | [previous_schedule](#var-previous-schedule) | `null` |
| `float` | [last_evaluation_time](#var-last-evaluation-time) | `0.0` |
| `float` | [evaluation_interval](#var-evaluation-interval) | `2.0` |

## Methods

| | |
|---|---|
| `void` | [setup](#method-setup)( `system_hub: GameHost.SystemHub, entity_ref: Entity` ) |
| `bool` | [set_active_schedule](#method-set-active-schedule)( `new_schedule: TaskSchedule` ) |
| `bool` | [set_active_schedule_by_index](#method-set-active-schedule-by-index)( `index: int` ) |
| `bool` | [activate_schedule_by_name](#method-activate-schedule-by-name)( `schedule_name: String` ) |
| `TaskSchedule` | [get_current_schedule](#method-get-current-schedule)() |
| `void` | [reset_current_schedule](#method-reset-current-schedule)() |
| `BehaviorTask` | [get_current_task](#method-get-current-task)() |
| `void` | [pause_behavior](#method-pause-behavior)() |
| `void` | [resume_behavior](#method-resume-behavior)() |
| `bool` | [is_behavior_active](#method-is-behavior-active)() |
| `void` | [process_behavior](#method-process-behavior)( `delta: float` ) |
| `void` | [on_player_detection_changed](#method-on-player-detection-changed)( `player_nearby: bool` ) |
| `void` | [handle_formation_update](#method-handle-formation-update)() |
| `void` | [handle_entity_death](#method-handle-entity-death)() |
| `int` | [get_id](#method-get-id)() |
| `void` | [set_id](#method-set-id)( `new_id: int` ) |
| `Dictionary` | [to_save_data](#method-to-save-data)() |
| `void` | [from_save_data](#method-from-save-data)( `save_data: Dictionary` ) |
| `void` | [cleanup](#method-cleanup)() |

## Signals

### schedule_changed( old_schedule: TaskSchedule, new_schedule: TaskSchedule ) {#signal-schedule-changed}

Emitted when the active schedule changes

### behavior_paused() {#signal-behavior-paused}

Emitted when behavior is paused

### behavior_resumed() {#signal-behavior-resumed}

Emitted when behavior is resumed

### schedule_activation_failed( schedule_name: String, reason: String ) {#signal-schedule-activation-failed}

Emitted when a schedule activation fails

## Enumerations

### enum FallbackBehaviorType {#enum-fallbackbehaviortype}

- **WANDER** = `0` - Auto-create WanderSchedule with specified radius
- **MOVE_TO_SPAWN** = `1` - Single task: move to spawn point then idle
- **IDLE_AT_CURRENT** = `2` - Single task: idle with animations
- **FOLLOW_NEAREST_ALLY** = `3` - For pets without orders

## Property descriptions

*Script Settings*

### bool enabled = true {#prop-enabled}

Whether this script is currently enabled

### Array[TaskSchedule] schedules = [] {#prop-schedules}

Available schedules in priority order (index 0 = highest priority)

### Array[BehaviorReaction] schedule_reactions = [] {#prop-schedule-reactions}

Event-driven reactions that can switch schedules

*Fallback Behavior*

### FallbackBehaviorType fallback_behavior = FallbackBehaviorType.WANDER {#prop-fallback-behavior}

What to do when no schedule is valid or available

### float wander_radius = 5.0 {#prop-wander-radius}

Radius for wander fallback behavior

### bool return_to_spawn = true {#prop-return-to-spawn}

Whether to return to spawn point for fallback

## Variable descriptions

### Entity entity {#var-entity}

Reference to the entity using this script

### TaskSchedule current_schedule = null {#var-current-schedule}

Currently active schedule

### TaskSchedule fallback_schedule = null {#var-fallback-schedule}

Fallback schedule created automatically

### TaskSchedule previous_schedule = null {#var-previous-schedule}

Previous schedule (for reaction returns)

### float last_evaluation_time = 0.0 {#var-last-evaluation-time}

Last time we evaluated schedule conditions

### float evaluation_interval = 2.0 {#var-evaluation-interval}

Evaluation interval to prevent excessive checking

## Method descriptions

### void setup( system_hub: GameHost.SystemHub, entity_ref: Entity ) {#method-setup}

Initialize the behavior script with entity reference only

### bool set_active_schedule( new_schedule: TaskSchedule ) {#method-set-active-schedule}

Set the active schedule with signal emission

### bool set_active_schedule_by_index( index: int ) {#method-set-active-schedule-by-index}

Set active schedule by index

### bool activate_schedule_by_name( schedule_name: String ) {#method-activate-schedule-by-name}

Find and activate schedule by name

### TaskSchedule get_current_schedule() {#method-get-current-schedule}

Get the currently active schedule

### void reset_current_schedule() {#method-reset-current-schedule}

Reset current schedule to beginning

### BehaviorTask get_current_task() {#method-get-current-task}

Get the current task being executed

### void pause_behavior() {#method-pause-behavior}

Pause behavior processing

### void resume_behavior() {#method-resume-behavior}

Resume behavior processing

### bool is_behavior_active() {#method-is-behavior-active}

Check if behavior is currently active

### void process_behavior( delta: float ) {#method-process-behavior}

Called every frame to process behavior logic

### void on_player_detection_changed( player_nearby: bool ) {#method-on-player-detection-changed}

Handle player detection changes (called via signal)

### void handle_formation_update() {#method-handle-formation-update}

Handle formation updates (called via signal)

### void handle_entity_death() {#method-handle-entity-death}

Handle entity death (called via signal)

### int get_id() {#method-get-id}

Get the ID of this behavior script

### void set_id( new_id: int ) {#method-set-id}

Set the ID of this behavior script

### Dictionary to_save_data() {#method-to-save-data}

Save runtime state for persistence

### void from_save_data( save_data: Dictionary ) {#method-from-save-data}

Restore runtime state from saved data

### void cleanup() {#method-cleanup}

Cleanup all resources when script is no longer needed

