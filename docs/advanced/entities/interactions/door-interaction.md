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

### door_closed( entity: Entity ) {#signal-door-closed}

## Property descriptions

### bool is_open = false {#prop-is-open}

*No description yet.*

### bool can_open_when_damaged = true {#prop-can-open-when-damaged}

*No description yet.*

### bool auto_close_enabled = false {#prop-auto-close-enabled}

*No description yet.*

### float auto_close_delay = 5.0 {#prop-auto-close-delay}

*No description yet.*

*Animations*

### String open_animation = "open" {#prop-open-animation}

Animation to play when door opens Editor will show dropdown of available_animations from InteractableDefinition

### String close_animation = "close" {#prop-close-animation}

Animation to play when door closes

### String locked_animation = "locked" {#prop-locked-animation}

Animation to play when locked (optional)

*Audio*

### SFXSelection door_open_sound {#prop-door-open-sound}

*No description yet.*

### SFXSelection door_close_sound {#prop-door-close-sound}

*No description yet.*

### SFXSelection door_locked_sound {#prop-door-locked-sound}

*No description yet.*

### SFXSelection door_creak_sound {#prop-door-creak-sound}

*No description yet.*

## Variable descriptions

### int original_collision_layer {#var-original-collision-layer}

*No description yet.*

### int original_collision_mask {#var-original-collision-mask}

*No description yet.*

### Timer auto_close_timer = null {#var-auto-close-timer}

*No description yet.*

## Method descriptions

### void setup_for_interactable_objects( interactable: InteractableObject ) {#method-setup-for-interactable-objects}

*Overrides this function of [InteractableObjectInteraction](/advanced/entities/interactions/interactable-object-interaction).*

### bool can_interact( player: Player ) {#method-can-interact}

*Overrides this function of [InteractableObjectInteraction](/advanced/entities/interactions/interactable-object-interaction).*

### void start_interaction( player: Player ) {#method-start-interaction}

Start the interaction with the given player *(from [Interaction](/advanced/entities/interactions/interaction))*

### void on_object_destroyed() {#method-on-object-destroyed}

*No description yet.*

### void on_locked_reaction() {#method-on-locked-reaction}

*No description yet.*

### bool force_open() {#method-force-open}

*No description yet.*

### bool force_close() {#method-force-close}

*No description yet.*

### Dictionary save_state() {#method-save-state}

*No description yet.*

### void load_state( state: Dictionary ) {#method-load-state}

*No description yet.*

### void cleanup() {#method-cleanup}

*No description yet.*

