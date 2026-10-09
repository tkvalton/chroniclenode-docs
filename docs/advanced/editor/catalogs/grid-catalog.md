<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# GridCatalog

**Inherits:** `ConfirmationDialog`

**Inherited by:** [IconCatalog](/advanced/editor/catalogs/icon-catalog), [MeshCatalog](/advanced/editor/catalogs/mesh-catalog)

## Variables

| | | |
|---|---|---|
| `Array[Dictionary]` | [all_objects](#var-all-objects) | `[]` |
| `Array[Dictionary]` | [filtered_objects](#var-filtered-objects) | `[]` |
| `int` | [selected_object_id](#var-selected-object-id) | `-1` |
| `String` | [current_category_filter](#var-current-category-filter) | `""` |
| `int` | [icon_widget_size](#var-icon-widget-size) | `48` |
| `int` | [grid_spacing](#var-grid-spacing) | `4` |
| `int` | [container_padding](#var-container-padding) | `20` |
| `int` | [min_columns](#var-min-columns) | `3` |
| `int` | [max_columns](#var-max-columns) | `30` |
| `float` | [last_container_width](#var-last-container-width) | `0` |
| `Array[Control]` | [visible_widgets](#var-visible-widgets) | `[]` |
| `ScrollContainer` | [scroll_container](#var-scroll-container) | `null` |
| `Vector2` | [last_scroll_position](#var-last-scroll-position) | `Vector2.ZERO` |

## Methods

| | |
|---|---|
| `Dictionary` | [get_selected_object](#method-get-selected-object)() |
| `bool` | [has_selection](#method-has-selection)() |
| `void` | [clear_selection](#method-clear-selection)() |
| `void` | [set_icon_size](#method-set-icon-size)( `size: int` ) |

## Variable descriptions

### Array[Dictionary] all_objects = [] {#var-all-objects}

*No description yet.*

### Array[Dictionary] filtered_objects = [] {#var-filtered-objects}

*No description yet.*

### int selected_object_id = -1 {#var-selected-object-id}

*No description yet.*

### String current_category_filter = "" {#var-current-category-filter}

*No description yet.*

### int icon_widget_size = 48 {#var-icon-widget-size}

*No description yet.*

### int grid_spacing = 4 {#var-grid-spacing}

*No description yet.*

### int container_padding = 20 {#var-container-padding}

*No description yet.*

### int min_columns = 3 {#var-min-columns}

*No description yet.*

### int max_columns = 30 {#var-max-columns}

*No description yet.*

### float last_container_width = 0 {#var-last-container-width}

*No description yet.*

### Array[Control] visible_widgets = [] {#var-visible-widgets}

*No description yet.*

### ScrollContainer scroll_container = null {#var-scroll-container}

*No description yet.*

### Vector2 last_scroll_position = Vector2.ZERO {#var-last-scroll-position}

*No description yet.*

## Method descriptions

### Dictionary get_selected_object() {#method-get-selected-object}

Get currently selected object data

### bool has_selection() {#method-has-selection}

Check if an object is currently selected

### void clear_selection() {#method-clear-selection}

Clear current selection

### void set_icon_size( size: int ) {#method-set-icon-size}

Set the thumbnail/icon size

