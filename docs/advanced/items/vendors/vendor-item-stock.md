<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# VendorItemStock

**Inherits:** [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Defines how a vendor stocks a specific item (template for runtime inventory)

## Properties

| | | |
|---|---|---|
| `int` | [item_id](#prop-item-id) | `0` |
| `int` | [start_quantity](#prop-start-quantity) | `1` |
| `int` | [max_quantity](#prop-max-quantity) | `10` |
| `bool` | [can_restock](#prop-can-restock) | `true` |
| `int` | [restock_quantity](#prop-restock-quantity) | `1` |
| `float` | [custom_restock_hours](#prop-custom-restock-hours) | `0.0` |
| `CurrencyDefinition` | [currency_override](#prop-currency-override) |  |
| `int` | [value_override](#prop-value-override) | `0` |
| `bool` | [override_vendor_value_weight](#prop-override-vendor-value-weight) | `false` |
| `float` | [value_weight_override](#prop-value-weight-override) | `1.0` |
| `float` | [item_price_modifier](#prop-item-price-modifier) | `1.0` |

## Methods

| | |
|---|---|
| `ItemDefinition` | [get_item_data](#method-get-item-data)() |
| `float` | [get_restock_interval](#method-get-restock-interval)( `vendor_default_hours: float` ) |
| `CurrencyDefinition` | [get_effective_currency](#method-get-effective-currency)( `vendor_default: CurrencyDefinition` ) |
| `int` | [get_base_value](#method-get-base-value)() |
| `float` | [get_value_weight](#method-get-value-weight)( `vendor_default: float` ) |
| `int` | [calculate_sell_price](#method-calculate-sell-price)( `vendor_definition: VendorDefinition` ) |

## Property descriptions

### int item_id = 0 {#prop-item-id}

The item ID this stock entry refers to

### int start_quantity = 1 {#prop-start-quantity}

The starting quantity when vendor is first created/restocked. Set to -1 for unlimited stock.

### int max_quantity = 10 {#prop-max-quantity}

The maximum quantity this vendor will stock (0 = unlimited)

### bool can_restock = true {#prop-can-restock}

Whether this item restocks over time

### int restock_quantity = 1 {#prop-restock-quantity}

How many to add per restock cycle

### float custom_restock_hours = 0.0 {#prop-custom-restock-hours}

Custom restock interval for this item (overrides vendor default, 0 = use vendor default)

*Currency Override*

### CurrencyDefinition currency_override {#prop-currency-override}

Override the vendor's default currency for this specific item

### int value_override = 0 {#prop-value-override}

Override the item's base value (0 = use item's default value)

*Pricing Modifiers*

### bool override_vendor_value_weight = false {#prop-override-vendor-value-weight}

Override the vendor's value weight for this specific item

### float value_weight_override = 1.0 {#prop-value-weight-override}

Custom value multiplier for this item only

### float item_price_modifier = 1.0 {#prop-item-price-modifier}

Additional markup/discount for this specific item (1.0 = normal, 1.5 = 50% markup)

## Method descriptions

### ItemDefinition get_item_data() {#method-get-item-data}

Get the ItemDefinition this stock refers to

### float get_restock_interval( vendor_default_hours: float ) {#method-get-restock-interval}

Get the effective restock interval for this item

### CurrencyDefinition get_effective_currency( vendor_default: CurrencyDefinition ) {#method-get-effective-currency}

Get the currency to use for this item

### int get_base_value() {#method-get-base-value}

Get the base value for pricing calculations

### float get_value_weight( vendor_default: float ) {#method-get-value-weight}

Get the value weight for pricing calculations

### int calculate_sell_price( vendor_definition: VendorDefinition ) {#method-calculate-sell-price}

Calculate final sell price for this item

