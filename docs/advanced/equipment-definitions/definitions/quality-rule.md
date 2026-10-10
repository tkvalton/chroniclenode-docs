<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# QualityRule

**Inherits:** [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

A custom rule of a Quality, for what its fields do not cover: "a legendary always has a socket", "an epic gets +1 ability rank".

## Description

Extend this class and override `apply`. It runs when an item of the quality is generated, after the affixes are rolled and before the item is finished. `generated` is the data of the item (see ItemGenerator.generate): change `stat_bonuses` (stat id -&gt; value), `effect_ids`, `item_level` or `name_prefix` / `name_suffix` as you like. A rule is a pure function of its inputs: no scene access.

## Methods

| | |
|---|---|
| `String` | [get_label](#method-get-label)() |
| `void` | [apply](#method-apply)( `_generated: Dictionary, _item_definition: ItemDefinition, _rng: RandomNumberGenerator` ) |
| `Array[String]` | [validate](#method-validate)() |

## Method descriptions

### String get_label() {#method-get-label}

What the rule is called in the editor

### void apply( _generated: Dictionary, _item_definition: ItemDefinition, _rng: RandomNumberGenerator ) {#method-apply}

Changes the generated data of one item

### Array[String] validate() {#method-validate}

Configuration problems as readable messages (empty = fine)

