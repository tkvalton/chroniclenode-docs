<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# AbilityInstance

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

Runtime instance of an ability that references an AbilityDefinition for configuration Handles execution state, cooldowns, and effect application with definition-based logic delegation Now follows the effects architecture pattern - definitions contain logic, instances contain runtime state

## Variables

| | | |
|---|---|---|
| `AbilityDefinition` | [definition](#var-definition) |  |
| `Entity` | [user](#var-user) |  |
| `SourceType` | [source](#var-source) | `SourceType.PERSISTENT` |
| `CombatManager` | [combat_manager](#var-combat-manager) |  |
| `ChronoManager` | [chrono_manager](#var-chrono-manager) |  |
| `TargetStrategyInstance` | [target_strategy_instance](#var-target-strategy-instance) |  |
| `UseStrategyInstance` | [use_strategy_instance](#var-use-strategy-instance) |  |
| `AbilityState` | [current_state](#var-current-state) | `AbilityState.READY` |
| `Variant` | [current_target](#var-current-target) | `null` |
| `Dictionary` | [runtime_data](#var-runtime-data) | `{}` |
| `Array[Effect]` | [live_effects](#var-live-effects) | `[]` |
| `bool` | [has_live_effects](#var-has-live-effects) | `false` |
| `int` | [current_combo_step](#var-current-combo-step) | `0` |
| `Timer` | [combo_timeout_timer](#var-combo-timeout-timer) | `null` |
| `Array[Timer]` | [charge_timers](#var-charge-timers) | `[]` |
| `int` | [current_charges](#var-current-charges) | `0` |
| `Timer` | [cooldown_timer](#var-cooldown-timer) | `null` |
| `Timer` | [application_delay_timer](#var-application-delay-timer) | `null` |
| `Variant` | [delayed_application_target](#var-delayed-application-target) | `null` |
| `bool` | [effects_pending](#var-effects-pending) | `false` |
| `Dictionary` | [last_cost_paid](#var-last-cost-paid) | `{}` |
| `float` | [use_charge_fraction](#var-use-charge-fraction) | `1.0` |
| `Dictionary` | [last_ammo_paid](#var-last-ammo-paid) | `{}` |
| `Array[Effect]` | [ammo_effects_for_use](#var-ammo-effects-for-use) | `[]` |
| `Array[EffectInstance]` | [active_passive_effects](#var-active-passive-effects) | `[]` |
| `bool` | [is_monitoring_requirements](#var-is-monitoring-requirements) | `false` |
| `bool` | [icon_changed](#var-icon-changed) | `false` |
| `bool` | [name_changed](#var-name-changed) | `false` |
| `bool` | [description_changed](#var-description-changed) | `false` |
| `Texture2D` | [current_icon](#var-current-icon) | `null` |
| `String` | [current_display_name](#var-current-display-name) | `""` |
| `String` | [current_description](#var-current-description) | `""` |
| `Dictionary` | [runtime_property_overrides](#var-runtime-property-overrides) | `{}` |
| `PropertyModifierSet` | [modifiers](#var-modifiers) | `PropertyModifierSet.new()` |

## Methods

| | |
|---|---|
| `int` | [get_ability_school](#method-get-ability-school)() |
| `bool` | [get_on_global_cooldown](#method-get-on-global-cooldown)() |
| `float` | [get_cooldown_duration](#method-get-cooldown-duration)() |
| `float` | [get_cost_amount](#method-get-cost-amount)() |
| `float` | [get_gain_amount](#method-get-gain-amount)() |
| `int` | [get_cost_pool_id](#method-get-cost-pool-id)() |
| `int` | [get_gain_pool_id](#method-get-gain-pool-id)() |
| `float` | [get_combo_timeout](#method-get-combo-timeout)() |
| `int` | [get_current_combo_step](#method-get-current-combo-step)() |
| `int` | [get_max_combo_steps](#method-get-max-combo-steps)() |
| `float` | [get_combo_timeout_remaining](#method-get-combo-timeout-remaining)() |
| `bool` | [is_in_combo](#method-is-in-combo)() |
| `void` | [set_runtime_property](#method-set-runtime-property)( `property_name: String, value: Variant` ) |
| `void` | [clear_runtime_property](#method-clear-runtime-property)( `property_name: String` ) |
| `bool` | [has_runtime_override](#method-has-runtime-override)( `property_name: String` ) |
| `Dictionary` | [get_all_runtime_overrides](#method-get-all-runtime-overrides)() |
| `void` | [clear_all_runtime_overrides](#method-clear-all-runtime-overrides)() |
| `AbilityUseAttemptResult` | [use_ability](#method-use-ability)( `target: Variant = null, from_action: bool = false` ) |
| `void` | [apply_ability_effects](#method-apply-ability-effects)( `target: Variant` ) |
| `AbilityUseAttemptResult` | [can_use](#method-can-use)( `from_action: bool = false` ) |
| `void` | [refund_cost](#method-refund-cost)() |
| `bool` | [try_interrupt](#method-try-interrupt)() |
| `void` | [receive_shared_cooldown](#method-receive-shared-cooldown)( `duration: float` ) |
| `void` | [set_state](#method-set-state)( `new_state: AbilityState` ) |
| `Array` | [get_current_effects](#method-get-current-effects)() |
| `bool` | [add_effect_by_id](#method-add-effect-by-id)( `effect_id: int` ) |
| `Array[int]` | [remove_effect_by_id](#method-remove-effect-by-id)( `effect_id: int` ) |
| `bool` | [restore_effect_by_id_at_positions](#method-restore-effect-by-id-at-positions)( `effect_id: int, positions: Array[int]` ) |
| `void` | [reset_to_definition_effects](#method-reset-to-definition-effects)() |
| `bool` | [has_effect_modifications](#method-has-effect-modifications)() |
| `Dictionary` | [get_effects_memory_info](#method-get-effects-memory-info)() |
| `AbilityDefinition` | [swap_definition](#method-swap-definition)( `new_definition: AbilityDefinition` ) |
| `String` | [get_display_name](#method-get-display-name)() |
| `String` | [get_description](#method-get-description)() |
| `float` | [get_max_range](#method-get-max-range)() |
| `float` | [get_ai_range](#method-get-ai-range)() |
| `Texture2D` | [get_icon](#method-get-icon)() |
| `int` | [get_id](#method-get-id)() |
| `int` | [get_school](#method-get-school)() |
| `void` | [set_dynamic_icon](#method-set-dynamic-icon)( `new_icon: Texture2D` ) |
| `void` | [set_dynamic_display_name](#method-set-dynamic-display-name)( `new_name: String` ) |
| `void` | [set_dynamic_description](#method-set-dynamic-description)( `new_description: String` ) |
| `void` | [reset_dynamic_properties](#method-reset-dynamic-properties)() |
| `float` | [get_cooldown_remaining](#method-get-cooldown-remaining)() |
| `bool` | [is_on_cooldown](#method-is-on-cooldown)() |
| `int` | [get_current_charges](#method-get-current-charges)() |
| `int` | [get_max_charges](#method-get-max-charges)() |
| `bool` | [is_inactive](#method-is-inactive)() |
| `String` | [get_requirement_failure_message](#method-get-requirement-failure-message)() |
| `String` | [get_requirements_summary](#method-get-requirements-summary)() |
| `bool` | [is_executing](#method-is-executing)() |
| `bool` | [is_ready](#method-is-ready)() |
| `void` | [setup_requirement_monitoring](#method-setup-requirement-monitoring)() |
| `void` | [cleanup_requirement_monitoring](#method-cleanup-requirement-monitoring)() |
| `void` | [check_and_update_requirement_state](#method-check-and-update-requirement-state)() |
| `void` | [activate_passive_effects](#method-activate-passive-effects)() |
| `void` | [apply_passive_effects](#method-apply-passive-effects)() |
| `void` | [remove_passive_effects](#method-remove-passive-effects)() |
| `bool` | [is_passive_active](#method-is-passive-active)() |
| `Array[EffectInstance]` | [get_active_passive_effects](#method-get-active-passive-effects)() |
| `Dictionary` | [to_save_data](#method-to-save-data)() |
| `void` | [from_save_data](#method-from-save-data)( `save_data: Dictionary` ) |
| `void` | [cleanup](#method-cleanup)() |
| `void` | [cleanup_timers](#method-cleanup-timers)() |
| `String` | [get_ammo_warning](#method-get-ammo-warning)() |
| `void` | [release_input](#method-release-input)() |

## Signals

### ability_used( ability_instance: AbilityInstance ) {#signal-ability-used}

Emitted when the ability is used

### ability_state_changed( ability_instance: AbilityInstance, old_state: AbilityState, new_state: AbilityState ) {#signal-ability-state-changed}

Emitted when ability state changes (ready, cooldown, etc.)

### ability_appearance_changed( ability_instance: AbilityInstance ) {#signal-ability-appearance-changed}

Emitted when ability properties are dynamically changed (icon, name, description)

### cooldown_started( ability_instance: AbilityInstance, duration: float ) {#signal-cooldown-started}

Emitted when the ability's cooldown starts

### cooldown_ended( ability_instance: AbilityInstance ) {#signal-cooldown-ended}

Emitted when the ability's cooldown ends

### ability_reflected( ability_instance: AbilityInstance, ward_holder: Entity ) {#signal-ability-reflected}

Emitted when a reflective ward sent this ability back at its caster (`ward_holder` is who it was aimed at)

### charge_consumed( ability_instance: AbilityInstance, charges_remaining: int, max_charges: int ) {#signal-charge-consumed}

Emitted when a charge is consumed (for charge stack abilities)

### charge_restored( ability_instance: AbilityInstance, charges_remaining: int, max_charges: int ) {#signal-charge-restored}

Emitted when a charge is restored/regenerated (for charge stack abilities)

### charges_changed( ability_instance: AbilityInstance, charges_remaining: int, max_charges: int ) {#signal-charges-changed}

Emitted when charge count changes for any reason (consumed, restored, or reset)

### toggle_activated( ability_instance: AbilityInstance ) {#signal-toggle-activated}

Emitted when a toggle ability is activated

### toggle_deactivated( ability_instance: AbilityInstance ) {#signal-toggle-deactivated}

Emitted when a toggle ability is deactivated

### toggle_state_changed( ability_instance: AbilityInstance, is_active: bool ) {#signal-toggle-state-changed}

Emitted when toggle state changes for any reason

## Enumerations

### enum AbilityState {#enum-abilitystate}

- **READY** = `0`
- **CASTING** = `1`
- **CHANNELING** = `2`
- **SILENCED** = `3`
- **ON_COOLDOWN** = `4`
- **INACTIVE** = `5`

### enum AbilityUseAttemptResult {#enum-abilityuseattemptresult}

- **OK** = `0`
- **ENTITY_DEAD** = `1`
- **ON_GLOBAL_COOLDOWN** = `2`
- **ON_COOLDOWN** = `3`
- **INSUFFICIENT_RESOURCE** = `4`
- **ABILITY_NOT_FOUND** = `5`
- **ABILITY_INACTIVE** = `6`
- **SILENCED** = `7`
- **TARGET_OUT_OF_RANGE** = `8`
- **DISARMED** = `9`
- **INCAPACITATED** = `10`
- **WEAPON_REQUIREMENT_NOT_MET** = `11`
- **INVALID_TARGET** = `12`
- **REQUIREMENTS_NOT_MET** = `13`
- **BUSY** = `14`
- **SCHOOL_LOCKED** = `15`
- **TOGGLE_TOO_SOON** = `16`
- **NO_AMMO** = `17`

### enum SourceType {#enum-sourcetype}

- **INTRINSIC** = `0`
- **EXTERNAL** = `1`
- **STATEFUL** = `2`

## Variable descriptions

### AbilityDefinition definition {#var-definition}

Reference to the immutable ability definition (shared across instances)

### Entity user {#var-user}

The entity that owns/uses this ability

### SourceType source = SourceType.PERSISTENT {#var-source}

Source type for save/load logic

### CombatManager combat_manager {#var-combat-manager}

SystemManagers refs

### ChronoManager chrono_manager {#var-chrono-manager}

*No description yet.*

### TargetStrategyInstance target_strategy_instance {#var-target-strategy-instance}

Runtime instance of the targeting strategy

### UseStrategyInstance use_strategy_instance {#var-use-strategy-instance}

Runtime instance of the use strategy

### AbilityState current_state = AbilityState.READY {#var-current-state}

Current execution state of the ability

### Variant current_target = null {#var-current-target}

Current target for this ability execution

### Dictionary runtime_data =  {#var-runtime-data}

Runtime data storage for ability-specific information

### Array[Effect] live_effects = [] {#var-live-effects}

Live effects array - only created when effects are modified

### bool has_live_effects = false {#var-has-live-effects}

Whether this instance has been modified and uses live_effects instead of definition.effects

### int current_combo_step = 0 {#var-current-combo-step}

Current combo step (0 = first use, 1 = second use, etc.)

### Timer combo_timeout_timer = null {#var-combo-timeout-timer}

Timer for combo timeout

### Array[Timer] charge_timers = [] {#var-charge-timers}

Array of charge timers for individual charge cooldowns

### int current_charges = 0 {#var-current-charges}

Current number of available charges

### Timer cooldown_timer = null {#var-cooldown-timer}

Timer for ability cooldown

### Timer application_delay_timer = null {#var-application-delay-timer}

Timer for application delay

### Variant delayed_application_target = null {#var-delayed-application-target}

Target stored for delayed application

### bool effects_pending = false {#var-effects-pending}

True from the end of the use strategy until the delayed effects have been applied: the ability cannot be used again meanwhile

### Dictionary last_cost_paid =  {#var-last-cost-paid}

What the last use paid, for a refund: {"pool_id": int, "amount": float}

### float use_charge_fraction = 1.0 {#var-use-charge-fraction}

How far a drawn shot was drawn when it was released (0 to 1; 1 for everything that is not drawn): effects that scale with the charge read it

### Dictionary last_ammo_paid =  {#var-last-ammo-paid}

What the last use took as ammo or reagent (see AmmoCost), for the refund

### Array[Effect] ammo_effects_for_use = [] {#var-ammo-effects-for-use}

The effects of the ammo spent by the last use (a poison arrow): applied with the ability's own effects

### Array[EffectInstance] active_passive_effects = [] {#var-active-passive-effects}

Active effect instances from this passive ability (only for PassiveAbilityDefinition)

### bool is_monitoring_requirements = false {#var-is-monitoring-requirements}

Whether this passive is monitoring requirements reactively

### bool icon_changed = false {#var-icon-changed}

Whether the icon has been dynamically changed

### bool name_changed = false {#var-name-changed}

Whether the name has been dynamically changed

### bool description_changed = false {#var-description-changed}

Whether the description has been dynamically changed

### Texture2D current_icon = null {#var-current-icon}

Current dynamic icon (if changed)

### String current_display_name = "" {#var-current-display-name}

Current dynamic display name (if changed)

### String current_description = "" {#var-current-description}

Current dynamic description (if changed)

### Dictionary runtime_property_overrides =  {#var-runtime-property-overrides}

Runtime overrides for definition properties (only set when modified by effects)

### PropertyModifierSet modifiers = PropertyModifierSet.new() {#var-modifiers}

Modifiers from abilities, effects and stats (cooldown, cost, gain ...): they stack and can be taken away by their source

## Method descriptions

### int get_ability_school() {#method-get-ability-school}

Get ability school (runtime override or definition)

### bool get_on_global_cooldown() {#method-get-on-global-cooldown}

Get GCD setting (runtime override or definition)

### float get_cooldown_duration() {#method-get-cooldown-duration}

Get cooldown duration: the runtime override, the weapon speed or the definition, then the modifiers on top

### float get_cost_amount() {#method-get-cost-amount}

Get cost amount (runtime override or definition)

### float get_gain_amount() {#method-get-gain-amount}

Get gain amount (runtime override or definition)

### int get_cost_pool_id() {#method-get-cost-pool-id}

Get cost pool name (runtime override or definition)

### int get_gain_pool_id() {#method-get-gain-pool-id}

Get gain pool name (runtime override or definition)

### float get_combo_timeout() {#method-get-combo-timeout}

Get combo timeout (runtime override or definition)

### int get_current_combo_step() {#method-get-current-combo-step}

Get current combo step (for UI display)

### int get_max_combo_steps() {#method-get-max-combo-steps}

Get max combo steps (for UI display)

### float get_combo_timeout_remaining() {#method-get-combo-timeout-remaining}

Get combo timeout remaining (for UI display)

### bool is_in_combo() {#method-is-in-combo}

Check if ability is in combo sequence

### void set_runtime_property( property_name: String, value: Variant ) {#method-set-runtime-property}

Set a runtime property override

### void clear_runtime_property( property_name: String ) {#method-clear-runtime-property}

Clear a runtime property override (reverts to definition value)

### bool has_runtime_override( property_name: String ) {#method-has-runtime-override}

Check if a property has a runtime override

### Dictionary get_all_runtime_overrides() {#method-get-all-runtime-overrides}

Get all runtime overrides (for debugging/save states)

### void clear_all_runtime_overrides() {#method-clear-all-runtime-overrides}

Clear all runtime overrides

### AbilityUseAttemptResult use_ability( target: Variant = null, from_action: bool = false ) {#method-use-ability}

Execute the ability with optional target and action flag

### void apply_ability_effects( target: Variant ) {#method-apply-ability-effects}

Apply ability effects with smart registration logic

### AbilityUseAttemptResult can_use( from_action: bool = false ) {#method-can-use}

Check if ability can be used

### void refund_cost() {#method-refund-cost}

Give back what the last use cost (a cast that was cancelled, not one that an interrupt effect stopped)

### bool try_interrupt() {#method-try-interrupt}

Try to interrupt this ability (an interrupt effect, a kick): what was spent stays spent and the ability goes on cooldown

### void receive_shared_cooldown( duration: float ) {#method-receive-shared-cooldown}

A member of one of the ability's groups was used: this ability is on cooldown for the shared time too (unless it is busy or already on a longer one)

### void set_state( new_state: AbilityState ) {#method-set-state}

Enhanced state setting with entity coordination

### Array get_current_effects() {#method-get-current-effects}

Get effects to apply (DELEGATED TO DEFINITION)

### bool add_effect_by_id( effect_id: int ) {#method-add-effect-by-id}

Add effect to ability using DatabaseEffects (copy-on-write)

### Array[int] remove_effect_by_id( effect_id: int ) {#method-remove-effect-by-id}

Remove effect from ability by ID (copy-on-write)

### bool restore_effect_by_id_at_positions( effect_id: int, positions: Array[int] ) {#method-restore-effect-by-id-at-positions}

Restore effect at specific positions (copy-on-write)

### void reset_to_definition_effects() {#method-reset-to-definition-effects}

Reset to definition effects (clear live modifications)

### bool has_effect_modifications() {#method-has-effect-modifications}

Check if ability has been modified from its definition

### Dictionary get_effects_memory_info() {#method-get-effects-memory-info}

Get memory usage info for debugging

### AbilityDefinition swap_definition( new_definition: AbilityDefinition ) {#method-swap-definition}

Swap this ability's definition to another, returning the original for later restoration. Rebuilds strategy instances and reconnects signals to match the new definition.

### String get_display_name() {#method-get-display-name}

Get the display name (dynamic or from definition)

### String get_description() {#method-get-description}

Get the description (dynamic or from definition)

### float get_max_range() {#method-get-max-range}

Get the max range

### float get_ai_range() {#method-get-ai-range}

The distance an AI works with: the max range, and for an ability with no range limit (a max range of 0, as the targeting treats it) the Sight Range of the user

### Texture2D get_icon() {#method-get-icon}

Get the icon (dynamic or from definition)

### int get_id() {#method-get-id}

Get the ability ID

### int get_school() {#method-get-school}

Get the ability school (use runtime-aware getter)

### void set_dynamic_icon( new_icon: Texture2D ) {#method-set-dynamic-icon}

Set a dynamic icon for this ability instance

### void set_dynamic_display_name( new_name: String ) {#method-set-dynamic-display-name}

Set a dynamic display name for this ability instance

### void set_dynamic_description( new_description: String ) {#method-set-dynamic-description}

Set a dynamic description for this ability instance

### void reset_dynamic_properties() {#method-reset-dynamic-properties}

Reset dynamic properties to definition defaults

### float get_cooldown_remaining() {#method-get-cooldown-remaining}

Get remaining cooldown time

### bool is_on_cooldown() {#method-is-on-cooldown}

Check if ability is on cooldown

### int get_current_charges() {#method-get-current-charges}

Get current charge count (for UI display)

### int get_max_charges() {#method-get-max-charges}

Get max charges (for UI display)

### bool is_inactive() {#method-is-inactive}

Check if ability is inactive

### String get_requirement_failure_message() {#method-get-requirement-failure-message}

Get requirement failure message for UI tooltips

### String get_requirements_summary() {#method-get-requirements-summary}

Get requirements summary for UI tooltips

### bool is_executing() {#method-is-executing}

Check if ability is currently being executed

### bool is_ready() {#method-is-ready}

Check if ability is ready to use (considers charges and requirements)

### void setup_requirement_monitoring() {#method-setup-requirement-monitoring}

Set up reactive requirement monitoring for any ability with requirements

### void cleanup_requirement_monitoring() {#method-cleanup-requirement-monitoring}

Clean up reactive requirement monitoring

### void check_and_update_requirement_state() {#method-check-and-update-requirement-state}

Check requirements and update ability state accordingly

### void activate_passive_effects() {#method-activate-passive-effects}

Apply the passive effects when this ability is added to an entity, if its requirements hold (or it has none). An instance that starts with unmet requirements is INACTIVE and applies them when they become true (check_and_update_requirement_state)

### void apply_passive_effects() {#method-apply-passive-effects}

Apply passive ability effects to the user entity

### void remove_passive_effects() {#method-remove-passive-effects}

Remove all passive ability effects from the user entity

### bool is_passive_active() {#method-is-passive-active}

Check if this passive ability's effects are currently active

### Array[EffectInstance] get_active_passive_effects() {#method-get-active-passive-effects}

Get all currently active effect instances from this passive

### Dictionary to_save_data() {#method-to-save-data}

Save instance runtime state

### void from_save_data( save_data: Dictionary ) {#method-from-save-data}

Load instance runtime state

### void cleanup() {#method-cleanup}

Clean up all resources used by this ability instance

### void cleanup_timers() {#method-cleanup-timers}

*No description yet.*

### String get_ammo_warning() {#method-get-ammo-warning}

What to tell the player when the last attempt was refused for missing ammo or a reagent ("Out Of Ammo!")

### void release_input() {#method-release-input}

The key that started this ability was released: a drawn shot is loosed (or cancelled when released too early)

