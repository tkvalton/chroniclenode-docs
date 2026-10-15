<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# BreathBarUI

**Inherits:** [HUDUIElement](/advanced/user-interface/hud/hudui-element) < [Control](https://docs.godotengine.org/en/stable/classes/class_control.html)

The breath of the player that is played: a bar that shows while the breath is not full (under water, or just back from it) and goes again when it is. It turns the color of `drowning_color` while the player drowns. The breath is held where a movement volume asks for it; the duration is in the Gameplay Config.

## Properties

| | | |
|---|---|---|
| `bool` | [hide_when_full](#prop-hide-when-full) | `true` |
| `Color` | [drowning_color](#prop-drowning-color) | `Color(1.0, 0.35, 0.3)` |

## Methods

| | |
|---|---|
| `void` | [initialize_ui](#method-initialize-ui)( `p_system_hub: GameHost.SystemHub` ) |

## Property descriptions

### bool hide_when_full = true {#prop-hide-when-full}

Show the bar only while the breath is not full

### Color drowning_color = Color(1.0, 0.35, 0.3) {#prop-drowning-color}

The color of the bar while the player has no breath left and drowns

## Method descriptions

### void initialize_ui( p_system_hub: GameHost.SystemHub ) {#method-initialize-ui}

Sets the part up with the hub of the game systems: connects the signals it listens to and fills it.

