<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# AudioPreload

**Inherits:** [RefCounted](https://docs.godotengine.org/en/stable/classes/class_refcounted.html)

Walks a world for every track it can need and gives their paths, so the AudioManager asks for them when the world loads (and the sources that start later find them ready). It reads the sources of the world, of its zones, of the weather it can have (the default weather or table, the weather and tables of its zones) and of its encounters, and the Set Music Track and Set Ambient Track actions of the events. Albums are read track by track. Only paths are collected; nothing is loaded here. See docs: Assets &gt; Albums.

## Methods

| | |
|---|---|
| `PackedStringArray` | [collect](#method-collect)( `world_data: WorldData` ) *static* |

## Method descriptions

### PackedStringArray collect( world_data: WorldData ) {#method-collect}

The files the world can play, without doubles

