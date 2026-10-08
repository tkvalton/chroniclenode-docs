<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# StatEffect

**Inherits:** [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

**Inherited by:** [AbilityModifierStatEffect](/advanced/entity-stats/stat-effects/ability-modifier-stat-effect), [CalculationModifierStatEffect](/advanced/entity-stats/stat-effects/calculation-modifier-stat-effect), [CalculationTriggerStatEffect](/advanced/entity-stats/stat-effects/calculation-trigger-stat-effect), [GainModifierStatEffect](/advanced/entity-stats/stat-effects/gain-modifier-stat-effect), [HitChanceStatEffect](/advanced/entity-stats/stat-effects/hit-chance-stat-effect), [MultiplierStatEffect](/advanced/entity-stats/stat-effects/multiplier-stat-effect), [PoolModifierStatEffect](/advanced/entity-stats/stat-effects/pool-modifier-stat-effect), [PoolRestorationStatEffect](/advanced/entity-stats/stat-effects/pool-restoration-stat-effect), [ReactiveDamageStatEffect](/advanced/entity-stats/stat-effects/reactive-damage-stat-effect), [TriggerRuleStatEffect](/advanced/entity-stats/stat-effects/trigger-rule-stat-effect)

Base class for all stat effects Effects are composable modifiers that can be attached to StatDefinitions

## Properties

| | | |
|---|---|---|
| `bool` | [effect_enabled](#prop-effect-enabled) | `true` |
| `ActiveTriggerType` | [active_trigger_type](#prop-active-trigger-type) | `ActiveTriggerType.PERMANENT` |
| `Array[Condition]` | [conditions](#prop-conditions) | `[]` |
| `Array[int]` | [only_schools](#prop-only-schools) | `[]` |
| `AttackStyleFilter` | [attack_style_filter](#prop-attack-style-filter) | `AttackStyleFilter.ANY` |
| `PeriodicFilter` | [periodic_filter](#prop-periodic-filter) | `PeriodicFilter.ANY` |
| `Array[int]` | [only_abilities](#prop-only-abilities) | `[]` |
| `Array[int]` | [only_effects](#prop-only-effects) | `[]` |
| `CalculationFormula` | [formula](#prop-formula) |  |
| `DiminishingReturns` | [returns](#prop-returns) |  |
| `float` | [max_result](#prop-max-result) | `0.0` |

## Methods

| | |
|---|---|
| `EffectType` | [get_effect_type](#method-get-effect-type)() |
| `String` | [get_effect_category](#method-get-effect-category)() |
| `String` | [get_tooltip_description](#method-get-tooltip-description)() |
| `String` | [get_short_description](#method-get-short-description)() |
| `bool` | [is_active](#method-is-active)( `context: Dictionary` ) |
| `bool` | [has_conditions](#method-has-conditions)() |
| `bool` | [applies_to_context](#method-applies-to-context)( `context: Dictionary` ) |
| `bool` | [passes_hit_filters](#method-passes-hit-filters)( `context: Dictionary` ) |
| `bool` | [has_hit_filters](#method-has-hit-filters)() |
| `CalculationFormula` | [ensure_formula](#method-ensure-formula)() |
| `float` | [evaluate_points](#method-evaluate-points)( `points: float, context: FormulaContext = null` ) |
| `Array[String]` | [get_formula_warnings](#method-get-formula-warnings)() |
| `String` | [describe_formula](#method-describe-formula)() |
| `float` | [get_primary_value](#method-get-primary-value)() |
| `void` | [set_primary_value](#method-set-primary-value)( `new_value: float` ) |
| `Curve` | [create_default_scaling_curve](#method-create-default-scaling-curve)() |
| `float` | [apply_calculation](#method-apply-calculation)( `current_value: float, effect_value: float, calc_type: CalculationType` ) |
| `String` | [get_calculation_description](#method-get-calculation-description)( `calc_type: CalculationType` ) |
| `Dictionary` | [apply_effect](#method-apply-effect)( `stats_component: StatsComponent, stat_points: float, context: Dictionary = {}` ) |
| `Array[Dictionary]` | [validate](#method-validate)() |

## Enumerations

### enum EffectType {#enum-effecttype}

- **MULTIPLIER** = `0`
- **POOL_MODIFIER** = `1`
- **ABILITY_MODIFIER** = `2`
- **CALCULATION_MODIFIER** = `3`
- **CALCULATION_TRIGGER** = `4`
- **POOL_RESTORATION** = `5`
- **REACTIVE_DAMAGE** = `6`
- **CUSTOM** = `7`
- **TRIGGER_RULE** = `8`
- **GAIN_MODIFIER** = `9`
- **HIT_CHANCE** = `10`

### enum CalculationType {#enum-calculationtype}

- **ADD** = `0`
- **MINUS** = `1`
- **MULTIPLY** = `2`
- **PERCENTAGE_INCREASE** = `3`
- **PERCENTAGE_DECREASE** = `4`
- **SET_VALUE** = `5`
- **PERCENTAGE_OF_MAX** = `6`

### enum ScalingMode {#enum-scalingmode}

- **LINEAR** = `0`
- **THRESHOLD** = `1`

### enum ActiveTriggerType {#enum-activetriggertype}

- **PERMANENT** = `0`
- **IN_COMBAT** = `1`

### enum AttackStyleFilter {#enum-attackstylefilter}

Which hits and heals a calculation effect is about, beyond the damage type: the school of the ability, how far apart the two are (melee, ranged), and whether it is a tick of a damage-over-time effect. Read from the context of the calculation; an effect that is not about a hit ignores them

- **ANY** = `0` - Melee and ranged attacks
- **MELEE** = `1` - Only melee attacks
- **RANGED** = `2` - Only ranged attacks

### enum PeriodicFilter {#enum-periodicfilter}

- **ANY** = `0` - Direct and periodic hits and heals
- **ONLY_DIRECT** = `1` - Only direct ones
- **ONLY_PERIODIC** = `2` - Only the ticks of damage or healing over time

## Property descriptions

### bool effect_enabled = true {#prop-effect-enabled}

A disabled effect is ignored

### ActiveTriggerType active_trigger_type = ActiveTriggerType.PERMANENT {#prop-active-trigger-type}

When the effect is active: always, only in combat, or only out of combat

*Conditions*

### Array[Condition] conditions = [] {#prop-conditions}

All of these must be true for the effect to apply (on top of the active trigger above). Conditions see the entity that owns the stat and, during a hit, its opponent: "+30 % damage vs Undead" is the condition "opponent has tag Undead", "+20 % damage below 30 % health" is "owner health below 30". Use the target kind Argument Entity for the owner, Opponent for the other side

*Hit Filters*

### Array[int] only_schools = [] {#prop-only-schools}

Only abilities and effects of these schools (empty = every school)

### AttackStyleFilter attack_style_filter = AttackStyleFilter.ANY {#prop-attack-style-filter}

Only melee attacks, only ranged attacks, or both (see Attack style on the ability)

### PeriodicFilter periodic_filter = PeriodicFilter.ANY {#prop-periodic-filter}

Only direct hits, or only ticks of damage or healing over time

### Array[int] only_abilities = [] {#prop-only-abilities}

Only hits and heals that come from these abilities (Ability ids; empty = every ability): a mastery for some abilities

### Array[int] only_effects = [] {#prop-only-effects}

Only hits and heals that come from these effects (Effect ids; empty = every effect). An effect inside a composite effect counts under the id of the composite too

*Value*

### CalculationFormula formula {#prop-formula}

Slot 2: turns the (effective) stat points into the value of the effect (Linear: per point, Hyperbolic: armor style, Flat: a fixed value). Null on a resource saved before formulas existed: it is built once from the legacy fields below (see ensure_formula)

### DiminishingReturns returns {#prop-returns}

Slot 1 (optional): reshapes the points before the formula, so points above a threshold are worth less

### float max_result = 0.0 {#prop-max-result}

Ceiling on the magnitude of the value this effect produces ("dodge never above 75"). 0 = no ceiling. Separate from the stat's own max value, which caps the stat points

## Method descriptions

### EffectType get_effect_type() {#method-get-effect-type}

Override in child classes to return effect type name

### String get_effect_category() {#method-get-effect-category}

Override in child classes to return category

### String get_tooltip_description() {#method-get-tooltip-description}

Get a short description for tooltips - delegates to get_short_description() Override get_short_description() in child classes for type-specific text

### String get_short_description() {#method-get-short-description}

Override in child classes for a one-line summary of what this effect does

### bool is_active( context: Dictionary ) {#method-is-active}

Check if this effect is active based on combat state

### bool has_conditions() {#method-has-conditions}

Does this effect depend on the state of an entity (so it must be re-evaluated when that state changes)?

### bool applies_to_context( context: Dictionary ) {#method-applies-to-context}

Check if this effect applies to the given context

### bool passes_hit_filters( context: Dictionary ) {#method-passes-hit-filters}

Does the hit or heal of the context pass the school, attack style and periodic filters? (A context without the information passes: nothing to filter by)

### bool has_hit_filters() {#method-has-hit-filters}

Does this effect filter hits by school, attack style or ticks?

### CalculationFormula ensure_formula() {#method-ensure-formula}

Makes sure the formula slot holds a formula. A resource saved before formulas existed has none: build it once from the legacy fields (the value per point as a Linear formula, an old threshold as a SoftCap, an old curve as a DrawnCurve). Returns the formula

### float evaluate_points( points: float, context: FormulaContext = null ) {#method-evaluate-points}

The value of this effect for `points`: diminishing returns, formula, max result. `context` is what formulas may read (levels, damage type ...); null is fine outside combat

### Array[String] get_formula_warnings() {#method-get-formula-warnings}

Configuration problems of the two slots as readable messages

### String describe_formula() {#method-describe-formula}

Short text for the formula, for descriptions ("2 per point", "max 100 / (points + 100)")

### float get_primary_value() {#method-get-primary-value}

The editor's quick edit of the common case: the number of a Linear (per point) or Flat (fixed) formula

### void set_primary_value( new_value: float ) {#method-set-primary-value}

*No description yet.*

### Curve create_default_scaling_curve() {#method-create-default-scaling-curve}

Create a default diminishing returns curve

### float apply_calculation( current_value: float, effect_value: float, calc_type: CalculationType ) {#method-apply-calculation}

Apply the calculation type to modify the current value

### String get_calculation_description( calc_type: CalculationType ) {#method-get-calculation-description}

Get human-readable description of calculation type

### Dictionary apply_effect( stats_component: StatsComponent, stat_points: float, context: Dictionary = {} ) {#method-apply-effect}

Main method to apply this effect - OVERRIDE IN CHILD CLASSES Returns dictionary with effect results

### Array[Dictionary] validate() {#method-validate}

Validate this effect's configuration - override in child classes

