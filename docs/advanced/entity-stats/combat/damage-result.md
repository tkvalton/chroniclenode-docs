<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# DamageResult

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

Everything that happened to one hit, from the effect's number to the health that was lost.

## Description

Created by CombatManager.apply_damage, completed by each phase (attacker's calculation, defender's calculation, pools) and then handed to every consumer: the combat log, damage numbers and animations, threat, leech, damage reflection, proc effects and event triggers. Replaces the untyped dictionaries that used to be passed between the layers. See docs/systems/entity-stats.md, section 17.

## Variables

| | | |
|---|---|---|
| `Variant` | [attacker](#var-attacker) | `null` |
| `Variant` | [target](#var-target) | `null` |
| `EffectInstance` | [effect](#var-effect) | `null` |
| `String` | [ability_name](#var-ability-name) | `""` |
| `int` | [damage_type](#var-damage-type) | `0` |
| `bool` | [can_be_avoided](#var-can-be-avoided) | `true` |
| `int` | [chain_depth](#var-chain-depth) | `0` |
| `float` | [raw](#var-raw) | `0.0` |
| `float` | [done](#var-done) | `0.0` |
| `float` | [taken](#var-taken) | `0.0` |
| `float` | [redirected](#var-redirected) | `0.0` |
| `float` | [absorbed](#var-absorbed) | `0.0` |
| `float` | [health_damage](#var-health-damage) | `0.0` |
| `Outcome` | [outcome](#var-outcome) | `Outcome.HIT` |
| `String` | [avoid_kind](#var-avoid-kind) | `""` |
| `bool` | [target_died](#var-target-died) | `false` |
| `bool` | [target_was_dead](#var-target-was-dead) | `false` |
| `int` | [immunity_id](#var-immunity-id) | `0` |
| `String` | [error](#var-error) | `""` |
| `Array[TriggerRecord]` | [triggers_done](#var-triggers-done) | `[]` |
| `Array[TriggerRecord]` | [triggers_taken](#var-triggers-taken) | `[]` |
| `Array[ModifierStep]` | [steps_done](#var-steps-done) | `[]` |
| `Array[ModifierStep]` | [steps_taken](#var-steps-taken) | `[]` |

## Methods

| | |
|---|---|
| `DamageResult` | [create](#method-create)( `p_attacker: Variant, p_target: Variant, p_effect: EffectInstance, p_damage_type: int, p_raw: float, p_can_be_avoided: bool = true, p_chain_depth: int = 0` ) *static* |
| `DamageResult` | [failed](#method-failed)( `reason: String, p_attacker: Variant = null, p_target: Variant = null` ) *static* |
| `void` | [add_trigger_done](#method-add-trigger-done)( `record: TriggerRecord` ) |
| `void` | [add_trigger_taken](#method-add-trigger-taken)( `record: TriggerRecord` ) |
| `void` | [add_step_done](#method-add-step-done)( `step: ModifierStep` ) |
| `void` | [add_step_taken](#method-add-step-taken)( `step: ModifierStep` ) |
| `void` | [mark_avoided](#method-mark-avoided)( `record: TriggerRecord` ) |
| `void` | [mark_immune](#method-mark-immune)( `p_immunity_id: int = 0` ) |
| `void` | [mark_negated](#method-mark-negated)() |
| `void` | [mark_target_dead](#method-mark-target-dead)() |
| `void` | [mark_fully_redirected](#method-mark-fully-redirected)( `amount: float` ) |
| `int` | [next_chain_depth](#method-next-chain-depth)() |
| `bool` | [is_success](#method-is-success)() |
| `bool` | [is_hit](#method-is-hit)() |
| `bool` | [was_avoided](#method-was-avoided)() |
| `bool` | [was_crit](#method-was-crit)() |
| `bool` | [has_tag](#method-has-tag)( `tag: String` ) |
| `float` | [blocked_amount](#method-blocked-amount)( `tag: String` ) |
| `float` | [mitigated_amount](#method-mitigated-amount)() |
| `float` | [get_amount](#method-get-amount)( `basis: DamageBasis` ) |
| `TriggerRecord` | [find_avoid_record](#method-find-avoid-record)() |
| `String` | [floating_text](#method-floating-text)() |
| `String` | [log_text](#method-log-text)() |
| `String` | [format_phrase](#method-format-phrase)( `template: String` ) |
| `String` | [name_of](#method-name-of)( `unit: Variant` ) *static* |
| `float` | [tag_magnitude](#method-tag-magnitude)( `tag: String` ) |

## Enumerations

### enum Outcome {#enum-outcome}

How the hit ended

- **HIT** = `0` - The hit landed (possibly reduced to 0 by modifiers: that is still a hit)
- **AVOIDED** = `1` - An avoid trigger (dodge, parry) negated the hit
- **IMMUNE** = `2` - The target was immune to this damage type
- **FULLY_REDIRECTED** = `3` - All of the damage was redirected to someone else
- **TARGET_DEAD** = `4` - The target was already dead: nothing happened
- **FAILED** = `5` - The pipeline could not process the hit (see `error`)
- **NEGATED** = `6` - Modifiers reduced the hit to nothing and the project says that is not a hit (GameplayConfig)

### enum DamageBasis {#enum-damagebasis}

Which number a consumer wants (threat, leech, damage reflection ...): a dev choice, see `get_amount`

- **RAW** = `0` - The effect's own number, before anything
- **AFTER_DONE** = `1` - After the attacker's modifiers
- **AFTER_TAKEN** = `2` - After the defender's modifiers, before pools (includes what shields absorbed)
- **HEALTH_ONLY** = `3` - Only what actually reached health

## Variable descriptions

### Variant attacker = null {#var-attacker}

*No description yet.*

### Variant target = null {#var-target}

*No description yet.*

### EffectInstance effect = null {#var-effect}

*No description yet.*

### String ability_name = "" {#var-ability-name}

Display name of the ability / effect (captured so the log does not depend on the effect staying alive)

### int damage_type = 0 {#var-damage-type}

*No description yet.*

### bool can_be_avoided = true {#var-can-be-avoided}

*No description yet.*

### int chain_depth = 0 {#var-chain-depth}

0 for a normal hit, +1 for damage caused by reacting to a hit (damage reflection, reactive damage). See max_reflect_chain

### float raw = 0.0 {#var-raw}

The effect's own number

### float done = 0.0 {#var-done}

After the attacker's modifiers (damage-done phase)

### float taken = 0.0 {#var-taken}

After redirection and the defender's modifiers, before pools (damage-taken phase)

### float redirected = 0.0 {#var-redirected}

Sent to another entity by redirection effects

### float absorbed = 0.0 {#var-absorbed}

Absorbed by protective pools (shields)

### float health_damage = 0.0 {#var-health-damage}

What actually reached health

### Outcome outcome = Outcome.HIT {#var-outcome}

*No description yet.*

### String avoid_kind = "" {#var-avoid-kind}

The tag of the avoid trigger that fired (only for Outcome.AVOIDED)

### bool target_died = false {#var-target-died}

*No description yet.*

### bool target_was_dead = false {#var-target-was-dead}

*No description yet.*

### int immunity_id = 0 {#var-immunity-id}

Why the pipeline failed (only for Outcome.FAILED) The immunity that blocked the hit (only for Outcome.IMMUNE)

### String error = "" {#var-error}

*No description yet.*

### Array[TriggerRecord] triggers_done = [] {#var-triggers-done}

Triggers that fired in the attacker's phase (critical strike ...)

### Array[TriggerRecord] triggers_taken = [] {#var-triggers-taken}

Triggers that fired in the defender's phase (dodge, block ...)

### Array[ModifierStep] steps_done = [] {#var-steps-done}

Modifiers that changed the number in the attacker's phase, in the order they ran

### Array[ModifierStep] steps_taken = [] {#var-steps-taken}

Modifiers that changed the number in the defender's phase, in the order they ran

## Method descriptions

### DamageResult create( p_attacker: Variant, p_target: Variant, p_effect: EffectInstance, p_damage_type: int, p_raw: float, p_can_be_avoided: bool = true, p_chain_depth: int = 0 ) {#method-create}

A new result for a hit of `p_raw` from the attacker to the target. `done` and `taken` start at `p_raw` and the phases change them

### DamageResult failed( reason: String, p_attacker: Variant = null, p_target: Variant = null ) {#method-failed}

A result for a hit the pipeline could not process. Consumers must check `is_success()`.

### void add_trigger_done( record: TriggerRecord ) {#method-add-trigger-done}

Keeps a trigger that fired in the attacker's phase

### void add_trigger_taken( record: TriggerRecord ) {#method-add-trigger-taken}

Keeps a trigger that fired in the target's phase

### void add_step_done( step: ModifierStep ) {#method-add-step-done}

Keeps a modifier that changed the number in the attacker's phase

### void add_step_taken( step: ModifierStep ) {#method-add-step-taken}

Keeps a modifier that changed the number in the target's phase

### void mark_avoided( record: TriggerRecord ) {#method-mark-avoided}

An avoid trigger negated the hit: nothing after this point reaches the pools

### void mark_immune( p_immunity_id: int = 0 ) {#method-mark-immune}

Ends the hit as IMMUNE: nothing reaches the pools

### void mark_negated() {#method-mark-negated}

The defender's modifiers reduced the hit to nothing and the project does not count that as a hit

### void mark_target_dead() {#method-mark-target-dead}

The target was already dead: the hit does nothing

### void mark_fully_redirected( amount: float ) {#method-mark-fully-redirected}

Ends the hit as FULLY_REDIRECTED: a guardian took all of it, nothing reaches the pools

### int next_chain_depth() {#method-next-chain-depth}

The chain depth a hit caused by reacting to this one must carry

### bool is_success() {#method-is-success}

False for a result made by `failed`

### bool is_hit() {#method-is-hit}

Did the hit land (outcome HIT)? An avoided, immune or redirected hit did not

### bool was_avoided() {#method-was-avoided}

Did an avoid trigger (dodge) negate the hit?

### bool was_crit() {#method-was-crit}

True when a boost trigger (critical strike) fired in the attacker's phase

### bool has_tag( tag: String ) {#method-has-tag}

True when a trigger with this tag fired in either phase

### float blocked_amount( tag: String ) {#method-blocked-amount}

How much the defender's modifiers that required this trigger tag took off (the log's "blocked 10")

### float mitigated_amount() {#method-mitigated-amount}

How much the defender's side removed from the hit (redirection excluded)

### float get_amount( basis: DamageBasis ) {#method-get-amount}

The number a consumer should use, chosen by the dev (see DamageBasis)

### TriggerRecord find_avoid_record() {#method-find-avoid-record}

The trigger record of the avoid trigger that negated this hit (null when there is none)

### String floating_text() {#method-floating-text}

The short text that floats over the target: the number for a hit, the trigger's own message (else its tag) for an avoided hit, "Immune", "No damage". Empty when nothing should show

### String log_text() {#method-log-text}

One combat log line for the hit, built from the trigger phrases and the amounts

### String format_phrase( template: String ) {#method-format-phrase}

Fills {attacker} {target} {ability} {damage} in a phrase template

### String name_of( unit: Variant ) {#method-name-of}

A name for the log and the interface: the display name, else the node name, else "Unknown"

### float tag_magnitude( tag: String ) {#method-tag-magnitude}

The magnitude of the first trigger with this tag in either phase (0 when the tag did not fire)

