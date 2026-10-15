<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# SpellBookAbilityUI

**Inherits:** `MarginContainer`

One ability in the spellbook: its icon and name. It asks for the tooltip on hover (`ability_tooltip_requested`) and for a drag onto the action bar (`ability_drag_requested`).

## Variables

| | | |
|---|---|---|
| `AbilityInstance` | [current_ability](#var-current-ability) |  |
| `bool` | [is_mouse_held](#var-is-mouse-held) | `false` |
| `float` | [press_start_time](#var-press-start-time) | `0.0` |
| `float` | [long_press_duration](#var-long-press-duration) | `0.1` |

## Methods

| | |
|---|---|
| `void` | [setup_spellbook_ability](#method-setup-spellbook-ability)( `ability: AbilityInstance` ) |

## Signals

### ability_tooltip_requested( ability: AbilityInstance ) {#signal-ability-tooltip-requested}

========== SIGNALS ==========

### hide_tooltip( force_hide: bool ) {#signal-hide-tooltip}

Asks the interface to hide the tooltip (force hides it at once).

### ability_drag_requested( ability: AbilityInstance ) {#signal-ability-drag-requested}

Asks the interface to start dragging an ability (onto the action bar).

## Variable descriptions

### AbilityInstance current_ability {#var-current-ability}

The ability on this slot

### bool is_mouse_held = false {#var-is-mouse-held}

Flag to track if the mouse button is being held down

### float press_start_time = 0.0 {#var-press-start-time}

Real-time tracking for long press

### float long_press_duration = 0.1 {#var-long-press-duration}

in seconds, matching original timer wait_time

## Method descriptions

### void setup_spellbook_ability( ability: AbilityInstance ) {#method-setup-spellbook-ability}

Setup the spellbook ability

