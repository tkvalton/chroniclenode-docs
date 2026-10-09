<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# StatsComponent

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

The numbers of one entity: its stats, pools, immunities and status effect tracking, and the entry point of the damage and healing pipeline.

## Description

Every Entity owns one (`entity.components.stats()`), built from a StatsData. It holds a StatInstance for every stat in the database (the core stats included), a PoolInstance for each of the entity's pools, the damage layers that decide which pool takes damage in which order, the ImmunityComponent and the StatusEffectComponent. It never talks to the interface directly: it emits signals, which the EntityComponentMediator forwards to the entity and the event system. `take_damage` and `take_healing` complete a DamageResult or HealingResult: the target's calculation phase, the pools, the death check.

## Variables

| | | |
|---|---|---|
| `CombatManager` | [combat_manager](#var-combat-manager) |  |
| `ChronoManager` | [chrono_manager](#var-chrono-manager) |  |
| `Dictionary` | [stat_instances](#var-stat-instances) | `{}` |
| `Array[EffectInstance]` | [active_redirection_effects](#var-active-redirection-effects) | `[]` |
| `Array[PoolInstance]` | [health_pools](#var-health-pools) | `[]` |
| `Dictionary` | [resource_pools](#var-resource-pools) | `{}` |
| `Dictionary:` | [core_stats](#var-core-stats) |  |
| `ImmunityComponent` | [immunity_component](#var-immunity-component) |  |
| `StatusEffectComponent` | [status_effect_component](#var-status-effect-component) |  |
| `int` | [master_pool_id](#var-master-pool-id) | `0` |
| `bool` | [is_dead](#var-is-dead) | `false` |
| `bool` | [current_combat_state](#var-current-combat-state) | `false` |
| `Variant` | [owner_entity](#var-owner-entity) | `null` |
| `int` | [level](#var-level) | `1` |
| `Array[int]` | [multiplier_stats](#var-multiplier-stats) | `[]  # Cache of multiplier stat names` |
| `Dictionary` | [multiplier_bonuses](#var-multiplier-bonuses) | `{}  # Track which stats have multiplier bonuses applied` |
| `int` | [default_growth_profile_id](#var-default-growth-profile-id) | `0` |
| `Array[DamageLayer]` | [damage_layers](#var-damage-layers) | `[]` |
| `Array[Dictionary]` | [heal_absorbs](#var-heal-absorbs) | `[]` |
| `Array[EffectInstance]` | [done_boosts](#var-done-boosts) | `[]` |

## Methods

| | |
|---|---|
| `void` | [setup_from_stats_data](#method-setup-from-stats-data)( `stats_data: StatsData` ) |
| `void` | [set_level](#method-set-level)( `new_level: int` ) |
| `float` | [growth_of](#method-growth-of)( `definition: Resource, context: FormulaContext = null` ) |
| `void` | [refresh_conditional_effects](#method-refresh-conditional-effects)() |
| `float` | [modify_gain](#method-modify-gain)( `channel: String, amount: float` ) |
| `int` | [modify_gain_int](#method-modify-gain-int)( `channel: String, amount: int, probabilistic: bool = false` ) |
| `Dictionary` | [apply_status_effect](#method-apply-status-effect)( `status_effect_id: int, base_duration: float, source_entity: Variant = null, effect: EffectInstance = null` ) |
| `bool` | [is_immune_to_status_effect](#method-is-immune-to-status-effect)( `status_effect_id: int` ) |
| `bool` | [is_immune_to_damage_type](#method-is-immune-to-damage-type)( `damage_type: int` ) |
| `bool` | [is_immune_to_school_type](#method-is-immune-to-school-type)( `school_id: int` ) |
| `bool` | [can_apply_school_effect](#method-can-apply-school-effect)( `school_id: int, source_entity: Entity = null, effect: EffectInstance = null` ) |
| `bool` | [activate_immunity](#method-activate-immunity)( `immunity_id: int, duration: float = -1.0` ) |
| `bool` | [deactivate_immunity](#method-deactivate-immunity)( `immunity_id: int` ) |
| `void` | [clear_all_immunities](#method-clear-all-immunities)() |
| `bool` | [has_weapon_equipped](#method-has-weapon-equipped)() |
| `float` | [get_weapon_damage](#method-get-weapon-damage)() |
| `float` | [roll_weapon_damage](#method-roll-weapon-damage)() |
| `float` | [get_swing_timer](#method-get-swing-timer)() |
| `float` | [get_attacks_per_second](#method-get-attacks-per-second)() |
| `float` | [get_damage_per_second](#method-get-damage-per-second)() |
| `Dictionary` | [get_attack_speed_info](#method-get-attack-speed-info)() |
| `void` | [react_to_hit_dealt](#method-react-to-hit-dealt)( `result: DamageResult` ) |
| `void` | [react_to_hit_received](#method-react-to-hit-received)( `result: DamageResult` ) |
| `float` | [get_stat](#method-get-stat)( `stat_id: int` ) |
| `bool` | [set_stat_base](#method-set-stat-base)( `stat_id: int, value: float` ) |
| `bool` | [add_stat_bonus](#method-add-stat-bonus)( `stat_id: int, amount: float` ) |
| `bool` | [modify_stat_multiplier](#method-modify-stat-multiplier)( `stat_id: int, amount: float` ) |
| `bool` | [set_stat_multiplier](#method-set-stat-multiplier)( `stat_id: int, multiplier: float` ) |
| `bool` | [has_stat](#method-has-stat)( `stat_id: int` ) |
| `Array[int]` | [get_stat_ids_in_group](#method-get-stat-ids-in-group)( `group_id: int` ) |
| `float` | [get_pool_value](#method-get-pool-value)( `pool_id: int, value_type: String = "current"` ) |
| `PoolInstance` | [get_pool](#method-get-pool)( `pool_id: int` ) |
| `bool` | [has_pool](#method-has-pool)( `pool_id: int` ) |
| `Array[PoolInstance]` | [get_all_pools](#method-get-all-pools)() |
| `Array[int]` | [get_all_pool_ids](#method-get-all-pool-ids)() |
| `bool` | [is_master_pool](#method-is-master-pool)( `pool_id: int` ) |
| `int` | [get_base_resource_pool_id](#method-get-base-resource-pool-id)() |
| `bool` | [is_resource_pool](#method-is-resource-pool)( `pool_id: int` ) |
| `void` | [add_health_pool](#method-add-health-pool)( `pool_instance: PoolInstance` ) |
| `void` | [add_resource_pool](#method-add-resource-pool)( `pool_instance: PoolInstance` ) |
| `bool` | [remove_health_pool](#method-remove-health-pool)( `pool_id: int` ) |
| `bool` | [remove_health_pool_instance](#method-remove-health-pool-instance)( `pool: PoolInstance` ) |
| `void` | [add_damage_layer](#method-add-damage-layer)( `layer: DamageLayer` ) |
| `void` | [remove_damage_layer](#method-remove-damage-layer)( `layer: DamageLayer` ) |
| `void` | [remove_damage_layers_of_pool](#method-remove-damage-layers-of-pool)( `pool: PoolInstance` ) |
| `Array[DamageLayer]` | [get_ordered_damage_layers](#method-get-ordered-damage-layers)() |
| `bool` | [remove_resource_pool](#method-remove-resource-pool)( `pool_id: int` ) |
| `PoolInstance` | [get_master_pool](#method-get-master-pool)() |
| `PoolInstance` | [get_health_pool](#method-get-health-pool)( `pool_id: int` ) |
| `PoolInstance` | [get_resource_pool](#method-get-resource-pool)( `pool_id: int` ) |
| `DamageResult` | [take_damage](#method-take-damage)( `result: DamageResult` ) |
| `void` | [register_redirection_effect](#method-register-redirection-effect)( `effect_instance: EffectInstance` ) |
| `void` | [unregister_redirection_effect](#method-unregister-redirection-effect)( `effect_instance: EffectInstance` ) |
| `HealingResult` | [take_healing](#method-take-healing)( `result: HealingResult` ) |
| `void` | [add_done_boost](#method-add-done-boost)( `instance: EffectInstance` ) |
| `void` | [remove_done_boost](#method-remove-done-boost)( `instance: EffectInstance` ) |
| `float` | [apply_done_boosts](#method-apply-done-boosts)( `calculation_type: int, value: float, context: Dictionary, steps: Array[ModifierStep]` ) |
| `void` | [add_heal_absorb](#method-add-heal-absorb)( `instance: EffectInstance, amount: float` ) |
| `void` | [remove_heal_absorb](#method-remove-heal-absorb)( `instance: EffectInstance` ) |
| `float` | [get_heal_absorb_total](#method-get-heal-absorb-total)() |
| `Dictionary` | [can_consume_resource](#method-can-consume-resource)( `pool_id: int, amount: float` ) |
| `Dictionary` | [consume_resource](#method-consume-resource)( `pool_id: int, amount: float` ) |
| `float` | [restore_resource](#method-restore-resource)( `pool_id: int, amount: float` ) |
| `Dictionary` | [to_save_data](#method-to-save-data)() |
| `void` | [from_save_data](#method-from-save-data)( `save_data: Dictionary, entity: Variant = null` ) |
| `void` | [restore_pool_values_after_equipment](#method-restore-pool-values-after-equipment)() |
| `void` | [cleanup](#method-cleanup)() |
| `void` | [restore_all_pools_to_max](#method-restore-all-pools-to-max)() |
| `bool` | [is_master_pool_depleted](#method-is-master-pool-depleted)() |
| `Array` | [get_ability_modifier_entries](#method-get-ability-modifier-entries)( `ability_def: AbilityDefinition, property_name: String` ) |

## Signals

### pool_added( pool_instance: PoolInstance, pool_type: String ) {#signal-pool-added}

Pool events

### pool_removed( pool_id: int, pool_type: String ) {#signal-pool-removed}

### pool_value_changed( pool_id: int, current_value: float, max_value: float ) {#signal-pool-value-changed}

### pool_overfill_changed( pool_id: int, overfill_amount: float ) {#signal-pool-overfill-changed}

### pool_depleted( pool_id: int ) {#signal-pool-depleted}

### pool_restored( pool_id: int ) {#signal-pool-restored}

### master_pool_depleted() {#signal-master-pool-depleted}

### damage_incoming( damage_amount: float, damage_type: int, damage_source: Entity, effect: EffectInstance ) {#signal-damage-incoming}

Combat signals

### damage_taken( damage_amount: float, damage_source: Entity, effect: EffectInstance, damage_type: int ) {#signal-damage-taken}

### damage_absorbed_by_pool() {#signal-damage-absorbed-by-pool}

Protective pool absorption (shields, barriers)

### healing_applied( pool_id: int, amount: float, healing_source: Entity, effect: EffectInstance ) {#signal-healing-applied}

Healing signals

### stat_changed( stat_id: int, old_value: float, new_value: float ) {#signal-stat-changed}

Stat events

### ability_property_modification_requested( ability_name: String, property_name: String, effect_value: float, calculation_type: int ) {#signal-ability-property-modification-requested}

Ability property modification signal

### immunity_activated( immunity_id: int, duration: float, immunity_type: ImmunityDefinition.ImmunityType, protected_targets: Array[int] ) {#signal-immunity-activated}

Immunity signals (forwarded from ImmunityComponent)

### immunity_deactivated( immunity_id: int, immunity_type: ImmunityDefinition.ImmunityType, protected_targets: Array[int] ) {#signal-immunity-deactivated}

### school_effect_blocked_by_immunity( school_name: String, immunity_id: int, source_entity: Entity, effect: EffectInstance ) {#signal-school-effect-blocked-by-immunity}

School effect blocking (forwarded from ImmunityComponent)

## Enumerations

### enum CoreStats {#enum-corestats}

- **MOVEMENT_SPEED** = `1`
- **ATTACK_SPEED** = `2`
- **GLOBAL_COOLDOWN_DURATION** = `3`
- **WEAPON_SPEED** = `4`
- **CAST_SPEED** = `5`
- **CARRY_WEIGHT** = `6`
- **SIGHT_RANGE** = `7`
- **WEAPON_DAMAGE** = `8`
- **WEAPON_DAMAGE_VARIANCE** = `9`

## Constants

- `int` **MAX_MULTIPLIER_ITERATIONS** = `10  # Safety limit for convergence`

## Variable descriptions

### CombatManager combat_manager {#var-combat-manager}

*No description yet.*

### ChronoManager chrono_manager {#var-chrono-manager}

*No description yet.*

### Dictionary stat_instances =  {#var-stat-instances}

*No description yet.*

### Array[EffectInstance] active_redirection_effects = [] {#var-active-redirection-effects}

*No description yet.*

### Array[PoolInstance] health_pools = [] {#var-health-pools}

*No description yet.*

### Dictionary resource_pools =  {#var-resource-pools}

*No description yet.*

### Dictionary: core_stats {#var-core-stats}

The totals of all core stats (read-only snapshot)

### ImmunityComponent immunity_component {#var-immunity-component}

*No description yet.*

### StatusEffectComponent status_effect_component {#var-status-effect-component}

*No description yet.*

### int master_pool_id = 0 {#var-master-pool-id}

*No description yet.*

### bool is_dead = false {#var-is-dead}

*No description yet.*

### bool current_combat_state = false {#var-current-combat-state}

*No description yet.*

### Variant owner_entity = null {#var-owner-entity}

*No description yet.*

### int level = 1 {#var-level}

The level growth and level-scaled formulas read (set by set_level; level 1 until the entity says otherwise)

### Array[int] multiplier_stats = []  # Cache of multiplier stat names {#var-multiplier-stats}

*No description yet.*

### Dictionary multiplier_bonuses =   # Track which stats have multiplier bonuses applied {#var-multiplier-bonuses}

*No description yet.*

### int default_growth_profile_id = 0 {#var-default-growth-profile-id}

The profile that closes the chain of this entity (a GrowthProfile id, 0 = none). The NPCs get the project's default (Gameplay Config), set before setup_from_stats_data

### Array[DamageLayer] damage_layers = [] {#var-damage-layers}

The pools that take damage, with the order they take it in. Health and shields have a permanent layer from their definition; an effect can give any pool a temporary one (a mana shield). Damage goes to the layers by priority (highest first, equal priorities newest first); what no layer takes is overkill.

### Array[Dictionary] heal_absorbs = [] {#var-heal-absorbs}

The heal absorbs on this entity (HealAbsorbEffect), oldest first: &#123;"instance": EffectInstance, "remaining": float&#125;

### Array[EffectInstance] done_boosts = [] {#var-done-boosts}

The AbilityBoostEffect instances that raise what this entity deals or heals with some abilities and effects

## Method descriptions

### void setup_from_stats_data( stats_data: StatsData ) {#method-setup-from-stats-data}

Builds the component from a StatsData: the immunity and status components, the pools, an instance for every stat of the database, the base values and active states, the core stat overrides, the permanent immunities, then the capacity bonuses and multiplier effects of the stats

### void set_level( new_level: int ) {#method-set-level}

Tells the stats the entity's level (Entity.current_level calls this whenever it changes, and once after the components are built). Recomputes everything that depends on it: the growth of every stat, the growth of every pool maximum, and the stat effects whose formulas scale with the level. Pools whose maximum changes follow the level-up capacity rule (GameplayConfig, Pools), not the equipment rule. Stat and pool signals fire as usual.

### float growth_of( definition: Resource, context: FormulaContext = null ) {#method-growth-of}

The level growth of a stat or pool at the current level, from the first layer that has an answer: the entity's own override, the growth profiles (its own, the parents, the project default), then the stat's or pool's definition. The weapon damage of an entity without an intrinsic weapon does not grow

### void refresh_conditional_effects() {#method-refresh-conditional-effects}

Recalculates the multiplier and pool effects whose stat effects have conditions, after the state they depend on (health, combat) changed

### float modify_gain( channel: String, amount: float ) {#method-modify-gain}

What this entity gains on `channel` when `amount` is given to it: the amount after every GainModifierStatEffect of its stats. Flat additions first, then the percentages together, then the multiplies; never below 0. With no effect on the channel the amount comes back unchanged. See docs/systems/entity-stats.md, section 24.2.

### int modify_gain_int( channel: String, amount: int, probabilistic: bool = false ) {#method-modify-gain-int}

modify_gain for whole numbers (experience, gold, item counts): rounds to the nearest whole number, except that a fraction of an item is a chance of one more when `probabilistic` is set (1.2 items = 20 % chance of 2)

### Dictionary apply_status_effect( status_effect_id: int, base_duration: float, source_entity: Variant = null, effect: EffectInstance = null ) {#method-apply-status-effect}

Asks the status component to apply a status effect definition for `base_duration` seconds. The duration first goes through the status duration gain channel (tenacity). Returns the dictionary of `process_status_effect_application` (`can_apply`, `effective_duration` ...), or `can_apply` false with an `error` when the component is missing

### bool is_immune_to_status_effect( status_effect_id: int ) {#method-is-immune-to-status-effect}

Is the entity immune to this status effect definition right now?

### bool is_immune_to_damage_type( damage_type: int ) {#method-is-immune-to-damage-type}

Is the entity immune to this damage type right now?

### bool is_immune_to_school_type( school_id: int ) {#method-is-immune-to-school-type}

Is the entity immune to this ability school right now?

### bool can_apply_school_effect( school_id: int, source_entity: Entity = null, effect: EffectInstance = null ) {#method-can-apply-school-effect}

Can an effect of this school be applied to the entity? False (and `school_effect_blocked_by_immunity` is emitted) while a school immunity covers it

### bool activate_immunity( immunity_id: int, duration: float = -1.0 ) {#method-activate-immunity}

Switches an immunity (ImmunityDefinition id) on for `duration` seconds (0 or less: 10 seconds). Returns false when it could not be activated

### bool deactivate_immunity( immunity_id: int ) {#method-deactivate-immunity}

Switches an immunity off before its time

### void clear_all_immunities() {#method-clear-all-immunities}

Ends every immunity and forgets the status effect immunity state

### bool has_weapon_equipped() {#method-has-weapon-equipped}

True when the weapon damage core stat is above 0

### float get_weapon_damage() {#method-get-weapon-damage}

The weapon damage core stat

### float roll_weapon_damage() {#method-roll-weapon-damage}

A weapon hit: the weapon damage, plus or minus a random amount up to the weapon damage variance core stat

### float get_swing_timer() {#method-get-swing-timer}

Seconds between weapon attacks: the weapon speed divided by the attack speed (3.0 and 1.0 when those are 0)

### float get_attacks_per_second() {#method-get-attacks-per-second}

1 divided by the swing timer

### float get_damage_per_second() {#method-get-damage-per-second}

Weapon damage times attacks per second

### Dictionary get_attack_speed_info() {#method-get-attack-speed-info}

A dictionary with the weapon speed, the attack speed, the swing timer, the attacks per second and the damage per second, for tooltips

### void react_to_hit_dealt( result: DamageResult ) {#method-react-to-hit-dealt}

A hit this entity dealt was resolved (entity_hit_dealt): damage-dealt and kill restoration

### void react_to_hit_received( result: DamageResult ) {#method-react-to-hit-received}

A hit on this entity was resolved (entity_hit_received): damage-taken restoration and reflection

### float get_stat( stat_id: int ) {#method-get-stat}

The total of a stat (`(base + growth + bonus) x multiplier`), or 0 when the entity does not have it. Multiplier effects of other stats are already inside the bonus

### bool set_stat_base( stat_id: int, value: float ) {#method-set-stat-base}

Sets the base of a stat; bonuses (gear, effects) and the multiplier stay

### bool add_stat_bonus( stat_id: int, amount: float ) {#method-add-stat-bonus}

Adds `amount` to the bonus of a stat (negative to take it away). Equipment and effects work through it. False when the entity does not have the stat

### bool modify_stat_multiplier( stat_id: int, amount: float ) {#method-modify-stat-multiplier}

Adds `amount` to the multiplier of a stat (it starts at 1.0, so +0.5 makes x1.5)

### bool set_stat_multiplier( stat_id: int, multiplier: float ) {#method-set-stat-multiplier}

Sets the multiplier of a stat outright (1.0 = x1)

### bool has_stat( stat_id: int ) {#method-has-stat}

Does the entity have this stat?

### Array[int] get_stat_ids_in_group( group_id: int ) {#method-get-stat-ids-in-group}

The stats this entity has that are in a stat group (StatGroupDefinition), by id

### float get_pool_value( pool_id: int, value_type: String = "current" ) {#method-get-pool-value}

A value of a pool: "current" (overfill included), "max" (overfill capacity included), "base_max", "effective_max", "percentage" (of the effective maximum), "normal_percentage" or "overfill". 0 for a pool the entity does not have

### PoolInstance get_pool( pool_id: int ) {#method-get-pool}

A pool by its definition id, health pools first, or null

### bool has_pool( pool_id: int ) {#method-has-pool}

Does the entity have this pool?

### Array[PoolInstance] get_all_pools() {#method-get-all-pools}

Every pool of the entity, health pools first (in their order), then the resource pools. Health pools and resource pools are two stores because the editor and the nameplate group them that way; nothing else depends on which store a pool is in

### Array[int] get_all_pool_ids() {#method-get-all-pool-ids}

The definition ids of every pool, health pools first

### bool is_master_pool( pool_id: int ) {#method-is-master-pool}

Is this the master pool: the one whose depletion kills the entity?

### int get_base_resource_pool_id() {#method-get-base-resource-pool-id}

The id of the first resource pool, or 0 when there is none

### bool is_resource_pool( pool_id: int ) {#method-is-resource-pool}

Is this pool in the resource store (mana, rage) and not in the health store?

### void add_health_pool( pool_instance: PoolInstance ) {#method-add-health-pool}

Adds a pool to the health store. When its definition absorbs damage it gets its permanent damage layer. Emits `pool_added`

### void add_resource_pool( pool_instance: PoolInstance ) {#method-add-resource-pool}

Adds a pool to the resource store. Emits `pool_added`

### bool remove_health_pool( pool_id: int ) {#method-remove-health-pool}

Removes a health pool and the damage layers of it. False when the entity does not have it

### bool remove_health_pool_instance( pool: PoolInstance ) {#method-remove-health-pool-instance}

Removes one health pool instance (not "the first pool of this definition": an entity can hold two shields of one kind)

### void add_damage_layer( layer: DamageLayer ) {#method-add-damage-layer}

Adds a damage layer: a pool that takes part of the damage the entity suffers

### void remove_damage_layer( layer: DamageLayer ) {#method-remove-damage-layer}

Removes one damage layer

### void remove_damage_layers_of_pool( pool: PoolInstance ) {#method-remove-damage-layers-of-pool}

Removes every damage layer that belongs to a pool

### Array[DamageLayer] get_ordered_damage_layers() {#method-get-ordered-damage-layers}

The layers in the order they take damage

### bool remove_resource_pool( pool_id: int ) {#method-remove-resource-pool}

Removes a resource pool and the damage layers of it. False when the entity does not have it

### PoolInstance get_master_pool() {#method-get-master-pool}

The pool whose depletion kills: the master pool, or the first health pool when none is set. Use this where code wants "the main health" (never `health_pools[0]`: shields and other pools can come first)

### PoolInstance get_health_pool( pool_id: int ) {#method-get-health-pool}

A pool of the health store by its definition id, or null

### PoolInstance get_resource_pool( pool_id: int ) {#method-get-resource-pool}

A pool of the resource store by its definition id, or null

### DamageResult take_damage( result: DamageResult ) {#method-take-damage}

Completes the DamageResult for a hit on this entity: redirection, damage immunity, the defender's calculation phase (dodge, block, armor), protective pools, health and death. The attacker's phase has already run, so `result.taken` holds the damage done. Returns the same result, or null when a script error aborted the function (the caller turns null into a FAILED result).

### void register_redirection_effect( effect_instance: EffectInstance ) {#method-register-redirection-effect}

Registers a damage redirection effect (a guardian) that gets the first look at the damage the entity takes

### void unregister_redirection_effect( effect_instance: EffectInstance ) {#method-unregister-redirection-effect}

Forgets a damage redirection effect

### HealingResult take_healing( result: HealingResult ) {#method-take-healing}

Completes the HealingResult for a heal on this entity: the target's calculation phase (healing taken modifiers), then the pools, then the death check (a heal can revive). The healer's phase has already run, so `result.taken` holds the healing done. Returns the same result, or null when a script error aborted the function.

### void add_done_boost( instance: EffectInstance ) {#method-add-done-boost}

A boost is now on this entity (the instance of an AbilityBoostEffect)

### void remove_done_boost( instance: EffectInstance ) {#method-remove-done-boost}

The boost of this instance ends

### float apply_done_boosts( calculation_type: int, value: float, context: Dictionary, steps: Array[ModifierStep] ) {#method-apply-done-boosts}

Applies the boosts that fit to the number of a damage done or healing done calculation, after its modifiers. Flat first, then the percentage, each stack adding its share; a step is recorded for every boost that changed the number. The ability and the effects come from the context

### void add_heal_absorb( instance: EffectInstance, amount: float ) {#method-add-heal-absorb}

A heal absorb of `amount` is now on this entity; it soaks up the healing the entity receives until it is used up

### void remove_heal_absorb( instance: EffectInstance ) {#method-remove-heal-absorb}

The heal absorb of `instance` ends (its effect ended, or it was used up)

### float get_heal_absorb_total() {#method-get-heal-absorb-total}

How much healing the heal absorbs on this entity can still soak up

### Dictionary can_consume_resource( pool_id: int, amount: float ) {#method-can-consume-resource}

Can the resource pool pay `amount`? A dictionary with `can_consume`, `requested`, `available` and `shortage`

### Dictionary consume_resource( pool_id: int, amount: float ) {#method-consume-resource}

Spends `amount` from a resource pool. A dictionary with `success`, `consumed` and `remaining`; the check result when it could not be paid

### float restore_resource( pool_id: int, amount: float ) {#method-restore-resource}

Adds `amount` to a resource pool and returns what was added

### Dictionary to_save_data() {#method-to-save-data}

The state a save keeps: pool values, stat bases and the immunities that are running. Bonuses and multipliers come back from equipment and effects

### void from_save_data( save_data: Dictionary, entity: Variant = null ) {#method-from-save-data}

Restores the state of `to_save_data`: stat bases first (capacity follows them), then immunities and the pool values

### void restore_pool_values_after_equipment() {#method-restore-pool-values-after-equipment}

Applies the saved pool values again. The entity calls this after it restored its equipment: gear raises the maximum and the capacity rule could otherwise move the restored current value

### void cleanup() {#method-cleanup}

Clears the damage layers and cleans up and disconnects every pool. Called when the entity is freed

### void restore_all_pools_to_max() {#method-restore-all-pools-to-max}

Fills every pool to its maximum (a respawn, a reset)

### bool is_master_pool_depleted() {#method-is-master-pool-depleted}

Is the master pool empty (the entity is dead)?

### Array get_ability_modifier_entries( ability_def: AbilityDefinition, property_name: String ) {#method-get-ability-modifier-entries}

What the stats of this entity change on an ability's property ("cooldown_duration", "cost_amount", "gain_amount"): entries for the ability's modifier set, worked out from the stat points as they are now (nothing is stored, so nothing can go stale)

