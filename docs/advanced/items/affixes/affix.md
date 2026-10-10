<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# Affix

**Inherits:** [DatabaseResource](/advanced/data-and-database/database-classes/database-resource) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

A bonus an item can roll: "Heavy" (prefix, gives Strength), "of the Monkey" (suffix, gives Agility or Dodge), or a silent bonus with no name.

## Description

An affix says WHAT it brings (which stats, which effects), never how much: the amount comes from the budget of the item (see ItemBudget), so the same affix is small on a level 5 item and large on a level 50 item. The `display_name` is the text in the name of the item ("Heavy", "of the Monkey"). See docs/systems/ability-ranks-and-item-generation.md.

## Properties

| | | |
|---|---|---|
| `Placement` | [placement](#prop-placement) | `Placement.PREFIX` |
| `int` | [weight](#prop-weight) | `100` |
| `String` | [exclusive_group](#prop-exclusive-group) | `""` |
| `float` | [share](#prop-share) | `1.0` |
| `Array[int]` | [allowed_equipment_types](#prop-allowed-equipment-types) | `[]` |
| `Array[int]` | [allowed_weapon_classes](#prop-allowed-weapon-classes) | `[]` |
| `Array[int]` | [allowed_item_groups](#prop-allowed-item-groups) | `[]` |
| `int` | [min_item_level](#prop-min-item-level) | `0` |
| `int` | [max_item_level](#prop-max-item-level) | `0` |
| `int` | [min_quality_tier](#prop-min-quality-tier) | `0` |
| `GrantMode` | [grant_mode](#prop-grant-mode) | `GrantMode.ALL` |
| `int` | [pick_count](#prop-pick-count) | `1` |
| `Array[AffixStatGrant]` | [stat_grants](#prop-stat-grants) | `[]` |
| `Array[AffixEffectGrant]` | [effect_grants](#prop-effect-grants) | `[]` |

## Methods

| | |
|---|---|
| `bool` | [is_effect_affix](#method-is-effect-affix)() |
| `bool` | [fits](#method-fits)( `item_definition: ItemDefinition, item_level: int, quality_tier: int` ) |
| `Array` | [pick_grants](#method-pick-grants)( `rng: RandomNumberGenerator` ) |
| `Array[String]` | [validate](#method-validate)() |

## Enumerations

### enum Placement {#enum-placement}

Where the name of the affix goes in the name of the item

- **PREFIX** = `0` - Before the item name: "Heavy Great Axe"
- **SUFFIX** = `1` - After the item name: "Great Axe of the Monkey"
- **SILENT** = `2` - Not in the name: extra bonuses that only show in the tooltip

### enum GrantMode {#enum-grantmode}

What the affix does with its list of grants

- **ALL** = `0` - Every grant (Heavy gives Strength and Armor)
- **PICK_ONE** = `1` - One grant, picked by weight (of the Monkey gives Agility OR Dodge)
- **PICK_N** = `2` - `pick_count` different grants, picked by weight

## Property descriptions

*Name*

### Placement placement = Placement.PREFIX {#prop-placement}

Prefix, suffix, or silent (no name)

*Roll*

### int weight = 100 {#prop-weight}

The chance of this affix among the affixes that fit (higher = more common)

### String exclusive_group = "" {#prop-exclusive-group}

Only one affix of a group can be on an item ("Attribute suffix": of the Monkey and of the Bear never roll together). Empty = no group

### float share = 1.0 {#prop-share}

How much of the budget this affix draws compared with the other bonuses of the item (2 = twice the share)

*Where it can roll*

### Array[int] allowed_equipment_types = [] {#prop-allowed-equipment-types}

Equipment types (and weapon types) it can roll on. Empty = any

### Array[int] allowed_weapon_classes = [] {#prop-allowed-weapon-classes}

Weapon classes it can roll on (weapons only). Empty = any

### Array[int] allowed_item_groups = [] {#prop-allowed-item-groups}

Item groups it can roll on (an item in any of them). Empty = any

### int min_item_level = 0 {#prop-min-item-level}

Lowest item level it can roll at (0 = any)

### int max_item_level = 0 {#prop-max-item-level}

Highest item level it can roll at (0 = no limit)

### int min_quality_tier = 0 {#prop-min-quality-tier}

Lowest quality tier the item must have (0 = any)

*Grants*

### GrantMode grant_mode = GrantMode.ALL {#prop-grant-mode}

How the grants below are used

### int pick_count = 1 {#prop-pick-count}

How many grants to pick with the mode `PICK_N`

### Array[AffixStatGrant] stat_grants = [] {#prop-stat-grants}

The stats this affix can give. An affix with stat grants is a stat affix

### Array[AffixEffectGrant] effect_grants = [] {#prop-effect-grants}

The effects this affix can give. An affix with effect grants is an effect affix (it fills the effect slots of the quality)

## Method descriptions

### bool is_effect_affix() {#method-is-effect-affix}

Does this affix give effects (it uses the effect slots of the quality) rather than stats?

### bool fits( item_definition: ItemDefinition, item_level: int, quality_tier: int ) {#method-fits}

Can this affix roll on the item at that item level and quality tier? (Item definitions that are not equipment match only affixes without filters.)

### Array pick_grants( rng: RandomNumberGenerator ) {#method-pick-grants}

The grants one roll of this affix gives (stat grants for a stat affix, effect grants for an effect affix), by the grant mode

### Array[String] validate() {#method-validate}

Configuration problems as readable messages (empty = fine)

