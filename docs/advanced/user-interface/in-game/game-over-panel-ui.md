<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# GameOverPanelUI

**Inherits:** [PanelUI](/advanced/user-interface/panels/panel-ui) < [Control](https://docs.godotengine.org/en/stable/classes/class_control.html)

GameOverPanelUI displays death/game over UI based on the game's death behavior setting. Handles GAME_OVER, RESPAWN_CHECKPOINT, and PERMADEATH scenarios.

## Variables

| | | |
|---|---|---|
| `Player` | [dead_player](#var-dead-player) | `null` |
| `Marker3D` | [respawn_point](#var-respawn-point) | `null` |
| `GameplayConfig.DeathBehavior` | [current_death_behavior](#var-current-death-behavior) |  |

## Methods

| | |
|---|---|
| `void` | [initialize_ui](#method-initialize-ui)( `system_hub: GameHost.SystemHub` ) |
| `void` | [show_game_over](#method-show-game-over)( `death_behavior: GameplayConfig.DeathBehavior, player: Player` ) |
| `void` | [show_respawn_prompt](#method-show-respawn-prompt)( `player: Player, checkpoint: Marker3D` ) |

## Signals

### respawn_confirmed( player: Player, respawn_point: Marker3D ) {#signal-respawn-confirmed}

Emitted when player chooses to respawn

### load_game_requested() {#signal-load-game-requested}

Emitted when player chooses to load a save

### return_to_main_menu_requested() {#signal-return-to-main-menu-requested}

Emitted when player chooses to return to main menu

### panel_closed() {#signal-panel-closed}

Emitted when the panel is closed

## Variable descriptions

### Player dead_player = null {#var-dead-player}

The player that died (for respawn scenarios)

### Marker3D respawn_point = null {#var-respawn-point}

The respawn point to use

### GameplayConfig.DeathBehavior current_death_behavior {#var-current-death-behavior}

Current death behavior being displayed

## Method descriptions

### void initialize_ui( system_hub: GameHost.SystemHub ) {#method-initialize-ui}

*Overrides this function of [PanelUI](/advanced/user-interface/panels/panel-ui).*

### void show_game_over( death_behavior: GameplayConfig.DeathBehavior, player: Player ) {#method-show-game-over}

Show game over screen (for GAME_OVER and PERMADEATH)

### void show_respawn_prompt( player: Player, checkpoint: Marker3D ) {#method-show-respawn-prompt}

Show respawn prompt (for RESPAWN_CHECKPOINT)

