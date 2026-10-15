<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ActiveEffectsDisplayUI

**Inherits:** `MarginContainer`

Active Effects Display UI - Shows all active effects on the current player Gets initial data from GameHost.party_manager.current_player, then uses effects component signals for updates Uses color coding: Green for buffs, Red for debuffs, Grey/White for neutral effects No stored references needed - connects once to signals at setup Refactored to emit effect tooltip signals

## Variables

| | | |
|---|---|---|
| `Array[Control]` | [effect_ui_components](#var-effect-ui-components) | `[]` |
| `Dictionary` | [effect_ui_lookup](#var-effect-ui-lookup) | `{}` |

## Methods

| | |
|---|---|
| `void` | [initialize_display](#method-initialize-display)( `current_player: Player` ) |
| `void` | [populate_effects_display](#method-populate-effects-display)( `effects_component: EffectsComponent` ) |
| `void` | [clear_effect_components](#method-clear-effect-components)() |
| `void` | [clear_effects_display](#method-clear-effects-display)() |

## Signals

### effect_tooltip_requested( effect: EffectInstance ) {#signal-effect-tooltip-requested}

Signals for effect tooltips

### hide_tooltip( force_hide: bool ) {#signal-hide-tooltip}

Asks the interface to hide the tooltip (force hides it at once).

## Constants

- `Color` **COLOR_BUFF** = `Color.GREEN` - Effect type colors
- `Color` **COLOR_DEBUFF** = `Color.RED` - The color of the effects that harm.
- `Color` **COLOR_NEUTRAL** = `Color.WHITE` - The color of the effects that are neither good nor bad.

## Variable descriptions

### Array[Control] effect_ui_components = [] {#var-effect-ui-components}

Arrays to keep track of created effect UI components

### Dictionary effect_ui_lookup =  {#var-effect-ui-lookup}

effect_instance -&gt; UI component

## Method descriptions

### void initialize_display( current_player: Player ) {#method-initialize-display}

Initialize the effects display with current player data

### void populate_effects_display( effects_component: EffectsComponent ) {#method-populate-effects-display}

Populate the effects display with current active effects

### void clear_effect_components() {#method-clear-effect-components}

Clear all effect UI components

### void clear_effects_display() {#method-clear-effects-display}

Clear the effects display when no character is available

