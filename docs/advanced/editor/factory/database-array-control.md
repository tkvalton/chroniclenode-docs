<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# DatabaseArrayControl

**Inherits:** [VBoxContainer](https://docs.godotengine.org/en/stable/classes/class_vboxcontainer.html)

Simple array control for database resources Two modes: OptionButton per entry OR Button that opens ListCatalog per entry

## Variables

| | | |
|---|---|---|
| `Mode` | [mode](#var-mode) | `Mode.OPTION_BUTTON` |
| `String` | [database](#var-database) | `""` |
| `DialogManager` | [dialog_manager](#var-dialog-manager) | `null` |
| `Array[int]` | [current_ids](#var-current-ids) | `[]` |
| `bool` | [allow_duplicates](#var-allow-duplicates) | `false` |
| `bool` | [include_none](#var-include-none) | `false` |
| `ScrollContainer` | [scroll_container](#var-scroll-container) |  |
| `VBoxContainer` | [entries_container](#var-entries-container) |  |
| `Button` | [add_button](#var-add-button) |  |

## Methods

| | |
|---|---|
| `void` | [setup](#method-setup)( `p_mode: Mode, p_database: String, p_initial_ids: Array[int], p_dialog_manager: DialogManager = null, p_options: Dictionary = {}` ) |
| `Array[int]` | [get_ids](#method-get-ids)() |
| `void` | [set_ids](#method-set-ids)( `new_ids: Array[int]` ) |

## Signals

### array_changed( ids: Array[int] ) {#signal-array-changed}

## Enumerations

### enum Mode {#enum-mode}

- **OPTION_BUTTON** = `0`

## Variable descriptions

### Mode mode = Mode.OPTION_BUTTON {#var-mode}

*No description yet.*

### String database = "" {#var-database}

*No description yet.*

### DialogManager dialog_manager = null {#var-dialog-manager}

*No description yet.*

### Array[int] current_ids = [] {#var-current-ids}

*No description yet.*

### bool allow_duplicates = false {#var-allow-duplicates}

*No description yet.*

### bool include_none = false {#var-include-none}

*No description yet.*

### ScrollContainer scroll_container {#var-scroll-container}

*No description yet.*

### VBoxContainer entries_container {#var-entries-container}

*No description yet.*

### Button add_button {#var-add-button}

*No description yet.*

## Method descriptions

### void setup( p_mode: Mode, p_database: String, p_initial_ids: Array[int], p_dialog_manager: DialogManager = null, p_options: Dictionary = &#123;&#125; ) {#method-setup}

*No description yet.*

### Array[int] get_ids() {#method-get-ids}

*No description yet.*

### void set_ids( new_ids: Array[int] ) {#method-set-ids}

*No description yet.*

