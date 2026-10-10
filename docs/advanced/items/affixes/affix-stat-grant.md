<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# AffixStatGrant

**Inherits:** [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

One stat an affix can give. The affix says WHICH stat; how many points the item gets is decided by the budget of the item (see ItemBudget).

## Properties

| | | |
|---|---|---|
| `int` | [stat_id](#prop-stat-id) | `0` |
| `int` | [weight](#prop-weight) | `100` |
| `float` | [cap](#prop-cap) | `0.0` |

## Property descriptions

### int stat_id = 0 {#prop-stat-id}

The stat (StatDefinition id) the affix gives

### int weight = 100 {#prop-weight}

The chance of this grant when the affix picks one or some of its grants (higher = more likely). Not used when the affix gives all of them

### float cap = 0.0 {#prop-cap}

The most points this grant can give on one item (0 = no cap). What the cap cuts off goes to the other bonuses of the item

