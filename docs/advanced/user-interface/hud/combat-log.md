<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# CombatLog

**Inherits:** [HUDUIElement](/advanced/user-interface/hud/hudui-element) < [Control](https://docs.godotengine.org/en/stable/classes/class_control.html)

This class manages the combat log interface, displaying various types of combat information.

## Description

Key features:

- Displays a full combat log and separate logs for damage taken and damage dealt
- Processes batched log entries from CombatLogManager
- Categorizes damage entries based on whether they're done by or to players
- Automatically scrolls logs to show the most recent entries

## Variables

| | | |
|---|---|---|
| `PartyManager` | [party_manager](#var-party-manager) |  |

## Methods

| | |
|---|---|
| `void` | [initialize_ui](#method-initialize-ui)( `system_hub: GameHost.SystemHub` ) |

## Variable descriptions

### PartyManager party_manager {#var-party-manager}

SystemRefs

## Method descriptions

### void initialize_ui( system_hub: GameHost.SystemHub ) {#method-initialize-ui}

Called when the node enters the scene tree for the first time

