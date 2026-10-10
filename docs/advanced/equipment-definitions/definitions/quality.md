<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# Quality

**Inherits:** [DatabaseResource](/advanced/data-and-database/database-classes/database-resource) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Defines item quality/rarity with display properties Create instances as .tres files for each quality tier

## Properties

| | | |
|---|---|---|
| `Color` | [color](#prop-color) | `Color.WHITE` |
| `int` | [quality_tier](#prop-quality-tier) | `1` |
| `int` | [drop_weight](#prop-drop-weight) | `100` |
| `int` | [min_item_level](#prop-min-item-level) | `0` |
| `float` | [budget_multiplier](#prop-budget-multiplier) | `1.0` |
| `float` | [roll_spread](#prop-roll-spread) | `0.5` |
| `int` | [prefixes_min](#prop-prefixes-min) | `0` |
| `int` | [prefixes_max](#prop-prefixes-max) | `0` |
| `int` | [suffixes_min](#prop-suffixes-min) | `0` |
| `int` | [suffixes_max](#prop-suffixes-max) | `0` |
| `int` | [silent_min](#prop-silent-min) | `0` |
| `int` | [silent_max](#prop-silent-max) | `0` |
| `int` | [effects_min](#prop-effects-min) | `0` |
| `int` | [effects_max](#prop-effects-max) | `0` |
| `int` | [sockets_min](#prop-sockets-min) | `0` |
| `int` | [sockets_max](#prop-sockets-max) | `0` |
| `Array[int]` | [socket_pool](#prop-socket-pool) | `[]` |
| `float` | [vendor_value_multiplier](#prop-vendor-value-multiplier) | `1.0` |
| `NameMode` | [name_mode](#prop-name-mode) | `NameMode.AFFIXES` |
| `Array[QualityRule]` | [rules](#prop-rules) | `[]` |

## Methods

| | |
|---|---|
| `int` | [roll_count](#method-roll-count)( `minimum: int, maximum: int, rng: RandomNumberGenerator` ) |
| `bool` | [is_valid](#method-is-valid)() |
| `Array[Dictionary]` | [validate](#method-validate)() |
| `String` | [get_id](#method-get-id)() |
| `bool` | [is_higher_than](#method-is-higher-than)( `other: Quality` ) |
| `bool` | [is_lower_than](#method-is-lower-than)( `other: Quality` ) |
| `String` | [get_quality_description](#method-get-quality-description)() |

## Enumerations

### enum NameMode {#enum-namemode}

How the name of a generated item is made

- **AFFIXES** = `0` - "Heavy Great Axe of the Monkey": the first prefix and the first suffix
- **BASE_ONLY** = `1` - "Great Axe": the colour of the quality tells the rest
- **QUALITY_WORD** = `2` - "Rare Great Axe": the name of the quality in front

## Property descriptions

### Color color = Color.WHITE {#prop-color}

Color for UI display

### int quality_tier = 1 {#prop-quality-tier}

Numeric tier for sorting/comparison (1=lowest, 5=highest)

*Quality Roll*

### int drop_weight = 100 {#prop-drop-weight}

The share of this quality in the roll of an item that picks its quality (higher = more common)

### int min_item_level = 0 {#prop-min-item-level}

The lowest item level this quality can be rolled at (0 = any). Keeps Epic away from level 3 drops however lucky the roll

*Budget*

### float budget_multiplier = 1.0 {#prop-budget-multiplier}

Multiplies the stat budget of the item (Common 1, Magic 1.5, Rare 2.5 ...). See ItemBudget

### float roll_spread = 0.5 {#prop-roll-spread}

How unevenly the budget is split between the rolled bonuses: 0 = an even split, 1 = very uneven

*Affix Slots*

### int prefixes_min = 0 {#prop-prefixes-min}

How many prefix affixes roll (picked from the affixes the item can have)

### int prefixes_max = 0 {#prop-prefixes-max}

*No description yet.*

### int suffixes_min = 0 {#prop-suffixes-min}

How many suffix affixes roll

### int suffixes_max = 0 {#prop-suffixes-max}

*No description yet.*

### int silent_min = 0 {#prop-silent-min}

How many silent affixes roll (affixes with no name: extra stats that do not change the name of the item)

### int silent_max = 0 {#prop-silent-max}

*No description yet.*

### int effects_min = 0 {#prop-effects-min}

How many effect affixes roll (affixes that give an effect)

### int effects_max = 0 {#prop-effects-max}

*No description yet.*

*Sockets*

### int sockets_min = 0 {#prop-sockets-min}

Extra sockets the item gets

### int sockets_max = 0 {#prop-sockets-max}

*No description yet.*

### Array[int] socket_pool = [] {#prop-socket-pool}

The socket types (SocketDefinition ids) an extra socket can be

*Value and Name*

### float vendor_value_multiplier = 1.0 {#prop-vendor-value-multiplier}

Multiplies the vendor value of the item

### NameMode name_mode = NameMode.AFFIXES {#prop-name-mode}

How the name of a generated item is made

### Array[QualityRule] rules = [] {#prop-rules}

Custom rules for what the fields above do not cover (each QualityRule gets the item that is being generated)

## Method descriptions

### int roll_count( minimum: int, maximum: int, rng: RandomNumberGenerator ) {#method-roll-count}

A random number of affixes between a minimum and a maximum (a maximum below the minimum counts as the minimum)

### bool is_valid() {#method-is-valid}

*No description yet.*

### Array[Dictionary] validate() {#method-validate}

*No description yet.*

### String get_id() {#method-get-id}

*No description yet.*

### bool is_higher_than( other: Quality ) {#method-is-higher-than}

*No description yet.*

### bool is_lower_than( other: Quality ) {#method-is-lower-than}

*No description yet.*

### String get_quality_description() {#method-get-quality-description}

*No description yet.*

