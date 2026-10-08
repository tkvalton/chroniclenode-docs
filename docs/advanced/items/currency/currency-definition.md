<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# CurrencyDefinition

**Inherits:** [DatabaseResource](/advanced/data-and-database/database-classes/database-resource) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

CurrencyDefinition defines a currency type with display properties and limits Create instances as .tres files for each currency (gold, gems, credits, etc.)

## Properties

| | | |
|---|---|---|
| `int` | [max_value](#prop-max-value) | `0` |
| `String` | [abbreviation](#prop-abbreviation) | `""` |

## Methods

| | |
|---|---|
| `bool` | [is_valid](#method-is-valid)() |
| `Array[Dictionary]` | [validate](#method-validate)() |
| `bool` | [is_valid_amount](#method-is-valid-amount)( `amount: int` ) |
| `int` | [clamp_amount](#method-clamp-amount)( `amount: int` ) |
| `bool` | [has_max_limit](#method-has-max-limit)() |
| `String` | [format_amount](#method-format-amount)( `amount: int` ) |
| `int` | [get_id](#method-get-id)() |
| `Dictionary` | [get_currency_info](#method-get-currency-info)() |
| `String` | [get_full_description](#method-get-full-description)() |

## Property descriptions

*Currency Properties*

### int max_value = 0 {#prop-max-value}

Maximum amount that can be held (0 = unlimited)

### String abbreviation = "" {#prop-abbreviation}

Short form for display (e.g., "GP", "G", "$")

## Method descriptions

### bool is_valid() {#method-is-valid}

*No description yet.*

### Array[Dictionary] validate() {#method-validate}

*No description yet.*

### bool is_valid_amount( amount: int ) {#method-is-valid-amount}

Check if an amount is valid for this currency

### int clamp_amount( amount: int ) {#method-clamp-amount}

Clamp an amount to valid range for this currency

### bool has_max_limit() {#method-has-max-limit}

Check if this currency has a maximum limit

### String format_amount( amount: int ) {#method-format-amount}

Get the display text for an amount of this currency

### int get_id() {#method-get-id}

Get ID from filename

### Dictionary get_currency_info() {#method-get-currency-info}

Get currency info for debugging/display

### String get_full_description() {#method-get-full-description}

Get full description including limits

