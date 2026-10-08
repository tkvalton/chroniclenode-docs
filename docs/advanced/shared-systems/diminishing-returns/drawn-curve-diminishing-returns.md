<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# DrawnCurveDiminishingReturns

**Inherits:** [DiminishingReturns](/advanced/shared-systems/diminishing-returns/diminishing-returns) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

A hand-drawn efficiency curve (the Dark Souls style table). X is points / max_input (0 to 1), Y is the efficiency:

## Properties

| | | |
|---|---|---|
| `Curve` | [curve](#prop-curve) |  |
| `float` | [max_input](#prop-max-input) | `1000.0` |
| `float` | [beyond_rate](#prop-beyond-rate) | `0.5` |

## Methods

| | |
|---|---|
| `float` | [apply](#method-apply)( `points: float, context: FormulaContext = null` ) |
| `String` | [get_label](#method-get-label)() |
| `String` | [get_description](#method-get-description)() |
| `Vector2` | [get_preview_range](#method-get-preview-range)() |
| `Array[String]` | [validate](#method-validate)() |

## Property descriptions

### Curve curve {#prop-curve}

The efficiency curve: x is points / max_input, y is the share of the points that counts

### float max_input = 1000.0 {#prop-max-input}

The points at which the curve ends (X = 1)

### float beyond_rate = 0.5 {#prop-beyond-rate}

The share of each point beyond max_input that counts (on top of the end efficiency)

## Method descriptions

### float apply( points: float, context: FormulaContext = null ) {#method-apply}

Points in, effective points out. The base class changes nothing *(from [DiminishingReturns](/advanced/shared-systems/diminishing-returns/diminishing-returns))*

### String get_label() {#method-get-label}

*Overrides this function of [DiminishingReturns](/advanced/shared-systems/diminishing-returns/diminishing-returns).*

### String get_description() {#method-get-description}

One-line description with the current numbers *(from [DiminishingReturns](/advanced/shared-systems/diminishing-returns/diminishing-returns))*

### Vector2 get_preview_range() {#method-get-preview-range}

The points range the editor graph and table draw (x from, x to) *(from [DiminishingReturns](/advanced/shared-systems/diminishing-returns/diminishing-returns))*

### Array[String] validate() {#method-validate}

Configuration problems, as readable messages (empty = fine) *(from [DiminishingReturns](/advanced/shared-systems/diminishing-returns/diminishing-returns))*

