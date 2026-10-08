<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# WaitForConditionAction

**Inherits:** [CombatAction](/advanced/behaviors/combat-actions/combat-action) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

WaitForConditionAction pauses execution until a specific condition is met. Useful in combo sequences or scripted encounters where you need to wait for events.

## Description

Example: Wait until player finishes casting before continuing combo Example: Wait until adds are spawned before phase transition

## Properties

| | | |
|---|---|---|
| `EntityCondition` | [wait_condition](#prop-wait-condition) |  |
| `float` | [timeout_duration](#prop-timeout-duration) | `0.0` |

## Variables

| | | |
|---|---|---|
| `Timer` | [wait_timer](#var-wait-timer) |  |

## Methods

| | |
|---|---|
| `bool` | [is_wait_complete](#method-is-wait-complete)( `entity: Entity` ) |
| `void` | [cleanup](#method-cleanup)() |

## Property descriptions

### EntityCondition wait_condition {#prop-wait-condition}

The condition to wait for

### float timeout_duration = 0.0 {#prop-timeout-duration}

Maximum time to wait before timing out (0 = wait forever)

## Variable descriptions

### Timer wait_timer {#var-wait-timer}

Internal state

## Method descriptions

### bool is_wait_complete( entity: Entity ) {#method-is-wait-complete}

Check if wait is complete

### void cleanup() {#method-cleanup}

Cleanup

