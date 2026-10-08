<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# CastRecord

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

What the effects of one cast (one use of an ability, or one root effect) did so far: the damage dealt, the healing done and the damage the shields of the targets absorbed, in total and per effect. Every effect instance of a cast shares one record, so an effect can react to what an earlier effect of the same cast did ("heal for half the damage this ability dealt"): see AmountSource, the cast kinds. An effect only sees what the effects before it did, so the order of the effects decides.

## Methods

| | |
|---|---|
| `void` | [add](#method-add)( `kind: Kind, effect_id: int, amount: float` ) |
| `void` | [add_damage_result](#method-add-damage-result)( `effect_id: int, result: DamageResult` ) |
| `void` | [add_healing_result](#method-add-healing-result)( `effect_id: int, result: HealingResult` ) |
| `float` | [get_total](#method-get-total)( `kind: Kind, effect_id: int = 0` ) |

## Enumerations

### enum Kind {#enum-kind}

What a number of a record measures

- **DAMAGE** = `0` - Damage that reached the targets after their defences (the number the pools took)
- **HEALING** = `1` - Healing that was applied
- **ABSORBED** = `2` - Damage the shields and protective pools of the targets absorbed

## Method descriptions

### void add( kind: Kind, effect_id: int, amount: float ) {#method-add}

Adds `amount` of `kind` done by the effect with this id

### void add_damage_result( effect_id: int, result: DamageResult ) {#method-add-damage-result}

Keeps the outcome of a damage hit: the damage taken and the damage the shields absorbed

### void add_healing_result( effect_id: int, result: HealingResult ) {#method-add-healing-result}

Keeps the outcome of a heal: the healing that was applied

### float get_total( kind: Kind, effect_id: int = 0 ) {#method-get-total}

The total of a kind, or of one effect (`effect_id` 0 = every effect of the cast)

