<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# CoreStatDefaults

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

The core stats (movement speed, attack speed, global cooldown, weapon speed, cast speed, carry weight, sight range, weapon damage and its variance) as ordinary stat definitions. The engine reads them by id (StatsComponent.CoreStats), everything else about them is data: a core stat takes formulas, growth, conditions and effects like any stat, and shows in the stat editor.

## Description

`Database` creates a definition for every core stat that does not exist yet in `res://src/data/stats/` the first time it is used (in the editor or when the game starts), so a project never has to author them and an older project gets them by itself. Once a file exists it is the project's: edit it freely (the id is what the engine looks for, keep it). See docs/systems/entity-stats.md, section 25.

## Methods

| | |
|---|---|
| `bool` | [is_core_stat](#method-is-core-stat)( `stat_id: int` ) *static* |
| `float` | [get_default](#method-get-default)( `stat_id: int` ) *static* |
| `StatDefinition` | [build](#method-build)( `entry: Dictionary` ) *static* |

## Constants

- `Array[Dictionary]` **DEFINITIONS** = `[` - One entry per core stat: id (StatsComponent.CoreStats), name, description, default, display and limits
- `int` **MAX_CORE_ID** = `9` - The highest core stat id: every id up to it is reserved for the engine (project stats get 7-digit ids)

## Method descriptions

### bool is_core_stat( stat_id: int ) {#method-is-core-stat}

*No description yet.*

### float get_default( stat_id: int ) {#method-get-default}

*No description yet.*

### StatDefinition build( entry: Dictionary ) {#method-build}

A fresh definition of one core stat, with the engine's defaults

