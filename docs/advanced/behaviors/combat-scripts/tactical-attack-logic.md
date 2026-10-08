<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# TacticalAttackLogic

**Inherits:** [AttackStateLogic](/advanced/behaviors/combat-scripts/attack-state-logic) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

TacticalAttackLogic implements dynamic decision-making for action RPG style combat. Unlike Basic/Priority logic (stationary MMO combat) or Timeline logic (scripted bosses), this creates enemies that actively reposition and make tactical decisions based on distance, state, and probability.

## Description

Use cases:

- Dark Souls/Monster Hunter style bosses that circle, lunge, retreat
- Melee enemies that close distance then attack
- Ranged enemies that maintain optimal distance
- Pack hunters that surround and coordinate

Example configurations:

Aggressive Melee Boss: preferred_range = 5.0, circle_probability = 0.3 melee_actions: [ComboAction([Slash, Delay, Sweep, Retreat]), HeavyStrike] repositioning: [CircleTarget, Retreat, KeepDistance]

Cautious Ranged Enemy: preferred_range = 12.0, circle_probability = 0.5 ranged_actions: [ArrowShot, PowerShot] repositioning: [KeepDistance(12m), StrafeAction]

Pack Hunter: preferred_range = 4.0, circle_probability = 0.7 melee_actions: [Bite, LungeCombo] repositioning: [CircleTarget, Retreat]

## Properties

| | | |
|---|---|---|
| `float` | [preferred_range](#prop-preferred-range) | `6.0` |
| `float` | [min_range](#prop-min-range) | `3.0` |
| `float` | [max_range](#prop-max-range) | `10.0` |
| `float` | [circle_probability](#prop-circle-probability) | `0.3` |
| `float` | [reposition_cooldown](#prop-reposition-cooldown) | `3.0` |
| `bool` | [retreat_after_combo](#prop-retreat-after-combo) | `true` |
| `float` | [retreat_distance](#prop-retreat-distance) | `8.0` |
| `Array[CombatAction]` | [melee_actions](#prop-melee-actions) | `[]` |
| `Array[CombatAction]` | [ranged_actions](#prop-ranged-actions) | `[]` |
| `Array[CombatAction]` | [repositioning_actions](#prop-repositioning-actions) | `[]` |

## Variables

| | | |
|---|---|---|
| `ComboAction` | [active_combo](#var-active-combo) | `null` |
| `int` | [combo_action_index](#var-combo-action-index) | `0` |
| `float` | [last_reposition_time](#var-last-reposition-time) | `0.0` |

## Methods

| | |
|---|---|
| `void` | [setup](#method-setup)( `system_hub: GameHost.SystemHub, entity_ref: Entity, script: ModularCombatScript` ) |
| `bool` | [execute](#method-execute)( `delta: float` ) |
| `void` | [cleanup](#method-cleanup)() |

## Property descriptions

*Range Management*

### float preferred_range = 6.0 {#prop-preferred-range}

The ideal distance to maintain from target

### float min_range = 3.0 {#prop-min-range}

If closer than this, prioritize backing off

### float max_range = 10.0 {#prop-max-range}

If farther than this, prioritize closing distance

*Tactical Behavior*

### float circle_probability = 0.3 {#prop-circle-probability}

Chance (0.0-1.0) to perform circling movement when in good range

### float reposition_cooldown = 3.0 {#prop-reposition-cooldown}

How often to consider repositioning (seconds)

### bool retreat_after_combo = true {#prop-retreat-after-combo}

Whether to automatically retreat after finishing a combo

### float retreat_distance = 8.0 {#prop-retreat-distance}

Distance to retreat after combo (if enabled)

*Combat Actions*

### Array[CombatAction] melee_actions = [] {#prop-melee-actions}

Actions to use when within melee range (distance &lt;= preferred_range)

### Array[CombatAction] ranged_actions = [] {#prop-ranged-actions}

Actions to use when at range (distance &gt; preferred_range)

### Array[CombatAction] repositioning_actions = [] {#prop-repositioning-actions}

Movement actions for repositioning (CircleTarget, Retreat, Strafe, KeepDistance)

## Variable descriptions

### ComboAction active_combo = null {#var-active-combo}

Current combo being executed

### int combo_action_index = 0 {#var-combo-action-index}

Current step in the combo sequence

### float last_reposition_time = 0.0 {#var-last-reposition-time}

Time since last repositioning action

## Method descriptions

### void setup( system_hub: GameHost.SystemHub, entity_ref: Entity, script: ModularCombatScript ) {#method-setup}

Setup the priority logic

### bool execute( delta: float ) {#method-execute}

Execute tactical combat logic

### void cleanup() {#method-cleanup}

Cleanup

