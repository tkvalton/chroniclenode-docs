<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# TimelineAttackLogic

**Inherits:** [AttackStateLogic](/advanced/behaviors/combat-scripts/attack-state-logic) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

TimelineAttackLogic follows a scripted sequence of actions at specific times. Used for Scenario 2 - scripted MMO boss fights with predictable patterns.

## Description

Example boss timeline:

- 0s: UseAbilityAction (Fireball)
- 10s: UseAbilityAction (Summon Adds)
- 20s: MoveToPointAction (Arena Center)
- 30s: Loop back to 0s

Between timeline events, the combat script's auto_basic_attack handles filler.

## Properties

| | | |
|---|---|---|
| `Array[CombatAction]` | [timeline_actions](#prop-timeline-actions) | `[]` |
| `Array[float]` | [action_times](#prop-action-times) | `[]` |
| `bool` | [loop_timeline](#prop-loop-timeline) | `true` |

## Variables

| | | |
|---|---|---|
| `Array[TimelineEntry]` | [timeline](#var-timeline) | `[]` |
| `float` | [timeline_time](#var-timeline-time) | `0.0` |
| `int` | [next_event_index](#var-next-event-index) | `0` |
| `bool` | [timeline_completed](#var-timeline-completed) | `false` |

## Methods

| | |
|---|---|
| `void` | [setup](#method-setup)( `system_hub: GameHost.SystemHub, entity_ref: Entity, script: ModularCombatScript` ) |
| `bool` | [execute](#method-execute)( `delta: float` ) |
| `void` | [reset_timeline](#method-reset-timeline)() |
| `Dictionary` | [to_save_data](#method-to-save-data)() |
| `void` | [from_save_data](#method-from-save-data)( `save_data: Dictionary` ) |
| `void` | [cleanup](#method-cleanup)() |

## Property descriptions

### Array[CombatAction] timeline_actions = [] {#prop-timeline-actions}

The scripted timeline of actions with their trigger times

### Array[float] action_times = [] {#prop-action-times}

Times when each action should trigger (must match timeline_actions length)

### bool loop_timeline = true {#prop-loop-timeline}

Whether the timeline loops

## Variable descriptions

### Array[TimelineEntry] timeline = [] {#var-timeline}

Internal timeline entries (built from actions + times)

### float timeline_time = 0.0 {#var-timeline-time}

Current time in the timeline (seconds)

### int next_event_index = 0 {#var-next-event-index}

Index of the next event to execute

### bool timeline_completed = false {#var-timeline-completed}

Whether the timeline has completed (if not looping)

## Method descriptions

### void setup( system_hub: GameHost.SystemHub, entity_ref: Entity, script: ModularCombatScript ) {#method-setup}

Setup the timeline

### bool execute( delta: float ) {#method-execute}

Execute timeline logic

### void reset_timeline() {#method-reset-timeline}

Reset the timeline (useful for phase transitions)

### Dictionary to_save_data() {#method-to-save-data}

Save runtime state

### void from_save_data( save_data: Dictionary ) {#method-from-save-data}

Restore runtime state

### void cleanup() {#method-cleanup}

Cleanup

