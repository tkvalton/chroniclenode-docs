<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# ExperienceBar

**Inherits:** `MarginContainer`

The experience bar of the action bar: a progress bar and a label that follow the experience of its player (`entity_xp_changed`).

## Variables

| | | |
|---|---|---|
| `Player` | [bars_player](#var-bars-player) |  |

## Methods

| | |
|---|---|
| `void` | [setup](#method-setup)() |
| `void` | [update_xp](#method-update-xp)( `player: Player, experience: int, experience_requirement: int` ) |

## Variable descriptions

### Player bars_player {#var-bars-player}

The player whose experience the bar shows.

## Method descriptions

### void setup() {#method-setup}

Connects the bar to the experience of its player.

### void update_xp( player: Player, experience: int, experience_requirement: int ) {#method-update-xp}

Updates the bar: the player, the experience and what the next level needs.

