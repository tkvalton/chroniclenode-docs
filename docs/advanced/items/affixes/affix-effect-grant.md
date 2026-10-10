<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# AffixEffectGrant

**Inherits:** [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

One effect an affix can give. An effect is not scaled by the budget: it has a fixed price that is paid from the budget first.

## Properties

| | | |
|---|---|---|
| `int` | [effect_id](#prop-effect-id) | `0` |
| `int` | [weight](#prop-weight) | `100` |
| `float` | [budget_cost](#prop-budget-cost) | `100.0` |

## Property descriptions

### int effect_id = 0 {#prop-effect-id}

The effect (Effect id) the affix gives while the item is equipped

### int weight = 100 {#prop-weight}

The chance of this grant when the affix picks one or some of its grants (higher = more likely). Not used when the affix gives all of them

### float budget_cost = 100.0 {#prop-budget-cost}

What the effect costs from the budget of the item. An effect that does not fit in what is left of the budget is not rolled

