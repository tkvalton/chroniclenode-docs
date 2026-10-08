<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# CombatReactions

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

Leech and reflection, implemented once. Both are reactions to a resolved hit (a DamageResult): they read one number of the hit (a DamageBasis), turn it into an amount, and apply it through the real pipelines (apply_healing / apply_damage) so healing-done and damage-done modifiers, the combat log and the result signals all apply. Used by the effect classes (DamageEffect's leech, DamageReflectEffect) and by the stat effects (PoolRestorationStatEffect, ReactiveDamageStatEffect). See docs/systems/entity-stats.md, section 18.1.

## Methods

| | |
|---|---|
| `float` | [percent_of_hit](#method-percent-of-hit)( `result: DamageResult, basis: DamageResult.DamageBasis, percent: float` ) *static* |
| `float` | [capped](#method-capped)( `amount: float, maximum: float` ) *static* |
| `bool` | [within_chain](#method-within-chain)( `result: DamageResult, max_chain: int` ) *static* |
| `bool` | [can_reflect](#method-can-reflect)( `result: DamageResult, bearer: Variant, max_chain: int` ) *static* |
| `HealingResult` | [leech](#method-leech)( `combat_manager: CombatManager, source: DamageResult, healer: Variant, beneficiary: Variant, amount: float, effect: EffectInstance = null` ) *static* |
| `DamageResult` | [reflect](#method-reflect)( `combat_manager: CombatManager, source: DamageResult, bearer: Variant, amount: float, damage_type: int, can_be_avoided: bool, effect: EffectInstance = null` ) *static* |

## Method descriptions

### float percent_of_hit( result: DamageResult, basis: DamageResult.DamageBasis, percent: float ) {#method-percent-of-hit}

`percent` (0-100) of the hit's number for `basis`

### float capped( amount: float, maximum: float ) {#method-capped}

Limits an amount to `maximum` (0 or less = no limit)

### bool within_chain( result: DamageResult, max_chain: int ) {#method-within-chain}

A reaction only goes so deep: the hit must be fewer than `max_chain` reactions into a chain

### bool can_reflect( result: DamageResult, bearer: Variant, max_chain: int ) {#method-can-reflect}

Can `bearer` reflect this hit back at its attacker? The hit must have landed, have a living attacker that is not the bearer, and be within the chain limit

### HealingResult leech( combat_manager: CombatManager, source: DamageResult, healer: Variant, beneficiary: Variant, amount: float, effect: EffectInstance = null ) {#method-leech}

Heals `beneficiary` by `amount`, with `healer` credited, because of `source` (the hit that was dealt or received). One reaction deeper than `source`. Returns the HealingResult, or null when there was nothing to do

### DamageResult reflect( combat_manager: CombatManager, source: DamageResult, bearer: Variant, amount: float, damage_type: int, can_be_avoided: bool, effect: EffectInstance = null ) {#method-reflect}

Damages the attacker of `source` by `amount` on behalf of `bearer` (who was hit). One reaction deeper than `source`. Returns the DamageResult, or null when there was nothing to do

