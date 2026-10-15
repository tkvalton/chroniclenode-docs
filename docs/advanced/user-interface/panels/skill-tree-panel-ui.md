<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# SkillTreePanelUI

**Inherits:** [Control](https://docs.godotengine.org/en/stable/classes/class_control.html)

Main panel for displaying player skill trees with integrated canvas Simple pan controls, no zoom, no grid

## Properties

| | | |
|---|---|---|
| `PackedScene` | [skill_node_scene](#prop-skill-node-scene) |  |

## Variables

| | | |
|---|---|---|
| `Player` | [current_player](#var-current-player) |  |
| `SkillTree` | [current_tree](#var-current-tree) |  |
| `SkillTreeInstance` | [current_instance](#var-current-instance) |  |
| `SkillNode` | [pending_choice_node](#var-pending-choice-node) |  |
| `Dictionary` | [pool_instances](#var-pool-instances) | `{}  # pool_id -> SkillPointPoolInstance` |
| `Dictionary` | [point_labels](#var-point-labels) | `{}  # pool_id -> Label` |
| `Vector2` | [camera_offset](#var-camera-offset) | `Vector2.ZERO` |
| `bool` | [is_panning](#var-is-panning) | `false` |
| `Vector2` | [pan_start](#var-pan-start) |  |
| `Dictionary` | [visual_nodes](#var-visual-nodes) | `{}  # node_id -> SkillNodeUIVisual` |

## Methods

| | |
|---|---|
| `void` | [initialize_display](#method-initialize-display)( `system_hub: GameHost.SystemHub` ) |
| `void` | [update_all_nodes](#method-update-all-nodes)() |
| `void` | [refresh_display](#method-refresh-display)() |
| `SkillTree` | [get_current_tree](#method-get-current-tree)() |
| `SkillTreeInstance` | [get_current_instance](#method-get-current-instance)() |

## Signals

### points_changed() {#signal-points-changed}

Emitted when points are spent/refunded

### skill_node_tooltip_requested( skill_node: SkillNode ) {#signal-skill-node-tooltip-requested}

Asks the interface to show the tooltip of a skill node.

### hide_tooltip( force_hide: bool ) {#signal-hide-tooltip}

Asks the interface to hide the tooltip (force hides it at once).

### message_requested( message: String ) {#signal-message-requested}

Asks the interface to show a message.

### warning_message_requested( message: String ) {#signal-warning-message-requested}

Asks the interface to show a warning.

## Constants

- `float` **CONNECTION_WIDTH** = `3.0` - ========== VISUAL CONSTANTS ==========
- `Color` **CONNECTION_LOCKED** = `Color(0.3, 0.3, 0.3, 0.8)       # Gray` - ========== COLORS ==========
- `Color` **CONNECTION_PARTIAL** = `Color(0.9, 0.8, 0.3, 1.0)` - Yellow/Gold
- `Color` **CONNECTION_COMPLETE** = `Color(0.3, 0.8, 0.4, 1.0)` - Green
- `Color` **CONNECTION_BLOCKED** = `Color(0.8, 0.3, 0.3, 1.0)` - Red

## Property descriptions

### PackedScene skill_node_scene {#prop-skill-node-scene}

The scene of one node.

## Variable descriptions

### Player current_player {#var-current-player}

========== STATE ==========

### SkillTree current_tree {#var-current-tree}

The tree shown.

### SkillTreeInstance current_instance {#var-current-instance}

The instance of the tree of the player.

### SkillNode pending_choice_node {#var-pending-choice-node}

Node waiting for choice selection

### Dictionary pool_instances =   # pool_id -&gt; SkillPointPoolInstance {#var-pool-instances}

Track pool instances for easy access

### Dictionary point_labels =   # pool_id -&gt; Label {#var-point-labels}

Track point label UI elements

### Vector2 camera_offset = Vector2.ZERO {#var-camera-offset}

========== CANVAS STATE ==========

### bool is_panning = false {#var-is-panning}

True while the player drags the canvas.

### Vector2 pan_start {#var-pan-start}

Where the drag of the canvas started.

### Dictionary visual_nodes =   # node_id -&gt; SkillNodeUIVisual {#var-visual-nodes}

Node management

## Method descriptions

### void initialize_display( system_hub: GameHost.SystemHub ) {#method-initialize-display}

Initialize the display with current player data

### void update_all_nodes() {#method-update-all-nodes}

Update all visual nodes states

### void refresh_display() {#method-refresh-display}

Refresh the entire display

### SkillTree get_current_tree() {#method-get-current-tree}

Get current tree being displayed

### SkillTreeInstance get_current_instance() {#method-get-current-instance}

Get current instance being displayed

