<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ActiveAbilityDefinition

**Inherits:** [PassiveAbilityDefinition](/advanced/abilities-and-effects/abilities/passive-ability-definition) < [AbilityDefinition](/advanced/abilities-and-effects/abilities/ability-definition) < [DatabaseResource](/advanced/data-and-database/database-classes/database-resource) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

**Inherited by:** [ChargeStackActiveAbilityDefinition](/advanced/abilities-and-effects/abilities/charge-stack-active-ability-definition), [ComboActiveAbilityDefinition](/advanced/abilities-and-effects/abilities/combo-active-ability-definition), [PowerUpActiveAbilityDefinition](/advanced/abilities-and-effects/abilities/power-up-active-ability-definition)

ActiveAbilityDefinition with integrated Requirement system

## Properties

| | | |
|---|---|---|
| `TargetStrategyDefinition` | [targeting_strategy_definition](#prop-targeting-strategy-definition) |  |
| `UseStrategyDefinition` | [use_strategy_definition](#prop-use-strategy-definition) |  |
| `Array[int]` | [on_use_effects](#prop-on-use-effects) | `[]` |
| `int` | [ability_school](#prop-ability-school) | `0` |
| `bool` | [on_global_cooldown](#prop-on-global-cooldown) | `true` |
| `float` | [cooldown_duration](#prop-cooldown-duration) | `0.0` |
| `bool` | [use_weapon_speed_as_cooldown](#prop-use-weapon-speed-as-cooldown) | `false` |
| `float` | [on_use_effects_delay](#prop-on-use-effects-delay) | `0.0` |
| `bool` | [strip_passive_on_inactive](#prop-strip-passive-on-inactive) | `true` |
| `String` | [cost_pool_type](#prop-cost-pool-type) | `"No Cost"` |
| `int` | [cost_pool_id](#prop-cost-pool-id) | `0` |
| `float` | [cost_amount](#prop-cost-amount) | `0.0` |
| `String` | [gain_pool_type](#prop-gain-pool-type) | `"No Cost"` |
| `int` | [gain_pool_id](#prop-gain-pool-id) | `0` |
| `float` | [gain_amount](#prop-gain-amount) | `0.0` |
| `AmmoSource` | [ammo_source](#prop-ammo-source) | `AmmoSource.NONE` |
| `int` | [ammo_amount](#prop-ammo-amount) | `1` |
| `int` | [ammo_item_id](#prop-ammo-item-id) | `0` |
| `int` | [ammo_group_id](#prop-ammo-group-id) | `0` |
| `int` | [ammo_currency_id](#prop-ammo-currency-id) | `0` |

## Methods

| | |
|---|---|
| `Array[Effect]` | [get_current_on_use_effects](#method-get-current-on-use-effects)( `ability_instance: AbilityInstance` ) |
| `void` | [handle_completion](#method-handle-completion)( `ability_instance: AbilityInstance` ) |
| `AbilityInstance.AbilityUseAttemptResult` | [validate_ability_usage](#method-validate-ability-usage)( `ability_instance: AbilityInstance, from_action: bool` ) |
| `float` | [get_effective_cooldown_duration](#method-get-effective-cooldown-duration)( `ability_instance: AbilityInstance` ) |
| `bool` | [can_be_interrupted](#method-can-be-interrupted)() |
| `float` | [get_execution_duration](#method-get-execution-duration)() |
| `float` | [get_max_range](#method-get-max-range)() |
| `bool` | [requires_line_of_sight](#method-requires-line-of-sight)() |
| `Dictionary` | [check_requirements](#method-check-requirements)( `user: Entity` ) |
| `bool` | [meets_requirements](#method-meets-requirements)( `user: Entity` ) |
| `String` | [get_requirement_failure_message](#method-get-requirement-failure-message)( `user: Entity` ) |
| `Dictionary` | [get_cost_info](#method-get-cost-info)() |
| `Dictionary` | [get_gain_info](#method-get-gain-info)() |
| `bool` | [has_costs](#method-has-costs)() |
| `bool` | [has_gains](#method-has-gains)() |
| `String` | [get_tooltip_description](#method-get-tooltip-description)() |

## Enumerations

### enum AmmoSource {#enum-ammosource}

- **NONE** = `0` - no ammo or reagent is spent
- **EQUIPPED_AMMO** = `1` - the ammo equipped in the ammo slot (the player chooses it), of the group the weapon shoots
- **ITEM** = `2` - a specific item from the inventory (a reagent)
- **ITEM_GROUP** = `3` - any item of a group from the inventory
- **CURRENCY** = `4` - a currency

## Property descriptions

*Strategy Definitions*

### TargetStrategyDefinition targeting_strategy_definition {#prop-targeting-strategy-definition}

Defines how this ability selects and validates targets (self, enemy, point, etc.)

### UseStrategyDefinition use_strategy_definition {#prop-use-strategy-definition}

Defines how this ability executes over time (instant, cast, channel, toggle)

*On Use Effects*

### Array[int] on_use_effects = [] {#prop-on-use-effects}

Effects applied to the target when this ability is activated.

*General*

### int ability_school = 0 {#prop-ability-school}

School/category of this ability for dispel/immunity purposes (fire, healing, physical, etc.) References a SchoolTypeDefinition resource by ID

### bool on_global_cooldown = true {#prop-on-global-cooldown}

Whether this ability triggers the global cooldown that affects other abilities

### float cooldown_duration = 0.0 {#prop-cooldown-duration}

Base cooldown duration in seconds before ability can be used again

### bool use_weapon_speed_as_cooldown = false {#prop-use-weapon-speed-as-cooldown}

If true, uses weapon attack speed as cooldown instead of cooldown_duration

### float on_use_effects_delay = 0.0 {#prop-on-use-effects-delay}

Delay in seconds before on-use effects are applied after the ability fires. Use this to align effect application with hit animations - e.g. a melee swing that visually lands 0.3s after the ability activates. Has no effect on passive_effects.

### bool strip_passive_on_inactive = true {#prop-strip-passive-on-inactive}

If true, passive effects (inherited from PassiveAbilityDefinition) are removed when requirements are no longer met. If false, passive effects persist even while inactive - useful for proc-to-activate patterns where the passive enables its own condition.

*Pool Actions*

### String cost_pool_type = "No Cost" {#prop-cost-pool-type}

Type of resource pool this ability consumes (No Cost, Resource Pool, Health Pool)

### int cost_pool_id = 0 {#prop-cost-pool-id}

ID of the specific pool to consume from (references PoolDefinition)

### float cost_amount = 0.0 {#prop-cost-amount}

Amount of resources to consume when using this ability

### String gain_pool_type = "No Cost" {#prop-gain-pool-type}

Type of resource pool this ability grants to (No Cost, Resource Pool, Health Pool)

### int gain_pool_id = 0 {#prop-gain-pool-id}

ID of the specific pool to grant resources to (references PoolDefinition)

### float gain_amount = 0.0 {#prop-gain-amount}

Amount of resources to grant when using this ability (combo points, rage, etc.)

*Ammo and Reagents*

### AmmoSource ammo_source = AmmoSource.NONE {#prop-ammo-source}

What this ability spends a piece of every time it is used

### int ammo_amount = 1 {#prop-ammo-amount}

How many pieces (arrows, reagents, coins) every use takes

### int ammo_item_id = 0 {#prop-ammo-item-id}

The item spent when the source is Item

### int ammo_group_id = 0 {#prop-ammo-group-id}

The group of items spent when the source is Item Group

### int ammo_currency_id = 0 {#prop-ammo-currency-id}

The currency spent when the source is Currency

## Method descriptions

### Array[Effect] get_current_on_use_effects( ability_instance: AbilityInstance ) {#method-get-current-on-use-effects}

Return the resolved on-use effects for this ability. Respects live_effects overrides on the instance if present.

### void handle_completion( ability_instance: AbilityInstance ) {#method-handle-completion}

Override to add active ability specific validation Active abilities complete the standard way (cooldown, resource gain, state, ability_used); the passive base class that this extends has no completion logic

### AbilityInstance.AbilityUseAttemptResult validate_ability_usage( ability_instance: AbilityInstance, from_action: bool ) {#method-validate-ability-usage}

Passive abilities cannot be actively used. *(from [PassiveAbilityDefinition](/advanced/abilities-and-effects/abilities/passive-ability-definition))*

### float get_effective_cooldown_duration( ability_instance: AbilityInstance ) {#method-get-effective-cooldown-duration}

Get the effective cooldown duration for this ability Handles weapon speed cooldowns and runtime overrides

### bool can_be_interrupted() {#method-can-be-interrupted}

Check if this ability can be interrupted during casting/channeling

### float get_execution_duration() {#method-get-execution-duration}

Get the cast/channel duration for this ability

### float get_max_range() {#method-get-max-range}

Get the maximum range of this ability

### bool requires_line_of_sight() {#method-requires-line-of-sight}

Check if this ability requires line of sight to target

### Dictionary check_requirements( user: Entity ) {#method-check-requirements}

Check if user meets all requirements to use this ability

### bool meets_requirements( user: Entity ) {#method-meets-requirements}

Quick check: can this ability be used by the specified user?

### String get_requirement_failure_message( user: Entity ) {#method-get-requirement-failure-message}

Get failure message for why requirements aren't met

### Dictionary get_cost_info() {#method-get-cost-info}

Get comprehensive cost information for UI display

### Dictionary get_gain_info() {#method-get-gain-info}

Get comprehensive gain information for UI display

### bool has_costs() {#method-has-costs}

Check if this ability has any resource costs

### bool has_gains() {#method-has-gains}

Check if this ability grants any resources

### String get_tooltip_description() {#method-get-tooltip-description}

*Overrides this function of [PassiveAbilityDefinition](/advanced/abilities-and-effects/abilities/passive-ability-definition).*

