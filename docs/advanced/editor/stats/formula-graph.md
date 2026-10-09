<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# FormulaGraph

**Inherits:** [Control](https://docs.godotengine.org/en/stable/classes/class_control.html)

A small line graph of a formula: stat points (or levels) along the bottom, the value it gives up the side. Drawn from samples (FormulaPipeline.sample), so it shows the real result of the formula, the diminishing returns and the max result together. See docs/systems/entity-stats.md, section 24.4.

## Variables

| | | |
|---|---|---|
| `PackedVector2Array` | [samples](#var-samples) | `PackedVector2Array()` |
| `String` | [x_label](#var-x-label) | `"points"` |

## Methods

| | |
|---|---|
| `void` | [show_samples](#method-show-samples)( `new_samples: PackedVector2Array, new_x_label: String = "points"` ) |

## Constants

- `float` **GRAPH_HEIGHT** = `140.0`
- `float` **MARGIN_LEFT** = `46.0`
- `float` **MARGIN_BOTTOM** = `20.0`
- `float` **MARGIN_TOP** = `8.0`
- `float` **MARGIN_RIGHT** = `10.0`

## Variable descriptions

### PackedVector2Array samples = PackedVector2Array() {#var-samples}

*No description yet.*

### String x_label = "points" {#var-x-label}

*No description yet.*

## Method descriptions

### void show_samples( new_samples: PackedVector2Array, new_x_label: String = "points" ) {#method-show-samples}

Shows these samples (x = points or level, y = the value)

