<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# SoftCapDiminishingReturns

**Inherits:** [DiminishingReturns](/advanced/shared-systems/diminishing-returns/diminishing-returns) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Full value up to a threshold; above it each point only counts as a share (rate) of a point.

## Properties

| | | |
|---|---|---|
| `float` | [threshold](#prop-threshold) | `400.0` |
| `float` | [rate](#prop-rate) | `0.5` |

## Methods

| | |
|---|---|
| `float` | [apply](#method-apply)( `points: float, context: FormulaContext = null` ) |
| `String` | [get_label](#method-get-label)() |
| `String` | [get_description](#method-get-description)() |
| `Vector2` | [get_preview_range](#method-get-preview-range)() |
| `Array[String]` | [validate](#method-validate)() |

## Property descriptions

### float threshold = 400.0 {#prop-threshold}

Points counted in full

### float rate = 0.5 {#prop-rate}

The share of each point above the threshold that counts (0 = a hard cap, 1 = no diminishing)

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

