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
| `SkillNode  # Node waiting for choice selection` | [pending_choice_node](#var-pending-choice-node) |  |
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

### hide_tooltip( force_hide: bool ) {#signal-hide-tooltip}

### message_requested( message: String ) {#signal-message-requested}

### warning_message_requested( message: String ) {#signal-warning-message-requested}

## Constants

- `float` **CONNECTION_WIDTH** = `3.0`
- `Color` **CONNECTION_LOCKED** = `Color(0.3, 0.3, 0.3, 0.8)       # Gray`
- `Color` **CONNECTION_PARTIAL** = `Color(0.9, 0.8, 0.3, 1.0)      # Yellow/Gold`
- `Color` **CONNECTION_COMPLETE** = `Color(0.3, 0.8, 0.4, 1.0)     # Green`
- `Color` **CONNECTION_BLOCKED** = `Color(0.8, 0.3, 0.3, 1.0)      # Red`

## Property descriptions

### PackedScene skill_node_scene {#prop-skill-node-scene}

*No description yet.*

## Variable descriptions

### Player current_player {#var-current-player}

*No description yet.*

### SkillTree current_tree {#var-current-tree}

*No description yet.*

### SkillTreeInstance current_instance {#var-current-instance}

*No description yet.*

### SkillNode  # Node waiting for choice selection pending_choice_node {#var-pending-choice-node}

*No description yet.*

### Dictionary pool_instances =   # pool_id -&gt; SkillPointPoolInstance {#var-pool-instances}

*No description yet.*

### Dictionary point_labels =   # pool_id -&gt; Label {#var-point-labels}

*No description yet.*

### Vector2 camera_offset = Vector2.ZERO {#var-camera-offset}

*No description yet.*

### bool is_panning = false {#var-is-panning}

*No description yet.*

### Vector2 pan_start {#var-pan-start}

*No description yet.*

### Dictionary visual_nodes =   # node_id -&gt; SkillNodeUIVisual {#var-visual-nodes}

*No description yet.*

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

