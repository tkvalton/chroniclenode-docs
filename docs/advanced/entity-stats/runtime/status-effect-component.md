<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# StatusEffectComponent

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

Manages StatusEffectDefinition processing, diminishing returns, and immunity requests

## Variables

| | | |
|---|---|---|
| `Dictionary` | [active_immunities](#var-active-immunities) | `{} # Key: status_effect_id, Value: number of active immun...` |
| `Dictionary` | [status_effect_applications](#var-status-effect-applications) | `{} # Key: status_effect_id, Value: ApplicationTracker` |
| `ChronoManager` | [chrono_manager](#var-chrono-manager) |  |

## Methods

| | |
|---|---|
| `void` | [set_immunity_active](#method-set-immunity-active)( `status_effect_id: int, active: bool` ) |
| `bool` | [is_immune_to_status_effect](#method-is-immune-to-status-effect)( `status_effect_id: int` ) |
| `Array[int]` | [get_active_immunities](#method-get-active-immunities)() |
| `Dictionary` | [process_status_effect_application](#method-process-status-effect-application)( `status_effect_id: int, base_duration: float, source_entity: Variant = null, effect: EffectInstance = null` ) |
| `int` | [get_status_effect_application_count](#method-get-status-effect-application-count)( `status_effect_id: int` ) |
| `bool` | [is_currently_affected_by](#method-is-currently-affected-by)( `status_effect_id: int` ) |
| `Dictionary` | [get_all_tracked_applications](#method-get-all-tracked-applications)() |
| `Array[int]` | [get_currently_active_status_effects](#method-get-currently-active-status-effects)() |
| `bool` | [has_any_tracked_applications](#method-has-any-tracked-applications)() |
| `bool` | [has_any_active_immunities](#method-has-any-active-immunities)() |
| `bool` | [should_break_status_effect](#method-should-break-status-effect)( `status_effect_id: int, damage_amount: float, current_health: float, max_health: float` ) |
| `Dictionary` | [get_preview_for_next_application](#method-get-preview-for-next-application)( `status_effect_id: int, base_duration: float` ) |
| `void` | [reset_all_application_trackers](#method-reset-all-application-trackers)() |
| `void` | [clear_immunity_state](#method-clear-immunity-state)() |
| `void` | [cleanup](#method-cleanup)() |
| `Array` | [to_save_data](#method-to-save-data)() |
| `void` | [from_save_data](#method-from-save-data)( `data: Array` ) |

## Signals

### immunity_requested( immunity_id: int, duration: float ) {#signal-immunity-requested}

### status_effect_blocked_by_immunity( status_effect_id: int, immunity_id: int, source_entity: Variant, effect: EffectInstance ) {#signal-status-effect-blocked-by-immunity}

### status_effect_application_tracked( status_effect_id: int, application_count: int, effective_duration: float, source_entity: Variant, effect: EffectInstance ) {#signal-status-effect-application-tracked}

## Variable descriptions

### Dictionary active_immunities =  # Key: status_effect_id, Value: number of active immunities {#var-active-immunities}

*No description yet.*

### Dictionary status_effect_applications =  # Key: status_effect_id, Value: ApplicationTracker {#var-status-effect-applications}

*No description yet.*

### ChronoManager chrono_manager {#var-chrono-manager}

ChronoManager ref

## Method descriptions

### void set_immunity_active( status_effect_id: int, active: bool ) {#method-set-immunity-active}

Tells the component that an immunity covering this status effect began (`active`) or ended. Several immunities can cover one status effect, so they are counted: the protection ends when the last one ends

### bool is_immune_to_status_effect( status_effect_id: int ) {#method-is-immune-to-status-effect}

Is at least one immunity covering this status effect right now?

### Array[int] get_active_immunities() {#method-get-active-immunities}

The ids of the status effects the entity is immune to right now

### Dictionary process_status_effect_application( status_effect_id: int, base_duration: float, source_entity: Variant = null, effect: EffectInstance = null ) {#method-process-status-effect-application}

Works out what applying a status effect would do, and counts the application. Returns a dictionary: `can_apply`, `effective_duration` (the base duration shortened by diminishing returns), `application_count`, `was_blocked`, `immunity_will_be_granted`, `immunity_id`, `immunity_duration` and `blocking_reason`. An immune entity gets `can_apply` false. Asks for the temporary immunity when the definition grants one

### int get_status_effect_application_count( status_effect_id: int ) {#method-get-status-effect-application-count}

How many times this status effect was applied inside its reset window

### bool is_currently_affected_by( status_effect_id: int ) {#method-is-currently-affected-by}

Is the entity not immune to the status effect, and has it been applied inside its reset window?

### Dictionary get_all_tracked_applications() {#method-get-all-tracked-applications}

A dictionary: status effect id to the number of applications counted

### Array[int] get_currently_active_status_effects() {#method-get-currently-active-status-effects}

The ids of the status effects the entity is currently affected by

### bool has_any_tracked_applications() {#method-has-any-tracked-applications}

True when any status effect has been tracked

### bool has_any_active_immunities() {#method-has-any-active-immunities}

True when any immunity covers a status effect right now

### bool should_break_status_effect( status_effect_id: int, damage_amount: float, current_health: float, max_health: float ) {#method-should-break-status-effect}

Does a hit of this size end the status effect? Asks the definition (break on damage and its threshold)

### Dictionary get_preview_for_next_application( status_effect_id: int, base_duration: float ) {#method-get-preview-for-next-application}

What the next application would do, without counting it: `can_apply`, `would_be_blocked`, `current_applications`, `next_application_count`, `effective_duration`, `would_grant_immunity`, `immunity_name` and `blocking_reason`

### void reset_all_application_trackers() {#method-reset-all-application-trackers}

Sets every diminishing returns counter back to 0

### void clear_immunity_state() {#method-clear-immunity-state}

Forgets which status effects the entity is immune to (when it dies or resets)

### void cleanup() {#method-cleanup}

Clears the immunity state and the application trackers

### Array to_save_data() {#method-to-save-data}

The diminishing-returns counters (stun applications and so on) with the time their reset timer has left

### void from_save_data( data: Array ) {#method-from-save-data}

Restores the counters of `to_save_data`

