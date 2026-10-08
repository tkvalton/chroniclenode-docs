<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# DamageTypeDefinition

**Inherits:** [DatabaseResource](/advanced/data-and-database/database-classes/database-resource) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

A type of damage that can be dealt and resisted: Physical, Fire, Frost, Poison ...

## Description

A damage type is a label, plus one optional job: it can **apply effects** to whoever it hurts ("fire always burns", "poison always poisons"). When a hit of this type lands, `apply_hit_effects` starts each effect in `applied_effects` on the target, with the attacker as the originator. See docs/systems/entity-stats.md, section 28.

## Properties

| | | |
|---|---|---|
| `Color` | [color](#prop-color) | `Color.WHITE` |
| `Array[int]` | [applied_effects](#prop-applied-effects) | `[]` |
| `float` | [apply_chance](#prop-apply-chance) | `100.0` |
| `bool` | [apply_on_periodic_hits](#prop-apply-on-periodic-hits) | `false` |

## Methods

| | |
|---|---|
| `int` | [get_id](#method-get-id)() |
| `bool` | [applies_effects](#method-applies-effects)() |
| `Array[EffectInstance]` | [apply_hit_effects](#method-apply-hit-effects)( `combat_manager: CombatManager, result: DamageResult` ) |

## Property descriptions

### Color color = Color.WHITE {#prop-color}

The color that stands for this in the interface

*Effects Applied On Hit*

### Array[int] applied_effects = [] {#prop-applied-effects}

The effects (Effect ids) put on the target whenever a hit of this damage type lands: a burn for Fire, a poison for Poison. Empty (default) = the damage type applies nothing. Each effect follows its own stacking rules, so a burn that refreshes stays one burn however often it is hit

### float apply_chance = 100.0 {#prop-apply-chance}

The chance (0 to 100) that the effects are applied when a hit lands. 100 = always

### bool apply_on_periodic_hits = false {#prop-apply-on-periodic-hits}

Do the ticks of a damage-over-time effect apply them too? Off by default: a burn that burns would otherwise re-apply itself on every tick. The effects in `applied_effects` (and the effects inside them) never re-apply them either way

## Method descriptions

### int get_id() {#method-get-id}

*No description yet.*

### bool applies_effects() {#method-applies-effects}

Does the damage type apply effects?

### Array[EffectInstance] apply_hit_effects( combat_manager: CombatManager, result: DamageResult ) {#method-apply-hit-effects}

A hit of this damage type has landed (`result` is complete): puts the effects on the target. Nothing happens for a hit that was avoided, immune, redirected or reduced to nothing, for a target that is not an entity or object, or for a hit caused by one of this damage type's own effects. Returns the instances that were started (an instant effect has finished by then)

