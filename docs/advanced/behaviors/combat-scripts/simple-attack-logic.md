<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# SimpleAttackLogic

**Inherits:** [AttackStateLogic](/advanced/behaviors/combat-scripts/attack-state-logic) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

SimpleAttackLogic automatically creates priority-based actions from the entity's active abilities. This provides a zero-configuration combat AI that cycles through abilities in order.

## Description

The system automatically:

- Creates UseAbilityAction for each active ability
- Assigns priority based on array order (first = highest priority)
- Includes basic cooldown and casting checks
- Falls back to basic attack if no abilities are available

## Properties

| | | |
|---|---|---|
| `float` | [min_first_delay](#prop-min-first-delay) | `2.0` |
| `float` | [max_first_delay](#prop-max-first-delay) | `5.0` |
| `float` | [rest_after_action](#prop-rest-after-action) | `3` |

## Variables

| | | |
|---|---|---|
| `float` | [first_ability_delay](#var-first-ability-delay) | `0.0` |
| `bool` | [first_ability_used](#var-first-ability-used) | `false` |
| `float` | [rest_timer](#var-rest-timer) | `0.0` |
| `Array[CombatAction]` | [generated_actions](#var-generated-actions) | `[]` |

## Methods

| | |
|---|---|
| `void` | [setup](#method-setup)( `system_hub: GameHost.SystemHub, entity_ref: Entity, script: ModularCombatScript` ) |
| `bool` | [execute](#method-execute)( `delta: float` ) |
| `void` | [refresh_actions](#method-refresh-actions)() |
| `Array[CombatAction]` | [get_generated_actions](#method-get-generated-actions)() |
| `int` | [get_action_count](#method-get-action-count)() |
| `bool` | [has_actions](#method-has-actions)() |
| `Dictionary` | [to_save_data](#method-to-save-data)() |
| `void` | [from_save_data](#method-from-save-data)( `save_data: Dictionary` ) |
| `void` | [cleanup](#method-cleanup)() |

## Property descriptions

### float min_first_delay = 2.0 {#prop-min-first-delay}

Minimum delay before first ability (seconds)

### float max_first_delay = 5.0 {#prop-max-first-delay}

Maximum delay before first ability (seconds)

### float rest_after_action = 3 {#prop-rest-after-action}

Rest period after successful action execution (seconds)

## Variable descriptions

### float first_ability_delay = 0.0 {#var-first-ability-delay}

Timer for the first ability delay

### bool first_ability_used = false {#var-first-ability-used}

Whether the first ability has been used yet

### float rest_timer = 0.0 {#var-rest-timer}

Timer for rest period after successful action

### Array[CombatAction] generated_actions = [] {#var-generated-actions}

Auto-generated priority actions

## Method descriptions

### void setup( system_hub: GameHost.SystemHub, entity_ref: Entity, script: ModularCombatScript ) {#method-setup}

Setup the simple logic

### bool execute( delta: float ) {#method-execute}

Execute the highest priority valid action

### void refresh_actions() {#method-refresh-actions}

Refresh actions when abilities change (call this if entity gains/loses abilities)

### Array[CombatAction] get_generated_actions() {#method-get-generated-actions}

Get current generated actions (for debugging/inspection)

### int get_action_count() {#method-get-action-count}

Get action count

### bool has_actions() {#method-has-actions}

Check if any actions are available

### Dictionary to_save_data() {#method-to-save-data}

Save runtime state

### void from_save_data( save_data: Dictionary ) {#method-from-save-data}

Restore runtime state

### void cleanup() {#method-cleanup}

Cleanup all generated actions

