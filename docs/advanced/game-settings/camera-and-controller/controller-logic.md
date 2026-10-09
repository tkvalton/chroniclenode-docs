<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ControllerLogic

**Inherits:** [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

**Inherited by:** [PointAndClickRTSLogic](/advanced/game-settings/camera-and-controller/point-and-click-rts-logic), [PointAndClickSingleLogic](/advanced/game-settings/camera-and-controller/point-and-click-single-logic), [WASDWithMouseLogic](/advanced/game-settings/camera-and-controller/wasd-with-mouse-logic)

Base player controller logic resource - both configuration and runtime behavior Save instances to res://src/data/controller_logic/player/

## Description

Child classes:

1. Add exported properties for configuration

2. Override setup/process_input/handle_input_event for behavior

3. Override get_type_display_name() for editor display

## Properties

| | | |
|---|---|---|
| `String` | [preset_name](#prop-preset-name) | `"Unnamed Controller"` |
| `String` | [description](#prop-description) | `""` |
| `float` | [look_sensitivity_scale](#prop-look-sensitivity-scale) | `1.0` |

## Variables

| | | |
|---|---|---|
| `GameHost.SystemHub` | [system_hub](#var-system-hub) |  |
| `PlayerController` | [controller](#var-controller) |  |
| `Player` | [current_player](#var-current-player) | `null` |

## Methods

| | |
|---|---|
| `void` | [initialize](#method-initialize)( `p_system_hub: GameHost.SystemHub` ) |
| `void` | [setup](#method-setup)( `controller: PlayerController` ) |
| `void` | [process_input](#method-process-input)( `delta: float` ) |
| `void` | [handle_input_event](#method-handle-input-event)( `event: InputEvent` ) |
| `void` | [cleanup](#method-cleanup)() |
| `Array[Entity]` | [get_selected_units](#method-get-selected-units)() |
| `Entity` | [get_current_player](#method-get-current-player)() |
| `bool` | [can_handle_targeting](#method-can-handle-targeting)() |
| `bool` | [can_handle_abilities](#method-can-handle-abilities)() |
| `bool` | [can_handle_direct_movement](#method-can-handle-direct-movement)() |
| `bool` | [can_handle_keyboard_interact](#method-can-handle-keyboard-interact)() |
| `void` | [select_single_player](#method-select-single-player)( `player: Entity` ) |
| `void` | [toggle_player_selection](#method-toggle-player-selection)( `player: Entity` ) |
| `MovementBasis` | [get_movement_basis](#method-get-movement-basis)() |
| `Array[LookBinding]` | [get_look_bindings](#method-get-look-bindings)() |
| `Array[int]` | [get_exclusive_buttons](#method-get-exclusive-buttons)() |
| `void` | [handle_look](#method-handle-look)( `kind: LookBinding.Kind, delta_rad: Vector2` ) |
| `void` | [on_look_state](#method-on-look-state)( `kind: LookBinding.Kind, active: bool` ) |
| `void` | [on_click_completed](#method-on-click-completed)( `button_index: int, position: Vector2` ) |
| `void` | [process_target_lock](#method-process-target-lock)( `delta: float` ) |
| `void` | [on_target_lock_changed](#method-on-target-lock-changed)( `is_locked: bool, target: Variant` ) |
| `bool` | [handle_esc_input](#method-handle-esc-input)() |
| `String` | [get_type_display_name](#method-get-type-display-name)() |
| `String` | [get_editor_icon](#method-get-editor-icon)() |
| `Array[String]` | [validate](#method-validate)() |
| `bool` | [is_enemy](#method-is-enemy)( `player: Player, target: Entity` ) *static* |
| `bool` | [should_interrupt_cast](#method-should-interrupt-cast)( `player: Player` ) *static* |
| `float` | [get_attack_range](#method-get-attack-range)( `player: Player` ) *static* |
| `bool` | [is_within_interaction_distance](#method-is-within-interaction-distance)( `player: Player, interactable: Variant` ) *static* |
| `bool` | [can_interact_with_npc](#method-can-interact-with-npc)( `npc: NPC` ) *static* |
| `float` | [get_npc_interaction_distance](#method-get-npc-interaction-distance)( `npc: NPC, player: Player` ) *static* |
| `void` | [move_player_with_cast_check](#method-move-player-with-cast-check)( `player: Player, target_position: Vector3, face_target: bool = false, stop_distance: float = 0.0` ) *static* |
| `void` | [move_to_and_attack](#method-move-to-and-attack)( `player: Player, target: Entity` ) *static* |
| `void` | [set_target_with_cast_stop](#method-set-target-with-cast-stop)( `player: Player, target: Entity` ) *static* |

## Enumerations

### enum MovementBasis {#enum-movementbasis}

What direction WASD-style movement is relative to

- **CHARACTER** = `0`
- **CAMERA** = `1`

### enum SecondaryActionTrigger {#enum-secondaryactiontrigger}

When a controller's right-click action (attack / interact / command) fires

- **PRESS** = `0`
- **RELEASE_WITHOUT_DRAG** = `1`

## Property descriptions

### String preset_name = "Unnamed Controller" {#prop-preset-name}

Display name shown in editor dropdowns

### String description = "" {#prop-description}

Description of controller behavior

*Mouse Look*

### float look_sensitivity_scale = 1.0 {#prop-look-sensitivity-scale}

How sensitive THIS preset feels, relative to the player's mouse sensitivity setting (SettingsConfig.mouse_x/y_axis_sensitivity). 1.0 = exactly the player's setting. The player's setting itself is never changed here - this is only the preset's feel.

## Variable descriptions

### GameHost.SystemHub system_hub {#var-system-hub}

System hub reference (set at runtime)

### PlayerController controller {#var-controller}

*No description yet.*

### Player current_player = null {#var-current-player}

*No description yet.*

## Method descriptions

### void initialize( p_system_hub: GameHost.SystemHub ) {#method-initialize}

Initialize with system hub reference - called by PlayerController

### void setup( controller: PlayerController ) {#method-setup}

Setup controller behavior - override in child classes

### void process_input( delta: float ) {#method-process-input}

Per-frame input processing - override in child classes

### void handle_input_event( event: InputEvent ) {#method-handle-input-event}

Handle input events - override in child classes

### void cleanup() {#method-cleanup}

Cleanup when switching controllers - override in child classes

### Array[Entity] get_selected_units() {#method-get-selected-units}

Get currently selected units (RTS mode)

### Entity get_current_player() {#method-get-current-player}

Get the primary controlled player

### bool can_handle_targeting() {#method-can-handle-targeting}

Can this controller handle ability targeting?

### bool can_handle_abilities() {#method-can-handle-abilities}

Can this controller handle ability keybinds?

### bool can_handle_direct_movement() {#method-can-handle-direct-movement}

Can this controller handle direct WASD movement?

### bool can_handle_keyboard_interact() {#method-can-handle-keyboard-interact}

Can this controller handle keyboard-based interactions?

### void select_single_player( player: Entity ) {#method-select-single-player}

Select a single player (called by UI/external systems)

### void toggle_player_selection( player: Entity ) {#method-toggle-player-selection}

Toggle player selection (called by UI/external systems)

### MovementBasis get_movement_basis() {#method-get-movement-basis}

What movement is relative to. The camera asks this: with CAMERA movement it must not follow the body while walking (the body follows the camera instead) and right-drag orbits the camera.

### Array[LookBinding] get_look_bindings() {#method-get-look-bindings}

Mouse gestures this controller wants (button + LookBinding.Kind). Called when a gesture starts.

### Array[int] get_exclusive_buttons() {#method-get-exclusive-buttons}

Mouse buttons this controller uses for its own click/drag handling (e.g. LMB drag-box select). Look bindings that a camera declares on these buttons are dropped.

### void handle_look( kind: LookBinding.Kind, delta_rad: Vector2 ) {#method-handle-look}

Look movement for a gesture this controller declared. delta_rad is screen-space radians with the player's sensitivity and invert settings applied (x &gt; 0 = mouse right, y &gt; 0 = mouse down). Multiply by look_sensitivity_scale.

### void on_look_state( kind: LookBinding.Kind, active: bool ) {#method-on-look-state}

A gesture this controller declared started (active = true) or ended (active = false)

### void on_click_completed( button_index: int, position: Vector2 ) {#method-on-click-completed}

A look binding that requires a drag was released before it became a drag (a plain click)

### void process_target_lock( delta: float ) {#method-process-target-lock}

Called every frame when player has a locked target Child classes should implement character rotation toward target here

### void on_target_lock_changed( is_locked: bool, target: Variant ) {#method-on-target-lock-changed}

Called when target lock is toggled on/off Child classes can use this for setup/cleanup

### bool handle_esc_input() {#method-handle-esc-input}

Handle ESC key press with priority chain Returns true if the logic handled it, false to let controller handle it Priority chain (controller will handle these if logic returns false): 1. Cancel targeting mode 2. Clear target 3. Clear selection (multi-unit)

### String get_type_display_name() {#method-get-type-display-name}

Get display name for editor

### String get_editor_icon() {#method-get-editor-icon}

Get icon for editor

### Array[String] validate() {#method-validate}

Validate settings - return errors array

### bool is_enemy( player: Player, target: Entity ) {#method-is-enemy}

Check if player and target are enemies

### bool should_interrupt_cast( player: Player ) {#method-should-interrupt-cast}

Check if player should interrupt their cast (immobilizing cast + new action)

### float get_attack_range( player: Player ) {#method-get-attack-range}

Get the attack range for a player's basic attack

### bool is_within_interaction_distance( player: Player, interactable: Variant ) {#method-is-within-interaction-distance}

Check if player is within interaction distance of an interactable

### bool can_interact_with_npc( npc: NPC ) {#method-can-interact-with-npc}

Check if an NPC has a valid interaction

### float get_npc_interaction_distance( npc: NPC, player: Player ) {#method-get-npc-interaction-distance}

Get the interaction distance for an NPC (falls back to player's range)

### void move_player_with_cast_check( player: Player, target_position: Vector3, face_target: bool = false, stop_distance: float = 0.0 ) {#method-move-player-with-cast-check}

Helper to interrupt cast if needed and move player

### void move_to_and_attack( player: Player, target: Entity ) {#method-move-to-and-attack}

Helper to move player to target and initiate attack

### void set_target_with_cast_stop( player: Player, target: Entity ) {#method-set-target-with-cast-stop}

Helper to set target and stop casting

