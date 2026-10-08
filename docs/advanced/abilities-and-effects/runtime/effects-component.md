<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# EffectsComponent

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

EffectsComponent manages all active effects on an entity. It handles the

## Description

EffectsComponent manages all active effects on an entity. It handles the addition, removal, and tracking of various effects that can be applied to entities in the game.

Key features:

- Maintains a list of all active effects on the entity
- Handles the application and removal of effects with proper stacking rules
- Provides methods for querying and managing effects
- Efficiently tracks active status effects for quick lookups
- Effects register themselves via EffectInstance.start_effect()
- Decoupled from Entity - emits own signals for Entity to forward

## Variables

| | | |
|---|---|---|
| `Array[EffectInstance]` | [active_effects](#var-active-effects) | `[]` |
| `Dictionary` | [active_status_effects](#var-active-status-effects) | `{} # Key: status effect id, Value: Array[EffectInstance]` |
| `Dictionary` | [status_effect_flags](#var-status-effect-flags) | `{} # Key: status effect id, Value: bool` |
| `Array[EffectInstance]` | [applied_effects](#var-applied-effects) | `[]` |
| `Dictionary` | [active_status_types](#var-active-status-types) | `{} # Key: base_status_type, Value: int` |

## Methods

| | |
|---|---|
| `void` | [gained_effect](#method-gained-effect)( `effect_instance: EffectInstance` ) |
| `void` | [lost_effect](#method-lost-effect)( `effect_instance: EffectInstance` ) |
| `void` | [updated_effect](#method-updated-effect)( `effect_instance: EffectInstance` ) |
| `bool` | [has_status_type](#method-has-status-type)( `status_type: String` ) |
| `bool` | [has_any_cc_effects](#method-has-any-cc-effects)() |
| `bool` | [has_movement_impairing_effects](#method-has-movement-impairing-effects)() |
| `bool` | [has_ability_blocking_effects](#method-has-ability-blocking-effects)() |
| `Dictionary` | [get_status_effects_detail](#method-get-status-effects-detail)() |
| `EffectInstance` | [find_existing_effect_by_stacking_rule](#method-find-existing-effect-by-stacking-rule)( `new_effect: Effect, originator: Variant` ) |
| `EffectInstance` | [find_effect_by_id](#method-find-effect-by-id)( `effect_id: int` ) |
| `EffectInstance` | [find_effect_by_id_and_originator](#method-find-effect-by-id-and-originator)( `effect_id: int, originator: Variant` ) |
| `Array[String]` | [get_all_active_status_effects](#method-get-all-active-status-effects)() |
| `Array[EffectInstance]` | [get_active_effects_by_type](#method-get-active-effects-by-type)( `effect_type: String` ) |
| `void` | [remove_all_effects](#method-remove-all-effects)() |
| `Dictionary` | [to_save_data](#method-to-save-data)() |
| `void` | [from_save_data](#method-from-save-data)( `save_data: Dictionary, system_hub: GameHost.SystemHub` ) |
| `int` | [get_active_effect_count](#method-get-active-effect-count)() |
| `bool` | [has_any_active_effects](#method-has-any-active-effects)() |
| `void` | [remove_effects_on_death](#method-remove-effects-on-death)() |
| `void` | [track_applied](#method-track-applied)( `effect_instance: EffectInstance` ) |
| `void` | [untrack_applied](#method-untrack-applied)( `effect_instance: EffectInstance` ) |
| `void` | [remove_effects_from_originator](#method-remove-effects-from-originator)( `originator: Variant` ) |

## Signals

### effect_gained( effect_instance: EffectInstance ) {#signal-effect-gained}

Signal emitted when an effect is gained

### effect_lost( effect_instance: EffectInstance ) {#signal-effect-lost}

Signal emitted when an effect is lost

### effect_updated( effect_instance: EffectInstance ) {#signal-effect-updated}

Signal emitted when an effect is updated (stacks changed, duration refreshed)

## Variable descriptions

### Array[EffectInstance] active_effects = [] {#var-active-effects}

*No description yet.*

### Dictionary active_status_effects =  # Key: status effect id, Value: Array[EffectInstance] {#var-active-status-effects}

*No description yet.*

### Dictionary status_effect_flags =  # Key: status effect id, Value: bool {#var-status-effect-flags}

*No description yet.*

### Array[EffectInstance] applied_effects = [] {#var-applied-effects}

Every active effect this entity is the originator of (on itself or on others), kept for the effects that are in groups: the groups with the scope "per originator" count them

### Dictionary active_status_types =  # Key: base_status_type, Value: int {#var-active-status-types}

How many active status effects of each type (the definition's base_status_type: "Incapacitate", "Root", "Silence" ...) the entity has, so two stuns that overlap end independently and the entity is stunned until the last one is gone

## Method descriptions

### void gained_effect( effect_instance: EffectInstance ) {#method-gained-effect}

Adds a new effect to the entity and emits a signal

### void lost_effect( effect_instance: EffectInstance ) {#method-lost-effect}

Removes an effect from the entity and emits a signal

### void updated_effect( effect_instance: EffectInstance ) {#method-updated-effect}

Updates an existing effect and emits a signal (called when stacks change or duration refreshes)

### bool has_status_type( status_type: String ) {#method-has-status-type}

True while at least one active status effect of this type ("Incapacitate", "Root", "Silence" ...) is on the entity

### bool has_any_cc_effects() {#method-has-any-cc-effects}

True while any status effect the definitions call crowd control (stun, root, silence, disarm, flee, disorient) is on the entity

### bool has_movement_impairing_effects() {#method-has-movement-impairing-effects}

True while the entity cannot move freely (root, incapacitate, cripple)

### bool has_ability_blocking_effects() {#method-has-ability-blocking-effects}

True while the entity cannot use all of its abilities (silence, disarm, incapacitate)

### Dictionary get_status_effects_detail() {#method-get-status-effects-detail}

Every active status effect: id -&gt; {name, type, count, time_remaining (the longest of them)}

### EffectInstance find_existing_effect_by_stacking_rule( new_effect: Effect, originator: Variant ) {#method-find-existing-effect-by-stacking-rule}

Finds existing effect based on the effect's stacking rule

### EffectInstance find_effect_by_id( effect_id: int ) {#method-find-effect-by-id}

Finds effect by ID only (for Global stacking rule)

### EffectInstance find_effect_by_id_and_originator( effect_id: int, originator: Variant ) {#method-find-effect-by-id-and-originator}

Finds effect by ID and originator (for Per_Originator stacking rule)

### Array[String] get_all_active_status_effects() {#method-get-all-active-status-effects}

Get the names of all currently active status effects

### Array[EffectInstance] get_active_effects_by_type( effect_type: String ) {#method-get-active-effects-by-type}

Get all active effects of a specific effect type

### void remove_all_effects() {#method-remove-all-effects}

Remove all effects from the entity

### Dictionary to_save_data() {#method-to-save-data}

Convert effects manager state to save data

### void from_save_data( save_data: Dictionary, system_hub: GameHost.SystemHub ) {#method-from-save-data}

Load effects manager state from save data

### int get_active_effect_count() {#method-get-active-effect-count}

*No description yet.*

### bool has_any_active_effects() {#method-has-any-active-effects}

*No description yet.*

### void remove_effects_on_death() {#method-remove-effects-on-death}

Death takes the effects off, except those of a group that persists through death (flasks)

### void track_applied( effect_instance: EffectInstance ) {#method-track-applied}

*No description yet.*

### void untrack_applied( effect_instance: EffectInstance ) {#method-untrack-applied}

*No description yet.*

### void remove_effects_from_originator( originator: Variant ) {#method-remove-effects-from-originator}

Ends every effect a given entity applied (it left combat, it died, a charm broke). An effect several sources share (stacking rule Global) only loses the stacks that source added, and goes on for the others

