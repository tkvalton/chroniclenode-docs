<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# StatInstance

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

StatInstance with effect application logic removed for cached query system

## Variables

| | | |
|---|---|---|
| `StatDefinition  # StatDefinition with stat_effects array` | [definition](#var-definition) |  |
| `float` | [base](#var-base) | `0.0` |
| `float` | [bonus](#var-bonus) | `0.0` |
| `float` | [growth](#var-growth) | `0.0` |
| `float` | [multiplier](#var-multiplier) | `1.0` |
| `bool` | [is_active](#var-is-active) | `true  # Simple enable/disable flag` |
| `bool` | [in_combat](#var-in-combat) | `false  # Combat state for context-aware effects` |

## Methods

| | |
|---|---|
| `void` | [setup_from_definition](#method-setup-from-definition)( `stat_def: Resource, initial_base: float = -1.0` ) |
| `void` | [set_active](#method-set-active)( `active: bool` ) |
| `void` | [update_combat_state](#method-update-combat-state)( `p_in_combat: bool` ) |
| `void` | [set_base](#method-set-base)( `new_base: float` ) |
| `void` | [modify_bonus](#method-modify-bonus)( `amount: float` ) |
| `void` | [set_growth](#method-set-growth)( `new_growth: float` ) |
| `void` | [set_bonus](#method-set-bonus)( `new_bonus: float` ) |
| `void` | [modify_multiplier](#method-modify-multiplier)( `amount: float` ) |
| `void` | [set_multiplier](#method-set-multiplier)( `new_multiplier: float` ) |
| `float` | [get_total](#method-get-total)() |
| `Array[StatEffect]` | [get_effects_by_type](#method-get-effects-by-type)( `effect_type: StatEffect.EffectType` ) |
| `Array[StatEffect]` | [get_all_effects](#method-get-all-effects)() |
| `Array` | [get_pool_restoration_effects](#method-get-pool-restoration-effects)( `trigger_type: String` ) |
| `Array` | [get_reactive_damage_effects](#method-get-reactive-damage-effects)() |
| `String` | [get_display_name](#method-get-display-name)() |
| `String` | [get_tooltip_text](#method-get-tooltip-text)() |
| `Color` | [get_display_color](#method-get-display-color)() |
| `bool` | [is_valid](#method-is-valid)() |
| `void` | [cleanup](#method-cleanup)() |

## Signals

### stat_changed( stat_id: int, old_value: float, new_value: float ) {#signal-stat-changed}

## Variable descriptions

### StatDefinition  # StatDefinition with stat_effects array definition {#var-definition}

*No description yet.*

### float base = 0.0 {#var-base}

*No description yet.*

### float bonus = 0.0 {#var-bonus}

*No description yet.*

### float growth = 0.0 {#var-growth}

Level growth (derived from the entity level by StatsComponent.set_level, never saved): total = (base + growth + bonus) x multiplier

### float multiplier = 1.0 {#var-multiplier}

*No description yet.*

### bool is_active = true  # Simple enable/disable flag {#var-is-active}

*No description yet.*

### bool in_combat = false  # Combat state for context-aware effects {#var-in-combat}

*No description yet.*

## Method descriptions

### void setup_from_definition( stat_def: Resource, initial_base: float = -1.0 ) {#method-setup-from-definition}

Sets the stat up from its definition: the base is `initial_base` (or the definition's default value), the bonus and growth are 0, the multiplier is 1, and the stat is active

### void set_active( active: bool ) {#method-set-active}

Switches the stat on or off. An inactive stat is worth 0 (the Set Stat Active State effect uses this)

### void update_combat_state( p_in_combat: bool ) {#method-update-combat-state}

Tells the stat whether the entity is in combat, and recalculates when one of its effects depends on it

### void set_base( new_base: float ) {#method-set-base}

Sets the base value (the value at level 1, before growth, bonuses and the multiplier)

### void modify_bonus( amount: float ) {#method-modify-bonus}

Adds `amount` to the bonus (negative to take it away). Equipment, effects and the multiplier effects of other stats work through the bonus

### void set_growth( new_growth: float ) {#method-set-growth}

Sets the growth: what the stat has gained from the entity's level. Set by the stats component when the level changes

### void set_bonus( new_bonus: float ) {#method-set-bonus}

Sets the bonus outright

### void modify_multiplier( amount: float ) {#method-modify-multiplier}

Adds `amount` to the multiplier (it starts at 1.0)

### void set_multiplier( new_multiplier: float ) {#method-set-multiplier}

Sets the multiplier outright

### float get_total() {#method-get-total}

The value of the stat: `(base + growth + bonus) x multiplier`, kept between the minimum and the maximum of the definition and rounded as it says. 0 while the stat is inactive

### Array[StatEffect] get_effects_by_type( effect_type: StatEffect.EffectType ) {#method-get-effects-by-type}

Get all effects of a specific type from this stat's definition

### Array[StatEffect] get_all_effects() {#method-get-all-effects}

Get all enabled effects from this stat's definition

### Array get_pool_restoration_effects( trigger_type: String ) {#method-get-pool-restoration-effects}

Get pool restoration effects that match a trigger type

### Array get_reactive_damage_effects() {#method-get-reactive-damage-effects}

Get the reactive damage effects of this stat (damage reflection); which hits trigger them is up to each effect (matches_hit)

### String get_display_name() {#method-get-display-name}

The name of the stat for the interface

### String get_tooltip_text() {#method-get-tooltip-text}

A tooltip that shows the total and where it comes from (base, growth, bonus, multiplier)

### Color get_display_color() {#method-get-display-color}

The color of the value in the interface: gray when inactive, green with a positive bonus, red with a negative one, white otherwise

### bool is_valid() {#method-is-valid}

Does the instance have a definition with an id?

### void cleanup() {#method-cleanup}

Switches the stat off. Called when the entity is freed

