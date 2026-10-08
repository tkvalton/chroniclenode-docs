<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# CombatReaction

**Inherits:** [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

CombatReaction represents an event-driven response that can trigger in any combat state. Unlike actions in priority lists, reactions are always listening for their trigger event.

## Description

Examples:

- OnDamageTaken: Use defensive ability
- OnAllyDied: Enrage
- OnPlayerCasting: Interrupt
- OnHealthBelowPercent: Emergency heal

Reactions work by connecting to entity signals and checking conditions when events fire.

## Properties

| | | |
|---|---|---|
| `String` | [reaction_name](#prop-reaction-name) | `"Unnamed Reaction"` |
| `TriggerEvent` | [trigger_event](#prop-trigger-event) | `TriggerEvent.DAMAGE_TAKEN` |
| `Array[EntityCondition]` | [conditions](#prop-conditions) | `[]` |
| `Array[CombatAction]` | [reaction_actions](#prop-reaction-actions) | `[]` |
| `float` | [reaction_cooldown](#prop-reaction-cooldown) | `0.0` |
| `float` | [health_threshold_percent](#prop-health-threshold-percent) | `30.0` |

## Variables

| | | |
|---|---|---|
| `Entity` | [entity](#var-entity) |  |
| `ModularCombatScript` | [combat_script](#var-combat-script) |  |
| `float` | [cooldown_remaining](#var-cooldown-remaining) | `0.0` |
| `CombatSession` | [current_encounter](#var-current-encounter) | `null` |
| `ChronoManager` | [chrono_manager](#var-chrono-manager) |  |
| `EventManager` | [event_manager](#var-event-manager) |  |

## Methods

| | |
|---|---|
| `void` | [setup](#method-setup)( `system_hub: GameHost.SystemHub, entity_ref: Entity, script: ModularCombatScript` ) |
| `void` | [set_encounter](#method-set-encounter)( `encounter: CombatSession` ) |
| `bool` | [should_trigger](#method-should-trigger)() |
| `void` | [execute_reaction](#method-execute-reaction)() |
| `void` | [process](#method-process)( `delta: float` ) |
| `void` | [cleanup](#method-cleanup)() |

## Enumerations

### enum TriggerEvent {#enum-triggerevent}

- **DAMAGE_TAKEN** = `0` - When this entity takes damage
- **DAMAGE_DEALT** = `1` - When this entity deals damage
- **HEALTH_BELOW_PERCENT** = `2` - When health drops below threshold
- **ALLY_DIED** = `3` - When an ally dies
- **ENEMY_DIED** = `4` - When an enemy dies
- **TARGET_CHANGED** = `5` - When target changes
- **EFFECT_GAINED** = `6` - When this entity gains an effect
- **EFFECT_LOST** = `7` - When this entity loses an effect
- **ABILITY_USED** = `8` - When target uses an ability

## Property descriptions

### String reaction_name = "Unnamed Reaction" {#prop-reaction-name}

Display name for debugging

### TriggerEvent trigger_event = TriggerEvent.DAMAGE_TAKEN {#prop-trigger-event}

Event that triggers this reaction

### Array[EntityCondition] conditions = [] {#prop-conditions}

Conditions that must be met for reaction to execute (in addition to event trigger)

### Array[CombatAction] reaction_actions = [] {#prop-reaction-actions}

Actions to execute when reaction triggers

### float reaction_cooldown = 0.0 {#prop-reaction-cooldown}

Cooldown before this reaction can trigger again (seconds)

### float health_threshold_percent = 30.0 {#prop-health-threshold-percent}

For HEALTH_BELOW_PERCENT trigger

## Variable descriptions

### Entity entity {#var-entity}

Reference to the entity

### ModularCombatScript combat_script {#var-combat-script}

Reference to the combat script

### float cooldown_remaining = 0.0 {#var-cooldown-remaining}

Internal cooldown timer

### CombatSession current_encounter = null {#var-current-encounter}

*No description yet.*

### ChronoManager chrono_manager {#var-chrono-manager}

SystemRefrences

### EventManager event_manager {#var-event-manager}

*No description yet.*

## Method descriptions

### void setup( system_hub: GameHost.SystemHub, entity_ref: Entity, script: ModularCombatScript ) {#method-setup}

Setup the reaction with entity and behavior script references

### void set_encounter( encounter: CombatSession ) {#method-set-encounter}

Set the current encounter and connect/disconnect encounter signals

### bool should_trigger() {#method-should-trigger}

Check if reaction should trigger (called by combat script or signal handlers)

### void execute_reaction() {#method-execute-reaction}

Execute the reaction

### void process( delta: float ) {#method-process}

Update cooldown (called by combat script)

### void cleanup() {#method-cleanup}

Cleanup

