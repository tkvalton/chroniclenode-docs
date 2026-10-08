<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# PowerUpActiveAbilityDefinition

**Inherits:** [ActiveAbilityDefinition](/advanced/abilities-and-effects/abilities/active-ability-definition) < [PassiveAbilityDefinition](/advanced/abilities-and-effects/abilities/passive-ability-definition) < [AbilityDefinition](/advanced/abilities-and-effects/abilities/ability-definition) < [DatabaseResource](/advanced/data-and-database/database-classes/database-resource) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

PowerUpActiveAbilityDefinition adapts its charging behaviour based on the UseStrategyDefinition.

## Description

PowerUpActiveAbilityDefinition adapts its charging behaviour based on the UseStrategyDefinition.

Instant:  Resource-based charging (spend more resources = higher tier) Cast:     Cast time determines charge tier (longer cast = higher tier) Channel:  Progressive/accumulating effects during channel + final burst Toggle:   Charge builds while toggle is active (stance power-up over time)

## Properties

| | | |
|---|---|---|
| `Array[Array]` | [tier_effects](#prop-tier-effects) | `[]` |
| `Array[float]` | [tier_thresholds](#prop-tier-thresholds) | `[]` |
| `float` | [max_charge_resource](#prop-max-charge-resource) | `100.0` |
| `bool` | [progressive_channel_effects](#prop-progressive-channel-effects) | `true` |
| `bool` | [channel_final_burst](#prop-channel-final-burst) | `true` |
| `bool` | [toggle_stacking_tiers](#prop-toggle-stacking-tiers) | `false` |

## Methods

| | |
|---|---|
| `Array` | [get_current_on_use_effects](#method-get-current-on-use-effects)( `ability_instance: AbilityInstance` ) |
| `void` | [prepare_usage](#method-prepare-usage)( `ability_instance: AbilityInstance` ) |
| `void` | [handle_completion](#method-handle-completion)( `ability_instance: AbilityInstance` ) |
| `float` | [get_tier_threshold](#method-get-tier-threshold)( `tier_index: int` ) |
| `Array` | [get_tier_effects_array](#method-get-tier-effects-array)( `tier_index: int` ) |
| `int` | [get_max_charge_tiers](#method-get-max-charge-tiers)() |
| `bool` | [can_achieve_tier](#method-can-achieve-tier)( `tier_index: int, value: float` ) |
| `float` | [get_next_tier_threshold](#method-get-next-tier-threshold)( `current_value: float` ) |
| `String` | [get_tooltip_description](#method-get-tooltip-description)() |

## Property descriptions

*Charge Tiers*

### Array[Array] tier_effects = [] {#prop-tier-effects}

On-use effects for each charge tier. Index 0 = Tier 1, Index 1 = Tier 2, etc.

*Charge Timing*

### Array[float] tier_thresholds = [] {#prop-tier-thresholds}

Thresholds for reaching each tier. Meaning depends on UseStrategy: Instant: Resource costs, Channel: Time intervals, Cast: Cast time, Toggle: Active durations.

*Instant Strategy*

### float max_charge_resource = 100.0 {#prop-max-charge-resource}

Maximum resources that can be spent for charging

*Channel Strategy*

### bool progressive_channel_effects = true {#prop-progressive-channel-effects}

Whether to apply tier effects progressively during channel (vs only final burst)

### bool channel_final_burst = true {#prop-channel-final-burst}

Whether to apply a final burst based on achieved tier when channel completes

*Toggle Strategy*

### bool toggle_stacking_tiers = false {#prop-toggle-stacking-tiers}

Whether tier effects stack (add new effects) or replace (change effects)

## Method descriptions

### Array get_current_on_use_effects( ability_instance: AbilityInstance ) {#method-get-current-on-use-effects}

Return the resolved on-use effects for this ability. Respects live_effects overrides on the instance if present. *(from [ActiveAbilityDefinition](/advanced/abilities-and-effects/abilities/active-ability-definition))*

### void prepare_usage( ability_instance: AbilityInstance ) {#method-prepare-usage}

Called by the ability instance before the cost is paid: the tier is the highest the user can pay for (base cost + threshold, up to `max_charge_resource`), and what that costs replaces the cost for this one use. The tier is kept for the effects

### void handle_completion( ability_instance: AbilityInstance ) {#method-handle-completion}

Standard completion; the one-use cost and tier are forgotten afterwards

### float get_tier_threshold( tier_index: int ) {#method-get-tier-threshold}

*No description yet.*

### Array get_tier_effects_array( tier_index: int ) {#method-get-tier-effects-array}

*No description yet.*

### int get_max_charge_tiers() {#method-get-max-charge-tiers}

*No description yet.*

### bool can_achieve_tier( tier_index: int, value: float ) {#method-can-achieve-tier}

*No description yet.*

### float get_next_tier_threshold( current_value: float ) {#method-get-next-tier-threshold}

*No description yet.*

### String get_tooltip_description() {#method-get-tooltip-description}

*Overrides this function of [ActiveAbilityDefinition](/advanced/abilities-and-effects/abilities/active-ability-definition).*

