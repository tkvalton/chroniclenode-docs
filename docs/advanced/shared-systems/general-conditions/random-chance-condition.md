<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# RandomChanceCondition

**Inherits:** [EntityCondition](/advanced/shared-systems/condition-bases/entity-condition) < [Condition](/advanced/shared-systems/condition-bases/condition) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Checks if a random roll succeeds based on percentage chance.

## Properties

| | | |
|---|---|---|
| `float` | [chance_percent](#prop-chance-percent) | `50.0` |
| `RngMode` | [rng_mode](#prop-rng-mode) | `RngMode.PURE_RANDOM` |
| `float` | [pity_increase_percent](#prop-pity-increase-percent) | `5.0` |
| `float` | [max_pity_chance](#prop-max-pity-chance) | `100.0` |
| `int` | [max_failures](#prop-max-failures) | `5` |

## Variables

| | | |
|---|---|---|
| `int` | [consecutive_failures](#var-consecutive-failures) | `0` |

## Methods

| | |
|---|---|
| `bool` | [evaluate](#method-evaluate)( `argument: Variant = null` ) |
| `float` | [get_current_chance](#method-get-current-chance)() |
| `void` | [reset_pity_timer](#method-reset-pity-timer)() |
| `String` | [get_description](#method-get-description)() |
| `String` | [get_function_description](#method-get-function-description)() |

## Enumerations

### enum RngMode {#enum-rngmode}

- **PURE_RANDOM** = `0` - Each roll is independent (original behavior)
- **PITY_TIMER** = `1` - Chance increases after each failure
- **STREAK_BREAKER** = `2` - Guarantees success after X failures
- **WEIGHTED_STREAK** = `3` - Combines pity timer with guaranteed success

## Property descriptions

### float chance_percent = 50.0 {#prop-chance-percent}

The chance of success, in percent

### RngMode rng_mode = RngMode.PURE_RANDOM {#prop-rng-mode}

How luck is smoothed out: pure random, a growing chance after failures, or a guaranteed success after a streak of failures

*Pity Timer Settings*

### float pity_increase_percent = 5.0 {#prop-pity-increase-percent}

How much to increase chance per failure (only for PITY_TIMER and WEIGHTED_STREAK)

### float max_pity_chance = 100.0 {#prop-max-pity-chance}

Maximum chance the pity timer can reach

*Streak Breaker Settings*

### int max_failures = 5 {#prop-max-failures}

Maximum failures before guaranteed success (only for STREAK_BREAKER and WEIGHTED_STREAK)

## Variable descriptions

### int consecutive_failures = 0 {#var-consecutive-failures}

Internal state - tracks consecutive failures for this specific condition instance

## Method descriptions

### bool evaluate( argument: Variant = null ) {#method-evaluate}

Final evaluate method that handles entity targeting and calls evaluate_entity Don't override this - override evaluate_entity instead *(from [EntityCondition](/advanced/shared-systems/condition-bases/entity-condition))*

### float get_current_chance() {#method-get-current-chance}

Get current effective chance (for debugging/UI)

### void reset_pity_timer() {#method-reset-pity-timer}

Reset the failure counter (useful for combat state transitions)

### String get_description() {#method-get-description}

Get description including entity targeting info *(from [EntityCondition](/advanced/shared-systems/condition-bases/entity-condition))*

### String get_function_description() {#method-get-function-description}

Main function description method - includes targeting as part of inline template *(from [EntityCondition](/advanced/shared-systems/condition-bases/entity-condition))*

