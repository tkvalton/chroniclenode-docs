<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# TrapInteraction

**Inherits:** [InteractableObjectInteraction](/advanced/entities/interactions/interactable-object-interaction) < [Interaction](/advanced/entities/interactions/interaction) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Trap interaction - triggers effects through proximity, interaction, or events Integrates with combat system through effect application

## Properties

| | | |
|---|---|---|
| `int` | [trap_effect_id](#prop-trap-effect-id) | `-1` |
| `TriggerMode` | [trigger_mode](#prop-trigger-mode) | `TriggerMode.PROXIMITY` |
| `TriggerReusability` | [trigger_reusability](#prop-trigger-reusability) | `TriggerReusability.ONE_TIME` |
| `float` | [cooldown_duration](#prop-cooldown-duration) | `5.0` |
| `bool` | [visible_when_armed](#prop-visible-when-armed) | `true` |
| `bool` | [trigger_players](#prop-trigger-players) | `true` |
| `bool` | [trigger_npcs](#prop-trigger-npcs) | `true` |
| `bool` | [trigger_pets](#prop-trigger-pets) | `false` |
| `bool` | [use_relationship_filter](#prop-use-relationship-filter) | `false` |
| `ReputationLevel.FactionRelationship` | [trigger_relationship](#prop-trigger-relationship) | `ReputationLevel.FactionRelationship.HOSTILE` |
| `Vector3` | [fixed_target_position](#prop-fixed-target-position) | `Vector3.ZERO` |
| `bool` | [use_fixed_target](#prop-use-fixed-target) | `false` |
| `Shape3D` | [detection_shape](#prop-detection-shape) |  |
| `Vector3` | [detection_offset](#prop-detection-offset) | `Vector3.ZERO` |
| `float` | [trigger_delay](#prop-trigger-delay) | `0.0` |
| `bool` | [repeat_timer_enabled](#prop-repeat-timer-enabled) | `false` |
| `float` | [repeat_timer_interval](#prop-repeat-timer-interval) | `10.0` |
| `int` | [repeat_timer_count](#prop-repeat-timer-count) | `-1` |
| `bool` | [lifetime_enabled](#prop-lifetime-enabled) | `false` |
| `float` | [lifetime_duration](#prop-lifetime-duration) | `60.0` |
| `bool` | [cancel_persistent_effects](#prop-cancel-persistent-effects) | `true` |
| `SFXSelection` | [trigger_sound](#prop-trigger-sound) |  |

## Variables

| | | |
|---|---|---|
| `TrapState` | [current_trap_state](#var-current-trap-state) | `TrapState.ARMED` |
| `Array[Entity]` | [entities_in_range](#var-entities-in-range) | `[]` |
| `Timer` | [cooldown_timer](#var-cooldown-timer) |  |
| `Timer` | [repeat_timer](#var-repeat-timer) |  |
| `Timer` | [lifetime_timer](#var-lifetime-timer) |  |
| `int` | [current_repeat_count](#var-current-repeat-count) | `0` |
| `EffectInstance` | [active_effect_instance](#var-active-effect-instance) |  |
| `Area3D` | [detection_area](#var-detection-area) |  |

## Methods

| | |
|---|---|
| `void` | [setup_for_interactable_objects](#method-setup-for-interactable-objects)( `interactable: InteractableObject` ) |
| `bool` | [can_interact](#method-can-interact)( `player: Player` ) |
| `void` | [start_interaction](#method-start-interaction)( `player: Player` ) |
| `void` | [end_interaction](#method-end-interaction)() |
| `void` | [change_trap_state](#method-change-trap-state)( `new_state: TrapState` ) |
| `bool` | [trigger_trap](#method-trigger-trap)( `target: Variant = null` ) |
| `void` | [on_object_destroyed](#method-on-object-destroyed)() |
| `void` | [reset_trap](#method-reset-trap)() |
| `void` | [disable_trap](#method-disable-trap)() |
| `bool` | [can_trigger](#method-can-trigger)() |
| `float` | [get_cooldown_remaining](#method-get-cooldown-remaining)() |
| `float` | [get_lifetime_remaining](#method-get-lifetime-remaining)() |
| `float` | [get_repeat_timer_remaining](#method-get-repeat-timer-remaining)() |
| `bool` | [force_trigger](#method-force-trigger)( `target: Variant = null` ) |
| `void` | [extend_lifetime](#method-extend-lifetime)( `additional_time: float` ) |
| `Dictionary` | [save_state](#method-save-state)() |
| `void` | [load_state](#method-load-state)( `state: Dictionary` ) |
| `void` | [cleanup](#method-cleanup)() |

## Signals

### trap_triggered( target: Variant, effect_instance: EffectInstance, triggering_entity: Entity ) {#signal-trap-triggered}

Emitted when the trap fires: the target, the effect and who triggered it.

### trap_activated( triggering_entity: Entity ) {#signal-trap-activated}

Emitted when something sets the trap off.

### trap_state_changed( old_state: TrapState, new_state: TrapState ) {#signal-trap-state-changed}

Emitted when the state of the trap changes.

### trap_lifetime_expired() {#signal-trap-lifetime-expired}

Emitted when the lifetime of the trap ends.

## Enumerations

### enum TriggerMode {#enum-triggermode}

What sets the trap off: something that comes near (proximity), someone who uses it (interaction) or only an event.

- **PROXIMITY** = `0`
- **INTERACTION** = `1`

### enum TriggerReusability {#enum-triggerreusability}

How often the trap fires: once, again after a cooldown, or every time with no cooldown.

- **ONE_TIME** = `0`
- **COOLDOWN** = `1`
- **cooldown** = `2`

### enum TrapState {#enum-trapstate}

The states of a trap: armed, triggered, in cooldown, disabled or destroyed.

- **ARMED** = `0`
- **TRIGGERED** = `1`
- **COOLDOWN** = `2`
- **DISABLED** = `3`

## Property descriptions

*Trap Configuration*

### int trap_effect_id = -1 {#prop-trap-effect-id}

The effect ID to apply when triggered (from Database)

### TriggerMode trigger_mode = TriggerMode.PROXIMITY {#prop-trigger-mode}

What sets the trap off.

### TriggerReusability trigger_reusability = TriggerReusability.ONE_TIME {#prop-trigger-reusability}

How often the trap can fire.

### float cooldown_duration = 5.0 {#prop-cooldown-duration}

Only used if reusability is COOLDOWN

### bool visible_when_armed = true {#prop-visible-when-armed}

Whether trap is visible when armed

*Trigger Targeting*

### bool trigger_players = true {#prop-trigger-players}

Can trigger on player characters

### bool trigger_npcs = true {#prop-trigger-npcs}

Can trigger on NPCs

### bool trigger_pets = false {#prop-trigger-pets}

Can trigger on player pets

### bool use_relationship_filter = false {#prop-use-relationship-filter}

Also ask how the faction of the trap relates to the one that walks in (a placed trap is environmental, neutral to all, so this is off by default: the type options decide). A trap that was summoned always asks: it only hurts the enemies of its summoner

### ReputationLevel.FactionRelationship trigger_relationship = ReputationLevel.FactionRelationship.HOSTILE {#prop-trigger-relationship}

The relation to the faction of the trap that sets it off (hostile by default). Only used when the relationship filter is on.

*Targeting*

### Vector3 fixed_target_position = Vector3.ZERO {#prop-fixed-target-position}

Fixed position to always target (instead of triggering entity)

### bool use_fixed_target = false {#prop-use-fixed-target}

Whether to use the fixed target position

*Proximity Settings*

### Shape3D detection_shape {#prop-detection-shape}

Shape for the detection area (SphereShape3D, BoxShape3D, etc.)

### Vector3 detection_offset = Vector3.ZERO {#prop-detection-offset}

Offset from trap position for detection area

### float trigger_delay = 0.0 {#prop-trigger-delay}

Delay before triggering after detection

*Timer Settings*

### bool repeat_timer_enabled = false {#prop-repeat-timer-enabled}

Whether trap repeats on a timer

### float repeat_timer_interval = 10.0 {#prop-repeat-timer-interval}

Time between repeat triggers

### int repeat_timer_count = -1 {#prop-repeat-timer-count}

Number of repeats (-1 = infinite)

*Lifetime Settings*

### bool lifetime_enabled = false {#prop-lifetime-enabled}

Whether trap has a limited lifetime

### float lifetime_duration = 60.0 {#prop-lifetime-duration}

How long trap remains active

### bool cancel_persistent_effects = true {#prop-cancel-persistent-effects}

Cancel persistent effects when lifetime expires

*Audio*

### SFXSelection trigger_sound {#prop-trigger-sound}

The sound the trap makes when it fires.

## Variable descriptions

### TrapState current_trap_state = TrapState.ARMED {#var-current-trap-state}

The state of the trap now.

### Array[Entity] entities_in_range = [] {#var-entities-in-range}

The entities inside the detection area of the trap.

### Timer cooldown_timer {#var-cooldown-timer}

The timer of the cooldown between two triggers.

### Timer repeat_timer {#var-repeat-timer}

The timer between repeats of the effect.

### Timer lifetime_timer {#var-lifetime-timer}

The timer that ends the trap when its lifetime is over.

### int current_repeat_count = 0 {#var-current-repeat-count}

How many times the effect has repeated in this trigger.

### EffectInstance active_effect_instance {#var-active-effect-instance}

The effect the trap has put on a target and keeps running.

### Area3D detection_area {#var-detection-area}

Detection area created at runtime

## Method descriptions

### void setup_for_interactable_objects( interactable: InteractableObject ) {#method-setup-for-interactable-objects}

Sets the trap up on its object: finds the nodes it needs and applies its starting state.

### bool can_interact( player: Player ) {#method-can-interact}

Can the player use the trap now (in range, the object is not broken, the requirements are met)?

### void start_interaction( player: Player ) {#method-start-interaction}

The player uses the trap.

### void end_interaction() {#method-end-interaction}

Does nothing: a trap has no end of interaction.

### void change_trap_state( new_state: TrapState ) {#method-change-trap-state}

Puts the trap in a state (armed, triggered, cooldown ...).

### bool trigger_trap( target: Variant = null ) {#method-trigger-trap}

Main trigger method - can be called externally

### void on_object_destroyed() {#method-on-object-destroyed}

Called when the object is destroyed: the trap goes to its destroyed state.

### void reset_trap() {#method-reset-trap}

Reset trap to armed state

### void disable_trap() {#method-disable-trap}

Disable trap permanently

### bool can_trigger() {#method-can-trigger}

Check if trap can currently trigger

### float get_cooldown_remaining() {#method-get-cooldown-remaining}

Get remaining cooldown time

### float get_lifetime_remaining() {#method-get-lifetime-remaining}

Get remaining lifetime

### float get_repeat_timer_remaining() {#method-get-repeat-timer-remaining}

Get remaining repeat timer time

### bool force_trigger( target: Variant = null ) {#method-force-trigger}

Force trigger regardless of conditions (for event system)

### void extend_lifetime( additional_time: float ) {#method-extend-lifetime}

Extend trap lifetime

### Dictionary save_state() {#method-save-state}

The state of the trap for a save.

### void load_state( state: Dictionary ) {#method-load-state}

Restores the state of the trap from a save.

### void cleanup() {#method-cleanup}

Gives its timers back and clears what it holds (the object is going away).

