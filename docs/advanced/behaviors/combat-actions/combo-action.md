<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ComboAction

**Inherits:** [CombatAction](/advanced/behaviors/combat-actions/combat-action) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

ComboAction executes a sequence of combat actions in order. When executed, it initiates a multi-step attack pattern.

## Description

Example: Boss performs 3-hit combo when in melee range Sequence: [ UseAbility(Slash), DelayAction(0.5s), UseAbility(Sweep), DelayAction(0.8s), UseAbility(Smash), RetreatAction(8m)  # Optional retreat at end ]

## Properties

| | | |
|---|---|---|
| `Array[CombatAction]` | [action_sequence](#prop-action-sequence) | `[]` |

## Methods

| | |
|---|---|
| `void` | [cleanup](#method-cleanup)() |

## Property descriptions

### Array[CombatAction] action_sequence = [] {#prop-action-sequence}

The sequence of actions to execute

## Method descriptions

### void cleanup() {#method-cleanup}

Cleanup

