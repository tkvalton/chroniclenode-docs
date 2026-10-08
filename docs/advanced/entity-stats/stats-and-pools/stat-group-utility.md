<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# StatGroupUtility

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

Stat groups in one place (see StatGroupDefinition): which groups a stat is in, which stats are in a group, and how a list of stats is laid out under group headings on the character sheet and in tooltips.

## Methods

| | |
|---|---|
| `Array[StatGroupDefinition]` | [get_groups](#method-get-groups)( `stat: StatDefinition` ) *static* |
| `bool` | [is_hidden](#method-is-hidden)( `stat: StatDefinition` ) *static* |
| `StatGroupDefinition` | [get_sheet_group](#method-get-sheet-group)( `stat: StatDefinition` ) *static* |
| `Array[int]` | [get_stat_ids_in_group](#method-get-stat-ids-in-group)( `group_id: int` ) *static* |
| `Array[Dictionary]` | [layout](#method-layout)( `stats: Array` ) *static* |

## Method descriptions

### Array[StatGroupDefinition] get_groups( stat: StatDefinition ) {#method-get-groups}

The groups a stat is in, in heading order (`sort_order`, then name). Ids that no longer exist are skipped

### bool is_hidden( stat: StatDefinition ) {#method-is-hidden}

Is the stat left off the character sheet and tooltips (it is in a group that hides its stats)?

### StatGroupDefinition get_sheet_group( stat: StatDefinition ) {#method-get-sheet-group}

The group a stat is listed under: the first of its groups in heading order. Null when it has no group

### Array[int] get_stat_ids_in_group( group_id: int ) {#method-get-stat-ids-in-group}

The ids of the stats (of the whole project) in a group

### Array[Dictionary] layout( stats: Array ) {#method-layout}

Lays stats out under group headings: [{"group": StatGroupDefinition or null, "stats": Array[StatDefinition]}], the groups in heading order and the stats without a group last (group null). Hidden stats are left out. A stat is listed once, under its first group

