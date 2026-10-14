<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# GrowthPreview

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

What the stats and pools of an entity are at a level, and where the growth of each comes from (the preview of the stats editors). It reads the same layers as StatsComponent.growth_of: the override of the entity itself, then the growth profiles (its own, the parents, the project's default for an NPC), then the definition of the stat or pool.

## Methods

| | |
|---|---|
| `Array[Dictionary]` | [rows](#method-rows)( `stats_data: StatsData, level: int, is_npc: bool` ) *static* |
| `Dictionary` | [growth_of](#method-growth-of)( `stats_data: StatsData, definition: Resource, level: int, chain: Array[GrowthProfile]` ) *static* |

## Method descriptions

### Array[Dictionary] rows( stats_data: StatsData, level: int, is_npc: bool ) {#method-rows}

The rows of the preview: one for each stat and pool of the StatsData, as &#123;"name", "kind": "stat" | "health_pool" | "resource_pool", "id", "base", "growth", "total", "source"&#125;. `source` says where the growth comes from. `is_npc`: the project's default growth profile closes the chain (a player class has none)

### Dictionary growth_of( stats_data: StatsData, definition: Resource, level: int, chain: Array[GrowthProfile] ) {#method-growth-of}

The growth of a stat or pool at a level and where it comes from: &#123;"growth": float, "source": String&#125;

