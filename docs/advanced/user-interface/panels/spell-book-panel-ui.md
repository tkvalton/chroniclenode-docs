<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# SpellBookPanelUI

**Inherits:** [PanelUI](/advanced/user-interface/panels/panel-ui) < [Control](https://docs.godotengine.org/en/stable/classes/class_control.html)

Spell Book Panel UI - Container for abilities and skill tree Follows the new architecture pattern: setup once, signals handle updates Contains AbilityPanelUI for spells and future SkillTree panel

## Variables

| | | |
|---|---|---|
| `DisplayMode` | [current_display_mode](#var-current-display-mode) | `DisplayMode.ABILITIES` |

## Methods

| | |
|---|---|
| `void` | [initialize_ui](#method-initialize-ui)( `system_hub: GameHost.SystemHub` ) |
| `void` | [set_display_mode](#method-set-display-mode)( `mode: DisplayMode` ) |
| `void` | [show_abilities](#method-show-abilities)() |
| `void` | [show_skills](#method-show-skills)() |
| `void` | [refresh_display](#method-refresh-display)() |

## Enumerations

### enum DisplayMode {#enum-displaymode}

State tracking for sub-panel visibility

- **ABILITIES** = `0`
- **SKILL_TREE** = `1`

## Variable descriptions

### DisplayMode current_display_mode = DisplayMode.ABILITIES {#var-current-display-mode}

What the book shows: the abilities or the skill tree.

## Method descriptions

### void initialize_ui( system_hub: GameHost.SystemHub ) {#method-initialize-ui}

Sets the part up with the hub of the game systems: connects the signals it listens to and fills it.

### void set_display_mode( mode: DisplayMode ) {#method-set-display-mode}

Method to manually set the display mode

### void show_abilities() {#method-show-abilities}

Public methods for external access

### void show_skills() {#method-show-skills}

Shows the skill tree.

### void refresh_display() {#method-refresh-display}

Refresh the current display

