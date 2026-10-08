<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# HitRules

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

The hit roll: does an attack reach its target? It is made once per use of an ability, against each enemy the ability reaches, the first time one of its effects would apply to that enemy (see EffectInstance and CastRecord). The result is one of three:

## Description

- HIT: the ability applies as usual,
- GLANCING: it applies, but its damage and healing are weaker (and, if the project says so, only those),
- MISS: nothing of the ability applies to that enemy.

The chance to hit is one readable number (see get_chance), so a tooltip or an AI can ask for it:

chance = base (melee or ranged) + accuracy of the attacker - evasion of the target + the change of the level gap, kept between the minimum and the maximum

Everything is set in Game settings, Gameplay Config, Combat, Hit Rules, on the ability (Hit rule, Attack style) and in the stats (HitChanceStatEffect). See docs/systems/entity-stats.md, section 32.

## Methods

| | |
|---|---|
| `GameplayConfig` | [config](#method-config)() *static* |
| `bool` | [is_system_on](#method-is-system-on)() *static* |
| `float` | [melee_range](#method-melee-range)() *static* |
| `float` | [get_chance](#method-get-chance)( `attacker: Entity, target: Entity, ranged: bool, effect_instance: EffectInstance = null` ) *static* |
| `float` | [get_accuracy](#method-get-accuracy)( `attacker: Entity, target: Entity, effect_instance: EffectInstance = null` ) *static* |
| `float` | [get_evasion](#method-get-evasion)( `target: Entity, attacker: Entity, effect_instance: EffectInstance = null` ) *static* |
| `float` | [get_level_gap_change](#method-get-level-gap-change)( `attacker: Entity, target: Entity` ) *static* |
| `float` | [level_gap_change](#method-level-gap-change)( `settings: GameplayConfig, attacker_level: int, target_level: int` ) *static* |
| `Outcome` | [roll](#method-roll)( `attacker: Entity, target: Entity, ranged: bool, effect_instance: EffectInstance = null` ) *static* |
| `float` | [glancing_multiplier](#method-glancing-multiplier)() *static* |
| `bool` | [needs_roll](#method-needs-roll)( `effect_instance: EffectInstance` ) *static* |
| `Outcome` | [outcome_for](#method-outcome-for)( `effect_instance: EffectInstance` ) *static* |

## Enumerations

### enum Outcome {#enum-outcome}

- **HIT** = `0`
- **GLANCING** = `1`
- **MISS** = `2`

## Constants

- `int` **SIDE_ACCURACY** = `0`
- `int` **SIDE_EVASION** = `1`

## Method descriptions

### GameplayConfig config() {#method-config}

*No description yet.*

### bool is_system_on() {#method-is-system-on}

Does the project use the hit system?

### float melee_range() {#method-melee-range}

An ability is melee when its range is at most this (Attack style: Automatic)

### float get_chance( attacker: Entity, target: Entity, ranged: bool, effect_instance: EffectInstance = null ) {#method-get-chance}

The chance to hit (percent, 0 to 100) of an attack of `attacker` on `target`. `ranged` picks the base chance; `effect_instance` (can be null) names the ability and the effects, for the filters of the stat effects

### float get_accuracy( attacker: Entity, target: Entity, effect_instance: EffectInstance = null ) {#method-get-accuracy}

The points of hit chance the attacker's stats add

### float get_evasion( target: Entity, attacker: Entity, effect_instance: EffectInstance = null ) {#method-get-evasion}

The points of hit chance the target's stats take away

### float get_level_gap_change( attacker: Entity, target: Entity ) {#method-get-level-gap-change}

The change of the chance because of the levels (points, negative when the target is stronger), as the game settings say: nothing, points per level, a table or a formula

### float level_gap_change( settings: GameplayConfig, attacker_level: int, target_level: int ) {#method-level-gap-change}

The same with the levels given (what tests and tools use)

### Outcome roll( attacker: Entity, target: Entity, ranged: bool, effect_instance: EffectInstance = null ) {#method-roll}

Rolls the hit: a hit, a glancing hit or a miss

### float glancing_multiplier() {#method-glancing-multiplier}

How much of its damage and healing a glancing hit keeps (1 = all of it)

### bool needs_roll( effect_instance: EffectInstance ) {#method-needs-roll}

Does this effect instance take part in a hit roll? Only effects an ability applies to an entity that is not its user and not a friend, and only effects that act on the entity itself (a composite effect only passes its children on: they roll)

### Outcome outcome_for( effect_instance: EffectInstance ) {#method-outcome-for}

The outcome of the roll of this use against this target: rolled the first time it is asked, the same afterwards. Announces a miss when it is rolled

