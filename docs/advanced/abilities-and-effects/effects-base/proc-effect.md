<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ProcEffect

**Inherits:** [CompositeEffect](/advanced/abilities-and-effects/effects-composite/composite-effect) < [Effect](/advanced/abilities-and-effects/effects-base/effect) < `DatabaseResource` < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

**Inherited by:** [AbilityProcEffect](/advanced/abilities-and-effects/effects-procs/ability-proc-effect), [CombatProcEffect](/advanced/abilities-and-effects/effects-procs/combat-proc-effect), [DeathProcEffect](/advanced/abilities-and-effects/effects-procs/death-proc-effect), [EffectEventProcEffect](/advanced/abilities-and-effects/effects-procs/effect-event-proc-effect), [HealthThresholdProcEffect](/advanced/abilities-and-effects/effects-procs/health-threshold-proc-effect), [ResourceThresholdProcEffect](/advanced/abilities-and-effects/effects-procs/resource-threshold-proc-effect)

Base class for all proc effects with shared RNG and consumption logic

## Properties

| | | |
|---|---|---|
| `float` | [success_chance](#prop-success-chance) | `100.0` |
| `RngMode` | [rng_mode](#prop-rng-mode) | `RngMode.PURE_RANDOM` |
| `float` | [pity_increase_percent](#prop-pity-increase-percent) | `5.0` |
| `float` | [pity_max_chance](#prop-pity-max-chance) | `100.0` |
| `int` | [streak_max_failures](#prop-streak-max-failures) | `5` |
| `float` | [procedure_cooldown](#prop-procedure-cooldown) | `0.0` |
| `bool` | [consumed_on_proc](#prop-consumed-on-proc) | `false` |
| `int` | [stacks_consumed_on_proc](#prop-stacks-consumed-on-proc) | `0` |

## Methods

| | |
|---|---|
| `void` | [specific_effect_logic](#method-specific-effect-logic)( `effect_instance: EffectInstance` ) |
| `void` | [on_apply_finished](#method-on-apply-finished)( `effect_instance: EffectInstance` ) |
| `String` | [get_rng_mode_description](#method-get-rng-mode-description)() |
| `String` | [get_editor_description](#method-get-editor-description)() |

## Enumerations

### enum RngMode {#enum-rngmode}

- **PURE_RANDOM** = `0` - Each roll is independent
- **PITY_TIMER** = `1` - Chance increases after each failure
- **STREAK_BREAKER** = `2` - Guarantees success after X failures
- **WEIGHTED_STREAK** = `3` - Combines pity timer with guaranteed success

## Property descriptions

*Success Chance Settings*

### float success_chance = 100.0 {#prop-success-chance}

Base percentage chance for the proc to trigger when the event occurs

### RngMode rng_mode = RngMode.PURE_RANDOM {#prop-rng-mode}

RNG mode that controls how success chance is calculated over time

*Pity Timer Settings*

### float pity_increase_percent = 5.0 {#prop-pity-increase-percent}

How much to increase chance per consecutive failure (for PITY_TIMER and WEIGHTED_STREAK modes)

### float pity_max_chance = 100.0 {#prop-pity-max-chance}

Maximum chance the pity timer can reach before capping out

*Streak Breaker Settings*

### int streak_max_failures = 5 {#prop-streak-max-failures}

Maximum consecutive failures before guaranteed success (for STREAK_BREAKER and WEIGHTED_STREAK modes)

*Cooldown &amp; Consumption*

### float procedure_cooldown = 0.0 {#prop-procedure-cooldown}

Cooldown in seconds before this proc can trigger again, 0 means no cooldown

### bool consumed_on_proc = false {#prop-consumed-on-proc}

Whether this effect is completely removed after successfully proccing

### int stacks_consumed_on_proc = 0 {#prop-stacks-consumed-on-proc}

Number of stacks consumed per proc, 0 means consume all stacks

## Method descriptions

### void specific_effect_logic( effect_instance: EffectInstance ) {#method-specific-effect-logic}

Child classes override this to set up their specific signal connections

### void on_apply_finished( effect_instance: EffectInstance ) {#method-on-apply-finished}

*No description yet.*

### String get_rng_mode_description() {#method-get-rng-mode-description}

Get description of RNG mode for tooltips

### String get_editor_description() {#method-get-editor-description}

*No description yet.*

