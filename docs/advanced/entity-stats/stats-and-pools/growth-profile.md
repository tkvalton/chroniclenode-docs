<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# GrowthProfile

**Inherits:** [DatabaseResource](/advanced/data-and-database/database-classes/database-resource) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

How a kind of entity grows with its level: a list of growth entries, one for each stat or pool that should grow differently from the way its own definition says. "Heavy" lets Stamina and Health grow fast, "Caster" lets Intellect and Mana grow, "Minion" barely grows at all.

## Description

A profile is the middle layer of the growth of an entity. When a stat or pool asks "how much do I grow at this level", the answer is the first of:

1. the entity's own override (Stats tab of the NPC: Level Growth Overrides),

2. this profile, then its parent, then the parent's parent ...,

3. the project's default profile (Gameplay Config, NPC Level Scaling), which closes the chain of every NPC,

4. the growth on the stat's or pool's own definition.

An entry **replaces** the growth below it, even an entry with no formula (that makes the stat not grow for this kind of entity). A profile only lists what differs from its parent. The profile is chosen in the Stats tab of an NPC (StatsData.growth_profile_id). See docs/systems/entity-stats.md, section 34.

## Properties

| | | |
|---|---|---|
| `int` | [parent_profile_id](#prop-parent-profile-id) | `0` |
| `Array[GrowthOverride]` | [growth_overrides](#prop-growth-overrides) | `[]` |

## Methods

| | |
|---|---|
| `GrowthOverride` | [get_growth_override](#method-get-growth-override)( `target_id: int` ) |
| `void` | [set_growth_override](#method-set-growth-override)( `growth_override: GrowthOverride` ) |
| `void` | [remove_growth_override](#method-remove-growth-override)( `target_id: int` ) |
| `Array[GrowthProfile]` | [get_chain](#method-get-chain)() |
| `Array[GrowthProfile]` | [build_chain](#method-build-chain)( `profile_id: int, default_profile_id: int` ) *static* |
| `GrowthOverride` | [find_entry](#method-find-entry)( `chain: Array[GrowthProfile], target_id: int` ) *static* |
| `Array[Dictionary]` | [validate](#method-validate)() |
| `GrowthProfile` | [build_default](#method-build-default)() *static* |

## Constants

- `int` **MAX_CHAIN** = `8` - The longest chain of parents that is followed (a loop stops it earlier)
- `int` **ID_DEFAULT** = `1000001` - The profile the toolkit makes for every project and uses as the default of NPCs until the project picks another

## Property descriptions

### int parent_profile_id = 0 {#prop-parent-profile-id}

The profile this one builds on (0 = none; the project's default profile still closes the chain). Entries here win over the parent's

### Array[GrowthOverride] growth_overrides = [] {#prop-growth-overrides}

Growth of stats and pools (and the weapon damage core stat) for the entities that use this profile

## Method descriptions

### GrowthOverride get_growth_override( target_id: int ) {#method-get-growth-override}

The entry of a stat or pool in this profile, or null

### void set_growth_override( growth_override: GrowthOverride ) {#method-set-growth-override}

Gives the stat or pool an entry in this profile (replaces an earlier one)

### void remove_growth_override( target_id: int ) {#method-remove-growth-override}

Takes the entry of a stat or pool out of this profile

### Array[GrowthProfile] get_chain() {#method-get-chain}

This profile, then its parent, the parent's parent ... Stops at a missing parent, at a loop and after MAX_CHAIN profiles

### Array[GrowthProfile] build_chain( profile_id: int, default_profile_id: int ) {#method-build-chain}

The profiles that answer for an entity, nearest first: the chain of `profile_id`, then the chain of the project default. `profile_id` 0 = only the default

### GrowthOverride find_entry( chain: Array[GrowthProfile], target_id: int ) {#method-find-entry}

The growth this profile chain gives a stat or pool: the entry of the nearest profile that has one, or null when none has

### Array[Dictionary] validate() {#method-validate}

What is wrong with the profile, as `{message}` rows: a parent that does not exist or loops back, an entry for a stat or pool that is gone, two entries for one target

### GrowthProfile build_default() {#method-build-default}

The profile the toolkit makes: no entries, so the stats and pools grow as their own definitions say until the dev adds some

