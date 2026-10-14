<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# PartyFramesUI

**Inherits:** [HUDUIElement](/advanced/user-interface/hud/hudui-element) < [Control](https://docs.godotengine.org/en/stable/classes/class_control.html)

This class manages the display of party frames and tracked abilities for all party members. It handles the setup, visibility, and updates of party member frames and their associated ability tracking.

## Description

Key features:

- Manages frames for up to 5 party members
- Updates current player selection indicator

## Variables

| | | |
|---|---|---|
| `Array[PartyFrame]` | [party_frames](#var-party-frames) |  |

## Methods

| | |
|---|---|
| `void` | [initialize_ui](#method-initialize-ui)( `p_system_hub: GameHost.SystemHub` ) |

## Variable descriptions

### Array[PartyFrame] party_frames {#var-party-frames}

Array to hold references to individual party member frames

## Method descriptions

### void initialize_ui( p_system_hub: GameHost.SystemHub ) {#method-initialize-ui}

Called when the node enters the scene tree for the first time

