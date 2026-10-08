<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# RandomChanceConditionalEffect

**Inherits:** [ConditionalEffect](/advanced/abilities-and-effects/effects-base/conditional-effect) < [CompositeEffect](/advanced/abilities-and-effects/effects-composite/composite-effect) < [Effect](/advanced/abilities-and-effects/effects-base/effect) < `DatabaseResource` < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Applies child effects based on a percentage chance, with optional advanced RNG modes

## Properties

| | | |
|---|---|---|
| `float` | [chance_percent](#prop-chance-percent) | `25.0` |
| `RngMode` | [rng_mode](#prop-rng-mode) | `RngMode.PURE_RANDOM` |
| `float` | [pity_increase_percent](#prop-pity-increase-percent) | `5.0` |
| `float` | [pity_max_chance](#prop-pity-max-chance) | `100.0` |
| `int` | [streak_max_failures](#prop-streak-max-failures) | `5` |

## Methods

| | |
|---|---|
| `void` | [specific_effect_logic](#method-specific-effect-logic)( `effect_instance: EffectInstance` ) |
| `float` | [get_current_chance](#method-get-current-chance)( `effect_instance: EffectInstance` ) |
| `void` | [reset_rng_state](#method-reset-rng-state)( `effect_instance: EffectInstance` ) |
| `String` | [get_effect_description](#method-get-effect-description)() |
| `String` | [get_editor_description](#method-get-editor-description)() |

## Enumerations

### enum RngMode {#enum-rngmode}

- **PURE_RANDOM** = `0` - Each roll is fully independent
- **PITY_TIMER** = `1` - Chance increases after each failure
- **STREAK_BREAKER** = `2` - Guarantees success after N consecutive failures
- **WEIGHTED_STREAK** = `3` - Combines pity timer with a guaranteed-success ceiling

## Property descriptions

*Condition Settings*

### float chance_percent = 25.0 {#prop-chance-percent}

Base percentage chance (0–100) for the effect to trigger

*RNG Mode*

### RngMode rng_mode = RngMode.PURE_RANDOM {#prop-rng-mode}

*No description yet.*

*Pity Timer Settings*

### float pity_increase_percent = 5.0 {#prop-pity-increase-percent}

Chance increase per consecutive failure (used by PITY_TIMER and WEIGHTED_STREAK)

### float pity_max_chance = 100.0 {#prop-pity-max-chance}

Maximum chance the pity timer can reach (used by PITY_TIMER and WEIGHTED_STREAK)

*Streak Breaker Settings*

### int streak_max_failures = 5 {#prop-streak-max-failures}

Consecutive failures before success is guaranteed (used by STREAK_BREAKER and WEIGHTED_STREAK)

## Method descriptions

### void specific_effect_logic( effect_instance: EffectInstance ) {#method-specific-effect-logic}

*No description yet.*

### float get_current_chance( effect_instance: EffectInstance ) {#method-get-current-chance}

Returns the effective chance for this instance (accounts for pity / streak state). Useful for debugging and UI display.

### void reset_rng_state( effect_instance: EffectInstance ) {#method-reset-rng-state}

Resets the RNG state for this effect instance (e.g. on combat state transitions).

### String get_effect_description() {#method-get-effect-description}

*No description yet.*

### String get_editor_description() {#method-get-editor-description}

*No description yet.*

