<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# PoolInstance

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

One pool (health, mana, rage, a shield) on one entity: the current value, the capacity bonus, the overfill, and the regeneration or decay timers.

## Description

The definition (PoolDefinition) is shared; the instance holds what is particular to the entity. The maximum is `base_max_value` plus the capacity bonus; overfill is on top of it. Raising the capacity can raise the current value with it, by the project's capacity rule (GameplayConfig, Pools); lowering it only caps the current value.

## Variables

| | | |
|---|---|---|
| `PoolDefinition` | [definition](#var-definition) |  |
| `float` | [current_value](#var-current-value) | `0.0` |
| `float` | [base_max_value](#var-base-max-value) | `0.0  # Store the actual base max separately!` |
| `float` | [max_value](#var-max-value) | `0.0       # This becomes a computed property (base + bonu...` |
| `float` | [overfill_current](#var-overfill-current) | `0.0` |
| `Entity` | [entity](#var-entity) |  |
| `int` | [pool_gen](#var-pool-gen) | `0  # GenerationLogic enum value` |
| `float` | [gen_rate](#var-gen-rate) | `0.0  # Ticks per second` |
| `float` | [gen_value](#var-gen-value) | `0.0  # Amount per tick` |
| `bool` | [regeneration_blocked](#var-regeneration-blocked) | `false` |
| `ChronoManager` | [chrono_manager](#var-chrono-manager) |  |

## Methods

| | |
|---|---|
| `void` | [setup_from_definition](#method-setup-from-definition)( `p_chrono_manager: ChronoManager, pool_def: PoolDefinition, initial_current: float = -1.0` ) |
| `void` | [set_entity](#method-set-entity)( `p_entity: Entity` ) |
| `void` | [set_capacity_bonus](#method-set-capacity-bonus)( `new_bonus: float, rule: int = -1` ) |
| `void` | [add_capacity_bonus](#method-add-capacity-bonus)( `amount: float` ) |
| `float` | [get_capacity_bonus](#method-get-capacity-bonus)() |
| `float` | [absorb_damage](#method-absorb-damage)( `incoming_damage: float, damage_type: int` ) |
| `float` | [add_value](#method-add-value)( `amount: float` ) |
| `void` | [tick](#method-tick)( `delta: float` ) |
| `void` | [set_generation_properties](#method-set-generation-properties)( `new_gen_logic: int, new_gen_rate: float, new_gen_value: float` ) |
| `String` | [get_generation_description](#method-get-generation-description)() |
| `float` | [get_total_current_value](#method-get-total-current-value)() |
| `float` | [get_total_max_value](#method-get-total-max-value)() |
| `float` | [get_effective_max_value](#method-get-effective-max-value)() |
| `float` | [get_base_max_value](#method-get-base-max-value)() |
| `float` | [get_fill_percentage](#method-get-fill-percentage)() |
| `float` | [get_normal_fill_percentage](#method-get-normal-fill-percentage)() |
| `bool` | [is_empty](#method-is-empty)() |
| `bool` | [is_full](#method-is-full)() |
| `bool` | [has_overfill](#method-has-overfill)() |
| `bool` | [can_absorb_damage](#method-can-absorb-damage)() |
| `void` | [set_current_value](#method-set-current-value)( `new_value: float` ) |
| `void` | [set_max_value](#method-set-max-value)( `new_max: float` ) |
| `String` | [get_display_string](#method-get-display-string)() |
| `void` | [cleanup](#method-cleanup)() |
| `Dictionary` | [to_save_data](#method-to-save-data)() |
| `void` | [from_save_data](#method-from-save-data)( `data: Dictionary` ) |
| `bool` | [is_valid](#method-is-valid)() |

## Signals

### value_changed( new_current: float, new_max: float ) {#signal-value-changed}

### overfill_changed( new_overfill: float ) {#signal-overfill-changed}

### absorbed_damage( damage_absorbed: float, damage_type: int ) {#signal-absorbed-damage}

### pool_depleted() {#signal-pool-depleted}

### pool_restored() {#signal-pool-restored}

### pool_capacity_increased( amount: float ) {#signal-pool-capacity-increased}

### pool_healed( amount: float, source: String ) {#signal-pool-healed}

## Variable descriptions

### PoolDefinition definition {#var-definition}

*No description yet.*

### float current_value = 0.0 {#var-current-value}

*No description yet.*

### float base_max_value = 0.0  # Store the actual base max separately! {#var-base-max-value}

*No description yet.*

### float max_value = 0.0       # This becomes a computed property (base + bonuses {#var-max-value}

*No description yet.*

### float overfill_current = 0.0 {#var-overfill-current}

*No description yet.*

### Entity entity {#var-entity}

*No description yet.*

### int pool_gen = 0  # GenerationLogic enum value {#var-pool-gen}

*No description yet.*

### float gen_rate = 0.0  # Ticks per second {#var-gen-rate}

*No description yet.*

### float gen_value = 0.0  # Amount per tick {#var-gen-value}

*No description yet.*

### bool regeneration_blocked = false {#var-regeneration-blocked}

Set by the stats component while its owner is dead

### ChronoManager chrono_manager {#var-chrono-manager}

*No description yet.*

## Method descriptions

### void setup_from_definition( p_chrono_manager: ChronoManager, pool_def: PoolDefinition, initial_current: float = -1.0 ) {#method-setup-from-definition}

Sets the pool up from its definition: the maximum, the generation settings (copied, so effects can change them for this entity) and the starting value (`initial_current`, or by the definition's start value)

### void set_entity( p_entity: Entity ) {#method-set-entity}

Tells the pool which entity it belongs to

### void set_capacity_bonus( new_bonus: float, rule: int = -1 ) {#method-set-capacity-bonus}

`rule` is a GameplayConfig.CapacityRule to use instead of the project's capacity change rule (-1: the project's); the stats component passes the level-up rule while an entity levels up

### void add_capacity_bonus( amount: float ) {#method-add-capacity-bonus}

Adds `amount` to the capacity bonus (negative to take it away)

### float get_capacity_bonus() {#method-get-capacity-bonus}

The capacity bonus: what stats, growth and equipment add to the maximum

### float absorb_damage( incoming_damage: float, damage_type: int ) {#method-absorb-damage}

Takes the part of `incoming_damage` the pool absorbs (overfill first, by the definition's per-hit cap and damage types) and returns how much that was. Emits `pool_depleted` when the pool is empty afterwards

### float add_value( amount: float ) {#method-add-value}

A positive amount heals the pool (fills the normal value, then the overfill) and returns what was added; a negative amount consumes that much and returns it

### void tick( delta: float ) {#method-tick}

Called by the chrono manager's pool tick with the real time since the last tick: runs the ticks of regeneration / decay (`gen_rate` per second) and of overfill decay (once a second) that fell in that time

### void set_generation_properties( new_gen_logic: int, new_gen_rate: float, new_gen_value: float ) {#method-set-generation-properties}

Changes how the pool regenerates or decays at runtime: the logic, the ticks per second and the amount per tick

### String get_generation_description() {#method-get-generation-description}

A line that says how the pool regenerates or decays, for tooltips

### float get_total_current_value() {#method-get-total-current-value}

The current value including the overfill

### float get_total_max_value() {#method-get-total-max-value}

The effective maximum plus the overfill capacity of the definition

### float get_effective_max_value() {#method-get-effective-max-value}

The maximum including the capacity bonus: the real size of the pool

### float get_base_max_value() {#method-get-base-max-value}

The maximum without the capacity bonus

### float get_fill_percentage() {#method-get-fill-percentage}

How full the pool is, overfill included, as a fraction of the effective maximum

### float get_normal_fill_percentage() {#method-get-normal-fill-percentage}

How full the pool is, without the overfill, as a fraction of the effective maximum

### bool is_empty() {#method-is-empty}

True when nothing is left, overfill included

### bool is_full() {#method-is-full}

True when the normal value has reached the effective maximum

### bool has_overfill() {#method-has-overfill}

True while there is overfill

### bool can_absorb_damage() {#method-can-absorb-damage}

True while the pool has anything to absorb damage with

### void set_current_value( new_value: float ) {#method-set-current-value}

Sets the current value outright, kept inside the limits of the definition. Emits `value_changed`, and `pool_restored` when it rises from empty or `pool_depleted` when it falls to empty

### void set_max_value( new_max: float ) {#method-set-max-value}

Sets the base maximum outright (the capacity bonus is added on top) and caps the current value

### String get_display_string() {#method-get-display-string}

The pool as text for the interface: `current/max`, with `(+overfill)` when there is overfill

### void cleanup() {#method-cleanup}

Stops the regeneration and decay timers. Called when the pool is removed

### Dictionary to_save_data() {#method-to-save-data}

The values a save keeps: the pool id, the current value and the overfill. Everything else is rebuilt on load

### void from_save_data( data: Dictionary ) {#method-from-save-data}

Restores the values of `to_save_data`, never above the maximum the pool has right now

### bool is_valid() {#method-is-valid}

Does the instance have a definition with an id?

