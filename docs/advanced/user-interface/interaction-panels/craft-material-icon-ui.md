<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# CraftMaterialIconUI

**Inherits:** [HBoxContainer](https://docs.godotengine.org/en/stable/classes/class_hboxcontainer.html)

Enhanced material icon UI with visual feedback for material availability

## Variables

| | | |
|---|---|---|
| `bool` | [has_sufficient_materials](#var-has-sufficient-materials) | `true` |
| `int` | [required_quantity](#var-required-quantity) | `1` |
| `int` | [available_quantity](#var-available-quantity) | `0` |
| `ItemDefinition` | [item_definition](#var-item-definition) | `null` |
| `Color` | [normal_modulate](#var-normal-modulate) | `Color.WHITE` |
| `Color` | [insufficient_modulate](#var-insufficient-modulate) | `Color(0.5, 0.5, 0.5, 0.8)` |
| `Color` | [normal_label_color](#var-normal-label-color) | `Color.WHITE` |
| `Color` | [insufficient_label_color](#var-insufficient-label-color) | `Color.RED` |
| `Color` | [sufficient_label_color](#var-sufficient-label-color) | `Color.GREEN` |

## Methods

| | |
|---|---|
| `void` | [setup_material_icon](#method-setup-material-icon)( `item_def: ItemDefinition, required_qty: int, available_qty: int` ) |
| `void` | [update_availability](#method-update-availability)( `new_available_qty: int` ) |
| `String` | [get_availability_text](#method-get-availability-text)() |
| `bool` | [is_sufficient](#method-is-sufficient)() |
| `int` | [get_shortage](#method-get-shortage)() |
| `void` | [apply_hover_effect](#method-apply-hover-effect)() |
| `void` | [remove_hover_effect](#method-remove-hover-effect)() |

## Variable descriptions

### bool has_sufficient_materials = true {#var-has-sufficient-materials}

Material availability state

### int required_quantity = 1 {#var-required-quantity}

How many the recipe needs.

### int available_quantity = 0 {#var-available-quantity}

How many the player has.

### ItemDefinition item_definition = null {#var-item-definition}

The material.

### Color normal_modulate = Color.WHITE {#var-normal-modulate}

Visual states

### Color insufficient_modulate = Color(0.5, 0.5, 0.5, 0.8) {#var-insufficient-modulate}

Greyed out

### Color normal_label_color = Color.WHITE {#var-normal-label-color}

The color of the label before it is checked.

### Color insufficient_label_color = Color.RED {#var-insufficient-label-color}

The color of the label when the player has too few.

### Color sufficient_label_color = Color.GREEN {#var-sufficient-label-color}

The color of the label when the player has enough.

## Method descriptions

### void setup_material_icon( item_def: ItemDefinition, required_qty: int, available_qty: int ) {#method-setup-material-icon}

Setup the material icon with item data and availability info

### void update_availability( new_available_qty: int ) {#method-update-availability}

Update availability without changing the item

### String get_availability_text() {#method-get-availability-text}

Get formatted display text for tooltips or other UI elements

### bool is_sufficient() {#method-is-sufficient}

Check if this material icon represents sufficient materials

### int get_shortage() {#method-get-shortage}

Get the shortage amount if insufficient

### void apply_hover_effect() {#method-apply-hover-effect}

Apply hover effects (optional - can be used with mouse events)

### void remove_hover_effect() {#method-remove-hover-effect}

Remove hover effects

