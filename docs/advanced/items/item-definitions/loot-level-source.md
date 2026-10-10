<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# LootLevelSource

**Inherits:** [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

Where the item level of a generated item comes from: loot of an NPC or object, a reward, a vendor.

## Description

A loot rule has one, a loot table can have one that overrules the rule, and the Gameplay Config has a default for each kind of holder. `INHERIT` means "the next one in that order decides". See LootLevel.resolve.

## Properties

| | | |
|---|---|---|
| `Source` | [source](#prop-source) | `Source.INHERIT` |
| `int` | [fixed_level](#prop-fixed-level) | `1` |
| `int` | [level_offset](#prop-level-offset) | `0` |
| `int` | [min_level](#prop-min-level) | `0` |
| `int` | [max_level](#prop-max-level) | `0` |

## Methods

| | |
|---|---|
| `String` | [describe](#method-describe)() |
| `Array[String]` | [validate](#method-validate)() |

## Enumerations

### enum Source {#enum-source}

- **INHERIT** = `0` - The next source in the order decides (table, then rule, then the project default)
- **FIXED** = `1` - A level written here
- **HOLDER** = `2` - The level of the NPC that holds the loot (an object has none: it falls back to the party)
- **RECEIVER** = `3` - The level of whoever gets the loot (the killer, the one who opens the chest, the one who gets the reward)
- **PARTY** = `4` - The level of the party (average or highest, as the NPC level scaling setting says)
- **WORLD** = `5` - The item level of the world the holder is in (World Config)

## Property descriptions

### Source source = Source.INHERIT {#prop-source}

*No description yet.*

### int fixed_level = 1 {#prop-fixed-level}

FIXED: the level

### int level_offset = 0 {#prop-level-offset}

Added to the level the source gave (a boss: +3). Can be negative

### int min_level = 0 {#prop-min-level}

The result is not lower than this (0 = no limit): a weak NPC farmed at level 60 still drops from level 20 up

### int max_level = 0 {#prop-max-level}

The result is not higher than this (0 = no limit): a starting zone never drops above level 15

## Method descriptions

### String describe() {#method-describe}

A short text for the editor: "Holder level +3 (not above 40)"

### Array[String] validate() {#method-validate}

*No description yet.*

