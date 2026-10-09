<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# PlayerController

**Inherits:** [Node3D](https://docs.godotengine.org/en/stable/classes/class_node3d.html)

---------- Signals ----------

## Variables

| | | |
|---|---|---|
| `ControllerLogic` | [current_controller_logic](#var-current-controller-logic) |  |
| `Node` | [current_mouse_hover_target](#var-current-mouse-hover-target) | `null` |
| `float` | [mouse_hover_check_timer](#var-mouse-hover-check-timer) | `0.0` |
| `float` | [mouse_hover_check_interval](#var-mouse-hover-check-interval) | `0.05` |
| `CollisionShape3D` | [dragbox_collision](#var-dragbox-collision) | `null` |
| `Panel` | [dragbox_visual](#var-dragbox-visual) |  |
| `Dictionary` | [current_targeting_context](#var-current-targeting-context) | `{}` |
| `bool` | [is_targeting_mode](#var-is-targeting-mode) | `false` |
| `PointMarker` | [point_marker](#var-point-marker) |  |
| `RadiusMarker` | [radius_marker](#var-radius-marker) |  |
| `Player` | [current_player](#var-current-player) |  |

## Methods

| | |
|---|---|
| `void` | [unhandled_input](#method-unhandled-input)( `event: InputEvent` ) |
| `bool` | [handle_esc_key](#method-handle-esc-key)() |
| `void` | [clear_selection](#method-clear-selection)() |
| `Entity` | [get_current_player](#method-get-current-player)() |
| `Array[Entity]` | [get_selected_units](#method-get-selected-units)() |
| `void` | [handle_action_bar_button_click](#method-handle-action-bar-button-click)( `slot_number: int` ) |
| `bool` | [start_ability_targeting](#method-start-ability-targeting)( `ability: AbilityInstance, initiator: Variant = null` ) |
| `void` | [create_new_radius_marker](#method-create-new-radius-marker)( `user: Entity, is_marker_friendly: bool, marker_range: float` ) |
| `Dictionary` | [get_mouse_collision_info](#method-get-mouse-collision-info)() |
| `void` | [select_single_player](#method-select-single-player)( `player: Player` ) |
| `void` | [toggle_player_selection](#method-toggle-player-selection)( `player: Player` ) |

## Signals

### input_detected( action_name: String ) {#signal-input-detected}

---------- Signals ----------

### rquest_ui_panel( panel_name: String ) {#signal-rquest-ui-panel}

### request_warning_message( message: String ) {#signal-request-warning-message}

## Constants

- `const` **SELECTION_BOX_STYLE** = `preload("res://addons/chroniclenode/assets/targeting/selection_box_style.tres")` - ---------- Constants ----------

## Variable descriptions

### ControllerLogic current_controller_logic {#var-current-controller-logic}

*No description yet.*

### Node current_mouse_hover_target = null {#var-current-mouse-hover-target}

---------- Properties ----------

### float mouse_hover_check_timer = 0.0 {#var-mouse-hover-check-timer}

*No description yet.*

### float mouse_hover_check_interval = 0.05 {#var-mouse-hover-check-interval}

*No description yet.*

### CollisionShape3D dragbox_collision = null {#var-dragbox-collision}

Properties needed by controller logic classes

### Panel dragbox_visual {#var-dragbox-visual}

*No description yet.*

### Dictionary current_targeting_context =  {#var-current-targeting-context}

---------- Targeting System (Universal) ----------

### bool is_targeting_mode = false {#var-is-targeting-mode}

*No description yet.*

### PointMarker point_marker {#var-point-marker}

---------- Node References ----------

### RadiusMarker radius_marker {#var-radius-marker}

*No description yet.*

### Player current_player {#var-current-player}

*No description yet.*

## Method descriptions

### void unhandled_input( event: InputEvent ) {#method-unhandled-input}

Gameplay input entry point. NOT an engine callback: it is called by InputManager (presses, motion and other events after the GUI; releases before it). Mouse-look no longer comes through here - it is delivered via ControllerLogic.handle_look / on_look_state.

### bool handle_esc_key() {#method-handle-esc-key}

Handle ESC key with priority chain - called directly from GameHost Returns true if handled, false if should go to pause menu

### void clear_selection() {#method-clear-selection}

Clear selection - implement if supporting multi-unit selection

### Entity get_current_player() {#method-get-current-player}

*No description yet.*

### Array[Entity] get_selected_units() {#method-get-selected-units}

*No description yet.*

### void handle_action_bar_button_click( slot_number: int ) {#method-handle-action-bar-button-click}

*No description yet.*

### bool start_ability_targeting( ability: AbilityInstance, initiator: Variant = null ) {#method-start-ability-targeting}

*No description yet.*

### void create_new_radius_marker( user: Entity, is_marker_friendly: bool, marker_range: float ) {#method-create-new-radius-marker}

Create radius marker for an entity

### Dictionary get_mouse_collision_info() {#method-get-mouse-collision-info}

*No description yet.*

### void select_single_player( player: Player ) {#method-select-single-player}

*No description yet.*

### void toggle_player_selection( player: Player ) {#method-toggle-player-selection}

*No description yet.*

