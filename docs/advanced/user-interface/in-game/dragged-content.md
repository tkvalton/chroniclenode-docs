<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# DraggedContent

**Inherits:** `MarginContainer`

Unified visual component for dragging both items AND abilities Pure display - NO LOGIC Replaces both DraggedItem and DraggedAbility

## Variables

| | | |
|---|---|---|
| `ContentType` | [current_content_type](#var-current-content-type) | `ContentType.NONE` |
| `DisplayMode` | [current_mode](#var-current-mode) | `DisplayMode.NORMAL` |
| `Variant` | [displayed_content](#var-displayed-content) | `null` |
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

========== ENUMS ==========

- **NONE** = `0`
- **ITEM** = `1`
- **ABILITY** = `2`

### enum DisplayMode {#enum-displaymode}

The options of display mode: normal, enchanting.

- **NORMAL** = `0`

## Variable descriptions

### ContentType current_content_type = ContentType.NONE {#var-current-content-type}

========== STATE ==========

### DisplayMode current_mode = DisplayMode.NORMAL {#var-current-mode}

How the dragged picture is shown (normal, enchanting or an error).

### Variant displayed_content = null {#var-displayed-content}

ItemInstance or AbilityInstance

### int displayed_quantity = 1 {#var-displayed-quantity}

The quantity shown on the dragged item.

### Color normal_modulate = Color.WHITE {#var-normal-modulate}

========== VISUAL FEEDBACK ==========

### Color enchanting_modulate = Color(0.8, 1.0, 0.8, 0.9) {#var-enchanting-modulate}

The tint of the picture while an enchant scroll is dragged.

### Color error_modulate = Color(1.0, 0.6, 0.6, 0.9) {#var-error-modulate}

The tint of the picture when the drop is not allowed.

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

Is something dragged and shown?

### ContentType get_content_type() {#method-get-content-type}

What is dragged: an item or an ability.

### DisplayMode get_display_mode() {#method-get-display-mode}

How the dragged picture is shown.

### Variant get_displayed_content() {#method-get-displayed-content}

The item or ability that is dragged.

### bool is_dragging_item() {#method-is-dragging-item}

Is an item dragged?

### bool is_dragging_ability() {#method-is-dragging-ability}

Is an ability dragged?

