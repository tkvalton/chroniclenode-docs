<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# EncounterReaction

**Inherits:** [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

EncounterReaction handles group-level responses to encounter events. Similar to CombatReaction but operates on the entire encounter group.

## Properties

| | | |
|---|---|---|
| `String` | [reaction_name](#prop-reaction-name) | `"New Reaction"` |
| `TriggerEvent` | [trigger_event](#prop-trigger-event) | `TriggerEvent.DAMAGE_TAKEN` |
| `bool` | [one_time](#prop-one-time) | `false` |
| `float` | [cooldown](#prop-cooldown) | `0.0` |
| `float` | [time_seconds](#prop-time-seconds) | `10.0` |
| `float` | [health_threshold_percent](#prop-health-threshold-percent) | `50.0` |
| `Array[EncounterAction]` | [actions](#prop-actions) | `[]` |
| `Array[EncounterCondition]` | [conditions](#prop-conditions) | `[]` |

## Variables

| | | |
|---|---|---|
| `CombatSession` | [encounter_instance](#var-encounter-instance) | `null` |
| `Encounter` | [encounter_node](#var-encounter-node) | `null` |
| `float` | [cooldown_remaining](#var-cooldown-remaining) | `0.0` |
| `bool` | [has_triggered](#var-has-triggered) | `false` |
| `float` | [time_passed_timer](#var-time-passed-timer) | `0.0` |

## Methods

| | |
|---|---|
| `void` | [setup_encounter_reaction](#method-setup-encounter-reaction)( `system_hub: GameHost.SystemHub` ) |
| `bool` | [can_trigger](#method-can-trigger)() |
| `bool` | [trigger](#method-trigger)() |
| `void` | [process](#method-process)( `delta: float` ) |
| `void` | [reset](#method-reset)() |
| `String` | [get_trigger_event_name](#method-get-trigger-event-name)() |
| `void` | [cleanup](#method-cleanup)() |

## Enumerations

### enum TriggerEvent {#enum-triggerevent}

Trigger events for encounter reactions

- **DAMAGE_TAKEN** = `0` - Any group member takes damage
- **DAMAGE_DEALT** = `1` - Any group member deals damage
- **ALLY_DIED** = `2` - Any group member dies
- **ENEMY_DIED** = `3` - Any enemy dies
- **ANY_DEATH** = `4` - Any entity (ally or enemy) dies
- **ALLY_EFFECT_GAINED** = `5` - Any group member gains an effect
- **ALLY_EFFECT_LOST** = `6` - Any group member loses an effect
- **ALLY_ABILITY_USED** = `7` - Any group member uses an ability
- **ENEMY_EFFECT_GAINED** = `8` - Any enemy gains an effect
- **ENEMY_EFFECT_LOST** = `9` - Any enemy loses an effect
- **ENEMY_ABILITY_USED** = `10` - Any enemy uses an ability
- **TIME_PASSED** = `11` - Timer-based trigger
- **GROUP_HEALTH_BELOW_PERCENT** = `12` - Combined group health below threshold

## Property descriptions

### String reaction_name = "New Reaction" {#prop-reaction-name}

Name for this reaction (for debugging/editor display)

### TriggerEvent trigger_event = TriggerEvent.DAMAGE_TAKEN {#prop-trigger-event}

Event that triggers this reaction

### bool one_time = false {#prop-one-time}

Whether this reaction can only trigger once

### float cooldown = 0.0 {#prop-cooldown}

Cooldown between reaction triggers (in seconds)

### float time_seconds = 10.0 {#prop-time-seconds}

Time in seconds for TIME_PASSED trigger

### float health_threshold_percent = 50.0 {#prop-health-threshold-percent}

Health percentage threshold for GROUP_HEALTH_BELOW_PERCENT trigger

### Array[EncounterAction] actions = [] {#prop-actions}

Actions to execute when this reaction triggers

### Array[EncounterCondition] conditions = [] {#prop-conditions}

Conditions that must be met for actions to execute

## Variable descriptions

### CombatSession encounter_instance = null {#var-encounter-instance}

*No description yet.*

### Encounter encounter_node = null {#var-encounter-node}

*No description yet.*

### float cooldown_remaining = 0.0 {#var-cooldown-remaining}

*No description yet.*

### bool has_triggered = false {#var-has-triggered}

*No description yet.*

### float time_passed_timer = 0.0 {#var-time-passed-timer}

*No description yet.*

## Method descriptions

### void setup_encounter_reaction( system_hub: GameHost.SystemHub ) {#method-setup-encounter-reaction}

Setup this reaction with encounter instance reference

### bool can_trigger() {#method-can-trigger}

Check if this reaction can trigger

### bool trigger() {#method-trigger}

Trigger this reaction

### void process( delta: float ) {#method-process}

Update cooldown timer and time-based triggers

### void reset() {#method-reset}

Reset reaction state

### String get_trigger_event_name() {#method-get-trigger-event-name}

Get display name for trigger event

### void cleanup() {#method-cleanup}

Cleanup any resources

