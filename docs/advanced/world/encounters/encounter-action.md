<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# EncounterAction

**Inherits:** [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

**Inherited by:** [CallReinforcementsAction](/advanced/world/encounters/call-reinforcements-action), [EncounterQuestActivateAction](/advanced/world/encounters/encounter-quest-activate-action), [ForceGroupTargetAction](/advanced/world/encounters/force-group-target-action), [GroupFormationAction](/advanced/world/encounters/group-formation-action), [ModifyGroupBehaviorAction](/advanced/world/encounters/modify-group-behavior-action), [SpawnEffectAction](/advanced/world/encounters/spawn-effect-action), [TriggerEventAction](/advanced/world/encounters/trigger-event-action)

EncounterAction is the base class for actions that affect the entire encounter group. These handle group coordination, formation changes, and collective behaviors.

## Properties

| | | |
|---|---|---|
| `int` | [priority](#prop-priority) | `0` |
| `Array[EncounterCondition]` | [conditions](#prop-conditions) | `[]` |
| `float` | [action_cooldown](#prop-action-cooldown) | `0.0` |
| `bool` | [can_interrupt](#prop-can-interrupt) | `false` |

## Variables

| | | |
|---|---|---|
| `Encounter` | [encounter](#var-encounter) | `null` |
| `float` | [cooldown_remaining](#var-cooldown-remaining) | `0.0` |
| `GameHost.SystemHub` | [system_hub](#var-system-hub) |  |

## Methods

| | |
|---|---|
| `void` | [setup](#method-setup)( `_encounter: Encounter, p_system_hub: GameHost.SystemHub` ) |
| `bool` | [can_execute](#method-can-execute)() |
| `bool` | [execute](#method-execute)() |
| `void` | [process](#method-process)( `delta: float` ) |
| `Array[Entity]` | [get_alive_group_members](#method-get-alive-group-members)() |
| `Array[Entity]` | [get_all_group_members](#method-get-all-group-members)() |
| `Array[Entity]` | [get_combat_group_members](#method-get-combat-group-members)() |
| `Vector3` | [get_encounter_center](#method-get-encounter-center)() |
| `void` | [cleanup](#method-cleanup)() |

## Property descriptions

### int priority = 0 {#prop-priority}

Priority of this action (higher = executed first if multiple actions trigger)

### Array[EncounterCondition] conditions = [] {#prop-conditions}

Conditions that must be met for this action to execute

### float action_cooldown = 0.0 {#prop-action-cooldown}

Cooldown for this specific action (prevents spam)

### bool can_interrupt = false {#prop-can-interrupt}

Whether this action can interrupt current group activities

## Variable descriptions

### Encounter encounter = null {#var-encounter}

Reference to the special encounter instance

### float cooldown_remaining = 0.0 {#var-cooldown-remaining}

Internal cooldown timer

### GameHost.SystemHub system_hub {#var-system-hub}

Gameroot refrence for diverse actions

## Method descriptions

### void setup( _encounter: Encounter, p_system_hub: GameHost.SystemHub ) {#method-setup}

Setup this action with encounter reference

### bool can_execute() {#method-can-execute}

Check if this action can be executed

### bool execute() {#method-execute}

Execute this action

### void process( delta: float ) {#method-process}

Update cooldown timer (called every frame by encounter)

### Array[Entity] get_alive_group_members() {#method-get-alive-group-members}

Get all alive group members

### Array[Entity] get_all_group_members() {#method-get-all-group-members}

Get all group members (alive and dead)

### Array[Entity] get_combat_group_members() {#method-get-combat-group-members}

Get group members currently in combat

### Vector3 get_encounter_center() {#method-get-encounter-center}

Get the encounter center position

### void cleanup() {#method-cleanup}

Cleanup any resources

