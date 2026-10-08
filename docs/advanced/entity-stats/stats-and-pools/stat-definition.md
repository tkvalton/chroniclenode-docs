<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# StatDefinition

**Inherits:** [DatabaseResource](/advanced/data-and-database/database-classes/database-resource) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

## Properties

| | | |
|---|---|---|
| `Color` | [color](#prop-color) | `Color.WHITE` |
| `float` | [default_value](#prop-default-value) | `0.0` |
| `float` | [min_value](#prop-min-value) | `0.0` |
| `float` | [max_value](#prop-max-value) | `-1.0` |
| `ValueType` | [value_type](#prop-value-type) | `ValueType.FLOAT` |
| `int` | [decimal_places](#prop-decimal-places) | `1  # Only used for FLOAT, and only for display (the value...` |
| `String` | [display_suffix](#prop-display-suffix) | `""  # "", "%", "sec", "pts", etc.` |
| `bool` | [allow_negative_values](#prop-allow-negative-values) | `false` |
| `Array[int]` | [groups](#prop-groups) | `[]` |
| `CalculationFormula` | [growth_formula](#prop-growth-formula) |  |
| `DiminishingReturns` | [growth_returns](#prop-growth-returns) |  |
| `float` | [growth_max](#prop-growth-max) | `0.0` |
| `Array[StatEffect]` | [stat_effects](#prop-stat-effects) | `[]  # Composable effects` |

## Methods

| | |
|---|---|
| `bool` | [is_in_group](#method-is-in-group)( `group_id: int` ) |
| `String` | [format_display_value](#method-format-display-value)( `raw_value: float` ) |
| `float` | [validate_and_format_value](#method-validate-and-format-value)( `raw_value: float` ) |
| `String` | [get_value_type_description](#method-get-value-type-description)() |
| `bool` | [is_percentage_display](#method-is-percentage-display)() |
| `float` | [calculate_growth](#method-calculate-growth)( `level: int, context: FormulaContext = null` ) |
| `float` | [calculate_final_value](#method-calculate-final-value)( `instance_data: Dictionary` ) |
| `StatInstance` | [create_instance](#method-create-instance)( `initial_base: float = -1.0` ) |
| `String` | [format_tooltip](#method-format-tooltip)( `instance_data: Dictionary` ) |

## Enumerations

### enum ValueType {#enum-valuetype}

- **INTEGER** = `0`

## Property descriptions

### Color color = Color.WHITE {#prop-color}

The color that stands for this in the interface

*Value Settings*

### float default_value = 0.0 {#prop-default-value}

The base value of the stat when an entity is created

### float min_value = 0.0 {#prop-min-value}

The value cannot go below this

### float max_value = -1.0 {#prop-max-value}

The value cannot go above this (-1 = no limit)

*Value Display*

### ValueType value_type = ValueType.FLOAT {#prop-value-type}

Whole numbers (INTEGER) or decimals (FLOAT)

### int decimal_places = 1  # Only used for FLOAT, and only for display (the value it {#prop-decimal-places}

How many decimals are shown, 0 to 3. Only for FLOAT, and only for display (the value itself keeps 4 decimals)

### String display_suffix = ""  # "", "%", "sec", "pts", etc. {#prop-display-suffix}

Text shown after the value: "", "%", "sec", "pts" ...

### bool allow_negative_values = false {#prop-allow-negative-values}

Can the value be negative (debuffs, penalties)?

*Stat Groups*

### Array[int] groups = [] {#prop-groups}

The stat groups this stat is in (StatGroupDefinition ids: Primary, Offensive, Defensive ...). Effects can target a whole group, and the character sheet and tooltips list the stat under the heading of its first group. A group that hides its stats (Hidden) keeps the stat off the sheet and out of tooltips

*Level Growth*

### CalculationFormula growth_formula {#prop-growth-formula}

How the stat grows with the entity's level, from the same two slots an effect has, with the levels gained (level - 1) as the input: "+2 per level" is a Linear formula of 2. Empty (default) = the stat does not grow. The total is (base + growth + bonus) x multiplier

### DiminishingReturns growth_returns {#prop-growth-returns}

Optional diminishing returns on the levels gained (growth that slows after level 40)

### float growth_max = 0.0 {#prop-growth-max}

Ceiling on the total growth (0 = none)

*Stat Effects*

### Array[StatEffect] stat_effects = []  # Composable effects {#prop-stat-effects}

What the stat does: each effect turns the points of the stat into something (another stat, pool capacity, a damage change, a crit chance, leech ...)

## Method descriptions

### bool is_in_group( group_id: int ) {#method-is-in-group}

*No description yet.*

### String format_display_value( raw_value: float ) {#method-format-display-value}

Format a raw float value according to this stat's display settings

### float validate_and_format_value( raw_value: float ) {#method-validate-and-format-value}

Apply value type constraints and formatting to a raw value

### String get_value_type_description() {#method-get-value-type-description}

Get human-readable description of the value type

### bool is_percentage_display() {#method-is-percentage-display}

Check if this stat displays as a percentage (based on suffix)

### float calculate_growth( level: int, context: FormulaContext = null ) {#method-calculate-growth}

The growth of this stat at `level` (0 when it does not grow)

### float calculate_final_value( instance_data: Dictionary ) {#method-calculate-final-value}

Calculate final stat value from instance data

### StatInstance create_instance( initial_base: float = -1.0 ) {#method-create-instance}

*No description yet.*

### String format_tooltip( instance_data: Dictionary ) {#method-format-tooltip}

Format a tooltip string for this stat with breakdown information

