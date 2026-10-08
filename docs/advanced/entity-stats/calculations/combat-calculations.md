<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# CombatCalculations

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

Global combat calculations configuration Holds universal effect ordering for all calculation types

## Variables

| | | |
|---|---|---|
| `DamageDoneCalculation` | [damage_done_config](#var-damage-done-config) |  |
| `DamageTakenCalculation` | [damage_taken_config](#var-damage-taken-config) |  |
| `HealingDoneCalculation` | [healing_done_config](#var-healing-done-config) |  |
| `HealingTakenCalculation` | [healing_taken_config](#var-healing-taken-config) |  |

## Methods

| | |
|---|---|
| `void` | [build_universal_effect_orders](#method-build-universal-effect-orders)() |
| `Array` | [build_order](#method-build-order)( `stat_definitions: Array, calc_type: int` ) *static* |
| `Array` | [get_universal_effect_order](#method-get-universal-effect-order)( `calc_type: CalculationBase.CalculationType` ) |
| `void` | [invalidate_universal_cache](#method-invalidate-universal-cache)() |
| `Dictionary` | [get_effect_order_stats](#method-get-effect-order-stats)() |

## Variable descriptions

### DamageDoneCalculation damage_done_config {#var-damage-done-config}

Calculation configs

### DamageTakenCalculation damage_taken_config {#var-damage-taken-config}

*No description yet.*

### HealingDoneCalculation healing_done_config {#var-healing-done-config}

*No description yet.*

### HealingTakenCalculation healing_taken_config {#var-healing-taken-config}

*No description yet.*

## Method descriptions

### void build_universal_effect_orders() {#method-build-universal-effect-orders}

Build universal effect order from all stats in database Called once when game loads or when stats are modified in editor

### Array build_order( stat_definitions: Array, calc_type: int ) {#method-build-order}

The modifier effects of the given stat definitions that apply to one calculation type, in execution order: higher priority first; equal priorities fall back to stat id, then to the order the effects are authored in the stat, so the order never depends on how the engine happens to sort equal elements.

### Array get_universal_effect_order( calc_type: CalculationBase.CalculationType ) {#method-get-universal-effect-order}

Get universal effect order for a calculation type Automatically builds cache if not built yet

### void invalidate_universal_cache() {#method-invalidate-universal-cache}

Invalidate cache when stats change in editor Call this from the editor when stat definitions are modified

### Dictionary get_effect_order_stats() {#method-get-effect-order-stats}

Get statistics about effect orders (for debugging/editor)

