<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# UseStrategyInstance

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

Runtime instance of a use strategy that references a UseStrategyDefinition for configuration. Contains only runtime state and data - all logic is delegated to the definition. Follows the same pattern as AbilityInstance -&gt; AbilityDefinition relationship.

## Variables

| | | |
|---|---|---|
| `UseStrategyDefinition` | [definition](#var-definition) |  |
| `AbilityInstance` | [ability_instance](#var-ability-instance) |  |
| `CombatManager` | [combat_manager](#var-combat-manager) |  |
| `bool` | [is_active](#var-is-active) | `false` |
| `Dictionary` | [runtime_data](#var-runtime-data) | `{}` |
| `Dictionary` | [runtime_property_overrides](#var-runtime-property-overrides) | `{}` |
| `PropertyModifierSet` | [modifiers](#var-modifiers) | `PropertyModifierSet.new()` |

## Methods

| | |
|---|---|
| `Variant` | [apply_modifiers](#method-apply-modifiers)( `property_name: String, value: Variant` ) |
| `void` | [set_runtime_property](#method-set-runtime-property)( `property_name: String, value: Variant` ) |
| `void` | [clear_runtime_property](#method-clear-runtime-property)( `property_name: String` ) |
| `bool` | [has_runtime_override](#method-has-runtime-override)( `property_name: String` ) |
| `Dictionary` | [get_all_runtime_overrides](#method-get-all-runtime-overrides)() |
| `void` | [clear_all_runtime_overrides](#method-clear-all-runtime-overrides)() |
| `void` | [execute_ability](#method-execute-ability)( `target: Variant` ) |
| `bool` | [try_interrupt](#method-try-interrupt)() |
| `void` | [force_cancel](#method-force-cancel)( `user: Entity, target: Variant, reason: String` ) |
| `void` | [release_input](#method-release-input)( `user: Entity, target: Variant` ) |
| `void` | [complete_early](#method-complete-early)( `user: Entity, target: Variant` ) |
| `Variant` | [get_property_value](#method-get-property-value)( `property_name: String` ) |
| `float` | [get_cast_duration](#method-get-cast-duration)() |
| `float` | [get_channel_duration](#method-get-channel-duration)() |
| `float` | [get_channel_tick_rate](#method-get-channel-tick-rate)() |
| `bool` | [get_immobile_during_cast](#method-get-immobile-during-cast)() |
| `bool` | [get_interruptable_cast](#method-get-interruptable-cast)() |
| `int` | [get_interrupt_shield_level](#method-get-interrupt-shield-level)() |
| `float` | [get_drain_per_second](#method-get-drain-per-second)() |
| `float` | [get_min_active_duration](#method-get-min-active-duration)() |
| `float` | [get_max_active_duration](#method-get-max-active-duration)() |
| `int` | [get_interrupt_shield](#method-get-interrupt-shield)() |
| `bool` | [is_executing](#method-is-executing)() |
| `Dictionary` | [get_strategy_summary](#method-get-strategy-summary)() |
| `void` | [reset](#method-reset)() |
| `void` | [cleanup_timers](#method-cleanup-timers)() |
| `Dictionary` | [to_save_data](#method-to-save-data)() |
| `void` | [from_save_data](#method-from-save-data)( `save_data: Dictionary` ) |

## Signals

### use_strategy_completed( target: Variant ) {#signal-use-strategy-completed}

Emitted when the use strategy completes its execution

## Variable descriptions

### UseStrategyDefinition definition {#var-definition}

Reference to the immutable use strategy definition (contains all logic)

### AbilityInstance ability_instance {#var-ability-instance}

The ability instance that owns this use strategy instance

### CombatManager combat_manager {#var-combat-manager}

Combat Manager system

### bool is_active = false {#var-is-active}

Whether the strategy is currently active/executing

### Dictionary runtime_data =  {#var-runtime-data}

Runtime data specific to the use strategy type (timers, VFX arrays, etc.)

### Dictionary runtime_property_overrides =  {#var-runtime-property-overrides}

Runtime overrides for definition properties (only set when modified by effects)

### PropertyModifierSet modifiers = PropertyModifierSet.new() {#var-modifiers}

Modifiers on the numeric properties (cast time, range, drain ...): they stack and can be taken away by their source

## Method descriptions

### Variant apply_modifiers( property_name: String, value: Variant ) {#method-apply-modifiers}

A numeric property with the modifiers applied (other kinds of value pass through)

### void set_runtime_property( property_name: String, value: Variant ) {#method-set-runtime-property}

Set a runtime property override (for stat effects modifying strategy properties)

### void clear_runtime_property( property_name: String ) {#method-clear-runtime-property}

Clear a runtime property override (reverts to definition value)

### bool has_runtime_override( property_name: String ) {#method-has-runtime-override}

Check if a property has a runtime override

### Dictionary get_all_runtime_overrides() {#method-get-all-runtime-overrides}

Get all runtime overrides (for debugging/save states)

### void clear_all_runtime_overrides() {#method-clear-all-runtime-overrides}

Clear all runtime overrides

### void execute_ability( target: Variant ) {#method-execute-ability}

Main entry point called by AbilityInstance - delegates to definition

### bool try_interrupt() {#method-try-interrupt}

Try to interrupt - delegates to definition

### void force_cancel( user: Entity, target: Variant, reason: String ) {#method-force-cancel}

Force cancel - delegates to definition

### void release_input( user: Entity, target: Variant ) {#method-release-input}

The key that started the ability was released

### void complete_early( user: Entity, target: Variant ) {#method-complete-early}

Complete early (for PowerUp abilities) - delegates to definition

### Variant get_property_value( property_name: String ) {#method-get-property-value}

Get property value with runtime override support - delegates to definition

### float get_cast_duration() {#method-get-cast-duration}

Convenience getters for common properties

### float get_channel_duration() {#method-get-channel-duration}

*No description yet.*

### float get_channel_tick_rate() {#method-get-channel-tick-rate}

*No description yet.*

### bool get_immobile_during_cast() {#method-get-immobile-during-cast}

*No description yet.*

### bool get_interruptable_cast() {#method-get-interruptable-cast}

*No description yet.*

### int get_interrupt_shield_level() {#method-get-interrupt-shield-level}

*No description yet.*

### float get_drain_per_second() {#method-get-drain-per-second}

*No description yet.*

### float get_min_active_duration() {#method-get-min-active-duration}

*No description yet.*

### float get_max_active_duration() {#method-get-max-active-duration}

*No description yet.*

### int get_interrupt_shield() {#method-get-interrupt-shield}

Get current interrupt shield level (for UI or debugging)

### bool is_executing() {#method-is-executing}

Check if strategy is currently executing

### Dictionary get_strategy_summary() {#method-get-strategy-summary}

Get current strategy state summary

### void reset() {#method-reset}

Reset instance state (for reuse)

### void cleanup_timers() {#method-cleanup-timers}

Cleanup all timers (delegates to definition for strategy-specific cleanup)

### Dictionary to_save_data() {#method-to-save-data}

Save runtime state to dictionary

### void from_save_data( save_data: Dictionary ) {#method-from-save-data}

Load runtime state from dictionary

