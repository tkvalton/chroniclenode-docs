<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# DebugMenu

**Inherits:** [Control](https://docs.godotengine.org/en/stable/classes/class_control.html)

Comprehensive debug menu for testing and debugging game systems Provides access to world transitions, time control, player manipulation, spawning, quest triggers, and more

## Variables

| | | |
|---|---|---|
| `PanelContainer` | [main_panel](#var-main-panel) |  |
| `TabContainer` | [tab_container](#var-tab-container) |  |
| `Button` | [close_button](#var-close-button) |  |
| `Control` | [world_tab](#var-world-tab) |  |
| `Control` | [time_tab](#var-time-tab) |  |
| `Control` | [player_tab](#var-player-tab) |  |
| `Control` | [spawn_tab](#var-spawn-tab) |  |
| `Control` | [quest_tab](#var-quest-tab) |  |
| `Control` | [crafting_tab](#var-crafting-tab) |  |
| `Control` | [effects_tab](#var-effects-tab) |  |
| `Control` | [system_tab](#var-system-tab) |  |
| `GameHost.SystemHub` | [system_hub](#var-system-hub) |  |

## Methods

| | |
|---|---|
| `void` | [initialize](#method-initialize)( `p_system_hub: GameHost.SystemHub` ) |
| `void` | [toggle_visibility](#method-toggle-visibility)() |

## Signals

### menu_closed() {#signal-menu-closed}

========== SIGNALS ==========

## Variable descriptions

### PanelContainer main_panel {#var-main-panel}

========== UI REFERENCES ==========

### TabContainer tab_container {#var-tab-container}

The tabs of the debug menu.

### Button close_button {#var-close-button}

The button that closes the menu.

### Control world_tab {#var-world-tab}

Tab content containers

### Control time_tab {#var-time-tab}

The tab for the game time.

### Control player_tab {#var-player-tab}

The tab for the player.

### Control spawn_tab {#var-spawn-tab}

The tab for spawning.

### Control quest_tab {#var-quest-tab}

The tab for quests.

### Control crafting_tab {#var-crafting-tab}

The tab for crafting.

### Control effects_tab {#var-effects-tab}

The tab for effects.

### Control system_tab {#var-system-tab}

The tab for the systems.

### GameHost.SystemHub system_hub {#var-system-hub}

========== SYSTEM REFERENCES ==========

## Method descriptions

### void initialize( p_system_hub: GameHost.SystemHub ) {#method-initialize}

Builds the tabs with the hub of the game systems.

### void toggle_visibility() {#method-toggle-visibility}

Shows the menu, or hides it.

