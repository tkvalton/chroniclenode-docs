<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ReadablePanelUI

**Inherits:** [PanelUI](/advanced/user-interface/panels/panel-ui) < [Control](https://docs.godotengine.org/en/stable/classes/class_control.html)

UI panel for displaying readable items (books, scrolls, notes, etc.) Features multi-page support with navigation and conditional title display Refactored to extend PanelUI instead of Control

## Properties

| | | |
|---|---|---|
| `Texture` | [default_background_texture](#prop-default-background-texture) |  |

## Variables

| | | |
|---|---|---|
| `Variant` | [current_readable_source](#var-current-readable-source) | `null  # Can be ItemInstance or InteractableObject` |
| `Array[String]` | [pages](#var-pages) | `[]` |
| `int` | [current_page](#var-current-page) | `0` |

## Methods

| | |
|---|---|
| `void` | [initialize_ui](#method-initialize-ui)( `p_system_hub: GameHost.SystemHub` ) |
| `void` | [display_readable_from_data](#method-display-readable-from-data)( `data: Dictionary` ) |
| `void` | [display_readable](#method-display-readable)( `item: ItemInstance` ) |
| `void` | [close_panel](#method-close-panel)() |
| `void` | [go_to_page](#method-go-to-page)( `page_index: int` ) |
| `int` | [get_current_page_number](#method-get-current-page-number)() |
| `int` | [get_total_pages](#method-get-total-pages)() |
| `bool` | [is_first_page](#method-is-first-page)() |
| `bool` | [is_last_page](#method-is-last-page)() |
| `Variant` | [get_current_source](#method-get-current-source)() |
| `ItemInstance` | [get_current_item](#method-get-current-item)() |

## Property descriptions

### Texture default_background_texture {#prop-default-background-texture}

*No description yet.*

## Variable descriptions

### Variant current_readable_source = null  # Can be ItemInstance or InteractableObject {#var-current-readable-source}

*No description yet.*

### Array[String] pages = [] {#var-pages}

*No description yet.*

### int current_page = 0 {#var-current-page}

*No description yet.*

## Method descriptions

### void initialize_ui( p_system_hub: GameHost.SystemHub ) {#method-initialize-ui}

*Overrides this function of [PanelUI](/advanced/user-interface/panels/panel-ui).*

### void display_readable_from_data( data: Dictionary ) {#method-display-readable-from-data}

Display readable content from a data dictionary Dictionary should contain:

- "title": String (required)
- "pages": Array[String] (required)
- "background_texture": Texture2D (optional)
- "source": Variant (optional - ItemInstance or InteractableObject)

### void display_readable( item: ItemInstance ) {#method-display-readable}

Display a readable item (backward compatibility) This method is maintained for existing code that uses ItemInstance directly

### void close_panel() {#method-close-panel}

Close the readable panel - overrides PanelUI's close_panel

### void go_to_page( page_index: int ) {#method-go-to-page}

Go to specific page (0-indexed)

### int get_current_page_number() {#method-get-current-page-number}

Get current page number (1-indexed for display)

### int get_total_pages() {#method-get-total-pages}

Get total number of pages

### bool is_first_page() {#method-is-first-page}

Check if currently on first page

### bool is_last_page() {#method-is-last-page}

Check if currently on last page

### Variant get_current_source() {#method-get-current-source}

Get the current readable source (can be ItemInstance, InteractableObject, or null)

### ItemInstance get_current_item() {#method-get-current-item}

Get the current readable item (backward compatibility - only returns if source is ItemInstance)

