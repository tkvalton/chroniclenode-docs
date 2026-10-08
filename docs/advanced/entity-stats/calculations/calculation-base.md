<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# CalculationBase

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

**Inherited by:** [DamageDoneCalculation](/advanced/entity-stats/calculations/damage-done-calculation), [DamageTakenCalculation](/advanced/entity-stats/calculations/damage-taken-calculation), [HealingDoneCalculation](/advanced/entity-stats/calculations/healing-done-calculation), [HealingTakenCalculation](/advanced/entity-stats/calculations/healing-taken-calculation)

Base class for the four calculation pipelines (damage done / taken, healing done / taken).

## Description

A phase runs in two steps. Phase 1, triggers: every stat the entity has points in may roll a trigger (critical strike, dodge, block). Avoid-kind triggers roll first and, when one fires, end the phase at once (the number becomes 0 and no modifier runs). Triggers that fire set a tag that modifiers can require. Phase 2, modifiers: every calculation modifier in the database, in the universal priority order, changes the number for the stats the entity has points in. The outcome is a CalculationPhase; the four subclasses copy it into a DamageResult / HealingResult. See docs/systems/entity-stats.md, sections 8 and 17.

## Variables

| | | |
|---|---|---|
| `String` | [calculation_name](#var-calculation-name) | `""` |
| `CalculationType` | [calculation_type](#var-calculation-type) | `CalculationType.DAMAGE_DONE` |
| `CombatManager` | [combat_manager](#var-combat-manager) |  |

## Methods

| | |
|---|---|
| `CalculationPhase` | [run_phase](#method-run-phase)( `stats_component: StatsComponent, start_value: float, context: Dictionary, formula_context: FormulaContext = null, effect_instance: EffectInstance = null` ) |
| `void` | [add_hit_context](#method-add-hit-context)( `context: Dictionary, user: Variant, other: Variant, effect: EffectInstance` ) *static* |
| `Array[Dictionary]` | [validate](#method-validate)() |
| `Dictionary` | [get_debug_info](#method-get-debug-info)() |

## Enumerations

### enum CalculationType {#enum-calculationtype}

- **DAMAGE_DONE** = `0`
- **DAMAGE_TAKEN** = `1`
- **HEALING_DONE** = `2`
- **HEALING_TAKEN** = `3`

## Constants

- `String` **MAGNITUDE_PREFIX** = `"magnitude:"` - Prefix of the context key that holds the magnitude of a fired tag

## Variable descriptions

### String calculation_name = "" {#var-calculation-name}

*No description yet.*

### CalculationType calculation_type = CalculationType.DAMAGE_DONE {#var-calculation-type}

*No description yet.*

### CombatManager combat_manager {#var-combat-manager}

*No description yet.*

## Method descriptions

### CalculationPhase run_phase( stats_component: StatsComponent, start_value: float, context: Dictionary, formula_context: FormulaContext = null, effect_instance: EffectInstance = null ) {#method-run-phase}

Runs triggers then modifiers on `start_value`. `context` holds what the stat effects look at (damage type, in_combat, can_be_avoided, ...) as the dictionary they understand; the tags of fired triggers (and their magnitudes, under "magnitude:&lt;tag&gt;") are added to it. `effect_instance` is the effect that causes the hit or heal: its TriggerRules (always / never / bonuses) apply to this phase, together with the rules of the stats' own effects.

### void add_hit_context( context: Dictionary, user: Variant, other: Variant, effect: EffectInstance ) {#method-add-hit-context}

Adds what the stat effects can filter a hit by to the context: the school of the ability, whether it is melee or ranged, which ability and effects cause it, and whether it is a tick of a damage-over-time effect. `user` is whoever acts (attacker, healer), `other` whoever it is done to

### Array[Dictionary] validate() {#method-validate}

*No description yet.*

### Dictionary get_debug_info() {#method-get-debug-info}

*No description yet.*

