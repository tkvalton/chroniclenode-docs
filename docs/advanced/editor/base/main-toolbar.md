<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# MainToolbar

**Inherits:** [HBoxContainer](https://docs.godotengine.org/en/stable/classes/class_hboxcontainer.html)

Adaptive toolbar that changes buttons based on current category

## Variables

| | | |
|---|---|---|
| `Array[Button]` | [all_buttons](#var-all-buttons) | `[]` |
| `Array[VSeparator]` | [all_separators](#var-all-separators) | `[]` |
| `String` | [current_view](#var-current-view) | `""` |
| `Variant` | [toolbar_configs](#var-toolbar-configs) | `{ ... }` |

## Methods

| | |
|---|---|
| `void` | [setup_theme_manager](#method-setup-theme-manager)() |
| `void` | [configure_for_category](#method-configure-for-category)( `category: String, default_view: String = ""` ) |
| `void` | [set_current_view](#method-set-current-view)( `view_name: String` ) |
| `String` | [get_current_view](#method-get-current-view)() |
| `int` | [get_visible_button_count](#method-get-visible-button-count)() |
| `int` | [get_visible_separator_count](#method-get-visible-separator-count)() |
| `void` | [add_category_config](#method-add-category-config)( `category: String, buttons: Array[Dictionary]` ) |
| `Array` | [get_category_config](#method-get-category-config)( `category: String` ) |
| `bool` | [has_category](#method-has-category)( `category: String` ) |
| `void` | [refresh_current_category](#method-refresh-current-category)() |
| `Array[String]` | [get_all_categories](#method-get-all-categories)() |
| `int` | [get_category_view_count](#method-get-category-view-count)( `category: String` ) |
| `bool` | [is_category_valid](#method-is-category-valid)( `category: String` ) |

## Signals

### view_changed( view_name: String ) {#signal-view-changed}

## Variable descriptions

### Array[Button] all_buttons = [] {#var-all-buttons}

*No description yet.*

### Array[VSeparator] all_separators = [] {#var-all-separators}

*No description yet.*

### String current_view = "" {#var-current-view}

*No description yet.*

### toolbar_configs {#var-toolbar-configs}

*No description yet.*

## Method descriptions

### void setup_theme_manager() {#method-setup-theme-manager}

*No description yet.*

### void configure_for_category( category: String, default_view: String = "" ) {#method-configure-for-category}

*No description yet.*

### void set_current_view( view_name: String ) {#method-set-current-view}

*No description yet.*

### String get_current_view() {#method-get-current-view}

*No description yet.*

### int get_visible_button_count() {#method-get-visible-button-count}

*No description yet.*

### int get_visible_separator_count() {#method-get-visible-separator-count}

*No description yet.*

### void add_category_config( category: String, buttons: Array[Dictionary] ) {#method-add-category-config}

*No description yet.*

### Array get_category_config( category: String ) {#method-get-category-config}

*No description yet.*

### bool has_category( category: String ) {#method-has-category}

*No description yet.*

### void refresh_current_category() {#method-refresh-current-category}

*No description yet.*

### Array[String] get_all_categories() {#method-get-all-categories}

*No description yet.*

### int get_category_view_count( category: String ) {#method-get-category-view-count}

*No description yet.*

### bool is_category_valid( category: String ) {#method-is-category-valid}

*No description yet.*

