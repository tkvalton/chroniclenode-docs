<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# SkillTier

**Inherits:** [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

A step of a proficiency or a profession: Apprentice, Journeyman, Expert, Master.

## Description

A tier is only a **cap on the level**: while a character is in the tier its level cannot go above `level_cap` (experience stops there). Training the next tier, from a trainer, a quest or an event (SkillTierReward), lifts the cap. A proficiency or profession with no tiers has no caps. The first tier is the one the character starts in. See docs/systems/skill-trainers.md, section 3.4.

## Properties

| | | |
|---|---|---|
| `String` | [display_name](#prop-display-name) | `"Tier"` |
| `int` | [level_cap](#prop-level-cap) | `75` |
| `String` | [description](#prop-description) | `""` |
| `Texture2D` | [icon](#prop-icon) |  |
| `Array[Requirement]` | [requirements](#prop-requirements) | `[]` |

## Methods

| | |
|---|---|
| `int` | [cap_for](#method-cap-for)( `tiers: Array[SkillTier], tier_index: int, max_level: int` ) *static* |
| `String` | [name_of](#method-name-of)( `tiers: Array[SkillTier], tier_index: int` ) *static* |
| `Array[Dictionary]` | [validate_list](#method-validate-list)( `tiers: Array[SkillTier], max_level: int` ) *static* |

## Property descriptions

### String display_name = "Tier" {#prop-display-name}

The name of the tier ("Journeyman")

### int level_cap = 75 {#prop-level-cap}

The highest level a character can reach while in this tier

### String description = "" {#prop-description}

A line about the tier, for the interface

### Texture2D icon {#prop-icon}

An icon for the tier

### Array[Requirement] requirements = [] {#prop-requirements}

What a character needs to be trained in this tier (a trainer's lesson checks them, on top of its own requirements)

## Method descriptions

### int cap_for( tiers: Array[SkillTier], tier_index: int, max_level: int ) {#method-cap-for}

The cap of a character in `tier_index` of `tiers`, never above `max_level`. With no tiers there is no cap: `max_level`

### String name_of( tiers: Array[SkillTier], tier_index: int ) {#method-name-of}

The name of a tier (the number when the list does not have it)

### Array[Dictionary] validate_list( tiers: Array[SkillTier], max_level: int ) {#method-validate-list}

Problems of a list of tiers for the editors

