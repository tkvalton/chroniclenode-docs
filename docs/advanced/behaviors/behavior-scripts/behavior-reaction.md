<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# BehaviorReaction

**Inherits:** [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

BehaviorReaction represents an event-driven response that can switch behavior schedules. Uses clean signal-based communication with automatic connection tracking.

## Properties

| | | |
|---|---|---|
| `String` | [reaction_name](#prop-reaction-name) | `"Unnamed Behavior Reaction"` |
| `TriggerEvent` | [trigger_event](#prop-trigger-event) | `TriggerEvent.PLAYER_NEARBY` |
| `Array[EntityCondition]` | [conditions](#prop-conditions) | `[]` |
| `float` | [reaction_cooldown](#prop-reaction-cooldown) | `0.0` |
| `ReactionType` | [reaction_type](#prop-reaction-type) | `ReactionType.SWITCH_SCHEDULE` |
| `int` | [target_schedule_index](#prop-target-schedule-index) | `0` |
| `String` | [target_schedule_name](#prop-target-schedule-name) | `""` |
| `bool` | [return_to_previous](#prop-return-to-previous) | `true` |
| `float` | [return_delay](#prop-return-delay) | `2.0` |
| `int` | [target_hour](#prop-target-hour) | `9` |
| `int` | [target_minute](#prop-target-minute) | `0` |
| `float` | [health_threshold_percent](#prop-health-threshold-percent) | `30.0` |

## Variables

| | | |
|---|---|---|
| `Entity` | [entity](#var-entity) |  |
| `ModularBehaviorScript` | [behavior_script](#var-behavior-script) |  |
| `Timer` | [cooldown_timer](#var-cooldown-timer) |  |
| `TaskSchedule` | [previous_schedule](#var-previous-schedule) | `null` |
| `Timer` | [return_timer](#var-return-timer) | `null` |
| `bool` | [is_active](#var-is-active) | `false` |
| `ChronoManager` | [chrono_manager](#var-chrono-manager) |  |
| `EventManager` | [event_manager](#var-event-manager) |  |

## Methods

| | |
|---|---|
| `void` | [setup](#method-setup)( `system_hub: GameHost.SystemHub, entity_ref: Entity, script: ModularBehaviorScript` ) |
| `bool` | [should_trigger](#method-should-trigger)() |
| `bool` | [try_trigger](#method-try-trigger)() |
| `bool` | [execute_reaction](#method-execute-reaction)() |
| `void` | [return_to_previous_schedule](#method-return-to-previous-schedule)() |
| `void` | [on_player_detection_changed](#method-on-player-detection-changed)( `player_nearby: bool` ) |
| `bool` | [is_on_cooldown](#method-is-on-cooldown)() |
| `float` | [get_cooldown_remaining](#method-get-cooldown-remaining)() |
| `bool` | [force_trigger](#method-force-trigger)() |
| `void` | [cancel_reaction](#method-cancel-reaction)() |
| `void` | [cleanup](#method-cleanup)() |

## Signals

### reaction_triggered( reaction_name: String, trigger_event: TriggerEvent ) {#signal-reaction-triggered}

Emitted when this reaction triggers

### reaction_returned( reaction_name: String ) {#signal-reaction-returned}

Emitted when this reaction returns to previous schedule

### reaction_failed( reaction_name: String, reason: String ) {#signal-reaction-failed}

Emitted when reaction fails to execute

## Enumerations

### enum TriggerEvent {#enum-triggerevent}

Events that can trigger behavior reactions

- **PLAYER_NEARBY** = `0` - When player enters detection radius
- **PLAYER_LEFT** = `1` - When player leaves detection radius
- **TIME_CHANGED** = `2` - When game time reaches specific hour
- **HEALTH_BELOW_PERCENT** = `3` - When entity health drops below threshold
- **EVENT_STARTED** = `4` - When a world event begins
- **EVENT_ENDED** = `5` - When a world event ends
- **QUEST_ACCEPTED** = `6` - When player accepts a quest
- **QUEST_COMPLETED** = `7` - When player completes a quest
- **ITEM_EQUIPPED** = `8` - When entity equips an item
- **ITEM_UNEQUIPPED** = `9` - When entity unequips an item

### enum ReactionType {#enum-reactiontype}

Types of reactions that can be performed

- **SWITCH_SCHEDULE** = `0` - Switch to a different schedule
- **PAUSE_BEHAVIOR** = `1` - Temporarily pause all behavior
- **RESUME_BEHAVIOR** = `2` - Resume paused behavior
- **RESET_SCHEDULE** = `3` - Reset current schedule to beginning
- **TRIGGER_TASK** = `4` - Execute a specific task immediately

## Property descriptions

### String reaction_name = "Unnamed Behavior Reaction" {#prop-reaction-name}

Display name for this reaction (for debugging)

### TriggerEvent trigger_event = TriggerEvent.PLAYER_NEARBY {#prop-trigger-event}

Event that triggers this reaction

### Array[EntityCondition] conditions = [] {#prop-conditions}

Conditions that must be met for reaction to execute (in addition to event trigger)

### float reaction_cooldown = 0.0 {#prop-reaction-cooldown}

Cooldown before this reaction can trigger again (seconds)

*Reaction Behavior*

### ReactionType reaction_type = ReactionType.SWITCH_SCHEDULE {#prop-reaction-type}

Type of reaction this performs

### int target_schedule_index = 0 {#prop-target-schedule-index}

Index of schedule to switch to (for SWITCH_SCHEDULE type)

### String target_schedule_name = "" {#prop-target-schedule-name}

Name of schedule to switch to (alternative to index)

### bool return_to_previous = true {#prop-return-to-previous}

Whether to return to previous schedule after trigger ends

### float return_delay = 2.0 {#prop-return-delay}

Time to wait before returning to previous schedule

*Event Settings*

### int target_hour = 9 {#prop-target-hour}

For TIME_CHANGED: target hour (0-23)

### int target_minute = 0 {#prop-target-minute}

For TIME_CHANGED: target minute (0-59)

### float health_threshold_percent = 30.0 {#prop-health-threshold-percent}

For HEALTH_BELOW_PERCENT: health threshold

## Variable descriptions

### Entity entity {#var-entity}

Reference to the entity

### ModularBehaviorScript behavior_script {#var-behavior-script}

Reference to the modular behavior script

### Timer cooldown_timer {#var-cooldown-timer}

Internal cooldown timer

### TaskSchedule previous_schedule = null {#var-previous-schedule}

Previous schedule before this reaction triggered

### Timer return_timer = null {#var-return-timer}

Timer for returning to previous schedule

### bool is_active = false {#var-is-active}

Whether this reaction is currently active

### ChronoManager chrono_manager {#var-chrono-manager}

SystemRefrences

### EventManager event_manager {#var-event-manager}

*No description yet.*

## Method descriptions

### void setup( system_hub: GameHost.SystemHub, entity_ref: Entity, script: ModularBehaviorScript ) {#method-setup}

Setup the reaction with entity and behavior script references

### bool should_trigger() {#method-should-trigger}

Check if reaction should trigger (called by signal handlers)

### bool try_trigger() {#method-try-trigger}

Execute the reaction if conditions are met

### bool execute_reaction() {#method-execute-reaction}

Execute the specific reaction type

### void return_to_previous_schedule() {#method-return-to-previous-schedule}

Return to previous schedule

### void on_player_detection_changed( player_nearby: bool ) {#method-on-player-detection-changed}

External method for player detection (called by behavior state component)

### bool is_on_cooldown() {#method-is-on-cooldown}

Check if reaction is currently on cooldown

### float get_cooldown_remaining() {#method-get-cooldown-remaining}

Get remaining cooldown time

### bool force_trigger() {#method-force-trigger}

Force trigger the reaction (bypasses cooldown and conditions)

### void cancel_reaction() {#method-cancel-reaction}

Cancel active reaction and return to previous schedule

### void cleanup() {#method-cleanup}

Clean up all resources

