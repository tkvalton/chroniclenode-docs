<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# LootLevel

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

Answers "what item level are these drops generated at?" for loot, rewards and vendors, from the LootLevelSource of a loot table and a loot rule.

## Description

The order: the loot table's own source overrules the loot rule's source, which overrules the project default for this kind of holder (Gameplay Config &gt; Item Generation). A source set to Inherit passes the question on, but its offset and its lowest and highest level still apply when nothing else gives them. Pure functions of what they are given, so they can be checked without a scene. See docs/systems/ability-ranks-and-item-generation.md, section 8.

## Methods

| | |
|---|---|
| `int` | [from_choice](#method-from-choice)( `choice: int, fixed_level: int, offset: int, receiver: Entity, hub: Variant, config: GameplayConfig = null` ) *static* |
| `int` | [resolve](#method-resolve)( `sources: Array, holder_kind: HolderKind, holder: Object, receiver: Entity, hub: Variant, config: GameplayConfig = null` ) *static* |
| `int` | [resolve_nested](#method-resolve-nested)( `source: LootLevelSource, inherited_level: int, holder: Object, receiver: Entity, hub: Variant, config: GameplayConfig = null` ) *static* |

## Enumerations

### enum HolderKind {#enum-holderkind}

What holds the loot: an NPC has a level, an object does not

- **NPC** = `0` - An NPC: its default is its own level
- **OBJECT** = `1` - A chest, a crate: no level of its own, its default is the party's
- **REWARD** = `2` - A reward, a shop, an effect that makes an item: its default is the level of whoever gets the item

### enum Choice {#enum-choice}

How the item level of a reward, a shop item or an effect is asked for in the editors (a short list of the sources that make sense there)

- **RECEIVER** = `0` - The level of whoever gets the item
- **FIXED** = `1` - A level written here
- **PARTY** = `2` - The level of the party
- **WORLD** = `3` - The item level of the world

## Method descriptions

### int from_choice( choice: int, fixed_level: int, offset: int, receiver: Entity, hub: Variant, config: GameplayConfig = null ) {#method-from-choice}

The item level for one of the short lists of the editors (a reward, a shop item): `choice` is a Choice, `fixed_level` the level of FIXED, `offset` is added

### int resolve( sources: Array, holder_kind: HolderKind, holder: Object, receiver: Entity, hub: Variant, config: GameplayConfig = null ) {#method-resolve}

The item level for a holder. `sources` are the LootLevelSources to ask, the one that overrules first (the table's, then the rule's); `holder` is the NPC (or object), `receiver` the entity that gets the loot, `hub` the system hub (for the party and the world; can be null: the fallback level is used)

### int resolve_nested( source: LootLevelSource, inherited_level: int, holder: Object, receiver: Entity, hub: Variant, config: GameplayConfig = null ) {#method-resolve-nested}

The item level of a table inside another table that has a source of its own: Inherit keeps the level of the outer table (shaped by the inner one)

