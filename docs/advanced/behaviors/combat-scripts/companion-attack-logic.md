<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# CompanionAttackLogic

**Inherits:** [AttackStateLogic](/advanced/behaviors/combat-scripts/attack-state-logic) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

CompanionAttackLogic is what a party member does in the ATTACKING state while the player is not controlling it. Every `decision_interval` it looks at its active abilities (best first, as they are listed) and uses the first one that fits:

## Description

- an ability that targets an enemy is used on the current target, when it is ready and the target is in range
- an ability that targets an ally is used on the most hurt ally (itself included) below `heal_threshold`

Abilities that target the caster, the ground or an aim (self buffs, area abilities) are not used by the AI yet. The basic attack stays the combat script's business (it falls back to it whenever this returns false). For the party member the player controls this does nothing (the player decides).

## Properties

| | | |
|---|---|---|
| `float` | [decision_interval](#prop-decision-interval) | `0.6` |
| `float` | [heal_threshold](#prop-heal-threshold) | `0.7` |

## Methods

| | |
|---|---|
| `bool` | [execute](#method-execute)( `delta: float` ) |
| `void` | [cleanup](#method-cleanup)() |

## Property descriptions

### float decision_interval = 0.6 {#prop-decision-interval}

Seconds between two decisions

### float heal_threshold = 0.7 {#prop-heal-threshold}

An ally ability is used on an ally with less health than this (0.0 - 1.0)

## Method descriptions

### bool execute( delta: float ) {#method-execute}

One step of the logic: a party member that nobody controls picks and uses its next action. False when it does nothing (it is the current player, or the logic is off).

### void cleanup() {#method-cleanup}

Resets the timer of the logic.

