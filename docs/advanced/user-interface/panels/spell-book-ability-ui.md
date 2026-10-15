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
| `float` | [long_press_duration](#var-long-press-duration) | `0.1  # in seconds, matching original timer wait_time` |

## Methods

| | |
|---|---|
| `void` | [setup_spellbook_ability](#method-setup-spellbook-ability)( `ability: AbilityInstance` ) |

## Signals

### ability_tooltip_requested( ability: AbilityInstance ) {#signal-ability-tooltip-requested}

### hide_tooltip( force_hide: bool ) {#signal-hide-tooltip}

### ability_drag_requested( ability: AbilityInstance ) {#signal-ability-drag-requested}

## Variable descriptions

### AbilityInstance current_ability {#var-current-ability}

*No description yet.*

### bool is_mouse_held = false {#var-is-mouse-held}

*No description yet.*

### float press_start_time = 0.0 {#var-press-start-time}

*No description yet.*

### float long_press_duration = 0.1  # in seconds, matching original timer wait_time {#var-long-press-duration}

*No description yet.*

## Method descriptions

### void setup_spellbook_ability( ability: AbilityInstance ) {#method-setup-spellbook-ability}

*No description yet.*

