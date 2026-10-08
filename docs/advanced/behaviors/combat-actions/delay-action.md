<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# DelayAction

**Inherits:** [CombatAction](/advanced/behaviors/combat-actions/combat-action) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

DelayAction waits for a specified duration before completing. Useful in combo sequences to add timing between attacks.

## Description

Example: Combo: [Slash, Delay(0.5s), Sweep, Delay(0.8s), Smash]

## Properties

| | | |
|---|---|---|
| `float` | [delay_duration](#prop-delay-duration) | `0.5` |

## Variables

| | | |
|---|---|---|
| `Timer` | [delay_timer](#var-delay-timer) |  |

## Methods

| | |
|---|---|
| `bool` | [is_delay_complete](#method-is-delay-complete)() |
| `void` | [reset](#method-reset)() |
| `void` | [cleanup](#method-cleanup)() |

## Property descriptions

### float delay_duration = 0.5 {#prop-delay-duration}

Duration to wait (seconds)

## Variable descriptions

### Timer delay_timer {#var-delay-timer}

Internal timer

## Method descriptions

### bool is_delay_complete() {#method-is-delay-complete}

Check if delay is complete

### void reset() {#method-reset}

Reset for next use

### void cleanup() {#method-cleanup}

Cleanup

