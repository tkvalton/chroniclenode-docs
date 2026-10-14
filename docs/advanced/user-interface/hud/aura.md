<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# Aura

**Inherits:** [Control](https://docs.godotengine.org/en/stable/classes/class_control.html)

Aura represents and manages a single status effect (buff or debuff) in the game's user interface. It handles the visual representation of effects, including icons, timers, and stack counts.

## Description

Key features:

- Displays effect icons with dynamic textures and colored borders
- Manages and updates effect durations with a timer display
- Handles stack count for stackable effects
- Provides tooltip functionality for effect information
- Supports updating and resetting of aura information

This class is typically used within nameplates, or frames to display multiple active effects on an entity. It interacts with the Effect system to represent the current state of status effects visually to the player.

## Variables

| | | |
|---|---|---|
| `EffectInstance` | [current_effect](#var-current-effect) |  |
| `Timer` | [current_effect_timer](#var-current-effect-timer) |  |
| `bool` | [has_timer](#var-has-timer) | `false` |

## Methods

| | |
|---|---|
| `void` | [set_aura](#method-set-aura)( `effect: EffectInstance` ) |
| `void` | [update](#method-update)( `effect: EffectInstance` ) |
| `void` | [reset_aura_icon](#method-reset-aura-icon)() |

## Signals

### aura_reset( aura: Aura ) {#signal-aura-reset}

Signal emitted when this aura is reset/cleared

### effect_tooltip_requested( effect: EffectInstance ) {#signal-effect-tooltip-requested}

Signal emitted when mouse enters the aura (for tooltip)

### hide_tooltip( force_hide: bool ) {#signal-hide-tooltip}

Signal emitted when mouse exits the aura (to hide tooltip)

## Variable descriptions

### EffectInstance current_effect {#var-current-effect}

The current effect of the Aura

### Timer current_effect_timer {#var-current-effect-timer}

The timer of the current_effect

### bool has_timer = false {#var-has-timer}

Has time check

## Method descriptions

### void set_aura( effect: EffectInstance ) {#method-set-aura}

Sets up the Aura with the given effect instance

### void update( effect: EffectInstance ) {#method-update}

Updates the Aura with new effect information

### void reset_aura_icon() {#method-reset-aura-icon}

Resets the Aura to its default state

