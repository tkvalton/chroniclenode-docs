<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# DraggedContent

**Inherits:** `MarginContainer`

Unified visual component for dragging both items AND abilities Pure display - NO LOGIC Replaces both DraggedItem and DraggedAbility

## Variables

| | | |
|---|---|---|
| `ContentType` | [current_content_type](#var-current-content-type) | `ContentType.NONE` |
| `DisplayMode` | [current_mode](#var-current-mode) | `DisplayMode.NORMAL` |
| `Variant` | [displayed_content](#var-displayed-content) | `null  # ItemInstance or AbilityInstance` |
| `int` | [displayed_quantity](#var-displayed-quantity) | `1` |
| `Color` | [normal_modulate](#var-normal-modulate) | `Color.WHITE` |
| `Color` | [enchanting_modulate](#var-enchanting-modulate) | `Color(0.8, 1.0, 0.8, 0.9)` |
| `Color` | [error_modulate](#var-error-modulate) | `Color(1.0, 0.6, 0.6, 0.9)` |

## Methods

| | |
|---|---|
| `void` | [show_dragged_item](#method-show-dragged-item)( `item: ItemInstance, quantity: int = 1` ) |
| `void` | [show_dragged_ability](#method-show-dragged-ability)( `ability: AbilityInstance` ) |
| `void` | [show_enchanting](#method-show-enchanting)( `scroll: ItemInstance` ) |
| `void` | [hide_drag](#method-hide-drag)() |
| `void` | [flash_error](#method-flash-error)() |
| `bool` | [is_showing](#method-is-showing)() |
| `ContentType` | [get_content_type](#method-get-content-type)() |
| `DisplayMode` | [get_display_mode](#method-get-display-mode)() |
| `Variant` | [get_displayed_content](#method-get-displayed-content)() |
| `bool` | [is_dragging_item](#method-is-dragging-item)() |
| `bool` | [is_dragging_ability](#method-is-dragging-ability)() |

## Enumerations

### enum ContentType {#enum-contenttype}

- **NONE** = `0`
- **ITEM** = `1`
- **ABILITY** = `2`

### enum DisplayMode {#enum-displaymode}

- **NORMAL** = `0`

## Variable descriptions

### ContentType current_content_type = ContentType.NONE {#var-current-content-type}

*No description yet.*

### DisplayMode current_mode = DisplayMode.NORMAL {#var-current-mode}

*No description yet.*

### Variant displayed_content = null  # ItemInstance or AbilityInstance {#var-displayed-content}

*No description yet.*

### int displayed_quantity = 1 {#var-displayed-quantity}

*No description yet.*

### Color normal_modulate = Color.WHITE {#var-normal-modulate}

*No description yet.*

### Color enchanting_modulate = Color(0.8, 1.0, 0.8, 0.9) {#var-enchanting-modulate}

*No description yet.*

### Color error_modulate = Color(1.0, 0.6, 0.6, 0.9) {#var-error-modulate}

*No description yet.*

## Method descriptions

### void show_dragged_item( item: ItemInstance, quantity: int = 1 ) {#method-show-dragged-item}

Show item being dragged

### void show_dragged_ability( ability: AbilityInstance ) {#method-show-dragged-ability}

Show ability being dragged

### void show_enchanting( scroll: ItemInstance ) {#method-show-enchanting}

Show enchanting mode (items only)

### void hide_drag() {#method-hide-drag}

Hide drag display

### void flash_error() {#method-flash-error}

Flash error feedback

### bool is_showing() {#method-is-showing}

*No description yet.*

### ContentType get_content_type() {#method-get-content-type}

*No description yet.*

### DisplayMode get_display_mode() {#method-get-display-mode}

*No description yet.*

### Variant get_displayed_content() {#method-get-displayed-content}

*No description yet.*

### bool is_dragging_item() {#method-is-dragging-item}

*No description yet.*

### bool is_dragging_ability() {#method-is-dragging-ability}

*No description yet.*

