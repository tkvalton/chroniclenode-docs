<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# Encounter

**Inherits:** [Node3D](https://docs.godotengine.org/en/stable/classes/class_node3d.html)

Encounter is a designer-placeable node that coordinates group combat behavior. All entity children automatically become part of the encounter group and enter combat together. Uses UniqueEncounterData to control formations, spacing, and group tactics.

## Properties

| | | |
|---|---|---|
| `UniqueEncounterData` | [unique_data](#prop-unique-data) |  |

## Variables

| | | |
|---|---|---|
| `bool` | [active](#var-active) | `true` |
| `EncounterState` | [encounter_state](#var-encounter-state) | `EncounterState.OUT_OF_COMBAT` |
| `CombatSession` | [encounter_instance](#var-encounter-instance) | `null` |
| `Timer` | [spacing_check_timer](#var-spacing-check-timer) | `null` |
| `Timer` | [respawn_timer](#var-respawn-timer) | `null` |
| `float` | [group_combat_start_time](#var-group-combat-start-time) | `0.0` |
| `Array[Entity]` | [forced_combat_entities](#var-forced-combat-entities) | `[]` |
| `Array[Entity]` | [current_attackers](#var-current-attackers) | `[]` |
| `float` | [last_attack_rotation_time](#var-last-attack-rotation-time) | `0.0` |
| `Array[Entity]` | [original_group_members](#var-original-group-members) | `[]` |
| `Dictionary` | [group_member_lookup](#var-group-member-lookup) | `{}  # entity_instance_id -> bool` |
| `Array[Entity]` | [dynamic_participants](#var-dynamic-participants) | `[]` |
| `Array[EncounterReaction]` | [active_reactions](#var-active-reactions) | `[]` |
| `ChronoManager` | [chrono_manager](#var-chrono-manager) |  |
| `GameHost.SystemHub` | [system_hub](#var-system-hub) |  |

## Methods

| | |
|---|---|
| `void` | [initialize_encounter](#method-initialize-encounter)( `system_hub: GameHost.SystemHub` ) |
| `void` | [sync_to_unique_data](#method-sync-to-unique-data)() |
| `int` | [get_unique_id](#method-get-unique-id)() |
| `bool` | [is_original_group_member](#method-is-original-group-member)( `entity: Entity` ) |
| `Array[Entity]` | [get_original_group_members](#method-get-original-group-members)() |
| `Array[Entity]` | [get_living_group_members](#method-get-living-group-members)() |
| `Array[Entity]` | [get_combat_group_members](#method-get-combat-group-members)() |
| `bool` | [add_dynamic_participant](#method-add-dynamic-participant)( `entity: Entity` ) |
| `bool` | [remove_dynamic_participant](#method-remove-dynamic-participant)( `entity: Entity` ) |
| `Array[Entity]` | [get_all_participants](#method-get-all-participants)() |
| `void` | [add_member](#method-add-member)( `entity: Entity` ) |
| `int` | [cleanup_invalid_participants](#method-cleanup-invalid-participants)() |
| `bool` | [is_in_combat](#method-is-in-combat)() |
| `bool` | [is_defeated](#method-is-defeated)() |
| `bool` | [can_start_combat](#method-can-start-combat)() |
| `void` | [set_active_state](#method-set-active-state)( `system_hub: GameHost.SystemHub, set_active: bool` ) |
| `void` | [respawn_group](#method-respawn-group)() |
| `bool` | [is_entity_allowed_to_attack](#method-is-entity-allowed-to-attack)( `entity: Entity` ) |
| `void` | [on_behavior_changed](#method-on-behavior-changed)() |
| `Dictionary` | [to_save_data](#method-to-save-data)() |
| `void` | [from_save_data](#method-from-save-data)( `save_data: Dictionary` ) |

## Signals

### encounter_activated( activated: bool ) {#signal-encounter-activated}

Signals for encounter events

### encounter_combat_started( encounter: Encounter ) {#signal-encounter-combat-started}

### encounter_combat_ended( encounter: Encounter, reason: String ) {#signal-encounter-combat-ended}

### encounter_phase_changed( encounter: Encounter, phase_index: int ) {#signal-encounter-phase-changed}

### group_behavior_changed( encounter: Encounter, new_behavior: UniqueEncounterData.GroupBehavior ) {#signal-group-behavior-changed}

### encounter_respawned( encounter: Encounter ) {#signal-encounter-respawned}

The defeated group came back (its respawn timer ran out)

## Enumerations

### enum EncounterState {#enum-encounterstate}

Encounter state tracking

- **OUT_OF_COMBAT** = `0`
- **IN_COMBAT** = `1`

## Property descriptions

*Encounter Setup*

### UniqueEncounterData unique_data {#prop-unique-data}

The encounter data that controls this group's behavior AND tracks unique instance data

## Variable descriptions

### bool active = true {#var-active}

Is encounter active in game

### EncounterState encounter_state = EncounterState.OUT_OF_COMBAT {#var-encounter-state}

Current encounter state

### CombatSession encounter_instance = null {#var-encounter-instance}

Reference to the runtime encounter instance (created when combat starts)

### Timer spacing_check_timer = null {#var-spacing-check-timer}

Timer for spacing checks using ChronoManager

### Timer respawn_timer = null {#var-respawn-timer}

Counts down to the return of a defeated group (UniqueEncounterData.respawns)

### float group_combat_start_time = 0.0 {#var-group-combat-start-time}

Track when group combat started

### Array[Entity] forced_combat_entities = [] {#var-forced-combat-entities}

Track entities that have been forced into combat

### Array[Entity] current_attackers = [] {#var-current-attackers}

Track active attack coordination (for turn-based combat)

### float last_attack_rotation_time = 0.0 {#var-last-attack-rotation-time}

*No description yet.*

### Array[Entity] original_group_members = [] {#var-original-group-members}

Original group members (cached on ready for performance)

### Dictionary group_member_lookup =   # entity_instance_id -&gt; bool {#var-group-member-lookup}

Quick lookup for group membership

### Array[Entity] dynamic_participants = [] {#var-dynamic-participants}

Entities that joined the encounter after it started

### Array[EncounterReaction] active_reactions = [] {#var-active-reactions}

Active reaction instances (deep copied from unique_data.reactions)

### ChronoManager chrono_manager {#var-chrono-manager}

TimerSystem ref

### GameHost.SystemHub system_hub {#var-system-hub}

System hub for spawning/combat management

## Method descriptions

### void initialize_encounter( system_hub: GameHost.SystemHub ) {#method-initialize-encounter}

*No description yet.*

### void sync_to_unique_data() {#method-sync-to-unique-data}

Sync current state to unique data

### int get_unique_id() {#method-get-unique-id}

Get unique ID for this encounter

### bool is_original_group_member( entity: Entity ) {#method-is-original-group-member}

Check if an entity is an original group member (fast lookup)

### Array[Entity] get_original_group_members() {#method-get-original-group-members}

Get all original group members (returns cached array)

### Array[Entity] get_living_group_members() {#method-get-living-group-members}

Get all living original group members

### Array[Entity] get_combat_group_members() {#method-get-combat-group-members}

Get all original group members currently in combat

### bool add_dynamic_participant( entity: Entity ) {#method-add-dynamic-participant}

Add a dynamic participant (entity that joined after encounter started)

### bool remove_dynamic_participant( entity: Entity ) {#method-remove-dynamic-participant}

Remove a dynamic participant

### Array[Entity] get_all_participants() {#method-get-all-participants}

Get all participants (original + dynamic)

### void add_member( entity: Entity ) {#method-add-member}

Add a member to the encounter (used by reinforcement actions)

### int cleanup_invalid_participants() {#method-cleanup-invalid-participants}

Clean up invalid group members and dynamic participants

### bool is_in_combat() {#method-is-in-combat}

Check if encounter is currently in combat

### bool is_defeated() {#method-is-defeated}

Check if encounter has been defeated

### bool can_start_combat() {#method-can-start-combat}

Check if encounter can start combat

### void set_active_state( system_hub: GameHost.SystemHub, set_active: bool ) {#method-set-active-state}

Sets the active state of the encounter and all its entities

### void respawn_group() {#method-respawn-group}

The group comes back: every member that is dead stands up at its start (members with a respawn timer of their own that is still running, and NPCs that can only be killed once, are left alone), and the encounter is ready to fight again with its reactions as new

### bool is_entity_allowed_to_attack( entity: Entity ) {#method-is-entity-allowed-to-attack}

Check if an entity is allowed to attack (for coordinated behaviors)

### void on_behavior_changed() {#method-on-behavior-changed}

Called when group behavior changes (can be called by ModifyGroupBehaviorAction)

### Dictionary to_save_data() {#method-to-save-data}

Save encounter state (entities are saved separately by ObjectRegistry)

### void from_save_data( save_data: Dictionary ) {#method-from-save-data}

Load encounter state

