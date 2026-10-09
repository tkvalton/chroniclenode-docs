<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# DatabaseOptionButton

**Inherits:** `OptionButton`

OptionButton that auto-populates from database and uses IDs in metadata

## Variables

| | | |
|---|---|---|
| `String` | [database](#var-database) | `""` |
| `bool` | [include_none](#var-include-none) | `true` |
| `String` | [none_text](#var-none-text) | `"(None)"` |
| `int` | [current_id](#var-current-id) | `0` |

## Methods

| | |
|---|---|
| `void` | [setup](#method-setup)( `p_database: String, p_initial_id: int = 0, p_options: Dictionary = {}` ) |
| `int` | [get_selected_id](#method-get-selected-id)() |
| `void` | [set_selected_id](#method-set-selected-id)( `id: int` ) |

## Signals

### id_selected( id: int ) {#signal-id-selected}

## Variable descriptions

### String database = "" {#var-database}

*No description yet.*

### bool include_none = true {#var-include-none}

*No description yet.*

### String none_text = "(None)" {#var-none-text}

*No description yet.*

### int current_id = 0 {#var-current-id}

*No description yet.*

## Method descriptions

### void setup( p_database: String, p_initial_id: int = 0, p_options: Dictionary = &#123;&#125; ) {#method-setup}

*No description yet.*

### int get_selected_id() {#method-get-selected-id}

*No description yet.*

### void set_selected_id( id: int ) {#method-set-selected-id}

*No description yet.*

