<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ImmunityComponent

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

Manages ImmunityDefinition-based immunities (damage types, status effects, schools, etc.)

## Variables

| | | |
|---|---|---|
| `Dictionary` | [active_immunities](#var-active-immunities) | `{} # Key: immunity_id, Value: ImmunityInstance` |

## Methods

| | |
|---|---|
| `bool` | [activate_immunity](#method-activate-immunity)( `chrono_manager: ChronoManager, immunity_id: int, duration: float = -1.0, permanent: bool = false` ) |
| `bool` | [deactivate_immunity](#method-deactivate-immunity)( `immunity_id: int` ) |
| `Dictionary` | [is_immune_to_damage_type](#method-is-immune-to-damage-type)( `damage_type: int` ) |
| `Dictionary` | [is_immune_to_school_type](#method-is-immune-to-school-type)( `school_id: int` ) |
| `Dictionary` | [is_immune_to_status_effect](#method-is-immune-to-status-effect)( `status_effect_id: int` ) |
| `Dictionary` | [check_damage_immunity](#method-check-damage-immunity)( `damage_amount: float, damage_type: int, damage_source: Variant = null, effect: EffectInstance = null` ) |
| `Dictionary` | [check_school_immunity](#method-check-school-immunity)( `school_id: int, source_entity: Variant = null, effect: EffectInstance = null` ) |
| `Dictionary` | [check_status_effect_immunity](#method-check-status-effect-immunity)( `status_effect_id: int, source_entity: Variant = null, effect: EffectInstance = null` ) |
| `float` | [get_immunity_time_remaining](#method-get-immunity-time-remaining)( `immunity_id: int` ) |
| `bool` | [has_any_immunity](#method-has-any-immunity)() |
| `Array[int]` | [get_active_immunities](#method-get-active-immunities)() |
| `Array[int]` | [get_immunities_by_type](#method-get-immunities-by-type)( `immunity_type: ImmunityDefinition.ImmunityType` ) |
| `Array[int]` | [get_protected_targets_for_immunity](#method-get-protected-targets-for-immunity)( `immunity_id: int` ) |
| `void` | [cleanup](#method-cleanup)() |
| `int` | [get_active_immunity_count](#method-get-active-immunity-count)() |

## Signals

### immunity_activated( immunity_id: int, duration: float, immunity_type: ImmunityDefinition.ImmunityType, protected_targets: Array[int] ) {#signal-immunity-activated}

### immunity_deactivated( immunity_id: int, immunity_type: ImmunityDefinition.ImmunityType, protected_targets: Array[int] ) {#signal-immunity-deactivated}

### damage_blocked_by_immunity( damage_id: int, immunity_id: int, blocked_amount: float, damage_source: Variant, effect: EffectInstance ) {#signal-damage-blocked-by-immunity}

### school_effect_blocked_by_immunity( school_id: int, immunity_id: int, source_entity: Variant, effect: EffectInstance ) {#signal-school-effect-blocked-by-immunity}

### status_effect_blocked_by_immunity( status_effect_id: int, immunity_id: int, source_entity: Variant, effect: EffectInstance ) {#signal-status-effect-blocked-by-immunity}

## Variable descriptions

### Dictionary active_immunities =  # Key: immunity_id, Value: ImmunityInstance {#var-active-immunities}

*No description yet.*

## Method descriptions

### bool activate_immunity( chrono_manager: ChronoManager, immunity_id: int, duration: float = -1.0, permanent: bool = false ) {#method-activate-immunity}

Switches an immunity (ImmunityDefinition id) on for `duration` seconds (10 when it is 0 or less; `permanent` has no timer and never ends). An immunity that is already on is replaced. Emits `immunity_activated`. False when the definition does not exist

### bool deactivate_immunity( immunity_id: int ) {#method-deactivate-immunity}

Switches an immunity off, ahead of its time or when it ran out. Emits `immunity_deactivated`. False when it was not active

### Dictionary is_immune_to_damage_type( damage_type: int ) {#method-is-immune-to-damage-type}

Does an active damage immunity cover this damage type? A dictionary with `is_immune`, `immunity_id` and `immunity_type`

### Dictionary is_immune_to_school_type( school_id: int ) {#method-is-immune-to-school-type}

Does an active school immunity cover this ability school? A dictionary with `is_immune`, `immunity_id` and `immunity_type`

### Dictionary is_immune_to_status_effect( status_effect_id: int ) {#method-is-immune-to-status-effect}

Does an active status effect immunity cover this status effect? A dictionary with `is_immune`, `immunity_id`, `immunity_type` and `reason`

### Dictionary check_damage_immunity( damage_amount: float, damage_type: int, damage_source: Variant = null, effect: EffectInstance = null ) {#method-check-damage-immunity}

Asks the question for a hit and announces the answer: a dictionary with `is_blocked`, `blocked_amount`, `immunity_id` and `can_proceed`. Emits `damage_blocked_by_immunity` when blocked

### Dictionary check_school_immunity( school_id: int, source_entity: Variant = null, effect: EffectInstance = null ) {#method-check-school-immunity}

The same for an effect of a school: `is_blocked`, `immunity_id`, `can_proceed`. Emits `school_effect_blocked_by_immunity` when blocked

### Dictionary check_status_effect_immunity( status_effect_id: int, source_entity: Variant = null, effect: EffectInstance = null ) {#method-check-status-effect-immunity}

The same for a status effect: `is_blocked`, `immunity_id`, `can_proceed`. Emits `status_effect_blocked_by_immunity` when blocked

### float get_immunity_time_remaining( immunity_id: int ) {#method-get-immunity-time-remaining}

Seconds an immunity has left (0 when it is not active, -1 when it is permanent)

### bool has_any_immunity() {#method-has-any-immunity}

True while any immunity is active

### Array[int] get_active_immunities() {#method-get-active-immunities}

The ids of the active immunities

### Array[int] get_immunities_by_type( immunity_type: ImmunityDefinition.ImmunityType ) {#method-get-immunities-by-type}

The ids of the active immunities of one type (damage type, status effect or school)

### Array[int] get_protected_targets_for_immunity( immunity_id: int ) {#method-get-protected-targets-for-immunity}

A copy of what an active immunity protects against

### void cleanup() {#method-cleanup}

Ends every immunity without announcing it

### int get_active_immunity_count() {#method-get-active-immunity-count}

How many immunities are active

