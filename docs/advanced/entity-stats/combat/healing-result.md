<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# HealingResult

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

Everything that happened to one heal, the healing counterpart of DamageResult.

## Description

Created by CombatManager.apply_healing, completed by the healer's calculation (healing done), the target's calculation (healing taken) and the pools. See docs/systems/entity-stats.md, section 17.

## Variables

| | | |
|---|---|---|
| `Variant` | [healer](#var-healer) | `null` |
| `Variant` | [target](#var-target) | `null` |
| `EffectInstance` | [effect](#var-effect) | `null` |
| `String` | [ability_name](#var-ability-name) | `""` |
| `int` | [only_pool_id](#var-only-pool-id) | `0` |
| `int` | [chain_depth](#var-chain-depth) | `0` |
| `float` | [raw](#var-raw) | `0.0` |
| `float` | [done](#var-done) | `0.0` |
| `float` | [taken](#var-taken) | `0.0` |
| `float` | [absorbed](#var-absorbed) | `0.0` |
| `float` | [applied](#var-applied) | `0.0` |
| `float` | [overheal](#var-overheal) | `0.0` |
| `Outcome` | [outcome](#var-outcome) | `Outcome.APPLIED` |
| `bool` | [target_revived](#var-target-revived) | `false` |
| `String` | [error](#var-error) | `""` |
| `Array[TriggerRecord]` | [triggers_done](#var-triggers-done) | `[]` |
| `Array[TriggerRecord]` | [triggers_taken](#var-triggers-taken) | `[]` |
| `Array[ModifierStep]` | [steps_done](#var-steps-done) | `[]` |
| `Array[ModifierStep]` | [steps_taken](#var-steps-taken) | `[]` |

## Methods

| | |
|---|---|
| `HealingResult` | [create](#method-create)( `p_healer: Variant, p_target: Variant, p_effect: EffectInstance, p_raw: float, p_chain_depth: int = 0` ) *static* |
| `HealingResult` | [failed](#method-failed)( `reason: String, p_healer: Variant = null, p_target: Variant = null` ) *static* |
| `void` | [add_trigger_done](#method-add-trigger-done)( `record: TriggerRecord` ) |
| `void` | [add_trigger_taken](#method-add-trigger-taken)( `record: TriggerRecord` ) |
| `void` | [add_step_done](#method-add-step-done)( `step: ModifierStep` ) |
| `void` | [add_step_taken](#method-add-step-taken)( `step: ModifierStep` ) |
| `void` | [set_applied](#method-set-applied)( `amount: float` ) |
| `bool` | [is_success](#method-is-success)() |
| `bool` | [was_crit](#method-was-crit)() |
| `int` | [next_chain_depth](#method-next-chain-depth)() |
| `String` | [log_text](#method-log-text)() |

## Enumerations

### enum Outcome {#enum-outcome}

- **APPLIED** = `0` - The heal was processed (it may have restored 0 on a full pool)
- **FAILED** = `1` - The pipeline could not process the heal (see `error`)

## Variable descriptions

### Variant healer = null {#var-healer}

*No description yet.*

### Variant target = null {#var-target}

*No description yet.*

### EffectInstance effect = null {#var-effect}

*No description yet.*

### String ability_name = "" {#var-ability-name}

Display name of the ability / effect

### int only_pool_id = 0 {#var-only-pool-id}

+1 for healing caused by reacting to a hit or a heal (leech), see DamageResult.chain_depth 0 = the heal fills every pool that receives healing; otherwise only this pool (the master pool, or a pool the effect chose)

### int chain_depth = 0 {#var-chain-depth}

*No description yet.*

### float raw = 0.0 {#var-raw}

The effect's own number

### float done = 0.0 {#var-done}

After the healer's modifiers (healing-done phase)

### float taken = 0.0 {#var-taken}

After the target's modifiers (healing-taken phase), before the pools

### float absorbed = 0.0 {#var-absorbed}

What a heal absorb (HealAbsorbEffect) on the target soaked up before the pools: `taken` is what is left

### float applied = 0.0 {#var-applied}

What the pools actually accepted

### float overheal = 0.0 {#var-overheal}

What did not fit (taken - applied)

### Outcome outcome = Outcome.APPLIED {#var-outcome}

*No description yet.*

### bool target_revived = false {#var-target-revived}

*No description yet.*

### String error = "" {#var-error}

*No description yet.*

### Array[TriggerRecord] triggers_done = [] {#var-triggers-done}

*No description yet.*

### Array[TriggerRecord] triggers_taken = [] {#var-triggers-taken}

*No description yet.*

### Array[ModifierStep] steps_done = [] {#var-steps-done}

*No description yet.*

### Array[ModifierStep] steps_taken = [] {#var-steps-taken}

*No description yet.*

## Method descriptions

### HealingResult create( p_healer: Variant, p_target: Variant, p_effect: EffectInstance, p_raw: float, p_chain_depth: int = 0 ) {#method-create}

A new result for a heal of `p_raw` from the healer to the target. `done` and `taken` start at `p_raw` and the phases change them

### HealingResult failed( reason: String, p_healer: Variant = null, p_target: Variant = null ) {#method-failed}

A result that stands for a heal that could not be processed, with the reason in `error`

### void add_trigger_done( record: TriggerRecord ) {#method-add-trigger-done}

Keeps a trigger that fired in the healer's phase

### void add_trigger_taken( record: TriggerRecord ) {#method-add-trigger-taken}

Keeps a trigger that fired in the target's phase

### void add_step_done( step: ModifierStep ) {#method-add-step-done}

Keeps a modifier that changed the number in the healer's phase

### void add_step_taken( step: ModifierStep ) {#method-add-step-taken}

Keeps a modifier that changed the number in the target's phase

### void set_applied( amount: float ) {#method-set-applied}

Records what the pools accepted and derives the overheal

### bool is_success() {#method-is-success}

False for a result made by `failed`

### bool was_crit() {#method-was-crit}

True when a boost trigger (critical strike) fired in the healer's phase

### int next_chain_depth() {#method-next-chain-depth}

The chain depth of a reaction to this heal: one deeper

### String log_text() {#method-log-text}

The line for the combat log: who healed whom for how much, with the overheal, the amount absorbed and a revive

