<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ModularCombatScript

**Inherits:** [DatabaseResource](/advanced/data-and-database/database-classes/database-resource) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Modular combat script system that defines how an entity behaves in combat. This resource-based approach allows for flexible AI behavior from simple NPCs to complex scripted boss encounters.

## Description

The combat script owns and manages all action states, making decisions about when to transition and what actions to take in each state.

## Properties

| | | |
|---|---|---|
| `bool` | [auto_basic_attack](#prop-auto-basic-attack) | `true` |
| `float` | [basic_attack_interval](#prop-basic-attack-interval) | `0.5` |
| `bool` | [uses_target_search](#prop-uses-target-search) | `true` |
| `bool` | [uses_chasing](#prop-uses-chasing) | `true` |
| `bool` | [uses_attacking](#prop-uses-attacking) | `true` |
| `bool` | [uses_following](#prop-uses-following) | `false` |
| `bool` | [uses_player_command](#prop-uses-player-command) | `false` |
| `AttackLogicType` | [attack_logic_type](#prop-attack-logic-type) | `AttackLogicType.SIMPLE` |
| `AttackStateLogic` | [attack_state_logic](#prop-attack-state-logic) |  |
| `PhaseSystem` | [phase_system](#prop-phase-system) |  |
| `Array[CombatReaction]` | [global_reactions](#prop-global-reactions) | `[]` |

## Variables

| | | |
|---|---|---|
| `Entity` | [entity](#var-entity) |  |
| `bool` | [enabled](#var-enabled) | `true` |
| `ActionState` | [current_action_state](#var-current-action-state) |  |
| `Dictionary` | [action_states](#var-action-states) | `{}` |
| `float` | [basic_attack_timer](#var-basic-attack-timer) | `0.0` |
| `bool` | [executing_action](#var-executing-action) | `false` |

## Methods

| | |
|---|---|
| `void` | [setup](#method-setup)( `system_hub: GameHost.SystemHub, entity_ref: Entity` ) |
| `void` | [set_encounter](#method-set-encounter)( `encounter: CombatSession` ) |
| `void` | [start_combat](#method-start-combat)() |
| `void` | [end_combat](#method-end-combat)() |
| `void` | [process_combat](#method-process-combat)( `delta: float` ) |
| `void` | [change_state](#method-change-state)( `state_name: ActionStateName, from_death: bool = false` ) |
| `ActionStateName` | [get_current_state_name](#method-get-current-state-name)() |
| `bool` | [has_state](#method-has-state)( `state_name: ActionStateName` ) |
| `ActionStateName` | [get_combat_entry_state](#method-get-combat-entry-state)() |
| `String` | [get_state_name_string](#method-get-state-name-string)( `state_name: ActionStateName` ) |
| `Dictionary` | [to_save_data](#method-to-save-data)() |
| `void` | [from_save_data](#method-from-save-data)( `save_data: Dictionary` ) |
| `void` | [cleanup](#method-cleanup)() |

## Enumerations

### enum ActionStateName {#enum-actionstatename}

Combat script state names

- **INACTIVE** = `0`
- **TARGET_SEARCH** = `1`
- **CHASING** = `2`
- **ATTACKING** = `3`
- **INCAPACITATED** = `4`
- **DEAD** = `5`
- **FOLLOWING** = `6`
- **PLAYER_COMMAND** = `7`
- **DISORIENTED** = `8`
- **FLEE** = `9`

### enum AttackLogicType {#enum-attacklogictype}

Type of attack logic this script uses

- **SIMPLE** = `0` - Just spam basic attack (Scenario 1 - melee)
- **PRIORITY** = `1` - Check conditions, use highest priority action (Scenario 1 - caster)
- **TIMELINE** = `2` - Scripted sequence based on time/phases (Scenario 2 - boss)
- **TACTICAL** = `3` - Complex positioning and action decisions (Scenario 3 - action RPG)

## Property descriptions

*Script Settings*

### bool auto_basic_attack = true {#prop-auto-basic-attack}

Whether to perform basic attacks automatically when no other actions available

### float basic_attack_interval = 0.5 {#prop-basic-attack-interval}

Minimum interval between basic attacks (seconds)

*State Configuration*

### bool uses_target_search = true {#prop-uses-target-search}

Which states this combat script uses (determines valid transitions)

### bool uses_chasing = true {#prop-uses-chasing}

*No description yet.*

### bool uses_attacking = true {#prop-uses-attacking}

*No description yet.*

### bool uses_following = false {#prop-uses-following}

*No description yet.*

### bool uses_player_command = false {#prop-uses-player-command}

*No description yet.*

*Combat Behavior*

### AttackLogicType attack_logic_type = AttackLogicType.SIMPLE {#prop-attack-logic-type}

Type of attack logic this script uses

### AttackStateLogic attack_state_logic {#prop-attack-state-logic}

The logic resource that defines what to do in the ATTACKING state

### PhaseSystem phase_system {#prop-phase-system}

Optional phase system for scripted boss fights (Scenario 2)

### Array[CombatReaction] global_reactions = [] {#prop-global-reactions}

Global reactions that work in any state

## Variable descriptions

### Entity entity {#var-entity}

Reference to the entity using this script

### bool enabled = true {#var-enabled}

Whether this script is currently active (can be toggled at runtime for player control)

### ActionState current_action_state {#var-current-action-state}

Current active action state

### Dictionary action_states =  {#var-action-states}

Dictionary to store all states this script uses

### float basic_attack_timer = 0.0 {#var-basic-attack-timer}

Timer for basic attack intervals

### bool executing_action = false {#var-executing-action}

Whether we're currently executing an action

## Method descriptions

### void setup( system_hub: GameHost.SystemHub, entity_ref: Entity ) {#method-setup}

Initialize the combat script with entity reference

### void set_encounter( encounter: CombatSession ) {#method-set-encounter}

Set the current encounter and notify all combat reactions

### void start_combat() {#method-start-combat}

*No description yet.*

### void end_combat() {#method-end-combat}

*No description yet.*

### void process_combat( delta: float ) {#method-process-combat}

Called every frame to process combat logic

### void change_state( state_name: ActionStateName, from_death: bool = false ) {#method-change-state}

Change to a new action state

### ActionStateName get_current_state_name() {#method-get-current-state-name}

Get the current state as an enum

### bool has_state( state_name: ActionStateName ) {#method-has-state}

Check if this script has a specific state

### ActionStateName get_combat_entry_state() {#method-get-combat-entry-state}

Get the next appropriate state when entering combat

### String get_state_name_string( state_name: ActionStateName ) {#method-get-state-name-string}

Convert state name enum to string for debugging

### Dictionary to_save_data() {#method-to-save-data}

Save runtime state for persistence

### void from_save_data( save_data: Dictionary ) {#method-from-save-data}

Restore runtime state from saved data

### void cleanup() {#method-cleanup}

Cleanup any resources when script is no longer needed

