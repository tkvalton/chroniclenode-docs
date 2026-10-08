<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# PoolDefinition

**Inherits:** [DatabaseResource](/advanced/data-and-database/database-classes/database-resource) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Definition for pool stats - contains ALL logic for damage absorption, overfill, etc.

## Properties

| | | |
|---|---|---|
| `Color` | [color](#prop-color) | `Color.WHITE` |
| `float` | [default_max_value](#prop-default-max-value) | `100.0` |
| `float` | [default_current_value](#prop-default-current-value) | `100.0` |
| `StartValue` | [start_value](#prop-start-value) | `StartValue.STARTS_FULL` |
| `CalculationFormula` | [growth_formula](#prop-growth-formula) |  |
| `DiminishingReturns` | [growth_returns](#prop-growth-returns) |  |
| `float` | [growth_max](#prop-growth-max) | `0.0` |
| `GenerationLogic` | [pool_gen](#prop-pool-gen) | `GenerationLogic.REGEN` |
| `float` | [gen_rate](#prop-gen-rate) | `0.0` |
| `float` | [gen_value](#prop-gen-value) | `0.0` |
| `bool` | [is_protective_pool](#prop-is-protective-pool) | `false` |
| `float` | [maximum_absorption_per_hit](#prop-maximum-absorption-per-hit) | `0.0` |
| `bool` | [can_overfill](#prop-can-overfill) | `false` |
| `float` | [overfill_max](#prop-overfill-max) | `0.0` |
| `float` | [overfill_decay_rate](#prop-overfill-decay-rate) | `0.0` |
| `bool` | [can_go_negative](#prop-can-go-negative) | `false` |
| `float` | [negative_max](#prop-negative-max) | `0.0` |
| `bool` | [absorbs_damage](#prop-absorbs-damage) | `true` |
| `int` | [absorption_priority](#prop-absorption-priority) | `0` |
| `bool` | [receives_healing](#prop-receives-healing) | `true` |
| `Array[int]` | [absorbs_damage_types](#prop-absorbs-damage-types) | `[]` |

## Methods

| | |
|---|---|
| `Dictionary` | [calculate_generation](#method-calculate-generation)( `current_value: float, max_value: float, delta_time: float` ) |
| `String` | [get_generation_description](#method-get-generation-description)() |
| `bool` | [should_absorb_damage_type](#method-should-absorb-damage-type)( `damage_type: int` ) |
| `float` | [calculate_max_absorption](#method-calculate-max-absorption)( `incoming_damage: float, damage_type: int` ) |
| `Dictionary` | [calculate_actual_absorption](#method-calculate-actual-absorption)( `incoming_damage: float, damage_type: int, current_pool_value: float` ) |
| `Dictionary` | [calculate_healing_application](#method-calculate-healing-application)( `healing_amount: float, current_value: float, max_value: float, overfill_current: float = 0.0` ) |
| `Dictionary` | [calculate_overfill_decay](#method-calculate-overfill-decay)( `current_overfill: float, delta_time: float` ) |
| `float` | [apply_value_constraints](#method-apply-value-constraints)( `current_value: float` ) |
| `float` | [get_total_max_value](#method-get-total-max-value)() |
| `PoolInstance` | [create_instance](#method-create-instance)( `chorno_manager: ChronoManager, initial_current_value: float = -1.0` ) |
| `String` | [get_pool_description](#method-get-pool-description)() |
| `float` | [calculate_growth](#method-calculate-growth)( `level: int, context: FormulaContext = null` ) |

## Enumerations

### enum StartValue {#enum-startvalue}

- **STARTS_FULL** = `0`
- **STARTS_EMPTY** = `1`

### enum GenerationLogic {#enum-generationlogic}

- **REGEN** = `0`
- **DECAY** = `1`

## Property descriptions

*Basic Properties*

### Color color = Color.WHITE {#prop-color}

The color that stands for this in the interface

*Pool Properties*

### float default_max_value = 100.0 {#prop-default-max-value}

The maximum of the pool when an entity is created, before stats, growth and equipment change it

### float default_current_value = 100.0 {#prop-default-current-value}

The value the pool starts with when it does not start full

### StartValue start_value = StartValue.STARTS_FULL {#prop-start-value}

Does the pool start full or empty?

*Level Growth*

### CalculationFormula growth_formula {#prop-growth-formula}

How the maximum of the pool grows with the entity's level, from the same two slots an effect has, with the levels gained (level - 1) as the input: "+2 per level" is a Linear formula of 2. Empty (default) = the pool maximum does not grow. The growth adds to the pool's capacity (health per level)

### DiminishingReturns growth_returns {#prop-growth-returns}

Optional diminishing returns on the levels gained (growth that slows after level 40)

### float growth_max = 0.0 {#prop-growth-max}

Ceiling on the total growth (0 = none)

*Generation/Decay*

### GenerationLogic pool_gen = GenerationLogic.REGEN {#prop-pool-gen}

Does the pool regenerate (REGEN) or decay (DECAY) over time?

### float gen_rate = 0.0 {#prop-gen-rate}

Ticks per second (0 = disabled)

### float gen_value = 0.0 {#prop-gen-value}

Amount per tick

*Pool Behavior*

### bool is_protective_pool = false {#prop-is-protective-pool}

If true, absorption counts as blocking/mitigation, not actual damage

### float maximum_absorption_per_hit = 0.0 {#prop-maximum-absorption-per-hit}

The most damage the pool absorbs from one hit (0 = no limit). For shields with limited absorption

### bool can_overfill = false {#prop-can-overfill}

Can the pool go above its maximum (temporary shields, overhealing)?

### float overfill_max = 0.0 {#prop-overfill-max}

How far above the maximum the pool can go (0 = no limit)

### float overfill_decay_rate = 0.0 {#prop-overfill-decay-rate}

How much of the overfill is lost each second (0 = it does not decay)

### bool can_go_negative = false {#prop-can-go-negative}

Can the pool go below zero (debt, corruption)?

### float negative_max = 0.0 {#prop-negative-max}

How far below zero the pool can go (0 = no limit)

*Damage Layer*

### bool absorbs_damage = true {#prop-absorbs-damage}

Does this pool take part of the damage an entity suffers (health, a shield)? A pool in an entity's health pool list gets a damage layer from these settings; any pool can get a temporary one from an effect (a mana shield).

### int absorption_priority = 0 {#prop-absorption-priority}

Pools with a higher priority absorb first (a shield above health). Equal priorities: the pool added last absorbs first

### bool receives_healing = true {#prop-receives-healing}

Do heals fill this pool? Turn it off for a shield: over-healing must not fill it

*Damage Type Integration*

### Array[int] absorbs_damage_types = [] {#prop-absorbs-damage-types}

The damage types the pool absorbs. Empty = all of them

## Method descriptions

### Dictionary calculate_generation( current_value: float, max_value: float, delta_time: float ) {#method-calculate-generation}

*No description yet.*

### String get_generation_description() {#method-get-generation-description}

*No description yet.*

### bool should_absorb_damage_type( damage_type: int ) {#method-should-absorb-damage-type}

*No description yet.*

### float calculate_max_absorption( incoming_damage: float, damage_type: int ) {#method-calculate-max-absorption}

*No description yet.*

### Dictionary calculate_actual_absorption( incoming_damage: float, damage_type: int, current_pool_value: float ) {#method-calculate-actual-absorption}

*No description yet.*

### Dictionary calculate_healing_application( healing_amount: float, current_value: float, max_value: float, overfill_current: float = 0.0 ) {#method-calculate-healing-application}

*No description yet.*

### Dictionary calculate_overfill_decay( current_overfill: float, delta_time: float ) {#method-calculate-overfill-decay}

*No description yet.*

### float apply_value_constraints( current_value: float ) {#method-apply-value-constraints}

*No description yet.*

### float get_total_max_value() {#method-get-total-max-value}

*No description yet.*

### PoolInstance create_instance( chorno_manager: ChronoManager, initial_current_value: float = -1.0 ) {#method-create-instance}

*No description yet.*

### String get_pool_description() {#method-get-pool-description}

*No description yet.*

### float calculate_growth( level: int, context: FormulaContext = null ) {#method-calculate-growth}

The growth of the pool maximum at `level` (0 when it does not grow)

