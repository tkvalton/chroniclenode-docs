<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# StatsData

**Inherits:** [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

StatsData resource that defines the initial stats and pools for an Entity/Object This is passed to StatsComponent.setup_from_stats_data() to initialize all stats and pools

## Properties

| | | |
|---|---|---|
| `int` | [master_pool_id](#prop-master-pool-id) | `0` |
| `Array[int]` | [permanent_immunities](#prop-permanent-immunities) | `[]` |
| `Dictionary` | [stats_base_values](#prop-stats-base-values) | `{}` |
| `Dictionary` | [stats_active_states](#prop-stats-active-states) | `{}` |
| `Array[int]` | [health_pool_definitions](#prop-health-pool-definitions) | `[]` |
| `Array[int]` | [resource_pool_definitions](#prop-resource-pool-definitions) | `[]` |
| `Dictionary` | [health_pool_base_values](#prop-health-pool-base-values) | `{}` |
| `Dictionary` | [resource_pool_base_values](#prop-resource-pool-base-values) | `{}` |
| `int` | [growth_profile_id](#prop-growth-profile-id) | `0` |
| `Array[GrowthOverride]` | [growth_overrides](#prop-growth-overrides) | `[]` |
| `float` | [movement_speed_base](#prop-movement-speed-base) | `0.0` |
| `float` | [attack_speed_base](#prop-attack-speed-base) | `0.0` |
| `float` | [global_cooldown_duration_base](#prop-global-cooldown-duration-base) | `0.0` |
| `float` | [cast_speed_base](#prop-cast-speed-base) | `0.0` |
| `float` | [carry_weight_base](#prop-carry-weight-base) | `0.0` |
| `float` | [sight_range_base](#prop-sight-range-base) | `0.0` |
| `float` | [weapon_damage_base](#prop-weapon-damage-base) | `0.0` |
| `float` | [weapon_damage_variance](#prop-weapon-damage-variance) | `0.0` |
| `float` | [weapon_speed_base](#prop-weapon-speed-base) | `0.0` |

## Methods

| | |
|---|---|
| `void` | [refresh_default_health_pool](#method-refresh-default-health-pool)() |
| `bool` | [is_using_default_health_pool](#method-is-using-default-health-pool)() |
| `void` | [sync_custom_stats](#method-sync-custom-stats)() |
| `GrowthOverride` | [get_growth_override](#method-get-growth-override)( `target_id: int` ) |
| `void` | [set_growth_override](#method-set-growth-override)( `growth_override: GrowthOverride` ) |
| `void` | [remove_growth_override](#method-remove-growth-override)( `target_id: int` ) |
| `void` | [sync_with_database](#method-sync-with-database)() |
| `void` | [add_health_pool_definition](#method-add-health-pool-definition)( `pool_id: int` ) |
| `void` | [add_resource_pool_definition](#method-add-resource-pool-definition)( `pool_id: int` ) |
| `bool` | [remove_health_pool_definition](#method-remove-health-pool-definition)( `pool_id: int` ) |
| `bool` | [remove_resource_pool_definition](#method-remove-resource-pool-definition)( `pool_id: int` ) |
| `PoolDefinition` | [get_health_pool_definition](#method-get-health-pool-definition)( `pool_id: int` ) |
| `PoolDefinition` | [get_resource_pool_definition](#method-get-resource-pool-definition)( `pool_id: int` ) |
| `bool` | [has_health_pool_definition](#method-has-health-pool-definition)( `pool_id: int` ) |
| `bool` | [has_resource_pool_definition](#method-has-resource-pool-definition)( `pool_id: int` ) |
| `Dictionary` | [get_health_pool_base_with_fallback](#method-get-health-pool-base-with-fallback)( `pool_id: int` ) |
| `Dictionary` | [get_resource_pool_base_with_fallback](#method-get-resource-pool-base-with-fallback)( `pool_id: int` ) |
| `void` | [set_health_pool_base_value](#method-set-health-pool-base-value)( `pool_id: int, current: float, max_value: float` ) |
| `void` | [set_resource_pool_base_value](#method-set-resource-pool-base-value)( `pool_id: int, current: float, max_value: float` ) |
| `Dictionary` | [get_health_pool_base_value](#method-get-health-pool-base-value)( `pool_id: int` ) |
| `Dictionary` | [get_resource_pool_base_value](#method-get-resource-pool-base-value)( `pool_id: int` ) |
| `void` | [set_stat_base_value](#method-set-stat-base-value)( `stat_id: int, value: float` ) |
| `float` | [get_stat_base_value](#method-get-stat-base-value)( `stat_id: int` ) |
| `void` | [set_stat_active](#method-set-stat-active)( `stat_id: int, active: bool` ) |
| `bool` | [get_stat_active](#method-get-stat-active)( `stat_id: int` ) |
| `bool` | [has_stat](#method-has-stat)( `stat_id: int` ) |
| `void` | [remove_stat](#method-remove-stat)( `stat_id: int` ) |
| `void` | [set_movement_speed_base](#method-set-movement-speed-base)( `speed: float` ) |
| `void` | [set_attack_speed_base](#method-set-attack-speed-base)( `speed: float` ) |
| `void` | [set_global_cooldown_duration_base](#method-set-global-cooldown-duration-base)( `duration: float` ) |
| `void` | [set_cast_speed_base](#method-set-cast-speed-base)( `speed: float` ) |
| `void` | [set_carry_weight_base](#method-set-carry-weight-base)( `weight: float` ) |
| `void` | [set_sight_range_base](#method-set-sight-range-base)( `range: float` ) |
| `float` | [get_movement_speed_base](#method-get-movement-speed-base)() |
| `float` | [get_attack_speed_base](#method-get-attack-speed-base)() |
| `float` | [get_global_cooldown_duration_base](#method-get-global-cooldown-duration-base)() |
| `float` | [get_cast_speed_base](#method-get-cast-speed-base)() |
| `float` | [get_carry_weight_base](#method-get-carry-weight-base)() |
| `float` | [get_sight_range_base](#method-get-sight-range-base)() |
| `float` | [get_core_value](#method-get-core-value)( `stat_id: int` ) |
| `void` | [clear_core_stat_overrides](#method-clear-core-stat-overrides)() |
| `void` | [set_weapon_damage_base](#method-set-weapon-damage-base)( `damage: float` ) |
| `void` | [set_weapon_damage_variance](#method-set-weapon-damage-variance)( `variance: float` ) |
| `void` | [set_weapon_speed_base](#method-set-weapon-speed-base)( `speed: float` ) |
| `float` | [get_weapon_damage_base](#method-get-weapon-damage-base)() |
| `float` | [get_weapon_damage_variance](#method-get-weapon-damage-variance)() |
| `float` | [get_weapon_speed_base](#method-get-weapon-speed-base)() |
| `bool` | [has_weapon_damage](#method-has-weapon-damage)() |
| `bool` | [has_weapon_speed](#method-has-weapon-speed)() |
| `bool` | [has_any_weapon_stats](#method-has-any-weapon-stats)() |
| `String` | [get_weapon_damage_range_text](#method-get-weapon-damage-range-text)() |
| `void` | [clear_weapon_combat_stats](#method-clear-weapon-combat-stats)() |
| `void` | [set_weapon_combat_stats](#method-set-weapon-combat-stats)( `damage: float, variance: float = 0.0, speed: float = 0.0` ) |
| `void` | [sync_all_pool_base_values](#method-sync-all-pool-base-values)() |
| `bool` | [reset_health_pool_base_value](#method-reset-health-pool-base-value)( `pool_id: int` ) |
| `bool` | [reset_resource_pool_base_value](#method-reset-resource-pool-base-value)( `pool_id: int` ) |

## Property descriptions

### int master_pool_id = 0 {#prop-master-pool-id}

Master pool configuration (ID of the master health pool)

### Array[int] permanent_immunities = [] {#prop-permanent-immunities}

Starting Immunities (IDs of immunity definitions)

### Dictionary stats_base_values =  {#prop-stats-base-values}

Base stat values - unified for all stats

### Dictionary stats_active_states =  {#prop-stats-active-states}

Active state tracking for stats - determines if stat is enabled

### Array[int] health_pool_definitions = [] {#prop-health-pool-definitions}

Pool definitions - these define which pools this Entity/Object should have

### Array[int] resource_pool_definitions = [] {#prop-resource-pool-definitions}

Array of pool IDs

### Dictionary health_pool_base_values =  {#prop-health-pool-base-values}

Pool base values (auto-populated when adding definitions)

### Dictionary resource_pool_base_values =  {#prop-resource-pool-base-values}

Key: pool_id (int), Value: &#123;"current": float, "max": float&#125;

*Level Growth Overrides*

### int growth_profile_id = 0 {#prop-growth-profile-id}

The growth profile of this entity (a GrowthProfile id): a shared list of growth entries for a kind of entity (heavy, caster, minion). 0 = none for a player class; an NPC with 0 uses the project's default profile (Gameplay Config, NPC Level Scaling). The entries below win over the profile

### Array[GrowthOverride] growth_overrides = [] {#prop-growth-overrides}

Growth of a stat or pool for this entity only (a warrior's Strength grows faster than a mage's). An entry replaces the growth the stat or pool has on its own definition; the ones without an entry keep it.

*Core Stat Overrides*

### float movement_speed_base = 0.0 {#prop-movement-speed-base}

0 = use the base value of the core stat's definition (Stats tab: Movement Speed, Attack Speed ...) Movement speed override (0 = use default)

### float attack_speed_base = 0.0 {#prop-attack-speed-base}

Attack speed multiplier override (0 = use default)

### float global_cooldown_duration_base = 0.0 {#prop-global-cooldown-duration-base}

Global cooldown override in seconds (0 = use default)

### float cast_speed_base = 0.0 {#prop-cast-speed-base}

Cast speed multiplier override (0 = use default)

### float carry_weight_base = 0.0 {#prop-carry-weight-base}

Carry weight capacity override (0 = use default)

### float sight_range_base = 0.0 {#prop-sight-range-base}

Sight/detection range override (0 = use default)

*Weapon Combat Stats*

### float weapon_damage_base = 0.0 {#prop-weapon-damage-base}

Base weapon damage for this entity (0 = no intrinsic weapon damage)

### float weapon_damage_variance = 0.0 {#prop-weapon-damage-variance}

Damage variance (±amount around base damage)

### float weapon_speed_base = 0.0 {#prop-weapon-speed-base}

Base weapon swing speed in seconds (0 = use default)

## Method descriptions

### void refresh_default_health_pool() {#method-refresh-default-health-pool}

Force refresh the default health pool (useful after database changes)

### bool is_using_default_health_pool() {#method-is-using-default-health-pool}

Check if using the default health pool

### void sync_custom_stats() {#method-sync-custom-stats}

Sync custom stats with the database cache Adds any new stats from the database and removes any that no longer exist

### GrowthOverride get_growth_override( target_id: int ) {#method-get-growth-override}

The growth override of a stat or pool, or null when this entity uses the definition's own growth

### void set_growth_override( growth_override: GrowthOverride ) {#method-set-growth-override}

Gives the stat or pool its own growth for this entity (replaces an earlier one)

### void remove_growth_override( target_id: int ) {#method-remove-growth-override}

Removes the growth override of a stat or pool, so the entity grows as the definition says again

### void sync_with_database() {#method-sync-with-database}

Legacy alias

### void add_health_pool_definition( pool_id: int ) {#method-add-health-pool-definition}

Gives the entity a health pool (a PoolDefinition id). A warning when it has it already

### void add_resource_pool_definition( pool_id: int ) {#method-add-resource-pool-definition}

Gives the entity a resource pool (mana, rage). A warning when it has it already

### bool remove_health_pool_definition( pool_id: int ) {#method-remove-health-pool-definition}

Takes a health pool away, with its base values. False when the entity did not have it

### bool remove_resource_pool_definition( pool_id: int ) {#method-remove-resource-pool-definition}

Takes a resource pool away, with its base values. False when the entity did not have it

### PoolDefinition get_health_pool_definition( pool_id: int ) {#method-get-health-pool-definition}

The definition of one of the entity's health pools, or null

### PoolDefinition get_resource_pool_definition( pool_id: int ) {#method-get-resource-pool-definition}

The definition of one of the entity's resource pools, or null

### bool has_health_pool_definition( pool_id: int ) {#method-has-health-pool-definition}

Does the entity have this health pool?

### bool has_resource_pool_definition( pool_id: int ) {#method-has-resource-pool-definition}

Does the entity have this resource pool?

### Dictionary get_health_pool_base_with_fallback( pool_id: int ) {#method-get-health-pool-base-with-fallback}

The starting current and max of a health pool as `{current, max}`, with the definition's defaults for what this entity does not set

### Dictionary get_resource_pool_base_with_fallback( pool_id: int ) {#method-get-resource-pool-base-with-fallback}

The starting current and max of a resource pool as `{current, max}`, with the definition's defaults for what this entity does not set

### void set_health_pool_base_value( pool_id: int, current: float, max_value: float ) {#method-set-health-pool-base-value}

Sets the starting current and max of a health pool for this entity. Only for a pool it has

### void set_resource_pool_base_value( pool_id: int, current: float, max_value: float ) {#method-set-resource-pool-base-value}

Sets the starting current and max of a resource pool for this entity. Only for a pool it has

### Dictionary get_health_pool_base_value( pool_id: int ) {#method-get-health-pool-base-value}

A copy of the starting `{current, max}` of a health pool; the definition's defaults when the entity sets none

### Dictionary get_resource_pool_base_value( pool_id: int ) {#method-get-resource-pool-base-value}

A copy of the starting `{current, max}` of a resource pool; the definition's defaults when the entity sets none

### void set_stat_base_value( stat_id: int, value: float ) {#method-set-stat-base-value}

Sets the base value of a stat for this entity

### float get_stat_base_value( stat_id: int ) {#method-get-stat-base-value}

The base value of a stat for this entity, or the default value of the stat definition

### void set_stat_active( stat_id: int, active: bool ) {#method-set-stat-active}

Switches a stat on or off for this entity from the start (an inactive stat is worth 0)

### bool get_stat_active( stat_id: int ) {#method-get-stat-active}

Is the stat on for this entity? True unless it was switched off

### bool has_stat( stat_id: int ) {#method-has-stat}

Does the entity set a base value for this stat?

### void remove_stat( stat_id: int ) {#method-remove-stat}

Forgets the base value and the active state of a stat

### void set_movement_speed_base( speed: float ) {#method-set-movement-speed-base}

Overrides the movement speed core stat for this entity (0 or more; 0 = the definition's base value)

### void set_attack_speed_base( speed: float ) {#method-set-attack-speed-base}

Overrides the attack speed core stat for this entity (0 = the definition's base value)

### void set_global_cooldown_duration_base( duration: float ) {#method-set-global-cooldown-duration-base}

Overrides the global cooldown core stat for this entity, in seconds (0 = the definition's base value)

### void set_cast_speed_base( speed: float ) {#method-set-cast-speed-base}

Overrides the cast speed core stat for this entity (0 = the definition's base value)

### void set_carry_weight_base( weight: float ) {#method-set-carry-weight-base}

Overrides the carry weight core stat for this entity (0 = the definition's base value)

### void set_sight_range_base( range: float ) {#method-set-sight-range-base}

Overrides the sight range core stat for this entity (0 = the definition's base value)

### float get_movement_speed_base() {#method-get-movement-speed-base}

The movement speed override (0 = none)

### float get_attack_speed_base() {#method-get-attack-speed-base}

The attack speed override (0 = none)

### float get_global_cooldown_duration_base() {#method-get-global-cooldown-duration-base}

The global cooldown override (0 = none)

### float get_cast_speed_base() {#method-get-cast-speed-base}

The cast speed override (0 = none)

### float get_carry_weight_base() {#method-get-carry-weight-base}

The carry weight override (0 = none)

### float get_sight_range_base() {#method-get-sight-range-base}

The sight range override (0 = none)

### float get_core_value( stat_id: int ) {#method-get-core-value}

The value this entity's core stat starts at: its override, or the base value of the core stat's definition

### void clear_core_stat_overrides() {#method-clear-core-stat-overrides}

Sets every core stat override to 0, so the entity uses the base values of the core stat definitions

### void set_weapon_damage_base( damage: float ) {#method-set-weapon-damage-base}

Set weapon combat base values

### void set_weapon_damage_variance( variance: float ) {#method-set-weapon-damage-variance}

Sets how far the intrinsic weapon damage varies (0 or more)

### void set_weapon_speed_base( speed: float ) {#method-set-weapon-speed-base}

Sets the intrinsic weapon speed in seconds (0 or more; 0 = the default)

### float get_weapon_damage_base() {#method-get-weapon-damage-base}

Get weapon combat base values

### float get_weapon_damage_variance() {#method-get-weapon-damage-variance}

How far the intrinsic weapon damage varies

### float get_weapon_speed_base() {#method-get-weapon-speed-base}

The intrinsic weapon speed

### bool has_weapon_damage() {#method-has-weapon-damage}

Check if entity has intrinsic weapon stats

### bool has_weapon_speed() {#method-has-weapon-speed}

True when the entity has an intrinsic weapon speed

### bool has_any_weapon_stats() {#method-has-any-weapon-stats}

True when the entity has an intrinsic weapon damage or speed

### String get_weapon_damage_range_text() {#method-get-weapon-damage-range-text}

Get weapon damage range for display

### void clear_weapon_combat_stats() {#method-clear-weapon-combat-stats}

Clear all weapon combat stats

### void set_weapon_combat_stats( damage: float, variance: float = 0.0, speed: float = 0.0 ) {#method-set-weapon-combat-stats}

Set all weapon stats at once

### void sync_all_pool_base_values() {#method-sync-all-pool-base-values}

Gives every pool the entity has a starting value, from its definition, when it has none

### bool reset_health_pool_base_value( pool_id: int ) {#method-reset-health-pool-base-value}

Sets the starting values of a health pool back to the definition's defaults. False when the entity does not have it

### bool reset_resource_pool_base_value( pool_id: int ) {#method-reset-resource-pool-base-value}

Sets the starting values of a resource pool back to the definition's defaults. False when the entity does not have it

