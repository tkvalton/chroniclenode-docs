<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ItemGenerator

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

Makes an item with a roll: its quality, its affixes (and so its stats and effects), its item level, its name, its sockets.

## Description

`generate(definition, context)` returns an ItemInstance whose roll is stored on it (ItemInstance.get_generated). `roll(definition, context)` is the same roll as plain data, so it can be checked without a scene. Everything an affix does is decided by the budget of the item (ItemBudget):

1. the item level L (the context's `item_level`, else the item's own) 2. the quality: the one of the item, or one rolled from the qualities it can have (drop weights, magic find, the quality's lowest item level) 3. the budget of the item, minus what its written stats and effects cost 4. the affixes: how many of each kind the quality says, picked by weight from the pool of the item (no two of an exclusive group) 5. the effects of the effect affixes are paid from the budget first, then the stat affixes share what is left 6. the name, the extra sockets, and the custom rules of the quality

Context keys (all optional): `item_level` int, `magic_find` float (percent), `quality_id` int (forces a quality), `min_quality_tier` int, `rng` RandomNumberGenerator. See docs/systems/ability-ranks-and-item-generation.md.

## Methods

| | |
|---|---|
| `ItemInstance` | [generate](#method-generate)( `definition: ItemDefinition, context: Dictionary = {}` ) *static* |
| `Array[ItemInstance]` | [make_instances](#method-make-instances)( `definition: ItemDefinition, quantity: int, item_level: int = 0, context: Dictionary = {}` ) *static* |
| `void` | [apply_roll](#method-apply-roll)( `instance: ItemInstance, data: Dictionary` ) *static* |
| `String` | [compose_name](#method-compose-name)( `definition: ItemDefinition, quality: Quality, data: Dictionary` ) *static* |
| `String` | [describe_roll](#method-describe-roll)( `definition: ItemDefinition, data: Dictionary` ) *static* |
| `Dictionary` | [roll](#method-roll)( `definition: ItemDefinition, context: Dictionary = {}` ) *static* |
| `int` | [weighted_index](#method-weighted-index)( `weights: Array[float], rng: RandomNumberGenerator` ) *static* |

## Method descriptions

### ItemInstance generate( definition: ItemDefinition, context: Dictionary = &#123;&#125; ) {#method-generate}

Makes the item. Without a definition that needs generation it is a plain instance of the definition

### Array[ItemInstance] make_instances( definition: ItemDefinition, quantity: int, item_level: int = 0, context: Dictionary = &#123;&#125; ) {#method-make-instances}

The instances of `quantity` items of a definition, made at an item level. An item that is generated (it rolls or scales) gets its own roll in every instance (a stackable one stacks up to its stack size: one roll for each stack); any other item is plain instances. `context` is what `generate` takes (magic find ...)

### void apply_roll( instance: ItemInstance, data: Dictionary ) {#method-apply-roll}

Puts a roll on an instance:the stat points and effects go where the equipment code reads them, the rest stays in the generated data

### String compose_name( definition: ItemDefinition, quality: Quality, data: Dictionary ) {#method-compose-name}

The name of a generated item: the name of the definition with the names of its affixes, as the name mode of its quality says (`data` is the roll: its name_prefix and name_suffix)

### String describe_roll( definition: ItemDefinition, data: Dictionary ) {#method-describe-roll}

A roll as one line of text for the editors: "Heavy Great Axe of the Monkey (Rare, level 25): +240 Strength, +160 Agility, Burning"

### Dictionary roll( definition: ItemDefinition, context: Dictionary = &#123;&#125; ) {#method-roll}

The roll as data:&#123;"item_level", "quality_id", "scale_factor", "stat_bonuses", "effect_ids", "affixes", "name_prefix", "name_suffix", "extra_sockets"&#125;

### int weighted_index( weights: Array[float], rng: RandomNumberGenerator ) {#method-weighted-index}

An index picked by weight (0 when every weight is 0)

