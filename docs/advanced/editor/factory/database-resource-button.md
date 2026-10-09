<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# DatabaseResourceButton

**Inherits:** [HBoxContainer](https://docs.godotengine.org/en/stable/classes/class_hboxcontainer.html)

Button that opens ListCatalog to select a database resource Shows resource name, has optional clear button

## Variables

| | | |
|---|---|---|
| `String` | [database](#var-database) | `""` |
| `DialogManager` | [dialog_manager](#var-dialog-manager) | `null` |
| `int` | [current_id](#var-current-id) | `0` |
| `bool` | [show_clear](#var-show-clear) | `false` |
| `Button` | [select_button](#var-select-button) |  |
| `Button` | [clear_button](#var-clear-button) |  |

## Methods

| | |
|---|---|
| `void` | [setup](#method-setup)( `p_database: String, p_initial_id: int, p_dialog_manager: DialogManager, p_options: Dictionary = {}` ) |
| `int` | [get_selected_id](#method-get-selected-id)() |
| `void` | [set_selected_id](#method-set-selected-id)( `id: int` ) |

## Signals

### resource_selected( id: int ) {#signal-resource-selected}

## Variable descriptions

### String database = "" {#var-database}

*No description yet.*

### DialogManager dialog_manager = null {#var-dialog-manager}

*No description yet.*

### int current_id = 0 {#var-current-id}

*No description yet.*

### bool show_clear = false {#var-show-clear}

*No description yet.*

### Button select_button {#var-select-button}

*No description yet.*

### Button clear_button {#var-clear-button}

*No description yet.*

## Method descriptions

### void setup( p_database: String, p_initial_id: int, p_dialog_manager: DialogManager, p_options: Dictionary = &#123;&#125; ) {#method-setup}

*No description yet.*

### int get_selected_id() {#method-get-selected-id}

*No description yet.*

### void set_selected_id( id: int ) {#method-set-selected-id}

*No description yet.*

