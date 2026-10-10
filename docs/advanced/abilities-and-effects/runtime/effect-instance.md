<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# EffectInstance

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

Lightweight runtime instance of an effect that references an EffectDefinition for behavior Handles all runtime state while the definition provides immutable logic

## Variables

| | | |
|---|---|---|
| `Effect` | [definition](#var-definition) |  |
| `Variant` | [originator](#var-originator) |  |
| `Variant` | [target](#var-target) |  |
| `Variant` | [effect_owner](#var-effect-owner) |  |
| `SignalRegistry` | [signal_registry](#var-signal-registry) |  |
| `SourceType` | [source](#var-source) | `SourceType.PERSISTENT` |
| `CombatManager` | [combat_manager](#var-combat-manager) |  |
| `ChronoManager` | [chrono_manager](#var-chrono-manager) |  |
| `ObjectRegistry` | [object_registry](#var-object-registry) |  |
| `GameHost.SystemHub` | [hub](#var-hub) |  |
| `String` | [registered_with](#var-registered-with) | `""  # "entity", "world", or "none"` |
| `Variant` | [registered_manager](#var-registered-manager) | `null  # Reference to the manager` |
| `bool` | [active](#var-active) | `false` |
| `int` | [stack_count](#var-stack-count) | `1` |
| `float` | [time_started](#var-time-started) |  |
| `bool` | [rejected](#var-rejected) | `false` |
| `String` | [rejection_reason](#var-rejection-reason) | `""` |
| `bool` | [restoring](#var-restoring) | `false` |
| `Variant` | [intended_target](#var-intended-target) | `null` |
| `float` | [charge_fraction](#var-charge-fraction) | `1.0` |
| `Array[Effect]` | [bonus_child_effects](#var-bonus-child-effects) | `[]` |
| `EffectInstance:` | [parent_instance](#var-parent-instance) |  |
| `CastRecord` | [cast_record](#var-cast-record) | `null` |
| `float` | [hit_multiplier](#var-hit-multiplier) | `1.0` |
| `int` | [hit_outcome](#var-hit-outcome) | `0` |
| `Dictionary` | [stack_sources](#var-stack-sources) | `{}` |
| `float` | [duration](#var-duration) | `0.0` |
| `float` | [base_duration](#var-base-duration) | `0.0` |
| `float` | [time_remaining](#var-time-remaining) | `0.0` |
| `float` | [tick_interval](#var-tick-interval) | `0.0` |
| `Timer` | [duration_timer](#var-duration-timer) | `null` |
| `Timer` | [tick_timer](#var-tick-timer) | `null` |
| `float` | [last_tick_time](#var-last-tick-time) | `0.0` |
| `Array[EffectInstance]` | [active_child_effects](#var-active-child-effects) | `[]` |
| `Dictionary` | [custom_effect_data](#var-custom-effect-data) | `{}` |
| `Array[Dictionary]` | [signal_connections](#var-signal-connections) | `[]` |

## Methods

| | |
|---|---|
| `void` | [initialize](#method-initialize)( `system_hub: GameHost.SystemHub, effect_def: Effect, new_originator: Variant = null, new_target: Variant = null` ) |
| `Dictionary` | [get_requirement_context](#method-get-requirement-context)() |
| `void` | [start_effect](#method-start-effect)() |
| `void` | [update_duration](#method-update-duration)( `new_duration: float` ) |
| `void` | [remove_effect](#method-remove-effect)() |
| `float` | [get_time_remaining](#method-get-time-remaining)() |
| `bool` | [is_active](#method-is-active)() |
| `Dictionary` | [to_save_data](#method-to-save-data)() |
| `void` | [from_save_data](#method-from-save-data)( `save_data: Dictionary, system_hub: GameHost.SystemHub` ) |
| `CastRecord` | [get_cast_record](#method-get-cast-record)() |
| `void` | [reset](#method-reset)() |
| `void` | [cleanup](#method-cleanup)() |
| `void` | [remove_stacks_from](#method-remove-stacks-from)( `source_entity: Variant` ) |
| `int` | [get_uses_remaining](#method-get-uses-remaining)() |

## Signals

### effect_started( effect: EffectInstance ) {#signal-effect-started}

Emitted when the effect is started

### effect_ended( effect: EffectInstance ) {#signal-effect-ended}

Emitted when the effect has ended or been removed

### sfx_at_position_requested( audio: AudioStream, position: Vector3, volume_db: float, pitch_scale: float ) {#signal-sfx-at-position-requested}

Emitted when SFX needs to be played at a position (for Vector3 targets)

### external_inventory_requested( inventory: InventoryComponent, owner: Variant, active: bool ) {#signal-external-inventory-requested}

Emitted when external inventory UI needs to be opened

## Enumerations

### enum SourceType {#enum-sourcetype}

- **INTRINSIC** = `0`
- **EXTERNAL** = `1`
- **STATEFUL** = `2`

## Constants

- `float` **MIN_DURATION** = `0.1`

## Variable descriptions

### Effect definition {#var-definition}

Reference to the immutable effect definition (shared across all instances)

### Variant originator {#var-originator}

The entity that created this effect

### Variant target {#var-target}

The entity that this effect is applied to

### Variant effect_owner {#var-effect-owner}

The effect owner (Ability, InteractableObject, etc.)

### SignalRegistry signal_registry {#var-signal-registry}

Signal registry for managing signal connections

### SourceType source = SourceType.PERSISTENT {#var-source}

Source type for save/load logic

### CombatManager combat_manager {#var-combat-manager}

SystemManager refs

### ChronoManager chrono_manager {#var-chrono-manager}

*No description yet.*

### ObjectRegistry object_registry {#var-object-registry}

*No description yet.*

### GameHost.SystemHub hub {#var-hub}

The systems of the game, for the effects that evaluate conditions (a condition may look an entity up by its id)

### String registered_with = ""  # "entity", "world", or "none" {#var-registered-with}

Track where this effect is registered for proper cleanup

### Variant registered_manager = null  # Reference to the manager {#var-registered-manager}

*No description yet.*

### bool active = false {#var-active}

Whether the effect is currently active

### int stack_count = 1 {#var-stack-count}

Current number of stacks this effect has

### float time_started {#var-time-started}

When this effect was started (timestamp)

### bool rejected = false {#var-rejected}

Set by an effect that found, while it applied, that it cannot stay (a status effect the target is immune to): the instance ends without registering

### String rejection_reason = "" {#var-rejection-reason}

Why the effect was rejected (a requirement it did not meet, an exclusive group that refused it), for the log and the UI

### bool restoring = false {#var-restoring}

True while a loaded effect applies for the first time: the effect restores itself instead of running its application (see Effect.restore_after_load)

### Variant intended_target = null {#var-intended-target}

What the effect was aimed at, also when it applies to the originator (applies_to Self makes `target` the originator): a misdirection on the caster still knows who it was aimed at

### float charge_fraction = 1.0 {#var-charge-fraction}

How far the shot that caused this effect was drawn (0 to 1; 1 when it was not drawn): damage and healing that scale with the charge read it

### Array[Effect] bonus_child_effects = [] {#var-bonus-child-effects}

Effects a composite effect applies to its targets on top of its own children: the ammo of a shot (a poison arrow poisons whoever the arrow hits)

### EffectInstance: parent_instance {#var-parent-instance}

The effect that applied this one as one of its children (null for a root effect)

### CastRecord cast_record = null {#var-cast-record}

What the effects of this cast did so far (shared by every effect instance of the cast); see get_cast_record

### float hit_multiplier = 1.0 {#var-hit-multiplier}

How much of its damage and healing the effect keeps: 1 normally, less after a glancing hit (see HitRules). Set when the effect starts

### int hit_outcome = 0 {#var-hit-outcome}

The outcome of the hit roll this effect took part in (HitRules.Outcome.HIT when it did not roll)

### Dictionary stack_sources =  {#var-stack-sources}

Who contributed the stacks of a shared effect (originator -&gt; stacks), so losing one source only takes away its own stacks

### float duration = 0.0 {#var-duration}

Effect duration (0 = permanent, -1 = immediate)

### float base_duration = 0.0 {#var-base-duration}

The duration the effect starts with and goes back to when a stack refreshes it (a loaded effect starts with what was left)

### float time_remaining = 0.0 {#var-time-remaining}

Time remaining for the effect

### float tick_interval = 0.0 {#var-tick-interval}

Tick interval for ticking effects (0 = no ticking)

### Timer duration_timer = null {#var-duration-timer}

Timer for duration management (only created when needed)

### Timer tick_timer = null {#var-tick-timer}

Timer for tick management (only created when needed)

### float last_tick_time = 0.0 {#var-last-tick-time}

Last tick time for manual tick tracking

### Array[EffectInstance] active_child_effects = [] {#var-active-child-effects}

Array of active child effect instances (for cleanup tracking)

### Dictionary custom_effect_data =  {#var-custom-effect-data}

Custom data dictionary for effect-specific runtime information

### Array[Dictionary] signal_connections = [] {#var-signal-connections}

Array of connected signal connections for cleanup

## Method descriptions

### void initialize( system_hub: GameHost.SystemHub, effect_def: Effect, new_originator: Variant = null, new_target: Variant = null ) {#method-initialize}

Initialize the effect instance with definition and basic setup

### Dictionary get_requirement_context() {#method-get-requirement-context}

What the requirements of the effect may ask about what it belongs to: the rank of its ability, the item level of its item

### void start_effect() {#method-start-effect}

Start the effect and begin its logic

### void update_duration( new_duration: float ) {#method-update-duration}

Update the duration of an active effect (useful for diminishing returns, etc.)

### void remove_effect() {#method-remove-effect}

Remove/cancel the effect

### float get_time_remaining() {#method-get-time-remaining}

Get time remaining for this effect

### bool is_active() {#method-is-active}

Check if effect is still active

### Dictionary to_save_data() {#method-to-save-data}

Save instance runtime state

### void from_save_data( save_data: Dictionary, system_hub: GameHost.SystemHub ) {#method-from-save-data}

Load instance runtime state

### CastRecord get_cast_record() {#method-get-cast-record}

What the effects of this cast did so far. Made when first asked for; a child effect shares the record of its parent, and the effects an ability starts share one

### void reset() {#method-reset}

Sets the instance up for reuse: whatever it was doing ends quietly and its runtime state goes back to the start

### void cleanup() {#method-cleanup}

Clean up all resources used by this effect instance

### void remove_stacks_from( source_entity: Variant ) {#method-remove-stacks-from}

Takes away the stacks one source added to this shared effect (that source left combat, died, or its charm broke). The effect ends when no source is left; otherwise it carries on with the stacks that remain, and with another source as its originator when the first one is the one leaving

### int get_uses_remaining() {#method-get-uses-remaining}

How many counted uses are left (-1 when the effect is not limited)

