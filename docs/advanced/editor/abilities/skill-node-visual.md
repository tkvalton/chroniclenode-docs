<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# SkillNodeVisual

**Inherits:** [Control](https://docs.godotengine.org/en/stable/classes/class_control.html)

Visual representation of a skill node - uses scene-based UI

## Properties

| | | |
|---|---|---|
| `SkillNode : set` | [skill_node](#prop-skill-node) | `set_skill_node` |
| `bool` | [is_selected](#prop-is-selected) | `false : set = set_selected` |
| `float` | [zoom_level](#prop-zoom-level) | `1.0 : set = set_zoom_level` |
| `bool` | [show_debug_info](#prop-show-debug-info) | `true` |

## Variables

| | | |
|---|---|---|
| `bool` | [is_dragging](#var-is-dragging) | `false` |
| `Vector2` | [drag_start_pos](#var-drag-start-pos) |  |

## Methods

| | |
|---|---|
| `void` | [set_skill_node](#method-set-skill-node)( `node: SkillNode` ) |
| `void` | [set_selected](#method-set-selected)( `selected: bool` ) |
| `void` | [set_zoom_level](#method-set-zoom-level)( `zoom: float` ) |
| `void` | [play_select_animation](#method-play-select-animation)() |
| `void` | [play_hover_animation](#method-play-hover-animation)() |
| `void` | [play_unhover_animation](#method-play-unhover-animation)() |
| `SkillNode` | [get_node_data](#method-get-node-data)() |
| `Vector2` | [get_center_position](#method-get-center-position)() |
| `Dictionary` | [get_connection_points](#method-get-connection-points)() |
| `void` | [set_highlight](#method-set-highlight)( `enabled: bool` ) |
| `void` | [set_error_state](#method-set-error-state)( `has_error: bool` ) |
| `void` | [update_rank_display](#method-update-rank-display)( `current_rank: int = 0` ) |

## Signals

### node_clicked( node: SkillNodeVisual, event: InputEvent ) {#signal-node-clicked}

### node_right_clicked( node: SkillNodeVisual, global_position: Vector2 ) {#signal-node-right-clicked}

### node_drag_started( node: SkillNodeVisual ) {#signal-node-drag-started}

### node_dragged( node: SkillNodeVisual, relative_motion: Vector2 ) {#signal-node-dragged}

### node_drag_ended( node: SkillNodeVisual ) {#signal-node-drag-ended}

## Constants

- `Vector2` **NODE_SIZE** = `Vector2(50, 50)`
- `float` **BORDER_WIDTH** = `2.0`
- `float` **CORNER_RADIUS** = `8.0`
- `Vector2` **ICON_SIZE** = `Vector2(45, 45)`
- `Color` **NODE_DEFAULT_COLOR** = `Color(0.4, 0.4, 0.6, 1.0)`
- `Color` **NODE_SELECTED_COLOR** = `Color(0.6, 0.8, 1.0, 1.0)`
- `Color` **NODE_CHOICE_COLOR** = `Color(0.6, 0.4, 0.8, 1.0)`
- `Color` **NODE_RANKED_COLOR** = `Color(0.4, 0.6, 0.4, 1.0)`
- `Color` **BORDER_DEFAULT_COLOR** = `Color(0.2, 0.2, 0.3, 1.0)`
- `Color` **BORDER_SELECTED_COLOR** = `Color(1.0, 1.0, 0.5, 1.0)`
- `Color` **TEXT_COLOR** = `Color.WHITE`
- `Color` **ID_TEXT_COLOR** = `Color(0.7, 0.7, 0.7, 1.0)`

## Property descriptions

### SkillNode : set skill_node = set_skill_node {#prop-skill-node}

*No description yet.*

### bool is_selected = false : set = set_selected {#prop-is-selected}

*No description yet.*

### float zoom_level = 1.0 : set = set_zoom_level {#prop-zoom-level}

*No description yet.*

### bool show_debug_info = true {#prop-show-debug-info}

*No description yet.*

## Variable descriptions

### bool is_dragging = false {#var-is-dragging}

*No description yet.*

### Vector2 drag_start_pos {#var-drag-start-pos}

*No description yet.*

## Method descriptions

### void set_skill_node( node: SkillNode ) {#method-set-skill-node}

*No description yet.*

### void set_selected( selected: bool ) {#method-set-selected}

*No description yet.*

### void set_zoom_level( zoom: float ) {#method-set-zoom-level}

*No description yet.*

### void play_select_animation() {#method-play-select-animation}

*No description yet.*

### void play_hover_animation() {#method-play-hover-animation}

*No description yet.*

### void play_unhover_animation() {#method-play-unhover-animation}

*No description yet.*

### SkillNode get_node_data() {#method-get-node-data}

*No description yet.*

### Vector2 get_center_position() {#method-get-center-position}

*No description yet.*

### Dictionary get_connection_points() {#method-get-connection-points}

*No description yet.*

### void set_highlight( enabled: bool ) {#method-set-highlight}

*No description yet.*

### void set_error_state( has_error: bool ) {#method-set-error-state}

*No description yet.*

### void update_rank_display( current_rank: int = 0 ) {#method-update-rank-display}

*No description yet.*

