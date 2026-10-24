<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# CombatDurationCondition

**Inherits:** [EncounterCondition](/advanced/shared-systems/condition-bases/encounter-condition) < [Condition](/advanced/shared-systems/condition-bases/condition) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Checks if the group has been in combat for a specified duration

## Properties

| | | |
|---|---|---|
| `Condition.CheckLogic` | [comparison_logic](#prop-comparison-logic) | `Condition.CheckLogic.GREATER_EQUAL` |
| `float` | [target_duration_seconds](#prop-target-duration-seconds) | `30.0` |

## Variables

| | | |
|---|---|---|
| `float` | [combat_start_time](#var-combat-start-time) | `0.0` |

## Methods

| | |
|---|---|
| `bool` | [evaluate_encounter](#method-evaluate-encounter)( `encounter: EncounterGroup` ) |
| `String` | [get_encounter_description](#method-get-encounter-description)() |
| `String` | [get_encounter_function_description](#method-get-encounter-function-description)() |
| `void` | [set_combat_start_time](#method-set-combat-start-time)( `start_time: float` ) |
| `void` | [reset_combat_time](#method-reset-combat-time)() |

## Property descriptions

### Condition.CheckLogic comparison_logic = Condition.CheckLogic.GREATER_EQUAL {#prop-comparison-logic}

How the time in combat is compared with the target duration

### float target_duration_seconds = 30.0 {#prop-target-duration-seconds}

The time in combat to compare with, in seconds

## Variable descriptions

### float combat_start_time = 0.0 {#var-combat-start-time}

Track when combat started (set by Encounter)

## Method descriptions

### bool evaluate_encounter( encounter: EncounterGroup ) {#method-evaluate-encounter}

Is the condition met for this encounter?

### String get_encounter_description() {#method-get-encounter-description}

A short text about what the condition checks on the encounter.

### String get_encounter_function_description() {#method-get-encounter-function-description}

The sentence the editor shows for the condition, with &#123;placeholders&#125; for its values.

### void set_combat_start_time( start_time: float ) {#method-set-combat-start-time}

Called by Encounter when group enters combat

### void reset_combat_time() {#method-reset-combat-time}

Reset combat timing

