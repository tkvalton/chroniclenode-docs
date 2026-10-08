<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# PriorityAttackLogic

**Inherits:** [AttackStateLogic](/advanced/behaviors/combat-scripts/attack-state-logic) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

PriorityAttackLogic evaluates a list of actions in priority order and executes the first valid one. This is used for NPCs with abilities that should be used under specific conditions.

## Description

Scenario 1 example: Caster NPC

- Priority 100: Use special ability (if off cooldown, random delay passed)
- Priority 1: Basic attack (fallback, handled by combat script)

Actions are checked from highest to lowest priority. The first action whose conditions are met gets executed.

## Properties

| | | |
|---|---|---|
| `Array[CombatAction]` | [actions](#prop-actions) | `[]` |
| `float` | [min_first_delay](#prop-min-first-delay) | `5.0` |
| `float` | [max_first_delay](#prop-max-first-delay) | `7.0` |
| `float` | [rest_after_action](#prop-rest-after-action) | `0.5` |

## Variables

| | | |
|---|---|---|
| `float` | [first_ability_delay](#var-first-ability-delay) | `0.0` |
| `bool` | [first_ability_used](#var-first-ability-used) | `false` |
| `float` | [rest_timer](#var-rest-timer) | `0.0` |

## Methods

| | |
|---|---|
| `void` | [setup](#method-setup)( `system_hub: GameHost.SystemHub, entity_ref: Entity, script: ModularCombatScript` ) |
| `bool` | [execute](#method-execute)( `delta: float` ) |
| `Dictionary` | [to_save_data](#method-to-save-data)() |
| `void` | [from_save_data](#method-from-save-data)( `save_data: Dictionary` ) |
| `void` | [cleanup](#method-cleanup)() |

## Property descriptions

### Array[CombatAction] actions = [] {#prop-actions}

List of actions sorted by priority (highest first)

### float min_first_delay = 5.0 {#prop-min-first-delay}

Minimum delay before first ability (seconds)

### float max_first_delay = 7.0 {#prop-max-first-delay}

Maximum delay before first ability (seconds)

### float rest_after_action = 0.5 {#prop-rest-after-action}

Rest period after successful action execution (seconds)

## Variable descriptions

### float first_ability_delay = 0.0 {#var-first-ability-delay}

Timer for the first ability delay (random 5-7s delay before first cast)

### bool first_ability_used = false {#var-first-ability-used}

Whether the first ability has been used yet

### float rest_timer = 0.0 {#var-rest-timer}

Timer for rest period after successful action

## Method descriptions

### void setup( system_hub: GameHost.SystemHub, entity_ref: Entity, script: ModularCombatScript ) {#method-setup}

Setup the priority logic

### bool execute( delta: float ) {#method-execute}

Execute the highest priority valid action

### Dictionary to_save_data() {#method-to-save-data}

Save runtime state

### void from_save_data( save_data: Dictionary ) {#method-from-save-data}

Restore runtime state

### void cleanup() {#method-cleanup}

Cleanup all actions

