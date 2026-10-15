<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# CharacterPanelUI

**Inherits:** [PanelUI](/advanced/user-interface/panels/panel-ui) < [Control](https://docs.godotengine.org/en/stable/classes/class_control.html)

Character Panel UI - A fully self-sufficient character information interface Gets initial data from party_manager.current_player, then relies on signals for updates No stored references needed - signals handle everything! Refactored to forward tooltip signals from stats and effects displays

## Properties

| | | |
|---|---|---|
| `CharacterBackdropScene` | [character_backdrop](#prop-character-backdrop) | `%CharacterBackdrop` |

## Variables

| | | |
|---|---|---|
| `DisplayMode` | [current_display_mode](#var-current-display-mode) | `DisplayMode.STATS` |

## Methods

| | |
|---|---|
| `void` | [initialize_ui](#method-initialize-ui)( `p_system_hub: GameHost.SystemHub` ) |

## Enumerations

### enum DisplayMode {#enum-displaymode}

The options of display mode: stats, active effects.

- **STATS** = `0`
- **ACTIVE_EFFECTS** = `1`

## Property descriptions

### CharacterBackdropScene character_backdrop = %CharacterBackdrop {#prop-character-backdrop}

The 3D scene that shows the character.

## Variable descriptions

### DisplayMode current_display_mode = DisplayMode.STATS {#var-current-display-mode}

State tracking

## Method descriptions

### void initialize_ui( p_system_hub: GameHost.SystemHub ) {#method-initialize-ui}

Sets the part up with the hub of the game systems: connects the signals it listens to and fills it.

