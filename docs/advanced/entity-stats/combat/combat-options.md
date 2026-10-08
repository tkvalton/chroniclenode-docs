<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# CombatOptions

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

The project's combat result options (GameplayConfig, Combat category, "Damage Results" group) with sensible fallbacks when no config can be loaded (tests, a project without a config file). See docs/systems/entity-stats.md, section 18.3.

## Variables

| | | |
|---|---|---|
| `GameplayConfig` | [override_config](#var-override-config) | `null` |

## Methods

| | |
|---|---|
| `DamageResult.DamageBasis` | [resolve_basis](#method-resolve-basis)( `choice: BasisChoice, reaction: Reaction` ) *static* |
| `DamageResult.DamageBasis` | [default_basis](#method-default-basis)( `reaction: Reaction` ) *static* |
| `bool` | [use_threat_system](#method-use-threat-system)() *static* |
| `float` | [heal_threat_multiplier](#method-heal-threat-multiplier)() *static* |
| `float` | [damage_threat_multiplier](#method-damage-threat-multiplier)() *static* |
| `int` | [max_reflect_chain](#method-max-reflect-chain)() *static* |
| `bool` | [zero_damage_counts_as_hit](#method-zero-damage-counts-as-hit)() *static* |
| `bool` | [misses_enabled](#method-misses-enabled)() *static* |
| `float` | [base_miss_chance](#method-base-miss-chance)() *static* |
| `float` | [guaranteed_hit_chance](#method-guaranteed-hit-chance)() *static* |
| `float` | [minimum_damage](#method-minimum-damage)() *static* |
| `bool` | [round_damage](#method-round-damage)() *static* |
| `GameplayConfig.CapacityRule` | [capacity_change_rule](#method-capacity-change-rule)() *static* |
| `GameplayConfig.CapacityRule` | [level_up_capacity_rule](#method-level-up-capacity-rule)() *static* |

## Enumerations

### enum Reaction {#enum-reaction}

Which reaction asks for a basis

- **THREAT** = `0`
- **LEECH** = `1`
- **REFLECT** = `2`

### enum BasisChoice {#enum-basischoice}

What an effect's "basis choice" export selects. PROJECT_DEFAULT follows GameplayConfig; the rest force one number

- **PROJECT_DEFAULT** = `0`
- **RAW** = `1`
- **AFTER_DONE** = `2`
- **AFTER_TAKEN** = `3`
- **HEALTH_ONLY** = `4`

## Variable descriptions

### GameplayConfig override_config = null {#var-override-config}

Tests set this to use their own options instead of the project's

## Method descriptions

### DamageResult.DamageBasis resolve_basis( choice: BasisChoice, reaction: Reaction ) {#method-resolve-basis}

The number of the hit a reaction uses: the effect's own choice, or the project default for that reaction

### DamageResult.DamageBasis default_basis( reaction: Reaction ) {#method-default-basis}

*No description yet.*

### bool use_threat_system() {#method-use-threat-system}

Does the project use the threat system? Off: enemies attack the nearest of the entities fighting them

### float heal_threat_multiplier() {#method-heal-threat-multiplier}

The share of healing done that becomes threat on the enemies fighting the healed entity

### float damage_threat_multiplier() {#method-damage-threat-multiplier}

The multiplier on the threat a hit of damage makes

### int max_reflect_chain() {#method-max-reflect-chain}

How many reactions deep a hit may be and still be reflected

### bool zero_damage_counts_as_hit() {#method-zero-damage-counts-as-hit}

*No description yet.*

### bool misses_enabled() {#method-misses-enabled}

Can attacks miss at all? (Game settings, Combat, Hit Rules)

### float base_miss_chance() {#method-base-miss-chance}

The flat chance (percent) that every attack misses

### float guaranteed_hit_chance() {#method-guaranteed-hit-chance}

The share (percent) of attacks that always hit

### float minimum_damage() {#method-minimum-damage}

*No description yet.*

### bool round_damage() {#method-round-damage}

*No description yet.*

### GameplayConfig.CapacityRule capacity_change_rule() {#method-capacity-change-rule}

What happens to a pool's current value when its maximum changes (equipment, buffs, stats)

### GameplayConfig.CapacityRule level_up_capacity_rule() {#method-level-up-capacity-rule}

What happens to a pool whose maximum grows because the entity levelled up

