<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# AbilityComponent

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

AbilityComponent orchestrates ability instances for an entity. Manages collections, routes use attempts, and handles global cooldown. Passive effect application is fully owned by AbilityInstance - this component does not touch passive effect state directly.

## Variables

| | | |
|---|---|---|
| `Entity` | [user](#var-user) | `null` |
| `AbilityInstance` | [basic_attack](#var-basic-attack) | `null` |
| `AbilityInstance` | [original_basic_attack_instance](#var-original-basic-attack-instance) | `null` |
| `Array[AbilityInstance]` | [active_abilities](#var-active-abilities) | `[]` |
| `Array[AbilityInstance]` | [passive_abilities](#var-passive-abilities) | `[]` |
| `Timer` | [global_cooldown_timer](#var-global-cooldown-timer) | `null` |
| `ChronoManager` | [chrono_manager](#var-chrono-manager) |  |
| `GameHost.SystemHub` | [system_hub](#var-system-hub) |  |
| `Dictionary` | [group_cooldown_timers](#var-group-cooldown-timers) | `{}` |
| `Dictionary` | [locked_schools](#var-locked-schools) | `{}` |
| `AbilityInstance` | [weapon_basic_attack](#var-weapon-basic-attack) | `null` |

## Methods

| | |
|---|---|
| `void` | [refresh_npc_ranks](#method-refresh-npc-ranks)() |
| `void` | [add_rank_bonus](#method-add-rank-bonus)( `source: Variant, bonus: int, ability_ids: Array, group_ids: Array, school_ids: Array, all: bool = false` ) |
| `void` | [remove_rank_bonus](#method-remove-rank-bonus)( `source: Variant` ) |
| `int` | [get_rank_bonus_for](#method-get-rank-bonus-for)( `ability_def: AbilityDefinition` ) |
| `void` | [setup_starting_abilites](#method-setup-starting-abilites)() |
| `bool` | [add_basic_attack_instance](#method-add-basic-attack-instance)( `ability_instance: AbilityInstance` ) |
| `bool` | [swap_basic_attack](#method-swap-basic-attack)( `ability_instance: AbilityInstance` ) |
| `bool` | [remove_basic_attack](#method-remove-basic-attack)() |
| `bool` | [add_active_ability_instance](#method-add-active-ability-instance)( `ability_instance: AbilityInstance` ) |
| `bool` | [add_passive_ability_instance](#method-add-passive-ability-instance)( `ability_instance: AbilityInstance` ) |
| `bool` | [remove_active_ability_by_id](#method-remove-active-ability-by-id)( `ability_id: int` ) |
| `bool` | [remove_active_ability_instance](#method-remove-active-ability-instance)( `ability_instance: AbilityInstance` ) |
| `bool` | [remove_passive_ability_by_id](#method-remove-passive-ability-by-id)( `ability_id: int` ) |
| `bool` | [remove_passive_ability_instance](#method-remove-passive-ability-instance)( `ability_instance: AbilityInstance` ) |
| `void` | [deactivate_all_toggles](#method-deactivate-all-toggles)() |
| `AbilityInstance` | [get_ability_instance_by_id](#method-get-ability-instance-by-id)( `ability_id: int` ) |
| `AbilityInstance` | [get_active_ability_instance_by_id](#method-get-active-ability-instance-by-id)( `ability_id: int` ) |
| `AbilityInstance` | [get_passive_ability_instance_by_id](#method-get-passive-ability-instance-by-id)( `ability_id: int` ) |
| `AbilityInstance` | [get_ability_instance_by_name](#method-get-ability-instance-by-name)( `ability_name: String` ) |
| `AbilityInstance` | [get_active_ability_instance_by_name](#method-get-active-ability-instance-by-name)( `ability_name: String` ) |
| `AbilityInstance` | [get_passive_ability_instance_by_name](#method-get-passive-ability-instance-by-name)( `ability_name: String` ) |
| `Array[AbilityInstance]` | [get_all_ability_instances](#method-get-all-ability-instances)() |
| `void` | [modify_ability_property](#method-modify-ability-property)( `ability_name: String, property_name: String, effect_value: float, calculation_type: int, source: Variant = "stat"` ) |
| `void` | [clear_ability_property_modifiers](#method-clear-ability-property-modifiers)( `source: Variant` ) |
| `AbilityInstance.AbilityUseAttemptResult` | [attempt_use_basic_attack](#method-attempt-use-basic-attack)() |
| `AbilityInstance.AbilityUseAttemptResult` | [attempt_use_ability_instance](#method-attempt-use-ability-instance)( `ability_instance: AbilityInstance, target: Variant, from_action: bool` ) |
| `AbilityInstance.AbilityUseAttemptResult` | [attempt_use_ability_by_id](#method-attempt-use-ability-by-id)( `ability_id: int, target: Variant, from_action: bool` ) |
| `bool` | [is_on_global_cooldown](#method-is-on-global-cooldown)() |
| `float` | [get_global_cooldown_remaining](#method-get-global-cooldown-remaining)() |
| `Dictionary` | [to_save_data](#method-to-save-data)() |
| `void` | [from_save_data](#method-from-save-data)( `save_data: Dictionary` ) |
| `void` | [cleanup_timers](#method-cleanup-timers)() |
| `void` | [cleanup](#method-cleanup)() |
| `AbilityInstance` | [get_passive_ability_by_id](#method-get-passive-ability-by-id)( `ability_id: int` ) |
| `void` | [lock_school](#method-lock-school)( `school_id: int` ) |
| `void` | [unlock_school](#method-unlock-school)( `school_id: int` ) |
| `bool` | [is_school_locked](#method-is-school-locked)( `school_id: int` ) |
| `void` | [start_group_cooldowns](#method-start-group-cooldowns)( `group_ids: Array[int], own_duration: float, source: Variant = null` ) |
| `float` | [get_group_cooldown_remaining](#method-get-group-cooldown-remaining)( `group_ids: Array[int]` ) |
| `void` | [set_weapon_basic_attack](#method-set-weapon-basic-attack)( `ability_id: int` ) |
| `void` | [clear_weapon_basic_attack](#method-clear-weapon-basic-attack)() |

## Signals

### ability_use_attempt_rejected( user: Entity, ability_instance: AbilityInstance, use_result: AbilityInstance.AbilityUseAttemptResult ) {#signal-ability-use-attempt-rejected}

### ability_use_attempt_approved( user: Entity, ability_instance: AbilityInstance ) {#signal-ability-use-attempt-approved}

### global_cooldown_started() {#signal-global-cooldown-started}

### global_cooldown_ended() {#signal-global-cooldown-ended}

### ability_learned( ability_instance: AbilityInstance, ability_type: String ) {#signal-ability-learned}

### ability_forgotten( ability_instance: AbilityInstance, ability_type: String ) {#signal-ability-forgotten}

## Variable descriptions

### Entity user = null {#var-user}

*No description yet.*

### AbilityInstance basic_attack = null {#var-basic-attack}

*No description yet.*

### AbilityInstance original_basic_attack_instance = null {#var-original-basic-attack-instance}

*No description yet.*

### Array[AbilityInstance] active_abilities = [] {#var-active-abilities}

*No description yet.*

### Array[AbilityInstance] passive_abilities = [] {#var-passive-abilities}

*No description yet.*

### Timer global_cooldown_timer = null {#var-global-cooldown-timer}

*No description yet.*

### ChronoManager chrono_manager {#var-chrono-manager}

*No description yet.*

### GameHost.SystemHub system_hub {#var-system-hub}

*No description yet.*

### Dictionary group_cooldown_timers =  {#var-group-cooldown-timers}

Cooldowns shared through groups (potions, trinkets): group id -&gt; the timer that runs while any member is on cooldown

### Dictionary locked_schools =  {#var-locked-schools}

Schools whose abilities cannot be used (a counterspell, a school-specific silence): school id -&gt; how many locks hold it

### AbilityInstance weapon_basic_attack = null {#var-weapon-basic-attack}

The basic attack a wielded weapon class provides (WeaponClassDefinition.basic_attack_ability_id): it replaces the basic attack of the entity while the weapon is wielded, and the original comes back when it is not. 0 puts the original back

## Method descriptions

### void refresh_npc_ranks() {#method-refresh-npc-ranks}

An NPC's abilities take the rank its definition says at its level (called when the NPC is made and whenever its level changes)

### void add_rank_bonus( source: Variant, bonus: int, ability_ids: Array, group_ids: Array, school_ids: Array, all: bool = false ) {#method-add-rank-bonus}

An effect (or anything else with an identity) gives ranks to the abilities it names. Empty lists with `all` false give nothing

### void remove_rank_bonus( source: Variant ) {#method-remove-rank-bonus}

Takes away what a source gave

### int get_rank_bonus_for( ability_def: AbilityDefinition ) {#method-get-rank-bonus-for}

The ranks that all the sources together add to an ability

### void setup_starting_abilites() {#method-setup-starting-abilites}

*No description yet.*

### bool add_basic_attack_instance( ability_instance: AbilityInstance ) {#method-add-basic-attack-instance}

*No description yet.*

### bool swap_basic_attack( ability_instance: AbilityInstance ) {#method-swap-basic-attack}

*No description yet.*

### bool remove_basic_attack() {#method-remove-basic-attack}

*No description yet.*

### bool add_active_ability_instance( ability_instance: AbilityInstance ) {#method-add-active-ability-instance}

*No description yet.*

### bool add_passive_ability_instance( ability_instance: AbilityInstance ) {#method-add-passive-ability-instance}

Add a passive ability instance. AbilityInstance manages its own passive effect application via its init and requirement monitoring - no manual effect application needed here.

### bool remove_active_ability_by_id( ability_id: int ) {#method-remove-active-ability-by-id}

*No description yet.*

### bool remove_active_ability_instance( ability_instance: AbilityInstance ) {#method-remove-active-ability-instance}

*No description yet.*

### bool remove_passive_ability_by_id( ability_id: int ) {#method-remove-passive-ability-by-id}

*No description yet.*

### bool remove_passive_ability_instance( ability_instance: AbilityInstance ) {#method-remove-passive-ability-instance}

*No description yet.*

### void deactivate_all_toggles() {#method-deactivate-all-toggles}

Switches every toggle ability of this entity off (death, a dispel, a stance reset)

### AbilityInstance get_ability_instance_by_id( ability_id: int ) {#method-get-ability-instance-by-id}

*No description yet.*

### AbilityInstance get_active_ability_instance_by_id( ability_id: int ) {#method-get-active-ability-instance-by-id}

*No description yet.*

### AbilityInstance get_passive_ability_instance_by_id( ability_id: int ) {#method-get-passive-ability-instance-by-id}

*No description yet.*

### AbilityInstance get_ability_instance_by_name( ability_name: String ) {#method-get-ability-instance-by-name}

*No description yet.*

### AbilityInstance get_active_ability_instance_by_name( ability_name: String ) {#method-get-active-ability-instance-by-name}

*No description yet.*

### AbilityInstance get_passive_ability_instance_by_name( ability_name: String ) {#method-get-passive-ability-instance-by-name}

*No description yet.*

### Array[AbilityInstance] get_all_ability_instances() {#method-get-all-ability-instances}

*No description yet.*

### void modify_ability_property( ability_name: String, property_name: String, effect_value: float, calculation_type: int, source: Variant = "stat" ) {#method-modify-ability-property}

*No description yet.*

### void clear_ability_property_modifiers( source: Variant ) {#method-clear-ability-property-modifiers}

Takes away everything one source (an effect instance, a stat effect) modified on this entity's abilities

### AbilityInstance.AbilityUseAttemptResult attempt_use_basic_attack() {#method-attempt-use-basic-attack}

*No description yet.*

### AbilityInstance.AbilityUseAttemptResult attempt_use_ability_instance( ability_instance: AbilityInstance, target: Variant, from_action: bool ) {#method-attempt-use-ability-instance}

*No description yet.*

### AbilityInstance.AbilityUseAttemptResult attempt_use_ability_by_id( ability_id: int, target: Variant, from_action: bool ) {#method-attempt-use-ability-by-id}

*No description yet.*

### bool is_on_global_cooldown() {#method-is-on-global-cooldown}

*No description yet.*

### float get_global_cooldown_remaining() {#method-get-global-cooldown-remaining}

*No description yet.*

### Dictionary to_save_data() {#method-to-save-data}

*No description yet.*

### void from_save_data( save_data: Dictionary ) {#method-from-save-data}

*No description yet.*

### void cleanup_timers() {#method-cleanup-timers}

*No description yet.*

### void cleanup() {#method-cleanup}

*No description yet.*

### AbilityInstance get_passive_ability_by_id( ability_id: int ) {#method-get-passive-ability-by-id}

Alias used by the item classes (armor and weapon class passives)

### void lock_school( school_id: int ) {#method-lock-school}

*No description yet.*

### void unlock_school( school_id: int ) {#method-unlock-school}

*No description yet.*

### bool is_school_locked( school_id: int ) {#method-is-school-locked}

*No description yet.*

### void start_group_cooldowns( group_ids: Array[int], own_duration: float, source: Variant = null ) {#method-start-group-cooldowns}

Using a member of a group that shares its cooldown (a potion, a trinket, an ability) puts every other member on cooldown: the abilities of this entity, and the consumables in its inventory. The length is the group's own (when it sets one) or `own_duration`, the cooldown of the member that was used. `source` (an AbilityInstance or an ItemInstance) is skipped: it has its own cooldown.

### float get_group_cooldown_remaining( group_ids: Array[int] ) {#method-get-group-cooldown-remaining}

The longest time left on a shared cooldown among these groups (0 = none running)

### void set_weapon_basic_attack( ability_id: int ) {#method-set-weapon-basic-attack}

*No description yet.*

### void clear_weapon_basic_attack() {#method-clear-weapon-basic-attack}

*No description yet.*

