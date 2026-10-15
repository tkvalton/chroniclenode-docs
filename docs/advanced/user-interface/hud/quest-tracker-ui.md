<!-- generated from the code comments by scripts/scan-classes.mjs: change the comments in the code, not this page -->

# QuestTrackerUI

**Inherits:** [HUDUIElement](/advanced/user-interface/hud/hudui-element) < [Control](https://docs.godotengine.org/en/stable/classes/class_control.html)

QuestTrackerUI manages the on-screen display of tracked quests and their objectives. Displays active tracked quests in a vertical list with animated additions and removals.

## Description

Key features:

- Dynamically adds/removes quest displays when tracking changes
- Shows quest objectives and completion status
- Animated quest appearance and removal
- Updates objectives in real-time as they're completed

## Properties

| | | |
|---|---|---|
| `PackedScene` | [tracked_quest](#prop-tracked-quest) |  |

## Variables

| | | |
|---|---|---|
| `Dictionary` | [tracked_quests](#var-tracked-quests) | `{} # quest_id: int -> QuestTrackerQuestUI` |

## Methods

| | |
|---|---|
| `void` | [initialize_ui](#method-initialize-ui)( `p_system_hub: GameHost.SystemHub` ) |

## Property descriptions

### PackedScene tracked_quest {#prop-tracked-quest}

Scene to instantiate for each tracked quest display

## Variable descriptions

### Dictionary tracked_quests =  # quest_id: int -&gt; QuestTrackerQuestUI {#var-tracked-quests}

Dictionary mapping quest IDs to their UI instances

## Method descriptions

### void initialize_ui( p_system_hub: GameHost.SystemHub ) {#method-initialize-ui}

Sets the part up with the hub of the game systems: connects the signals it listens to and fills it.

