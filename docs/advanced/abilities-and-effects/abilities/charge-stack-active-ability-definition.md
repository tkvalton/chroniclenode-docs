<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ChargeStackActiveAbilityDefinition

**Inherits:** [ActiveAbilityDefinition](/advanced/abilities-and-effects/abilities/active-ability-definition) < [PassiveAbilityDefinition](/advanced/abilities-and-effects/abilities/passive-ability-definition) < [AbilityDefinition](/advanced/abilities-and-effects/abilities/ability-definition) < [DatabaseResource](/advanced/data-and-database/database-classes/database-resource) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Charge-based ability system with configurable regeneration modes.

## Description

Charge-based ability system with configurable regeneration modes.

SHARED mode (default): Sequential charge regeneration like most games. INDEPENDENT mode: Parallel charge regeneration for burst abilities.

## Properties

| | | |
|---|---|---|
| `int` | [max_charges](#prop-max-charges) | `2` |
| `bool` | [start_with_full_charges](#prop-start-with-full-charges) | `true` |
| `StackCooldownType` | [charge_regeneration_mode](#prop-charge-regeneration-mode) | `StackCooldownType.SHARED` |

## Methods

| | |
|---|---|
| `void` | [handle_completion](#method-handle-completion)( `ability_instance: AbilityInstance` ) |
| `AbilityInstance.AbilityUseAttemptResult` | [validate_ability_usage](#method-validate-ability-usage)( `ability_instance: AbilityInstance, from_action: bool` ) |
| `void` | [cleanup_ability_logic](#method-cleanup-ability-logic)( `ability_instance: AbilityInstance` ) |
| `void` | [initialize_charge_system](#method-initialize-charge-system)( `ability_instance: AbilityInstance` ) |
| `float` | [get_next_charge_time_remaining](#method-get-next-charge-time-remaining)( `ability_instance: AbilityInstance` ) |
| `bool` | [has_charges_available](#method-has-charges-available)( `ability_instance: AbilityInstance` ) |
| `bool` | [is_at_max_charges](#method-is-at-max-charges)( `ability_instance: AbilityInstance` ) |
| `float` | [get_full_recharge_time](#method-get-full-recharge-time)( `ability_instance: AbilityInstance` ) |
| `float` | [get_charge_utilization_percent](#method-get-charge-utilization-percent)( `ability_instance: AbilityInstance` ) |
| `void` | [force_regenerate_charges](#method-force-regenerate-charges)( `ability_instance: AbilityInstance, charge_count: int` ) |
| `void` | [reset_charges_to_max](#method-reset-charges-to-max)( `ability_instance: AbilityInstance` ) |
| `Dictionary` | [get_charge_system_info](#method-get-charge-system-info)( `ability_instance: AbilityInstance` ) |
| `bool` | [should_show_cooldown_ui](#method-should-show-cooldown-ui)( `ability_instance: AbilityInstance` ) |
| `String` | [get_tooltip_description](#method-get-tooltip-description)() |
| `void` | [restore_regeneration](#method-restore-regeneration)( `ability_instance: AbilityInstance, cooldown_remaining: float, independent_remaining: Array` ) |

## Enumerations

### enum StackCooldownType {#enum-stackcooldowntype}

- **SHARED** = `0` - One shared cooldown - charges regenerate sequentially (default)
- **INDEPENDENT** = `1` - Each charge has its own timer - charges can regenerate simultaneously

## Property descriptions

*Charge Stack Settings*

### int max_charges = 2 {#prop-max-charges}

Maximum number of charges this ability can hold

### bool start_with_full_charges = true {#prop-start-with-full-charges}

Whether to start with full charges (true) or build them up over time (false = start with 1)

*Charge Regeneration Mode*

### StackCooldownType charge_regeneration_mode = StackCooldownType.SHARED {#prop-charge-regeneration-mode}

*No description yet.*

## Method descriptions

### void handle_completion( ability_instance: AbilityInstance ) {#method-handle-completion}

Override to add active ability specific validation Active abilities complete the standard way (cooldown, resource gain, state, ability_used); the passive base class that this extends has no completion logic *(from [ActiveAbilityDefinition](/advanced/abilities-and-effects/abilities/active-ability-definition))*

### AbilityInstance.AbilityUseAttemptResult validate_ability_usage( ability_instance: AbilityInstance, from_action: bool ) {#method-validate-ability-usage}

*Overrides this function of [ActiveAbilityDefinition](/advanced/abilities-and-effects/abilities/active-ability-definition).*

### void cleanup_ability_logic( ability_instance: AbilityInstance ) {#method-cleanup-ability-logic}

No special cleanup needed - AbilityInstance handles effect removal. *(from [PassiveAbilityDefinition](/advanced/abilities-and-effects/abilities/passive-ability-definition))*

### void initialize_charge_system( ability_instance: AbilityInstance ) {#method-initialize-charge-system}

*No description yet.*

### float get_next_charge_time_remaining( ability_instance: AbilityInstance ) {#method-get-next-charge-time-remaining}

*No description yet.*

### bool has_charges_available( ability_instance: AbilityInstance ) {#method-has-charges-available}

*No description yet.*

### bool is_at_max_charges( ability_instance: AbilityInstance ) {#method-is-at-max-charges}

*No description yet.*

### float get_full_recharge_time( ability_instance: AbilityInstance ) {#method-get-full-recharge-time}

*No description yet.*

### float get_charge_utilization_percent( ability_instance: AbilityInstance ) {#method-get-charge-utilization-percent}

*No description yet.*

### void force_regenerate_charges( ability_instance: AbilityInstance, charge_count: int ) {#method-force-regenerate-charges}

*No description yet.*

### void reset_charges_to_max( ability_instance: AbilityInstance ) {#method-reset-charges-to-max}

*No description yet.*

### Dictionary get_charge_system_info( ability_instance: AbilityInstance ) {#method-get-charge-system-info}

*No description yet.*

### bool should_show_cooldown_ui( ability_instance: AbilityInstance ) {#method-should-show-cooldown-ui}

*No description yet.*

### String get_tooltip_description() {#method-get-tooltip-description}

*Overrides this function of [ActiveAbilityDefinition](/advanced/abilities-and-effects/abilities/active-ability-definition).*

### void restore_regeneration( ability_instance: AbilityInstance, cooldown_remaining: float, independent_remaining: Array ) {#method-restore-regeneration}

Brings charge regeneration back after a load: `cooldown_remaining` is what was left of the shared cooldown, `independent_remaining` the time left of each independent charge timer (-1 = not running). Missing charges with nothing saved regenerate from the start

