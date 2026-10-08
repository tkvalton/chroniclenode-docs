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

### switch_turned_off( entity: Entity ) {#signal-switch-turned-off}

### switch_state_changed( new_state: SwitchState, entity: Entity ) {#signal-switch-state-changed}

## Enumerations

### enum SwitchState {#enum-switchstate}

- **ON** = `0`
- **OFF** = `1`
- **BROKEN** = `2`
- **COOLDOWN** = `3`

## Property descriptions

### SwitchState current_state = SwitchState.OFF {#prop-current-state}

*No description yet.*

### bool starts_on = false {#prop-starts-on}

*No description yet.*

*Cooldown*

### bool cooldown_enabled = false {#prop-cooldown-enabled}

*No description yet.*

### float cooldown_duration = 2.0 {#prop-cooldown-duration}

*No description yet.*

*Animations*

### String switch_on_animation = "switch_on" {#prop-switch-on-animation}

*No description yet.*

### String switch_off_animation = "switch_off" {#prop-switch-off-animation}

*No description yet.*

### String broken_animation = "broken" {#prop-broken-animation}

*No description yet.*

### String locked_animation = "locked" {#prop-locked-animation}

*No description yet.*

*Audio*

### SFXSelection switch_on_sound {#prop-switch-on-sound}

*No description yet.*

### SFXSelection switch_off_sound {#prop-switch-off-sound}

*No description yet.*

### SFXSelection locked_sound {#prop-locked-sound}

*No description yet.*

## Variable descriptions

### Timer cooldown_timer {#var-cooldown-timer}

*No description yet.*

## Method descriptions

### void setup_for_interactable_objects( interactable: InteractableObject ) {#method-setup-for-interactable-objects}

*Overrides this function of [InteractableObjectInteraction](/advanced/entities/interactions/interactable-object-interaction).*

### bool can_interact( player: Player ) {#method-can-interact}

*Overrides this function of [InteractableObjectInteraction](/advanced/entities/interactions/interactable-object-interaction).*

### void start_interaction( player: Player ) {#method-start-interaction}

Start the interaction with the given player *(from [Interaction](/advanced/entities/interactions/interaction))*

### void end_interaction() {#method-end-interaction}

End the current interaction *(from [Interaction](/advanced/entities/interactions/interaction))*

### String get_interaction_prompt() {#method-get-interaction-prompt}

*No description yet.*

### void on_locked_reaction() {#method-on-locked-reaction}

*No description yet.*

### float get_cooldown_remaining() {#method-get-cooldown-remaining}

*No description yet.*

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

*No description yet.*

### void load_state( state: Dictionary ) {#method-load-state}

*No description yet.*

### void cleanup() {#method-cleanup}

*No description yet.*

