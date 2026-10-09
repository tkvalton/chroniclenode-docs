<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# GrowthEditor

**Inherits:** [VBoxContainer](https://docs.godotengine.org/en/stable/classes/class_vboxcontainer.html)

"Level Growth" section of the stat and pool editors: the formula and optional diminishing returns that turn the levels gained (level - 1) into growth, plus a ceiling and a small table of the result at a few levels. Edits `growth_formula`, `growth_returns` and `growth_max` of the resource it is set up with (a StatDefinition or a PoolDefinition). See docs/systems/entity-stats.md, section 18.6.

## Methods

| | |
|---|---|
| `void` | [setup](#method-setup)( `resource: Resource` ) |
| `void` | [set_expanded](#method-set-expanded)( `expanded: bool` ) |

## Signals

### growth_changed() {#signal-growth-changed}

## Method descriptions

### void setup( resource: Resource ) {#method-setup}

Shows the growth of `resource` (a StatDefinition, a PoolDefinition or a GrowthOverride)

### void set_expanded( expanded: bool ) {#method-set-expanded}

Opens or closes the body

