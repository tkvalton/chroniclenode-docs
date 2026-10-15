<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# SwitchInteraction

**Inherits:** [InteractableObjectInteraction](/advanced/entities/interactions/interactable-object-interaction) < [Interaction](/advanced/entities/interactions/interaction) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

**Inherited by:** [LightInteraction](/advanced/entities/interactions/light-interaction)

Switch interaction - handles ON/OFF toggle with lock mechanics and audio feedback Base class for LightInteraction and other toggle-based interactions

## Properties

| | | |
|---|---|---|
| `SwitchState` | [current_state](#prop-current-state) | `SwitchState.OFF` |
| `bool` | [starts_on](#prop-starts-on) | `false` |
| `bool` | [cooldown_enabled](#prop-cooldown-enabled) | `false` |
| `float` | [cooldown_duration](#prop-cooldown-duration) | `2.0` |
| `String` | [switch_on_animation](#prop-switch-on-animation) | `"switch_on"` |
| `String` | [switch_off_animation](#prop-switch-off-animation) | `"switch_off"` |
| `String` | [broken_animation](#prop-broken-animation) | `"broken"` |
| `String` | [locked_animation](#prop-locked-animation) | `"locked"` |
| `SFXSelection` | [switch_on_sound](#prop-switch-on-sound) |  |
| `SFXSelection` | [switch_off_sound](#prop-switch-off-sound) |  |
| `SFXSelection` | [locked_sound](#prop-locked-sound) |  |

## Variables

| | | |
|---|---|---|
| `Timer` | [cooldown_timer](#var-cooldown-timer) |  |

## Methods

| | |
|---|---|
| `void` | [setup_for_interactable_objects](#method-setup-for-interactable-objects)( `interactable: InteractableObject` ) |
| `bool` | [can_interact](#method-can-interact)( `player: Player` ) |
| `void` | [start_interaction](#method-start-interaction)( `player: Player` ) |
| `void` | [end_interaction](#method-end-interaction)() |
| `String` | [get_interaction_prompt](#method-get-interaction-prompt)() |
| `void` | [on_locked_reaction](#method-on-locked-reaction)() |
| `float` | [get_cooldown_remaining](#method-get-cooldown-remaining)() |
| `void` | [set_switch_state](#method-set-switch-state)( `new_state: SwitchState, triggering_entity: Entity = null` ) |
| `SwitchState` | [get_switch_state](#method-get-switch-state)() |
| `bool` | [is_switch_on](#method-is-switch-on)() |
| `bool` | [is_switch_off](#method-is-switch-off)() |
| `bool` | [is_switch_broken](#method-is-switch-broken)() |
| `bool` | [is_switch_on_cooldown](#method-is-switch-on-cooldown)() |
| `void` | [break_switch](#method-break-switch)() |
| `void` | [turn_on](#method-turn-on)() |
| `void` | [turn_off](#method-turn-off)() |
| `void` | [toggle](#method-toggle)() |
| `Dictionary` | [save_state](#method-save-state)() |
| `void` | [load_state](#method-load-state)( `state: Dictionary` ) |
| `void` | [cleanup](#method-cleanup)() |

## Signals

### switch_turned_on( entity: Entity ) {#signal-switch-turned-on}

Emitted when the switch is turned on.

### switch_turned_off( entity: Entity ) {#signal-switch-turned-off}

Emitted when the switch is turned off.

### switch_state_changed( new_state: SwitchState, entity: Entity ) {#signal-switch-state-changed}

Emitted when the state of the switch changes: the new state and who changed it.

## Enumerations

### enum SwitchState {#enum-switchstate}

The states of a switch: on, off, broken or in cooldown.

- **ON** = `0`
- **OFF** = `1`
- **BROKEN** = `2`
- **COOLDOWN** = `3`

## Property descriptions

### SwitchState current_state = SwitchState.OFF {#prop-current-state}

The state of the switch now.

### bool starts_on = false {#prop-starts-on}

True when the switch is on when the game starts.

*Cooldown*

### bool cooldown_enabled = false {#prop-cooldown-enabled}

True when the switch cannot be used again for a while after a use.

### float cooldown_duration = 2.0 {#prop-cooldown-duration}

How many seconds the switch waits after a use (when the cooldown is on).

*Animations*

### String switch_on_animation = "switch_on" {#prop-switch-on-animation}

The animation of turning the switch on.

### String switch_off_animation = "switch_off" {#prop-switch-off-animation}

The animation of turning the switch off.

### String broken_animation = "broken" {#prop-broken-animation}

The animation of a broken switch.

### String locked_animation = "locked" {#prop-locked-animation}

The animation of trying a locked switch.

*Audio*

### SFXSelection switch_on_sound {#prop-switch-on-sound}

The sound of turning the switch on.

### SFXSelection switch_off_sound {#prop-switch-off-sound}

The sound of turning the switch off.

### SFXSelection locked_sound {#prop-locked-sound}

The sound of trying a locked switch.

## Variable descriptions

### Timer cooldown_timer {#var-cooldown-timer}

The timer of the cooldown.

## Method descriptions

### void setup_for_interactable_objects( interactable: InteractableObject ) {#method-setup-for-interactable-objects}

Sets the switch up on its object: finds the nodes it needs and applies its starting state.

### bool can_interact( player: Player ) {#method-can-interact}

Can the player use the switch now (in range, the object is not broken, the requirements are met)?

### void start_interaction( player: Player ) {#method-start-interaction}

The player uses the switch.

### void end_interaction() {#method-end-interaction}

Does nothing: a switch has no end of interaction.

### String get_interaction_prompt() {#method-get-interaction-prompt}

The text of the prompt above the object for its state now ("Open", "Climb" ...).

### void on_locked_reaction() {#method-on-locked-reaction}

Called when someone tries the object while it is locked: plays the locked sound and animation.

### float get_cooldown_remaining() {#method-get-cooldown-remaining}

How many seconds of the cooldown are left.

### void set_switch_state( new_state: SwitchState, triggering_entity: Entity = null ) {#method-set-switch-state}

Force the switch to a specific state

### SwitchState get_switch_state() {#method-get-switch-state}

Get the current switch state

### bool is_switch_on() {#method-is-switch-on}

Check if switch is currently on

### bool is_switch_off() {#method-is-switch-off}

Check if switch is currently off

### bool is_switch_broken() {#method-is-switch-broken}

Check if switch is broken

### bool is_switch_on_cooldown() {#method-is-switch-on-cooldown}

Check if switch is on cooldown

### void break_switch() {#method-break-switch}

Break the switch (set to BROKEN state)

### void turn_on() {#method-turn-on}

Turn switch on (force without entity interaction)

### void turn_off() {#method-turn-off}

Turn switch off (force without entity interaction)

### void toggle() {#method-toggle}

Toggle switch state

### Dictionary save_state() {#method-save-state}

The state of the switch for a save.

### void load_state( state: Dictionary ) {#method-load-state}

Restores the state of the switch from a save.

### void cleanup() {#method-cleanup}

Gives its timers back and clears what it holds (the object is going away).

