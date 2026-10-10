<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# AbilityRankProperty

**Inherits:** [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

What one rank of an ability changes on one of its numbers: "the cooldown is 0.5 seconds shorter for every rank above the first", "the range grows 10% per rank".

## Description

The number of ranks above the first (rank - 1) goes into a formula (Linear 0.5 = 0.5 per rank; a curve makes the later ranks give less), and the result is applied to the property the way a modifier of an effect is: added, subtracted, a percentage, a factor, or a value that replaces the property. The damage and healing of the effects of the ability read the rank themselves (Amount, "Ability rank"); this class is for the numbers of the ability. See docs/systems/ability-ranks-and-item-generation.md.

## Properties

| | | |
|---|---|---|
| `Property` | [property](#prop-property) | `Property.COOLDOWN_DURATION` |
| `StatEffect.CalculationType` | [calculation](#prop-calculation) | `StatEffect.CalculationType.ADD` |
| `CalculationFormula` | [formula](#prop-formula) |  |

## Methods

| | |
|---|---|
| `String` | [get_property_name](#method-get-property-name)() |
| `String` | [get_property_label](#method-get-property-label)( `value: Property` ) *static* |
| `float` | [value_at](#method-value-at)( `rank: int, user: Entity = null` ) |
| `Dictionary` | [entry_at](#method-entry-at)( `rank: int, user: Entity = null` ) |
| `String` | [describe](#method-describe)() |
| `String` | [describe_step](#method-describe-step)( `from_rank: int, to_rank: int` ) |
| `Array[String]` | [validate](#method-validate)() |

## Enumerations

### enum Property {#enum-property}

The numbers of an ability a rank can change

- **COOLDOWN_DURATION** = `0` - The cooldown in seconds
- **COST_AMOUNT** = `1` - The resource cost
- **GAIN_AMOUNT** = `2` - The resource the ability gives
- **CAST_DURATION** = `3` - The cast time (abilities with a cast)
- **CHANNEL_DURATION** = `4` - How long a channel lasts (abilities with a channel)
- **CHANNEL_TICK_RATE** = `5` - How often a channel ticks (abilities with a channel)
- **MAX_RANGE** = `6` - The range in metres (unlimited stays unlimited)
- **DRAIN_PER_SECOND** = `7` - The resource a toggle drains each second (toggle abilities)
- **COMBO_TIMEOUT** = `8` - The time to the next step of a combo (combo abilities)

## Property descriptions

### Property property = Property.COOLDOWN_DURATION {#prop-property}

What is changed

### StatEffect.CalculationType calculation = StatEffect.CalculationType.ADD {#prop-calculation}

How the result of the formula is applied to the property. Add -0.5 or a percentage decrease shortens a cooldown; a factor multiplies; "set value" replaces it

### CalculationFormula formula {#prop-formula}

The ranks above the first go in (rank 3 gives 2), the number to apply comes out. Empty = Linear 1 (1 per rank)

## Method descriptions

### String get_property_name() {#method-get-property-name}

The name the modifiers of an ability use for the property

### String get_property_label( value: Property ) {#method-get-property-label}

The words of the editor for a property

### float value_at( rank: int, user: Entity = null ) {#method-value-at}

The number this property applies at a rank (the ranks above the first go into the formula). A factor is applied as 1 + the result, so "0.1" means 10% more

### Dictionary entry_at( rank: int, user: Entity = null ) {#method-entry-at}

The entry the modifiers of an ability take (see PropertyModifierSet.resolve) at a rank

### String describe() {#method-describe}

A readable text: "Cooldown: Linear 0.5 per rank above the first (add)"

### String describe_step( from_rank: int, to_rank: int ) {#method-describe-step}

What going from one rank to another changes, for a tooltip: "Cooldown -0.5", "Range +10%"

### Array[String] validate() {#method-validate}

*No description yet.*

