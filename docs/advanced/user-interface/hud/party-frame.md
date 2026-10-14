<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# PartyFrame

**Inherits:** `MarginContainer`

PartyFrame Class Modern party member frame using PoolBarUI system Displays health, resource, and status effects with settings integration

## Description

Key features:

- Uses PoolBarUI for health and resource bars
- Modulate-based coloring system
- Settings integration for customization
- Border-based highlighting (like nameplates)

## Properties

| | | |
|---|---|---|
| `PackedScene` | [pool_bar_scene](#prop-pool-bar-scene) |  |

## Variables

| | | |
|---|---|---|
| `int` | [player_slot](#var-player-slot) |  |
| `Player` | [frames_player](#var-frames-player) |  |
| `Array[Aura]` | [active_auras](#var-active-auras) |  |
| `Array[Aura]` | [debuff_slots](#var-debuff-slots) |  |
| `PoolBarUI` | [health_pool_bar](#var-health-pool-bar) |  |
| `PoolBarUI` | [resource_pool_bar](#var-resource-pool-bar) |  |
| `PartyManager` | [party_manager](#var-party-manager) |  |

## Methods

| | |
|---|---|
| `void` | [initialize_ui](#method-initialize-ui)( `system_hub: GameHost.SystemHub` ) |
| `void` | [setup_frames](#method-setup-frames)( `player: Entity` ) |
| `void` | [set_border_state](#method-set-border-state)( `is_current: bool, is_selected: bool` ) |

## Signals

### effect_tooltip_requested( effect: EffectInstance ) {#signal-effect-tooltip-requested}

### hide_tooltip( force_hide: bool ) {#signal-hide-tooltip}

## Property descriptions

### PackedScene pool_bar_scene {#prop-pool-bar-scene}

Export variable to set the player slot in the Inspector

## Variable descriptions

### int player_slot {#var-player-slot}

The player that this frame represents

### Player frames_player {#var-frames-player}

*No description yet.*

### Array[Aura] active_auras {#var-active-auras}

Arrays to store active auras and debuffs

### Array[Aura] debuff_slots {#var-debuff-slots}

*No description yet.*

### PoolBarUI health_pool_bar {#var-health-pool-bar}

Pool bar references

### PoolBarUI resource_pool_bar {#var-resource-pool-bar}

*No description yet.*

### PartyManager party_manager {#var-party-manager}

Party Manager Ref

## Method descriptions

### void initialize_ui( system_hub: GameHost.SystemHub ) {#method-initialize-ui}

*No description yet.*

### void setup_frames( player: Entity ) {#method-setup-frames}

*No description yet.*

### void set_border_state( is_current: bool, is_selected: bool ) {#method-set-border-state}

Set party frame border highlighting

