<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# Nameplate

**Inherits:** `MarginContainer`

This class manages the display of entity nameplates in the game, showing health, cast bars, and status effects (buffs/debuffs). Uses the modular CastBar class for casting display.

## Description

Key features:

- Displays entity name and dynamically created health pool bars
- Shows active buffs and debuffs
- Manages cast bar for abilities using modular CastBar component
- Updates dynamically based on entity state
- Configurable through game settings

## Properties

| | | |
|---|---|---|
| `PackedScene` | [nameplate_pool_bar_scene](#prop-nameplate-pool-bar-scene) |  |

## Variables

| | | |
|---|---|---|
| `Node3D` | [nameplate_owner](#var-nameplate-owner) |  |
| `bool` | [is_interactable_nameplate](#var-is-interactable-nameplate) | `false` |
| `Array[Aura]` | [active_auras](#var-active-auras) |  |
| `Array[Aura]` | [buff_slots](#var-buff-slots) |  |
| `Array[Aura]` | [debuff_slots](#var-debuff-slots) |  |
| `bool` | [settings_visible](#var-settings-visible) | `true` |
| `bool` | [combat_visible](#var-combat-visible) | `true` |
| `bool` | [lod_visible](#var-lod-visible) | `true` |
| `Array[PoolBarUI]` | [health_pool_bars](#var-health-pool-bars) | `[]` |
| `PartyManager` | [party_manager](#var-party-manager) |  |

## Methods

| | |
|---|---|
| `void` | [nameplate_setup](#method-nameplate-setup)( `owner: Variant, p_party_manager: PartyManager` ) |
| `void` | [set_nameplate_border_colour](#method-set-nameplate-border-colour)( `state: int` ) |

## Signals

### effect_tooltip_requested( effect: EffectInstance ) {#signal-effect-tooltip-requested}

Tooltip signals - emit upward to NameplateManager

### hide_tooltip( force_hide: bool ) {#signal-hide-tooltip}

Asks the interface to hide the tooltip (force hides it at once).

## Property descriptions

### PackedScene nameplate_pool_bar_scene {#prop-nameplate-pool-bar-scene}

Scene preload for nameplate pool bars

## Variable descriptions

### Node3D nameplate_owner {#var-nameplate-owner}

The entity that owns the nameplate (null for interactable nameplates)

### bool is_interactable_nameplate = false {#var-is-interactable-nameplate}

Whether this is an interactable nameplate (simplified display)

### Array[Aura] active_auras {#var-active-auras}

Array of active auras

### Array[Aura] buff_slots {#var-buff-slots}

Buff Slots array

### Array[Aura] debuff_slots {#var-debuff-slots}

Debuff Slots array

### bool settings_visible = true {#var-settings-visible}

Settings-based visibility state

### bool combat_visible = true {#var-combat-visible}

Combat-state visibility flag

### bool lod_visible = true {#var-lod-visible}

LOD visibility flag

### Array[PoolBarUI] health_pool_bars = [] {#var-health-pool-bars}

Pool bar arrays - only health bars now

### PartyManager party_manager {#var-party-manager}

SystemRefs

## Method descriptions

### void nameplate_setup( owner: Variant, p_party_manager: PartyManager ) {#method-nameplate-setup}

Set up the nameplate with an owner (Entity or InteractableObject) and initialize all UI elements

### void set_nameplate_border_colour( state: int ) {#method-set-nameplate-border-colour}

Set nameplate border highlighting

