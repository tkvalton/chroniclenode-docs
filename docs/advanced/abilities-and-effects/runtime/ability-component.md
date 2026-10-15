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

========== SIGNALS ==========

### ability_use_attempt_approved( user: Entity, ability_instance: AbilityInstance ) {#signal-ability-use-attempt-approved}

Emitted when an attempt to use an ability passed every check and the ability is going to run.

### global_cooldown_started() {#signal-global-cooldown-started}

Emitted when the global cooldown starts.

### global_cooldown_ended() {#signal-global-cooldown-ended}

Emitted when the global cooldown ends.

### ability_learned( ability_instance: AbilityInstance, ability_type: String ) {#signal-ability-learned}

Emitted when the entity learns an ability: the instance and its type (active or passive).

### ability_forgotten( ability_instance: AbilityInstance, ability_type: String ) {#signal-ability-forgotten}

Emitted when the entity loses an ability: the instance and its type.

## Variable descriptions

### Entity user = null {#var-user}

========== PROPERTIES ==========

### AbilityInstance basic_attack = null {#var-basic-attack}

The basic attack the entity uses now.

### AbilityInstance original_basic_attack_instance = null {#var-original-basic-attack-instance}

The basic attack the entity started with, kept so a swapped one can be taken off again.

### Array[AbilityInstance] active_abilities = [] {#var-active-abilities}

The active abilities the entity knows.

### Array[AbilityInstance] passive_abilities = [] {#var-passive-abilities}

The passive abilities the entity knows.

### Timer global_cooldown_timer = null {#var-global-cooldown-timer}

The timer of the global cooldown (stopped when there is none).

### ChronoManager chrono_manager {#var-chrono-manager}

The manager of timers the component takes its timers from.

### GameHost.SystemHub system_hub {#var-system-hub}

The hub of the game systems.

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

Gives the entity the abilities of its definition (and of its template and class): its basic attack, active and passive abilities.

### bool add_basic_attack_instance( ability_instance: AbilityInstance ) {#method-add-basic-attack-instance}

Sets the basic attack of the entity. False for an empty instance.

### bool swap_basic_attack( ability_instance: AbilityInstance ) {#method-swap-basic-attack}

Replaces the basic attack (a weapon that has its own). The original is kept for remove_basic_attack.

### bool remove_basic_attack() {#method-remove-basic-attack}

Takes the swapped basic attack away and gives the original back.

### bool add_active_ability_instance( ability_instance: AbilityInstance ) {#method-add-active-ability-instance}

Adds an active ability. False when the entity already has it or the instance is empty.

### bool add_passive_ability_instance( ability_instance: AbilityInstance ) {#method-add-passive-ability-instance}

Add a passive ability instance. AbilityInstance manages its own passive effect application via its init and requirement monitoring - no manual effect application needed here.

### bool remove_active_ability_by_id( ability_id: int ) {#method-remove-active-ability-by-id}

Removes an active ability by its id. False when the entity does not know it.

### bool remove_active_ability_instance( ability_instance: AbilityInstance ) {#method-remove-active-ability-instance}

Removes an active ability instance.

### bool remove_passive_ability_by_id( ability_id: int ) {#method-remove-passive-ability-by-id}

Removes a passive ability by its id. False when the entity does not know it.

### bool remove_passive_ability_instance( ability_instance: AbilityInstance ) {#method-remove-passive-ability-instance}

Removes a passive ability instance.

### void deactivate_all_toggles() {#method-deactivate-all-toggles}

Switches every toggle ability of this entity off (death, a dispel, a stance reset)

### AbilityInstance get_ability_instance_by_id( ability_id: int ) {#method-get-ability-instance-by-id}

The ability (basic attack, active or passive) with this id, or null.

### AbilityInstance get_active_ability_instance_by_id( ability_id: int ) {#method-get-active-ability-instance-by-id}

The active ability with this id, or null.

### AbilityInstance get_passive_ability_instance_by_id( ability_id: int ) {#method-get-passive-ability-instance-by-id}

The passive ability with this id, or null.

### AbilityInstance get_ability_instance_by_name( ability_name: String ) {#method-get-ability-instance-by-name}

The ability (basic attack, active or passive) with this display name, or null.

### AbilityInstance get_active_ability_instance_by_name( ability_name: String ) {#method-get-active-ability-instance-by-name}

The active ability with this display name, or null.

### AbilityInstance get_passive_ability_instance_by_name( ability_name: String ) {#method-get-passive-ability-instance-by-name}

The passive ability with this display name, or null.

### Array[AbilityInstance] get_all_ability_instances() {#method-get-all-ability-instances}

Every ability of the entity: the basic attack, the active ones and the passive ones.

### void modify_ability_property( ability_name: String, property_name: String, effect_value: float, calculation_type: int, source: Variant = "stat" ) {#method-modify-ability-property}

Changes a property of an ability by name ("*" for all of them): the amount, how it is applied (add, multiply ...) and where it comes from.

### void clear_ability_property_modifiers( source: Variant ) {#method-clear-ability-property-modifiers}

Takes away everything one source (an effect instance, a stat effect) modified on this entity's abilities

### AbilityInstance.AbilityUseAttemptResult attempt_use_basic_attack() {#method-attempt-use-basic-attack}

Tries to use the basic attack. The result says whether it ran or why not.

### AbilityInstance.AbilityUseAttemptResult attempt_use_ability_instance( ability_instance: AbilityInstance, target: Variant, from_action: bool ) {#method-attempt-use-ability-instance}

Tries to use an ability on a target (an entity or a point). From action says whether a key press asked for it. The result says whether it ran or why not.

### AbilityInstance.AbilityUseAttemptResult attempt_use_ability_by_id( ability_id: int, target: Variant, from_action: bool ) {#method-attempt-use-ability-by-id}

Tries to use the ability with this id (the same as attempt_use_ability_instance).

### bool is_on_global_cooldown() {#method-is-on-global-cooldown}

Is the global cooldown running?

### float get_global_cooldown_remaining() {#method-get-global-cooldown-remaining}

How many seconds of the global cooldown are left.

### Dictionary to_save_data() {#method-to-save-data}

The abilities of the entity for a save: the global cooldown, the basic attack and each ability with its cooldowns and charges.

### void from_save_data( save_data: Dictionary ) {#method-from-save-data}

Restores the abilities from a save.

### void cleanup_timers() {#method-cleanup-timers}

Returns the cooldown timers to the manager.

### void cleanup() {#method-cleanup}

Cleans up every ability and timer of the component (the entity is going away).

### AbilityInstance get_passive_ability_by_id( ability_id: int ) {#method-get-passive-ability-by-id}

Alias used by the item classes (armor and weapon class passives)

### void lock_school( school_id: int ) {#method-lock-school}

Locks a school: abilities of it cannot be used. It counts, so two locks need two unlocks.

### void unlock_school( school_id: int ) {#method-unlock-school}

Takes one lock off a school.

### bool is_school_locked( school_id: int ) {#method-is-school-locked}

Is the school locked now?

### void start_group_cooldowns( group_ids: Array[int], own_duration: float, source: Variant = null ) {#method-start-group-cooldowns}

Using a member of a group that shares its cooldown (a potion, a trinket, an ability) puts every other member on cooldown: the abilities of this entity, and the consumables in its inventory. The length is the group's own (when it sets one) or `own_duration`, the cooldown of the member that was used. `source` (an AbilityInstance or an ItemInstance) is skipped: it has its own cooldown.

### float get_group_cooldown_remaining( group_ids: Array[int] ) {#method-get-group-cooldown-remaining}

The longest time left on a shared cooldown among these groups (0 = none running)

### void set_weapon_basic_attack( ability_id: int ) {#method-set-weapon-basic-attack}

Makes the basic attack of the weapon the basic attack of the entity (0 clears it).

### void clear_weapon_basic_attack() {#method-clear-weapon-basic-attack}

Takes the weapon basic attack away: the entity uses its own again.

