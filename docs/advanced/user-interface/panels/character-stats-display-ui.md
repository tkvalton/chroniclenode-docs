<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# CharacterStatsDisplayUI

**Inherits:** `MarginContainer`

Character Stats Display UI - Dynamic stats interface with individual stat connections Gets initial data from GameHost.party_manager.current_player, then individual stats handle their own updates No stored references needed - each stat component connects directly to its stat instance signals Refactored to forward tooltip signals from stat components

## Properties

| | | |
|---|---|---|
| `PackedScene` | [character_sheet_stat_scene](#prop-character-sheet-stat-scene) |  |

## Variables

| | | |
|---|---|---|
| `Array[CharacterSheetStat]` | [stat_components](#var-stat-components) | `[]` |

## Methods

| | |
|---|---|
| `void` | [initialize_display](#method-initialize-display)( `system_hub: GameHost.SystemHub, current_player: Player` ) |
| `void` | [populate_stats_display](#method-populate-stats-display)( `system_hub: GameHost.SystemHub, stats_component: StatsComponent` ) |
| `void` | [clear_stat_components](#method-clear-stat-components)() |
| `void` | [clear_stats_display](#method-clear-stats-display)() |

## Signals

### description_tooltip_requested( object_name: String, description: String ) {#signal-description-tooltip-requested}

Signals for forwarding from child stats

### hide_tooltip( force_hide: bool ) {#signal-hide-tooltip}

## Property descriptions

### PackedScene character_sheet_stat_scene {#prop-character-sheet-stat-scene}

Scene to instantiate for each stat

## Variable descriptions

### Array[CharacterSheetStat] stat_components = [] {#var-stat-components}

Array to keep track of created stat components

## Method descriptions

### void initialize_display( system_hub: GameHost.SystemHub, current_player: Player ) {#method-initialize-display}

Initialize the stats display with current player data

### void populate_stats_display( system_hub: GameHost.SystemHub, stats_component: StatsComponent ) {#method-populate-stats-display}

Populate the stats display based on available stats

### void clear_stat_components() {#method-clear-stat-components}

Clear all stat components

### void clear_stats_display() {#method-clear-stats-display}

Clear the stats display when no character is available

