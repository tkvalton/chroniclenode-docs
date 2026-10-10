<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ItemBudget

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

The stat budget of an item: a pool of points that the bonuses of a generated item spend.

## Description

`budget = formula(item level) x slot weight x item multiplier x quality multiplier`. The authored stats and effects of the item are paid from it first; the rolled affixes share what is left (stats get a share of the points, each stat costs what its `budget_cost` says; effects have a fixed price). Pure functions: no scene access, so the numbers can be checked headless. See docs/systems/ability-ranks-and-item-generation.md, section 5.

## Methods

| | |
|---|---|
| `float` | [total_budget](#method-total-budget)( `item_level: int, slot_weight: float, item_multiplier: float, quality_multiplier: float, config: GameplayConfig = null` ) *static* |
| `float` | [scale_factor](#method-scale-factor)( `item_level: int, authored_level: int, config: GameplayConfig = null` ) *static* |
| `float` | [slot_weight](#method-slot-weight)( `item_definition: ItemDefinition` ) *static* |
| `float` | [stat_cost](#method-stat-cost)( `stat_id: int` ) *static* |
| `float` | [base_spent](#method-base-spent)( `item_definition: ItemDefinitionEquipment, factor: float = 1.0` ) *static* |
| `Array[float]` | [allocate](#method-allocate)( `budget: float, grants: Array, spread: float, rng: RandomNumberGenerator` ) *static* |

## Method descriptions

### float total_budget( item_level: int, slot_weight: float, item_multiplier: float, quality_multiplier: float, config: GameplayConfig = null ) {#method-total-budget}

The budget of an item

### float scale_factor( item_level: int, authored_level: int, config: GameplayConfig = null ) {#method-scale-factor}

How much an item that scales grows from the level its values are written for to the level it is generated at (never below 1: it does not shrink)

### float slot_weight( item_definition: ItemDefinition ) {#method-slot-weight}

The weight of the equipment slot an item goes in (the highest of the slots that take its equipment type; 1 when none says)

### float stat_cost( stat_id: int ) {#method-stat-cost}

The budget cost of one point of a stat (the stat's `budget_cost`; 1 when the stat is unknown)

### float base_spent( item_definition: ItemDefinitionEquipment, factor: float = 1.0 ) {#method-base-spent}

What the authored part of an item spends: its stat bonuses (points x cost, times the scale factor) and its authored effects (the cost written on each). Weapon damage and speed are not counted: they are not stat bonuses of the definition

### Array[float] allocate( budget: float, grants: Array, spread: float, rng: RandomNumberGenerator ) {#method-allocate}

Splits a budget between bonuses. Each grant is &#123;"share": float, "cost": float (budget per point), "cap": float (0 = none)&#125;. Returns the points of each grant, in the same order. Each grant gets a weight of `share x a random number between 1 - spread and 1 + spread` (never below a small floor) and a slice of the budget in proportion; its points are the slice divided by its cost. A grant over its cap is held at the cap and what it did not use is given to the others

