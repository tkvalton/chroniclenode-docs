<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# VendorDefinition

**Inherits:** [DatabaseResource](/advanced/data-and-database/database-classes/database-resource) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

VendorDefinition serves as a blueprint/template that multiple vendor instances can share Contains all the static configuration data for a vendor type

## Properties

| | | |
|---|---|---|
| `int` | [faction_id](#prop-faction-id) | `0` |
| `Array[VendorItemStock]` | [stocked_items](#prop-stocked-items) | `[]` |
| `float` | [restock_interval_hours](#prop-restock-interval-hours) | `24.0` |
| `bool` | [buys_items](#prop-buys-items) | `true` |
| `float` | [buy_value_multiplier](#prop-buy-value-multiplier) | `0.5` |
| `float` | [sell_value_multiplier](#prop-sell-value-multiplier) | `1.0` |
| `int` | [preferred_currency_id](#prop-preferred-currency-id) | `0` |
| `Dictionary` | [starting_currency](#prop-starting-currency) | `{}` |

## Methods

| | |
|---|---|
| `bool` | [is_valid](#method-is-valid)() |
| `Array[Dictionary]` | [validate](#method-validate)() |
| `CurrencyDefinition` | [get_preferred_currency](#method-get-preferred-currency)() |
| `Array[CurrencyDefinition]` | [get_all_currencies](#method-get-all-currencies)() |
| `bool` | [has_currency](#method-has-currency)( `currency_def: CurrencyDefinition` ) |
| `int` | [get_currency_starting_amount](#method-get-currency-starting-amount)( `currency_def: CurrencyDefinition` ) |

## Property descriptions

### int faction_id = 0 {#prop-faction-id}

Faction this vendor belongs to (for future faction system integration)

### Array[VendorItemStock] stocked_items = [] {#prop-stocked-items}

Items this vendor stocks (templates for runtime inventory)

### float restock_interval_hours = 24.0 {#prop-restock-interval-hours}

How often vendor restocks (in game hours, 0 = never restocks)

### bool buys_items = true {#prop-buys-items}

Whether vendor buys items from players

### float buy_value_multiplier = 0.5 {#prop-buy-value-multiplier}

Value multiplier when buying from players (0.5 = pays 50% of item value)

### float sell_value_multiplier = 1.0 {#prop-sell-value-multiplier}

Base value multiplier for all items (affects selling prices)

### int preferred_currency_id = 0 {#prop-preferred-currency-id}

Currency vendor prefers for transactions (ID of preferred currency) Used for repairs and buying items from players

### Dictionary starting_currency =  {#prop-starting-currency}

Starting currency amounts for vendor [currency_id: int] = amount: int PreferredCurrency is always the first entry, additional currencies can be added

## Method descriptions

### bool is_valid() {#method-is-valid}

*No description yet.*

### Array[Dictionary] validate() {#method-validate}

*No description yet.*

### CurrencyDefinition get_preferred_currency() {#method-get-preferred-currency}

Get the preferred currency definition

### Array[CurrencyDefinition] get_all_currencies() {#method-get-all-currencies}

Get all currencies this vendor has in starting_currency

### bool has_currency( currency_def: CurrencyDefinition ) {#method-has-currency}

Check if vendor has a specific currency in their reserves

### int get_currency_starting_amount( currency_def: CurrencyDefinition ) {#method-get-currency-starting-amount}

Get starting amount for a currency

