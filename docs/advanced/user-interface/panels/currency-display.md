<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# CurrencyDisplay

**Inherits:** [HBoxContainer](https://docs.godotengine.org/en/stable/classes/class_hboxcontainer.html)

Enhanced display component for showing a single currency with icon and amount

## Description

This component displays a currency's icon and formatted amount. It automatically updates when the currency amount changes.

## Variables

| | | |
|---|---|---|
| `CurrencyDefinition` | [currency_definition](#var-currency-definition) | `null` |
| `InventoryComponent` | [inventory_data](#var-inventory-data) | `null` |
| `int` | [currency_id](#var-currency-id) | `0` |

## Methods

| | |
|---|---|
| `void` | [setup_currency_display](#method-setup-currency-display)( `currency_def: CurrencyDefinition, inventory: InventoryComponent` ) |
| `void` | [clear_display](#method-clear-display)() |
| `void` | [refresh_display](#method-refresh-display)() |

## Variable descriptions

### CurrencyDefinition currency_definition = null {#var-currency-definition}

The currency definition being displayed

### InventoryComponent inventory_data = null {#var-inventory-data}

The inventory data that contains the currency amounts

### int currency_id = 0 {#var-currency-id}

The currency ID we're displaying

## Method descriptions

### void setup_currency_display( currency_def: CurrencyDefinition, inventory: InventoryComponent ) {#method-setup-currency-display}

Setup this display for a specific currency (original method) @param currency_def: The currency definition to display @param inventory: The inventory data to get amounts from

### void clear_display() {#method-clear-display}

Clear the display and disconnect signals

### void refresh_display() {#method-refresh-display}

Force refresh the display (useful for manual updates)

