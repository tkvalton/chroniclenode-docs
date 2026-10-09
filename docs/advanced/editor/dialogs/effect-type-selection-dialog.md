<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# EffectTypeSelectionDialog

**Inherits:** `AcceptDialog`

Dialog for selecting effect types with category filtering and search

## Variables

| | | |
|---|---|---|
| `bool` | [show_name_section](#var-show-name-section) | `true` |
| `String` | [selected_category](#var-selected-category) | `""` |
| `String` | [selected_effect_type](#var-selected-effect-type) | `""` |
| `String` | [display_name](#var-display-name) | `""` |
| `Array` | [categories](#var-categories) | `[]` |
| `Dictionary` | [all_effect_types](#var-all-effect-types) | `{}  # category -> Array[String]` |
| `Array[String]` | [filtered_effect_types](#var-filtered-effect-types) | `[]` |

## Methods

| | |
|---|---|
| `void` | [show_for_creation](#method-show-for-creation)() |
| `void` | [show_for_type_change](#method-show-for-type-change)() |
| `void` | [set_selected_type](#method-set-selected-type)( `effect_type: String` ) |
| `String` | [get_effect_name](#method-get-effect-name)() |
| `String` | [get_selected_effect_type](#method-get-selected-effect-type)() |
| `String` | [get_selected_category](#method-get-selected-category)() |

## Signals

### selection_made( effect_type: String, category: String ) {#signal-selection-made}

## Variable descriptions

### bool show_name_section = true {#var-show-name-section}

*No description yet.*

### String selected_category = "" {#var-selected-category}

*No description yet.*

### String selected_effect_type = "" {#var-selected-effect-type}

*No description yet.*

### String display_name = "" {#var-display-name}

*No description yet.*

### Array categories = [] {#var-categories}

*No description yet.*

### Dictionary all_effect_types =   # category -&gt; Array[String] {#var-all-effect-types}

*No description yet.*

### Array[String] filtered_effect_types = [] {#var-filtered-effect-types}

*No description yet.*

## Method descriptions

### void show_for_creation() {#method-show-for-creation}

*No description yet.*

### void show_for_type_change() {#method-show-for-type-change}

*No description yet.*

### void set_selected_type( effect_type: String ) {#method-set-selected-type}

*No description yet.*

### String get_effect_name() {#method-get-effect-name}

*No description yet.*

### String get_selected_effect_type() {#method-get-selected-effect-type}

*No description yet.*

### String get_selected_category() {#method-get-selected-category}

*No description yet.*

