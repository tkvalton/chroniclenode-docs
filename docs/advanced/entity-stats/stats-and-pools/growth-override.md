<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# GrowthOverride

**Inherits:** [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Level growth for one stat or pool of one kind of entity (a class, an NPC): it replaces the growth the stat or pool definition itself has, so a warrior's Strength can grow faster than a mage's. Lives in StatsData.growth_overrides. The three growth fields work exactly like the ones on a StatDefinition / PoolDefinition, so the same editor edits both. See docs/systems/entity-stats.md, section 25.

## Properties

| | | |
|---|---|---|
| `int` | [target_id](#prop-target-id) | `0` |
| `CalculationFormula` | [growth_formula](#prop-growth-formula) |  |
| `DiminishingReturns` | [growth_returns](#prop-growth-returns) |  |
| `float` | [growth_max](#prop-growth-max) | `0.0` |

## Methods

| | |
|---|---|
| `float` | [calculate_growth](#method-calculate-growth)( `level: int, context: FormulaContext = null` ) |

## Property descriptions

### int target_id = 0 {#prop-target-id}

The stat or pool this growth is for (a StatDefinition or PoolDefinition id)

### CalculationFormula growth_formula {#prop-growth-formula}

Replaces the definition's growth, even when it is empty: an override with no formula makes the stat not grow for this entity

### DiminishingReturns growth_returns {#prop-growth-returns}

Optional diminishing returns on the levels gained

### float growth_max = 0.0 {#prop-growth-max}

Ceiling on the total growth (0 = none)

## Method descriptions

### float calculate_growth( level: int, context: FormulaContext = null ) {#method-calculate-growth}

The growth at `level` (0 when the override has no formula)

