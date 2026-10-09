<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# SkillTreeCanvas

**Inherits:** [Control](https://docs.godotengine.org/en/stable/classes/class_control.html)

Visual canvas for editing skill trees with visual node components

## Variables

| | | |
|---|---|---|
| `SkillTree` | [current_skill_tree](#var-current-skill-tree) |  |
| `SkillNode` | [selected_node](#var-selected-node) |  |
| `SkillConnection` | [selected_connection](#var-selected-connection) |  |
| `Vector2` | [camera_offset](#var-camera-offset) | `Vector2.ZERO` |
| `bool` | [is_panning](#var-is-panning) | `false` |
| `Vector2` | [pan_start](#var-pan-start) |  |
| `Dictionary` | [visual_nodes](#var-visual-nodes) | `{} # {id: SkillNodeVisual}` |
| `SkillNodeVisual` | [dragging_visual_node](#var-dragging-visual-node) |  |
| `SkillTreeEditor` | [editor](#var-editor) |  |
| `ConnectionCreationDialog` | [connection_creation_dialog](#var-connection-creation-dialog) |  |
| `Button` | [grid_snap_button](#var-grid-snap-button) |  |
| `Panel` | [background_panel](#var-background-panel) |  |
| `bool` | [grid_snap_enabled](#var-grid-snap-enabled) | `true` |

## Methods

| | |
|---|---|
| `void` | [set_editor_references](#method-set-editor-references)( `editor_ref: SkillTreeEditor, conn_dialog: ConnectionCreationDialog` ) |
| `void` | [auto_layout_nodes](#method-auto-layout-nodes)() |
| `void` | [load_skill_tree](#method-load-skill-tree)( `skill_tree: SkillTree` ) |
| `void` | [select_node](#method-select-node)( `node: SkillNode` ) |
| `void` | [select_connection](#method-select-connection)( `connection: SkillConnection` ) |
| `SkillNode` | [get_selected_node](#method-get-selected-node)() |
| `SkillConnection` | [get_selected_connection](#method-get-selected-connection)() |
| `void` | [refresh_visual_nodes](#method-refresh-visual-nodes)() |
| `void` | [refresh](#method-refresh)() |
| `void` | [refresh_node](#method-refresh-node)( `node: SkillNode` ) |
| `void` | [refresh_connection](#method-refresh-connection)( `connection: SkillConnection` ) |
| `SkillNode` | [add_node_at_screen_position](#method-add-node-at-screen-position)( `node_type: String, screen_pos: Vector2` ) |
| `Vector2` | [get_canvas_center_world_position](#method-get-canvas-center-world-position)() |
| `void` | [add_visual_node](#method-add-visual-node)( `node: SkillNode` ) |
| `void` | [focus_on_node](#method-focus-on-node)( `node: SkillNode` ) |
| `SkillNodeVisual` | [get_visual_node](#method-get-visual-node)( `node: SkillNode` ) |
| `void` | [highlight_node](#method-highlight-node)( `node: SkillNode, enabled: bool = true` ) |
| `void` | [set_node_error_state](#method-set-node-error-state)( `node: SkillNode, has_error: bool` ) |

## Signals

### node_selected( node: SkillNode ) {#signal-node-selected}

### connection_selected( connection: SkillConnection ) {#signal-connection-selected}

### node_position_changed( node: SkillNode, new_position: Vector2 ) {#signal-node-position-changed}

## Constants

- `const` **SKILL_NODE_EDITOR_VISUAL** = `preload("uid://d2kjmbp4k06vi")`
- `int` **GRID_SIZE** = `50`
- `float` **CONNECTION_WIDTH** = `3.0`
- `Color` **GRID_COLOR** = `Color(0.3, 0.3, 0.3, 0.5)`
- `Color` **CONNECTION_NORMAL_COLOR** = `Color(0.7, 0.7, 0.7, 1.0)`
- `Color` **CONNECTION_SELECTED_COLOR** = `Color(1.0, 1.0, 0.5, 1.0)`

## Variable descriptions

### SkillTree current_skill_tree {#var-current-skill-tree}

*No description yet.*

### SkillNode selected_node {#var-selected-node}

*No description yet.*

### SkillConnection selected_connection {#var-selected-connection}

*No description yet.*

### Vector2 camera_offset = Vector2.ZERO {#var-camera-offset}

*No description yet.*

### bool is_panning = false {#var-is-panning}

*No description yet.*

### Vector2 pan_start {#var-pan-start}

*No description yet.*

### Dictionary visual_nodes =  # id: SkillNodeVisual {#var-visual-nodes}

*No description yet.*

### SkillNodeVisual dragging_visual_node {#var-dragging-visual-node}

*No description yet.*

### SkillTreeEditor editor {#var-editor}

*No description yet.*

### ConnectionCreationDialog connection_creation_dialog {#var-connection-creation-dialog}

*No description yet.*

### Button grid_snap_button {#var-grid-snap-button}

*No description yet.*

### Panel background_panel {#var-background-panel}

*No description yet.*

### bool grid_snap_enabled = true {#var-grid-snap-enabled}

*No description yet.*

## Method descriptions

### void set_editor_references( editor_ref: SkillTreeEditor, conn_dialog: ConnectionCreationDialog ) {#method-set-editor-references}

*No description yet.*

### void auto_layout_nodes() {#method-auto-layout-nodes}

*No description yet.*

### void load_skill_tree( skill_tree: SkillTree ) {#method-load-skill-tree}

*No description yet.*

### void select_node( node: SkillNode ) {#method-select-node}

*No description yet.*

### void select_connection( connection: SkillConnection ) {#method-select-connection}

*No description yet.*

### SkillNode get_selected_node() {#method-get-selected-node}

*No description yet.*

### SkillConnection get_selected_connection() {#method-get-selected-connection}

*No description yet.*

### void refresh_visual_nodes() {#method-refresh-visual-nodes}

*No description yet.*

### void refresh() {#method-refresh}

*No description yet.*

### void refresh_node( node: SkillNode ) {#method-refresh-node}

*No description yet.*

### void refresh_connection( connection: SkillConnection ) {#method-refresh-connection}

*No description yet.*

### SkillNode add_node_at_screen_position( node_type: String, screen_pos: Vector2 ) {#method-add-node-at-screen-position}

*No description yet.*

### Vector2 get_canvas_center_world_position() {#method-get-canvas-center-world-position}

*No description yet.*

### void add_visual_node( node: SkillNode ) {#method-add-visual-node}

*No description yet.*

### void focus_on_node( node: SkillNode ) {#method-focus-on-node}

*No description yet.*

### SkillNodeVisual get_visual_node( node: SkillNode ) {#method-get-visual-node}

*No description yet.*

### void highlight_node( node: SkillNode, enabled: bool = true ) {#method-highlight-node}

*No description yet.*

### void set_node_error_state( node: SkillNode, has_error: bool ) {#method-set-node-error-state}

*No description yet.*

