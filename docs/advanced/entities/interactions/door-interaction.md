<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# DoorInteraction

**Inherits:** [InteractableObjectInteraction](/advanced/entities/interactions/interactable-object-interaction) < [Interaction](/advanced/entities/interactions/interaction) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Door interaction - opens/closes doors with animations Uses available_animations from InteractableDefinition for animation selection

## Properties

| | | |
|---|---|---|
| `bool` | [is_open](#prop-is-open) | `false` |
| `bool` | [can_open_when_damaged](#prop-can-open-when-damaged) | `true` |
| `bool` | [auto_close_enabled](#prop-auto-close-enabled) | `false` |
| `float` | [auto_close_delay](#prop-auto-close-delay) | `5.0` |
| `String` | [open_animation](#prop-open-animation) | `"open"` |
| `String` | [close_animation](#prop-close-animation) | `"close"` |
| `String` | [locked_animation](#prop-locked-animation) | `"locked"` |
| `SFXSelection` | [door_open_sound](#prop-door-open-sound) |  |
| `SFXSelection` | [door_close_sound](#prop-door-close-sound) |  |
| `SFXSelection` | [door_locked_sound](#prop-door-locked-sound) |  |
| `SFXSelection` | [door_creak_sound](#prop-door-creak-sound) |  |

## Variables

| | | |
|---|---|---|
| `int` | [original_collision_layer](#var-original-collision-layer) |  |
| `int` | [original_collision_mask](#var-original-collision-mask) |  |
| `Timer` | [auto_close_timer](#var-auto-close-timer) | `null` |

## Methods

| | |
|---|---|
| `void` | [setup_for_interactable_objects](#method-setup-for-interactable-objects)( `interactable: InteractableObject` ) |
| `bool` | [can_interact](#method-can-interact)( `player: Player` ) |
| `void` | [start_interaction](#method-start-interaction)( `player: Player` ) |
| `void` | [on_object_destroyed](#method-on-object-destroyed)() |
| `void` | [on_locked_reaction](#method-on-locked-reaction)() |
| `bool` | [force_open](#method-force-open)() |
| `bool` | [force_close](#method-force-close)() |
| `Dictionary` | [save_state](#method-save-state)() |
| `void` | [load_state](#method-load-state)( `state: Dictionary` ) |
| `void` | [cleanup](#method-cleanup)() |

## Signals

### door_opened( entity: Entity ) {#signal-door-opened}

Emitted when the door opens.

### door_closed( entity: Entity ) {#signal-door-closed}

Emitted when the door closes.

## Property descriptions

### bool is_open = false {#prop-is-open}

True when the door is open.

### bool can_open_when_damaged = true {#prop-can-open-when-damaged}

True when a damaged door can still be opened.

### bool auto_close_enabled = false {#prop-auto-close-enabled}

True when the door closes by itself after a delay.

### float auto_close_delay = 5.0 {#prop-auto-close-delay}

How many seconds an open door waits before it closes by itself.

*Animations*

### String open_animation = "open" {#prop-open-animation}

Animation to play when door opens Editor will show dropdown of available_animations from InteractableDefinition

### String close_animation = "close" {#prop-close-animation}

Animation to play when door closes

### String locked_animation = "locked" {#prop-locked-animation}

Animation to play when locked (optional)

*Audio*

### SFXSelection door_open_sound {#prop-door-open-sound}

The sound of the door opening.

### SFXSelection door_close_sound {#prop-door-close-sound}

The sound of the door closing.

### SFXSelection door_locked_sound {#prop-door-locked-sound}

The sound of trying a locked door.

### SFXSelection door_creak_sound {#prop-door-creak-sound}

A creak played now and then (optional).

## Variable descriptions

### int original_collision_layer {#var-original-collision-layer}

The collision layer of the door when it is closed (kept to give it back).

### int original_collision_mask {#var-original-collision-mask}

The collision mask of the door when it is closed (kept to give it back).

### Timer auto_close_timer = null {#var-auto-close-timer}

The timer of the automatic closing.

## Method descriptions

### void setup_for_interactable_objects( interactable: InteractableObject ) {#method-setup-for-interactable-objects}

Sets the door up on its object: finds the nodes it needs and applies its starting state.

### bool can_interact( player: Player ) {#method-can-interact}

Can the player use the door now (in range, the object is not broken, the requirements are met)?

### void start_interaction( player: Player ) {#method-start-interaction}

The player uses the door.

### void on_object_destroyed() {#method-on-object-destroyed}

Called when the object is destroyed: a destroyed door is forced open and has no collision.

### void on_locked_reaction() {#method-on-locked-reaction}

Called when someone tries the object while it is locked: plays the locked sound and animation.

### bool force_open() {#method-force-open}

Opens the door without a player (a script or an event). False when it is destroyed.

### bool force_close() {#method-force-close}

Closes the door without a player. False when it is destroyed.

### Dictionary save_state() {#method-save-state}

The state of the door for a save.

### void load_state( state: Dictionary ) {#method-load-state}

Restores the state of the door from a save.

### void cleanup() {#method-cleanup}

Gives its timers back and clears what it holds (the object is going away).

