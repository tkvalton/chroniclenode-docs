<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# VendorItemSlotDialog

**Inherits:** `AcceptDialog`

Dialog for configuring VendorItemStock entries

## Variables

| | | |
|---|---|---|
| `Label` | [item_info_label](#var-item-info-label) |  |
| `SpinBox` | [start_quantity_spin_box](#var-start-quantity-spin-box) |  |
| `Label  # Hint for unlimited stock` | [start_quantity_hint_label](#var-start-quantity-hint-label) |  |
| `SpinBox` | [max_quantity_spin_box](#var-max-quantity-spin-box) |  |
| `CheckBox` | [can_restock_check_box](#var-can-restock-check-box) |  |
| `SpinBox` | [restock_quantity_spin_box](#var-restock-quantity-spin-box) |  |
| `SpinBox` | [custom_restock_hours_spin_box](#var-custom-restock-hours-spin-box) |  |
| `OptionButton` | [currency_override_option_button](#var-currency-override-option-button) |  |
| `SpinBox` | [value_override_spin_box](#var-value-override-spin-box) |  |
| `CheckBox` | [value_weight_override_check_box](#var-value-weight-override-check-box) |  |
| `SpinBox` | [value_weight_spin_box](#var-value-weight-spin-box) |  |
| `SpinBox` | [price_modifier_spin_box](#var-price-modifier-spin-box) |  |
| `VendorItemStock` | [current_stock_item](#var-current-stock-item) |  |
| `Array` | [available_currencies](#var-available-currencies) | `[]` |
| `bool` | [is_editing](#var-is-editing) | `false` |

## Methods

| | |
|---|---|
| `void` | [configure_for_item](#method-configure-for-item)( `item_def: ItemDefinition, stock_item: VendorItemStock = null` ) |
| `void` | [configure_currencies](#method-configure-currencies)( `currencies: Array[CurrencyDefinition]` ) |
| `VendorItemSlotDialog` | [create_and_add_to](#method-create-and-add-to)( `parent: Node` ) *static* |

## Signals

### item_slot_configured( stock_item: VendorItemStock ) {#signal-item-slot-configured}

## Variable descriptions

### Label item_info_label {#var-item-info-label}

*No description yet.*

### SpinBox start_quantity_spin_box {#var-start-quantity-spin-box}

*No description yet.*

### Label  # Hint for unlimited stock start_quantity_hint_label {#var-start-quantity-hint-label}

*No description yet.*

### SpinBox max_quantity_spin_box {#var-max-quantity-spin-box}

*No description yet.*

### CheckBox can_restock_check_box {#var-can-restock-check-box}

*No description yet.*

### SpinBox restock_quantity_spin_box {#var-restock-quantity-spin-box}

*No description yet.*

### SpinBox custom_restock_hours_spin_box {#var-custom-restock-hours-spin-box}

*No description yet.*

### OptionButton currency_override_option_button {#var-currency-override-option-button}

*No description yet.*

### SpinBox value_override_spin_box {#var-value-override-spin-box}

*No description yet.*

### CheckBox value_weight_override_check_box {#var-value-weight-override-check-box}

*No description yet.*

### SpinBox value_weight_spin_box {#var-value-weight-spin-box}

*No description yet.*

### SpinBox price_modifier_spin_box {#var-price-modifier-spin-box}

*No description yet.*

### VendorItemStock current_stock_item {#var-current-stock-item}

*No description yet.*

### Array available_currencies = [] {#var-available-currencies}

*No description yet.*

### bool is_editing = false {#var-is-editing}

*No description yet.*

## Method descriptions

### void configure_for_item( item_def: ItemDefinition, stock_item: VendorItemStock = null ) {#method-configure-for-item}

*No description yet.*

### void configure_currencies( currencies: Array[CurrencyDefinition] ) {#method-configure-currencies}

*No description yet.*

### VendorItemSlotDialog create_and_add_to( parent: Node ) {#method-create-and-add-to}

*No description yet.*

