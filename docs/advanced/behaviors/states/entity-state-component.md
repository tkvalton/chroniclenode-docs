<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# EntityStateComponent

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

Consolidated EntityStateComponent that manages all entity state systems. Uses clean signal-based communication throughout for better decoupling. Replaces EntityStatesComponent, BehaviorStateComponent, and CombatStateComponent.

## Variables

| | | |
|---|---|---|
| `Entity` | [entity](#var-entity) |  |
| `bool` | [is_initialized](#var-is-initialized) | `false` |
| `bool` | [is_active](#var-is-active) | `false` |
| `ChronoManager` | [chrono_manager](#var-chrono-manager) |  |
| `ModularBehaviorScript` | [behavior_script](#var-behavior-script) |  |
| `ModularCombatScript` | [combat_script](#var-combat-script) |  |
| `MovementStateComponent` | [movement_state_component](#var-movement-state-component) |  |
| `NavigationController` | [navigation_controller](#var-navigation-controller) |  |
| `Area3D` | [pull_range_area](#var-pull-range-area) |  |
| `Area3D` | [attack_range_area](#var-attack-range-area) |  |
| `Area3D` | [player_detection_area](#var-player-detection-area) |  |
| `Array[Entity]` | [tracked_targets](#var-tracked-targets) | `[]` |
| `Timer` | [los_check_timer](#var-los-check-timer) |  |
| `bool` | [player_detection_enabled](#var-player-detection-enabled) | `false` |

## Methods

| | |
|---|---|
| `void` | [initialize_for_entity](#method-initialize-for-entity)( `system_hub: GameHost.SystemHub, entity_ref: Entity` ) |
| `void` | [activate](#method-activate)( `system_hub: GameHost.SystemHub` ) |
| `void` | [complete_navigation_setup](#method-complete-navigation-setup)() |
| `void` | [set_active_state](#method-set-active-state)( `system_hub: GameHost.SystemHub, active: bool` ) |
| `void` | [apply_lod_level](#method-apply-lod-level)( `level: GameplayConfig.LODLevel` ) |
| `float` | [get_behavior_update_interval](#method-get-behavior-update-interval)() |
| `bool` | [are_detection_areas_enabled](#method-are-detection-areas-enabled)() |
| `void` | [process_physics](#method-process-physics)( `delta: float` ) |
| `void` | [pause_behavior](#method-pause-behavior)() |
| `void` | [resume_behavior](#method-resume-behavior)() |
| `bool` | [activate_schedule_by_name](#method-activate-schedule-by-name)( `schedule_name: String` ) |
| `bool` | [set_active_schedule_by_index](#method-set-active-schedule-by-index)( `schedule_index: int` ) |
| `TaskSchedule` | [get_current_schedule](#method-get-current-schedule)() |
| `void` | [reset_current_schedule](#method-reset-current-schedule)() |
| `void` | [enable_player_detection](#method-enable-player-detection)() |
| `void` | [disable_player_detection](#method-disable-player-detection)() |
| `void` | [handle_entity_death](#method-handle-entity-death)() |
| `void` | [handle_combat_entry](#method-handle-combat-entry)() |
| `void` | [handle_combat_exit](#method-handle-combat-exit)() |
| `bool` | [request_combat_state_change](#method-request-combat-state-change)( `state_name: ModularCombatScript.ActionStateName, data: Dictionary = {}` ) |
| `void` | [activate_player_command_state](#method-activate-player-command-state)() |
| `bool` | [is_companion](#method-is-companion)() |
| `void` | [refresh_control_state](#method-refresh-control-state)() |
| `void` | [set_suspended](#method-set-suspended)( `suspended: bool` ) |
| `bool` | [may_start_fights](#method-may-start-fights)() |
| `void` | [set_encounter](#method-set-encounter)( `encounter: CombatSession` ) |
| `bool` | [command_move_to](#method-command-move-to)( `target_position: Vector3, walk: bool = false, min_distance: float = -1.0` ) |
| `bool` | [command_move_keep_facing](#method-command-move-keep-facing)( `target_position: Vector3, walk: bool = false, min_distance: float = -1.0` ) |
| `bool` | [command_backpedal_to](#method-command-backpedal-to)( `target_position: Vector3, walk: bool = false, min_distance: float = -1.0` ) |
| `bool` | [command_strafe_to](#method-command-strafe-to)( `target_position: Vector3, strafe_direction: int, walk: bool = false, min_distance: float = -1.0` ) |
| `bool` | [command_move_to_sync](#method-command-move-to-sync)( `target_position: Vector3, walk: bool = false, min_distance: float = -1.0` ) |
| `bool` | [command_move_keep_facing_sync](#method-command-move-keep-facing-sync)( `target_position: Vector3, walk: bool = false, min_distance: float = -1.0` ) |
| `bool` | [command_backpedal_to_sync](#method-command-backpedal-to-sync)( `target_position: Vector3, walk: bool = false, min_distance: float = -1.0` ) |
| `bool` | [command_strafe_to_sync](#method-command-strafe-to-sync)( `target_position: Vector3, strafe_direction: int, walk: bool = false, min_distance: float = -1.0` ) |
| `bool` | [command_follow](#method-command-follow)( `target: Node3D, min_distance: float = 2.0, should_walk: bool = false` ) |
| `void` | [command_stop](#method-command-stop)() |
| `void` | [set_approach_distance](#method-set-approach-distance)( `distance: float` ) |
| `void` | [handle_player_command_input](#method-handle-player-command-input)() |
| `Dictionary` | [to_save_data](#method-to-save-data)() |
| `void` | [from_save_data](#method-from-save-data)( `save_data: Dictionary` ) |
| `void` | [cleanup_timers](#method-cleanup-timers)() |

## Signals

### entity_state_component_activated() {#signal-entity-state-component-activated}

Entity lifecycle signals

### entity_state_component_deactivated() {#signal-entity-state-component-deactivated}

### behavior_paused() {#signal-behavior-paused}

Behavior system signals

### behavior_resumed() {#signal-behavior-resumed}

### behavior_schedule_changed( old_schedule: TaskSchedule, new_schedule: TaskSchedule ) {#signal-behavior-schedule-changed}

### combat_state_changed( old_state: String, new_state: String ) {#signal-combat-state-changed}

Combat system signals

### player_detected() {#signal-player-detected}

Detection signals

### player_lost() {#signal-player-lost}

## Variable descriptions

### Entity entity {#var-entity}

Reference to the entity this component controls

### bool is_initialized = false {#var-is-initialized}

Whether the component is fully initialized

### bool is_active = false {#var-is-active}

Whether the component is currently active

### ChronoManager chrono_manager {#var-chrono-manager}

ChoronoManager for timers

### ModularBehaviorScript behavior_script {#var-behavior-script}

The modular behavior script that manages all behavior logic

### ModularCombatScript combat_script {#var-combat-script}

The modular combat script that manages all combat logic

### MovementStateComponent movement_state_component {#var-movement-state-component}

Movement state component (kept separate as it's more complex)

### NavigationController navigation_controller {#var-navigation-controller}

Navigation controller (kept separate as it's more complex)

### Area3D pull_range_area {#var-pull-range-area}

Area3D for pull range detection

### Area3D attack_range_area {#var-attack-range-area}

Area3D for attack range detection

### Area3D player_detection_area {#var-player-detection-area}

Area3D for player detection

### Array[Entity] tracked_targets = [] {#var-tracked-targets}

Entities being tracked for line-of-sight checking

### Timer los_check_timer {#var-los-check-timer}

Timer for periodic LOS checks

### bool player_detection_enabled = false {#var-player-detection-enabled}

Whether player detection is enabled

## Method descriptions

### void initialize_for_entity( system_hub: GameHost.SystemHub, entity_ref: Entity ) {#method-initialize-for-entity}

Initialize the component with entity reference (does NOT activate systems)

### void activate( system_hub: GameHost.SystemHub ) {#method-activate}

Activate all systems - called when entity becomes active

### void complete_navigation_setup() {#method-complete-navigation-setup}

Complete navigation setup for entities spawned before tree entry

### void set_active_state( system_hub: GameHost.SystemHub, active: bool ) {#method-set-active-state}

Set the active state of all systems

### void apply_lod_level( level: GameplayConfig.LODLevel ) {#method-apply-lod-level}

Apply LOD level settings to behavior and detection systems This is called when the Entity's lod_level property changes

### float get_behavior_update_interval() {#method-get-behavior-update-interval}

Get current behavior update interval

### bool are_detection_areas_enabled() {#method-are-detection-areas-enabled}

Check if detection areas are currently enabled

### void process_physics( delta: float ) {#method-process-physics}

Called every physics frame to update all systems

### void pause_behavior() {#method-pause-behavior}

Pause behavior system

### void resume_behavior() {#method-resume-behavior}

Resume behavior system

### bool activate_schedule_by_name( schedule_name: String ) {#method-activate-schedule-by-name}

Activate schedule by name

### bool set_active_schedule_by_index( schedule_index: int ) {#method-set-active-schedule-by-index}

Set active schedule by index

### TaskSchedule get_current_schedule() {#method-get-current-schedule}

Get current schedule

### void reset_current_schedule() {#method-reset-current-schedule}

Reset current schedule

### void enable_player_detection() {#method-enable-player-detection}

Enable player detection

### void disable_player_detection() {#method-disable-player-detection}

Disable player detection

### void handle_entity_death() {#method-handle-entity-death}

Handle entity's death

### void handle_combat_entry() {#method-handle-combat-entry}

Handle the entity entering combat

### void handle_combat_exit() {#method-handle-combat-exit}

Handle the entity exiting combat

### bool request_combat_state_change( state_name: ModularCombatScript.ActionStateName, data: Dictionary = {} ) {#method-request-combat-state-change}

Request combat state change

### void activate_player_command_state() {#method-activate-player-command-state}

Activate player command state

### bool is_companion() {#method-is-companion}

Is this a party member the player does not control (an AI companion)?

### void refresh_control_state() {#method-refresh-control-state}

Put the combat state in order after the player took over this entity or gave it up (or a stance changed): the entity in control is never moved by the combat states, a companion follows the one in control or joins the fight

### void set_suspended( suspended: bool ) {#method-set-suspended}

A suspended entity (a companion in the reserve) does not detect anything and its combat script is off

### bool may_start_fights() {#method-may-start-fights}

May this entity start a fight on its own (a pull, an ally that is fighting)? A companion on a passive stance does not

### void set_encounter( encounter: CombatSession ) {#method-set-encounter}

Set encounter for combat system

### bool command_move_to( target_position: Vector3, walk: bool = false, min_distance: float = -1.0 ) {#method-command-move-to}

Command entity to move to a position

### bool command_move_keep_facing( target_position: Vector3, walk: bool = false, min_distance: float = -1.0 ) {#method-command-move-keep-facing}

Command entity to move without changing facing

### bool command_backpedal_to( target_position: Vector3, walk: bool = false, min_distance: float = -1.0 ) {#method-command-backpedal-to}

Command entity to backpedal

### bool command_strafe_to( target_position: Vector3, strafe_direction: int, walk: bool = false, min_distance: float = -1.0 ) {#method-command-strafe-to}

Command entity to strafe

### bool command_move_to_sync( target_position: Vector3, walk: bool = false, min_distance: float = -1.0 ) {#method-command-move-to-sync}

Command entity to move to a position

### bool command_move_keep_facing_sync( target_position: Vector3, walk: bool = false, min_distance: float = -1.0 ) {#method-command-move-keep-facing-sync}

Command entity to move without changing facing

### bool command_backpedal_to_sync( target_position: Vector3, walk: bool = false, min_distance: float = -1.0 ) {#method-command-backpedal-to-sync}

Command entity to backpedal

### bool command_strafe_to_sync( target_position: Vector3, strafe_direction: int, walk: bool = false, min_distance: float = -1.0 ) {#method-command-strafe-to-sync}

Command entity to strafe

### bool command_follow( target: Node3D, min_distance: float = 2.0, should_walk: bool = false ) {#method-command-follow}

Command entity to follow another entity

### void command_stop() {#method-command-stop}

Command entity to stop moving

### void set_approach_distance( distance: float ) {#method-set-approach-distance}

Set approach distance

### void handle_player_command_input() {#method-handle-player-command-input}

Handle player command input

### Dictionary to_save_data() {#method-to-save-data}

Save runtime state for behavior and combat scripts

### void from_save_data( save_data: Dictionary ) {#method-from-save-data}

Restore runtime state from saved data

### void cleanup_timers() {#method-cleanup-timers}

Clean up all timers and resources

