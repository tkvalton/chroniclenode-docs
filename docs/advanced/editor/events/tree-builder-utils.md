<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# TreeBuilderUtils

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

Utility functions shared between tree builders

## Methods

| | |
|---|---|
| `String` | [get_unit_display_name](#method-get-unit-display-name)( `unit: Resource, type_manager: EventTypeManager = null` ) *static* |
| `String` | [get_unit_base_name](#method-get-unit-base-name)( `unit: Resource` ) *static* |
| `String` | [get_unit_display_name_fallback](#method-get-unit-display-name-fallback)( `unit: Resource` ) *static* |
| `String` | [format_description_simple](#method-format-description-simple)( `description: String, unit: Resource` ) *static* |
| `String` | [format_value_simple](#method-format-value-simple)( `value` ) *static* |
| `void` | [expand_all_items](#method-expand-all-items)( `root: TreeItem` ) *static* |
| `void` | [expand_item_recursive](#method-expand-item-recursive)( `item: TreeItem` ) *static* |
| `void` | [collapse_all_items](#method-collapse-all-items)( `root: TreeItem` ) *static* |
| `void` | [collapse_item_recursive](#method-collapse-item-recursive)( `item: TreeItem, depth: int` ) *static* |
| `Texture2D` | [get_themed_icon](#method-get-themed-icon)( `icon_name: String` ) *static* |
| `void` | [apply_popup_theme](#method-apply-popup-theme)( `popup: PopupMenu` ) *static* |
| `bool` | [is_valid_tree_item](#method-is-valid-tree-item)( `item: TreeItem` ) *static* |
| `int` | [get_item_type](#method-get-item-type)( `item: TreeItem, type_key: String = "type"` ) *static* |
| `Resource` | [get_item_data](#method-get-item-data)( `item: TreeItem, data_key: String = "data"` ) *static* |
| `int` | [get_item_index](#method-get-item-index)( `item: TreeItem, index_key: String = "index"` ) *static* |
| `bool` | [safe_remove_at](#method-safe-remove-at)( `array: Array, index: int` ) *static* |
| `bool` | [safe_move_up](#method-safe-move-up)( `array: Array, index: int` ) *static* |
| `bool` | [safe_move_down](#method-safe-move-down)( `array: Array, index: int` ) *static* |
| `bool` | [safe_insert](#method-safe-insert)( `array: Array, index: int, item` ) *static* |
| `EventTrigger` | [create_trigger_instance](#method-create-trigger-instance)( `trigger_data: Dictionary, param_values: Dictionary` ) *static* |
| `EventTrigger` | [duplicate_trigger](#method-duplicate-trigger)( `original_trigger: EventTrigger` ) *static* |
| `ConfirmationDialog` | [create_simple_input_dialog](#method-create-simple-input-dialog)( `title: String, label_text: String, initial_value: int, min_val: int = 0, max_val: int = 999` ) *static* |
| `int` | [get_dialog_value](#method-get-dialog-value)( `dialog: ConfirmationDialog` ) *static* |
| `void` | [add_menu_item](#method-add-menu-item)( `popup: PopupMenu, text: String, id: int, icon: Texture2D = null` ) *static* |
| `void` | [add_menu_separator](#method-add-menu-separator)( `popup: PopupMenu` ) *static* |
| `PopupMenu` | [setup_popup_menu](#method-setup-popup-menu)( `parent: Node, position: Vector2` ) *static* |
| `void` | [show_popup_at_position](#method-show-popup-at-position)( `popup: PopupMenu, tree: Tree, position: Vector2` ) *static* |
| `void` | [print_tree_structure](#method-print-tree-structure)( `item: TreeItem, depth: int = 0` ) *static* |
| `bool` | [validate_tree_integrity](#method-validate-tree-integrity)( `root: TreeItem` ) *static* |
| `bool` | [validate_item_recursive](#method-validate-item-recursive)( `item: TreeItem` ) *static* |

## Method descriptions

### String get_unit_display_name( unit: Resource, type_manager: EventTypeManager = null ) {#method-get-unit-display-name}

*No description yet.*

### String get_unit_base_name( unit: Resource ) {#method-get-unit-base-name}

*No description yet.*

### String get_unit_display_name_fallback( unit: Resource ) {#method-get-unit-display-name-fallback}

*No description yet.*

### String format_description_simple( description: String, unit: Resource ) {#method-format-description-simple}

*No description yet.*

### String format_value_simple( value ) {#method-format-value-simple}

*No description yet.*

### void expand_all_items( root: TreeItem ) {#method-expand-all-items}

*No description yet.*

### void expand_item_recursive( item: TreeItem ) {#method-expand-item-recursive}

*No description yet.*

### void collapse_all_items( root: TreeItem ) {#method-collapse-all-items}

*No description yet.*

### void collapse_item_recursive( item: TreeItem, depth: int ) {#method-collapse-item-recursive}

*No description yet.*

### Texture2D get_themed_icon( icon_name: String ) {#method-get-themed-icon}

*No description yet.*

### void apply_popup_theme( popup: PopupMenu ) {#method-apply-popup-theme}

*No description yet.*

### bool is_valid_tree_item( item: TreeItem ) {#method-is-valid-tree-item}

*No description yet.*

### int get_item_type( item: TreeItem, type_key: String = "type" ) {#method-get-item-type}

*No description yet.*

### Resource get_item_data( item: TreeItem, data_key: String = "data" ) {#method-get-item-data}

*No description yet.*

### int get_item_index( item: TreeItem, index_key: String = "index" ) {#method-get-item-index}

*No description yet.*

### bool safe_remove_at( array: Array, index: int ) {#method-safe-remove-at}

*No description yet.*

### bool safe_move_up( array: Array, index: int ) {#method-safe-move-up}

*No description yet.*

### bool safe_move_down( array: Array, index: int ) {#method-safe-move-down}

*No description yet.*

### bool safe_insert( array: Array, index: int, item ) {#method-safe-insert}

*No description yet.*

### EventTrigger create_trigger_instance( trigger_data: Dictionary, param_values: Dictionary ) {#method-create-trigger-instance}

*No description yet.*

### EventTrigger duplicate_trigger( original_trigger: EventTrigger ) {#method-duplicate-trigger}

*No description yet.*

### ConfirmationDialog create_simple_input_dialog( title: String, label_text: String, initial_value: int, min_val: int = 0, max_val: int = 999 ) {#method-create-simple-input-dialog}

*No description yet.*

### int get_dialog_value( dialog: ConfirmationDialog ) {#method-get-dialog-value}

*No description yet.*

### void add_menu_item( popup: PopupMenu, text: String, id: int, icon: Texture2D = null ) {#method-add-menu-item}

*No description yet.*

### void add_menu_separator( popup: PopupMenu ) {#method-add-menu-separator}

*No description yet.*

### PopupMenu setup_popup_menu( parent: Node, position: Vector2 ) {#method-setup-popup-menu}

*No description yet.*

### void show_popup_at_position( popup: PopupMenu, tree: Tree, position: Vector2 ) {#method-show-popup-at-position}

*No description yet.*

### void print_tree_structure( item: TreeItem, depth: int = 0 ) {#method-print-tree-structure}

*No description yet.*

### bool validate_tree_integrity( root: TreeItem ) {#method-validate-tree-integrity}

*No description yet.*

### bool validate_item_recursive( item: TreeItem ) {#method-validate-item-recursive}

*No description yet.*

