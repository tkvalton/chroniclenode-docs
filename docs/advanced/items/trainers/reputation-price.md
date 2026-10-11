<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ReputationPrice

**Inherits:** [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

One row of a price table by standing: from this reputation up, prices are multiplied by this much (0.9 for friends, 1.5 for strangers).

## Description

The rows of a table are read together: the row with the highest "from reputation" that the character has reached counts. Below the lowest row the price is normal. A trainer uses it; a vendor can later. See docs/systems/skill-trainers.md, section 3.3.

## Properties

| | | |
|---|---|---|
| `int` | [from_reputation](#prop-from-reputation) | `0` |
| `float` | [price_multiplier](#prop-price-multiplier) | `1.0` |

## Methods

| | |
|---|---|
| `float` | [multiplier_for](#method-multiplier-for)( `rows: Array[ReputationPrice], reputation: int` ) *static* |

## Property descriptions

### int from_reputation = 0 {#prop-from-reputation}

The reputation (with the faction of the trainer) from which this row counts

### float price_multiplier = 1.0 {#prop-price-multiplier}

What prices are multiplied by (1.0 = normal, 0.5 = half, 2.0 = double)

## Method descriptions

### float multiplier_for( rows: Array[ReputationPrice], reputation: int ) {#method-multiplier-for}

The multiplier a table gives for a reputation (1.0 when no row has been reached)

