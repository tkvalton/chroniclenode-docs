<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# DamageMeterUI

**Inherits:** [HUDUIElement](/advanced/user-interface/hud/hudui-element) < [Control](https://docs.godotengine.org/en/stable/classes/class_control.html)

This class manages the display of detailed combat statistics, including damage and healing done by each entity.

## Description

Key features:

- Tracks and displays damage and healing statistics for each entity
- Dynamically creates and updates detail bars for each active entity
- Calculates and displays percentages of total damage/healing for each entity
- Sorts detail bars based on total amount (highest to lowest)

## Properties

| | | |
|---|---|---|
| `PackedScene` | [damage_bar](#prop-damage-bar) |  |

## Variables

| | | |
|---|---|---|
| `int` | [group_total_damage](#var-group-total-damage) |  |
| `int` | [group_total_healing](#var-group-total-healing) |  |
| `Array[DamaterBarUI]` | [active_damage_bars](#var-active-damage-bars) | `[]` |
| `Array[DamaterBarUI]` | [active_healing_bars](#var-active-healing-bars) | `[]` |
| `int` | [current_window](#var-current-window) | `0` |

## Methods

| | |
|---|---|
| `void` | [initialize_ui](#method-initialize-ui)( `system_hub: GameHost.SystemHub` ) |

## Property descriptions

### PackedScene damage_bar {#prop-damage-bar}

Preloaded scene for individual detail bars

## Variable descriptions

### int group_total_damage {#var-group-total-damage}

Total damage done by the group

### int group_total_healing {#var-group-total-healing}

Total healing done by the group

### Array[DamaterBarUI] active_damage_bars = [] {#var-active-damage-bars}

Array of active damage detail bars

### Array[DamaterBarUI] active_healing_bars = [] {#var-active-healing-bars}

Array of active healing detail bars

### int current_window = 0 {#var-current-window}

Currently open tab (0 for damage, 1 for healing)

## Method descriptions

### void initialize_ui( system_hub: GameHost.SystemHub ) {#method-initialize-ui}

Called when the node enters the scene tree for the first time

