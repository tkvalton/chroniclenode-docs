<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# StatGroupDefinition

**Inherits:** [DatabaseResource](/advanced/data-and-database/database-classes/database-resource) < [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

A group of stats: Primary, Secondary, Offensive, Defensive, Utility ... A stat can be in several groups (`StatDefinition.groups`). Groups do three jobs:

## Description

- **Targets**: a StatModifierEffect (or SetStatActiveStateEffect) can name a group instead of one stat, so "all Primary stats +10 %" is one effect.
- **Layout**: the character sheet and item tooltips put the stats under the headings of their groups, in `sort_order`.

A stat in several groups is listed once, under the first of its visible groups.

- **Hiding**: a stat in a group with `hide_from_sheet` has no row on the character sheet or in tooltips (the weapon stats, internal numbers).

A group changes nothing about how a stat is calculated. See docs/systems/entity-stats.md, section 27.

## Properties

| | | |
|---|---|---|
| `Color` | [color](#prop-color) | `Color.WHITE` |
| `int` | [sort_order](#prop-sort-order) | `100` |
| `bool` | [hide_from_sheet](#prop-hide-from-sheet) | `false` |

## Methods

| | |
|---|---|
| `StatGroupDefinition` | [build_default](#method-build-default)( `entry: Dictionary` ) *static* |

## Constants

- `int` **ID_CORE** = `1000001` - Ids of the groups every project has. Core and Hidden are used by the core stats (the engine's own stats); the others are the usual starting set, created when a project has no stat groups yet (see `Database`)
- `int` **ID_PRIMARY** = `1000002`
- `int` **ID_SECONDARY** = `1000003`
- `int` **ID_OFFENSIVE** = `1000004`
- `int` **ID_DEFENSIVE** = `1000005`
- `int` **ID_UTILITY** = `1000006`
- `int` **ID_HIDDEN** = `1000007`
- `Array[Dictionary]` **DEFAULTS** = `[` - The groups created for a new project: id, name, description, sort order, hidden, colour
- `Array[int]` **LEGACY_CATEGORY_GROUPS** = `[ID_CORE, ID_PRIMARY, ID_SECONDARY, ID_DEFENSIVE, ID_UTILITY, ID_HIDDEN]` - What the old `display_category` numbers (0 core, 1 primary, 2 secondary, 3 defensive, 4 utility, 5 hidden) are now

## Property descriptions

### Color color = Color.WHITE {#prop-color}

The color that stands for this in the interface

*Display*

### int sort_order = 100 {#prop-sort-order}

Where the group's heading comes on the character sheet and in tooltips (low first)

### bool hide_from_sheet = false {#prop-hide-from-sheet}

Stats in this group have no row on the character sheet and are left out of tooltips

## Method descriptions

### StatGroupDefinition build_default( entry: Dictionary ) {#method-build-default}

A fresh definition of one of the DEFAULTS

